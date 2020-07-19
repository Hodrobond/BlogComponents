import * as React from 'react'
import PropTypes from 'prop-types';

export interface HamburgerIcon {
  fill: string,
}

const HamburgerIcon = ({
  fill = '#7ED6DF',
}) => (
  <svg fill={fill} viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="20"></rect>
    <rect y="30" width="100" height="20"></rect>
    <rect y="60" width="100" height="20"></rect>
  </svg>
);

HamburgerIcon.propTypes = {
  fill: PropTypes.string,
};

export default HamburgerIcon;
