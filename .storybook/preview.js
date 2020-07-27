import * as React from 'react';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { ThemeWrapperDecorator } from './components/ThemeWrapper'

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
addDecorator(storyFn => <ThemeWrapperDecorator>{storyFn()}</ThemeWrapperDecorator>);
