// in src/CRDInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const CRDInput= dynamic(() => import('.'));


storiesOf('CRDInput', module)
    .add('basic', () => <CRDInput/>)
  