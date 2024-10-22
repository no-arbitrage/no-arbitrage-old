"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slate = require("slate");
var _isSelectionWithinNoninitialListItem = _interopRequireDefault(require("../locations/isSelectionWithinNoninitialListItem"));
var _lowestMatchedAncestor = _interopRequireDefault(require("../../matchers/lowestMatchedAncestor"));
var _moveListToListItem = _interopRequireDefault(require("../transforms/moveListToListItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function keyDownTab(editor) {
  if (!editor.selection) return;
  if (!(0, _isSelectionWithinNoninitialListItem.default)(editor)) return;

  // In a case where one edge of the range is within a nested list item, we need to even the selection to the outer most level
  const {
    focus,
    anchor
  } = editor.selection;
  const pathLength = focus.path.length > anchor.path.length ? anchor.path.length : focus.path.length;
  const at = {
    anchor: {
      offset: 0,
      path: [...anchor.path.slice(0, pathLength - 2), 0, 0]
    },
    focus: {
      offset: 0,
      path: [...focus.path.slice(0, pathLength - 2), 0, 0]
    }
  };
  _slate.Editor.withoutNormalizing(editor, () => {
    // wrap selected list items into a new bulleted list
    _slate.Transforms.wrapNodes(editor, {
      type: 'bulleted-list'
    }, _objectSpread(_objectSpread({}, (0, _lowestMatchedAncestor.default)(editor, 'list-item')), {}, {
      at
    }));

    // get the new bulleted list position
    const [, newListPath] = _slate.Editor.above(editor, (0, _lowestMatchedAncestor.default)(editor, 'list'));

    // get the new parent node (previous list item)
    const parentNode = _slate.Editor.previous(editor, {
      at: newListPath
    });
    (0, _moveListToListItem.default)(editor, newListPath, parentNode);
  });
  _slate.Editor.normalize(editor);
}
var _default = exports.default = keyDownTab;