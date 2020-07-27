import * as React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '@hodrobond/ui-text';

const image = require('./assets/profile-pic.jpg');

const CardContainer = styled.div`
  background: var(--primary-content-background);
  padding: 0.5rem;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
  display: flex;
  align-items: center;
  margin: 1rem;
`;

const ImageWRapper = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1rem;
  margin: 0.5rem;
`

const DeveloperCard = () => (
  <CardContainer>
    <ImageWRapper src={image}/>
    <Text>Written by<strong> Adam Kazberuk </strong>who is in San Francisco.</Text>
  </CardContainer>
);

DeveloperCard.propTypes = {
  date: PropTypes.string.isRequired,
  languageCode: PropTypes.string,
  format: PropTypes.string,
};

export default DeveloperCard;
