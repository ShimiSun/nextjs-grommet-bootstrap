import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';



const styles =theme=> ({
    root: {
        width: 600,
        margin: 'auto',
    },
    content: {
        marginTop: '0.7em',
        marginBottom: '1em',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    icon: {
        width: 50,
        height: 50,
        paddingRight: '1em',
    },
    image: {
        width: 50,
        marginTop: '0.5em',
        display: 'block',
    },
});

const useStyles = makeStyles(styles);


export default function TimelineEmpty() {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
        <CardContent className={classes.content}>
            <InfoIcon color="primary" className={classes.icon} />
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    This page will show the actions of users once they start
                    using the application.
                </Typography>
                <Typography variant="subtitle1">
                    You will even see your own actions recorded here. Try adding
                    a new post by using the {'"Posts"'} menu.
                </Typography>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Return_arrow.svg"
                    className={classes.image}
                    alt=""
                />
            </div>
        </CardContent>
    </Card>
);
}
