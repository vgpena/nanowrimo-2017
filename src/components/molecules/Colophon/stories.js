import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Colophon } from './';

const stories = storiesOf('molecules/Colophon', {});

const items = [
  {
    URL: "https://example.com",
    text: "Nav Item 1",
  },
  {
    URL: "https://example.com",
    text: "Nav Item 2"
  },
  {
    URL: "https://example.com",
    text: "Nav Item 3"
  },
];

stories.add('default', () => {
  return <Colophon navItems={ items } />;
});