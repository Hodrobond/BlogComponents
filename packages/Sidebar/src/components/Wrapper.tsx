import React, { useState, FunctionComponent } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@hodrobond/ui-text';

export interface WrapperInterface {
  children: React.ReactNode
  title: string
  open: boolean
}

interface WrapperProps {
  open: boolean,
}

const ContentWrapper = styled.div<WrapperProps>`
  background: var(--primary-content-background);

  width: 26rem;
  @media (max-width: 480px) {
    width: 100%;
  }
  position: relative;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: visibility 0.5s linear,opacity 0.5s linear;
  z-index: 900;
  height: 100%;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
  padding-left: 1rem;
  padding-top: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
  overflow: hidden;
  width: 100%;
  margin-top: 0;
`;

const ChildrenWrapper = styled.div<WrapperProps>`
  width: 25rem;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: visibility 0.5s linear,opacity 0.5s linear;
`;

const Wrapper: FunctionComponent<WrapperInterface> = ({
  title = 'Menu',
  open = false,
  children,
}) => (
  <ContentWrapper open={open} >
    {title && (
      <Title><Text>{title}</Text></Title>
    )}
    <ChildrenWrapper open={open}>
      {children}
    </ChildrenWrapper>
  </ContentWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  open: PropTypes.bool,
};

export default Wrapper;
