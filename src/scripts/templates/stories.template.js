import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { {{name}} } from './';

const stories = storiesOf('{{level}}/{{name}}', {});

stories.add('default', () => {
  return <{{name}} name="{{name}}" />;
});