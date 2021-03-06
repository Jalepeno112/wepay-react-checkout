'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Base2 = require('../../../../Base');

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostalCode = function (_Base) {
  _inherits(PostalCode, _Base);

  function PostalCode(props) {
    _classCallCheck(this, PostalCode);

    var _this = _possibleConstructorReturn(this, (PostalCode.__proto__ || Object.getPrototypeOf(PostalCode)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(PostalCode, [{
    key: 'handleChange',
    value: function handleChange(e) {
      _get(PostalCode.prototype.__proto__ || Object.getPrototypeOf(PostalCode.prototype), 'handleChange', this).call(this, 'value', e.target.value.toUpperCase());
    }
  }, {
    key: 'validate',
    value: function validate() {
      if (this.props.value === '' || !this.props.value) {
        return null;
      }

      if (this.props.country === 'US') {
        return this.validateUS(this.props.value) ? 'success' : 'error';
      } else if (this.props.country === 'CA') {
        return this.validateCA(this.props.value) ? 'success' : 'error';
      } else {
        // we don't have validation for every country
        return null;
      }
    }
  }, {
    key: 'validateUS',
    value: function validateUS(value) {
      // https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
      var pattern = new RegExp('(^\\d{5}$)|(^\\d{5}-\\d{4}$)');

      return this.validateCountryPostalCode(value, pattern);
    }
  }, {
    key: 'validateCA',
    value: function validateCA(value) {
      // https://stackoverflow.com/questions/1146202/canadian-postal-code-validation
      var pattern = new RegExp('[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ]\\s?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]');

      return this.validateCountryPostalCode(value, pattern);
    }
  }, {
    key: 'validateCountryPostalCode',
    value: function validateCountryPostalCode(value, pattern) {
      return pattern.test(value.toUpperCase());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { validationState: this.validate() },
        _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          this.props.country === 'US' ? 'Zip Code' : 'Postal Code'
        ),
        _react2.default.createElement(_reactBootstrap.FormControl, {
          id: 'postalcode',
          name: 'postalcode',
          type: 'tel',
          placeholder: this.props.country === 'US' ? 'Zip Code' : 'Postal Code',
          value: this.props.value,
          onChange: this.handleChange,
          required: 'true' })
      );
    }
  }]);

  return PostalCode;
}(_Base3.default);

// extend existing propTypes


PostalCode.propTypes = Object.assign({
  country: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string
}, PostalCode.propTypes);

PostalCode.defaultProps = Object.assign({
  value: '',
  componentName: 'postal_code'
}, PostalCode.defaultProps);

exports.default = PostalCode;