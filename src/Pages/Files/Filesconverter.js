import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline, Container } from '@material-ui/core';
import Compress from '../../Assets/icons/Compress';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import VerticalAds from '../../Components/VerticalAds';

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
    resultDiv: {
        padding: '20px 0',
        marginBottom: '10px',
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '34px',
        color: '#314259',
        '& > span': {
            marginLeft: '8px',
            color: '#1678fb'
        },
    }
}));
export default function Filesconverter() {
    debugger
    const classes = useStyles();
    let arrUrls = [
        { urlname: 'Zip or compress files', url: '/zip-files' },
        { urlname: 'Image size reducer', url: '/image-size-reducer' },
        { urlname: 'Base64 Encode', url: '/base64-encode' },
        { urlname: 'Base64 Decode', url: '/base64-decode' },
    ];
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free file tools online</title>
                <meta name="keywords" content="files, file convertor, zip, gzip, zip file , extract files" />
                <meta name="description" content="convert file from png to jpedg, png to pdf, pdf to png" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced has-text-weight-bold">Files
                            </h1>
                            <p className="  has-text-grey">
                                Compress files, convert files to base64 and vice versa
                            </p>
                        </div>
                    </div>
                </section>
                <Grid direction="row" container justify="center" >
                    <CssBaseline />
                    <Grid item lg={8} md={8} sm={12}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                            {
                                arrUrls.map((val, i) => {
                                    return <Link to={val.url} className={'divLink'} key={i}>
                                        <Compress style={{
                                            width: '30px',
                                            margin: '0px 8px 0px 16px'
                                        }} /> <span>{val.urlname}</span></Link>
                                })

                            }
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
