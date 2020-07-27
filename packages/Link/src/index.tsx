import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface ContainerProps {
  textAlign?: string
  primaryLinkColor?: string
  primaryLinkVisitedColor?: string
}

export interface LinkInterface {
  href?: string
  target?: string
  s?: ContainerProps
}

const LinkContainer = styled.a<ContainerProps>`
  color: ${props => (props.primaryLinkColor ? props.primaryLinkColor : "var(--primary-link-color)")};
   &:visited {
    color: ${props => (props.primaryLinkVisitedColor ? props.primaryLinkVisitedColor : "var(--primary-link-visited-color)")};
  }
  text-align: ${props => (props.textAlign ? props.textAlign : "left")}
`;

const Text: FunctionComponent<LinkInterface> = ({
  children,
  href,
  target,
  s = {},
}) => (
  <LinkContainer
    href={href}
    rel="noreferrer"
    target={target}
    {...s}
  >
    {children}
  </LinkContainer>
);

Text.propTypes = {
  href: PropTypes.string,
  s: PropTypes.shape({
    textAlign: PropTypes.string,
    primaryLinkColor: PropTypes.string,
    primaryLinkVisitedColor: PropTypes.string,
  })
};

export default Text;
