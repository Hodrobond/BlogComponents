import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export interface HamburgerIconProps {
  fill?: string
}

const HamburgerStyle = styled.svg<HamburgerIconProps>`
  fill: ${(props) => (props.fill ? props.fill : 'var(--primary-color)')};
`;

const HamburgerIcon: FunctionComponent<HamburgerIconProps> = ({
  fill,
}) => (
  <HamburgerStyle fill={fill} viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="20"></rect>
    <rect y="30" width="100" height="20"></rect>
    <rect y="60" width="100" height="20"></rect>
  </HamburgerStyle>
);

HamburgerIcon.propTypes = {
  fill: PropTypes.string,
};

export default HamburgerIcon;
