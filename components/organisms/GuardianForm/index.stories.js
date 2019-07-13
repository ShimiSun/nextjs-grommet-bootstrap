// in src/GuardianForm.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';
import moment from 'moment'

const GuardianForm = dynamic(() => import('.'));


storiesOf('GuardianForm', module)
    .add('basic', () => <GuardianForm  prospectiveStates={[]} goal=''
        birthdate={moment().subtract(1, 'years').format('MM/DD/YYYY')}
    />)
  