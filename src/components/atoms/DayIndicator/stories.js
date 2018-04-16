import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { DayIndicator } from './';

const stories = storiesOf('atoms/DayIndicator', {});

stories.add('default', () => {
  return <DayIndicator day="5" />;
});