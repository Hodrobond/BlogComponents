import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Link from '../src';

export default {
  component: Link,
  title: 'Components/Individual/Link',
  decorators: [withKnobs],
};

export const LinkDefault = () => (
  <Link
    href={text('href', 'https://www.google.com')}
  >
    {text('Text', 'placeholder')}
  </Link>
);
