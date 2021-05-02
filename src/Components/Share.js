import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Mail from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function Share() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add">
                <Facebook />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <Twitter />
            </Fab>
            <Fab >
                <Mail />
            </Fab>
            <Fab >
                <LinkedIn />
            </Fab>
        </div>
    );
}
