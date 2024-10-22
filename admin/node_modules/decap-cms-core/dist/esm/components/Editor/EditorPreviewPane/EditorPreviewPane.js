"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PreviewPane = void 0;
var _base = _interopRequireDefault(require("@emotion/styled/base"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _immutable = require("immutable");
var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));
var _reactFrameComponent = _interopRequireWildcard(require("react-frame-component"));
var _decapCmsUiDefault = require("decap-cms-ui-default");
var _reactRedux = require("react-redux");
var _registry = require("../../../lib/registry");
var _entries = require("../../../actions/entries");
var _UI = require("../../UI");
var _collections = require("../../../reducers/collections");
var _media = require("../../../actions/media");
var _medias = require("../../../reducers/medias");
var _fieldInference = require("../../../constants/fieldInference");
var _EditorPreviewContent = _interopRequireDefault(require("./EditorPreviewContent.js"));
var _PreviewHOC = _interopRequireDefault(require("./PreviewHOC"));
var _EditorPreview = _interopRequireDefault(require("./EditorPreview"));
var _react2 = require("@emotion/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const PreviewPaneFrame = /*#__PURE__*/(0, _base.default)(_reactFrameComponent.default, {
  target: "enus48h0",
  label: "PreviewPaneFrame"
})("width:100%;height:100%;border:none;background:#fff;border-radius:", _decapCmsUiDefault.lengths.borderRadius, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0VkaXRvci9FZGl0b3JQcmV2aWV3UGFuZS9FZGl0b3JQcmV2aWV3UGFuZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QnNDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0VkaXRvci9FZGl0b3JQcmV2aWV3UGFuZS9FZGl0b3JQcmV2aWV3UGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgTGlzdCwgTWFwIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCBJbW11dGFibGVQcm9wVHlwZXMgZnJvbSAncmVhY3QtaW1tdXRhYmxlLXByb3B0eXBlcyc7XG5pbXBvcnQgRnJhbWUsIHsgRnJhbWVDb250ZXh0Q29uc3VtZXIgfSBmcm9tICdyZWFjdC1mcmFtZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgbGVuZ3RocyB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG4gIHJlc29sdmVXaWRnZXQsXG4gIGdldFByZXZpZXdUZW1wbGF0ZSxcbiAgZ2V0UHJldmlld1N0eWxlcyxcbiAgZ2V0UmVtYXJrUGx1Z2lucyxcbn0gZnJvbSAnLi4vLi4vLi4vbGliL3JlZ2lzdHJ5JztcbmltcG9ydCB7IGdldEFsbEVudHJpZXMsIHRyeUxvYWRFbnRyeSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvZW50cmllcyc7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnLi4vLi4vVUknO1xuaW1wb3J0IHtcbiAgc2VsZWN0VGVtcGxhdGVOYW1lLFxuICBzZWxlY3RJbmZlcnJlZEZpZWxkLFxuICBzZWxlY3RGaWVsZCxcbn0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgYm91bmRHZXRBc3NldCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVkaWEnO1xuaW1wb3J0IHsgc2VsZWN0SXNMb2FkaW5nQXNzZXQgfSBmcm9tICcuLi8uLi8uLi9yZWR1Y2Vycy9tZWRpYXMnO1xuaW1wb3J0IHsgSU5GRVJBQkxFX0ZJRUxEUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9maWVsZEluZmVyZW5jZSc7XG5pbXBvcnQgRWRpdG9yUHJldmlld0NvbnRlbnQgZnJvbSAnLi9FZGl0b3JQcmV2aWV3Q29udGVudC5qcyc7XG5pbXBvcnQgUHJldmlld0hPQyBmcm9tICcuL1ByZXZpZXdIT0MnO1xuaW1wb3J0IEVkaXRvclByZXZpZXcgZnJvbSAnLi9FZGl0b3JQcmV2aWV3JztcblxuY29uc3QgUHJldmlld1BhbmVGcmFtZSA9IHN0eWxlZChGcmFtZSlgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogJHtsZW5ndGhzLmJvcmRlclJhZGl1c307XG5gO1xuXG5leHBvcnQgY2xhc3MgUHJldmlld1BhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRXaWRnZXQgPSAoZmllbGQsIHZhbHVlLCBtZXRhZGF0YSwgcHJvcHMsIGlkeCA9IG51bGwpID0+IHtcbiAgICBjb25zdCB7IGdldEFzc2V0LCBlbnRyeSB9ID0gcHJvcHM7XG4gICAgY29uc3Qgd2lkZ2V0ID0gcmVzb2x2ZVdpZGdldChmaWVsZC5nZXQoJ3dpZGdldCcpKTtcbiAgICBjb25zdCBrZXkgPSBpZHggPyBmaWVsZC5nZXQoJ25hbWUnKSArICdfJyArIGlkeCA6IGZpZWxkLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IHZhbHVlSXNJbk1hcCA9IHZhbHVlICYmICF3aWRnZXQuYWxsb3dNYXBWYWx1ZSAmJiBNYXAuaXNNYXAodmFsdWUpO1xuXG4gICAgLyoqXG4gICAgICogVXNlIGFuIEhPQyB0byBwcm92aWRlIGNvbmRpdGlvbmFsIHVwZGF0ZXMgZm9yIGFsbCBwcmV2aWV3cy5cbiAgICAgKi9cbiAgICByZXR1cm4gIXdpZGdldC5wcmV2aWV3ID8gbnVsbCA6IChcbiAgICAgIDxQcmV2aWV3SE9DXG4gICAgICAgIHByZXZpZXdDb21wb25lbnQ9e3dpZGdldC5wcmV2aWV3fVxuICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICBnZXRBc3NldD17Z2V0QXNzZXR9XG4gICAgICAgIHZhbHVlPXt2YWx1ZUlzSW5NYXAgPyB2YWx1ZS5nZXQoZmllbGQuZ2V0KCduYW1lJykpIDogdmFsdWV9XG4gICAgICAgIGVudHJ5PXtlbnRyeX1cbiAgICAgICAgZmllbGRzTWV0YURhdGE9e21ldGFkYXRhfVxuICAgICAgICByZXNvbHZlV2lkZ2V0PXtyZXNvbHZlV2lkZ2V0fVxuICAgICAgICBnZXRSZW1hcmtQbHVnaW5zPXtnZXRSZW1hcmtQbHVnaW5zfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIGluZmVycmVkRmllbGRzID0ge307XG5cbiAgaW5mZXJGaWVsZHMoKSB7XG4gICAgY29uc3QgdGl0bGVGaWVsZCA9IHNlbGVjdEluZmVycmVkRmllbGQodGhpcy5wcm9wcy5jb2xsZWN0aW9uLCAndGl0bGUnKTtcbiAgICBjb25zdCBzaG9ydFRpdGxlRmllbGQgPSBzZWxlY3RJbmZlcnJlZEZpZWxkKHRoaXMucHJvcHMuY29sbGVjdGlvbiwgJ3Nob3J0VGl0bGUnKTtcbiAgICBjb25zdCBhdXRob3JGaWVsZCA9IHNlbGVjdEluZmVycmVkRmllbGQodGhpcy5wcm9wcy5jb2xsZWN0aW9uLCAnYXV0aG9yJyk7XG5cbiAgICB0aGlzLmluZmVycmVkRmllbGRzID0ge307XG4gICAgaWYgKHRpdGxlRmllbGQpIHRoaXMuaW5mZXJyZWRGaWVsZHNbdGl0bGVGaWVsZF0gPSBJTkZFUkFCTEVfRklFTERTLnRpdGxlO1xuICAgIGlmIChzaG9ydFRpdGxlRmllbGQpIHRoaXMuaW5mZXJyZWRGaWVsZHNbc2hvcnRUaXRsZUZpZWxkXSA9IElORkVSQUJMRV9GSUVMRFMuc2hvcnRUaXRsZTtcbiAgICBpZiAoYXV0aG9yRmllbGQpIHRoaXMuaW5mZXJyZWRGaWVsZHNbYXV0aG9yRmllbGRdID0gSU5GRVJBQkxFX0ZJRUxEUy5hdXRob3I7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgd2lkZ2V0IGNvbXBvbmVudCBmb3IgYSBuYW1lZCBmaWVsZCwgYW5kIG1ha2VzIHJlY3Vyc2l2ZSBjYWxsc1xuICAgKiB0byByZXRyaWV2ZSBjb21wb25lbnRzIGZvciBuZXN0ZWQgYW5kIGRlZXBseSBuZXN0ZWQgZmllbGRzLCB3aGljaCBvY2N1ciBpblxuICAgKiBvYmplY3QgYW5kIGxpc3QgdHlwZSBmaWVsZHMuIFVzZWQgaW50ZXJuYWxseSB0byByZXRyaWV2ZSB3aWRnZXRzLCBhbmQgYWxzb1xuICAgKiBleHBvc2VkIGZvciB1c2UgaW4gY3VzdG9tIHByZXZpZXcgdGVtcGxhdGVzLlxuICAgKi9cbiAgd2lkZ2V0Rm9yID0gKFxuICAgIG5hbWUsXG4gICAgZmllbGRzID0gdGhpcy5wcm9wcy5maWVsZHMsXG4gICAgdmFsdWVzID0gdGhpcy5wcm9wcy5lbnRyeS5nZXQoJ2RhdGEnKSxcbiAgICBmaWVsZHNNZXRhRGF0YSA9IHRoaXMucHJvcHMuZmllbGRzTWV0YURhdGEsXG4gICkgPT4ge1xuICAgIC8vIFdlIHJldHJpZXZlIHRoZSBmaWVsZCBieSBuYW1lIHNvIHRoYXQgdGhpcyBmdW5jdGlvbiBjYW4gYWxzbyBiZSB1c2VkIGluXG4gICAgLy8gY3VzdG9tIHByZXZpZXcgdGVtcGxhdGVzLCB3aGVyZSB0aGUgZmllbGQgb2JqZWN0IGNhbid0IGJlIHBhc3NlZCBpbi5cbiAgICBsZXQgZmllbGQgPSBmaWVsZHMgJiYgZmllbGRzLmZpbmQoZiA9PiBmLmdldCgnbmFtZScpID09PSBuYW1lKTtcbiAgICBsZXQgdmFsdWUgPSBNYXAuaXNNYXAodmFsdWVzKSAmJiB2YWx1ZXMuZ2V0KGZpZWxkLmdldCgnbmFtZScpKTtcbiAgICBpZiAoZmllbGQuZ2V0KCdtZXRhJykpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy5lbnRyeS5nZXRJbihbJ21ldGEnLCBmaWVsZC5nZXQoJ25hbWUnKV0pO1xuICAgIH1cbiAgICBjb25zdCBuZXN0ZWRGaWVsZHMgPSBmaWVsZC5nZXQoJ2ZpZWxkcycpO1xuICAgIGNvbnN0IHNpbmdsZUZpZWxkID0gZmllbGQuZ2V0KCdmaWVsZCcpO1xuICAgIGNvbnN0IG1ldGFkYXRhID0gZmllbGRzTWV0YURhdGEgJiYgZmllbGRzTWV0YURhdGEuZ2V0KGZpZWxkLmdldCgnbmFtZScpLCBNYXAoKSk7XG5cbiAgICBpZiAobmVzdGVkRmllbGRzKSB7XG4gICAgICBmaWVsZCA9IGZpZWxkLnNldCgnZmllbGRzJywgdGhpcy5nZXROZXN0ZWRXaWRnZXRzKG5lc3RlZEZpZWxkcywgdmFsdWUsIG1ldGFkYXRhKSk7XG4gICAgfVxuXG4gICAgaWYgKHNpbmdsZUZpZWxkKSB7XG4gICAgICBmaWVsZCA9IGZpZWxkLnNldCgnZmllbGQnLCB0aGlzLmdldFNpbmdsZU5lc3RlZChzaW5nbGVGaWVsZCwgdmFsdWUsIG1ldGFkYXRhKSk7XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWxsZWRXaWRnZXRzID0gWydzdHJpbmcnLCAndGV4dCcsICdudW1iZXInXTtcbiAgICBjb25zdCBpbmZlcnJlZEZpZWxkID0gT2JqZWN0LmVudHJpZXModGhpcy5pbmZlcnJlZEZpZWxkcylcbiAgICAgIC5maWx0ZXIoKFtrZXldKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkVG9NYXRjaCA9IHNlbGVjdEZpZWxkKHRoaXMucHJvcHMuY29sbGVjdGlvbiwga2V5KTtcbiAgICAgICAgcmV0dXJuIGZpZWxkVG9NYXRjaCA9PT0gZmllbGQ7XG4gICAgICB9KVxuICAgICAgLm1hcCgoWywgdmFsdWVdKSA9PiB2YWx1ZSlbMF07XG5cbiAgICBpZiAoaW5mZXJyZWRGaWVsZCkge1xuICAgICAgdmFsdWUgPSBpbmZlcnJlZEZpZWxkLmRlZmF1bHRQcmV2aWV3KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdmFsdWUgJiZcbiAgICAgIGxhYmVsbGVkV2lkZ2V0cy5pbmRleE9mKGZpZWxkLmdldCgnd2lkZ2V0JykpICE9PSAtMSAmJlxuICAgICAgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPCA1MFxuICAgICkge1xuICAgICAgdmFsdWUgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz57ZmllbGQuZ2V0KCdsYWJlbCcsIGZpZWxkLmdldCgnbmFtZScpKX06PC9zdHJvbmc+IHt2YWx1ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSA/IHRoaXMuZ2V0V2lkZ2V0KGZpZWxkLCB2YWx1ZSwgbWV0YWRhdGEsIHRoaXMucHJvcHMpIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogUmV0cmlldmVzIHdpZGdldHMgZm9yIG5lc3RlZCBmaWVsZHMgKGNoaWxkcmVuIG9mIG9iamVjdC9saXN0IGZpZWxkcylcbiAgICovXG4gIGdldE5lc3RlZFdpZGdldHMgPSAoZmllbGRzLCB2YWx1ZXMsIGZpZWxkc01ldGFEYXRhKSA9PiB7XG4gICAgLy8gRmllbGRzIG5lc3RlZCB3aXRoaW4gYSBsaXN0IGZpZWxkIHdpbGwgYmUgcGFpcmVkIHdpdGggYSBMaXN0IG9mIHZhbHVlIE1hcHMuXG4gICAgaWYgKExpc3QuaXNMaXN0KHZhbHVlcykpIHtcbiAgICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHRoaXMud2lkZ2V0c0Zvck5lc3RlZEZpZWxkcyhmaWVsZHMsIHZhbHVlLCBmaWVsZHNNZXRhRGF0YSkpO1xuICAgIH1cbiAgICAvLyBGaWVsZHMgbmVzdGVkIHdpdGhpbiBhbiBvYmplY3QgZmllbGQgd2lsbCBiZSBwYWlyZWQgd2l0aCBhIHNpbmdsZSBNYXAgb2YgdmFsdWVzLlxuICAgIHJldHVybiB0aGlzLndpZGdldHNGb3JOZXN0ZWRGaWVsZHMoZmllbGRzLCB2YWx1ZXMsIGZpZWxkc01ldGFEYXRhKTtcbiAgfTtcblxuICBnZXRTaW5nbGVOZXN0ZWQgPSAoZmllbGQsIHZhbHVlcywgZmllbGRzTWV0YURhdGEpID0+IHtcbiAgICBpZiAoTGlzdC5pc0xpc3QodmFsdWVzKSkge1xuICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlLCBpZHgpID0+XG4gICAgICAgIHRoaXMuZ2V0V2lkZ2V0KGZpZWxkLCB2YWx1ZSwgZmllbGRzTWV0YURhdGEuZ2V0KGZpZWxkLmdldCgnbmFtZScpKSwgdGhpcy5wcm9wcywgaWR4KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldFdpZGdldChmaWVsZCwgdmFsdWVzLCBmaWVsZHNNZXRhRGF0YS5nZXQoZmllbGQuZ2V0KCduYW1lJykpLCB0aGlzLnByb3BzKTtcbiAgfTtcblxuICAvKipcbiAgICogVXNlIHdpZGdldEZvciBhcyBhIG1hcHBpbmcgZnVuY3Rpb24gZm9yIHJlY3Vyc2l2ZSB3aWRnZXQgcmV0cmlldmFsXG4gICAqL1xuICB3aWRnZXRzRm9yTmVzdGVkRmllbGRzID0gKGZpZWxkcywgdmFsdWVzLCBmaWVsZHNNZXRhRGF0YSkgPT4ge1xuICAgIHJldHVybiBmaWVsZHMubWFwKGZpZWxkID0+IHRoaXMud2lkZ2V0Rm9yKGZpZWxkLmdldCgnbmFtZScpLCBmaWVsZHMsIHZhbHVlcywgZmllbGRzTWV0YURhdGEpKTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBleGlzdHMgZW50aXJlbHkgdG8gZXhwb3NlIG5lc3RlZCB3aWRnZXRzIGZvciBvYmplY3QgYW5kIGxpc3RcbiAgICogZmllbGRzIHRvIGN1c3RvbSBwcmV2aWV3IHRlbXBsYXRlcy5cbiAgICpcbiAgICogVE9ETzogc2VlIGlmIHdpZGdldEZvciBjYW4gbm93IHByb3ZpZGUgdGhpcyBmdW5jdGlvbmFsaXR5IGZvciBwcmV2aWV3IHRlbXBsYXRlc1xuICAgKi9cbiAgd2lkZ2V0c0ZvciA9IG5hbWUgPT4ge1xuICAgIGNvbnN0IHsgZmllbGRzLCBlbnRyeSwgZmllbGRzTWV0YURhdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHMuZmluZChmID0+IGYuZ2V0KCduYW1lJykgPT09IG5hbWUpO1xuICAgIGNvbnN0IG5lc3RlZEZpZWxkcyA9IGZpZWxkICYmIGZpZWxkLmdldCgnZmllbGRzJyk7XG4gICAgY29uc3QgdmFsdWUgPSBlbnRyeS5nZXRJbihbJ2RhdGEnLCBmaWVsZC5nZXQoJ25hbWUnKV0pO1xuICAgIGNvbnN0IG1ldGFkYXRhID0gZmllbGRzTWV0YURhdGEuZ2V0KGZpZWxkLmdldCgnbmFtZScpLCBNYXAoKSk7XG5cbiAgICBpZiAoTGlzdC5pc0xpc3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUubWFwKHZhbCA9PiB7XG4gICAgICAgIGNvbnN0IHdpZGdldHMgPVxuICAgICAgICAgIG5lc3RlZEZpZWxkcyAmJlxuICAgICAgICAgIE1hcChcbiAgICAgICAgICAgIG5lc3RlZEZpZWxkcy5tYXAoKGYsIGkpID0+IFtcbiAgICAgICAgICAgICAgZi5nZXQoJ25hbWUnKSxcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9Pnt0aGlzLmdldFdpZGdldChmLCB2YWwsIG1ldGFkYXRhLmdldChmLmdldCgnbmFtZScpKSwgdGhpcy5wcm9wcyl9PC9kaXY+LFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIE1hcCh7IGRhdGE6IHZhbCwgd2lkZ2V0cyB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBNYXAoe1xuICAgICAgZGF0YTogdmFsdWUsXG4gICAgICB3aWRnZXRzOlxuICAgICAgICBuZXN0ZWRGaWVsZHMgJiZcbiAgICAgICAgTWFwKFxuICAgICAgICAgIG5lc3RlZEZpZWxkcy5tYXAoZiA9PiBbXG4gICAgICAgICAgICBmLmdldCgnbmFtZScpLFxuICAgICAgICAgICAgdGhpcy5nZXRXaWRnZXQoZiwgdmFsdWUsIG1ldGFkYXRhLmdldChmLmdldCgnbmFtZScpKSwgdGhpcy5wcm9wcyksXG4gICAgICAgICAgXSksXG4gICAgICAgICksXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gZXhpc3RzIGVudGlyZWx5IHRvIGV4cG9zZSBjb2xsZWN0aW9ucyBmcm9tIG91dHNpZGUgb2YgdGhpcyBlbnRyeVxuICAgKlxuICAgKi9cbiAgZ2V0Q29sbGVjdGlvbiA9IGFzeW5jIChjb2xsZWN0aW9uTmFtZSwgc2x1ZykgPT4ge1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gc3RhdGUuY29sbGVjdGlvbnMuZ2V0KGNvbGxlY3Rpb25OYW1lKTtcblxuICAgIGlmICh0eXBlb2Ygc2x1ZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBnZXRBbGxFbnRyaWVzKHN0YXRlLCBzZWxlY3RlZENvbGxlY3Rpb24pO1xuICAgICAgcmV0dXJuIGVudHJpZXMubWFwKGVudHJ5ID0+IE1hcCgpLnNldCgnZGF0YScsIGVudHJ5LmRhdGEpKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeSA9IGF3YWl0IHRyeUxvYWRFbnRyeShzdGF0ZSwgc2VsZWN0ZWRDb2xsZWN0aW9uLCBzbHVnKTtcbiAgICByZXR1cm4gTWFwKCkuc2V0KCdkYXRhJywgZW50cnkuZGF0YSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZW50cnksIGNvbGxlY3Rpb24sIGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZW50cnkgfHwgIWVudHJ5LmdldCgnZGF0YScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aWV3Q29tcG9uZW50ID1cbiAgICAgIGdldFByZXZpZXdUZW1wbGF0ZShzZWxlY3RUZW1wbGF0ZU5hbWUoY29sbGVjdGlvbiwgZW50cnkuZ2V0KCdzbHVnJykpKSB8fCBFZGl0b3JQcmV2aWV3O1xuXG4gICAgdGhpcy5pbmZlckZpZWxkcygpO1xuXG4gICAgY29uc3QgcHJldmlld1Byb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIHdpZGdldEZvcjogdGhpcy53aWRnZXRGb3IsXG4gICAgICB3aWRnZXRzRm9yOiB0aGlzLndpZGdldHNGb3IsXG4gICAgICBnZXRDb2xsZWN0aW9uOiB0aGlzLmdldENvbGxlY3Rpb24sXG4gICAgfTtcblxuICAgIGNvbnN0IHN0eWxlRWxzID0gZ2V0UHJldmlld1N0eWxlcygpLm1hcCgoc3R5bGUsIGkpID0+IHtcbiAgICAgIGlmIChzdHlsZS5yYXcpIHtcbiAgICAgICAgcmV0dXJuIDxzdHlsZSBrZXk9e2l9PntzdHlsZS52YWx1ZX08L3N0eWxlPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8bGluayBrZXk9e2l9IGhyZWY9e3N0eWxlLnZhbHVlfSB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz47XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICAgIDxQcmV2aWV3UGFuZUZyYW1lIGlkPVwicHJldmlldy1wYW5lXCIgaGVhZD17c3R5bGVFbHN9IC8+O1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gYFxuPCFET0NUWVBFIGh0bWw+XG48aHRtbD5cbiAgPGhlYWQ+PGJhc2UgdGFyZ2V0PVwiX2JsYW5rXCIvPjwvaGVhZD5cbiAgPGJvZHk+PGRpdj48L2Rpdj48L2JvZHk+XG48L2h0bWw+XG5gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckJvdW5kYXJ5IGNvbmZpZz17Y29uZmlnfT5cbiAgICAgICAgPFByZXZpZXdQYW5lRnJhbWUgaWQ9XCJwcmV2aWV3LXBhbmVcIiBoZWFkPXtzdHlsZUVsc30gaW5pdGlhbENvbnRlbnQ9e2luaXRpYWxDb250ZW50fT5cbiAgICAgICAgICA8RnJhbWVDb250ZXh0Q29uc3VtZXI+XG4gICAgICAgICAgICB7KHsgZG9jdW1lbnQsIHdpbmRvdyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEVkaXRvclByZXZpZXdDb250ZW50XG4gICAgICAgICAgICAgICAgICB7Li4ueyBwcmV2aWV3Q29tcG9uZW50LCBwcmV2aWV3UHJvcHM6IHsgLi4ucHJldmlld1Byb3BzLCBkb2N1bWVudCwgd2luZG93IH0gfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L0ZyYW1lQ29udGV4dENvbnN1bWVyPlxuICAgICAgICA8L1ByZXZpZXdQYW5lRnJhbWU+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKTtcbiAgfVxufVxuXG5QcmV2aWV3UGFuZS5wcm9wVHlwZXMgPSB7XG4gIGNvbGxlY3Rpb246IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgZmllbGRzOiBJbW11dGFibGVQcm9wVHlwZXMubGlzdC5pc1JlcXVpcmVkLFxuICBlbnRyeTogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcC5pc1JlcXVpcmVkLFxuICBmaWVsZHNNZXRhRGF0YTogSW1tdXRhYmxlUHJvcFR5cGVzLm1hcC5pc1JlcXVpcmVkLFxuICBnZXRBc3NldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICBjb25zdCBpc0xvYWRpbmdBc3NldCA9IHNlbGVjdElzTG9hZGluZ0Fzc2V0KHN0YXRlLm1lZGlhcyk7XG4gIHJldHVybiB7IGlzTG9hZGluZ0Fzc2V0LCBjb25maWc6IHN0YXRlLmNvbmZpZywgc3RhdGUgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgYm91bmRHZXRBc3NldDogKGNvbGxlY3Rpb24sIGVudHJ5KSA9PiBib3VuZEdldEFzc2V0KGRpc3BhdGNoLCBjb2xsZWN0aW9uLCBlbnRyeSksXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZVByb3BzLFxuICAgIC4uLmRpc3BhdGNoUHJvcHMsXG4gICAgLi4ub3duUHJvcHMsXG4gICAgZ2V0QXNzZXQ6IGRpc3BhdGNoUHJvcHMuYm91bmRHZXRBc3NldChvd25Qcm9wcy5jb2xsZWN0aW9uLCBvd25Qcm9wcy5lbnRyeSksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMpKFByZXZpZXdQYW5lKTtcbiJdfQ== */"));
class PreviewPane extends _react.default.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "getWidget", (field, value, metadata, props, idx = null) => {
      const {
        getAsset,
        entry
      } = props;
      const widget = (0, _registry.resolveWidget)(field.get('widget'));
      const key = idx ? field.get('name') + '_' + idx : field.get('name');
      const valueIsInMap = value && !widget.allowMapValue && _immutable.Map.isMap(value);

      /**
       * Use an HOC to provide conditional updates for all previews.
       */
      return !widget.preview ? null : (0, _react2.jsx)(_PreviewHOC.default, {
        previewComponent: widget.preview,
        key: key,
        field: field,
        getAsset: getAsset,
        value: valueIsInMap ? value.get(field.get('name')) : value,
        entry: entry,
        fieldsMetaData: metadata,
        resolveWidget: _registry.resolveWidget,
        getRemarkPlugins: _registry.getRemarkPlugins
      });
    });
    _defineProperty(this, "inferredFields", {});
    /**
     * Returns the widget component for a named field, and makes recursive calls
     * to retrieve components for nested and deeply nested fields, which occur in
     * object and list type fields. Used internally to retrieve widgets, and also
     * exposed for use in custom preview templates.
     */
    _defineProperty(this, "widgetFor", (name, fields = this.props.fields, values = this.props.entry.get('data'), fieldsMetaData = this.props.fieldsMetaData) => {
      // We retrieve the field by name so that this function can also be used in
      // custom preview templates, where the field object can't be passed in.
      let field = fields && fields.find(f => f.get('name') === name);
      let value = _immutable.Map.isMap(values) && values.get(field.get('name'));
      if (field.get('meta')) {
        value = this.props.entry.getIn(['meta', field.get('name')]);
      }
      const nestedFields = field.get('fields');
      const singleField = field.get('field');
      const metadata = fieldsMetaData && fieldsMetaData.get(field.get('name'), (0, _immutable.Map)());
      if (nestedFields) {
        field = field.set('fields', this.getNestedWidgets(nestedFields, value, metadata));
      }
      if (singleField) {
        field = field.set('field', this.getSingleNested(singleField, value, metadata));
      }
      const labelledWidgets = ['string', 'text', 'number'];
      const inferredField = Object.entries(this.inferredFields).filter(([key]) => {
        const fieldToMatch = (0, _collections.selectField)(this.props.collection, key);
        return fieldToMatch === field;
      }).map(([, value]) => value)[0];
      if (inferredField) {
        value = inferredField.defaultPreview(value);
      } else if (value && labelledWidgets.indexOf(field.get('widget')) !== -1 && value.toString().length < 50) {
        value = (0, _react2.jsx)("div", null, (0, _react2.jsx)("strong", null, field.get('label', field.get('name')), ":"), " ", value);
      }
      return value ? this.getWidget(field, value, metadata, this.props) : null;
    });
    /**
     * Retrieves widgets for nested fields (children of object/list fields)
     */
    _defineProperty(this, "getNestedWidgets", (fields, values, fieldsMetaData) => {
      // Fields nested within a list field will be paired with a List of value Maps.
      if (_immutable.List.isList(values)) {
        return values.map(value => this.widgetsForNestedFields(fields, value, fieldsMetaData));
      }
      // Fields nested within an object field will be paired with a single Map of values.
      return this.widgetsForNestedFields(fields, values, fieldsMetaData);
    });
    _defineProperty(this, "getSingleNested", (field, values, fieldsMetaData) => {
      if (_immutable.List.isList(values)) {
        return values.map((value, idx) => this.getWidget(field, value, fieldsMetaData.get(field.get('name')), this.props, idx));
      }
      return this.getWidget(field, values, fieldsMetaData.get(field.get('name')), this.props);
    });
    /**
     * Use widgetFor as a mapping function for recursive widget retrieval
     */
    _defineProperty(this, "widgetsForNestedFields", (fields, values, fieldsMetaData) => {
      return fields.map(field => this.widgetFor(field.get('name'), fields, values, fieldsMetaData));
    });
    /**
     * This function exists entirely to expose nested widgets for object and list
     * fields to custom preview templates.
     *
     * TODO: see if widgetFor can now provide this functionality for preview templates
     */
    _defineProperty(this, "widgetsFor", name => {
      const {
        fields,
        entry,
        fieldsMetaData
      } = this.props;
      const field = fields.find(f => f.get('name') === name);
      const nestedFields = field && field.get('fields');
      const value = entry.getIn(['data', field.get('name')]);
      const metadata = fieldsMetaData.get(field.get('name'), (0, _immutable.Map)());
      if (_immutable.List.isList(value)) {
        return value.map(val => {
          const widgets = nestedFields && (0, _immutable.Map)(nestedFields.map((f, i) => [f.get('name'), (0, _react2.jsx)("div", {
            key: i
          }, this.getWidget(f, val, metadata.get(f.get('name')), this.props))]));
          return (0, _immutable.Map)({
            data: val,
            widgets
          });
        });
      }
      return (0, _immutable.Map)({
        data: value,
        widgets: nestedFields && (0, _immutable.Map)(nestedFields.map(f => [f.get('name'), this.getWidget(f, value, metadata.get(f.get('name')), this.props)]))
      });
    });
    /**
     * This function exists entirely to expose collections from outside of this entry
     *
     */
    _defineProperty(this, "getCollection", async (collectionName, slug) => {
      const {
        state
      } = this.props;
      const selectedCollection = state.collections.get(collectionName);
      if (typeof slug === 'undefined') {
        const entries = await (0, _entries.getAllEntries)(state, selectedCollection);
        return entries.map(entry => (0, _immutable.Map)().set('data', entry.data));
      }
      const entry = await (0, _entries.tryLoadEntry)(state, selectedCollection, slug);
      return (0, _immutable.Map)().set('data', entry.data);
    });
  }
  inferFields() {
    const titleField = (0, _collections.selectInferredField)(this.props.collection, 'title');
    const shortTitleField = (0, _collections.selectInferredField)(this.props.collection, 'shortTitle');
    const authorField = (0, _collections.selectInferredField)(this.props.collection, 'author');
    this.inferredFields = {};
    if (titleField) this.inferredFields[titleField] = _fieldInference.INFERABLE_FIELDS.title;
    if (shortTitleField) this.inferredFields[shortTitleField] = _fieldInference.INFERABLE_FIELDS.shortTitle;
    if (authorField) this.inferredFields[authorField] = _fieldInference.INFERABLE_FIELDS.author;
  }
  render() {
    const {
      entry,
      collection,
      config
    } = this.props;
    if (!entry || !entry.get('data')) {
      return null;
    }
    const previewComponent = (0, _registry.getPreviewTemplate)((0, _collections.selectTemplateName)(collection, entry.get('slug'))) || _EditorPreview.default;
    this.inferFields();
    const previewProps = _objectSpread(_objectSpread({}, this.props), {}, {
      widgetFor: this.widgetFor,
      widgetsFor: this.widgetsFor,
      getCollection: this.getCollection
    });
    const styleEls = (0, _registry.getPreviewStyles)().map((style, i) => {
      if (style.raw) {
        return (0, _react2.jsx)("style", {
          key: i
        }, style.value);
      }
      return (0, _react2.jsx)("link", {
        key: i,
        href: style.value,
        type: "text/css",
        rel: "stylesheet"
      });
    });
    if (!collection) {
      (0, _react2.jsx)(PreviewPaneFrame, {
        id: "preview-pane",
        head: styleEls
      });
    }
    const initialContent = `
<!DOCTYPE html>
<html>
  <head><base target="_blank"/></head>
  <body><div></div></body>
</html>
`;
    return (0, _react2.jsx)(_UI.ErrorBoundary, {
      config: config
    }, (0, _react2.jsx)(PreviewPaneFrame, {
      id: "preview-pane",
      head: styleEls,
      initialContent: initialContent
    }, (0, _react2.jsx)(_reactFrameComponent.FrameContextConsumer, null, ({
      document,
      window
    }) => {
      return (0, _react2.jsx)(_EditorPreviewContent.default, {
        previewComponent,
        previewProps: _objectSpread(_objectSpread({}, previewProps), {}, {
          document,
          window
        })
      });
    })));
  }
}
exports.PreviewPane = PreviewPane;
PreviewPane.propTypes = {
  collection: _reactImmutableProptypes.default.map.isRequired,
  fields: _reactImmutableProptypes.default.list.isRequired,
  entry: _reactImmutableProptypes.default.map.isRequired,
  fieldsMetaData: _reactImmutableProptypes.default.map.isRequired,
  getAsset: _propTypes.default.func.isRequired
};
function mapStateToProps(state) {
  const isLoadingAsset = (0, _medias.selectIsLoadingAsset)(state.medias);
  return {
    isLoadingAsset,
    config: state.config,
    state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    boundGetAsset: (collection, entry) => (0, _media.boundGetAsset)(dispatch, collection, entry)
  };
}
function mergeProps(stateProps, dispatchProps, ownProps) {
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, stateProps), dispatchProps), ownProps), {}, {
    getAsset: dispatchProps.boundGetAsset(ownProps.collection, ownProps.entry)
  });
}
var _default = exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(PreviewPane);