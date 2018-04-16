import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { FooterCopyright } from './';

const stories = storiesOf('atoms/FooterCopyright', {});

stories.add('default', () => {
  return <FooterCopyright />;
});