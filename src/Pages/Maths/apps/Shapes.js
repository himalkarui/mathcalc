import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Compress from '../../../Assets/icons/Compress';
import SubNavBar from '../../../Components/SubNavBar';
import Helmet from 'react-helmet';
import Footer from '../../../Components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    divcalc: {
        textDecoration: 'none',
        border: '1px solid #e6ecf1',
        margin: '10px',
        padding: '16px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        placeSelf: 'stretch',
        color: '#242a31',
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 3px 8px 0 rgb(216 216 216)',
        minWidth: '250px',
        maxWidth: '100%',
        minHeight: '100px'
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
    calcContent: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px',
        justifyContent: 'center'
    },
}));

export default function Shapes() {
    const classes = useStyles();
    let urls = [
        { url: '/maths/shapes/circle', title: 'circle' },
        { url: '/maths/shapes/square', title: 'Square' },
        { url: '/maths/shapes/rectangle', title: 'Rectangle' },
        { url: '/maths/shapes/triangle', title: 'Triangle' }
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Shapes Calculator - Calculate all the geomatric shapes</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <SubNavBar />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <h1 className={classes.calcHeader} >Shapes calculator</h1>
                        <div className={classes.calcContent}>
                            {
                                urls.map(ur => {
                                    return (<a href={ur.url} className={'divLink'} >
                                        <Compress style={{
                                            width: '30px',
                                            margin: '0px 16px 0px 16px'
                                        }} /> <span>{ur.title}</span></a>
                                    )
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
