// in src/SearchBox.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';

import dynamic from 'next/dynamic';

const SearchBox= dynamic(() => import('.'));

const options=[
    {name:'value A'},
    {name:'value B'},
    {name:'value C'},
    {name:'value D'},
    {name:'value E'},
    {name:'value F'}
]

storiesOf('SearchBox', module)
    .add('basic', () => <SearchBox {...{options}}/>)
  