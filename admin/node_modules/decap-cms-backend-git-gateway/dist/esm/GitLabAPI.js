"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _decapCmsBackendGitlab = require("decap-cms-backend-gitlab");
var _decapCmsLibUtil = require("decap-cms-lib-util");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class API extends _decapCmsBackendGitlab.API {
  constructor(config) {
    super(config);
    _defineProperty(this, "tokenPromise", void 0);
    _defineProperty(this, "withAuthorizationHeaders", async req => {
      const token = await this.tokenPromise();
      return _decapCmsLibUtil.unsentRequest.withHeaders({
        Authorization: `Bearer ${token}`
      }, req);
    });
    _defineProperty(this, "hasWriteAccess", () => Promise.resolve(true));
    this.tokenPromise = config.tokenPromise;
    this.commitAuthor = config.commitAuthor;
    this.repoURL = '';
  }
}
exports.default = API;