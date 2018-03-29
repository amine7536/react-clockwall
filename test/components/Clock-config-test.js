import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import Clock from '../../src/components/Clock';

describe('Clock Config: ', () => {
  const config = {
    town: 'Fort Collins',
    timezone: 'America/Denver',
    locale: 'en',
    showTown: false,
    showTimezone: false,
    showDate: false
  };

  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<Clock config={config}/>);
  const clock = shallowRenderer.getRenderOutput();

  // Get Clock Element
  it('clock should be a <div> container', () => {
    expect(clock.type).to.equal('div');
  });

  // console.log(clock.props.children[0]);
  // console.log(clock.props.children[1]);
  // console.log(clock.props.children[2]);
  // console.log(clock.props.children[3]);

  // Town Should Be Null
  const town = clock.props.children[0];
  it('town should be null', () => {
    expect(town).to.eql(null);
  });

  // Timezone Should Be Null
  const timezone = clock.props.children[1];
  it('timezone should be null', () => {
    expect(timezone).to.eql(null);
  });

  // Date Should Be Null
  const date = clock.props.children[3];
  it('date should be null', () => {
    expect(date).to.eql(null);
  });

});
