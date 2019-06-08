// in src/Timeline.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import  events  from 'components/molecules/TimelineLoaded/index.stories';
import { TimelineView } from '.';

storiesOf('Timeline', module)
    .add('loading', () => <TimelineView />)
    .add('loaded', () => (
        <TimelineView
            ids={events.map(event => event.id)}
            data={events.reduce(
                (data, event) => ({ ...data, [event.id]: event }),
                {}
            )}
            total={10}
            loadedOnce
        />
    ))
    .add('empty', () => <TimelineView ids={[]} data={{}} loadedOnce />);