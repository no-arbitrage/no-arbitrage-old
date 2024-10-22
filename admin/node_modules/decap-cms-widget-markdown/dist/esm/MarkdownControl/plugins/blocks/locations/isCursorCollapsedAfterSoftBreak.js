"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slate = require("slate");
function isCursorCollapsedAfterSoftBreak(editor) {
  const {
    selection
  } = editor;
  if (!selection) return false;
  if (_slate.Range.isExpanded(selection)) return false;
  const previous = _slate.Editor.previous(editor);
  return previous && previous[0].type == 'break';
}
var _default = exports.default = isCursorCollapsedAfterSoftBreak;