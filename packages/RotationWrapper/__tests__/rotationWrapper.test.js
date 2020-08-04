import React from 'react';
import { mount } from 'enzyme';

import RotationWrapper from '../src';

const testContent = 'Something something test';

describe('RotationWrapper', () => {
  it('Default', () => {
    const wrapper = mount(
      <RotationWrapper>
        {testContent}
      </RotationWrapper>,
    );
    expect(wrapper.find('div').props().rotate).toEqual(false);
    wrapper.simulate('click');
    expect(wrapper.find('div').props().rotate).toEqual(true);
  });
});
