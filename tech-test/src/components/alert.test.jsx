import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Alert from './alert';

describe('Alert', () => {
  it('renders without crashing', () => {
    const component = shallow(<Alert />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('is styled based on type', () => {
    const component = shallow(<Alert type="info" />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('displays the provided message', () => {
    const component = shallow(<Alert message="test message" />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});