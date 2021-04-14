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
    },
    divcalc: {
        color: '#744cbc',
        textDecoration: 'none',
        border: '1px solid #e6ecf1',
        margin: '10px',
        padding: '16px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        flexDirection: 'row',
        alignItems: 'center',
        placeSelf: 'stretch',
        color: '#242a31',
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 3px 8px 0 rgb(216 216 216)',
        minWidth: '143px',
        maxWidth: '143px'
    }
}));

export default function Algebric() {
    const classes = useStyles();
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
                }}>Algebric calculator</h1>
            </section>
            <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', }}>
                    <li class="ak39fa-0 bhAFtM">
                        <div class="ojwc4z-0 jkSeLq">
                            <a class="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href="/mathcalc/algebric/formulae">Formulae</a>
                            <div class="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                <Compress />
                            </div>
                            <div class="ojwc4z-1 jgylRt">
                                <div class="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                    <Forward />
                                </div></div><p class="ojwc4z-5 jZEeUz">
                                Calculate the value of formulae
                            </p>
                        </div>
                    </li>
                    <li class="ak39fa-0 bhAFtM">
                        <div class="ojwc4z-0 jkSeLq">
                            <a class="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href="/mathcalc/algebric/farmulae">Equations</a>
                            <div class="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                <Compress />
                            </div>
                            <div class="ojwc4z-1 jgylRt">
                                <div class="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                    <Forward />
                                </div>
                            </div>
                            <p class="ojwc4z-5 jZEeUz">
                                Solve the algebric equations
                            </p>
                        </div>
                    </li>
                    <li class="ak39fa-0 bhAFtM">
                        <div class="ojwc4z-0 jkSeLq">
                            <a class="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href="/compress-pdf">Concepts</a>
                            <div class="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                <Compress />
                            </div>
                            <div class="ojwc4z-1 jgylRt">
                                <div class="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                    <Forward />
                                </div></div><p class="ojwc4z-5 jZEeUz">
                                Calculations of mathematical Concepts
                            </p>
                        </div>
                    </li>
                    <li class="ak39fa-0 bhAFtM" >
                        <div class="ojwc4z-0 jkSeLq">
                            <a class="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href="/compress-pdf">Graphs</a>
                            <div class="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                <Compress />
                            </div>
                            <div class="ojwc4z-1 jgylRt">
                                <div class="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                    <Forward />
                                </div></div><p class="ojwc4z-5 jZEeUz">
                                Get visual experience of algebric equations
                            </p>
                        </div>
                    </li>

                </div>
            </Container>
        </div >
    );
}
