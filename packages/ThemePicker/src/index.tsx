import React, { FunctionComponent, useState, useMemo, ChangeEvent } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Themes from '@hodrobond/ui-themes';

const themeSelectSchema = Object.entries(Themes)
  .map(([key, value]) => ({ key, value }));

export interface ThemePickerProps {
  selected?: string
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  primaryColor?: string
  primaryContentBackground?: string
}

const ThemePicker: FunctionComponent<ThemePickerProps> = ({
  selected,
  handleChange,
}) => {
  const [currentSelect, updateCurrentSelect] = useState(selected);
  const wrapperOnChange = useMemo(() => (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event && event.target && event.target.value) {
      updateCurrentSelect(event.target.value);
    }
    if (typeof handleChange === 'function') {
      handleChange(event);
    }
  }, []);
  return (
    <form>
      <label>
        Pick your favorite theme:
        <select value={currentSelect} onChange={wrapperOnChange}>
          {themeSelectSchema.map((element: { key: string }) => (
            <option key={element.key} value={element.key}>{element.key}</option>
          ))}
        </select>
      </label>
    </form>
  );
};

ThemePicker.propTypes = {
  handleChange: PropTypes.func,
  selected: PropTypes.string,
  primaryColor: PropTypes.string,
  primaryContentBackground: PropTypes.string,
};

export default ThemePicker;
