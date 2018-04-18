import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Nav } from './';

const stories = storiesOf('molecules/Nav', {});

const items = [
  {
    URL: "https://example.com",
    text: "Nav Item 1"
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

const items2 = [
  {
    URL: "https://example.com",
    text: "Nav Item 1",
    active: true
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
  return <Nav navItems={ items } />;
});

stories.add('stack on mobile', () => {
  return <Nav navItems={ items } stackOnMobile />;
});

stories.add('only one item', () => {
  return <Nav navItems={ [items[0]] } />;
});

stories.add('with active item', () => {
  return <Nav navItems={ items2 } />;
});