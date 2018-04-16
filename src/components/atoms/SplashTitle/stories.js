import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SplashTitle } from './';

const stories = storiesOf('atoms/SplashTitle', {});

stories.add('default', () => {
  return <SplashTitle />;
});