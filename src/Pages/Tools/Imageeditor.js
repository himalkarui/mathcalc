import React, { useEffect, useState } from 'react';
import FilerobotImageEditor from 'filerobot-image-editor';
import Helmet from 'react-helmet';
import SubNavBar from '../../Components/SubNavBar';
import { Container } from '@material-ui/core';
export default function Imageeditor(props) {
    const [show, toggle] = useState(false);
    const [file, setFile] = useState();

    const onCHangeFile = (e) => {
        if (e.target.files.length > 0) {
            debugger;
            setFile(e.target.files[0]);
            toggle(true);
        }
    }

    useEffect(() => {
        let namediv1 = document.getElementsByClassName('sc-fznMAR');
        let namediv2 = document.getElementsByClassName('fgCecj');
        let namediv3 = document.getElementsByClassName('oYzuD');
        if (namediv1.length > 0) {
            namediv1[0].style.display = 'none';
            namediv1[0].innerText = '';
        }
        if (namediv2.length > 0) {
            namediv2[0].style.display = 'none';
            namediv2[0].innerText = '';
        }
        if (namediv3.length > 0) {
            namediv3[0].style.display = 'none';
            namediv3[0].innerText = '';
        }
    }, [show, toggle]);

    return (
        <div>

            <Container maxWidth="xl">

                <Helmet>
                    <title>Free Image Editor Online | Mathcalc</title>
                    <meta name="keywords" content="Free image editor online, image editot, image, editor, Online image editor, free image editor, resize, crop,effects,cut,edit image" />
                    <meta name="description" content="Free Image editor online. You can edit image like cut, resize,crop shift, effects" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                </Helmet>
                {!show ?

                    <>
                        <section id="generate-from-image" className="section" data-v-14591542>
                            <div className="container" data-v-14591542>
                                <SubNavBar
                                    pageTitle="image editor"
                                    links={[{
                                        url: "/tools/",
                                        urlName: "Tools"
                                    }]}
                                />
                                <section className="hero" data-v-23847e07>
                                    <div style={{ padding: '2rem 0.5rem 0rem 0.5rem' }}>
                                        <div className="container">
                                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Free Online Image Editor
          </h1>
                                            <br />
                                            <div className="columns" data-v-14591542>
                                                <div className="column is-10" style={{
                                                    backgroundColor: 'rgb(255, 183, 0)',
                                                    border: 'none',
                                                    padding: '2rem',
                                                }} data-v-14591542>
                                                    <section className="hero" data-v-23847e07>
                                                        <div style={{ padding: '2rem 0.5rem' }}>
                                                            <div className="container">
                                                                <h1 className="subtitle is-spaced is-uppercase has-text-white has-text-weight-bold">
                                                                    Online Image Editor</h1>
                                                            </div>
                                                        </div>
                                                    </section>
                                                    <div data-v-14591542 style={{ border: '2px dashed rgba(0, 0, 0, 0.15)' }}>
                                                        <div className="file-dropzone" style={{ backgroundColor: '#e5a400', border: 'none' }} data-v-14591542>
                                                            <input id="image" type="file" data-v-14591542 onChange={onCHangeFile}
                                                                accept="image/gif, image/jpeg, image/png"
                                                            />
                                                            <p className="has-text-centered has-text-3 is-vcentered" data-v-14591542>
                                                                <span data-v-14591542>
                                                                    <i className="fa fa-upload" data-v-14591542></i>
                                                                </span>
                                                                <span className="is-3" style={{ color: 'white' }} data-v-14591542>Drag and drop your file here or click here to upload.</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="column is-2" data-v-14591542>
                                                    <div className="is-pulled-right" data-v-14591542>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section></> : <></>
                }
                <FilerobotImageEditor
                    show={show}
                    src={file}
                    onClose={() => { toggle(false) }}
                    onOpen={() => {
                        let namediv = document.getElementsByClassName('sc-fznMAR fgCecj');
                        if (namediv.length > 0) {
                            namediv[0].style.display = 'none';
                        }
                    }}
                    config={
                        { showInModal: true }
                    }
                />
            </Container>
        </div>
    )
};

