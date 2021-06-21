import React from 'react';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
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
    calcContent: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px',
        margin: '0px',
        justifyContent: 'center'
    },
}));

export default function Maths() {
    const classes = useStyles();
    let urls = [
        { url: '/maths/shapes/', title: 'Shapes' },
        { url: '/maths/matrices/', title: 'Matrices' },
        { url: '/maths/graphs/', title: 'Graphs' },
        { url: '/maths/percentage-calculator/', title: 'Percentage calculator' },
        { url: '/maths/single-rule-of-three-direct/', title: 'Single rule of three direct' },
        { url: '/maths/single-rule-of-three-inverse/', title: 'Single rule of three inverse' },
        // { url: '/maths/Trigonometric-functions/', title: 'Trigonometric functions' },
        { url: '/maths/radians-and-degrees-converter/', title: 'Radians and degrees converter' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free math calculator - Calculate all  mathematical calculations</title>
                <meta name="keywords" content="Mathcalc, online calculator, free tools, free online calculator" />
                <meta name="description" content="Mathcalc is an Online free tool for doing all kind of  mathematical calculations" />
                <meta name="author" content="Mathcalc" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <Grid direction="row" container justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Mathematics
          </h1>
                                    <p className="  has-text-grey">
                                        Various mathematical tasks, such as calculate percentages, simple shapes, graph functions and more.
          </p>
                                </div>
                            </div>
                        </section>
                        <div className={classes.calcContent}>
                            {
                                urls.map((ur, i) => {
                                    return (<Link to={ur.url} className={'divLink'} key={i} >
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
