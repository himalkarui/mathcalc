import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
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

}));

export default function Finance() {
    const classes = useStyles();

    const urls = [
        { url: '/finance/foreign-currency-convertor', desc: 'Foreign currency rate convertor' },
        { url: '/finance/simple-interest', desc: 'Simple Interest' },
        { url: '/finance/compound-interest', desc: 'Compound Interest' },
        { url: '/finance/discount', desc: 'Discount' },
        { url: '/finance/emi-calculator', desc: 'EMI Calculator' },
    ]

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Finance Calculator - Calculate some of commom financial expresion</title>
                <meta name="keywords" content="free online finance calculator, simple interest calculator, compound interest calculator, online calculator , free calculator" />
                <meta name="description" content="Use Mathcalc finance calculators to do the calculations for various financial calculations" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Finance
                            </h1>
                            <p className="  has-text-grey">
                                Common financial calculators like simple interest, Compound interest , Discount and more..
                            </p>
                        </div>
                    </div>
                </section>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                            {
                                urls.map((val, i) => {
                                    return <Link to={val.url} className={'divLink'} key={i}>
                                        <Compress style={{
                                            width: '30px',
                                            margin: '0px 8px 0px 16px'
                                        }} /> <span>{val.desc}</span></Link>
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
