"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.validateMinMax = validateMinMax;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));
var _react2 = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ValidationErrorTypes = {
  PRESENCE: 'PRESENCE',
  PATTERN: 'PATTERN',
  RANGE: 'RANGE',
  CUSTOM: 'CUSTOM'
};
function validateMinMax(value, min, max, field, t) {
  let error;
  switch (true) {
    case value !== '' && min !== false && max !== false && (value < min || value > max):
      error = {
        type: ValidationErrorTypes.RANGE,
        message: t('editor.editorControlPane.widget.range', {
          fieldLabel: field.get('label', field.get('name')),
          minValue: min,
          maxValue: max
        })
      };
      break;
    case value !== '' && min !== false && value < min:
      error = {
        type: ValidationErrorTypes.RANGE,
        message: t('editor.editorControlPane.widget.min', {
          fieldLabel: field.get('label', field.get('name')),
          minValue: min
        })
      };
      break;
    case value !== '' && max !== false && value > max:
      error = {
        type: ValidationErrorTypes.RANGE,
        message: t('editor.editorControlPane.widget.max', {
          fieldLabel: field.get('label', field.get('name')),
          maxValue: max
        })
      };
      break;
    default:
      error = null;
      break;
  }
  return error;
}
class NumberControl extends _react.default.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleChange", e => {
      const valueType = this.props.field.get('value_type');
      const {
        onChange
      } = this.props;
      const value = valueType === 'float' ? parseFloat(e.target.value) : parseInt(e.target.value, 10);
      if (!isNaN(value)) {
        onChange(value);
      } else {
        onChange('');
      }
    });
    _defineProperty(this, "isValid", () => {
      const {
        field,
        value,
        t
      } = this.props;
      const hasPattern = !!field.get('pattern', false);
      const min = field.get('min', false);
      const max = field.get('max', false);

      // Pattern overrides min/max logic always:
      if (hasPattern) {
        return true;
      }
      const error = validateMinMax(value, min, max, field, t);
      return error ? {
        error
      } : true;
    });
  }
  render() {
    const {
      field,
      value,
      classNameWrapper,
      forID,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    const min = field.get('min', '');
    const max = field.get('max', '');
    const step = field.get('step', field.get('value_type') === 'int' ? 1 : '');
    return (0, _react2.jsx)("input", {
      type: "number",
      id: forID,
      className: classNameWrapper,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle,
      value: value || (value === 0 ? value : ''),
      step: step,
      min: min,
      max: max,
      onChange: this.handleChange
    });
  }
}
exports.default = NumberControl;
_defineProperty(NumberControl, "propTypes", {
  field: _reactImmutableProptypes.default.map.isRequired,
  onChange: _propTypes.default.func.isRequired,
  classNameWrapper: _propTypes.default.string.isRequired,
  setActiveStyle: _propTypes.default.func.isRequired,
  setInactiveStyle: _propTypes.default.func.isRequired,
  value: _propTypes.default.node,
  forID: _propTypes.default.string,
  valueType: _propTypes.default.string,
  step: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  t: _propTypes.default.func.isRequired
});
_defineProperty(NumberControl, "defaultProps", {
  value: ''
});