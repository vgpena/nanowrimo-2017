import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PageTitle } from './';

const stories = storiesOf('atoms/PageTitle', {});

stories.add('default', () => {
  return <PageTitle text="Page Title" />;
});