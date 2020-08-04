import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface ContainerProps {
  textAlign?: string
}

export interface TextInterface {
  children?: React.ReactNode
  s?: ContainerProps
}

const TextContainer = styled.div<ContainerProps>`
  color: var(--primary-text-color);
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')}
`;

const Text: FunctionComponent<TextInterface> = ({
  children,
  s = {},
}) => (
  <TextContainer {...s} >
    {children}
  </TextContainer>
);

Text.propTypes = {
  children: PropTypes.node,
  s: PropTypes.exact({
    textAlign: PropTypes.string,
  }),
};

export default Text;
