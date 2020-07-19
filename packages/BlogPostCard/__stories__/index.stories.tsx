import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import BlogPostCard from '../src';

export default {
  component: BlogPostCard,
  title: 'Components/Collected/BlogPostCard',
  decorators: [withKnobs],
};

export const BlogPostCardStory = () => (
  <BlogPostCard
    title={{
      text: text('Title', 'title'),
      link: text('Link', 'https://www.google.com'),
    }}
    date={text('Date', '2017-06-13T16:00:00.000Z')}
    description={text('Description', 'description')}
  />);
