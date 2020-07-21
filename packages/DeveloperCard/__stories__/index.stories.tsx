import React from 'react';
import { withKnobs, date, text } from "@storybook/addon-knobs";
import DeveloperCard from '../src';

export default {
  component: DeveloperCard,
  title: 'Components/Individual/DeveloperCard',
  decorators: [withKnobs],
};

export const DeveloperCardStory = () => (
  <DeveloperCard
    date={date('Date', new Date('2017-06-13T16:00:00.000Z'))}
    languageCode={text('Language Code', 'en')}
    format={text('Date Format', 'MMMM Do, YYYY')}
  />);
