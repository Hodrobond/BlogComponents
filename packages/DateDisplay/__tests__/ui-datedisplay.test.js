import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import DateDisplay from '../src';

const testDate = '2017-06-13T16:00:00.000Z';

describe('DateDisplay', () => {
  it('Default', () => {
    const wrapper = mount(
      <DateDisplay
        date={testDate}
      />,
    );
    expect(wrapper.text()).to.equal('June 13th, 2017');
  });
  it('Renders with all props passed', () => {
    const wrapper = mount(
      <DateDisplay
        date={testDate}
        languageCode="en"
        format="MMMM Do, YYYY"
      />,
    );
    expect(wrapper.text()).to.equal('June 13th, 2017');
  });

  it('Renders locale and format correctly', () => {
    const wrapper = mount(
      <DateDisplay
        date={testDate}
        languageCode="ja"
        format="MMMM dddd, YYYY"
      />,
    );
    expect(wrapper.text()).to.equal('6月 火曜日, 2017');
  });
});
