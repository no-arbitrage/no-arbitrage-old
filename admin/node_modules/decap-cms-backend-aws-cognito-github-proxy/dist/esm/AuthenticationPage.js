"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _base = _interopRequireDefault(require("@emotion/styled/base"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _decapCmsLibAuth = require("decap-cms-lib-auth");
var _decapCmsUiDefault = require("decap-cms-ui-default");
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
const LoginButtonIcon = /*#__PURE__*/(0, _base.default)(_decapCmsUiDefault.Icon, {
  target: "e1eykva80",
  label: "LoginButtonIcon"
})(process.env.NODE_ENV === "production" ? {
  name: "1gnqu05",
  styles: "margin-right:18px"
} : {
  name: "1gnqu05",
  styles: "margin-right:18px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9DIiwiZmlsZSI6Ii4uLy4uL3NyYy9BdXRoZW50aWNhdGlvblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IFBrY2VBdXRoZW50aWNhdG9yIH0gZnJvbSAnZGVjYXAtY21zLWxpYi1hdXRoJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFnZSwgSWNvbiB9IGZyb20gJ2RlY2FwLWNtcy11aS1kZWZhdWx0JztcblxuY29uc3QgTG9naW5CdXR0b25JY29uID0gc3R5bGVkKEljb24pYFxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW5lcmljUEtDRUF1dGhlbnRpY2F0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5Qcm9ncmVzczogUHJvcFR5cGVzLmJvb2wsXG4gICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25Mb2dpbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge307XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmFzZV91cmwgPSAnJyxcbiAgICAgIGFwcF9pZCA9ICcnLFxuICAgICAgYXV0aF9lbmRwb2ludCA9ICdvYXV0aDIvYXV0aG9yaXplJyxcbiAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnQgPSAnb2F1dGgyL3Rva2VuJyxcbiAgICB9ID0gdGhpcy5wcm9wcy5jb25maWcuYmFja2VuZDtcbiAgICB0aGlzLmF1dGggPSBuZXcgUGtjZUF1dGhlbnRpY2F0b3Ioe1xuICAgICAgYmFzZV91cmwsXG4gICAgICBhdXRoX2VuZHBvaW50LFxuICAgICAgYXBwX2lkLFxuICAgICAgYXV0aF90b2tlbl9lbmRwb2ludCxcbiAgICAgIGF1dGhfdG9rZW5fZW5kcG9pbnRfY29udGVudF90eXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04JyxcbiAgICB9KTtcbiAgICAvLyBDb21wbGV0ZSBhdXRoZW50aWNhdGlvbiBpZiB3ZSB3ZXJlIHJlZGlyZWN0ZWQgYmFjayB0byBmcm9tIHRoZSBwcm92aWRlci5cbiAgICB0aGlzLmF1dGguY29tcGxldGVBdXRoKChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ2luRXJyb3I6IGVyci50b1N0cmluZygpIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm9uTG9naW4oZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVMb2dpbiA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmF1dGguYXV0aGVudGljYXRlKHsgc2NvcGU6ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG8gb3BlbmlkIGVtYWlsJyB9LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dpbkVycm9yOiBlcnIudG9TdHJpbmcoKSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vbkxvZ2luKGRhdGEpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGluUHJvZ3Jlc3MsIGNvbmZpZywgdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEF1dGhlbnRpY2F0aW9uUGFnZVxuICAgICAgICBvbkxvZ2luPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICBsb2dpbkRpc2FibGVkPXtpblByb2dyZXNzfVxuICAgICAgICBsb2dpbkVycm9yTWVzc2FnZT17dGhpcy5zdGF0ZS5sb2dpbkVycm9yfVxuICAgICAgICBsb2dvVXJsPXtjb25maWcubG9nb191cmx9XG4gICAgICAgIHNpdGVVcmw9e2NvbmZpZy5zaXRlX3VybH1cbiAgICAgICAgcmVuZGVyQnV0dG9uQ29udGVudD17KCkgPT4gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxMb2dpbkJ1dHRvbkljb24gdHlwZT1cImxpbmtcIiAvPiB7aW5Qcm9ncmVzcyA/IHQoJ2F1dGgubG9nZ2luZ0luJykgOiB0KCdhdXRoLmxvZ2luJyl9XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgICAgdD17dH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
class GenericPKCEAuthenticationPage extends _react.default.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {});
    _defineProperty(this, "handleLogin", e => {
      e.preventDefault();
      this.auth.authenticate({
        scope: 'https://api.github.com/repo openid email'
      }, (err, data) => {
        if (err) {
          this.setState({
            loginError: err.toString()
          });
          return;
        }
        this.props.onLogin(data);
      });
    });
  }
  componentDidMount() {
    const {
      base_url = '',
      app_id = '',
      auth_endpoint = 'oauth2/authorize',
      auth_token_endpoint = 'oauth2/token'
    } = this.props.config.backend;
    this.auth = new _decapCmsLibAuth.PkceAuthenticator({
      base_url,
      auth_endpoint,
      app_id,
      auth_token_endpoint,
      auth_token_endpoint_content_type: 'application/x-www-form-urlencoded; charset=utf-8'
    });
    // Complete authentication if we were redirected back to from the provider.
    this.auth.completeAuth((err, data) => {
      if (err) {
        this.setState({
          loginError: err.toString()
        });
        return;
      }
      this.props.onLogin(data);
    });
  }
  render() {
    const {
      inProgress,
      config,
      t
    } = this.props;
    return (0, _react2.jsx)(_decapCmsUiDefault.AuthenticationPage, {
      onLogin: this.handleLogin,
      loginDisabled: inProgress,
      loginErrorMessage: this.state.loginError,
      logoUrl: config.logo_url,
      siteUrl: config.site_url,
      renderButtonContent: () => (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(LoginButtonIcon, {
        type: "link"
      }), " ", inProgress ? t('auth.loggingIn') : t('auth.login')),
      t: t
    });
  }
}
exports.default = GenericPKCEAuthenticationPage;
_defineProperty(GenericPKCEAuthenticationPage, "propTypes", {
  inProgress: _propTypes.default.bool,
  config: _propTypes.default.object.isRequired,
  onLogin: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
});