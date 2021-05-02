import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CssBaseline, Grid, CardContent, Button, Typography, Container,
} from '@material-ui/core';
import Forward from '../Assets/icons/Forward';
import Compress from '../Assets/icons/Compress';
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

    let arrUrls = [
        { urlname: 'age calculator', url: '/general/age-calculator', desc: 'To calculate age or date' },
        { urlname: 'bmi calculator', url: '/general/bmi-calculator', desc: 'To calculate your BMI' },
        { urlname: 'simple-interest', url: '/finance/simple-interest', desc: 'To calculate the simple interest' },
        { urlname: 'compound-interest', url: '/finance/compound-interest', desc: 'To calculate the compound interest' }
    ];

    return (
        <React.Fragment>
            <>
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
                                        window.location = '/all-calculators'
                                    }}
                                >EXPLORE ALL CALCS
                                &nbsp;  <SendSharp />
                                </Button>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
                <div style={{ marginTop: '-40px' }}>
                    <CssBaseline />
                    <section style={{
                        width: '100%', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '0.5rem',
                        margin: 'auto',
                    }}>
                        <h1 style={{
                            display: 'block', fontSize: '26px', lineHeight: '1.2', fontWeight: '800', marginTop: '0px',
                            textTransform: 'capitalize', textAlign: 'center', marginBottom: '1rem',
                        }}>Most Popular Tools</h1>
                    </section>
                    <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>

                            {
                                arrUrls.map((value, i) => {
                                    return (<li className="ak39fa-0 bhAFtM" key={i}>
                                        <div className="ojwc4z-0 jkSeLq">
                                            <a className="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href={value.url}>
                                                {value.urlname}</a>
                                            <div className="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                                <Compress />
                                            </div>
                                            <div className="ojwc4z-1 jgylRt">
                                                <div className="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                                    <Forward />
                                                </div></div><p className="ojwc4z-5 jZEeUz">
                                                {value.desc}
                                            </p>
                                        </div>
                                    </li>)
                                })
                            }

                        </div>
                    </Container>
                </div >

            </>
        </React.Fragment >
    );
}
