import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { FooterTitle } from './';

const stories = storiesOf('atoms/FooterTitle', {});

stories.add('default', () => {
  return <FooterTitle />;
});