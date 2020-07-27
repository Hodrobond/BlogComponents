import React, { FunctionComponent } from "react";
import styled, { StyledFunction } from "styled-components";
import PropTypes from 'prop-types';

export interface RotationWrapperProps {
  rotate: boolean
  onClick: () => void
  s?: {
    display?: string | undefined
    zIndex?: string | undefined
  }
}

interface IconButtonWrapperProps {
  rotate: boolean
  onClick: () => void
  s?: {
    display?: string | undefined
    zIndex?: string | undefined
  }
}

const IconButtonWrapper = styled.div<IconButtonWrapperProps>`
  position: relative;
  float: right;
  overflow: hidden;
  transform: rotate(0deg);
  transition: all 1s ease-out;
  transform: ${(props) => (props.rotate ? 'rotate(90deg)' : '')};
  display: ${(props) => (props.s && props.s.display ? props.s.display : 'inline-block')};
  z-index: ${(props) => (props.s && props.s.zIndex ? props.s.zIndex : '')};
`;

const RotationWrapper: FunctionComponent<RotationWrapperProps> = ({
  children,
  rotate,
  onClick,
  s,
}) => (
  <IconButtonWrapper
    rotate={rotate}
    onClick={onClick}
    s={s}
  >
    {children}
  </IconButtonWrapper>
);

RotationWrapper.propTypes = {
  rotate: PropTypes.bool,
  onClick: PropTypes.func,
  s: PropTypes.shape({
    display: PropTypes.string,
    zIndex: PropTypes.string,
  }),
};

export default RotationWrapper;
