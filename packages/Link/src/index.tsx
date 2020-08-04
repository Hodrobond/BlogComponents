import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface ContainerProps {
  textAlign?: string
  primaryLinkColor?: string
  primaryLinkVisitedColor?: string
}

export interface LinkInterface {
  children: React.ReactNode
  href?: string
  target?: string
  s?: ContainerProps
}

const LinkContainer = styled.a<ContainerProps>`
  color: ${(props) => (props.primaryLinkColor ? props.primaryLinkColor : 'var(--primary-link-color)')};
   &:visited {
    color: ${(props) => (props.primaryLinkVisitedColor ? props.primaryLinkVisitedColor : 'var(--primary-link-visited-color)')};
  }
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')}
`;

const Link: FunctionComponent<LinkInterface> = ({
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

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  s: PropTypes.shape({
    textAlign: PropTypes.string,
    primaryLinkColor: PropTypes.string,
    primaryLinkVisitedColor: PropTypes.string,
  }),
};

export default Link;
