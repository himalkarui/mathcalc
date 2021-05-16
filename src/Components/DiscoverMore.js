import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Chip, Avatar, Typography } from '@material-ui/core';
import Compress from '../Assets/icons/Compress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    divcalc: {
        textDecoration: 'none',
        border: '1px solid #e6ecf1',
        margin: '10px',
        padding: '16px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        placeSelf: 'stretch',
        color: '#242a31',
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 3px 8px 0 rgb(216 216 216)',
        minWidth: '250px',
        maxWidth: '100%',
        minHeight: '100px'
    },
    calcHeader: {
        fontStyle: 'normal',
        fontSize: '22px',
        lineHeight: '39px',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: '600'
    },
    calcContent: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px',
        justifyContent: 'center'
    },
}));

export default function DiscoverMore() {
    const classes = useStyles();
    let urls = [
        { url: '/maths/shapes/circle', title: 'circle' },
        { url: '/maths/shapes/square', title: 'Square' },
        { url: '/maths/shapes/rectangle', title: 'Rectangle' },
        { url: '/maths/shapes/triangle', title: 'Triangle' }
    ];
    return (
        <div className={classes.root}>
            <div><Typography className={classes.calcHeader} >DISCOVER MORE OF WHAT MATTERS TO YOU</Typography></div>
            <div className={classes.calcContent}>
                {
                    urls.map((ur, i) => {
                        return (<a href={ur.url} key={i} >
                            <Chip label={ur.title} variant="outlined" />
                        </a>
                        )
                    })
                }
            </div>

        </div >
    );
}
