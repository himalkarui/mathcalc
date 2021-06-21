import React, { useState } from 'react';
import Helmet from 'react-helmet';
import SubNavBar from '../../Components/SubNavBar';
import CustomSnakbar from '../../Components/CustomSnakbar';
import { Card, Container, Grid, Button, Tooltip } from '@material-ui/core';
function scrolldiv(div) {
    window.scroll(0,
        findPosition(div));
}
function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}

export default function Baseimagegen(props) {
    const [file, setFile] = useState();
    const onCHangeFile = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    }
    const convertImgtoBaseString = (e) => {
        try {
            debugger;
            if (file) {
                let reader = new FileReader();
                reader.onloadend = function (e) {
                    if (e.target.result.length < 524287) {
                        console.log(e.target.result.length);
                        document.getElementById("txtBaseString").value = e.target.result;
                        document.getElementById("txtHtmlString").value = '<img src="' + e.target.result + '" alt="' + file.name.split('.')[0] + '" />';
                        scrolldiv(document.getElementById("txtBaseString"));
                    }
                }
                reader.readAsDataURL(file);
            }
        } catch (e) { }
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const fncopytext = (valueID) => {
        /* Get the text field */
        let copyInput = document.getElementById(valueID);
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 524289); /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand("copy");
        setOpen(true);
        setTimeout(() => {
            handleClose();
        }, 1000);
    }

    return (
        <Container maxWidth="xl">
            <CustomSnakbar
                handleClose={handleClose}
                msg={"Copied !"}
                open={open}
            />
            <Helmet>
                <title>Image to base64 string generator | Mathcalc</title>
                <meta name="keywords" content="Image to base64, png to base 64 string, jpg, jpeg to base64 string online, base64 generator" />
                <meta name="description" content="Mathcal- this tool used to convert any kind of image to base64 string and html image code " />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <div className="container" style={{ padding: '1rem' }} data-v-14591542>
                <Grid container>
                    <Grid item sm={12} md={8} lg={8}>
                        <SubNavBar
                            pageTitle="Image to base64 string generator"
                            links={[{
                                url: "/tools/",
                                urlName: "Tools"
                            }]}
                            txtTitle="Convert all kind of image to base64 string and html Image element"
                        />
                        <br />
                        <Card elevation={1} className="box" data-v-14591542>
                            <h3 className="title is-5" data-v-14591542>Image to base64 string generator</h3>
                            <div className="file-dropzone" style={{
                                backgroundColor: 'rgb(245 0 87 / 29%)',
                                color: 'white',
                                cursor: 'pointer'
                            }} data-v-14591542>
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
                                    <Button variant="contained" id="download-package" target="_blank" color="primary" className="is-rounded"
                                        data-v-14591542
                                        onClick={convertImgtoBaseString}
                                    >
                                        <span className="icon" data-v-14591542>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-download fa-w-16" data-v-14591542>
                                                <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" data-v-14591542></path>
                                            </svg>
                                        </span>
                                        <span data-v-14591542>Convert</span>
                                    </Button>
                                    <span style={{ display: 'inline-flex', fontSize: 'x-small', padding: '14px 0px 0px 6px' }}>  {file ? file.name : ''}</span>
                                </p>
                            </div>
                        </Card>
                        <br />
                        <Card elevation={1} className="box" data-v-14591542>
                            <h1 className="title is-6">Base64 string</h1>
                            <pre>
                                <textarea rows={4}
                                    id="txtBaseString"
                                    maxLength={999999999}
                                    style={{ resize: 'none', minHeight: '120px' }}
                                    className="input"></textarea>
                            </pre>
                            <br />
                            <Tooltip title="Copy">
                                <Button variant="contained" color="secondary"
                                    onClick={
                                        (e) => {
                                            fncopytext('txtBaseString');
                                        }
                                    }
                                >
                                    Copy
                                </Button>
                            </Tooltip>
                        </Card>
                        <Card elevation={1} className="box" data-v-14591542>
                            <h1 className="title is-6">Embed html code of image</h1>
                            <pre>
                                <textarea id="txtHtmlString"
                                    maxLength={999999999}
                                    style={{ resize: 'none', minHeight: '120px' }}
                                    rows={4} className="input"></textarea>
                            </pre>
                            <br />
                            <Tooltip title="Copy">
                                <Button variant="contained" color="secondary" onClick={(e) => {
                                    fncopytext('txtHtmlString')
                                }
                                } >
                                    Copy
                                </Button>
                            </Tooltip>
                        </Card>
                    </Grid>
                    <Grid item sm={false} md={4} lg={4}></Grid>
                </Grid>

            </div>
        </Container>
    )
};

