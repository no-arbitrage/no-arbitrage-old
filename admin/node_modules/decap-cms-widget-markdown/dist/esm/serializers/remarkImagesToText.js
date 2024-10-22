"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remarkImagesToText;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Images must be parsed as shortcodes for asset proxying. This plugin converts
 * MDAST image nodes back to text to allow shortcode pattern matching. Note that
 * this transformation only occurs for images that are the sole child of a top
 * level paragraph - any other image is left alone and treated as an inline
 * image.
 */
function remarkImagesToText() {
  return transform;
  function transform(node) {
    const children = node.children.map(child => {
      if (child.type === 'paragraph' && child.children.length === 1 && child.children[0].type === 'image') {
        const {
          alt,
          url,
          title
        } = child.children[0];
        const value = `![${alt || ''}](${url || ''}${title ? ` "${title}"` : ''})`;
        child.children = [{
          type: 'text',
          value
        }];
      }
      return child;
    });
    return _objectSpread(_objectSpread({}, node), {}, {
      children
    });
  }
}