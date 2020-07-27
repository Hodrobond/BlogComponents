import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

interface ContainerProps {
  primaryColor?: string
  primaryContentBackground?: string
  primaryText?: string
  primaryLinkColor?: string
  primaryLinkVisitedColor?: string
}

export interface ThemeWrapperProps {
  s?: ContainerProps
};

const StyledContainer = styled.div<ContainerProps>`
  --primary-color: ${props => (props.primaryColor ? props.primaryColor : "#7ED6DF")};
  --primary-content-background: ${props => (props.primaryContentBackground ? props.primaryContentBackground : "#FFFFFF")};
  --primary-text-color: ${props => (props.primaryText ? props.primaryText : "#000000")};
  --primary-link-color ${props => (props.primaryLinkColor ? props.primaryLinkColor : "#0000EE")};
  --primary-link-visited-color ${props => (props.primaryLinkVisitedColor ? props.primaryLinkVisitedColor : "#551A8B")};
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
    primaryText: PropTypes.string,
    primaryLinkColor: PropTypes.string,
    primaryLinkVisitedColor: PropTypes.string,
  }),
};

export default ThemeWrapper;
