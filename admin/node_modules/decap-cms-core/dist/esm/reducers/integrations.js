"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getIntegrations = getIntegrations;
exports.selectIntegration = selectIntegration;
var _immutable = require("immutable");
var _config = require("../actions/config");
const _excluded = ["hooks", "collections", "provider"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function getIntegrations(config) {
  const integrations = config.integrations || [];
  const newState = integrations.reduce((acc, integration) => {
    const {
        hooks,
        collections,
        provider
      } = integration,
      providerData = _objectWithoutProperties(integration, _excluded);
    acc.providers[provider] = _objectSpread({}, providerData);
    if (!collections) {
      hooks.forEach(hook => {
        acc.hooks[hook] = provider;
      });
      return acc;
    }
    const integrationCollections = collections === '*' ? config.collections.map(collection => collection.name) : collections;
    integrationCollections.forEach(collection => {
      hooks.forEach(hook => {
        acc.hooks[collection] ? acc.hooks[collection][hook] = provider : acc.hooks[collection] = {
          [hook]: provider
        };
      });
    });
    return acc;
  }, {
    providers: {},
    hooks: {}
  });
  return (0, _immutable.fromJS)(newState);
}
const defaultState = (0, _immutable.fromJS)({
  providers: {},
  hooks: {}
});
function integrations(state = defaultState, action) {
  switch (action.type) {
    case _config.CONFIG_SUCCESS:
      {
        return getIntegrations(action.payload);
      }
    default:
      return state;
  }
}
function selectIntegration(state, collection, hook) {
  return collection ? state.getIn(['hooks', collection, hook], false) : state.getIn(['hooks', hook], false);
}
var _default = exports.default = integrations;