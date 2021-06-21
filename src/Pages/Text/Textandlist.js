import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, } from '@material-ui/core';
import Helmet from 'react-helmet';
import Compress from '../../Assets/icons/Compress';
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
}));

export default function Textandlist() {
    const classes = useStyles();

    let Url = [{
        urlname: 'Reverse List',
        urlpath: '/reverse-list/'
    },
    {
        urlname: 'List Randomizer',
        urlpath: '/list-randomizer/'
    },
    {
        urlname: 'Add text to each line',
        urlpath: '/add-text-each-line/'
    },
    {
        urlname: 'Sort List',
        urlpath: '/sort-list/',
    },
    {
        urlname: 'Count Lines',
        urlpath: '/count-lines/',
    },
    {
        urlname: 'Count Words',
        urlpath: '/count-words/',
    },
    {
        urlname: 'Count Letters',
        urlpath: '/count-letters/',
    },
    {
        urlname: 'Case Converter',
        urlpath: '/case-converter/',
    }
    ]


    return (
        <div className={classes.root}>
            <Helmet>
                <title>Text and lists free tools</title>
                <meta name="keywords" content="mathcalc, lists, text, reverse order,reverse lists" />
                <meta name="description" content="Work with lists and texts, sort, randomize, reverse" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">TEXT AND LISTS
                        </h1>
                            <p className="  has-text-grey">
                                Tools for sorting lists alphabetically, reverse lists, random sort, remove duplicates, clean unnecessary whitespaces
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
