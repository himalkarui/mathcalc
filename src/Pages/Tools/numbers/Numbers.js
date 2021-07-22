import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline, Container } from '@material-ui/core';
import Compress from '../../../Assets/icons/Compress';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import VerticalAds from '../../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
}));
export default function Numbers() {
    const classes = useStyles();
    let arrUrls = [
        { urlname: 'Generate List of Numbers', url: '/generate-list-numbers/' },
        { urlname: 'Base Conversion', url: '/base-converter/' },
        { urlname: 'Sort Numbers', url: '/sort-numbers/' },
        { urlname: 'Maximum and Minimun of a List', url: '/minimum-maximum-list/' },
        { urlname: 'Filter Numbers', url: '/filter-numbers/' },
        { urlname: 'Binary Converter', url: '/binary-converter/' },
        { urlname: 'Hexadecimal Converter', url: '/hexadecimal-converter/' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Numbers tools online - Mathcalc</title>
                <meta name="keywords" content="mathcalc,numbers,numbers tools, general calculator, mathematics calculator, online calculator, free calculator" />
                <meta name="description" content="Use Mathcalc numbers online free tools to calculate varoius calculations of numbers" />
                <meta name="author" content="Mathcalc" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Numbers
                            </h1>
                            <p className="  has-text-grey">
                                Generate list of numbers, filter numbers, sort list of numbers
                            </p>
                        </div>
                    </div>
                </section>
                <Grid direction="row" container justify="center" alignItems="center">
                    <CssBaseline />
                    <Grid item lg={8} md={8} sm={12}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                            {
                                arrUrls.map((val, i) => {
                                    return <Link to={val.url} className={'divLink'} key={i}>
                                        <Compress style={{
                                            width: '30px',
                                            margin: '0px 8px 0px 16px'
                                        }} /> <span>{val.urlname}</span></Link>
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
