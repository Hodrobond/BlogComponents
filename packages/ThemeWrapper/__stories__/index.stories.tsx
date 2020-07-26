import React from 'react';
import { withKnobs, color, select } from "@storybook/addon-knobs";
import HamburgerIcon from '@hodrobond/ui-hamburgericon';
import Themes from '@hodrobond/ui-themes';
import ThemeWrapper from '../src';

export default {
  component: ThemeWrapper,
  title: 'Components/Wrappers/ThemeWrapper',
  decorators: [withKnobs],
};

const label = 'Theme';
const options = ['aqua', 'midnight'];
const defaultValue = 'aqua';
const groupId = 'Group-1';

export const ThemeWrapperStory = () => {
  const value = select(label, options, defaultValue, groupId);
  return (
  <ThemeWrapper
    s={Themes[value]}
  >
    <HamburgerIcon/>
  </ThemeWrapper>
)};
