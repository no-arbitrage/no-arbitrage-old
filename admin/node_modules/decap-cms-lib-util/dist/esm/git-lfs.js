"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPointerFile = createPointerFile;
exports.getLargeMediaFilteredMediaFiles = getLargeMediaFilteredMediaFiles;
exports.getLargeMediaPatternsFromGitAttributesFile = void 0;
exports.getPointerFileForMediaFileObj = getPointerFileForMediaFileObj;
exports.parsePointerFile = void 0;
var _map2 = _interopRequireDefault(require("lodash/fp/map"));
var _fromPairs2 = _interopRequireDefault(require("lodash/fp/fromPairs"));
var _flow2 = _interopRequireDefault(require("lodash/fp/flow"));
var _filter2 = _interopRequireDefault(require("lodash/fp/filter"));
var _getBlobSHA = _interopRequireDefault(require("./getBlobSHA"));
const _excluded = ["size", "oid"]; //
// Pointer file parsing
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function splitIntoLines(str) {
  return str.split('\n');
}
function splitIntoWords(str) {
  return str.split(/\s+/g);
}
function isNonEmptyString(str) {
  return str !== '';
}
const withoutEmptyLines = (0, _flow2.default)([(0, _map2.default)(str => str.trim()), (0, _filter2.default)(isNonEmptyString)]);
const parsePointerFile = exports.parsePointerFile = (0, _flow2.default)([splitIntoLines, withoutEmptyLines, (0, _map2.default)(splitIntoWords), _fromPairs2.default, _ref => {
  let {
      size,
      oid
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return _objectSpread({
    size: parseInt(size),
    sha: oid === null || oid === void 0 ? void 0 : oid.split(':')[1]
  }, rest);
}]);

//
// .gitattributes file parsing

function removeGitAttributesCommentsFromLine(line) {
  return line.split('#')[0];
}
function parseGitPatternAttribute(attributeString) {
  // There are three kinds of attribute settings:
  // - a key=val pair sets an attribute to a specific value
  // - a key without a value and a leading hyphen sets an attribute to false
  // - a key without a value and no leading hyphen sets an attribute
  //   to true
  if (attributeString.includes('=')) {
    return attributeString.split('=');
  }
  if (attributeString.startsWith('-')) {
    return [attributeString.slice(1), false];
  }
  return [attributeString, true];
}
const parseGitPatternAttributes = (0, _flow2.default)([(0, _map2.default)(parseGitPatternAttribute), _fromPairs2.default]);
const parseGitAttributesPatternLine = (0, _flow2.default)([splitIntoWords, ([pattern, ...attributes]) => [pattern, parseGitPatternAttributes(attributes)]]);
const parseGitAttributesFileToPatternAttributePairs = (0, _flow2.default)([splitIntoLines, (0, _map2.default)(removeGitAttributesCommentsFromLine), withoutEmptyLines, (0, _map2.default)(parseGitAttributesPatternLine)]);
const getLargeMediaPatternsFromGitAttributesFile = exports.getLargeMediaPatternsFromGitAttributesFile = (0, _flow2.default)([parseGitAttributesFileToPatternAttributePairs, (0, _filter2.default)(([, attributes]) => attributes.filter === 'lfs' && attributes.diff === 'lfs' && attributes.merge === 'lfs'), (0, _map2.default)(([pattern]) => pattern)]);
function createPointerFile({
  size,
  sha
}) {
  return `\
version https://git-lfs.github.com/spec/v1
oid sha256:${sha}
size ${size}
`;
}
async function getPointerFileForMediaFileObj(client, fileObj, path) {
  const {
    name,
    size
  } = fileObj;
  const sha = await (0, _getBlobSHA.default)(fileObj);
  await client.uploadResource({
    sha,
    size
  }, fileObj);
  const pointerFileString = createPointerFile({
    sha,
    size
  });
  const pointerFileBlob = new Blob([pointerFileString]);
  const pointerFile = new File([pointerFileBlob], name, {
    type: 'text/plain'
  });
  const pointerFileSHA = await (0, _getBlobSHA.default)(pointerFile);
  return {
    fileObj: pointerFile,
    size: pointerFileBlob.size,
    sha: pointerFileSHA,
    raw: pointerFileString,
    path
  };
}
async function getLargeMediaFilteredMediaFiles(client, mediaFiles) {
  return await Promise.all(mediaFiles.map(async mediaFile => {
    const {
      fileObj,
      path
    } = mediaFile;
    const fixedPath = path.startsWith('/') ? path.slice(1) : path;
    if (!client.matchPath(fixedPath)) {
      return mediaFile;
    }
    const pointerFileDetails = await getPointerFileForMediaFileObj(client, fileObj, path);
    return _objectSpread(_objectSpread({}, mediaFile), pointerFileDetails);
  }));
}