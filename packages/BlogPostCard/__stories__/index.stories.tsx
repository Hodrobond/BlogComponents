import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import BlogPostCard from '../src';

export default {
  component: BlogPostCard,
  title: 'Components/Collected/BlogPostCard',
  decorators: [withKnobs],
};

export const SingleCard = () => (
  <div>
    <BlogPostCard
      title={{
        text: text('Title', 'title'),
        link: text('Link', 'https://www.google.com'),
      }}
      date={text('Date', '2017-06-13T16:00:00.000Z')}
      description={text('Description', 'description')}
    />
  </div>
);

export const TestAddForCI = () => (
  <div>
    <BlogPostCard
      title={{
        text: text('Title', 'title'),
        link: text('Link', 'https://www.google.com'),
      }}
      date={text('Date', '2017-06-13T16:00:00.000Z')}
      description={text('Description', 'description')}
    />
  </div>
);

export const MultiCard = () => (
  <div>
    {[1, 2, 3].map((num) => (
      <BlogPostCard
        key={`Blog_card_${num}`}
        title={{
          text: text(`Title ${num}`, `title ${num}`),
          link: text('Link', 'https://www.google.com'),
        }}
        date={text('Date', '2017-06-13T16:00:00.000Z')}
        description={text(`Description ${num}`, `description ${num}`)}
      />
    ))
  }
  </div>
);
