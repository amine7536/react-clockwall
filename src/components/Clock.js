'use strict';

import React from 'react';
import moment from 'moment-timezone';
import './Clock-locales';

export default React.createClass({

  propTypes: {
    /* Required */
    config: React.PropTypes.shape({
      town: React.PropTypes.string.isRequired,
      timezone: React.PropTypes.string.isRequired
    })
  },

  getInitialState: function() {
    /* Set Default Props Values */
    this.props.config.id = this.props.config.id || `pixelfactory-${this.props.config.town}`;
    this.props.config.locale = this.props.config.locale || 'en';
    this.props.config.showTown = this.props.config.showTown || true;
    this.props.config.showTimezone = this.props.config.showTimezone || true;
    this.props.config.showDate = this.props.config.showDate || true;

    return {
        currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale)
      }
  },

  getMoment: function(timezone, locale){
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
  },

  componentDidMount: function() {
    setInterval(() => {
      this.setState({ currentDate: this.getMoment(this.props.config.timezone, this.props.config.locale) })
    }, 1000)
  },

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
});
