import React, { useState, useMemo } from 'react';
import { withKnobs, color, select } from "@storybook/addon-knobs";
import HamburgerIcon from '@hodrobond/ui-hamburgericon';
import Themes from '@hodrobond/ui-themes';
import ThemeWrapper from '@hodrobond/ui-themewrapper';
import ThemePicker from '../src';

export default {
  component: ThemePicker,
  title: 'Components/Individual/ThemePicker',
  decorators: [withKnobs],
};

export const ThemePickerStory = () => {
  const [theme, updateTheme] = useState('');
  const handleChange = useMemo(() => ({ target: { value } }: { target: { value: string } }) => {
    updateTheme(value);
  }, []);
  return (
  <div>
    <ThemePicker
      handleChange={handleChange}
    />
    <ThemeWrapper
      {...Themes[theme]}
    >
      <HamburgerIcon/>
    </ThemeWrapper>
  </div>
)};
