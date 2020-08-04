import React from 'react';
import { mount } from 'enzyme';

import HamburgerIcon from '../src';

describe('HamburgerIcon', () => {
  it('Default', () => {
    const wrapper = mount(
      <HamburgerIcon />,
    );
    expect(wrapper.find('svg')).toHaveLength(1);
  });
  it('Can override fill', () => {
    const fill = '#FFFFFF';
    const wrapper = mount(
      <HamburgerIcon
        fill={fill}
      />,
    );
    expect(wrapper.find('svg').props().fill).toEqual(fill);
  });
});
