'use strict';
/**
 * @fileOverview Clock Component
 * @author amine.benseddik@pixelfactory.io
 * @module Components
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

require('./Clock-locales');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Clock React Component
*
* Usage :
* ```html
* <Clock config={{ timezone: 'Europe/Paris', town: 'Paris'}} />
* ```
* Required params :
* - **config.timezone** : [ISO Timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
* - **config.town** : Town name to display
*
* Defaults values :
* - **config.id** : CSS ```#id``` (default: ```pixelfactory-town```)
* - **config.locale** : ISO language code (default: ```en```)
* - **config.showTown** : Include TOWN name in rendered html (default: ```true```)
* - **config.showTimezone** : Include TIMEZONE name in rendered html (default: ```true```)
* - **config.showDate** : Include DATE in rendered html (default: ```true```)
*
* @extends React.Component
* @requires moment-timezone
* @requires Clock-locales
*/

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  /**
  * @description
  * #### constructor(props)
  *
  * Set Defaults values
  * Set Inital State : calls **getMoment()**
  *
  * @param props - React Component props [React Components](https://facebook.github.io/react/docs/reusable-components.html)
  */

  function Clock(props) {
    _classCallCheck(this, Clock);

    /* Set Default Props Values */

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clock).call(this, props));

    _this.props.config.id = _this.props.config.id || 'pixelfactory-' + _this.props.config.town;
    _this.props.config.locale = _this.props.config.locale || 'en';
    _this.props.config.showTown = _this.props.config.showTown || true;
    _this.props.config.showTimezone = _this.props.config.showTimezone || true;
    _this.props.config.showDate = _this.props.config.showDate || true;

    /* Set Initlal State */
    _this.state = {
      currentDate: _this.getMoment(_this.props.config.timezone, _this.props.config.locale)
    };
    return _this;
  }

  /**
  *
  * Get Date and Time using :
  * - moment.js [http://momentjs.com](http://momentjs.com)
  * - moment-timezone.js [http://momentjs.com/timezone/](http://momentjs.com/timezone/)
  *
  * ISO Timezones : [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
  * ISO Language Codes : [http://www.w3schools.com/tags/ref_language_codes.asp](http://www.w3schools.com/tags/ref_language_codes.asp)
  *
  * @param {string} timezone - ISO Timezone
  * @param {string} locale - ISO Language Code
  * @return {object}
  * ```json
  * {
  *   day: day,
  *   dayName: dayName,
  *   month: month,
  *   monthName: monthName,
  *   year: year,
  *   hours:   ( hours < 10 ? "0" : "" ) + hours,
  *   minutes: ( minutes < 10 ? "0" : "" ) + minutes,
  *   seconds: ( seconds < 10 ? "0" : "" ) + seconds,
  *   timezone: tz
  * }
  ```
  */


  _createClass(Clock, [{
    key: 'getMoment',
    value: function getMoment(timezone, locale) {
      _momentTimezone2.default.locale(locale);
      var now = (0, _momentTimezone2.default)().tz(timezone);
      var tz = (0, _momentTimezone2.default)().tz(timezone).format('z');

      // Day
      var weekdays = _momentTimezone2.default.weekdays();
      var dayName = weekdays[now.get('day')];
      var day = now.get('date');

      // Month
      var months = _momentTimezone2.default.months();
      var monthName = months[now.month()];
      var month = now.get('month');

      // Year
      var year = now.get('year');

      // Time
      var hours = now.get('hour');
      var minutes = now.get('minute');
      var seconds = now.get('second');

      // return time object
      return {
        day: day,
        dayName: dayName,
        month: month,
        monthName: monthName,
        year: year,
        hours: (hours < 10 ? '0' : '') + hours,
        minutes: (minutes < 10 ? '0' : '') + minutes,
        seconds: (seconds < 10 ? '0' : '') + seconds,
        timezone: tz
      };
    }

    /**
    * React Component Method : [https://facebook.github.io/react/docs/component-specs.html](https://facebook.github.io/react/docs/component-specs.html)
    * Calls ```getMoment()``` every seconds and stores ```currentDate``` in component ```this.state```.
    */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.setState({ currentDate: _this2.getMoment(_this2.props.config.timezone, _this2.props.config.locale) });
      }, 1000);
    }

    /**
    * Renders the Clock
    */

  }, {
    key: 'render',
    value: function render() {
      var config = this.props.config;

      return _react2.default.createElement(
        'div',
        { id: config.id, className: 'clock' },
        config.showTown ? _react2.default.createElement(
          'h1',
          { className: 'town' },
          config.town
        ) : null,
        config.showTimezone ? _react2.default.createElement(
          'h2',
          { className: 'timezone' },
          config.timezone,
          ' ',
          this.state.currentDate.timezone
        ) : null,
        _react2.default.createElement(
          'ul',
          { className: 'time' },
          _react2.default.createElement(
            'li',
            { className: 'hours' },
            this.state.currentDate.hours
          ),
          _react2.default.createElement(
            'li',
            { className: 'points' },
            ':'
          ),
          _react2.default.createElement(
            'li',
            { className: 'minutes' },
            this.state.currentDate.minutes
          ),
          _react2.default.createElement(
            'li',
            { className: 'seconds' },
            _react2.default.createElement(
              'sup',
              null,
              this.state.currentDate.seconds
            )
          )
        ),
        config.showDate ? _react2.default.createElement(
          'h1',
          { className: 'date' },
          this.state.currentDate.dayName,
          ' ',
          this.state.currentDate.day,
          ' ',
          this.state.currentDate.monthName,
          ' ',
          this.state.currentDate.year
        ) : null
      );
    }
  }]);

  return Clock;
}(_react2.default.Component);

/**
* Component PropTypes :
* - **config** : Object
* - **config.id** : String
* - **config.timezone** : String (isRequired)
* - **config.town** : String (isRequired)
* - **config.locale** : String
* - **config.showTown** : Bool
* - **config.showTimezone** : Bool
* - **config.showDate** : Bool
*
* Example :
* ```json
* config = {
*   id: "myclock",
*   timezone: "Europe/Paris",
*   town: "Paris",
*   "locale": "fr"
* }
* ```
*/


Clock.propTypes = {
  /* Required */
  config: _react2.default.PropTypes.shape({
    town: _react2.default.PropTypes.string.isRequired,
    timezone: _react2.default.PropTypes.string.isRequired
  })
};

exports.default = Clock;