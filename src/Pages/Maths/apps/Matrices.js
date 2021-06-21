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
        { url: '/maths/matrix/multiplication', title: 'Multiplication of matrices' },
        { url: '/maths/matrix/trace', title: 'Trace of a matrix' },
        { url: '/maths/matrix/determinant', title: 'Determinant of a matrix' },
        { url: '/maths/matrix/matrix-inverse', title: 'Inverse of a matrix' },
        { url: '/maths/matrix/matrix-transpose', title: 'Transpose of a matrix' },
        { url: '/maths/matrix/matrix-rank', title: 'Rank of a matrix' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Matrix calculators online</title>
                <meta name="keywords" content="mathcalc, matrix, matrix 2x2, matrix 3x3, inverse , add, subtract, multiplication, inverse, trace, determinant" />
                <meta name="description" content="Mathcalc-Online matrix calculator to do matrix operations like addition, subtraction, multiplication and more" />
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
                            pageTitle="Matrix CALCULATORS ONLINE"
                        />
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <p className="  has-text-grey">
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
