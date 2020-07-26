import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export interface ThemeWrapperProps {
  primaryColor?: string
};

const StyledContainer = styled.div<ThemeWrapperProps>`
  --primary-color: ${props => (props.primaryColor ? props.primaryColor : "#7ED6DF")};
  --bg-color: #eee;
  --btn-font-size: 18px;
`;

const ThemeWrapper: FunctionComponent<ThemeWrapperProps> = (props) => {
  const {
    children,
    primaryColor,
  } = props;
  console.log('PRIMARY COLOR:');
  console.log(props)
  return (
    <StyledContainer
      primaryColor={primaryColor}
    >
      {children}
    </StyledContainer>
  );
}

ThemeWrapper.propTypes = {
  primaryColor: PropTypes.string,
};

export default ThemeWrapper;
