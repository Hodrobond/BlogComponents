import React from 'react';
import { withKnobs, date, text } from "@storybook/addon-knobs";
import DateDisplay from '../src';

export default {
  component: DateDisplay,
  title: 'Components/Individual/DateDisplay',
  decorators: [withKnobs],
};

export const BlogPostCardStory = () => (
  <DateDisplay
    date={date('Date', new Date('2017-06-13T16:00:00.000Z'))}
    languageCode={text('Language Code', 'en')}
    format={text('Date Format', 'MMMM Do, YYYY')}
  />);
