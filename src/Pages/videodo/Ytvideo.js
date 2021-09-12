import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Box, Typography, Divider, Button, TextField, Paper,
    Dialog, DialogTitle, DialogContent, Card, CardMedia, CardContent, CardActionArea, IconButton
} from '@material-ui/core';
import Helmet from 'react-helmet';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'inherit',
        textAlign: 'center',
        padding: '0.5rem 0px'
    },
    converter: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '2rem'
    },
    divConvertor: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: '4rem',
    },
    divConvertorGrid: {
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        }
    },
    divResultGrid: {
        [theme.breakpoints.up('sm')]: {
            width: '85%'
        },
        margin: '0px 0 3rem',
        display: 'flex',
        padding: '20px',
        background: '#fafafa',
        textAlign: 'left',
        justifyContent: 'center',
    },
    btnInput: {
        width: '100%',
        height: '100%',
        minHeight: '48px',
        borderRadius: '0px',
    }
    , closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: '#fff',
    },
    searchInput: {
        width: '100%',
        borderRadius: '0px',
        backgroundColor: '#fff',
        "&> *": {
            borderRadius: '0px'
        }
    },
    griditem: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px'
        }
    },
    divControls: {
        textAlign: 'left',
        paddingLeft: '1rem'
    },
    select: {
        width: '89%',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 5px 0 #48c774',
    },
    dialog: {
        '& .MuiBackdrop-root': {
            opacity: '0.8',
        }
    },
    dialogTitle: {
        backgroundColor: '#7a7a7a',
        color: '#fff'
    },
    paper: {
        minWidth: '254px',
        padding: '1rem',
        height: '100%'
    },
    gridLastRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cards: {
        height: '100%'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

export default function Ytvideo() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const [url, setUrl] = React.useState('');
    const [videoDetails, setVideoDetails] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [formats, setFormats] = React.useState([]);

    const [vvalue, setVValue] = React.useState('');
    const [avalue, setAValue] = React.useState('');

    const vhandleChange = (event) => {
        setVValue(event.target.value.toString());
        setAValue('');
        let itag = formats.filter(frt => frt.itag === parseInt(avalue) || frt.itag === parseInt(vvalue));
        console.log(itag);
    };

    const ahandleChange = (event) => {
        setAValue(event.target.value.toString());
        setVValue('');
        let itag = formats.filter(frt => frt.itag === parseInt(avalue) || frt.itag === parseInt(vvalue));
        console.log(itag);
    };

    const clickGetInfo = async () => {
        try {
            setLoading(true);
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "");
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://mathcalc.xyz/api/yt-info/?url=" + url, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.status === "200") {
                        console.log(result.Response);
                        let formats = result.Response.formats;
                        setFormats(formats);

                        setVideoDetails(result.Response.videoDetails);
                        setLoading(false);
                    } else {
                        setLoading(false);
                    }
                }).catch(e => {
                    setLoading(false);
                });
        } catch (e) {
            console.log(e.message);
        }
    }

    const downloadFile = async () => {
        let itag = formats.filter(frt => frt.itag === parseInt(avalue) || frt.itag === parseInt(vvalue));
        const link = document.createElement('a');
        link.href = itag[0].url
        link.setAttribute('download', 'videoplayback.' + itag[0].container);
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        // https://www.youtube.com/watch?v=hPQ79rrkziM
    }

    const imageData = [
        {
            title: "Fast and easy to use",
            content: 'Using our Youtube downloader is the fast and easy way to download and save any YouTube video to MP3 or MP4. Simply copy YouTube URL, paste it on the search box and click on "Convert" button. No register accounts needed.',
            imgsrc: "https://images.unsplash.com/photo-1575203091586-611fe505bb0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvY2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Without limitation",
            content: 'Download and convert YouTube videos as much as you want without limitation and always free.',
            imgsrc: "https://images.unsplash.com/photo-1533090518696-23087bad0caf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5maW5pdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }, {
            title: "100% safe and clean",
            content: 'With the rising awareness of device security, people attach great importance to personal data. The service is totally clean with no virus under intense supervision based on security database.',
            imgsrc: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMHNlY3VyaXR5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
    ]

    return (
        <div className={classes.root}>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                className={classes.dialog}
                onClose={() => {
                    setOpen(false)
                }
                }
                style={{ minWidth: '60vw' }}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle
                    className={classes.dialogTitle} id="responsive-dialog-title">Video formats

                    <IconButton aria-label="close" className={classes.closeButton} onClick={(e) => {
                        setOpen(false)
                    }}>
                        <CloseIcon />
                    </IconButton>

                </DialogTitle>
                <Divider />
                <DialogContent>
                    <Box p={1} >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Videos (MP4)</FormLabel>
                                        <br />
                                        <RadioGroup aria-label="videos" name="videos" value={vvalue.toString()} onChange={vhandleChange}>
                                            {
                                                formats ? formats.filter(
                                                    formt => formt.hasVideo && formt.container === 'mp4' && formt.itag !== 18 && !isNaN(formt.contentLength)).map(
                                                        (frt, index) => (
                                                            < FormControlLabel key={index} value={frt.itag.toString()} control={< Radio />}
                                                                label={frt.qualityLabel + ' ( ' + (frt.contentLength / 1000000).toFixed(1) + 'MB )'} />
                                                        )) : <></>
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <Paper variant="outlined" className={classes.paper}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Audios</FormLabel>
                                        <br />
                                        <RadioGroup aria-label="audios" name="audios" value={avalue.toString()} onChange={ahandleChange}>
                                            {
                                                formats ? formats.filter(
                                                    formt => !formt.hasVideo && formt.hasAudio && !isNaN(formt.contentLength)).map(
                                                        (frt, index) => (
                                                            < FormControlLabel key={index} value={frt.itag.toString()} control={< Radio />}
                                                                label={frt.audioQuality.replace('AUDIO_QUALITY_', '').toLowerCase() + ' ( ' + (frt.contentLength / 1000000).toFixed(1) + 'MB )'} />
                                                        )) : <></>
                                            }
                                        </RadioGroup>
                                    </FormControl>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.gridLastRow}>
                                <Button variant="contained"
                                    style={{
                                        minWidth: '245px',
                                        margin: '20px',
                                        height: '42px'
                                    }}
                                    onClick={
                                        downloadFile
                                    }
                                    color="secondary">
                                    Play and Download  {/* <a target='_blank' style={{ color: '#fff' }} href={value} download file='download'>Download</a> */}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                </DialogContent>
            </Dialog>

            <Helmet>
                <title>Youtube video downloader - Online Youtube Video Downloader | mathcalc</title>
                <meta name="description" content="Convert,preview and download Youtube videos to MP3, MP4, 3GP for free with our Youtube video downloader. The downloading is very quick and simple, just wait a few seconds for the file to be ready on your device." />
                <meta name="keywords" content="youtube, convert video, mp4, mp3, webm, varius quality,medium, low, high quality,youtube video downloader, youtube downloader/" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Box m={3} className={classes.appBar}>
                <Typography variant="h5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="28" viewBox="0 0 37 28" fill="none" alt="Our">
                        <g clipPath="url(#clip0)">
                            <path d="M0.413567 5.80249C0.646742 2.9375 2.94402 0.705376 5.81232 0.517162C9.497 0.275378 14.5363 0 18.375 0C22.2137 0 27.253 0.275378 30.9377 0.517162C33.806 0.705375 36.1033 2.9375 36.3364 5.80249C36.5469 8.38873 36.75 11.5252 36.75 14C36.75 16.4748 36.5469 19.6113 36.3364 22.1975C36.1033 25.0625 33.806 27.2946 30.9377 27.4828C27.253 27.7246 22.2137 28 18.375 28C14.5363 28 9.497 27.7246 5.81232 27.4828C2.94402 27.2946 0.646742 25.0625 0.413567 22.1975C0.203079 19.6113 0 16.4748 0 14C0 11.5252 0.203079 8.38873 0.413567 5.80249Z" fill="#FF0000"></path>
                            <path d="M11.1223 8.18535L8 11.1334L18 21L28 11.1334L24.8777 8.18535L20.1879 12.8132V0H15.8121V12.8132L11.1223 8.18535Z" fill="white"></path>
                        </g>
                        <defs>
                            <clippath id="clip0">
                                <rect width="36.75" height="28" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </Typography>
                <Typography variant="h5">
                    &nbsp; Online youtube video downloader
                </Typography>
            </Box>
            <Divider />
            <Box m={2} className={classes.converter}>
                <Typography id='convert' variant="h4" className="title is-4">Youtube Downloader</Typography>
                <Typography variant="subtitle1">Convert, preview and download Youtube videos in MP3, MP4 for free</Typography>
            </Box>
            {loading ?
                <Box p={3} className={classes.divConvertor}>
                    <Paper variant="outlined" p={3} className={classes.divResultGrid}>
                        <div >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                style={{ margin: 'auto', background: 'transparent', display: 'block', width: "200px", height: "200px" }}
                                viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <g transform="translate(20 50)">
                                    <circle cx="0" cy="0" r="6" fill="#e15b64">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                                    </circle>
                                </g><g transform="translate(40 50)">
                                    <circle cx="0" cy="0" r="6" fill="#f8b26a">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                                    </circle>
                                </g><g transform="translate(60 50)">
                                    <circle cx="0" cy="0" r="6" fill="#abbd81">
                                        <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                                    </circle>
                                </g><g transform="translate(80 50)">
                                    <circle cx="0" cy="0" r="6" fill="#81a3bd">
                                        <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                                    </circle>
                                </g>
                            </svg>
                        </div>
                    </Paper>
                </Box>
                :
                <>

                    {videoDetails ?
                        <Box p={3} className={classes.divConvertor}>
                            <Paper variant="outlined" p={3} className={classes.divResultGrid}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={5} md={5} lg={5}
                                        style={{
                                            background: 'rgb(0 0 0 / 70%)',
                                            paddingLeft: '0px',
                                            paddingRight: '0px',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                        <figure className="image">
                                            <img src={
                                                videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url}
                                                alt={videoDetails.title} />
                                        </figure>
                                    </Grid>
                                    <Grid item xs={12} sm={7} md={7} lg={7}>
                                        <div className={classes.divControls}>
                                            <div>
                                                <h1 className="title is-6">
                                                    {videoDetails.title}
                                                </h1>
                                                <p>
                                                    {videoDetails.ownerChannelName}
                                                </p>
                                                <p>
                                                    {
                                                        parseInt(videoDetails.lengthSeconds / (60 * 60)) + ":" +
                                                        parseInt((videoDetails.lengthSeconds % (60 * 60)) / 60) + ":" +
                                                        parseInt(videoDetails.lengthSeconds % (60 * 60)) % 60
                                                    }
                                                </p>
                                                <br />
                                            </div>
                                            <div style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '50%', paddingRight: '5px' }}>
                                                    <Button variant="contained"
                                                        style={{
                                                            height: '54px',
                                                            width: '100%',
                                                            textTransform: 'none',
                                                            fontWeight: '600',
                                                            marginRight: '4px'
                                                        }} className="button is-info"

                                                        onClick={(e) => {
                                                            setVideoDetails(undefined);
                                                        }}

                                                    >Convert next</Button>
                                                </div>
                                                <div style={{ width: '50%' }}>
                                                    <Button variant='contained'
                                                        style={{
                                                            height: '54px',
                                                            width: '100%',
                                                            fontWeight: '600',
                                                            textTransform: 'none',
                                                        }}
                                                        className='button is-success'
                                                        onClick={
                                                            () => {
                                                                setOpen(true)
                                                            }}
                                                    >Get link</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                        : <>
                            <Box p={3} className={classes.divConvertor}>
                                <Grid container className={classes.divConvertorGrid}>
                                    <Grid className={classes.griditem} item sm={9} md={9} lg={9}>
                                        <TextField variant="outlined" id="s_input" className={classes.searchInput}
                                            type="search"
                                            autoComplete='true'
                                            autoFocus
                                            onChange={e => {
                                                setUrl(e.target.value)
                                            }}
                                            aria-label="Search" placeholder="Search or paste Youtube link here" value={url} />
                                    </Grid>
                                    <Grid className={classes.griditem} item sm={3} md={3} lg={3}>
                                        <Button variant="contained" className={classes.btnInput} color="secondary"
                                            onClick={clickGetInfo}
                                        >Convert</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </>
                    }
                </>
            }
            <Container maxWidth="xl">
                <Box m={3} className="container" style={{ textAlign: 'center' }}>
                    <h2 className="title">The Best Youtube Downloader online</h2>
                    <p className="mw70">Our YouTube Downloader helps you save Youtube videos to your device. You can choose from a variety of formats and qualities to download.</p>
                </Box>
                <br />
                <br />
                <Grid container spacing={2} justify='center'>
                    {
                        imageData.map((img, i) => (
                            <Grid item xs={12} sm={6} md={6} lg={4} key={i}>
                                <Card className={classes.cards}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={img.imgsrc}
                                            title={img.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {img.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {img.content} </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                <hr />
                <Box p={2} textAlign='center'>
                    <h2 className="title">Youtube Video Downloader</h2>
                    {/* <ul class="listicon">
                        <li>
                            <img src="./Youtube Downloader - Online Youtube Video Downloader _ Our.com_files/icon1.svg" alt="Youtube to MP4" />
                        </li>
                        <li>
                            <img src="./Youtube Downloader - Online Youtube Video Downloader _ Our.com_files/icon2.svg" alt="Youtube to MP3 " />
                        </li>
                    </ul> */}
                    <p className="mw70">Download Youtube videos with Our YouTube Downloader. By using our downloader you can easily convert YouTube videos to MP3, MP4, 3GP, WEBM, M4A files... and download them for free - this service works for computers, tablets and mobile devices. The videos are always converted in the highest available quality.</p>
                    <br />
                    <hr />
                    <p className="magT40">
                        <a className="btn-red mag0" type="button" style={{ color: '#fff' }} href="#convert">
                            <Button variant="contained" color="primary" style={{ height: '48px', minWidth: '254px' }}>
                                Convert now
                            </Button>
                        </a>
                    </p>
                </Box>
                <hr />

                <h2 className="title is-4" style={{ textAlign: 'center' }}>  Disclaimer</h2>
                <p style={{ textAlign: 'center' }}>
                    Downloading videos from YouTube is against the YouTube Policy. The only videos that your allowed to download is your own which you can already do using YouTube Studio.
                </p>
                <hr />

                <h2 className="title is-4" style={{ textAlign: 'center' }}>How to download Youtube video oline? </h2>
                <Box p={2}>

                    <div className={classes.root}>
                        <Stepper activeStep={3} orientation="vertical">
                            <Step key={'label1'}>
                                <StepLabel>Paste YouTube url and click convert button</StepLabel>
                            </Step>
                            <Step key={'label2'}>
                                <StepLabel>Choose output MP4 or MP3 format you want to convert and click "Play and Download" button.
                                </StepLabel>
                            </Step>
                            <Step key={'label3'}>
                                <StepLabel>New page will open and video or audio will play.
                                </StepLabel>
                            </Step>
                            <Step key={'label4'}>
                                <StepLabel>
                                    If you like, Click three dots and download. Very easy ,fast and secure. because it downloads files from google itself
                                </StepLabel>
                            </Step>
                        </Stepper>
                    </div>
                </Box>
                <hr />
                <h3 className="title is-4" style={{ textAlign: 'center' }}>Questions and Answers</h3>
                <div className={classes.root} style={{ backgroundColor: '#fff' }}>
                    <Box p={2}>
                        <section itemScope="" itemType="https://schema.org/FAQPage">
                            <div className="container">
                                <h4 className='title is-6'>Is there any limit on the amount of downloaded files applied for users?</h4>
                                <p>
                                    No. Our website allows users to convert and download unlimited amount of file and for free.
                                </p>
                                <br />
                                <h4 className='title is-6'>What are the supported video/audio formats?</h4>
                                <p>  We offer a ton of conversion options and allow you to download MP4, 3GP, MP3 format. You can watch video right after that on your device without installing any other software.
                                </p>
                                <br />
                                <h4 className='title is-6'>What are the compatible devices for the conversion?</h4>
                                <p> We offer the service that is compatible with all PC devices, smart phones and tablets.
                                </p>
                                <br />
                                <h4 className='title is-6'>How to download Youtube video to Android mobile phone?</h4>
                                <ol>
                                    <li>Access Youtube from your browser or open Youtube app on your Android device; after that, coppy the video URL you wish to download. </li>
                                    <li>Paste the URL into the search box. You also can enter keyword to look for the video you wish. </li>
                                    <li>Select the format you wish to download then tap "Download". After a few seconds, you can download the file.</li>
                                </ol>
                                <br />
                                <h4 className='title is-6'>Where do the downloaded files get saved?</h4>
                                <p> Files you've downloaded are automatically saved in the Downloads folder or the "download history" section on your device.
                                </p>
                            </div>
                        </section >
                    </Box >
                </div>
            </Container >
        </div >
    )
}
