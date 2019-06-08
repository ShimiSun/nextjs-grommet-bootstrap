// in src/EventList.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import EventItem from 'components/atoms/EventItem';

const styles =theme => ({
  root: {
    marginTop: '0.7em',
    marginBottom: '1em',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding:'1rem'
  },
  inline: {
    display: 'inline',
  },
})

const useStyles = makeStyles(styles);


  export default function EventList({ events = [] }) {
    const classes = useStyles();
      return (
        <List className={classes.root}>
            {events.map(event => (
                
                <EventItem key={event.id} event={event}  />
               
            ))}
        </List>
   
);
}


