// in src/TimelineLoaded.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import EventList from 'components/molecules/EventList';
import groupByDay from 'lib/groupByDay';

const styles = {
    root: {
        width: 600,
        margin: 'auto',
    },
    day: {
        margin: 'auto',
    },
};

const useStyles = makeStyles(styles);

const getDayString = date =>
    new Date(date).toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

export default  function TimelineLoadedView({events = [],handleLoadMore,total,}){
    const classes = useStyles();
    const { days, eventsByDay } = groupByDay(events);
    if (days.length === 0) {
        return (
            <Typography color="error">
                Error: This list should not be empty.
            </Typography>
        );
    }
    return (
        <div className={classes.root}>
        {days.map(day => (
            <div key={day} className={classes.day}>
                <Typography variant="subtitle1" gutterBottom >
                    {getDayString(day)}
                </Typography>
                <EventList events={eventsByDay[day]} />
            </div>
        ))}
        {events.length < total && (
            <Button variant="contained" onClick={handleLoadMore} fullWidth>
                Load more events
            </Button>
        )}
    </div>
    );
};
