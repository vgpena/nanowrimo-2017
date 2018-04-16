import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Content } from './';

const stories = storiesOf('atoms/Content', {});

stories.add('default', () => {
  return <Content text="Foo **bar** baz" />;
});