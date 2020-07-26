import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

interface ContainerProps {
  primaryColor?: string
  primaryContentBackground?: string
}

export interface ThemeWrapperProps {
  s?: ContainerProps
};

const StyledContainer = styled.div<ContainerProps>`
  --primary-color: ${props => (props.primaryColor ? props.primaryColor : "#7ED6DF")};
  --primary-content-background: ${props => (props.primaryContentBackground ? props.primaryContentBackground : "#FFFFFF")};
  
`;

const ThemeWrapper: FunctionComponent<ThemeWrapperProps> = ({
  children,
  s = {},
}) => (
  <StyledContainer
    {...s}
  >
    {children}
  </StyledContainer>
);

ThemeWrapper.propTypes = {
  s: PropTypes.shape({
    primaryColor: PropTypes.string,
    primaryContentBackground: PropTypes.string,
  }),
};

export default ThemeWrapper;
