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

export default function AllTools() {
    const classes = useStyles();

    let Url = [
        {
            urlname: 'Random password generator', urlpath: '/random-password-generator'
        },
        {
            urlname: 'Image to base64 generator', urlpath: '/image-base64-generator'
        },
        {
            urlname: "Morse code translator", urlpath: "/morse-code-translator"
        },
        {
            urlname: 'Simple image editor online', urlpath: '/online-image-editor'
        },
        {
            urlname: 'Favicon converter from image', urlpath: '/favicon-converter'
        },
        {
            urlname: 'Favicon generator from text', urlpath: '/favicon-generator'
        },
        {
            urlname: 'COVID-19 tracker', urlpath: '/covid19-tracker'
        },
        {
            urlname: 'Free email validation', urlpath: '/email-validator'
        }
    ]

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Online Tools - Mathcalc</title>
                <meta name="keywords" content="Mathematical calculations, free online tools, mathcalc, email validator, age calculator, online calculator, free online calculator" />
                <meta name="description" content="Mathcalc online tools are free to use and it have various kinds of tools to ease your tasks" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Free Online Tools
                            </h1>
                            <p className="  has-text-grey">
                                Free online tools for various tasks
                            </p>
                        </div>
                    </div>
                </section>
                <Grid container direction="row" justify="center" alignItems="center">
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
