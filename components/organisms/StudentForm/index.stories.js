// in src/StudentForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const StudentForm = dynamic(() => import('.'));


storiesOf('StudentForm', module)
    .add('basic', () => <StudentForm/>)
  