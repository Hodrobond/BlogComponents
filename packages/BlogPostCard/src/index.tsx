import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DateDisplay from '@hodrobond/ui-datedisplay';
import Text from '@hodrobond/ui-text';
import Link from '@hodrobond/ui-link';

export interface BlogPostCardInterface {
  title: {
    text: string
    link?: string
  },
  date: string
  description: string
}

const Title = styled.h3`
  font-size: 1.5em;
  text-align: left;
`;

const BlogPostContainer = styled.div`
  background: var(--primary-content-background);
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
`;

const BlogPostCard: FunctionComponent<BlogPostCardInterface> = ({
  title: { text, link },
  date,
  description,
}) => (
  <BlogPostContainer>
    <Title><Link href={link} target="_blank">{text}</Link></Title>
    <DateDisplay date={date} />
    <Text s={{ textAlign: 'left' }} data-test="description" >
      {description}
    </Text>
  </BlogPostContainer>
);

BlogPostCard.propTypes = {
  title: PropTypes.exact({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogPostCard;
