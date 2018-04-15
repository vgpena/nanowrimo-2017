import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SiteTitle } from './';

const stories = storiesOf('atoms/SiteTitle', {});

stories.add('default', () => {
  return <SiteTitle name="SiteTitle" />;
});