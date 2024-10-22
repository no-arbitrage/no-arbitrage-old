"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _decapCmsBackendGithub = require("decap-cms-backend-github");
var _AuthenticationPage = _interopRequireDefault(require("./AuthenticationPage"));
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
class AwsCognitoGitHubProxyBackend extends _decapCmsBackendGithub.GitHubBackend {
  constructor(config, options = {}) {
    super(config, options);
    this.bypassWriteAccessCheckForAppTokens = true;
    this.tokenKeyword = 'Bearer';
  }
  authComponent() {
    const wrappedAuthenticationPage = props => (0, _react2.jsx)(_AuthenticationPage.default, _extends({}, props, {
      backend: this
    }));
    wrappedAuthenticationPage.displayName = 'AuthenticationPage';
    return wrappedAuthenticationPage;
  }
  async currentUser({
    token
  }) {
    if (!this._currentUserPromise) {
      this._currentUserPromise = fetch(this.baseUrl + '/oauth2/userInfo', {
        headers: {
          Authorization: `${this.tokenKeyword} ${token}`
        }
      }).then(async res => {
        if (res.status == 401) {
          this.logout();
          return Promise.reject('Token expired');
        }
        const userInfo = await res.json();
        const owner = this.originRepo.split('/')[1];
        return {
          name: userInfo.email,
          login: owner,
          avatar_url: `https://github.com/${owner}.png`
        };
      });
    }
    return this._currentUserPromise;
  }
  async getPullRequestAuthor(pullRequest) {
    var _pullRequest$user;
    return (_pullRequest$user = pullRequest.user) === null || _pullRequest$user === void 0 ? void 0 : _pullRequest$user.login;
  }
}
exports.default = AwsCognitoGitHubProxyBackend;