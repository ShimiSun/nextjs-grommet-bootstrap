// in src/LoginForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('.'));


storiesOf('LoginForm', module)
    .add('basic', () => <LoginForm/>)
  