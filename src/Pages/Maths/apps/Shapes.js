import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Compress from '../../../Assets/icons/Compress';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import VerticalAds from '../../../Components/VerticalAds';
import SubNavBar from '../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
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
                <title>Geometric shapes calculator online</title>
                <meta name="keywords" content="mathcalc,shapes,area,circumference, geometric shapes calculations,geometrics, area" />
                <meta name="description" content="Geometric shape calculator used to calculate the dimentions of geometric shapes" />
                <meta name="author" content="mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            links={[{
                                url: '/maths/',
                                urlName: 'Mathematics'
                            }]}
                            pageTitle="GEOMETRIC SHAPES CALCULATORS ONLINE"
                        />
                        <br />
                        <div className={classes.calcContent}>
                            {
                                urls.map(ur => {
                                    return (<Link to={ur.url} className={'divLink'} key={ur.url} >
                                        <Compress style={{
                                            width: '30px',
                                            margin: '0px 16px 0px 16px'
                                        }} /> <span>{ur.title}</span></Link>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds /></Grid>
                </Grid>
            </Container>
        </div >
    );
}
