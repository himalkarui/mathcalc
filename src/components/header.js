
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '1.5rem',
        fontFamily: 'cursive !important'
    },
}));

export default function Header(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color={'inherit'}>
                <Toolbar>
                    <Sidebar />
                    <Typography variant="h6" className={classes.title}>
                        math calc
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}
