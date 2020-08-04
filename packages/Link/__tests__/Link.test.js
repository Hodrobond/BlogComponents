import React from 'react';
import { mount } from 'enzyme';

import Link from '../src';

describe('Link', () => {
  it('Default', () => {
    const wrapper = mount(
      <Link />,
    );
    expect(wrapper.find('a')).toHaveLength(1);
  });
  it('Can add children', () => {
    const testContent = 'Something something test';
    const wrapper = mount(
      <Link>
        {testContent}
      </Link>,
    );
    expect(wrapper.find('a').text()).toEqual(testContent);
  });
});
