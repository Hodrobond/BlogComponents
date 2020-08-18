import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';
import Text from '@hodrobond/ui-text';

export interface DateDisplayInterface {
  date: string | number
  languageCode?: string
  format?: string
}

const DateDisplay: FunctionComponent<DateDisplayInterface> = ({
  date,
  languageCode = 'en',
  format = 'MMMM Do, YYYY',
}: DateDisplayInterface) => (
  <Text s={{ textAlign: 'left' }}>
    {moment(date).locale(languageCode).format(format)}
  </Text>
);

DateDisplay.propTypes = {
  date: PropTypes.string.isRequired,
  languageCode: PropTypes.string,
  format: PropTypes.string,
};

export default DateDisplay;
