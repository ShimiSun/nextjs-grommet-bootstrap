// in src/Rating.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const Rating= dynamic(() => import('.'));


storiesOf('Rating', module)
    .add('basic', () => <Rating value={3}/>)
  