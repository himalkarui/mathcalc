import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, } from '@material-ui/core';
import Helmet from 'react-helmet';
import Compress from '../../Assets/icons/Compress';
import SubNavBar from '../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
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
    row: {
        margin: '2px'
    },
}));

export default function Physics() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Physics Calculator - Calculate all physical stuff</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <SubNavBar />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <h1 className={classes.calcHeader} >Physics calculator</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                            <a href='/physics/eeqlmc2' className={'div-card'}>
                                <Compress style={{
                                    width: '30px',
                                    margin: '0px 8px 0px 16px'
                                }} /> <span>E=MC <sup>2</sup> Energy Mass Calculator</span></a>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
