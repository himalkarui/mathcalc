import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography, Grid, Card, IconButton } from '@material-ui/core';
import Forward from '../../Assets/icons/Forward';
import Compress from '../../Assets/icons/Compress';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    }
}));

export default function General() {
    const classes = useStyles();
    let arrUrls = ['age calculator', 'bmi calculator'];
    return (
        <div className={classes.root}>
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
                <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', }}>

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
    );
}
