// in src/PhoneInput.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const PhoneInput= dynamic(() => import('.'));


storiesOf('PhoneInput', module)
    .add('basic', () => <PhoneInput/>)
  