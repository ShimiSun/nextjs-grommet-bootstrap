// in src/LicenseForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const LicenseForm = dynamic(() => import('.'));


storiesOf('LicenseForm', module)
    .add('basic', () => <LicenseForm/>)
  