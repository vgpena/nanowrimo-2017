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