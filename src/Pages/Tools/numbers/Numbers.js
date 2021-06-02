import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline, Container } from '@material-ui/core';
import Compress from '../../../Assets/icons/Compress';
import Helmet from 'react-helmet';
import Footer from '../../../Components/Footer';
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
    resultDiv: {
        padding: '20px 0',
        marginBottom: '10px',
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '34px',
        color: '#314259',
        '& > span': {
            marginLeft: '8px',
            color: '#1678fb'
        },
    }
}));
export default function Numbers() {
    const classes = useStyles();
    let arrUrls = [
        { urlname: 'Generate List of Numbers', url: '/generate-list-numbers/' },
        { urlname: 'Binary Converter', url: '/binary-converter/' },
        { urlname: 'Hexadecimal Converter', url: '/hexadecimal-converter/' },
        { urlname: 'Sort Numbers', url: '/sort-numbers/' },
        { urlname: 'Maximum and Minimun of a List', url: '/minimum-maximum-list/' },
        { urlname: 'Filter Numbers', url: '/filter-numbers/' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Numbers Free Tools - Mathcalc</title>
                <meta name="keywords" content="mathcalc,numbers,numbers tools, general calculator, mathamatics calculator, online calculator, free calculator" />
                <meta name="description" content="Use Mathcalc numbers online free tools to calculate varoius calculations of numbers" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Numbers
          </h1>
                            <p className="has-text-letter-spacing-wide has-text-grey">
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
                    <Grid item lg={4} md={4} sm={false}>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div >
    );
}
