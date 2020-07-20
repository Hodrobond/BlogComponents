import React, { FunctionComponent } from "react";
import styled, { StyledFunction } from "styled-components";
import PropTypes from 'prop-types';

export interface RotationWrapperProps {
  rotate: boolean
  onClick: Function
  s: {
    display: string | undefined
  } | undefined
}

interface IconButtonWrapperProps {
  rotate: boolean
  onClick: Function
  s: {
    display: string | undefined
  } | undefined
}

const IconButtonWrapper = styled.div<IconButtonWrapperProps>`
  float: right;
  transform: rotate(0deg);
  overflow: hidden;
  transition: all 1s ease-out;
  transform: ${props => (props.rotate ? `rotate(90deg)` : "")};
  display: ${props => props.s && props.s.display ? props.s.display : 'inline-block'};
`;

const RotationWrapper: FunctionComponent<RotationWrapperProps> = ({ children, rotate, onClick, s }) => {
  return (
    <IconButtonWrapper
      rotate={rotate}
      onClick={onClick}
      s={s}
    >
      {children}
    </IconButtonWrapper>
  );
}

RotationWrapper.propTypes = {
  rotate: PropTypes.bool,
  onClick: PropTypes.func,
  s: PropTypes.shape({
    display: PropTypes.string,
  }),
};

export default RotationWrapper;
