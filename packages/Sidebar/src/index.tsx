import React, { FunctionComponent, useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HamburgerIcon from '@hodrobond/ui-hamburgericon';
import RotationWrapper from '@hodrobond/ui-rotationwrapper';

import Wrapper from './components/Wrapper';

export interface SidebarInterface {
  children: React.ReactNode
  title?: string,
}

interface SidebarBlockProps {
  open: boolean
  width?: string
}

const SidebarBlock = styled.div<SidebarBlockProps>`
  position: fixed;
  width: ${(props) => (props.open ? '26rem' : '3rem')};
  @media (max-width: 480px) {
    width: ${(props) => (props.open ? '100%' : '3rem')};
    transition: width 1s;
  }
  transition: width 1s;
  height: 100%;
  margin: 0;
`;

const RotationWrapperContainer = styled.div<SidebarBlockProps>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  margin-right: ${(props) => (props.open ? '0' : '-0.5rem')};
`;

const Sidebar: FunctionComponent<SidebarInterface> = ({
  title = 'Menu',
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarBlock
      open={open}
    >
      <RotationWrapperContainer open={open}>
        <RotationWrapper
          onRotate={(isRotated: boolean) => { setOpen(isRotated); }}
          s={{
            zIndex: '901',
          }}
        >
          <HamburgerIcon/>
        </RotationWrapper>
      </RotationWrapperContainer>
      <Wrapper
        title={title}
        open={open}
      >
        {children}
      </Wrapper>
    </SidebarBlock>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Sidebar;
