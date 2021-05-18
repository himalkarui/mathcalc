import React, { useEffect } from "react";
import '../Assets/favicon/css/stylesfavicon.css';
import Footer from "./Footer";
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, Grid, CardContent, Button, Typography, Container,
} from '@material-ui/core';
import SendSharp from '@material-ui/icons/Telegram';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        padding: '5%',
        overflow: 'hidden',
        width: '100% !important'
    },
    mainHeader: {
        fontSize: '3rem',
        marginBottom: '20px'
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, #2D88FC 0%, #1962BF 100%) 0% 0% no-repeat padding-box",
        fontSize: 15,
        color: "white",
        marginTop: 14,
        position: "relative",
        borderRadius: '60px',
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    gridItem: {
        margin: '10px 10px 20px 15px',
        minWidth: '252px',
        maxWidth: '252px'
    }
}));

export default function Main(props) {

    useEffect(() => {

    }, []);
    const classes = useStyles();


    return (
        <React.Fragment>
            <div data-server-rendered="true" id="app" class="layout" data-v-23847e07>
                <section class="hero is-dark" data-v-677d599e>
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-7">
                                    <h1 class="subtitle is-spaced is-uppercase has-text-grey-light has-text-weight-bold">Math Calc        </h1>
                                    <p class="title is-3 has-text-letter-spacing-wide">One stop web app for all your mathamatical calculations and tools
        for FREE 😎!  </p>
                                </div>
                                <div class="column is-4">
                                    <div class="is-pulled-right">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <Container className={classes.root} maxWidth={'md'} style={{
                    paddingLeft: '0px', paddingRight: '0px', left: 0, right: 0
                }}>
                    <Card raised elevation={0} style={{ backgroundColor: 'transparent', marginTop: '3%' }} >
                        <Typography className={classes.mainHeader} variant='h1'>
                            <strong>
                                Mathcalc
                </strong></Typography>
                        <span className='subtext'>
                            We make calculations easy.  One stop tool for all mathamatical calculations.
                </span>
                        <CardContent className='appContainer'>
                            <Grid container justify="space-around">
                                <Button
                                    className={classes.button + ' ' + classes.gridItem}
                                    onClick={(e) => {
                                        window.location = '/maths/'
                                    }}
                                >EXPLORE MATH CALCS
                                &nbsp;  <SendSharp />
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>

                <br />

                <div class="container" style={{ marginBottom: '1rem' }}>
                    <div class="columns">
                        <div class="column divContents is-4 is-3 column.is-offset-1">
                            <div class="content">
                                <h5 class="title is-5">Mathamatics</h5>
                                <p><a href='/maths/shapes/'  >Shapes</a></p>
                                <p><a href='/maths/graphs/'  >Graphs</a></p>
                                <p><a href='/maths/percentage-calculator/'  >Percentage calculator</a></p>
                                <p ><a href='/maths/Single-rule-of-three-direct/'  >Single rule of three direct</a></p>
                                <p ><a href='/maths/single-rule-of-three-inverse/'  >Single rule of three inverse</a></p>
                                <p><a href='/maths/radians-and-degrees-converter/'  >Radians and degrees converter</a></p>
                            </div>
                            <p><a href='/maths/'>More</a></p>
                        </div>
                        <div class="column divContents is-4 is-3">
                            <div class="content">
                                <h5 class="title is-5">Tools</h5>
                                <p><a href="/favicon/favicon-converter/" aria-current="page" class="active--exact active">Favicon Converter</a></p>
                                <p hidden><a href="/favicon/favicon-generator/" class="">Favicon Generator</a></p>
                                <p hidden><a href="/favicon/emoji-favicons/" class="">Emoji Favicons</a></p>
                                <p hidden><a href="/favicon/logo-generator/" class="">Logo Generator</a></p>
                            </div>
                            <p><a href='/tools/'  >More</a></p>
                        </div>
                        <div class="column divContents is-4 is-3">
                            <div class="content">
                                <h5 class="title is-5">General</h5>
                                <p><a href="/general/age-calculator/" class="">Age Calculator</a></p>
                                <p><a href="/general/bmi-calculator/">BMI Calculator</a></p>
                            </div>
                            <p><a href='/general/'  >More</a></p>
                        </div>
                    </div>
                    <div class="columns" style={{ marginTop: '3px' }}>
                        <div class="column divContents is-4">
                            <div class="content">
                                <h5 class="title is-5">Finance</h5>
                                <p><a href="/finance/simple-interest/">Simple Interest</a></p>
                                <p><a href="/finance/compound-interest">Compound Interest</a></p>
                                <p><a href="/finance/discount/">Discount</a></p>
                            </div>
                            <p><a href='/finance/'>More</a></p>
                        </div>
                        <div class="column divContents is-4">
                            <div class="content">
                                <h5 class="title is-5">Physics</h5>
                                <p><a href="/physics/eeqlmc2/">Energy Mass Calculator</a></p>
                                <p><a href="/physics/ohmslaw/" class="">Ohms Law</a></p>
                                <p><a href="/physics/newtons-law-of-gravity" class="">Newtons Law of Gravity</a></p>
                            </div>
                            <p><a href="/physics/" class="">More</a></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </React.Fragment >
    );
}
