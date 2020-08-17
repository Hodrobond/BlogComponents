import React from 'react';
import { mount } from 'enzyme';

import DeveloperCard from '../src';

describe('Developer Card', () => {
  it('Default', () => {
    const wrapper = mount(
      <DeveloperCard />,
    );
    expect(wrapper.find('img')).toHaveLength(1);
  });
  // it('Can overwrite image url', () => {
  //   const wrapper = mount(
  //     <DeveloperCard
  //       imageUrl="https://www.google.com"
  //     />,
  //   );
  //   expect(wrapper.find('img').prop('src')).toEqual({ imageUrl: 'https://www.google.com' });
  // });
});
