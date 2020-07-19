import React from 'react';
import { withKnobs, color } from "@storybook/addon-knobs";
import HamburgerIcon from '../src';

export default {
  component: HamburgerIcon,
  title: 'Icons/HamburgerIcon',
  decorators: [withKnobs],
};

export const HamburgerIconStory = () => (
  <HamburgerIcon fill={color('Color', '#7ED6DF')} />
);
