// in src/HumanVerifyForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const HumanVerifyForm = dynamic(() => import('.'));


storiesOf('HumanVerifyForm', module)
    .add('basic', () => <HumanVerifyForm/>)
  