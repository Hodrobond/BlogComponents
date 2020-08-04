import React from 'react';
import { mount } from 'enzyme';

import BlogPostCard from '../src';

const testDate = '2017-06-13T16:00:00.000Z';

describe('BlogPostCard', () => {
  it('Default', () => {
    const wrapper = mount(
      <div id="root">
        <BlogPostCard
          title={{
            text: 'Title test',
          }}
          date={testDate}
          description="Description test"
        />
      </div>,
    );
    expect(wrapper.find('h3').text()).toEqual('Title test');
    expect(wrapper.find('DateDisplay').text()).toEqual('June 13th, 2017');
    expect(wrapper.find('[data-test="description"]').text()).toEqual('Description test');
  });
});
