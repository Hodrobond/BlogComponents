import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

export interface WrapperInterface {
  title: string,
  open: boolean,
}

interface WrapperProps {
  open: boolean,
}

const ContentWrapper = styled.div<WrapperProps>`
  position: fixed;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? '1' : '0')};
  transition: visibility 0.5s linear,opacity 0.5s linear;
`

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin: 0;
`;

const Wrapper = ({
  title = 'Menu',
  open = false,
  children,
}: WrapperInterface) => {
  return (
    <ContentWrapper open={open} >
      {title && (
        <Title >{title}</Title>
      )}
      {children}
    </ContentWrapper>
  )
};

Wrapper.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
};

export default Wrapper;
