"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EntriesCollection = void 0;
exports.filterNestedEntries = filterNestedEntries;
var _base = _interopRequireDefault(require("@emotion/styled/base"));
var _partial2 = _interopRequireDefault(require("lodash/partial"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));
var _reactRedux = require("react-redux");
var _reactPolyglot = require("react-polyglot");
var _decapCmsLibUtil = require("decap-cms-lib-util");
var _decapCmsUiDefault = require("decap-cms-ui-default");
var _entries = require("../../../actions/entries");
var _entries2 = require("../../../reducers/entries");
var _cursors = require("../../../reducers/cursors");
var _Entries = _interopRequireDefault(require("./Entries"));
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const GroupHeading = /*#__PURE__*/(0, _base.default)("h2", {
  target: "eucqz2q1",
  label: "GroupHeading"
})("font-size:22px;font-weight:600;line-height:37px;padding-inline-start:20px;color:", _decapCmsUiDefault.colors.textLead, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QjhCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1wb2x5Z2xvdCc7XG5pbXBvcnQgeyBwYXJ0aWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gJ2RlY2FwLWNtcy1saWItdXRpbCc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmltcG9ydCB7XG4gIGxvYWRFbnRyaWVzIGFzIGFjdGlvbkxvYWRFbnRyaWVzLFxuICB0cmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IgYXMgYWN0aW9uVHJhdmVyc2VDb2xsZWN0aW9uQ3Vyc29yLFxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2VudHJpZXMnO1xuaW1wb3J0IHtcbiAgc2VsZWN0RW50cmllcyxcbiAgc2VsZWN0RW50cmllc0xvYWRlZCxcbiAgc2VsZWN0SXNGZXRjaGluZyxcbiAgc2VsZWN0R3JvdXBzLFxufSBmcm9tICcuLi8uLi8uLi9yZWR1Y2Vycy9lbnRyaWVzJztcbmltcG9ydCB7IHNlbGVjdENvbGxlY3Rpb25FbnRyaWVzQ3Vyc29yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMvY3Vyc29ycyc7XG5pbXBvcnQgRW50cmllcyBmcm9tICcuL0VudHJpZXMnO1xuXG5jb25zdCBHcm91cEhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgR3JvdXBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmZ1bmN0aW9uIGdldEdyb3VwRW50cmllcyhlbnRyaWVzLCBwYXRocykge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZW50cnkgPT4gcGF0aHMuaGFzKGVudHJ5LmdldCgncGF0aCcpKSk7XG59XG5cbmZ1bmN0aW9uIGdldEdyb3VwVGl0bGUoZ3JvdXAsIHQpIHtcbiAgY29uc3QgeyBsYWJlbCwgdmFsdWUgfSA9IGdyb3VwO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0KCdjb2xsZWN0aW9uLmdyb3Vwcy5vdGhlcicpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiB2YWx1ZSA/IGxhYmVsIDogdCgnY29sbGVjdGlvbi5ncm91cHMubmVnYXRlTGFiZWwnLCB7IGxhYmVsIH0pO1xuICB9XG4gIHJldHVybiBgJHtsYWJlbH0gJHt2YWx1ZX1gLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gd2l0aEdyb3Vwcyhncm91cHMsIGVudHJpZXMsIEVudHJpZXNUb1JlbmRlciwgdCkge1xuICByZXR1cm4gZ3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBnZXRHcm91cFRpdGxlKGdyb3VwLCB0KTtcbiAgICByZXR1cm4gKFxuICAgICAgPEdyb3VwQ29udGFpbmVyIGtleT17Z3JvdXAuaWR9IGlkPXtncm91cC5pZH0+XG4gICAgICAgIDxHcm91cEhlYWRpbmc+e3RpdGxlfTwvR3JvdXBIZWFkaW5nPlxuICAgICAgICA8RW50cmllc1RvUmVuZGVyIGVudHJpZXM9e2dldEdyb3VwRW50cmllcyhlbnRyaWVzLCBncm91cC5wYXRocyl9IC8+XG4gICAgICA8L0dyb3VwQ29udGFpbmVyPlxuICAgICk7XG4gIH0pO1xufVxuXG5leHBvcnQgY2xhc3MgRW50cmllc0NvbGxlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb246IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudHJpZXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGdyb3VwczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmlld1N0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1cnNvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvYWRFbnRyaWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlbnRyaWVzTG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGVudHJpZXNMb2FkZWQsIGxvYWRFbnRyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjb2xsZWN0aW9uICYmICFlbnRyaWVzTG9hZGVkKSB7XG4gICAgICBsb2FkRW50cmllcyhjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzTG9hZGVkLCBsb2FkRW50cmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY29sbGVjdGlvbiAhPT0gcHJldlByb3BzLmNvbGxlY3Rpb24gJiYgIWVudHJpZXNMb2FkZWQpIHtcbiAgICAgIGxvYWRFbnRyaWVzKGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUN1cnNvckFjdGlvbnMgPSAoY3Vyc29yLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvciB9ID0gdGhpcy5wcm9wcztcbiAgICB0cmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IoY29sbGVjdGlvbiwgYWN0aW9uKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzLCBncm91cHMsIGlzRmV0Y2hpbmcsIHZpZXdTdHlsZSwgY3Vyc29yLCBwYWdlLCB0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgRW50cmllc1RvUmVuZGVyID0gKHsgZW50cmllcyB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RW50cmllc1xuICAgICAgICAgIGNvbGxlY3Rpb25zPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIGVudHJpZXM9e2VudHJpZXN9XG4gICAgICAgICAgaXNGZXRjaGluZz17aXNGZXRjaGluZ31cbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZT17Y29sbGVjdGlvbi5nZXQoJ2xhYmVsJyl9XG4gICAgICAgICAgdmlld1N0eWxlPXt2aWV3U3R5bGV9XG4gICAgICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICAgICAgaGFuZGxlQ3Vyc29yQWN0aW9ucz17cGFydGlhbCh0aGlzLmhhbmRsZUN1cnNvckFjdGlvbnMsIGN1cnNvcil9XG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmIChncm91cHMgJiYgZ3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB3aXRoR3JvdXBzKGdyb3VwcywgZW50cmllcywgRW50cmllc1RvUmVuZGVyLCB0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEVudHJpZXNUb1JlbmRlciBlbnRyaWVzPXtlbnRyaWVzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTmVzdGVkRW50cmllcyhwYXRoLCBjb2xsZWN0aW9uRm9sZGVyLCBlbnRyaWVzKSB7XG4gIGNvbnN0IGZpbHRlcmVkID0gZW50cmllcy5maWx0ZXIoZSA9PiB7XG4gICAgY29uc3QgZW50cnlQYXRoID0gZS5nZXQoJ3BhdGgnKS5zbGljZShjb2xsZWN0aW9uRm9sZGVyLmxlbmd0aCArIDEpO1xuICAgIGlmICghZW50cnlQYXRoLnN0YXJ0c1dpdGgocGF0aCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IHNob3cgaW1tZWRpYXRlIGNoaWxkcmVuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIC8vIG5vbiByb290IHBhdGhcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBlbnRyeVBhdGguc2xpY2UocGF0aC5sZW5ndGggKyAxKTtcbiAgICAgIHJldHVybiB0cmltbWVkLnNwbGl0KCcvJykubGVuZ3RoID09PSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByb290IHBhdGhcbiAgICAgIHJldHVybiBlbnRyeVBhdGguc3BsaXQoJy8nKS5sZW5ndGggPD0gMjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWQ7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCB2aWV3U3R5bGUsIGZpbHRlclRlcm0gfSA9IG93blByb3BzO1xuICBjb25zdCBwYWdlID0gc3RhdGUuZW50cmllcy5nZXRJbihbJ3BhZ2VzJywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSwgJ3BhZ2UnXSk7XG5cbiAgbGV0IGVudHJpZXMgPSBzZWxlY3RFbnRyaWVzKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24pO1xuICBjb25zdCBncm91cHMgPSBzZWxlY3RHcm91cHMoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbik7XG5cbiAgaWYgKGNvbGxlY3Rpb24uaGFzKCduZXN0ZWQnKSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25Gb2xkZXIgPSBjb2xsZWN0aW9uLmdldCgnZm9sZGVyJyk7XG4gICAgZW50cmllcyA9IGZpbHRlck5lc3RlZEVudHJpZXMoZmlsdGVyVGVybSB8fCAnJywgY29sbGVjdGlvbkZvbGRlciwgZW50cmllcyk7XG4gIH1cbiAgY29uc3QgZW50cmllc0xvYWRlZCA9IHNlbGVjdEVudHJpZXNMb2FkZWQoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSk7XG4gIGNvbnN0IGlzRmV0Y2hpbmcgPSBzZWxlY3RJc0ZldGNoaW5nKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuXG4gIGNvbnN0IHJhd0N1cnNvciA9IHNlbGVjdENvbGxlY3Rpb25FbnRyaWVzQ3Vyc29yKHN0YXRlLmN1cnNvcnMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuICBjb25zdCBjdXJzb3IgPSBDdXJzb3IuY3JlYXRlKHJhd0N1cnNvcikuY2xlYXJEYXRhKCk7XG5cbiAgcmV0dXJuIHsgY29sbGVjdGlvbiwgcGFnZSwgZW50cmllcywgZ3JvdXBzLCBlbnRyaWVzTG9hZGVkLCBpc0ZldGNoaW5nLCB2aWV3U3R5bGUsIGN1cnNvciB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRFbnRyaWVzOiBhY3Rpb25Mb2FkRW50cmllcyxcbiAgdHJhdmVyc2VDb2xsZWN0aW9uQ3Vyc29yOiBhY3Rpb25UcmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IsXG59O1xuXG5jb25zdCBDb25uZWN0ZWRFbnRyaWVzQ29sbGVjdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVudHJpZXNDb2xsZWN0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRlKCkoQ29ubmVjdGVkRW50cmllc0NvbGxlY3Rpb24pO1xuIl19 */"));
const GroupContainer = /*#__PURE__*/(0, _base.default)("div", {
  target: "eucqz2q0",
  label: "GroupContainer"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmlDIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbGxlY3Rpb24vRW50cmllcy9FbnRyaWVzQ29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEltbXV0YWJsZVByb3BUeXBlcyBmcm9tICdyZWFjdC1pbW11dGFibGUtcHJvcHR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1wb2x5Z2xvdCc7XG5pbXBvcnQgeyBwYXJ0aWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEN1cnNvciB9IGZyb20gJ2RlY2FwLWNtcy1saWItdXRpbCc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmltcG9ydCB7XG4gIGxvYWRFbnRyaWVzIGFzIGFjdGlvbkxvYWRFbnRyaWVzLFxuICB0cmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IgYXMgYWN0aW9uVHJhdmVyc2VDb2xsZWN0aW9uQ3Vyc29yLFxufSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2VudHJpZXMnO1xuaW1wb3J0IHtcbiAgc2VsZWN0RW50cmllcyxcbiAgc2VsZWN0RW50cmllc0xvYWRlZCxcbiAgc2VsZWN0SXNGZXRjaGluZyxcbiAgc2VsZWN0R3JvdXBzLFxufSBmcm9tICcuLi8uLi8uLi9yZWR1Y2Vycy9lbnRyaWVzJztcbmltcG9ydCB7IHNlbGVjdENvbGxlY3Rpb25FbnRyaWVzQ3Vyc29yIH0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMvY3Vyc29ycyc7XG5pbXBvcnQgRW50cmllcyBmcm9tICcuL0VudHJpZXMnO1xuXG5jb25zdCBHcm91cEhlYWRpbmcgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xuICBjb2xvcjogJHtjb2xvcnMudGV4dExlYWR9O1xuYDtcblxuY29uc3QgR3JvdXBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmZ1bmN0aW9uIGdldEdyb3VwRW50cmllcyhlbnRyaWVzLCBwYXRocykge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZW50cnkgPT4gcGF0aHMuaGFzKGVudHJ5LmdldCgncGF0aCcpKSk7XG59XG5cbmZ1bmN0aW9uIGdldEdyb3VwVGl0bGUoZ3JvdXAsIHQpIHtcbiAgY29uc3QgeyBsYWJlbCwgdmFsdWUgfSA9IGdyb3VwO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0KCdjb2xsZWN0aW9uLmdyb3Vwcy5vdGhlcicpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiB2YWx1ZSA/IGxhYmVsIDogdCgnY29sbGVjdGlvbi5ncm91cHMubmVnYXRlTGFiZWwnLCB7IGxhYmVsIH0pO1xuICB9XG4gIHJldHVybiBgJHtsYWJlbH0gJHt2YWx1ZX1gLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gd2l0aEdyb3Vwcyhncm91cHMsIGVudHJpZXMsIEVudHJpZXNUb1JlbmRlciwgdCkge1xuICByZXR1cm4gZ3JvdXBzLm1hcChncm91cCA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBnZXRHcm91cFRpdGxlKGdyb3VwLCB0KTtcbiAgICByZXR1cm4gKFxuICAgICAgPEdyb3VwQ29udGFpbmVyIGtleT17Z3JvdXAuaWR9IGlkPXtncm91cC5pZH0+XG4gICAgICAgIDxHcm91cEhlYWRpbmc+e3RpdGxlfTwvR3JvdXBIZWFkaW5nPlxuICAgICAgICA8RW50cmllc1RvUmVuZGVyIGVudHJpZXM9e2dldEdyb3VwRW50cmllcyhlbnRyaWVzLCBncm91cC5wYXRocyl9IC8+XG4gICAgICA8L0dyb3VwQ29udGFpbmVyPlxuICAgICk7XG4gIH0pO1xufVxuXG5leHBvcnQgY2xhc3MgRW50cmllc0NvbGxlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbGxlY3Rpb246IEltbXV0YWJsZVByb3BUeXBlcy5tYXAuaXNSZXF1aXJlZCxcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudHJpZXM6IEltbXV0YWJsZVByb3BUeXBlcy5saXN0LFxuICAgIGdyb3VwczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGlzRmV0Y2hpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmlld1N0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1cnNvcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxvYWRFbnRyaWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlbnRyaWVzTG9hZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIGVudHJpZXNMb2FkZWQsIGxvYWRFbnRyaWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjb2xsZWN0aW9uICYmICFlbnRyaWVzTG9hZGVkKSB7XG4gICAgICBsb2FkRW50cmllcyhjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzTG9hZGVkLCBsb2FkRW50cmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY29sbGVjdGlvbiAhPT0gcHJldlByb3BzLmNvbGxlY3Rpb24gJiYgIWVudHJpZXNMb2FkZWQpIHtcbiAgICAgIGxvYWRFbnRyaWVzKGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUN1cnNvckFjdGlvbnMgPSAoY3Vyc29yLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb24sIHRyYXZlcnNlQ29sbGVjdGlvbkN1cnNvciB9ID0gdGhpcy5wcm9wcztcbiAgICB0cmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IoY29sbGVjdGlvbiwgYWN0aW9uKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xsZWN0aW9uLCBlbnRyaWVzLCBncm91cHMsIGlzRmV0Y2hpbmcsIHZpZXdTdHlsZSwgY3Vyc29yLCBwYWdlLCB0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgRW50cmllc1RvUmVuZGVyID0gKHsgZW50cmllcyB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RW50cmllc1xuICAgICAgICAgIGNvbGxlY3Rpb25zPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIGVudHJpZXM9e2VudHJpZXN9XG4gICAgICAgICAgaXNGZXRjaGluZz17aXNGZXRjaGluZ31cbiAgICAgICAgICBjb2xsZWN0aW9uTmFtZT17Y29sbGVjdGlvbi5nZXQoJ2xhYmVsJyl9XG4gICAgICAgICAgdmlld1N0eWxlPXt2aWV3U3R5bGV9XG4gICAgICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICAgICAgaGFuZGxlQ3Vyc29yQWN0aW9ucz17cGFydGlhbCh0aGlzLmhhbmRsZUN1cnNvckFjdGlvbnMsIGN1cnNvcil9XG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmIChncm91cHMgJiYgZ3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB3aXRoR3JvdXBzKGdyb3VwcywgZW50cmllcywgRW50cmllc1RvUmVuZGVyLCB0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gPEVudHJpZXNUb1JlbmRlciBlbnRyaWVzPXtlbnRyaWVzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTmVzdGVkRW50cmllcyhwYXRoLCBjb2xsZWN0aW9uRm9sZGVyLCBlbnRyaWVzKSB7XG4gIGNvbnN0IGZpbHRlcmVkID0gZW50cmllcy5maWx0ZXIoZSA9PiB7XG4gICAgY29uc3QgZW50cnlQYXRoID0gZS5nZXQoJ3BhdGgnKS5zbGljZShjb2xsZWN0aW9uRm9sZGVyLmxlbmd0aCArIDEpO1xuICAgIGlmICghZW50cnlQYXRoLnN0YXJ0c1dpdGgocGF0aCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IHNob3cgaW1tZWRpYXRlIGNoaWxkcmVuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIC8vIG5vbiByb290IHBhdGhcbiAgICAgIGNvbnN0IHRyaW1tZWQgPSBlbnRyeVBhdGguc2xpY2UocGF0aC5sZW5ndGggKyAxKTtcbiAgICAgIHJldHVybiB0cmltbWVkLnNwbGl0KCcvJykubGVuZ3RoID09PSAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByb290IHBhdGhcbiAgICAgIHJldHVybiBlbnRyeVBhdGguc3BsaXQoJy8nKS5sZW5ndGggPD0gMjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWQ7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpIHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uLCB2aWV3U3R5bGUsIGZpbHRlclRlcm0gfSA9IG93blByb3BzO1xuICBjb25zdCBwYWdlID0gc3RhdGUuZW50cmllcy5nZXRJbihbJ3BhZ2VzJywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSwgJ3BhZ2UnXSk7XG5cbiAgbGV0IGVudHJpZXMgPSBzZWxlY3RFbnRyaWVzKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24pO1xuICBjb25zdCBncm91cHMgPSBzZWxlY3RHcm91cHMoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbik7XG5cbiAgaWYgKGNvbGxlY3Rpb24uaGFzKCduZXN0ZWQnKSkge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25Gb2xkZXIgPSBjb2xsZWN0aW9uLmdldCgnZm9sZGVyJyk7XG4gICAgZW50cmllcyA9IGZpbHRlck5lc3RlZEVudHJpZXMoZmlsdGVyVGVybSB8fCAnJywgY29sbGVjdGlvbkZvbGRlciwgZW50cmllcyk7XG4gIH1cbiAgY29uc3QgZW50cmllc0xvYWRlZCA9IHNlbGVjdEVudHJpZXNMb2FkZWQoc3RhdGUuZW50cmllcywgY29sbGVjdGlvbi5nZXQoJ25hbWUnKSk7XG4gIGNvbnN0IGlzRmV0Y2hpbmcgPSBzZWxlY3RJc0ZldGNoaW5nKHN0YXRlLmVudHJpZXMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuXG4gIGNvbnN0IHJhd0N1cnNvciA9IHNlbGVjdENvbGxlY3Rpb25FbnRyaWVzQ3Vyc29yKHN0YXRlLmN1cnNvcnMsIGNvbGxlY3Rpb24uZ2V0KCduYW1lJykpO1xuICBjb25zdCBjdXJzb3IgPSBDdXJzb3IuY3JlYXRlKHJhd0N1cnNvcikuY2xlYXJEYXRhKCk7XG5cbiAgcmV0dXJuIHsgY29sbGVjdGlvbiwgcGFnZSwgZW50cmllcywgZ3JvdXBzLCBlbnRyaWVzTG9hZGVkLCBpc0ZldGNoaW5nLCB2aWV3U3R5bGUsIGN1cnNvciB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRFbnRyaWVzOiBhY3Rpb25Mb2FkRW50cmllcyxcbiAgdHJhdmVyc2VDb2xsZWN0aW9uQ3Vyc29yOiBhY3Rpb25UcmF2ZXJzZUNvbGxlY3Rpb25DdXJzb3IsXG59O1xuXG5jb25zdCBDb25uZWN0ZWRFbnRyaWVzQ29sbGVjdGlvbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVudHJpZXNDb2xsZWN0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRlKCkoQ29ubmVjdGVkRW50cmllc0NvbGxlY3Rpb24pO1xuIl19 */");
function getGroupEntries(entries, paths) {
  return entries.filter(entry => paths.has(entry.get('path')));
}
function getGroupTitle(group, t) {
  const {
    label,
    value
  } = group;
  if (value === undefined) {
    return t('collection.groups.other');
  }
  if (typeof value === 'boolean') {
    return value ? label : t('collection.groups.negateLabel', {
      label
    });
  }
  return `${label} ${value}`.trim();
}
function withGroups(groups, entries, EntriesToRender, t) {
  return groups.map(group => {
    const title = getGroupTitle(group, t);
    return (0, _react2.jsx)(GroupContainer, {
      key: group.id,
      id: group.id
    }, (0, _react2.jsx)(GroupHeading, null, title), (0, _react2.jsx)(EntriesToRender, {
      entries: getGroupEntries(entries, group.paths)
    }));
  });
}
class EntriesCollection extends _react.default.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleCursorActions", (cursor, action) => {
      const {
        collection,
        traverseCollectionCursor
      } = this.props;
      traverseCollectionCursor(collection, action);
    });
  }
  componentDidMount() {
    const {
      collection,
      entriesLoaded,
      loadEntries
    } = this.props;
    if (collection && !entriesLoaded) {
      loadEntries(collection);
    }
  }
  componentDidUpdate(prevProps) {
    const {
      collection,
      entriesLoaded,
      loadEntries
    } = this.props;
    if (collection !== prevProps.collection && !entriesLoaded) {
      loadEntries(collection);
    }
  }
  render() {
    const {
      collection,
      entries,
      groups,
      isFetching,
      viewStyle,
      cursor,
      page,
      t
    } = this.props;
    const EntriesToRender = ({
      entries
    }) => {
      return (0, _react2.jsx)(_Entries.default, {
        collections: collection,
        entries: entries,
        isFetching: isFetching,
        collectionName: collection.get('label'),
        viewStyle: viewStyle,
        cursor: cursor,
        handleCursorActions: (0, _partial2.default)(this.handleCursorActions, cursor),
        page: page
      });
    };
    if (groups && groups.length > 0) {
      return withGroups(groups, entries, EntriesToRender, t);
    }
    return (0, _react2.jsx)(EntriesToRender, {
      entries: entries
    });
  }
}
exports.EntriesCollection = EntriesCollection;
_defineProperty(EntriesCollection, "propTypes", {
  collection: _reactImmutableProptypes.default.map.isRequired,
  page: _propTypes.default.number,
  entries: _reactImmutableProptypes.default.list,
  groups: _propTypes.default.array,
  isFetching: _propTypes.default.bool.isRequired,
  viewStyle: _propTypes.default.string,
  cursor: _propTypes.default.object.isRequired,
  loadEntries: _propTypes.default.func.isRequired,
  traverseCollectionCursor: _propTypes.default.func.isRequired,
  entriesLoaded: _propTypes.default.bool
});
function filterNestedEntries(path, collectionFolder, entries) {
  const filtered = entries.filter(e => {
    const entryPath = e.get('path').slice(collectionFolder.length + 1);
    if (!entryPath.startsWith(path)) {
      return false;
    }

    // only show immediate children
    if (path) {
      // non root path
      const trimmed = entryPath.slice(path.length + 1);
      return trimmed.split('/').length === 2;
    } else {
      // root path
      return entryPath.split('/').length <= 2;
    }
  });
  return filtered;
}
function mapStateToProps(state, ownProps) {
  const {
    collection,
    viewStyle,
    filterTerm
  } = ownProps;
  const page = state.entries.getIn(['pages', collection.get('name'), 'page']);
  let entries = (0, _entries2.selectEntries)(state.entries, collection);
  const groups = (0, _entries2.selectGroups)(state.entries, collection);
  if (collection.has('nested')) {
    const collectionFolder = collection.get('folder');
    entries = filterNestedEntries(filterTerm || '', collectionFolder, entries);
  }
  const entriesLoaded = (0, _entries2.selectEntriesLoaded)(state.entries, collection.get('name'));
  const isFetching = (0, _entries2.selectIsFetching)(state.entries, collection.get('name'));
  const rawCursor = (0, _cursors.selectCollectionEntriesCursor)(state.cursors, collection.get('name'));
  const cursor = _decapCmsLibUtil.Cursor.create(rawCursor).clearData();
  return {
    collection,
    page,
    entries,
    groups,
    entriesLoaded,
    isFetching,
    viewStyle,
    cursor
  };
}
const mapDispatchToProps = {
  loadEntries: _entries.loadEntries,
  traverseCollectionCursor: _entries.traverseCollectionCursor
};
const ConnectedEntriesCollection = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EntriesCollection);
var _default = exports.default = (0, _reactPolyglot.translate)()(ConnectedEntriesCollection);