import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Content } from './';

storiesOf('atoms/Content', module)
  .add('with text', () => (
    <Content className="foo" content="foo" />
  ))
  .add('with some emoji', () => (
    <Content className="bar"  content="bar" />
  ));