'use strict';

import React from 'react';
import moment from 'moment';
import './Clock-locales';

export default React.createClass({

  getInitialState: function() {
    return {
        currentDate: this.getMoment(this.props.config.offset, this.props.config.locale)
      }
  },

  getMoment: function(offset, locale){
    moment.locale(locale);
    let now = moment().utcOffset(offset);

    // Day
    let weekdays = moment.weekdays();
    let dayName = weekdays[now.weekday()];
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

    // return time as a string
    return {
      day: day,
      dayName: dayName,
      month: month,
      monthName: monthName,
      year: year,
      hours:   ( hours < 10 ? "0" : "" ) + hours,
      minutes: ( minutes < 10 ? "0" : "" ) + minutes,
      seconds: ( seconds < 10 ? "0" : "" ) + seconds
    };
  },

  componentDidMount: function() {
    setInterval(() => {
      this.setState({ currentDate: this.getMoment(this.props.config.offset, this.props.config.locale) })
    }, 1000)
  },

  render() {
    var config = this.props.config;
    return (
      <div className="clock">
      {config.showTown ?
        <h1 className="town">{config.town}</h1> :
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
