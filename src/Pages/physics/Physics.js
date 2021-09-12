import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, } from '@material-ui/core';
import Helmet from 'react-helmet';
import Compress from '../../Assets/icons/Compress';
import { Link } from 'react-router-dom';
import VerticalAds from '../../Components/VerticalAds';

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

    let Url = [
        {
            urlname: 'Pressure',
            urlpath: '/physics/pressure'
        },
        {
            urlname: 'Energy Mass',
            urlpath: '/physics/eeqlmc2/'
        },
        {
            urlname: 'Ohms law',
            urlpath: '/physics/ohmslaw/'
        },
        {
            urlname: 'Newtons law of gravity',
            urlpath: '/physics/newtons-law-of-gravity/'
        },
        {
            urlname: 'Capacitance',
            urlpath: '/physics/capacitance/'
        },
        {
            urlname: 'Inductance',
            urlpath: '/physics/inductance/'
        },
        {
            urlname: 'Kinetic Energy',
            urlpath: '/physics/kinetic-energy/'
        },
        {
            urlname: 'Power',
            urlpath: '/physics/power/'
        },
        {
            urlname: 'Weight',
            urlpath: '/physics/weight/'
        },
        {
            urlname: 'Frequency',
            urlpath: '/physics/frequency'
        }
    ]

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Physics Calculator - Calculate all mathematical expression in physics</title>
                <meta name="keywords" content="mathcalc, physics calculator , online free physics calculator" />
                <meta name="description" content="Use Mathcalc to calculate all mathematical expression in physics" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Physics
                            </h1>
                            <p className="has-text-grey">
                                Physics is the study of the fundamental nature of all things. The well-known American author, Bill Bryson, once said:  “Physics is really nothing more than a search for ultimate simplicity, but so far all we have is a kind of elegant messiness.” Physics is indeed the most fundamental of the sciences that tries to describe the whole nature with thousands of mathematical formulas. How not to get lost in all of this knowledge? How to organize it? The solution is here! .
                                The Mathcalc might be exactly what you’re looking for!.
                            </p>
                            <br />
                        </div>
                    </div>
                </section>
                <Grid direction="row" container justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                            {
                                Url.map((val, i) => {
                                    return <Link to={val.urlpath} className={'divLink'} key={i}>
                                        <Compress style={{
                                            width: '30px',
                                            margin: '0px 8px 0px 16px'
                                        }} /> <span>{val.urlname + ' calculator'}</span></Link>
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
