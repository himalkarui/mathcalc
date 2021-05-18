import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import Helmet from 'react-helmet';
import Compress from '../../Assets/icons/Compress';
import Footer from '../../Components/Footer';

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

    let Url = [{
        urlname: 'Energy Mass Calculator',
        urlpath: '/physics/eeqlmc2'
    },
    {
        urlname: 'Ohms law',
        urlpath: '/physics/ohmslaw'
    },
    {
        urlname: 'Newtons law of gravity',
        urlpath: '/physics/newtons-law-of-gravity'
    }]


    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Physics Calculator - Calculate all mathamatical expression in physics</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc to calculate all mathamatical expression" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <section class="hero" data-v-23847e07>
                <div style={{ padding: '1rem 0.5rem' }}>
                    <div class="container">
                        <h1 class="subtitle is-spaced is-uppercase has-text-weight-bold">Physics
          </h1>
                        <p class="has-text-letter-spacing-wide has-text-grey">
                            Calculate Various mathematical expresion in physics..
          </p>
                    </div>
                </div>
            </section>
            <Grid direction="row" justify="center" alignItems="center">
                <Grid item lg={8} md={8} sm={12}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                        {
                            Url.map((val, i) => {
                                return < a href={val.urlpath} className={'divLink'} key={i}>
                                    <Compress style={{
                                        width: '30px',
                                        margin: '0px 8px 0px 16px'
                                    }} /> <span>{val.urlname}</span></a>
                            })
                        }
                    </div>
                </Grid>
                <Grid item lg={4} md={4} sm={false}></Grid>
            </Grid>
            <Footer />
        </div >
    );
}
