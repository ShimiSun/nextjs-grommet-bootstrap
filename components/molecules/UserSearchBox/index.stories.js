
import React from 'react'
import { storiesOf } from "@storybook/react";
import dynamic from 'next/dynamic';

const UserSearchBox = dynamic(() => import('.'));


storiesOf("TextInput", module).add("Custom", () => (
    <UserSearchBox getSelectedUserId={(user)=>console.log('user: ',user)} />
  ));