import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import Sidebar from '../src';

export default {
  component: Sidebar,
  title: 'Components/Collected/Sidebar',
  decorators: [withKnobs],
};

export const SidebarStory = () => (
  <Sidebar>
    <a href="https://www.google.com">Test 1</a><br/>
    <a href="https://www.google.com">Test 2</a>
  </Sidebar>
);
