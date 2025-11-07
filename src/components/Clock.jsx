/**
 * @fileOverview Clock Component
 * @author amine.benseddik@pixelfactory.io
 * @module Components
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
// Locales loaded on demand by moment when needed
// import './Clock-locales';

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
* - **config.meridiem** : Use 12 hour clock (default: ```false```)
*
* @extends React.Component
* @requires moment-timezone
* @requires Clock-locales
*/
class Clock extends Component {
  /**
  * @description
  * #### constructor(props)
  *
  * Set Defaults values
  * Set Inital State : calls **getMoment()**
  *
  * @param props - React Component props [React Components](https://facebook.github.io/react/docs/reusable-components.html)
  */
  constructor(props) {
    super(props);

    /* Set Default Props Values */
    if (this.props.config.id === undefined) { this.props.config.id = `pixelfactory-${this.props.config.town}`; }
    if (this.props.config.locale === undefined) { this.props.config.locale = 'en'; }
    if (this.props.config.showTown === undefined) { this.props.config.showTown = true; }
    if (this.props.config.showTimezone === undefined) { this.props.config.showTimezone = true; }
    if (this.props.config.showDate === undefined) { this.props.config.showDate = true; }
    if (this.props.config.meridiem === undefined) { this.props.config.meridiem = false; }

    /* Set Initlal State */
    this.state = {
      currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale)
    };
  }

  /**
  * React Component Method : [https://facebook.github.io/react/docs/component-specs.html](https://facebook.github.io/react/docs/component-specs.html)
  * Calls `getMoment()` every seconds and stores `currentDate` in component `this.state`.
  */
  componentDidMount() {
    const tic = setInterval(() => {
      this.setState({
        currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale)
      });
    }, 1000);

    /* Save interval to state otherwise it will not survive render cycle */
    this.setState({ tic });
  }

  /**
   * React Component Method : [https://facebook.github.io/react/docs/component-specs.html](https://facebook.github.io/react/docs/component-specs.html)
   * Clear Interval when component is unmounted
   * github issue #1 : https://github.com/amine7536/react-clockwall/issues/1
   */
  componentWillUnmount() {
    clearInterval(this.state.tic);
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
  *   meridiem: meridiem,
  *   timezone: tz
  * }
  *```
  */
  getMoment(timezone, locale) {
    moment.locale(locale);
    const now = moment().tz(timezone);
    const tz = moment().tz(timezone).format('z');

    // Day
    const weekdays = moment.weekdays();
    const dayName = weekdays[now.get('day')];
    const day = now.get('date');

    // Month
    const months = moment.months();
    const monthName = months[now.month()];
    const month = now.get('month');

    // Year
    const year = now.get('year');

    // Time
    let hours = now.get('hour');
    const meridiem = (hours < 12) ? 'AM' : 'PM';
    hours = (this.props.config.meridiem && meridiem === 'PM') ? (hours - 12) : hours;
    const minutes = now.get('minute');
    const seconds = now.get('second');

    // return time object
    return {
      day,
      dayName,
      month,
      monthName,
      year,
      hours: (hours < 10 ? '0' : '') + hours,
      minutes: (minutes < 10 ? '0' : '') + minutes,
      seconds: (seconds < 10 ? '0' : '') + seconds,
      meridiem,
      timezone: tz
    };
  }

  /**
  * Renders the Clock
  */
  render() {
    const { config } = this.props;
    const {
      timezone,
      hours,
      minutes,
      seconds,
      meridiem,
      dayName,
      day,
      monthName,
      year,
    } = this.state.currentDate;

    return (
      <div id={config.id} className="clock">
        {config.showTown
          ? <h1 className="town">{config.town}</h1>
          : null}
        {config.showTimezone
          ? (
            <h2 className="timezone">
              {config.timezone}
              {' '}
              {timezone}
            </h2>
          )
          : null}
        <ul className="time">
          <li className="hours">{hours}</li>
          <li className="points">:</li>
          <li className="minutes">{minutes}</li>
          <li className="sectional">
            <sup className="seconds">{seconds}</sup>
            {config.meridiem
              ? <sub className="meridiem">{meridiem}</sub>
              : null}
          </li>
        </ul>
        {config.showDate
          ? (
            <h1 className="date">
              {dayName}
              {' '}
              {day}
              {' '}
              {monthName}
              {' '}
              {year}
            </h1>
          )
          : null}
      </div>
    );
  }
}

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
* - **config.meridiem** : Bool
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
  config: PropTypes.shape({
    town: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    id: PropTypes.string,
    locale: PropTypes.string,
    showTown: PropTypes.bool,
    showTimezone: PropTypes.bool,
    showDate: PropTypes.bool,
    meridiem: PropTypes.bool,
  })
};

export default Clock;
