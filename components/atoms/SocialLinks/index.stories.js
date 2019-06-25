// in src/SocialLinks.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const SocialLinks= dynamic(() => import('.'));


storiesOf('SocialLinks', module)
    .add('basic', () => <SocialLinks/>)
  