import React, { useState, useMemo } from 'react';
import { withKnobs, color, select } from "@storybook/addon-knobs";
import Themes from '@hodrobond/ui-themes';
import ThemeWrapper from '@hodrobond/ui-themewrapper';
import ThemePicker from '@hodrobond/ui-themepicker';

export const ThemeWrapperDecorator = ({ children }) => {
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
      s={Themes[theme]}
    >
      {children}
    </ThemeWrapper>
  </div>
)};
