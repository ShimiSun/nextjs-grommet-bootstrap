
import React from 'react'
import { storiesOf } from "@storybook/react";
import dynamic from 'next/dynamic';

const StateSearchBox = dynamic(() => import('.'));

const options=[
  {name:'value A'},
  {name:'value B'},
  {name:'value C'},
  {name:'value D'},
  {name:'value E'},
  {name:'value F'}
]

storiesOf("StateSearchBox", module).add("Custom", () => (
    <StateSearchBox {...{options}} getSelectedStateId={(State)=>console.log('State: ',State)} />
  ));