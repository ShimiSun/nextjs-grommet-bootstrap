// in src/PasswordInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const PasswordInput= dynamic(() => import('.'));


storiesOf('PasswordInput', module)
    .add('basic', () => <PasswordInput/>)
  