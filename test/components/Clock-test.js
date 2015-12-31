import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import Clock from '../../src/components/Clock';
import moment from 'moment-timezone';


describe('Clock: ', () => {
  var config={ town: 'Paris', timezone: 'Europe/Paris', locale: 'fr', showTown: true, showTimezone: true, showDate: true };

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<Clock config={{ town: 'Paris', timezone: 'Europe/Paris', locale: 'fr', showTown: true, showTimezone: true, showDate: true }}/>);
  const clock = shallowRenderer.getRenderOutput();

  // Should call Component Method instead, to be changed in next version
  moment.locale(config.locale);
  let now = moment().tz(config.timezone);
  let tz = moment().tz(config.timezone).format('z');
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
  let h = ( now.get('hour') < 10 ? "0" : "" ) + now.get('hour');
  let m = ( now.get('minute') < 10 ? "0" : "" ) + now.get('minute');
  let s = ( now.get('second') < 10 ? "0" : "" ) + now.get('second');

  // Test Clock Element
  it('should be a <div> container', () => {
    expect(clock.type).to.equal('div');
  });
  it('should have a className "clock"', () => {
    expect(clock.props.className).to.eql('clock');
  });

  // console.log(clock.props.children[0]);
  // console.log(clock.props.children[1]);
  // console.log(clock.props.children[2]);
  // console.log(clock.props.children[2]);

  // Test Town Element
  const town = clock.props.children[0]
  it('town should be a <h1> tag', () => {
    expect(town.type).to.eql('h1');
  });
  it('town should have className "town"', () => {
    expect(town.props.className).to.eql('town');
  });
  it(`town should contain the text "${config.town}"`, () => {
    expect(town.props.children).to.eql('Paris');
  });

  // Test Timezone Element
  const timezone = clock.props.children[1]
  it('timezone should be a <h2> tag', () => {
    expect(timezone.type).to.eql('h2');
  });
  it('timezone should have className "timezone"', () => {
    expect(timezone.props.className).to.eql('timezone');
  });
  it(`timezone should contain the text "${config.timezone} ${tz.toString()}`, () => {
    expect(timezone.props.children.join('')).to.eql('Europe/Paris CET');
  });

  // Test Time Element
  const time = clock.props.children[2];
  it('time should be a <ul> tag', () => {
    expect(time.type).to.eql('ul');
  });
  it('time should have className "time"', () => {
    expect(time.props.className).to.eql('time');
  });

  // Test Hours Element
  const hours = time.props.children[0];
  it('hours should be a <li> tag', () => {
    expect(hours.type).to.eql('li');
  });
  it('hours should have className "hours"', () => {
    expect(hours.props.className).to.eql('hours');
  });
  it(`hours should equal "${h.toString()}"`, () => {
    expect(hours.props.children).to.eql(h.toString());
  })

  // Test Points Element
  const points = time.props.children[1];
  it('points should be a <li> tag', () => {
    expect(points.type).to.eql('li');
  });
  it('points should have className "points"', () => {
    expect(points.props.className).to.eql('points');
  });

  // Test Minutes Element
  const minutes = time.props.children[2];
  it('minutes should be a <li> tag', () => {
    expect(minutes.type).to.eql('li');
  });
  it('minutes should have className "minutes"', () => {
    expect(minutes.props.className).to.eql('minutes');
  });
  it(`minutes should equal "${m.toString()}"`, () => {
    expect(minutes.props.children).to.eql(m.toString());
  })

  // Test Seconds Element
  const seconds = time.props.children[3];
  it('seconds should be a <li> tag', () => {
    expect(seconds.type).to.eql('li');
  });
  it('seconds should have className "seconds"', () => {
    expect(seconds.props.className).to.eql('seconds');
  });
  // Warning : could fail if test last longuer than 1sec
  it(`seconds should equal "${s.toString()}"`, () => {
    expect(seconds.props.children.props.children).to.eql(s.toString());
  });

  // Test Date Element
  const date = clock.props.children[3];
  it('date should be a <h1> tag', () => {
    expect(date.type).to.eql('h1');
  });
  it('date should have className "date"', () => {
    expect(date.props.className).to.eql('date');
  });
  it(`date should equal "${dayName} ${day} ${monthName} ${year}"`, () => {
    expect(date.props.children.join('')).to.eql(`${dayName} ${day} ${monthName} ${year}`);
  });

});
