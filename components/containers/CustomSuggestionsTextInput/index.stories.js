
import React from 'react'
import { storiesOf } from "@storybook/react";
import dynamic from 'next/dynamic';

const CustomSuggestionsTextInput = dynamic(() => import('.'));


storiesOf("TextInput", module).add("Custom", () => (
    <CustomSuggestionsTextInput onUserSelected={(user)=>console.log('user: ',user)} />
  ));