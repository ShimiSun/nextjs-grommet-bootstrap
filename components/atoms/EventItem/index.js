// in src/EventItem.js
/** grey code allows for internalization */
import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from 'components/atoms/Avatar';
// +import { translate } from 'react-admin';


const useStyles = makeStyles({
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
  });
  


export default function EventItem ({event}) { // -export default
// +const EventItemView = ({ event, translate,}) => (
    const classes = useStyles();

    return (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar user={event.author} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Fragment >
              <Typography
                component="span"
                variant="body2"
                className={classes.truncate}
                color="textPrimary"
              >
                {event.author ? event.author.name : 'Anonymous'}
              </Typography>
              {event.label}
           {   /**
           {translate(`event.${event.object}.${event.type}`, {
+                       name: event.objectName,
+                   })}
            */}
            </Fragment>
          }
          secondary={new Date(event.createdAt).toLocaleString()}
        />
      </ListItem>
);
}

// +const EventItem = translate(EventItemView);

// +export default EventItem