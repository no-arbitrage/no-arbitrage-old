"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slate = require("slate");
var _lowestMatchedAncestor = _interopRequireDefault(require("../../matchers/lowestMatchedAncestor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function unwrapIfCursorAtStart(editor, mergeWithPrevious = false) {
  if (editor.selection.anchor.offset !== 0) return false;
  let [node, path] = _slate.Editor.above(editor, (0, _lowestMatchedAncestor.default)(editor, 'non-default'));
  if (path.length == 0) return false;
  const isHeading = `${node.type}`.startsWith('heading-');
  if (isHeading) {
    _slate.Transforms.setNodes(editor, {
      type: 'paragraph'
    });
    return false;
  }
  const isBlock = _slate.Editor.isBlock(editor, node);
  const [parentBlock, parentBlockPath] = _slate.Editor.above(editor, (0, _lowestMatchedAncestor.default)(editor, 'block'));
  if (!isBlock) {
    if (!_slate.Editor.isStart(editor, path, parentBlockPath)) {
      return false;
    }
    [node, path] = [parentBlock, parentBlockPath];
  }
  _slate.Editor.withoutNormalizing(editor, () => {
    _slate.Transforms.unwrapNodes(editor, {
      match: n => n.type === node.type,
      split: true
    });
    if (mergeWithPrevious) {
      _slate.Transforms.mergeNodes(editor);
    }
  });
  _slate.Editor.normalize(editor, {
    force: true
  });
  return true;
}
var _default = exports.default = unwrapIfCursorAtStart;