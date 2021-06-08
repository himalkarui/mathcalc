import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Compress from '../../../Assets/icons/Compress';
import Helmet from 'react-helmet';
import Footer from '../../../Components/Footer';
import { Link } from 'react-router-dom';
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

export default function Matrices() {
    const classes = useStyles();
    let urls = [
        { url: '/maths/matrices/add', title: 'Add matrices' },
        { url: '/maths/matrices/subtract', title: 'Subtract matrices' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Matrix calculators online</title>
                <meta name="keywords" content="mathcalc,shapes,area,circumference, geometric shapes calculations,geometrics, area" />
                <meta name="description" content="Geometric shape calculator used to calculate the dimentions of geometric shapes" />
                <meta name="author" content="mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            links={[{
                                url: '/maths/',
                                urlName: 'Mathematics'
                            }]}
                            pageTitle="Matrices CALCULATORS ONLINE"
                        />
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <p className="has-text-letter-spacing-wide has-text-grey">
                                        In mathematics, a matrix is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns.
                                    </p>
                                </div>
                            </div>
                        </section>
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
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
            <Footer />
        </div >
    );
}
