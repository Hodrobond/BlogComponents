import React from 'react';
import { withKnobs, color } from "@storybook/addon-knobs";
import styled from 'styled-components';
import Sidebar from '../src';

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
      <h5>This one time I (re)made some games</h5>
      <a target="_blank" href="https://hodrobond.github.io/learning2048/">This one time I made 2048 in React</a><br/>
      <a target="_blank" href="https://hodrobond.github.io/react-tetris/">This other time I made Tetris in React</a>
    </Container>
  </Sidebar>
)
