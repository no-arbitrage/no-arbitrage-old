"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("@emotion/styled/base"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _decapCmsUiDefault = require("decap-cms-ui-default");
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const StyledAuthenticationPage = /*#__PURE__*/(0, _base.default)("section", {
  target: "e1ektlme1",
  label: "StyledAuthenticationPage"
})(process.env.NODE_ENV === "production" ? {
  name: "8azftg",
  styles: "display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;height:100vh"
} : {
  name: "8azftg",
  styles: "display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;height:100vh",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSytDIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEljb24sIGJ1dHRvbnMsIHNoYWRvd3MsIEdvQmFja0J1dHRvbiwgcmVuZGVyUGFnZUxvZ28gfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IFN0eWxlZEF1dGhlbnRpY2F0aW9uUGFnZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgTG9naW5CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke2J1dHRvbnMuYnV0dG9ufTtcbiAgJHtzaGFkb3dzLmRyb3BEZWVwfTtcbiAgJHtidXR0b25zLmRlZmF1bHR9O1xuICAke2J1dHRvbnMuZ3JheX07XG5cbiAgcGFkZGluZzogMCAzMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJHtJY29ufSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uTG9naW4odGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBpblByb2dyZXNzLCB0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRBdXRoZW50aWNhdGlvblBhZ2U+XG4gICAgICAgIHtyZW5kZXJQYWdlTG9nbyhjb25maWcubG9nb191cmwpfVxuICAgICAgICA8TG9naW5CdXR0b24gZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW59PlxuICAgICAgICAgIHtpblByb2dyZXNzID8gdCgnYXV0aC5sb2dnaW5nSW4nKSA6IHQoJ2F1dGgubG9naW4nKX1cbiAgICAgICAgPC9Mb2dpbkJ1dHRvbj5cbiAgICAgICAge2NvbmZpZy5zaXRlX3VybCAmJiA8R29CYWNrQnV0dG9uIGhyZWY9e2NvbmZpZy5zaXRlX3VybH0gdD17dH0+PC9Hb0JhY2tCdXR0b24+fVxuICAgICAgPC9TdHlsZWRBdXRoZW50aWNhdGlvblBhZ2U+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const LoginButton = /*#__PURE__*/(0, _base.default)("button", {
  target: "e1ektlme0",
  label: "LoginButton"
})(_decapCmsUiDefault.buttons.button, ";", _decapCmsUiDefault.shadows.dropDeep, ";", _decapCmsUiDefault.buttons.default, ";", _decapCmsUiDefault.buttons.gray, ";padding:0 30px;margin-top:0;display:flex;align-items:center;position:relative;", _decapCmsUiDefault.Icon, "{margin-right:18px;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEljb24sIGJ1dHRvbnMsIHNoYWRvd3MsIEdvQmFja0J1dHRvbiwgcmVuZGVyUGFnZUxvZ28gfSBmcm9tICdkZWNhcC1jbXMtdWktZGVmYXVsdCc7XG5cbmNvbnN0IFN0eWxlZEF1dGhlbnRpY2F0aW9uUGFnZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuYDtcblxuY29uc3QgTG9naW5CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke2J1dHRvbnMuYnV0dG9ufTtcbiAgJHtzaGFkb3dzLmRyb3BEZWVwfTtcbiAgJHtidXR0b25zLmRlZmF1bHR9O1xuICAke2J1dHRvbnMuZ3JheX07XG5cbiAgcGFkZGluZzogMCAzMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJHtJY29ufSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9uTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uTG9naW4odGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29uZmlnLCBpblByb2dyZXNzLCB0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRBdXRoZW50aWNhdGlvblBhZ2U+XG4gICAgICAgIHtyZW5kZXJQYWdlTG9nbyhjb25maWcubG9nb191cmwpfVxuICAgICAgICA8TG9naW5CdXR0b24gZGlzYWJsZWQ9e2luUHJvZ3Jlc3N9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW59PlxuICAgICAgICAgIHtpblByb2dyZXNzID8gdCgnYXV0aC5sb2dnaW5nSW4nKSA6IHQoJ2F1dGgubG9naW4nKX1cbiAgICAgICAgPC9Mb2dpbkJ1dHRvbj5cbiAgICAgICAge2NvbmZpZy5zaXRlX3VybCAmJiA8R29CYWNrQnV0dG9uIGhyZWY9e2NvbmZpZy5zaXRlX3VybH0gdD17dH0+PC9Hb0JhY2tCdXR0b24+fVxuICAgICAgPC9TdHlsZWRBdXRoZW50aWNhdGlvblBhZ2U+XG4gICAgKTtcbiAgfVxufVxuIl19 */"));
class AuthenticationPage extends _react.default.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleLogin", e => {
      e.preventDefault();
      this.props.onLogin(this.state);
    });
  }
  render() {
    const {
      config,
      inProgress,
      t
    } = this.props;
    return (0, _react2.jsx)(StyledAuthenticationPage, null, (0, _decapCmsUiDefault.renderPageLogo)(config.logo_url), (0, _react2.jsx)(LoginButton, {
      disabled: inProgress,
      onClick: this.handleLogin
    }, inProgress ? t('auth.loggingIn') : t('auth.login')), config.site_url && (0, _react2.jsx)(_decapCmsUiDefault.GoBackButton, {
      href: config.site_url,
      t: t
    }));
  }
}
exports.default = AuthenticationPage;
_defineProperty(AuthenticationPage, "propTypes", {
  onLogin: _propTypes.default.func.isRequired,
  inProgress: _propTypes.default.bool,
  config: _propTypes.default.object.isRequired,
  t: _propTypes.default.func.isRequired
});