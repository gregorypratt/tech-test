import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Price from './price';

describe('Price', () => {
  const props = { decimal: '9', num: '8', den: '1', viewAsDecimal: true };

  it('renders without crashing', () => {
    const component = shallow(<Price.WrappedComponent />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('shows the decimal value', () => {
    const component = shallow(<Price.WrappedComponent {...props} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('shows the fractional value', () => {
    props.viewAsDecimal = false;
    const component = shallow(<Price.WrappedComponent {...props} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
