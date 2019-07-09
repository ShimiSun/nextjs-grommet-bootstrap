
import React from 'react'
import { storiesOf } from "@storybook/react";
import dynamic from 'next/dynamic';

const StateSearchBox = dynamic(() => import('.'));


storiesOf("StateSearchBox", module).add("Custom", () => (
    <StateSearchBox getSelectedStateId={(State)=>console.log('State: ',State)} />
  ));