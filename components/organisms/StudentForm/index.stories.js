// in src/StudentForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';
import moment from 'moment'


const StudentForm = dynamic(() => import('.'));


storiesOf('StudentForm', module)
    .add('basic', () => <StudentForm prospectiveStates={[]} 
  prospectiveStatesError=''
  schoolError=''
    showState
    showStates
    goal='' stateOfStudy='' school='' course=''
    birthdate={moment().subtract(1, 'years').format('MM/DD/YYYY')}
/>)
  