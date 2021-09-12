import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Grid, Box, Typography, Divider, Button, Paper,
    Card, CardMedia, CardContent, CardActionArea, CardActions,
} from '@material-ui/core';
import Helmet from 'react-helmet';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import VerticalAds from '../../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
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
        boxShadow: '2px 2px 8px 2px #c5c5c5',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        textTransform: 'none'
    },
    divSlideImage: {
        display: 'flex',
        justifyContent: 'stretch',
        overflow: 'scroll',
        padding: '16px',
        border: '1px dashed #cccccc',
        margin: '16px',
    },
    imgList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    cards: {
        width: '100%',
        height: '100%',
        boxShadow: '2px 2px 8px 0px rgb(34 25 25 / 40%)',
        padding: '16px 0px',
    }
}));


export default function Imagetopdf() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        filelist: [],
    });
    const fileChangehandle = (e) => {
        try {
            if (e.target.files && e.target.files[0]) {
                let filelist = [];
                for (let i = 0; i < e.target.files.length; ++i) {
                    filelist.push(
                        {
                            name: e.target.files[i].name,
                            file: e.target.files[i],
                            src: URL.createObjectURL(e.target.files[i])
                        }
                    );
                }
                setState({
                    ...state,
                    filelist: filelist,
                });
            }
        } catch (e) { }
    }

    const downloadFile = async (e, index) => {
        //convert to pdf
        const jsPDF = require('jspdf').jsPDF;
        const doc = new jsPDF(
            'p', 'px', 'a4'         //3508 x 2480 - a4 size
        );
        var image = document.getElementById('cardImage' + index.toString());
        // get image width and height
        let width = 425;
        let height = 620;
        if (image.naturalHeight < height) {
            height = image.naturalHeight;
        }
        doc.addImage(image, 'PNG', 10, 10, width, height);
        doc.save(state.filelist[index].name + '.pdf');
    }


    const downloadCombined = (e) => {
        console.log(e);
        //convert to pdf
        const jsPDF = require('jspdf').jsPDF;
        const doc = new jsPDF(
            'p', 'px', 'a4'         //3508 x 2480 - a4 size
        );
        for (let i = 0; i < state.filelist.length; ++i) {
            var image = document.getElementById('cardImage' + i.toString());
            // get image width and height
            let width = image.naturalWidth > 425 ? 425 : image.naturalWidth;//425;
            let height = 620;

            if (image.naturalHeight < height) {
                height = image.naturalHeight;
            }
            doc.addImage(image, 'PNG', 10, 10, width, height);
            if (i !== state.filelist.length) {
                doc.addPage('a4', 'p');
            }
        }
        doc.save('combined_pdf.pdf');
    }

    const imageData = [
        {
            title: "Fast and easy to use",
            content: 'Using our image to pdf converter is the fast and easy way to convert any type of image file to pdf file online. No register accounts needed.',
            imgsrc: "https://images.unsplash.com/photo-1575203091586-611fe505bb0e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvY2t8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Without limitation",
            content: 'Download and convert converted PDF files as much as you want without limitation and always free.',
            imgsrc: "https://images.unsplash.com/photo-1533090518696-23087bad0caf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5maW5pdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }, {
            title: "100% safe and clean",
            content: ' Your security is our priority.With the rising awareness of device security, people attach great importance to personal data.',
            imgsrc: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMHNlY3VyaXR5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: 'How to use?',
            content: 'Drag and drop your file into the toolbox above to begin. Word, Excel, PPT and image files will convert to PDF format. PDF files will convert to the file type you choose.',
            imgsrc: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdyUyMHRvJTIwdXNlJTIwZGVzaWdufGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            title: ' Perform on all devices',
            content: 'You do not need to register or install a software.The online PDF converter works perfectly on all devices and popular browsers: IE, Firefox, Chrome & Opera.',
            imgsrc: 'data:image/jpeg;base64,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'
        },
        {
            title: 'Great quality',
            content: 'Test and see for yourself! To ensure best quality of PDF conversion, we partnered with Solid Documents - the best solution provider on the market.',
            imgsrc: 'data:image/jpeg;base64,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HaWPUfHqpmh4VwNt2s8rz0YGsHxxH4qWafKNjPKhg4pdviZSsrWim9FyTd1Y9K/ijTNB7KKWQ8iS1rT53J9QoZ/EarmxCCFodkA0MfI8E/e6EWFrWGZHvV3odyqGLSBjj1lu/wCDiR8FOQQNaLNa1o6NAA9Au5Kj3l5FTxXDqf4VBy75y+iujJm0m3Kq2IzMadS5wiHnH3fkV0U3DCd5+vqGNzvZmJ+uuobYmwz93NauiKjHd6h8bxC0oxhD9MV9blHo+GVEw3f2kh6OIa30YAfirDQ7u0kVjHTwgjR2AF36jc/FS6KxQitkYK2NxFb8SpJ+LPyy/URSMwREQBERAEREAREQBERAEREAVI4qUTHUfaOHeicLEAE94gFuZGROG+umiu6gt8NmmopJoh7RALdc3NIeBlnna3mozV4tGrBVeyxNObdkpK77r6+l79x8bkVfa0UBvfCwM/R3AbcrgA+alqysjiGKWSNjesjg0epKx7Y+xtrlnZxCojjJJs5xhAJ1JuQ4/wD2qkqbhfUvOKaoYxx5sxSO87gfMqqNSVklE9Svw7CxqylUxEUruyj7TtfZ25lyrt+KKO/1pkIFz2LXPyuBfEBh1I581Xdo8VYx9hA9/vkIb45NxfMKQouGVI37R0sl+RIa3wAAxD9SnqLdejit2dNCCNC5uNw/M65UvvH0RTm4VS/LOb72or9zPDvrtSpBFPFYDL6mFzj53x/2XyN2tsVP273NYf30xDf0NJt6LXw2y/Vzsr+82d/q6p/29GEe+2Z+bMw2fwqsB21R1uIm9Rpicf8AFWCh4d0MdrsfIRzlec/ENsD5hW9FNU4rkZqvFcZU3qPw0+Vjho9lwxfZQxMP8tjQfUBdyIpmBtt3YREQ4EREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//Z'
        },
        {
            title: 'Access from anywhere',
            content: 'You can access the free PDF file converter anywhere, with an internet connection.Smallpdf PDF converter operates fully in the cloud.',
            imgsrc: 'data:image/jpeg;base64,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'
        }
    ];

    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Helmet>
                    <title>PDF Converter - Convert images to pdf online fast, easy and secure</title>
                    <meta name="description" content="No downloads, no ad watermarks - just a great free online tool to convert your Images to pdf quickly and easily, without having to install any software." />
                    <meta name="keywords" content="convert image to pdf, jpg to pdf, jpeg to pdf, online image converter, online pdf converter" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                </Helmet>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={9} lg={9}>
                        <Box m={2} className={classes.appBar}>
                            <Typography variant="h5"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexFlow: 'wrap'
                                }}>
                                <svg viewBox="0 0 32 32" style={{ width: '32px', height: '32px', margin: '4px', alignItems: 'center' }} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z" fill="#FFB700"></path><rect x="7.5" y="7.5" width="10" height="13" stroke="white"></rect><path d="M7.5 16.5L10 14L13.5 17.5L15 16L17.5 18.5" stroke="white"></path><circle cx="15" cy="10" r="0.5" fill="white" stroke="white"></circle>
                                    <path d="M18 11.5H24.5V24.5H14.5V20" stroke="white"></path>
                                </svg>
                                &nbsp; Image to PDF Converter
                            </Typography>
                        </Box>
                        <Divider />
                        <Box m={2} className={classes.converter}>
                            <Typography id='convert' variant="h4" className="title is-4">Image to PDF convertor online</Typography>
                            <Typography variant="subtitle1">Convert any number of image files into pdf online for free</Typography>
                        </Box>
                        <Paper elevation={2} className={classes.divConvertor} variant="outlined">
                            <Grid container justify="center" spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <br />
                                    <Button variant="contained"
                                        startIcon={<CloudUploadOutlinedIcon />}
                                        className={classes.button}
                                        onClick={(e) => {
                                            document.getElementById("folder").click();
                                        }}
                                        color="primary">Select files</Button>
                                    <Button className={classes.button}
                                        variant="outlined"
                                        startIcon={<HighlightOffOutlinedIcon />}
                                        onClick={(e) => {
                                            setState({
                                                ...state,
                                                filelist: []
                                            })
                                        }}
                                        color="primary">Clear files</Button>
                                    <br />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Box m={2} className={classes.divSlideImage + " divImageGridParent"}>
                                        {
                                            state.filelist && state.filelist.length > 0 ?
                                                <>
                                                    <Grid container spacing={2} style={{
                                                        overflowY: 'hidden',
                                                        display: 'inline-flex',
                                                        flexWrap: 'nowrap',
                                                        justifyContent: 'stretch',
                                                        paddingBottom: '1.5rem'
                                                    }}
                                                        id="divImageGrid"
                                                        className="divImageGrid"
                                                    >
                                                        {
                                                            state.filelist.map((img, i) => (
                                                                <Grid item xs={12} sm={4} md={4} lg={4} key={i} >
                                                                    <Card className={classes.cards}>
                                                                        <CardActionArea>
                                                                            <CardMedia
                                                                                component="img"
                                                                                alt={img.name}
                                                                                style={{
                                                                                    height: '140px',
                                                                                }}
                                                                                src={img.src}
                                                                                id={'cardImage' + i}
                                                                                title={img.name}
                                                                            />
                                                                        </CardActionArea>
                                                                        <CardContent style={{ textAlign: 'left', padding: '8px' }}>
                                                                            <Typography gutterBottom variant="subtitle2" component="h2">
                                                                                {img.name}
                                                                            </Typography>
                                                                        </CardContent>
                                                                        <CardActions>
                                                                            <Button
                                                                                startIcon={<CloudDownloadOutlinedIcon />}
                                                                                style={{
                                                                                    width: '100%',
                                                                                    margin: '3px 12px',
                                                                                    alignItems: 'center',
                                                                                    height: '34px',
                                                                                    whiteSpace: 'nowrap'
                                                                                }}
                                                                                onClick={
                                                                                    (e) => {
                                                                                        downloadFile(e, i);
                                                                                    }}
                                                                                className={classes.button} variant="contained" size="small" color="primary">
                                                                                Download PDF
                                                                            </Button>
                                                                        </CardActions>
                                                                    </Card>
                                                                </Grid>
                                                            ))
                                                        }
                                                    </Grid>
                                                    <br />
                                                </>
                                                : <></>
                                        }
                                        <div style={{
                                            display: state.filelist && state.filelist.length > 0 ? 'none' : '',
                                            width: '100%'
                                        }}>
                                            <div className="file-dropzone"
                                                style={{
                                                    fontSize: '0.9rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    width: '100%',
                                                    cursor: 'pointer'
                                                }}
                                                data-v-14591542>
                                                <input id="folder"
                                                    multiple
                                                    type="file"
                                                    data-v-14591542
                                                    onChange={fileChangehandle}
                                                    accept={".png,.jpg,.jpeg,.gif"}
                                                />
                                                <div style={{ margin: '15px' }}>
                                                    <Typography className="subtext has-text-grey" variant="subtitle2">
                                                        Drop or Select files</Typography>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Button className={classes.button}
                                        variant="contained"
                                        startIcon={<CloudDownloadOutlinedIcon />}
                                        onClick={downloadCombined}
                                        color="secondary">Combined to pdf</Button>
                                    <br />
                                    <br />
                                </Grid>
                            </Grid>
                        </Paper>

                        <Box m={3} className="container" style={{ textAlign: 'center' }}>
                            <h2 className="title">Image to pdf convertor online</h2>
                            <p className="mw70">
                                This free online service allows to convert your images to separate PDF files or to merge them together in
                                one PDF file. All you have to do is upload images, wait a very short time and download the result.
                            </p>
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
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <VerticalAds />
                    </Grid>
                </Grid>
            </Container >
        </div >
    )
}
