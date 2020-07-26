import React, { FunctionComponent, useState, useMemo, ChangeEvent } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Themes from '@hodrobond/ui-themes';

const themeSelectSchema = Object.entries(Themes).map(([key, value]) => ({ key, value }));

export interface ThemePickerProps {
  selected?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  primaryColor?: string
  primaryContentBackground?: string
};

const StyledContainer = styled.div<ThemePickerProps>`
  --primary-color: ${props => (props.primaryColor ? props.primaryColor : "#7ED6DF")};
  --primary-content-background: ${props => (props.primaryContentBackground ? props.primaryContentBackground : "#FFFFFF")};
`;

const ThemePicker: FunctionComponent<ThemePickerProps> = ({
  selected,
  handleChange,
}) => {
  const [currentSelect, updateCurrentSelect] = useState(selected);
  const wrapperOnChange = useMemo(() => (event: React.ChangeEvent<HTMLInputElement>) => {
    updateCurrentSelect(event.target.value);
    if (typeof handleChange === 'function') {
      handleChange(event);
    }
  }, []);
  return (
    <form>
      <label>
        Pick your favorite theme:
        <select value={selected} onChange={wrapperOnChange}>
          {themeSelectSchema.map(element => (
            <option value={element.key}>{element.key}</option>
          ))}
        </select>
      </label>
    </form>
  );
};

ThemePicker.propTypes = {
  handleChange: PropTypes.func,
};

export default ThemePicker;