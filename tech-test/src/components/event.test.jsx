import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Event from './event';

describe('Event', () => {
  const props = {
    competitors: [
      { name: 'Team A', position: 'home' },
      { name: 'Team B', position: 'away' }
    ],
    startTime: '2017-09-19T11:35:23.000Z'
  };

  it('renders without crashing', () => {
    const component = shallow(<Event />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('displays teams and start time correctly', () => {
    const component = shallow(<Event {...props} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});