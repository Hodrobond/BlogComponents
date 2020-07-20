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
  width: 26rem;
  @media (max-width: 480px) {
    width: ${props => (props.open ? '100%' : '3rem')};
  }
  position: relative;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? '1' : '0')};
  transition: visibility 0.5s linear,opacity 0.5s linear;
  background: #d0ecd9;
  z-index: 900;
  height: 100%;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
  padding-left: 1rem;
`

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin-top: 0;
`;

const ChildrenWrapper = styled.div<WrapperProps>`
  width: 25rem;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  opacity: ${props => (props.open ? '1' : '0')};
  transition: visibility 0.5s linear,opacity 0.5s linear;
`;

const Wrapper = ({
  title = 'Menu',
  open = false,
  children,
}: WrapperInterface) => {
  return (
    <ContentWrapper open={open} >
      {title && (
        <Title>{title}</Title>
      )}
      <ChildrenWrapper open={open}>
        {children}
      </ChildrenWrapper>
    </ContentWrapper>
  )
};

Wrapper.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
};

export default Wrapper;
