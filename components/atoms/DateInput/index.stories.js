// in src/DateInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const DateInput= dynamic(() => import('.'));


storiesOf('DateInput', module)
    .add('basic', () => <DateInput min={13} max={20}/>)
  