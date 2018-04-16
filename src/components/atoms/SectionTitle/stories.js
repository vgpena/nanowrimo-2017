import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SectionTitle } from './';

const stories = storiesOf('atoms/SectionTitle', {});

stories.add('default', () => {
  return <SectionTitle text="Section Title" />;
});