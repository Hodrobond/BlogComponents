import React from 'react';
import { withKnobs, color } from "@storybook/addon-knobs";
import styled from 'styled-components';
import Sidebar from '../src';
import Text from '@hodrobond/ui-text';
import Link from '@hodrobond/ui-link';

export default {
  component: Sidebar,
  title: 'Components/Collected/Sidebar',
  decorators: [withKnobs],
};

const Container = styled.div`
  width: 100%;
`;

export const SidebarStory = () => (
  <Sidebar>
    <a href="https://www.google.com">Test 1</a><br/>
    <a href="https://www.google.com">Test 2</a>
  </Sidebar>
);


export const take2 = () => (
  <Sidebar>
    <Container>
      <h5><Text>This one time I (re)made some games</Text></h5>
      <Link target="_blank" href="https://hodrobond.github.io/learning2048/">This one time I made 2048 in React</Link><br/>
      <Link target="_blank" href="https://hodrobond.github.io/react-tetris/">This other time I made Tetris in React</Link>
    </Container>
  </Sidebar>
)
