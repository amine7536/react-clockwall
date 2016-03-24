'use strict';
/**
 * @fileOverview Clock Component
 * @author amine.benseddik@pixelfactory.io
 * @module Components
 */

import React from 'react';
import moment from 'moment-timezone';
import './Clock-locales';

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
class Clock extends React.Component {

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
    this.props.config.id = this.props.config.id || `pixelfactory-${this.props.config.town}`;
    this.props.config.locale = this.props.config.locale || 'en';
    this.props.config.showTown = this.props.config.showTown || true;
    this.props.config.showTimezone = this.props.config.showTimezone || true;
    this.props.config.showDate = this.props.config.showDate || true;

    /* Set Initlal State */
    this.state = {
      currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale)
    }
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
  getMoment(timezone, locale) {
    moment.locale(locale);
    let now = moment().tz(timezone);
    let tz = moment().tz(timezone).format('z');

    // Day
    let weekdays = moment.weekdays();
    let dayName = weekdays[now.get('day')];
    let day = now.get('date');

    // Month
    let months = moment.months();
    let monthName = months[now.month()];
    let month = now.get('month');

    // Year
    let year = now.get('year');

    // Time
    let hours = now.get('hour');
    let minutes = now.get('minute');
    let seconds = now.get('second');

    // return time object
    return {
      day: day,
      dayName: dayName,
      month: month,
      monthName: monthName,
      year: year,
      hours:   ( hours < 10 ? '0' : '' ) + hours,
      minutes: ( minutes < 10 ? '0' : '' ) + minutes,
      seconds: ( seconds < 10 ? '0' : '' ) + seconds,
      timezone: tz
    };
  }

  /**
  * React Component Method : [https://facebook.github.io/react/docs/component-specs.html](https://facebook.github.io/react/docs/component-specs.html)
  * Calls ```getMoment()``` every seconds and stores ```currentDate``` in component ```this.state```.
  */
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale) })
    }, 1000)
  }

  /**
  * Renders the Clock
  */
  render() {
    var config = this.props.config;

    return (
      <div id={config.id} className="clock">
      {config.showTown ?
        <h1 className="town">{config.town}</h1> :
      null}
      {config.showTimezone ?
        <h2 className="timezone">{config.timezone} {this.state.currentDate.timezone}</h2>:
      null}
        <ul className="time">
          <li className="hours">{this.state.currentDate.hours}</li>
          <li className="points">:</li>
          <li className="minutes">{this.state.currentDate.minutes}</li>
          <li className="seconds"><sup>{this.state.currentDate.seconds}</sup></li>
        </ul>
      {config.showDate ?
        <h1 className="date">{this.state.currentDate.dayName} {this.state.currentDate.day} {this.state.currentDate.monthName} {this.state.currentDate.year}</h1> :
      null}
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
  config: React.PropTypes.shape({
    town: React.PropTypes.string.isRequired,
    timezone: React.PropTypes.string.isRequired
  })
}

export default Clock;
