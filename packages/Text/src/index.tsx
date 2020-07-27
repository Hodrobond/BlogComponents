import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextContainer = styled.div`
  color: var(--primary-text-color);
`;

const Text: FunctionComponent = ({
  children
}) => (
  <TextContainer>
    {children}
  </TextContainer>
);

Text.propTypes = {
};

export default Text;
