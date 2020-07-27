import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Text from '../src';

export default {
  component: Text,
  title: 'Components/Individual/Text',
  decorators: [withKnobs],
};

export const TextDefault = () => (
  <Text>
    {text('Text', 'placeholder')}
  </Text>
);
