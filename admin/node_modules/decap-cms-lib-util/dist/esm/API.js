"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviewState = void 0;
exports.apiRequest = apiRequest;
exports.endpointConstants = exports.apiRoots = void 0;
exports.getDefaultBranchName = getDefaultBranchName;
exports.getPreviewStatus = getPreviewStatus;
exports.isPreviewContext = isPreviewContext;
exports.parseResponse = parseResponse;
exports.readFile = readFile;
exports.readFileMetadata = readFileMetadata;
exports.requestWithBackoff = requestWithBackoff;
exports.throwOnConflictingBranches = throwOnConflictingBranches;
var _asyncLock = require("./asyncLock");
var _unsentRequest = _interopRequireDefault(require("./unsentRequest"));
var _APIError = _interopRequireDefault(require("./APIError"));
const _excluded = ["token", "backend"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }
  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }
  return ExtendableBuiltin;
}
class RateLimitError extends _extendableBuiltin(Error) {
  constructor(message, resetSeconds) {
    super(message);
    _defineProperty(this, "resetSeconds", void 0);
    if (resetSeconds < 0) {
      this.resetSeconds = 1;
    } else if (resetSeconds > 60 * 60) {
      this.resetSeconds = 60 * 60;
    } else {
      this.resetSeconds = resetSeconds;
    }
  }
}
async function parseJsonResponse(response) {
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json);
  }
  return json;
}
function parseResponse(response) {
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/json/)) {
    return parseJsonResponse(response);
  }
  const textPromise = response.text().then(text => {
    if (!response.ok) return Promise.reject(text);
    return text;
  });
  return textPromise;
}
async function requestWithBackoff(api, req, attempt = 1) {
  if (api.rateLimiter) {
    await api.rateLimiter.acquire();
  }
  try {
    const builtRequest = await api.buildRequest(req);
    const requestFunction = api.requestFunction || _unsentRequest.default.performRequest;
    const response = await requestFunction(builtRequest);
    if (response.status === 429) {
      // GitLab/Bitbucket too many requests
      const text = await response.text().catch(() => 'Too many requests');
      throw new Error(text);
    } else if (response.status === 403) {
      // GitHub too many requests
      const json = await response.json().catch(() => ({
        message: ''
      }));
      if (json.message.match('API rate limit exceeded')) {
        const now = new Date();
        const nextWindowInSeconds = response.headers.has('X-RateLimit-Reset') ? parseInt(response.headers.get('X-RateLimit-Reset')) : now.getTime() / 1000 + 60;
        throw new RateLimitError(json.message, nextWindowInSeconds);
      }
      response.json = () => Promise.resolve(json);
    }
    return response;
  } catch (err) {
    if (attempt > 5 || err.message === "Can't refresh access token when using implicit auth") {
      throw err;
    } else {
      if (!api.rateLimiter) {
        const timeout = err.resetSeconds || attempt * attempt;
        console.log(`Pausing requests for ${timeout} ${attempt === 1 ? 'second' : 'seconds'} due to fetch failures:`, err.message);
        api.rateLimiter = (0, _asyncLock.asyncLock)();
        api.rateLimiter.acquire();
        setTimeout(() => {
          var _api$rateLimiter;
          (_api$rateLimiter = api.rateLimiter) === null || _api$rateLimiter === void 0 ? void 0 : _api$rateLimiter.release();
          api.rateLimiter = undefined;
          console.log(`Done pausing requests`);
        }, 1000 * timeout);
      }
      return requestWithBackoff(api, req, attempt + 1);
    }
  }
}

// Options is an object which contains all the standard network request properties
// for modifying HTTP requests and may contains `params` property

// RequestConfig contains all the standard properties of a Request object and
// several custom properties:
// - "headers" property is an object whose properties and values are string types
// - `token` property to allow passing tokens for users using a private repo.
// - `params` property for customizing response
// - `backend`(compulsory) to specify which backend to be used: Github, Gitlab etc.

const apiRoots = exports.apiRoots = {
  github: 'https://api.github.com',
  gitlab: 'https://gitlab.com/api/v4',
  bitbucket: 'https://api.bitbucket.org/2.0'
};
const endpointConstants = exports.endpointConstants = {
  singleRepo: {
    bitbucket: '/repositories',
    github: '/repos',
    gitlab: '/projects'
  }
};
const api = {
  buildRequest(req) {
    return req;
  }
};
function constructUrlWithParams(url, params) {
  if (params) {
    const paramList = [];
    for (const key in params) {
      paramList.push(`${key}=${encodeURIComponent(params[key])}`);
    }
    if (paramList.length) {
      url += `?${paramList.join('&')}`;
    }
  }
  return url;
}
async function constructRequestHeaders(headerConfig) {
  const {
    token,
    headers
  } = headerConfig;
  const baseHeaders = _objectSpread({
    'Content-Type': 'application/json; charset=utf-8'
  }, headers);
  if (token) {
    baseHeaders['Authorization'] = `Bearer ${token}`;
  }
  return Promise.resolve(baseHeaders);
}
function handleRequestError(error, responseStatus, backend) {
  throw new _APIError.default(error.message, responseStatus, backend);
}
async function apiRequest(path, config, parser = response => parseResponse(response)) {
  var _config$apiRoot;
  const {
      token,
      backend
    } = config,
    props = _objectWithoutProperties(config, _excluded);
  const options = _objectSpread({
    cache: 'no-cache'
  }, props);
  const headers = await constructRequestHeaders({
    headers: options.headers || {},
    token
  });
  const baseUrl = (_config$apiRoot = config.apiRoot) !== null && _config$apiRoot !== void 0 ? _config$apiRoot : apiRoots[backend];
  const url = constructUrlWithParams(`${baseUrl}${path}`, options.params);
  let responseStatus = 500;
  try {
    const req = _unsentRequest.default.fromFetchArguments(url, _objectSpread(_objectSpread({}, options), {}, {
      headers
    }));
    const response = await requestWithBackoff(api, req);
    responseStatus = response.status;
    const parsedResponse = await parser(response);
    return parsedResponse;
  } catch (error) {
    return handleRequestError(error, responseStatus, backend);
  }
}
async function getDefaultBranchName(configs) {
  let apiPath;
  const {
    token,
    backend,
    repo,
    apiRoot
  } = configs;
  switch (backend) {
    case 'gitlab':
      {
        apiPath = `/projects/${encodeURIComponent(repo)}`;
        break;
      }
    case 'bitbucket':
      {
        apiPath = `/repositories/${repo}`;
        break;
      }
    default:
      {
        apiPath = `/repos/${repo}`;
      }
  }
  const repoInfo = await apiRequest(apiPath, {
    token,
    backend,
    apiRoot
  });
  let defaultBranchName;
  if (backend === 'bitbucket') {
    const {
      mainbranch: {
        name
      }
    } = repoInfo;
    defaultBranchName = name;
  } else {
    const {
      default_branch
    } = repoInfo;
    defaultBranchName = default_branch;
  }
  return defaultBranchName;
}
async function readFile(id, fetchContent, localForage, isText) {
  const key = id ? isText ? `gh.${id}` : `gh.${id}.blob` : null;
  const cached = key ? await localForage.getItem(key) : null;
  if (cached) {
    return cached;
  }
  const content = await fetchContent();
  if (key) {
    await localForage.setItem(key, content);
  }
  return content;
}
function getFileMetadataKey(id) {
  return `gh.${id}.meta`;
}
async function readFileMetadata(id, fetchMetadata, localForage) {
  const key = id ? getFileMetadataKey(id) : null;
  const cached = key && (await localForage.getItem(key));
  if (cached) {
    return cached;
  }
  const metadata = await fetchMetadata();
  if (key) {
    await localForage.setItem(key, metadata);
  }
  return metadata;
}

/**
 * Keywords for inferring a status that will provide a deploy preview URL.
 */
const PREVIEW_CONTEXT_KEYWORDS = ['deploy'];

/**
 * Check a given status context string to determine if it provides a link to a
 * deploy preview. Checks for an exact match against `previewContext` if given,
 * otherwise checks for inclusion of a value from `PREVIEW_CONTEXT_KEYWORDS`.
 */
function isPreviewContext(context, previewContext) {
  if (previewContext) {
    return context === previewContext;
  }
  return PREVIEW_CONTEXT_KEYWORDS.some(keyword => context.includes(keyword));
}
let PreviewState = exports.PreviewState = /*#__PURE__*/function (PreviewState) {
  PreviewState["Other"] = "other";
  PreviewState["Success"] = "success";
  return PreviewState;
}({});
/**
 * Retrieve a deploy preview URL from an array of statuses. By default, a
 * matching status is inferred via `isPreviewContext`.
 */
function getPreviewStatus(statuses, previewContext) {
  return statuses.find(({
    context
  }) => {
    return isPreviewContext(context, previewContext);
  });
}
function getConflictingBranches(branchName) {
  // for cms/posts/post-1, conflicting branches are cms/posts, cms
  const parts = branchName.split('/');
  parts.pop();
  const conflictingBranches = parts.reduce((acc, _, index) => {
    acc = [...acc, parts.slice(0, index + 1).join('/')];
    return acc;
  }, []);
  return conflictingBranches;
}
async function throwOnConflictingBranches(branchName, getBranch, apiName) {
  const possibleConflictingBranches = getConflictingBranches(branchName);
  const conflictingBranches = await Promise.all(possibleConflictingBranches.map(b => getBranch(b).then(b => b.name).catch(() => '')));
  const conflictingBranch = conflictingBranches.filter(Boolean)[0];
  if (conflictingBranch) {
    throw new _APIError.default(`Failed creating branch '${branchName}' since there is already a branch named '${conflictingBranch}'. Please delete the '${conflictingBranch}' branch and try again`, 500, apiName);
  }
}