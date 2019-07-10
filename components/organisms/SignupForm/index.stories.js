// in src/SignupForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const SignupForm = dynamic(() => import('.'));


storiesOf('SignupForm', module)
    .add('basic', () => <SignupForm/>)
  