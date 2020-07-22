import React, { FunctionComponent, useState } from "react";
import { withKnobs, color } from "@storybook/addon-knobs";
import RotationWrapper from '../src';
import HamburgerIcon from '@hodrobond/ui-hamburgericon';
import DeveloperCard from '@hodrobond/ui-developercard';

export default {
  component: RotationWrapper,
  title: 'Components/Wrappers/Rotation',
  decorators: [withKnobs],
};

const WithClick = () => {
  const [stateRotate, setRotate] = useState(false);
  return (
    <RotationWrapper
      onClick={() => setRotate(!stateRotate)}
      rotate={stateRotate}
    >
      <HamburgerIcon/>
    </RotationWrapper>
  )
}

const WithClick2 = () => {
  const [stateRotate, setRotate] = useState(false);
  return (
    <RotationWrapper
      onClick={() => setRotate(!stateRotate)}
      rotate={stateRotate}
    >
      <DeveloperCard/>
    </RotationWrapper>
  )
}
export const RotationWrapperStory = () => (
  <WithClick/>
);

export const AdamTest23 = () => (
  <WithClick2/>
)
