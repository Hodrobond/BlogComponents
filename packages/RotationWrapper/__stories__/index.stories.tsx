import React, { FunctionComponent, useState } from "react";
import { withKnobs, color } from "@storybook/addon-knobs";
import RotationWrapper from '../src';
import HamburgerIcon from '@hodrobond/ui-hamburgericon';

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

export const RotationWrapperStory = () => (
  <WithClick/>
);
