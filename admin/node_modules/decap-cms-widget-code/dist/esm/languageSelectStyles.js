"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _decapCmsUiDefault = require("decap-cms-ui-default");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const languageSelectStyles = _objectSpread(_objectSpread({}, _decapCmsUiDefault.reactSelectStyles), {}, {
  container: provided => _objectSpread(_objectSpread({}, _decapCmsUiDefault.reactSelectStyles.container(provided)), {}, {
    'margin-top': '2px'
  }),
  control: provided => _objectSpread(_objectSpread({}, _decapCmsUiDefault.reactSelectStyles.control(provided)), {}, {
    border: _decapCmsUiDefault.borders.textField,
    padding: 0,
    fontSize: '13px',
    minHeight: 'auto'
  }),
  dropdownIndicator: provided => _objectSpread(_objectSpread({}, _decapCmsUiDefault.reactSelectStyles.dropdownIndicator(provided)), {}, {
    padding: '4px'
  }),
  option: (provided, state) => _objectSpread(_objectSpread({}, _decapCmsUiDefault.reactSelectStyles.option(provided, state)), {}, {
    padding: 0,
    paddingLeft: '8px'
  }),
  menu: provided => _objectSpread(_objectSpread({}, _decapCmsUiDefault.reactSelectStyles.menu(provided)), {}, {
    margin: '2px 0'
  }),
  menuList: provided => _objectSpread(_objectSpread({}, provided), {}, {
    'max-height': '200px'
  })
});
var _default = exports.default = languageSelectStyles;