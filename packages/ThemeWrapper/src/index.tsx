import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export interface ThemeWrapperProps {
  primaryColor?: string
  primaryContentBackground?: string
};

const StyledContainer = styled.div<ThemeWrapperProps>`
  --primary-color: ${props => (props.primaryColor ? props.primaryColor : "#7ED6DF")};
  --primary-content-background: ${props => (props.primaryContentBackground ? props.primaryContentBackground : "#FFFFFF")};
`;

const ThemeWrapper: FunctionComponent<ThemeWrapperProps> = ({
  children,
  primaryColor,
  primaryContentBackground,
}) => (
  <StyledContainer
    primaryColor={primaryColor}
    primaryContentBackground={primaryContentBackground}
  >
    {children}
  </StyledContainer>
);

ThemeWrapper.propTypes = {
  primaryColor: PropTypes.string,
  primaryContentBackground: PropTypes.string,
};

export default ThemeWrapper;
