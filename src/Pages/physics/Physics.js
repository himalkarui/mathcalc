import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, } from '@material-ui/core';
import Helmet from 'react-helmet';
import Compress from '../../Assets/icons/Compress';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

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
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Physics
          </h1>
                            <p className="has-text-letter-spacing-wide has-text-grey">
                                Calculate Various mathematical expresion in physics..
          </p>
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
                                        }} /> <span>{val.urlname}</span></Link>
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
            <Footer />
        </div >
    );
}
