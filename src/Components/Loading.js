import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '100%',
        margin: theme.spacing(2),
        backgroundColor: 'transparent',
    },
    media: {
        height: 190,
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        display: 'flex',
    },
    root: {
        zIndex: '1',
        position: 'absolute',
        borderTop: '1px solid #b5b5b540',
        backgroundColor: '#f2f2f2',
        left: '0',
        right: '0',
        bottom: '0',
        top: '56px',
    }
}));

export default function Loading() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center" style={{ height: '80vh' }} >
                <Grid item sm={false} md={4} lg={4} ></Grid>
                <Grid item sm={false} md={4} lg={4} className={classes.loader} >
                    <div className="lds-ripple">
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={false} md={4} lg={4} ></Grid>
            </Grid>
        </div>
    );
}
