"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _immutable = require("immutable");
var _curry = _interopRequireDefault(require("lodash/curry"));
var _flow = _interopRequireDefault(require("lodash/flow"));
var _isString = _interopRequireDefault(require("lodash/isString"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function isAbortControllerSupported() {
  if (typeof window !== 'undefined') {
    return !!window.AbortController;
  }
  return false;
}
const timeout = 60;
function fetchWithTimeout(input, init) {
  if (init && init.signal || !isAbortControllerSupported()) {
    return fetch(input, init);
  }
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout * 1000);
  return fetch(input, _objectSpread(_objectSpread({}, init), {}, {
    signal: controller.signal
  })).then(res => {
    clearTimeout(timeoutId);
    return res;
  }).catch(e => {
    if (e.name === 'AbortError' || e.name === 'DOMException') {
      throw new Error(`Request timed out after ${timeout} seconds`);
    }
    throw e;
  });
}
function decodeParams(paramsString) {
  return (0, _immutable.List)(paramsString.split('&')).map(s => (0, _immutable.List)(s.split('=')).map(decodeURIComponent)).update(_immutable.Map);
}
function fromURL(wholeURL) {
  const [url, allParamsString] = wholeURL.split('?');
  return (0, _immutable.Map)(_objectSpread({
    url
  }, allParamsString ? {
    params: decodeParams(allParamsString)
  } : {}));
}
function fromFetchArguments(wholeURL, options) {
  return fromURL(wholeURL).merge((options ? (0, _immutable.fromJS)(options) : (0, _immutable.Map)()).remove('url').remove('params'));
}
function encodeParams(params) {
  return params.entrySeq().map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
}
function toURL(req) {
  return `${req.get('url')}${req.get('params') ? `?${encodeParams(req.get('params'))}` : ''}`;
}
function toFetchArguments(req) {
  return [toURL(req), req.remove('url').remove('params').toJS()];
}
function maybeRequestArg(req) {
  if ((0, _isString.default)(req)) {
    return fromURL(req);
  }
  if (req) {
    return (0, _immutable.fromJS)(req);
  }
  return (0, _immutable.Map)();
}
function ensureRequestArg(func) {
  return req => func(maybeRequestArg(req));
}
function ensureRequestArg2(func) {
  return (arg, req) => func(arg, maybeRequestArg(req));
}

// This actually performs the built request object
const performRequest = ensureRequestArg(req => {
  const args = toFetchArguments(req);
  return fetchWithTimeout(...args);
});

// Each of the following functions takes options and returns another
// function that performs the requested action on a request.
const getCurriedRequestProcessor = (0, _flow.default)([ensureRequestArg2, _curry.default]);
function getPropSetFunction(path) {
  return getCurriedRequestProcessor((val, req) => req.setIn(path, val));
}
function getPropMergeFunction(path) {
  return getCurriedRequestProcessor((obj, req) => req.updateIn(path, (p = (0, _immutable.Map)()) => p.merge(obj)));
}
const withMethod = getPropSetFunction(['method']);
const withBody = getPropSetFunction(['body']);
const withNoCache = getPropSetFunction(['cache'])('no-cache');
const withParams = getPropMergeFunction(['params']);
const withHeaders = getPropMergeFunction(['headers']);

// withRoot sets a root URL, unless the URL is already absolute
const absolutePath = new RegExp('^(?:[a-z]+:)?//', 'i');
const withRoot = getCurriedRequestProcessor((root, req) => req.update('url', p => {
  if (absolutePath.test(p)) {
    return p;
  }
  return root && p && p[0] !== '/' && root[root.length - 1] !== '/' ? `${root}/${p}` : `${root}${p}`;
}));
var _default = exports.default = {
  toURL,
  fromURL,
  fromFetchArguments,
  performRequest,
  withMethod,
  withBody,
  withHeaders,
  withParams,
  withRoot,
  withNoCache,
  fetchWithTimeout
};