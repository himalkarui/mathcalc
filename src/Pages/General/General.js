import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline, Container } from '@material-ui/core';
import Compress from '../../Assets/icons/Compress';
import Helmet from 'react-helmet';
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
export default function General() {
    const classes = useStyles();
    let arrUrls = [
        { urlname: 'Waist-To-Hip Ratio Calculator', url: '/general/waist-to-hip-ratio-calculator' },
        { urlname: 'Age Calculator', url: '/general/age-calculator/' },
        { urlname: 'BMI Calculator', url: '/general/bmi-calculator/' },
        { urlname: 'Flames Calculator', url: '/general/flames-calculator/' },
        { urlname: 'Time Calculator', url: '/general/time-calculator/' },
        { urlname: 'Google adsense calculator', url: '/general/google-adsense-calculator/' },
        { urlname: 'CPC ROI Calculator', url: '/general/cpc-roi-calculator/' },
        { urlname: 'CPM Ads ROI Calculator', url: '/general/cpm-roi-calculator/' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free General Calculator - mathcalc</title>
                <meta name="keywords" content="mathcalc, general calculator, mathematics calculator, online calculator, free calculator" />
                <meta name="description" content="Use Mathcalc online free tools to calculate varoius every day calculations" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced has-text-weight-bold">General
          </h1>
                            <p className="  has-text-grey">
                                Various mathematical tasks, such as calculate percentages, simple shapes, graph fnctions and more..
          </p>
                        </div>
                    </div>
                </section>
                <Grid direction="row" container justify="center" >
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
