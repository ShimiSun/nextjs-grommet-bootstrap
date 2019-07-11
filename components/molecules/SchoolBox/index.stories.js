// in src/SchoolBox.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const SchoolBox= dynamic(() => import('.'));

const options=[
    {name:'value A'},
    {name:'value B'},
    {name:'value C'},
    {name:'value D'},
    {name:'value E'},
    {name:'value F'}
]

storiesOf('SchoolBox', module)
    .add('basic', () => <SchoolBox {...{options}}/>)
  