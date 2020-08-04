import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export interface RotationWrapperProps {
  children: React.ReactNode
  onRotate?: (isRotated: boolean) => void
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
  onRotate,
  s,
}) => {
  const [stateRotate, setRotate] = useState(false);

  return (
    <IconButtonWrapper
      onClick={() => {
        setRotate(!stateRotate);
        if (typeof onRotate === 'function') {
          onRotate(!stateRotate);
        }
      }}
      rotate={stateRotate}
      s={s}
    >
      {children}
    </IconButtonWrapper>
  );
};

RotationWrapper.propTypes = {
  children: PropTypes.node,
  onRotate: PropTypes.func,
  s: PropTypes.shape({
    display: PropTypes.string,
    zIndex: PropTypes.string,
  }),
};

export default RotationWrapper;
