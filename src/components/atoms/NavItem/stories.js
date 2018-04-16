import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { NavItem } from './';

const stories = storiesOf('atoms/NavItem', {});

stories.add('default', () => {
  return (
    <NavItem
      URL="https://example.com"
      text="Nav Item"
    />
  );
});

stories.add('active', () => {
  return (
    <NavItem
      URL="https://example.com"
      text="Nav Item"
      active={ true }
    />
  );
})

stories.add('tech', () => {
  return (
    <NavItem
      URL="https://example.com"
      text="Nav Item"
      tech={ true }
    />
  );
})

stories.add('tech + active', () => {
  return (
    <NavItem
      URL="https://example.com"
      text="Nav Item"
      active={ true }
      tech={ true }
    />
  );
})