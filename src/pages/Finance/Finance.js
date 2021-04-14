import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography, Grid, Card, IconButton } from '@material-ui/core';

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

export default function Finance() {
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
                }}>Financial calculator</h1>
            </section>
            <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div style={{
                    display: 'table-row-group',
                    placeItems: 'center',
                    textAlign: 'center',
                    margin: '30px'
                }}>
                    <div></div><div>
                        <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>
                        <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>  <a href='/mathcalc/finance/interest' className={classes.divcalc}>
                            Interest</a>
                    </div>
                </div>
            </Container>
        </div >
    );
}
