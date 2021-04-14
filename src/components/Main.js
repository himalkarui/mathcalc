import React, { useState, useEffect } from "react";

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import {
    Card, CssBaseline, CardHeader, CardMedia, Grid, CardContent, CardActions, Collapse
    , Avatar, Button, Typography, Container, IconButton, List, ListSubheader, ListItemIcon, ListItem, ListItemText
} from '@material-ui/core';
import Forward from '../Assets/icons/Forward';
import Compress from '../Assets/icons/Compress';
import flower from '../Assets/images/flower.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: '1.85rem',
        overflow: 'hidden',
        height: '47vh',
        width: '100% !important'
    },
    mainHeader: {
        fontSize: '3rem',
    },
    button: {
        background: " linear-gradient(180deg, #212121 0%, #010101 100%) 0% 0% ",
        height: 50,
        width: 202,
        borderRadius: 60,
        "&:hover": {
            background: " linear-gradient(180deg, #010101 0%, #212121 100%) 0% 0% ",
        },
        backgroundColor: '#212121 !important'
    },
    gridItem: {
        margin: '10px 10px 20px 15px',
        minWidth: '252px'
    }
}));

export default function Main(props) {

    useEffect(() => {

    }, []);
    const classes = useStyles();
    const history = useHistory();
    let arrUrls = ['General Calculator', 'Finance Calculator', 'Algebric Calculator', 'Equations', 'Graphs', 'Physics', 'age calculator', 'bmi calculator'];
    const nextPath = (path) => {
        history.push(path);
    };

    return (
        <React.Fragment>
            <>
                <Container className={classes.root} maxWidth={'lg'} style={{ paddingLeft: '0px', paddingRight: '0px', left: 0, right: 0 }}>
                    <Card raised elevation={0} style={{ backgroundColor: 'transparent', marginTop: '8%' }} >
                        <Typography className={classes.mainHeader} variant='h1'>
                            <strong>
                                Mathamatical Calculations
                </strong></Typography>
                        <CardContent class='appContainer'>
                            <Grid container justify="space-around">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button + ' ' + classes.gridItem}
                                >Get Start</Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
                <div>
                    <CssBaseline />
                    <section style={{
                        width: '100%', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '0.5rem',
                        margin: 'auto',
                    }}>
                        <h1 style={{
                            display: 'block', fontSize: '26px', lineHeight: '1.2', fontWeight: '800', marginTop: '0px',
                            textTransform: 'capitalize', textAlign: 'center', marginBottom: '1rem',
                        }}>General calculator</h1>
                    </section>
                    <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>

                            {
                                arrUrls.map(value => {
                                    return (<li class="ak39fa-0 bhAFtM">
                                        <div class="ojwc4z-0 jkSeLq">
                                            <a class="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href={"/mathcalc/general/" + value.replace(' ', '-').replace(' s', '')}>
                                                {value.replace('Formula', '')}</a>
                                            <div class="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                                <Compress />
                                            </div>
                                            <div class="ojwc4z-1 jgylRt">
                                                <div class="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                                    <Forward />
                                                </div></div><p class="ojwc4z-5 jZEeUz">
                                                {value}
                                            </p>
                                        </div>
                                    </li>)
                                })
                            }

                        </div>
                    </Container>
                </div >

            </>
        </React.Fragment >
    );
}
