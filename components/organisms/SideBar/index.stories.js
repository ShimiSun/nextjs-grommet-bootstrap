// in src/SideBar.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import dynamic from 'next/dynamic';

const SideBar = dynamic(() => import('.'));

storiesOf('SideBar', module)
    .add('basic', () => <SideBar showSidebar> <div>Sidebar content</div> </SideBar>)
  