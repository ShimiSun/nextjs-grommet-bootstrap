// in src/StateInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const StateInput= dynamic(() => import('.'));


storiesOf('StateInput', module)
    .add('basic', () => <StateInput/>)
  