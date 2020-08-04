import React from 'react';
import { mount } from 'enzyme';

import Sidebar from '../src';

const testText = 'Something something test';
const testContent = (
  <span>
    {testText}
  </span>
);

describe('Sidebar', () => {
  it('Default', () => {
    const title = 'Title test';
    const wrapper = mount(
      <Sidebar
        title={title}
      >
        {testContent}
      </Sidebar>,
    );
    expect(wrapper.find('h3').text()).toEqual(title);
    expect(wrapper.find('span').text()).toEqual(testText);
  });
});
