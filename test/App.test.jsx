import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/containers/App';

describe('<App />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
