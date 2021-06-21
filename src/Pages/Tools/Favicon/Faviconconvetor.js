import React, { useState } from "react";
import Helmet from 'react-helmet';
import * as fileSave from "file-saver";
// import js , css and iamges
import '../../../Assets/favicon/css/stylesfavicon.css';
import Favicon from "../../../Assets/favicon/js/favicon.js/src/package";
import imgPreview from "../../../Assets/images/mathcalcblack.jpg";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CloseIcon from '@material-ui/icons/Close';
import { Breadcrumbs, Container, Typography, Grid, Card, Snackbar, IconButton, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}

export default function Faviconconvertor(props) {

    const [file, setFile] = useState();
    const [resultFiles, setResultFiles] = useState();
    const generateFavicon = e => {
        try {
            //create folder and zip it

            const zip = require('jszip')();

            let strFile = '{"name":"","short_name":"","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"theme_color":"#ffffff","background_color":"#ffffff","display":"standalone"}';

            let blob = new Blob([strFile], { type: 'text/webmanifest' });

            let folderName = zip.folder('favicon');
            let Filenames = Object.keys(resultFiles);
            let OriginalFiles = [
                'favicon.ico',
                'favicon-16x16.png',
                'favicon-24x24.png',
                'favicon-48x48.png',
                'favicon-32x32.png',
                'apple-touch-icon.png',
                'android-chrome-192x192.png',
                'android-chrome-512x512.png'
            ];

            for (let i = 0; i < Filenames.length; ++i) {
                folderName.file(OriginalFiles[i], dataURItoBlob(resultFiles[Filenames[i]]));
            }
            folderName.file('site.webmanifest', blob);

            zip.generateAsync({ type: "blob" }).then(content => {
                fileSave.saveAs(content, "favicon.zip");
            });

            // // Activate the download button
            // const download = document.createElement("a");
            // download.href = resultFiles.ico;
            // download.setAttribute("download", "favicon.ico");
            // download.target = "_blank";
            // download.click();
        } catch (e) {

        }
    }

    function onCHangeFile(ev) {
        try {
            setFile(ev.target.files[0]);
            if (ev.target.files.length !== 0) {
                let file = ev.target.files[0];
                let reader = new FileReader();
                reader.onloadend = function (e) {
                    let image = new Image();
                    image.src = e.target.result;
                    image.onload = function (ev) {
                        let canvas = document.getElementById('canvas');
                        canvas.width = image.width;
                        canvas.height = image.height;
                        let ctx = canvas.getContext('2d');
                        ctx.drawImage(image, image.offsetLeft, image.offsetTop);
                        // Create favicon.ico dataurl
                        const resFiles = Favicon.generate(canvas);
                        setResultFiles(resFiles);
                    }
                }
                reader.readAsDataURL(file);
            }
        }
        catch (e) { }
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const fncopytext = (e) => {
        /* Get the text field */
        let copyInput = document.getElementById('copytextcode');
        copyInput.style.display = "block";
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand("copy");
        copyInput.style.display = "none";
        setOpen(true);
        setTimeout(() => {
            handleClose();
        }, 1000);
    }

    return (
        <React.Fragment>

            <Snackbar style={{ marginBottom: '85px' }} open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                // onClose={handleClose}
                message=" Copied !"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            Close
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />

            <input readOnly style={{ display: 'none' }} id='copytextcode' value='<link rel="apple-touch-icon "sizes="180x180 "href="/apple-touch-icon.png "><link rel="icon "type="image/png "sizes="32x32 "href="/favicon-32x32.png "><link rel="icon "type="image/png "sizes="16x16 "href="/favicon-16x16.png "><link rel="manifest "href="/site.webmanifest ">'></input>
            <div data-server-rendered="true" className="layout" data-v-14591542>
                <Helmet>
                    <title>Favicon Convertor | Image to Favicon | Mathcalc</title>
                    <meta charset="utf-8" />
                    <meta name="generator" content="Gridsome v0.7.20" />
                    <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                    <meta data-key="description" name="description" content="The only favicon generator you need for your next project. Quickly generate your favicon from text, image, or choose from hundreds of emojis." />
                </Helmet>
                <Container maxWidth="xl">
                    <br />
                    <Card elevation={1} className="box" style={{ backgroundColor: '#fef7e0' }} data-v-14591542>
                        <canvas id="canvas" hidden />
                        <div className="hero-body" >
                            <div className="columns">
                                <div className="column is-7">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" className="has-text-grey-light" />} aria-label="breadcrumb">
                                            <Link to="/tools/" className="subtitle has-text-grey-light is-5 is-spaced is-uppercase has-text-weight-bold">
                                                Tools</Link>
                                            <Typography className="subtitle has-text-grey-light is-5 is-spaced is-uppercase has-text-weight-bold"> Generate favicon from Image</Typography>
                                        </Breadcrumbs>
                                    </h1>
                                    <p style={{ lineHeight: '35px' }} className="title is-5   ">Quickly generate your favicon from an image by uploading your image below. Download your favicon in the most up to date formats.
                                    </p>
                                </div>
                                <div className="column is-4">
                                    <div className="is-pulled-right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <br />
                    <Grid >
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Card elevation={1} className="box" data-v-14591542>
                                <h3 className="title is-4" data-v-14591542>Favicon Converter</h3>
                                <div className="file-dropzone" style={{ backgroundColor: 'aliceblue' }} data-v-14591542>
                                    <input id="image" type="file" data-v-14591542 onChange={onCHangeFile}
                                        accept="image/gif, image/jpeg, image/png"
                                    />
                                    <p className="has-text-centered has-text-3 is-vcentered" data-v-14591542>
                                        <span data-v-14591542>
                                            <i className="fa fa-upload" data-v-14591542></i>
                                        </span>
                                        <span className="is-3" data-v-14591542>Drag and drop your file here or click here to upload.</span>
                                    </p>
                                </div>
                                <br data-v-14591542 />
                                <div className="field is-grouped" data-v-14591542>
                                    <p className="control" data-v-14591542>
                                        <img style={{ borderRadius: '3px' }} id="preview" alt="Favicon Preview 48x48" width="40" src={(resultFiles) ? resultFiles.png512 : imgPreview} sizes="(max-width: 40px) 100vw, 40px" className="image g-image" data-v-14591542 />
                                    </p>
                                    <p className="control" data-v-14591542>
                                        <button id="download-package" target="_blank" className="button is-rounded is-info"
                                            data-v-14591542
                                            onClick={e => { generateFavicon(e) }}
                                            onKeyUp={e => e.target.removeAttribute('href')}
                                        >
                                            <span className="icon" data-v-14591542>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-download fa-w-16" data-v-14591542>
                                                    <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" data-v-14591542></path>
                                                </svg>
                                            </span>
                                            <span data-v-14591542>Download</span>
                                        </button>
                                        <span style={{ display: 'inline-flex', fontSize: 'x-small', padding: '14px 0px 0px 6px' }}>  {file ? file.name : ''}</span>
                                    </p>
                                </div>
                            </Card>
                            <br />
                            <br />
                            <Card elevation={1} className="box">
                                <h3 className="title is-4">Usage Instructions</h3>
                                <p>First, Select the file and then use the download button to download the files listed below.
                                    Place the files in the root directory of your website.
                                </p>
                                <ul>
                                    <li>android-chrome-192x192.png</li>
                                    <li>android-chrome-512x512.png</li>
                                    <li>apple-touch-icon.png</li>
                                    <li>favicon-16x16.png</li>
                                    <li>favicon-24x24.png</li>
                                    <li>favicon-48x48.png</li>
                                    <li>favicon-32x32.png</li>
                                    <li>favicon.ico</li>
                                    <li>site.webmanifest</li>
                                </ul>
                                <p>
                                    Next, copy the following link tags and paste them into the
                                    <code>head</code>
                                    of your HTML.

                                </p>
                                <br />
                                <pre>
                                    <code>&lt;link rel=&quot;apple-touch-icon &quot;sizes=&quot;180x180 &quot;href=&quot;/apple-touch-icon.png &quot;&gt;
                                        <br />
                                        &lt;link rel=&quot;icon &quot;type=&quot;image/png &quot;sizes=&quot;32x32 &quot;href=&quot;/favicon-32x32.png &quot;&gt;
                                        <br />
                                        &lt;link rel=&quot;icon &quot;type=&quot;image/png &quot;sizes=&quot;16x16 &quot;href=&quot;/favicon-16x16.png &quot;&gt;
                                        <br />
                                        &lt;link rel=&quot;icon &quot;type=&quot;image/png &quot;sizes=&quot;24x24 &quot;href=&quot;/favicon-24x24.png &quot;&gt;
                                        <br />
                                        &lt;link rel=&quot;icon &quot;type=&quot;image/png &quot;sizes=&quot;48x48 &quot;href=&quot;/favicon-48x48.png &quot;&gt;
                                        <br />
                                        &lt;link rel=&quot;manifest &quot;href=&quot;/site.webmanifest &quot;&gt;</code>
                                </pre>
                                <br />
                                <button onClick={fncopytext} className="button is-info">Copy</button>
                            </Card>
                            <br />
                            <br />
                            <Card className="box" data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <h3 className="title is-4" data-v-14591542>About the favicon generator</h3>
                                    <p data-v-14591542>If you already have an image that you would like to use for a
                                        favicon on your website then this is the tool you need. The
                                        favicon generator will convert you image to a favicon. You can
                                        upload a PNG, JPG, or BMP and the favicon generator will
                                        output an ICO file.
                                    </p>
                                    <p data-v-14591542>For the best result you should upload an square image. You can
                                        use a standard image editing tool if you need to crop your
                                        image. Once your image is prepared upload it using the tool
                                        above. Next, verify that the preview image is to your liking.
                                        Finally, use the download button to export your favicon in ICO
                                        format.
                                    </p>
                                    <h3 className="title is-4" data-v-14591542>Why do I need an ICO file instead of a PNG?
                                    </h3>
                                    <p data-v-14591542>An ICO file is a special image file use by the browser. The
                                        unique feature of an ICO file is that it is multilayered. Each
                                        layer of the favicon holds a different size of the image. The
                                        common sizes for a ICO formatted favicon are 16x16px, 32x32px,
                                        and 48x48px.
                                    </p>
                                    <p data-v-14591542>For best compatibility web browsers can leverage the ICO file
                                        generated by the favicon generator. The browsers will use the
                                        different sizes for displaying in different areas of the
                                        website such as the bookmarks bar, the address bar, the
                                        browser tab, and as a desktop shortcut.
                                    </p>
                                    <h3 className="title is-4" data-v-14591542>What types of images work best for the favicon generator?
                                    </h3>
                                    <p data-v-14591542>The favicon generator works best with a simple icon, logo, or
                                        letter. Intricate or complex designs don't work well when they
                                        are resized using the favicon generator as much detail is
                                        lost. If your logo is very complex we recommend generating the
                                        favicon from text using the alternative generator.
                                    </p>
                                </div>
                            </Card>
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment >
    );
}
