import React from "react";
import {
    Card, Container, Grid, Button, CardContent, Typography, TextField,
    FormControl, Select, MenuItem, InputLabel
} from "@material-ui/core";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import Helmet from 'react-helmet';
import SubNavBar from "../../../Components/SubNavBar";
import Resizer from "react-image-file-resizer";

const useStyles = {
    root: {
        minHeight: 'calc(100vh - 64px)',
        flexGrow: 1,
        overflow: 'hidden'
    },
    card: {
        textAlign: 'center',
        justifyContent: 'center'
    },
    input: {
        margin: '14px 0px',
        width: '100%',
    },
    soureimage: {
        maxWidth: '100px',
        maxHeight: '100px',
    },
    svg: {
        fill: '#3f50b5',
        height: '3rem',
        width: '4rem',
        boxShadow: '2px 2px 6px 0px black'
    }
}
export default class Imagecompressor extends React.Component {
    classes = useStyles;
    constructor() {
        super();
        this.state = {
            compressedLink: null,
            originalImage: "",
            originalLink: "",
            clicked: false,
            uploadImage: false,
            snakOpen: false,
            snakMessage: "",
            maxSizeMB: 1,
            inWidth: 200,
            inHeight: 200,
            width: 200,
            height: 300,
            newImage: "",
            quality: 100,
            finalFormat: "JPEG",
        };
    }

    handleChange = e => {
        this.setState({
            finalFormat: e.target.value,
            compressedLink: null,
            comwidth: null,
            comheight: null,
        })
    }

    handle = e => {
        if (e.target.files.length > 0) {
            const imageFile = e.target.files[0];
            const letThis = this;
            let reader = new FileReader();
            reader.onloadend = function (e) {
                let image = new Image();
                image.src = e.target.result;
                image.onload = function (ev) {
                    letThis.setState({
                        originalLink: URL.createObjectURL(imageFile),
                        originalImage: imageFile,
                        outputFileName: imageFile.name,
                        uploadImage: true,
                        height: image.naturalHeight,
                        width: image.naturalWidth,
                        inWidth: image.naturalWidth,
                        inHeight: image.naturalHeight,
                    });
                };
            }
            reader.readAsDataURL(imageFile);
        }
    };

    changeValue = e => {
        this.setState({
            [e.target.name]: e.target.value,
            compressedLink: null,
            comwidth: null,
            comheight: null,
        });
    };

    click = e => {
        e.preventDefault();
        const options = {
            maxSizeMB: this.state.maxSizeMB === "" ? 1 : this.state.maxSizeMB,
            maxWidthOrHeight: this.state.maxWidthOrHeight === "" ? 500 : this.state.maxWidthOrHeight,
            useWebWorker: true
        };
        if (options.maxSizeMB >= this.state.originalImage.size / 1024) {
            alert("Image is too small, can't be Compressed!");
            return 0;
        }

        Resizer.imageFileResizer(
            this.state.originalImage,
            this.state.width,
            this.state.height,
            'JPEG',
            this.state.quality,
            0,
            (uri) => {
                try {
                    const letThis = this;
                    let reader = new FileReader();
                    reader.onloadend = function (e) {
                        let image = new Image();
                        image.src = e.target.result;
                        image.onload = function (ev) {
                            let canvas = document.createElement('canvas');
                            canvas.width = image.width;
                            canvas.height = image.height;
                            let ctx = canvas.getContext('2d');
                            ctx.drawImage(image, image.offsetLeft, image.offsetTop);
                            canvas.toBlob((blob) => {
                                let url = URL.createObjectURL(blob);
                                letThis.setState({
                                    compressedLink: url,
                                    comwidth: image.naturalWidth,
                                    comheight: image.naturalHeight,
                                    outputimageSize: blob.size,
                                    outputFileName: letThis.state.originalImage.name.split('.')[0] + "." + letThis.state.finalFormat.toLowerCase(),
                                });
                            }, 'image/' + letThis.state.finalFormat.toLowerCase(), letThis.state.quality / 100);

                        }
                    }
                    reader.readAsDataURL(uri);
                }
                catch (e) { }
            },
            "file",
        );

        this.setState({ clicked: true });
        return 1;
    };

    changePercentage = e => {
        let percentage = e.target.value;
        let height = this.state.inHeight;
        let width = this.state.inWidth;
        this.setState({
            width: Math.ceil(width * (percentage / 100)),
            height: Math.ceil(height * (percentage / 100)),
        })
    }

    render() {
        return (
            <div style={this.classes.root}>
                <Helmet>
                    <title>Resize Images Online - Reduce JPG, WEBP, GIF, PNG images</title>
                    <meta name="keywords" content="reduce images, reduce images online, reduce an image, reduce an image online, resize online, resize images online, resize an image, reduce size, image, images, images reducer, images resizer, reduce photos, reduce photos online, reduce a photo, reduce a photo online, resize photos online, resize a photo, reduce file size, improve file size, photo, photos, photos reducer, photos resizer, resize, resizer, reducer, online" />
                    <meta name="description" content="Resize a JPG, WEBP, GIF or PNG image online. Reduce image size to share it with friends or upload it to your social networks or websites." />
                </Helmet>
                <Container maxWidth="xl">
                    <SubNavBar
                        pageTitle="Online image size reducer"
                        links={[{
                            url: "/files/",
                            urlName: "Files"
                        }]}
                        txtTitle="Resize JPG, PNG, GIF or BMP images online, selecting the new image's size and quality. This way you will get lighter images, easier to upload to websites, send by e-mail or share with friends."
                    />
                    <br />
                    <div className="container" data-v-14591542>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={9} lg={9}>
                                <Grid container spacing={1} style={{ justifyContent: 'center' }}>
                                    <Grid item xl={12} sm={12} md={12} lg={12} style={{ width: '100%' }}>
                                        <Card elevation={2} style={this.classes.card} >
                                            <CardContent>
                                                <div className="file-dropzone"
                                                    style={{
                                                        backgroundColor: '#009688',
                                                        width: '100%',
                                                        height: '100%',
                                                        color: 'white',
                                                        fontSize: '0.9rem',
                                                    }}
                                                    data-v-14591542>
                                                    <input id="image" type="file" data-v-14591542 onChange={e => this.handle(e)}
                                                        accept="image/gif, image/jpeg, image/png"
                                                    />
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            padding: '1rem',
                                                        }}
                                                    >
                                                        {this.state.uploadImage ? (
                                                            <>
                                                                <div style={{ marginBottom: '10px' }}>
                                                                    <figure className="image"> <img
                                                                        alt="original placeholder"
                                                                        id="idsourceimage"
                                                                        src={this.state.originalLink}
                                                                        style={this.classes.soureimage}
                                                                    />
                                                                    </figure>
                                                                </div>
                                                                <div style={{ marginBottom: '10px' }}>
                                                                    <Typography variant="body1" component="p">
                                                                        File Name :   {
                                                                            this.state.originalImage.name
                                                                        }
                                                                    </Typography>
                                                                </div>
                                                                <div style={{ marginBottom: '10px' }}>
                                                                    <Typography variant="body1" component="p">
                                                                        File Size :   {
                                                                            (this.state.originalImage.size / 1024).toFixed(2)
                                                                            + " KB"}
                                                                    </Typography>
                                                                </div>
                                                                <div style={{ marginBottom: '10px' }}>
                                                                    <Typography variant="body1" component="p">
                                                                        width x Height  :   {this.state.inWidth + " x "
                                                                            + this.state.inHeight}
                                                                    </Typography>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div>
                                                                    <img style={{ maxWidth: '60px' }} src="https://image.flaticon.com/icons/png/512/248/248950.png" alt="upload" />
                                                                </div>
                                                                <div>
                                                                    <br />
                                                                    <p className="has-text-centered has-text-3 is-vcentered" data-v-14591542>
                                                                        <span className="is-3" data-v-14591542>Drag and drop your file here or click here to upload.</span>
                                                                    </p>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <Button variant="contained"
                                                            onClick={(e) => {
                                                                document.getElementById("image").click();
                                                            }}
                                                            color="primary">Select Image</Button>
                                                        <br />
                                                        <br />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xl={12} sm={12} md={12} lg={12}
                                        style={{
                                            display: this.state.originalImage ? 'block' : 'none',
                                            width: '100%'
                                        }}>
                                        <Card elevation={2} style={this.classes.card} >
                                            <CardContent>
                                                <Grid container>
                                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                                        <br />
                                                        <Typography variant="body1" component="h3">
                                                            Compress options
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                                        <Grid container spacing={4}>
                                                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                                                <TextField style={this.classes.input}
                                                                    label="Max width"
                                                                    name="width"
                                                                    type="number"
                                                                    onChange={this.changeValue}
                                                                    value={this.state.width}
                                                                ></TextField>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                                                <TextField style={this.classes.input}
                                                                    label="Max height"
                                                                    name="height"
                                                                    type="number"
                                                                    onChange={this.changeValue}
                                                                    value={this.state.height}
                                                                ></TextField>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                                                <TextField style={this.classes.input}
                                                                    label="Quality"
                                                                    name="quality"
                                                                    type="number"
                                                                    onChange={this.changeValue}
                                                                    value={this.state.quality}
                                                                ></TextField>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                                                <FormControl style={this.classes.input}>
                                                                    <InputLabel id="finalFormat-label">Final format</InputLabel>
                                                                    <Select
                                                                        labelId="finalFormat-label"
                                                                        id="finalFormat"
                                                                        value={this.state.finalFormat}
                                                                        onChange={this.handleChange}
                                                                    >
                                                                        <MenuItem value="PNG">PNG</MenuItem>
                                                                        <MenuItem value="JPEG">JPEG</MenuItem>
                                                                        <MenuItem value="WEBP">WEBP</MenuItem>
                                                                        <MenuItem value="GIF">GIF</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                                                <TextField style={this.classes.input}
                                                                    label="Percentage"
                                                                    name="percentage"
                                                                    type="number"
                                                                    onChange={this.changePercentage}
                                                                ></TextField>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                                        <Button
                                                            color="primary"
                                                            variant="contained"
                                                            onClick={e => this.click(e)}
                                                        >
                                                            Compress
                                                        </Button>
                                                        <br />
                                                        <br />
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid
                                        style={{
                                            display: this.state.comwidth && this.state.outputFileName ? 'block' : 'none'
                                            , width: '100%'
                                        }}
                                        item xl={12} sm={12} md={12} lg={12}>
                                        <Card elevation={2} style={this.classes.card} >
                                            <CardContent>
                                                {
                                                    this.state.comwidth && this.state.outputFileName ? <>
                                                        <br />
                                                        <Typography variant="body1" component="h3">
                                                            <strong> Download Resized Image</strong>
                                                        </Typography>
                                                        <br />
                                                        <div className="d-flex justify-content-center">
                                                            <Button
                                                                color="primary"
                                                                variant="contained"
                                                                onClick={
                                                                    (e) => {
                                                                        let a = document.createElement('a');
                                                                        a.href = this.state.compressedLink;
                                                                        a.download = this.state.outputFileName;
                                                                        a.click();
                                                                    }
                                                                }
                                                            >Download
                                                            </Button>
                                                        </div>
                                                        <br />
                                                        <div
                                                            style={
                                                                this.classes.card
                                                            }
                                                        >
                                                            <div>
                                                                <img
                                                                    style={this.classes.soureimage}
                                                                    alt="download placeholder"
                                                                    src={this.state.compressedLink}></img>
                                                            </div>
                                                            <div>
                                                                <Typography variant="body1" component="p">
                                                                    File Size :   {(this.state.outputimageSize / 1024).toFixed(2) + " KB"}
                                                                </Typography>
                                                                <div>
                                                                </div>
                                                                <Typography variant="body1" component="p">
                                                                    width x Height  :   {this.state.comwidth + " x "
                                                                        + this.state.comheight}
                                                                </Typography>
                                                            </div>
                                                        </div>
                                                    </> : <>
                                                        <InsertPhotoIcon style={{ fontSize: '185px', fill: '#009688' }} />
                                                    </>
                                                }
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <br />
                                <br />
                                <Card elevation={2} className="box">
                                    <h1 className="title is-5">Four Simple Steps</h1>
                                    <h3>1. Upload Image</h3>
                                    <h3>2. Modify the maximum width, maximum height and quality</h3>
                                    <h3>3. Click on Compress</h3>
                                    <h3>4. Download Compressed Image</h3>
                                </Card>
                                <br />
                                <Card elevation={2} className="box">
                                    <h1 className="title is-5">
                                        What is an Image size
                                    </h1>
                                    <p>
                                        Images are composed by several dots called pixels, and each of them has a color, represented as a combination of three basic colors (red, green and blue). To store each of these pixels, 3 bytes (24 ones or zeros) are generally used. When an image is large, it may have millions of pixels, and that means storing all information for an image like that in a computer or any device will take millions of bytes.
                                        <br />
                                        <br />
                                        When a camera or cellphone says it takes 10 megapixels photos, it means that each photo has 10 million pixels (mega = million). And having 10 million pixels means it takes 30 million bytes (or 30 megabytes) to store that photo (which is a lot of space!). If you want to send this photo (or many photos) to a friend by e-mail, it will have to transfer 30 megabytes of data and it will take a while to upload it and a lot for the recipient to download it later.
                                    </p>
                                </Card>
                                <Card elevation={2} className="box">
                                    <h1 className="title is-5">How can I reduce image file size?</h1>
                                    <p>
                                        <strong>Is there any solution?</strong>  Yes, there are two main solutions. One of them is compressing the image: compression reduces file size without having to resize the image, but image quality will suffer as you increase compression and start losing more image data.
                                        <br />
                                        <br />
                                        The other solution is to resize your photo, decreasing the number of pixels it takes to store the image, which reduces it's file size proportionally. Reducing image size doesn't reduce image quality, although it may lose some very small details if they become too small.
                                        <br />
                                        <br />
                                        Photos taken using modern cellphones and cameras usually have over 6 million pixels, while most cellphones, tablets, notebook or TV screens have only about 1.5 million pixels, which means you end up seeing a resized version of the image (you only use the full image if you print it). So if you resize your image, decreasing its width and height to a half, your image would have about the same number of pixels than the screens that will display it, so you wouldn't be losing any quality or detail at all, even looking at your image in full screen mode.
                                        <br />
                                        <br />
                                        So remember, if you have a huge photo, you can reduce its file size by resizing it until it's about 1900 by 1100 pixels, and getting a JPG image with just a little compression (about 95% quality). Doing so, you will get a versatile image with great quality, that you can send to anyone without taking too much time, or spending too much bandwidth on your mobile data plan.
                                    </p>
                                    <br />
                                    <div
                                        style={{
                                            padding: '12px 24px',
                                            border: '3px dashed teal',
                                            margin: '2rem 1rem',
                                        }}>
                                        <figure className="image"
                                            style={{
                                                display: 'flex',
                                                width: '100%',
                                                alignItems: 'baseline',
                                                textAlign: 'center'
                                            }}>
                                            <div style={{
                                                width: '70%',
                                            }}>
                                                <img src="https://images.unsplash.com/photo-1518009495075-5e65ba31e71f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="example resizeing">
                                                </img>
                                                <Typography
                                                    style={{
                                                        fontSize: '0.6rem'
                                                    }}
                                                    variant="h1" component="strong">
                                                    Original - 1920 x 1280
                                                    244KB
                                                </Typography>
                                            </div>
                                            <div style={{
                                                width: '30%',
                                                margin: '3px'
                                            }}>
                                                <img src="https://images.unsplash.com/photo-1518009495075-5e65ba31e71f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="reduced" />
                                                <Typography
                                                    style={{
                                                        fontSize: '0.6rem'
                                                    }}
                                                    variant="h1" component="strong">
                                                    Original - 576 x 384
                                                    60KB (73% less)
                                                </Typography>
                                            </div>
                                        </figure>
                                    </div>
                                    <br />
                                    <p>
                                        Image size reducer is an online tool that allows you to apply both compression and size reduction online to any image, and save the resulting images in different image formats like JPG, PNG, GIF or WEBP.
                                    </p>

                                </Card>
                                <br />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3}></Grid>
                        </Grid>
                    </div>
                </Container>
            </div >
        );
    }
}
