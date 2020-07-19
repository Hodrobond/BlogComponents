import * as React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

export interface DateDisplayInterface {
  date: string,
  languageCode: string,
  format: string,
}

const DateBlock = styled.div`
  text-align: left;
`;

const DateDisplay = ({
  date,
  languageCode = 'en',
  format = 'MMMM Do, YYYY',
}: DateDisplayInterface) => (
  <DateBlock>
    {moment(date).locale(languageCode).format(format)}
  </DateBlock>
);

DateDisplay.propTypes = {
  date: PropTypes.string.isRequired,
  languageCode: PropTypes.string,
  format: PropTypes.string,
};

export default DateDisplay;
