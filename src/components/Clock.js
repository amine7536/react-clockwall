'use strict';

import React from 'react';
import moment from 'moment-timezone';
import './Clock-locales';

/**
* Class Clock Component
* @extends React.Component
*/
export default class Clock extends React.Component {

  /**
  * Creates a new Clock Component
  * Set its inital State
  * Set defaults values for props
  * @param props - React Component props https://facebook.github.io/react/docs/reusable-components.html
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
  * Get currentDate
  * Use moment.js and moment-timezone.js to calculate current time and date with the given timezone and locale
  * @param {string} timezone - ISO Timezone from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  * @param {string} locale - ISO Language Code from http://www.w3schools.com/tags/ref_language_codes.asp
  * @return {object} currentDate - Javascript object containing full date and time
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
      hours:   ( hours < 10 ? "0" : "" ) + hours,
      minutes: ( minutes < 10 ? "0" : "" ) + minutes,
      seconds: ( seconds < 10 ? "0" : "" ) + seconds,
      timezone: tz
    };
  }

  /**
  * Start Time calculation
  * Calls getMoemnt every seconds
  */
  componentDidMount() {
    setInterval(() => {
      this.setState({ currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale) })
    }, 1000)
  }

  /**
  * Render Clock component
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

Clock.propTypes = {
  /* Required */
  config: React.PropTypes.shape({
    town: React.PropTypes.string.isRequired,
    timezone: React.PropTypes.string.isRequired
  })
}
