"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class StringControl extends _react.default.Component {
  constructor(...args) {
    super(...args);
    // The selection to maintain for the input element
    _defineProperty(this, "_sel", 0);
    // The input element ref
    _defineProperty(this, "_el", null);
    _defineProperty(this, "handleChange", e => {
      this._sel = e.target.selectionStart;
      this.props.onChange(e.target.value);
    });
  }
  // NOTE: This prevents the cursor from jumping to the end of the text for
  // nested inputs. In other words, this is not an issue on top-level text
  // fields such as the `title` of a collection post. However, it becomes an
  // issue on fields nested within other components, namely widgets nested
  // within a `markdown` widget. For example, the alt text on a block image
  // within markdown.
  // SEE: https://github.com/decaporg/decap-cms/issues/4539
  // SEE: https://github.com/decaporg/decap-cms/issues/3578
  componentDidUpdate() {
    if (this._el && this._el.selectionStart !== this._sel) {
      this._el.setSelectionRange(this._sel, this._sel);
    }
  }
  render() {
    const {
      forID,
      value,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    return (0, _react2.jsx)("input", {
      ref: el => {
        this._el = el;
      },
      type: "text",
      id: forID,
      className: classNameWrapper,
      value: value || '',
      onChange: this.handleChange,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle
    });
  }
}
exports.default = StringControl;
_defineProperty(StringControl, "propTypes", {
  onChange: _propTypes.default.func.isRequired,
  forID: _propTypes.default.string,
  value: _propTypes.default.node,
  classNameWrapper: _propTypes.default.string.isRequired,
  setActiveStyle: _propTypes.default.func.isRequired,
  setInactiveStyle: _propTypes.default.func.isRequired
});
_defineProperty(StringControl, "defaultProps", {
  value: ''
});