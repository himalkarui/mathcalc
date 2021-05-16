import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline } from '@material-ui/core';
import Compress from '../../Assets/icons/Compress';
import Helmet from 'react-helmet';
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
        { urlname: 'Age Calculator', url: '/general/age-calculator' },
        { urlname: 'BMI Calculator', url: '/general/bmi-calculator' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free General Calculator</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <section class="hero" data-v-23847e07>
                <div style={{ padding: '1rem 0.5rem' }}>
                    <div class="container">
                        <h1 class="subtitle is-spaced is-uppercase has-text-weight-bold">General
          </h1>
                        <p class="has-text-letter-spacing-wide has-text-grey">
                            Various mathematical tasks, such as calculate percentages, simple shapes, graph fnctions and more..
          </p>
                    </div>
                </div>
            </section>
            <Grid direction="row" justify="center" alignItems="center">
                <CssBaseline />
                <Grid item lg={8} md={8} sm={12}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                        {
                            arrUrls.map((val, i) => {
                                return < a href={val.url} className={'divLink'} key={i}>
                                    <Compress style={{
                                        width: '30px',
                                        margin: '0px 8px 0px 16px'
                                    }} /> <span>{val.urlname}</span></a>
                            })

                        }
                    </div>
                </Grid>
                <Grid item lg={4} md={4} sm={false}>
                </Grid>
            </Grid>
            <Footer />
        </div >
    );
}
