// in src/SchoolInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const SchoolInput= dynamic(() => import('.'));


storiesOf('SchoolInput', module)
    .add('basic', () => <SchoolInput/>)
  