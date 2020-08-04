import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import HamburgerIcon from '@hodrobond/ui-hamburgericon';
import RotationWrapper from '../src';

export default {
  component: RotationWrapper,
  title: 'Components/Wrappers/Rotation',
  decorators: [withKnobs],
};

export const RotationWrapperStory = () => (
  <RotationWrapper>
    <HamburgerIcon/>
  </RotationWrapper>
);
