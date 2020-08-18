import React from 'react';
import { withKnobs, date, text } from "@storybook/addon-knobs";
import DeveloperCard from '../src';

export default {
  component: DeveloperCard,
  title: 'Components/Individual/DeveloperCard',
  decorators: [withKnobs],
};

export const DeveloperCardStory = () => <DeveloperCard/>;
