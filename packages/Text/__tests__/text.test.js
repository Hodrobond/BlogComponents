import React from 'react';
import { mount } from 'enzyme';

import Text from '../src';

const testContent = 'Something something test';

describe('RotationWrapper', () => {
  it('Default', () => {
    const wrapper = mount(
      <Text>
        {testContent}
      </Text>,
    );
    expect(wrapper.text()).toEqual(testContent);
  });
});
