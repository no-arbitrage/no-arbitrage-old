"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "API", {
  enumerable: true,
  get: function () {
    return _decapCmsBackendGithub.API;
  }
});
Object.defineProperty(exports, "AuthenticationPage", {
  enumerable: true,
  get: function () {
    return _AuthenticationPage.default;
  }
});
Object.defineProperty(exports, "AwsCognitoGitHubProxyBackend", {
  enumerable: true,
  get: function () {
    return _implementation.default;
  }
});
exports.DecapCmsBackendAwsCognitoGithubProxy = void 0;
var _decapCmsBackendGithub = require("decap-cms-backend-github");
var _implementation = _interopRequireDefault(require("./implementation"));
var _AuthenticationPage = _interopRequireDefault(require("./AuthenticationPage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DecapCmsBackendAwsCognitoGithubProxy = exports.DecapCmsBackendAwsCognitoGithubProxy = {
  AwsCognitoGitHubProxyBackend: _implementation.default,
  API: _decapCmsBackendGithub.API,
  AuthenticationPage: _AuthenticationPage.default
};