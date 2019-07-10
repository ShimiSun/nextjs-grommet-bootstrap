// in src/BirthdateInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const BirthdateInput= dynamic(() => import('.'));


storiesOf('BirthdateInput', module)
    .add('basic', () => <BirthdateInput/>)
  