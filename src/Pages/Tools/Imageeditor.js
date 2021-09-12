import React, { useEffect, useState } from 'react';
import FilerobotImageEditor from 'filerobot-image-editor';
import Helmet from 'react-helmet';
 import SubNavBar from '../../Components/SubNavBar';
import { Card, Container, Grid, Dialog } from '@material-ui/core';
import VerticalAds from '../../Components/VerticalAds';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    ulElem: {
        listStyle: 'disc !important',
        padding: '1.5rem',
        borderBottom: 'solid',
        borderTop: 'solid',
        "& li": {
            listStyleType: 'disc'
        }
    }
}));

export default function Imageeditor(props) {
    const classes = useStyles();
    const [show, toggle] = useState(false);
    const [file, setFile] = useState();

    const onCHangeFile = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
            toggle(true);
        }
    }

    useEffect(() => {
        var filerbot = document.getElementById("filerobot-image-editor-root");
        if (filerbot) {
            filerbot.style.position = "absolute";
        }
    }, [show, toggle]);

    return (

        <><Container maxWidth="xl">
            <Helmet>
                <title>Free Online Image Editor | Mathcalc</title>
                <meta name="keywords" content="free online image editor gif edit animated photo photos pictures gifs jpeg jpg bmp convert converter create creator animate png tiff picture resize crop split frames text to add mask" />
                <meta name="description" content="Mathcal Free Online Image Editor tool create your own images resize crop avatars and images. Photo tool for your favorite pictures. Edit an image here fast and easy online." />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            {!show ?
                <>
                    <div className="container">
                        <SubNavBar
                            pageTitle="Online image editor"
                            links={[{
                                url: "/tools/",
                                urlName: "Tools"
                            }]}
                            txtTitle="Mathcal Free Online Image Editor tool create your own images resize crop avatars and images. Photo tool for your favorite pictures. Edit an image here fast and easy online."
                        />
                        <br />
                        <Grid container spacing={1}>
                            <Grid item sm={12} md={8} lg={8}>
                                <Card elevation={1} className="box" data-v-14591542>
                                    <h1 style={{ display: 'flex' }} className="subtitle has-text-weight-bold">
                                        <div className="sc-1gyxcpm-0 csDfHB sc-17y9jfw-4 iqUd" style={{ width: '32px', height: '32px' }}>
                                            <img src="https://visualpharm.com/assets/548/Edit%20Image-595b40b85ba036ed117dc0a5.svg" alt="edit im " width="32" height="32" />
                                        </div>
                                        <div>
                                            &nbsp;Simple image editor online
                                        </div>
                                    </h1>
                                    <div className="file-dropzone" style={{ backgroundColor: 'aliceblue' }} data-v-14591542>
                                        <input id="image" type="file" data-v-14591542 onChange={onCHangeFile}
                                            accept="image/gif, image/jpeg, image/png"
                                        />
                                        <p className="has-text-centered has-text-3 is-vcentered" data-v-14591542>
                                            <span data-v-14591542>
                                                <figure>
                                                    <img width="75" src="https://visualpharm.com/assets/544/Image%20File-595b40b75ba036ed117d7045.svg"
                                                        alt="file upload" data-v-14591542 />
                                                </figure>
                                            </span>
                                            <span className="is-3" data-v-14591542>Drag and drop your file here or click here to upload.</span>
                                        </p>
                                    </div>
                                    <br data-v-14591542 />
                                </Card>

                                <br />
                                <Card elevation={1} className={" box"}>
                                    <h1 className="title is-5">
                                        The Free Online Image Editor lets you edit images ONLINE!</h1>
                                    <ul className={classes.ulElem} >
                                        <li>
                                            Resize or Crop all images.
                                        </li>
                                        <li>
                                            Merge, Blend and Overlay Images with the editor.
                                        </li>
                                        <li>
                                            Add Text with your own fonts to an  image.
                                        </li>
                                        <li>
                                            Add Borders, round corners and shadow to your photo.
                                        </li>
                                        <li>
                                            Put an image in a Photo Frame or add a Mask.
                                        </li>
                                        <li>
                                            Convert, sharpen, reduce size of an image...
                                        </li>
                                        <li>
                                            Use the Cut Out Tool to make a custome shape image.
                                        </li>
                                    </ul>
                                    <br />
                                    <p>Absolutely for free !</p>
                                    <br />
                                </Card>

                            </Grid>
                            <Grid item sm={12} md={4} lg={4}>
                                <VerticalAds />
                            </Grid>
                        </Grid>
                        <br />
                    </div>
                </> : <>

                    <Dialog
                        fullScreen={true}
                        open={true}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <FilerobotImageEditor
                            show={show}
                            src={file}
                            onClose={() => { toggle(false) }}
                            onOpen={() => {
                                let namediv = document.getElementsByClassName('sc-fznMAR');
                                if (namediv.length > 0) {
                                    namediv[0].style.display = 'none';
                                }
                            }}
                            config={
                                {
                                    colorScheme: 'dark',
                                    language: 'en',
                                    translations: {
                                        en: {
                                            'header.image_editor_title': 'Editor',
                                        }
                                    },
                                    showInModal: false,
                                    isLowQualityPreview: true,
                                }
                            }
                        />
                    </Dialog>
                </>
            }
        </Container>

        </>

    )
};

