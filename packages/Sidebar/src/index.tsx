import React, { FunctionComponent, useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HamburgerIcon from '@hodrobond/ui-hamburgericon';
import RotationWrapper from '@hodrobond/ui-rotationwrapper';

import Wrapper from './components/Wrapper';

export interface SidebarInterface {
  title: string,
}

interface SidebarBlockProps {
  open: boolean
  width: string
};

const SidebarBlock = styled.div<SidebarBlockProps>`
  position: fixed;
  width: ${props => (props.open ? '25%' : '3rem')};
  @media (max-width: 480px) {
    width: ${props => (props.open ? '100%' : '3rem')};
    transition: width 1s;
  }
  transition: width 1s;
  height: 100%;
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
      <RotationWrapper
        onClick={() => setOpen(!open)}
        rotate={open}
        s={{
          zIndex: 901,
        }}
      >
        <HamburgerIcon/>
      </RotationWrapper>
      <Wrapper
        title={title}
        open={open}
      >
        {children}
      </Wrapper>
    </SidebarBlock>
  )
};

Sidebar.propTypes = {
  title: PropTypes.string,
};

export default Sidebar;
