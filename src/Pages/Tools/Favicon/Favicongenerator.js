import React, { useEffect, useState } from "react";
import { Breadcrumbs, Typography, Container, Card, Grid } from '@material-ui/core';
import Helmet from 'react-helmet';
import Huebee from 'huebee';
import * as fileSave from "file-saver";
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import js , css and iamges
import '../../../Assets/favicon/css/stylesfavicon.css';
import Favicon from "../../../Assets/favicon/js/favicon.js/src/package";
import Center from "../../../Assets/favicon/js/favicon.js/src/center";
import preview40x40 from "../../../Assets/favicon/static/preview40x40.png";

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

export default function Favicongenerator(props) {

    const [fontcolor, setFontcolor] = useState('#fff');
    const [bgcolor, setBgcolor] = useState('#5AF');
    const [state, setState] = useState({
        text: "F",
        fontfamily: "verdana",
        shape: "Rounded",
        fontsize: 50
    })

    const [resultFiles, setResultFiles] = useState();

    useEffect(() => {
        const callOnce = () => {
            // use selector string to initialize on single element
            let colorInputfont = document.querySelector('.font-color');

            let huebfont = new Huebee(colorInputfont, {
                // options
                staticOpen: true,
                setBGColor: true,
                saturations: 2,
            });

            huebfont.on('change', function (color) {
                setFontcolor(color);
            });

            // or use element
            var colorInputbg = document.querySelector('.background-color');
            var huebbg = new Huebee(colorInputbg, {
                // options
                setBGColor: true,
                saturations: 2,
                staticOpen: true,
            });

            huebbg.on('change', function (color) {
                setBgcolor(color);
            });
        }
        if (!document.getElementsByClassName('huebee__container')[0]) {
            callOnce();
        }

        try {

            var WebFont = require('webfontloader');

            WebFont.load({
                google: {
                    families: [state.fontfamily]
                },
                active: onChangeGeneratefav(), // eslint-disable-next-line
            });
           

        } catch (e) { }

    }, [state.text, fontcolor, state.fontfamily, bgcolor, state.fontsize, state.shape]);

    const onChangeGeneratefav = () => {

        Center({
            canvas: document.getElementById("canvas"),
            width: 64,
            height: 64,
            shape: state.shape,
            fontColor: fontcolor,
            backgroundColor: bgcolor,
            text: state.text === "" ? "F" : state.text,
            fontFamily: state.fontfamily,
            fontSize: state.fontsize === "" ? 14 : state.fontsize,
        });
        onCHangeFile();
    }

    function onCHangeFile(ev) {
        try {

            let canvas = document.getElementById('canvas');

            const resFiles = Favicon.generate(canvas);
            setResultFiles(resFiles);
        }
        catch (e) { }
    }

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
            console.log(e)
        }
    }

    const onChangeinput = (e) => {
        e.preventDefault();
        if (e.target.id === 'fontfamily') {
            let link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css?family=' + e.target.value;// + '&text=' + state.text;
            link.type = 'text/css';
            link.rel = 'stylesheet';
            document.getElementsByTagName('head')[0].insertBefore(link,
                document.getElementsByTagName('script')[0]);
            document.head.appendChild(link);
            link.addEventListener('load', (e => {
                onChangeGeneratefav();
            }));
            setState({
                ...state,
                [e.target.id]: e.target.value,
            })
        } else {
            setState({
                ...state,
                [e.target.id]: e.target.value,
            })
        }
    }


    const fncopytext = (e) => {
        /* Get the text field */

        let copyInput = document.getElementById('copytext');
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    return (
        <React.Fragment>
            <input hidden id='copytext' defaultValue='<link rel="apple-touch-icon "sizes="180x180 "href="/apple-touch-icon.png "><link rel="icon "type="image/png "sizes="32x32 "href="/favicon-32x32.png "><link rel="icon "type="image/png "sizes="16x16 "href="/favicon-16x16.png "><link rel="manifest "href="/site.webmanifest ">'></input>
            <Helmet>
                <title>Favicon Generator - Text to Favicon - mathcalc.xyz</title>
                <meta charset="utf-8" />
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta data-key="description" name="description" content="The only favicon generator you need for your next project. Quickly generate your favicon from text, image, or choose from hundreds of emojis." />
            </Helmet>
            <section className="hero box appContainer" style={{ backgroundColor: '#2160c4', borderRadius: '0px' }}  >
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-7">
                                <h1 className="subtitle is-spaced is-uppercase has-text-grey-light has-text-weight-bold">
                                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" style={{ color: 'white' }} />} aria-label="breadcrumb">
                                        <Link to="/tools/" style={{ color: 'white' }} className="subtitle has-text-grey-light is-spaced is-uppercase has-text-weight-bold">
                                            Tools</Link>
                                        <Typography style={{ color: 'white' }} className="subtitle has-text-grey-light is-spaced is-uppercase has-text-weight-bold"> Generate favicon from Text</Typography>
                                    </Breadcrumbs>
                                </h1>
                                <p style={{ color: 'white', padding: '1rem' }} className="title is-3 has-text-letter-spacing-wide">Quickly generate your favicon from text by selecting the text, fonts, and colors. Download your favicon in the most up to date formats.
          </p>
                            </div>
                            <div className="column is-4">
                                <div className="is-pulled-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Container maxWidth="xl">
                <div data-server-rendered="true" className="layout"  >
                    <Card elevation={1} aria-label="main navigation" className="navbar navbar-secondary is-spaced"  >
                        <div className="container"  >
                            <div className="navbar-brand"  >
                                <div className="navbar-item"  >
                                    <strong  >Preview</strong>
                                    <img id="preview-48x48" alt="Favicon of Preview 48x48" src={(resultFiles) ? resultFiles.png512 : preview40x40} width="40" sizes="(max-width: 40px) 100vw, 40px" className="is-hidden-mobile g-image" style={{ width: '48px', marginLeft: '0.75rem' }} />
                                    <img id="preview-32x32" alt="Favicon of Preview 32x32" src={(resultFiles) ? resultFiles.png512 : preview40x40} width="40" sizes="(max-width: 40px) 100vw, 40px" className="is-hidden-mobile g-image" style={{ width: '32px', marginLeft: '0.75rem' }} />
                                    <img id="preview-16x16" alt="Favicon of Preview 16x16" src={(resultFiles) ? resultFiles.png512 : preview40x40} width="40" sizes="(max-width: 40px) 100vw, 40px" className="is-hidden-mobile g-image" style={{ width: '16px', marginLeft: '0.75rem' }} />
                                </div>
                            </div>
                            <div className="navbar-end"  >
                                <div className="navbar-item"  >
                                    <div className="field is-grouped"  >
                                        <p className="control is-hidden-mobile"  >
                                        </p>
                                        <p className="control"  >
                                            <button target="_blank" className="button is-info" onClick={generateFavicon}  >
                                                <span className="icon"  >
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-download fa-w-16"  >
                                                        <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"  ></path>
                                                    </svg>
                                                </span>
                                                <strong  >Download</strong>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <canvas id="canvas" className="canvas" width="64px" height="64px" hidden></canvas>
                    <br />
                    <Card elevation={1} className="container box"   >
                        <form id="form"   >
                            <h3 className="title is-3"   >Generate From Text</h3>
                            <div className="columns is-multilie"    >
                                <div className="column is-one-third"    >
                                    <div className="field"    >
                                        <div className="control"    >
                                            <label className="label"    > Text</label >
                                            <input id="text" type="text"
                                                onChange={onChangeinput}
                                                placeholder="Text" value={state.text} className="input" />
                                        </div >
                                    </div >
                                    <div className="field"    >
                                        <div className="control"    >
                                            <label className="label"    > Background</label >
                                            <div className="select" style={{ width: '100%' }}    >
                                                <select id="shape" style={{ width: '100%' }}
                                                    onChange={onChangeinput} value={state.shape} >
                                                    <option value="square"    > Square</option >
                                                    <option value="circle"    > Circle</option >
                                                    <option value="rounded" > Rounded</option >
                                                </select >
                                            </div >
                                        </div >
                                    </div >
                                    <div className="field"> <div className="control"> <label className="label"    >
                                        Font Family(view all on
                < a href="https://fonts.google.com/" rel="noreferrer" target="_blank" > Google Fonts</a >)
                  </label >
                                        <div className="select" style={{ width: '100%' }}    >
                                            <select id="fontfamily" style={{ width: '100%' }}
                                                onChange={onChangeinput}
                                                value={state.fontfamily}
                                            >
                                                <option    >
                                                    ABeeZee
                      </option > <option    >
                                                    Abel
                      </option > <option    >
                                                    Abhaya Libre
                      </option > <option    >
                                                    Abril Fatface
                      </option > <option    >
                                                    Aclonica
                      </option > <option    >
                                                    Acme
                      </option > <option    >
                                                    Actor
                      </option > <option    >
                                                    Adamina
                      </option > <option    >
                                                    Advent Pro
                      </option > <option    >
                                                    Aguafina Script
                      </option > <option    >
                                                    Akaya Kanadaka
                      </option > <option    >
                                                    Akaya Telivigala
                      </option > <option    >
                                                    Akronim
                      </option > <option    >
                                                    Aladin
                      </option > <option    >
                                                    Alata
                      </option > <option    >
                                                    Alatsi
                      </option > <option    >
                                                    Aldrich
                      </option > <option    >
                                                    Alef
                      </option > <option    >
                                                    Alegreya
                      </option > <option    >
                                                    Alegreya SC
                      </option > <option    >
                                                    Alegreya Sans
                      </option > <option    >
                                                    Alegreya Sans SC
                      </option > <option    >
                                                    Aleo
                      </option > <option    >
                                                    Alex Brush
                      </option > <option    >
                                                    Alfa Slab One
                      </option > <option    >
                                                    Alice
                      </option > <option    >
                                                    Alike
                      </option > <option    >
                                                    Alike Angular
                      </option > <option    >
                                                    Allan
                      </option > <option    >
                                                    Allerta
                      </option > <option    >
                                                    Allerta Stencil
                      </option > <option    >
                                                    Allura
                      </option > <option    >
                                                    Almarai
                      </option > <option    >
                                                    Almendra
                      </option > <option    >
                                                    Almendra Display
                      </option > <option    >
                                                    Almendra SC
                      </option > <option    >
                                                    Amarante
                      </option > <option    >
                                                    Amaranth
                      </option > <option    >
                                                    ematic SC
                      </option > <option    >
                                                    Amethysta
                      </option > <option    >
                                                    Amiko
                      </option > <option    >
                                                    Amiri
                      </option > <option    >
                                                    Amita
                      </option > <option    >
                                                    Anaheim
                      </option > <option    >
                                                    Andada
                      </option > <option    >
                                                    Andika
                      </option > <option    >
                                                    Andika New Basic
                      </option > <option    >
                                                    Angkor
                      </option > <option    >
                                                    Annie Use Your Telescope
                      </option > <option    >
                                                    Anonymous Pro
                      </option > <option    >
                                                    Antic
                      </option > <option    >
                                                    Antic Didone
                      </option > <option    >
                                                    Antic Slab
                      </option > <option    >
                                                    Anton
                      </option > <option    >
                                                    Antonio
                      </option > <option    >
                                                    Arapey
                      </option > <option    >
                                                    Arbutus
                      </option > <option    >
                                                    Arbutus Slab
                      </option > <option    >
                                                    Architects Daughter
                      </option > <option    >
                                                    Archivo
                      </option > <option    >
                                                    Archivo Black
                      </option > <option    >
                                                    Archivo Narrow
                      </option > <option    >
                                                    Aref Ruqaa
                      </option > <option    >
                                                    Arima Madurai
                      </option > <option    >
                                                    Arimo
                      </option > <option    >
                                                    Arizonia
                      </option > <option    >
                                                    Armata
                      </option > <option    >
                                                    Arsenal
                      </option > <option    >
                                                    Artifika
                      </option > <option    >
                                                    Arvo
                      </option > <option    >
                                                    Arya
                      </option > <option    >
                                                    Asap
                      </option > <option    >
                                                    Asap Condensed
                      </option > <option    >
                                                    Asar
                      </option > <option    >
                                                    Asset
                      </option > <option    >
                                                    Assistant
                      </option > <option    >
                                                    Astloch
                      </option > <option    >
                                                    Asul
                      </option > <option    >
                                                    Athiti
                      </option > <option    >
                                                    Atma
                      </option > <option    >
                                                    Atomic Age
                      </option > <option    >
                                                    Aubrey
                      </option > <option    >
                                                    Audiowide
                      </option > <option    >
                                                    Autour One
                      </option > <option    >
                                                    Average
                      </option > <option    >
                                                    Average Sans
                      </option > <option    >
                                                    Averia Gruesa Libre
                      </option > <option    >
                                                    Averia Libre
                      </option > <option    >
                                                    Averia Sans Libre
                      </option > <option    >
                                                    Averia Serif Libre
                      </option > <option    >
                                                    B612
                      </option > <option    >
                                                    B612 Mono
                      </option > <option    >
                                                    Bad Script
                      </option > <option    >
                                                    Bahiana
                      </option > <option    >
                                                    Bahianita
                      </option > <option    >
                                                    Bai Jamjuree
                      </option > <option    >
                                                    Ballet
                      </option > <option    >
                                                    Baloo 2
                      </option > <option    >
                                                    Baloo Bhai 2
                      </option > <option    >
                                                    Baloo Bhaina 2
                      </option > <option    >
                                                    Baloo Chettan 2
                      </option > <option    >
                                                    Baloo Da 2
                      </option > <option    >
                                                    Baloo Paaji 2
                      </option > <option    >
                                                    Baloo Tamma 2
                      </option > <option    >
                                                    Baloo Tammudu 2
                      </option > <option    >
                                                    Baloo Thambi 2
                      </option > <option    >
                                                    Balsamiq Sans
                      </option > <option    >
                                                    Balthazar
                      </option > <option    >
                                                    Bangers
                      </option > <option    >
                                                    Barlow
                      </option > <option    >
                                                    Barlow Condensed
                      </option > <option    >
                                                    Barlow Semi Condensed
                      </option > <option    >
                                                    Barriecito
                      </option > <option    >
                                                    Barrio
                      </option > <option    >
                                                    Basic
                      </option > <option    >
                                                    Baskervville
                      </option > <option    >
                                                    Battambang
                      </option > <option    >
                                                    Baumans
                      </option > <option    >
                                                    Bayon
                      </option > <option    >
                                                    Be Vietnam
                      </option > <option    >
                                                    Bebas Neue
                      </option > <option    >
                                                    Belgrano
                      </option > <option    >
                                                    Bellefair
                      </option > <option    >
                                                    Belleza
                      </option > <option    >
                                                    Bellota
                      </option > <option    >
                                                    Bellota Text
                      </option > <option    >
                                                    BenchNine
                      </option > <option    >
                                                    Benne
                      </option > <option    >
                                                    Bentham
                      </option > <option    >
                                                    Berkshire Swash
                      </option > <option    >
                                                    Beth Ellen
                      </option > <option    >
                                                    Bevan
                      </option > <option    >
                                                    Big Shoulders Display
                      </option > <option    >
                                                    Big Shoulders Inline Display
                      </option > <option    >
                                                    Big Shoulders Inline Text
                      </option > <option    >
                                                    Big Shoulders Stencil Display
                      </option > <option    >
                                                    Big Shoulders Stencil Text
                      </option > <option    >
                                                    Big Shoulders Text
                      </option > <option    >
                                                    Bigelow Rules
                      </option > <option    >
                                                    Bigshot One
                      </option > <option    >
                                                    Bilbo
                      </option > <option    >
                                                    Bilbo Swash Caps
                      </option > <option    >
                                                    BioRhyme
                      </option > <option    >
                                                    BioRhyme Expanded
                      </option > <option    >
                                                    Biryani
                      </option > <option    >
                                                    Bitter
                      </option > <option    >
                                                    Black And White Picture
                      </option > <option    >
                                                    Black Han Sans
                      </option > <option    >
                                                    Black Ops One
                      </option > <option    >
                                                    Blinker
                      </option > <option    >
                                                    Bodoni Moda
                      </option > <option    >
                                                    Bokor
                      </option > <option    >
                                                    Bonbon
                      </option > <option    >
                                                    Boogaloo
                      </option > <option    >
                                                    Bowlby One
                      </option > <option    >
                                                    Bowlby One SC
                      </option > <option    >
                                                    Brawler
                      </option > <option    >
                                                    Bree Serif
                      </option > <option    >
                                                    Brygada 1918
                      </option > <option    >
                                                    Bubblegum Sans
                      </option > <option    >
                                                    Bubbler One
                      </option > <option    >
                                                    Buda
                      </option > <option    >
                                                    Buenard
                      </option > <option    >
                                                    Bungee
                      </option > <option    >
                                                    Bungee Hairline
                      </option > <option    >
                                                    Bungee Inline
                      </option > <option    >
                                                    Bungee Outline
                      </option > <option    >
                                                    Bungee Shade
                      </option > <option    >
                                                    Butcherman
                      </option > <option    >
                                                    Butterfly Kids
                      </option > <option    >
                                                    Cabin
                      </option > <option    >
                                                    Cabin Condensed
                      </option > <option    >
                                                    Cabin Sketch
                      </option > <option    >
                                                    Caesar Dressing
                      </option > <option    >
                                                    Cagliostro
                      </option > <option    >
                                                    Cairo
                      </option > <option    >
                                                    Caladea
                      </option > <option    >
                                                    Calistoga
                      </option > <option    >
                                                    Calligraffitti
                      </option > <option    >
                                                    Cambay
                      </option > <option    >
                                                    Cambo
                      </option > <option    >
                                                    Candal
                      </option > <option    >
                                                    Cantarell
                      </option > <option    >
                                                    Cantata One
                      </option > <option    >
                                                    Cantora One
                      </option > <option    >
                                                    Capriola
                      </option > <option    >
                                                    Cardo
                      </option > <option    >
                                                    Carme
                      </option > <option    >
                                                    Carrois Gothic
                      </option > <option    >
                                                    Carrois Gothic SC
                      </option > <option    >
                                                    Carter One
                      </option > <option    >
                                                    Castoro
                      </option > <option    >
                                                    Catamaran
                      </option > <option    >
                                                    Caudex
                      </option > <option    >
                                                    Caveat
                      </option > <option    >
                                                    Caveat Brush
                      </option > <option    >
                                                    Cedarville Cursive
                      </option > <option    >
                                                    Ceviche One
                      </option > <option    >
                                                    Chakra Petch
                      </option > <option    >
                                                    Changa
                      </option > <option    >
                                                    Changa One
                      </option > <option    >
                                                    Chango
                      </option > <option    >
                                                    Charm
                      </option > <option    >
                                                    Charmonman
                      </option > <option    >
                                                    Chathura
                      </option > <option    >
                                                    Chau Philomene One
                      </option > <option    >
                                                    Chela One
                      </option > <option    >
                                                    Chelsea Market
                      </option > <option    >
                                                    Chenla
                      </option > <option    >
                                                    Cherry Cream Soda
                      </option > <option    >
                                                    Cherry Swash
                      </option > <option    >
                                                    Chewy
                      </option > <option    >
                                                    Chicle
                      </option > <option    >
                                                    Chilanka
                      </option > <option    >
                                                    Chivo
                      </option > <option    >
                                                    Chonburi
                      </option > <option    >
                                                    Cinzel
                      </option > <option    >
                                                    Cinzel Decorative
                      </option > <option    >
                                                    Clicker Script
                      </option > <option    >
                                                    Coda
                      </option > <option    >
                                                    Coda Caption
                      </option > <option    >
                                                    Codystar
                      </option > <option    >
                                                    Coiny
                      </option > <option    >
                                                    Combo
                      </option > <option    >
                                                    Comfortaa
                      </option > <option    >
                                                    Comic Neue
                      </option > <option    >
                                                    Coming Soon
                      </option > <option    >
                                                    Commissioner
                      </option > <option    >
                                                    Concert One
                      </option > <option    >
                                                    Condiment
                      </option > <option    >
                                                    Content
                      </option > <option    >
                                                    Contrail One
                      </option > <option    >
                                                    Convergence
                      </option > <option    >
                                                    Cookie
                      </option > <option    >
                                                    Copse
                      </option > <option    >
                                                    Corben
                      </option > <option    >
                                                    Cormorant
                      </option > <option    >
                                                    Cormorant Garamond
                      </option > <option    >
                                                    Cormorant Infant
                      </option > <option    >
                                                    Cormorant SC
                      </option > <option    >
                                                    Cormorant Unicase
                      </option > <option    >
                                                    Cormorant Upright
                      </option > <option    >
                                                    Courgette
                      </option > <option    >
                                                    Courier Prime
                      </option > <option    >
                                                    Cousine
                      </option > <option    >
                                                    Coustard
                      </option > <option    >
                                                    Covered By Your Grace
                      </option > <option    >
                                                    Crafty Girls
                      </option > <option    >
                                                    Creepster
                      </option > <option    >
                                                    Crete Round
                      </option > <option    >
                                                    Crimson Pro
                      </option > <option    >
                                                    Crimson Text
                      </option > <option    >
                                                    Croissant One
                      </option > <option    >
                                                    Crushed
                      </option > <option    >
                                                    Cuprum
                      </option > <option    >
                                                    Cute Font
                      </option > <option    >
                                                    Cutive
                      </option > <option    >
                                                    Cutive Mono
                      </option > <option    >
                                                    DM Mono
                      </option > <option    >
                                                    DM Sans
                      </option > <option    >
                                                    DM Serif Display
                      </option > <option    >
                                                    DM Serif Text
                      </option > <option    >
                                                    Damion
                      </option > <option    >
                                                    Dancing Script
                      </option > <option    >
                                                    Dangrek
                      </option > <option    >
                                                    Darker Grotesque
                      </option > <option    >
                                                    David Libre
                      </option > <option    >
                                                    Dawning of a New Day
                      </option > <option    >
                                                    Days One
                      </option > <option    >
                                                    Dekko
                      </option > <option    >
                                                    Dela Gothic One
                      </option > <option    >
                                                    Delius
                      </option > <option    >
                                                    Delius Swash Caps
                      </option > <option    >
                                                    Delius Unicase
                      </option > <option    >
                                                    Della Respira
                      </option > <option    >
                                                    Denk One
                      </option > <option    >
                                                    Devonshire
                      </option > <option    >
                                                    Dhurjati
                      </option > <option    >
                                                    Didact Gothic
                      </option > <option    >
                                                    Diplomata
                      </option > <option    >
                                                    Diplomata SC
                      </option > <option    >
                                                    Do Hyeon
                      </option > <option    >
                                                    Dokdo
                      </option > <option    >
                                                    Domine
                      </option > <option    >
                                                    Donegal One
                      </option > <option    >
                                                    Doppio One
                      </option > <option    >
                                                    Dorsa
                      </option > <option    >
                                                    Dosis
                      </option > <option    >
                                                    DotGothic16
                      </option > <option    >
                                                    Dr Sugiyama
                      </option > <option    >
                                                    Duru Sans
                      </option > <option    >
                                                    Dynalight
                      </option > <option    >
                                                    EB Garamond
                      </option > <option    >
                                                    Eagle Lake
                      </option > <option    >
                                                    East Sea Dokdo
                      </option > <option    >
                                                    Eater
                      </option > <option    >
                                                    Economica
                      </option > <option    >
                                                    Eczar
                      </option > <option    >
                                                    El Messiri
                      </option > <option    >
                                                    Electrolize
                      </option > <option    >
                                                    Elsie
                      </option > <option    >
                                                    Elsie Swash Caps
                      </option > <option    >
                                                    Emblema One
                      </option > <option    >
                                                    Emilys Candy
                      </option > <option    >
                                                    Encode Sans
                      </option > <option    >
                                                    Encode Sans Condensed
                      </option > <option    >
                                                    Encode Sans Expanded
                      </option > <option    >
                                                    Encode Sans Semi Condensed
                      </option > <option    >
                                                    Encode Sans Semi Expanded
                      </option > <option    >
                                                    Engagement
                      </option > <option    >
                                                    Englebert
                      </option > <option    >
                                                    Enriqueta
                      </option > <option    >
                                                    Epilogue
                      </option > <option    >
                                                    Erica One
                      </option > <option    >
                                                    Esteban
                      </option > <option    >
                                                    Euphoria Script
                      </option > <option    >
                                                    Ewert
                      </option > <option    >
                                                    Exo
                      </option > <option    >
                                                    Exo 2
                      </option > <option    >
                                                    Expletus Sans
                      </option > <option    >
                                                    Fahkwang
                      </option > <option    >
                                                    Fanwood Text
                      </option > <option    >
                                                    Farro
                      </option > <option    >
                                                    Farsan
                      </option > <option    >
                                                    Fascinate
                      </option > <option    >
                                                    Fascinate Inline
                      </option > <option    >
                                                    Faster One
                      </option > <option    >
                                                    Fasthand
                      </option > <option    >
                                                    Fauna One
                      </option > <option    >
                                                    Faustina
                      </option > <option    >
                                                    Federant
                      </option > <option    >
                                                    Federo
                      </option > <option    >
                                                    Felipa
                      </option > <option    >
                                                    Fenix
                      </option > <option    >
                                                    Finger Paint
                      </option > <option    >
                                                    Fira Code
                      </option > <option    >
                                                    Fira Mono
                      </option > <option    >
                                                    Fira Sans
                      </option > <option    >
                                                    Fira Sans Condensed
                      </option > <option    >
                                                    Fira Sans Extra Condensed
                      </option > <option    >
                                                    Fjalla One
                      </option > <option    >
                                                    Fjord One
                      </option > <option    >
                                                    Flamenco
                      </option > <option    >
                                                    Flavors
                      </option > <option    >
                                                    Fondamento
                      </option > <option    >
                                                    Fontdiner Swanky
                      </option > <option    >
                                                    Forum
                      </option > <option    >
                                                    Francois One
                      </option > <option    >
                                                    Frank Ruhl Libre
                      </option > <option    >
                                                    Fraunces
                      </option > <option    >
                                                    Freckle Face
                      </option > <option    >
                                                    Fredericka the Great
                      </option > <option    >
                                                    Fredoka One
                      </option > <option    >
                                                    Freehand
                      </option > <option    >
                                                    Fresca
                      </option > <option    >
                                                    Frijole
                      </option > <option    >
                                                    Fruktur
                      </option > <option    >
                                                    Fugaz One
                      </option > <option    >
                                                    GFS Didot
                      </option > <option    >
                                                    GFS Neohellenic
                      </option > <option    >
                                                    Gabriela
                      </option > <option    >
                                                    Gaegu
                      </option > <option    >
                                                    Gafata
                      </option > <option    >
                                                    Galada
                      </option > <option    >
                                                    Galdeano
                      </option > <option    >
                                                    Galindo
                      </option > <option    >
                                                    Gamja Flower
                      </option > <option    >
                                                    Gayathri
                      </option > <option    >
                                                    Gelasio
                      </option > <option    >
                                                    Gentium Basic
                      </option > <option    >
                                                    Gentium Book Basic
                      </option > <option    >
                                                    Geo
                      </option > <option    >
                                                    Geostar
                      </option > <option    >
                                                    Geostar Fill
                      </option > <option    >
                                                    Germania One
                      </option > <option    >
                                                    Gidugu
                      </option > <option    >
                                                    Gilda Display
                      </option > <option    >
                                                    Girassol
                      </option > <option    >
                                                    Give You Glory
                      </option > <option    >
                                                    Glass Antiqua
                      </option > <option    >
                                                    Glegoo
                      </option > <option    >
                                                    Gloria Hallelujah
                      </option > <option    >
                                                    Goblin One
                      </option > <option    >
                                                    Gochi Hand
                      </option > <option    >
                                                    Goldman
                      </option > <option    >
                                                    Gorditas
                      </option > <option    >
                                                    Gothic A1
                      </option > <option    >
                                                    Gotu
                      </option > <option    >
                                                    Goudy Bookletter 1911
                      </option > <option    >
                                                    Graduate
                      </option > <option    >
                                                    Grand Hotel
                      </option > <option    >
                                                    Grandstander
                      </option > <option    >
                                                    Gravitas One
                      </option > <option    >
                                                    Great Vibes
                      </option > <option    >
                                                    Grenze
                      </option > <option    >
                                                    Grenze Gotisch
                      </option > <option    >
                                                    Griffy
                      </option > <option    >
                                                    Gruppo
                      </option > <option    >
                                                    Gudea
                      </option > <option    >
                                                    Gugi
                      </option > <option    >
                                                    Gupter
                      </option > <option    >
                                                    Gurajada
                      </option > <option    >
                                                    Habibi
                      </option > <option    >
                                                    Hachi Maru Pop
                      </option > <option    >
                                                    Halant
                      </option > <option    >
                                                    Hammersmith One
                      </option > <option    >
                                                    Hanalei
                      </option > <option    >
                                                    Hanalei Fill
                      </option > <option    >
                                                    Handlee
                      </option > <option    >
                                                    Hanuman
                      </option > <option    >
                                                    Happy Monkey
                      </option > <option    >
                                                    Harmattan
                      </option > <option    >
                                                    Headland One
                      </option > <option    >
                                                    Heebo
                      </option > <option    >
                                                    Henny Penny
                      </option > <option    >
                                                    Hepta Slab
                      </option > <option    >
                                                    Herr Von Muellerhoff
                      </option > <option    >
                                                    Hi Melody
                      </option > <option    >
                                                    Hind
                      </option > <option    >
                                                    Hind Guntur
                      </option > <option    >
                                                    Hind Madurai
                      </option > <option    >
                                                    Hind Siliguri
                      </option > <option    >
                                                    Hind Vadodara
                      </option > <option    >
                                                    Holtwood One SC
                      </option > <option    >
                                                    Homemade Apple
                      </option > <option    >
                                                    Homenaje
                      </option > <option    >
                                                    IBM Plex Mono
                      </option > <option    >
                                                    IBM Plex Sans
                      </option > <option    >
                                                    IBM Plex Sans Condensed
                      </option > <option    >
                                                    IBM Plex Serif
                      </option > <option    >
                                                    IM Fell DW Pica
                      </option > <option    >
                                                    IM Fell DW Pica SC
                      </option > <option    >
                                                    IM Fell Double Pica
                      </option > <option    >
                                                    IM Fell Double Pica SC
                      </option > <option    >
                                                    IM Fell English
                      </option > <option    >
                                                    IM Fell English SC
                      </option > <option    >
                                                    IM Fell French Canon
                      </option > <option    >
                                                    IM Fell French Canon SC
                      </option > <option    >
                                                    IM Fell Great Primer
                      </option > <option    >
                                                    IM Fell Great Primer SC
                      </option > <option    >
                                                    Ibarra Real Nova
                      </option > <option    >
                                                    Iceberg
                      </option > <option    >
                                                    Iceland
                      </option > <option    >
                                                    Imbue
                      </option > <option    >
                                                    Imprima
                      </option > <option    >
                                                    Inconsolata
                      </option > <option    >
                                                    Inder
                      </option > <option    >
                                                    Indie Flower
                      </option > <option    >
                                                    Inika
                      </option > <option    >
                                                    Inknut Antiqua
                      </option > <option    >
                                                    Inria Sans
                      </option > <option    >
                                                    Inria Serif
                      </option > <option    >
                                                    Inter
                      </option > <option    >
                                                    Irish Grover
                      </option > <option    >
                                                    Istok Web
                      </option > <option    >
                                                    Italiana
                      </option > <option    >
                                                    Italianno
                      </option > <option    >
                                                    Itim
                      </option > <option    >
                                                    Jacques Francois
                      </option > <option    >
                                                    Jacques Francois Shadow
                      </option > <option    >
                                                    Jaldi
                      </option > <option    >
                                                    JetBrains Mono
                      </option > <option    >
                                                    Jim Nightshade
                      </option > <option    >
                                                    Jockey One
                      </option > <option    >
                                                    Jolly Lodger
                      </option > <option    >
                                                    Jomhuria
                      </option > <option    >
                                                    Jomolhari
                      </option > <option    >
                                                    Josefin Sans
                      </option > <option    >
                                                    Josefin Slab
                      </option > <option    >
                                                    Jost
                      </option > <option    >
                                                    Joti One
                      </option > <option    >
                                                    Jua
                      </option > <option    >
                                                    Judson
                      </option > <option    >
                                                    Julee
                      </option > <option    >
                                                    Julius Sans One
                      </option > <option    >
                                                    Junge
                      </option > <option    >
                                                    Jura
                      </option > <option    >
                                                    Just Another Hand
                      </option > <option    >
                                                    Just Me Again Down Here
                      </option > <option    >
                                                    K2D
                      </option > <option    >
                                                    Kadwa
                      </option > <option    >
                                                    Kalam
                      </option > <option    >
                                                    Kameron
                      </option > <option    >
                                                    Kanit
                      </option > <option    >
                                                    Kantumruy
                      </option > <option    >
                                                    Karantina
                      </option > <option    >
                                                    Karla
                      </option > <option    >
                                                    Karma
                      </option > <option    >
                                                    Katibeh
                      </option > <option    >
                                                    Kaushan Script
                      </option > <option    >
                                                    Kavivanar
                      </option > <option    >
                                                    Kavoon
                      </option > <option    >
                                                    Kdam Thmor
                      </option > <option    >
                                                    Keania One
                      </option > <option    >
                                                    Kelly Slab
                      </option > <option    >
                                                    Kenia
                      </option > <option    >
                                                    Khand
                      </option > <option    >
                                                    Khmer
                      </option > <option    >
                                                    Khula
                      </option > <option    >
                                                    Kirang Haerang
                      </option > <option    >
                                                    Kite One
                      </option > <option    >
                                                    Kiwi Maru
                      </option > <option    >
                                                    Knewave
                      </option > <option    >
                                                    KoHo
                      </option > <option    >
                                                    Kodchasan
                      </option > <option    >
                                                    Kosugi
                      </option > <option    >
                                                    Kosugi Maru
                      </option > <option    >
                                                    Kotta One
                      </option > <option    >
                                                    Koulen
                      </option > <option    >
                                                    Kranky
                      </option > <option    >
                                                    Kreon
                      </option > <option    >
                                                    Kristi
                      </option > <option    >
                                                    Krona One
                      </option > <option    >
                                                    Krub
                      </option > <option    >
                                                    Kufam
                      </option > <option    >
                                                    Kulim Park
                      </option > <option    >
                                                    Kumar One
                      </option > <option    >
                                                    Kumar One Outline
                      </option > <option    >
                                                    Kumbh Sans
                      </option > <option    >
                                                    Kurale
                      </option > <option    >
                                                    La Belle Aurore
                      </option > <option    >
                                                    Lacquer
                      </option > <option    >
                                                    Laila
                      </option > <option    >
                                                    Lakki Reddy
                      </option > <option    >
                                                    Lalezar
                      </option > <option    >
                                                    Lancelot
                      </option > <option    >
                                                    Langar
                      </option > <option    >
                                                    Lateef
                      </option > <option    >
                                                    Lato
                      </option > <option    >
                                                    League Script
                      </option > <option    >
                                                    Leckerli One
                      </option > <option    >
                                                    Ledger
                      </option > <option    >
                                                    Lekton
                      </option > <option    >
                                                    Lemon
                      </option > <option    >
                                                    Lemonada
                      </option > <option    >
                                                    Lexend
                      </option > <option    >
                                                    Lexend Deca
                      </option > <option    >
                                                    Lexend Exa
                      </option > <option    >
                                                    Lexend Giga
                      </option > <option    >
                                                    Lexend Mega
                      </option > <option    >
                                                    Lexend Peta
                      </option > <option    >
                                                    Lexend Tera
                      </option > <option    >
                                                    Lexend Zetta
                      </option > <option    >
                                                    Libre Barcode 128
                      </option > <option    >
                                                    Libre Barcode 128 Text
                      </option > <option    >
                                                    Libre Barcode 39
                      </option > <option    >
                                                    Libre Barcode 39 Extended
                      </option > <option    >
                                                    Libre Barcode 39 Extended Text
                      </option > <option    >
                                                    Libre Barcode 39 Text
                      </option > <option    >
                                                    Libre Barcode EAN13 Text
                      </option > <option    >
                                                    Libre Baskerville
                      </option > <option    >
                                                    Libre Caslon Display
                      </option > <option    >
                                                    Libre Caslon Text
                      </option > <option    >
                                                    Libre Franklin
                      </option > <option    >
                                                    Life Savers
                      </option > <option    >
                                                    Lilita One
                      </option > <option    >
                                                    Lily Script One
                      </option > <option    >
                                                    Limelight
                      </option > <option    >
                                                    Linden Hill
                      </option > <option    >
                                                    Literata
                      </option > <option    >
                                                    Liu Jian Mao Cao
                      </option > <option    >
                                                    Livvic
                      </option > <option    >
                                                    Lobster
                      </option > <option    >
                                                    Lobster Two
                      </option > <option    >
                                                    Londrina Outline
                      </option > <option    >
                                                    Londrina Shadow
                      </option > <option    >
                                                    Londrina Sketch
                      </option > <option    >
                                                    Londrina Solid
                      </option > <option    >
                                                    Long Cang
                      </option > <option    >
                                                    Lora
                      </option > <option    >
                                                    Love Ya Like A Sister
                      </option > <option    >
                                                    Loved by the King
                      </option > <option    >
                                                    Lovers Quarrel
                      </option > <option    >
                                                    Luckiest Guy
                      </option > <option    >
                                                    Lusitana
                      </option > <option    >
                                                    Lustria
                      </option > <option    >
                                                    M PLUS 1p
                      </option > <option    >
                                                    M PLUS Rounded 1c
                      </option > <option    >
                                                    Ma Shan Zheng
                      </option > <option    >
                                                    Macondo
                      </option > <option    >
                                                    Macondo Swash Caps
                      </option > <option    >
                                                    Mada
                      </option > <option    >
                                                    Magra
                      </option > <option    >
                                                    Maiden Orange
                      </option > <option    >
                                                    Maitree
                      </option > <option    >
                                                    Major Mono Display
                      </option > <option    >
                                                    Mako
                      </option > <option    >
                                                    Mali
                      </option > <option    >
                                                    Mallanna
                      </option > <option    >
                                                    Mandali
                      </option > <option    >
                                                    Manjari
                      </option > <option    >
                                                    Manrope
                      </option > <option    >
                                                    Mansalva
                      </option > <option    >
                                                    Manuale
                      </option > <option    >
                                                    Marcellus
                      </option > <option    >
                                                    Marcellus SC
                      </option > <option    >
                                                    Marck Script
                      </option > <option    >
                                                    Margarine
                      </option > <option    >
                                                    Markazi Text
                      </option > <option    >
                                                    Marko One
                      </option > <option    >
                                                    Marmelad
                      </option > <option    >
                                                    Martel
                      </option > <option    >
                                                    Martel Sans
                      </option > <option    >
                                                    Marvel
                      </option > <option    >
                                                    Mate
                      </option > <option    >
                                                    Mate SC
                      </option > <option    >
                                                    Maven Pro
                      </option > <option    >
                                                    McLaren
                      </option > <option    >
                                                    Meddon
                      </option > <option    >
                                                    MedievalSharp
                      </option > <option    >
                                                    Medula One
                      </option > <option    >
                                                    Meera Inimai
                      </option > <option    >
                                                    Megrim
                      </option > <option    >
                                                    Meie Script
                      </option > <option    >
                                                    Merienda
                      </option > <option    >
                                                    Merienda One
                      </option > <option    >
                                                    Merriweather
                      </option > <option    >
                                                    Merriweather Sans
                      </option > <option    >
                                                    Metal
                      </option > <option    >
                                                    Metal Mania
                      </option > <option    >
                                                    Metamorphous
                      </option > <option    >
                                                    Metrophobic
                      </option > <option    >
                                                    Michroma
                      </option > <option    >
                                                    Milonga
                      </option > <option    >
                                                    Miltonian
                      </option > <option    >
                                                    Miltonian Tattoo
                      </option > <option    >
                                                    Mina
                      </option > <option    >
                                                    Miniver
                      </option > <option    >
                                                    Miriam Libre
                      </option > <option    >
                                                    Mirza
                      </option > <option    >
                                                    Miss Fajardose
                      </option > <option    >
                                                    Mitr
                      </option > <option    >
                                                    Modak
                      </option > <option    >
                                                    Modern Antiqua
                      </option > <option    >
                                                    Mogra
                      </option > <option    >
                                                    Molengo
                      </option > <option    >
                                                    Molle
                      </option > <option    >
                                                    Monda
                      </option > <option    >
                                                    Monofett
                      </option > <option    >
                                                    Monoton
                      </option > <option    >
                                                    Monsieur La Doulaise
                      </option > <option    >
                                                    Montaga
                      </option > <option    >
                                                    Montez
                      </option > <option    >
                                                    Montserrat
                      </option > <option    >
                                                    Montserrat Alternates
                      </option > <option    >
                                                    Montserrat Subrayada
                      </option > <option    >
                                                    Moul
                      </option > <option    >
                                                    Moulpali
                      </option > <option    >
                                                    Mountains of Christmas
                      </option > <option    >
                                                    Mouse Memoirs
                      </option > <option    >
                                                    Mr Bedfort
                      </option > <option    >
                                                    Mr Dafoe
                      </option > <option    >
                                                    Mr De Haviland
                      </option > <option    >
                                                    Mrs Saint Delafield
                      </option > <option    >
                                                    Mrs Sheppards
                      </option > <option    >
                                                    Mukta
                      </option > <option    >
                                                    Mukta Mahee
                      </option > <option    >
                                                    Mukta Malar
                      </option > <option    >
                                                    Mukta Vaani
                      </option > <option    >
                                                    Mulish
                      </option > <option    >
                                                    MuseoModerno
                      </option > <option    >
                                                    Mystery Quest
                      </option > <option    >
                                                    NTR
                      </option > <option    >
                                                    Nanum Brush Script
                      </option > <option    >
                                                    Nanum Gothic
                      </option > <option    >
                                                    Nanum Gothic Coding
                      </option > <option    >
                                                    Nanum Myeongjo
                      </option > <option    >
                                                    Nanum Pen Script
                      </option > <option    >
                                                    Nerko One
                      </option > <option    >
                                                    Neucha
                      </option > <option    >
                                                    Neuton
                      </option > <option    >
                                                    New Rocker
                      </option > <option    >
                                                    New Tegomin
                      </option > <option    >
                                                    News Cycle
                      </option > <option    >
                                                    Newsreader
                      </option > <option    >
                                                    Niconne
                      </option > <option    >
                                                    Niramit
                      </option > <option    >
                                                    Nixie One
                      </option > <option    >
                                                    Nobile
                      </option > <option    >
                                                    Nokora
                      </option > <option    >
                                                    Norican
                      </option > <option    >
                                                    Nosifer
                      </option > <option    >
                                                    Notable
                      </option > <option    >
                                                    Nothing You Could Do
                      </option > <option    >
                                                    Noticia Text
                      </option > <option    >
                                                    Noto Sans
                      </option > <option    >
                                                    Noto Sans HK
                      </option > <option    >
                                                    Noto Sans JP
                      </option > <option    >
                                                    Noto Sans KR
                      </option > <option    >
                                                    Noto Sans SC
                      </option > <option    >
                                                    Noto Sans TC
                      </option > <option    >
                                                    Noto Serif
                      </option > <option    >
                                                    Noto Serif JP
                      </option > <option    >
                                                    Noto Serif KR
                      </option > <option    >
                                                    Noto Serif SC
                      </option > <option    >
                                                    Noto Serif TC
                      </option > <option    >
                                                    Nova Cut
                      </option > <option    >
                                                    Nova Flat
                      </option > <option    >
                                                    Nova Mono
                      </option > <option    >
                                                    Nova Oval
                      </option > <option    >
                                                    Nova Round
                      </option > <option    >
                                                    Nova Script
                      </option > <option    >
                                                    Nova Slim
                      </option > <option    >
                                                    Nova Square
                      </option > <option    >
                                                    Numans
                      </option > <option    >
                                                    Nunito
                      </option > <option    >
                                                    Nunito Sans
                      </option > <option    >
                                                    Odibee Sans
                      </option > <option    >
                                                    Odor Mean Chey
                      </option > <option    >
                                                    Offside
                      </option > <option    >
                                                    Oi
                      </option > <option    >
                                                    Old Standard TT
                      </option > <option    >
                                                    Oldenburg
                      </option > <option    >
                                                    Oleo Script
                      </option > <option    >
                                                    Oleo Script Swash Caps
                      </option > <option    >
                                                    Open Sans
                      </option > <option    >
                                                    Open Sans Condensed
                      </option > <option    >
                                                    Oranienbaum
                      </option > <option    >
                                                    Orbitron
                      </option > <option    >
                                                    Oregano
                      </option > <option    >
                                                    Orelega One
                      </option > <option    >
                                                    Orienta
                      </option > <option    >
                                                    Original Surfer
                      </option > <option    >
                                                    Oswald
                      </option > <option    >
                                                    Over the Rainbow
                      </option > <option    >
                                                    Overlock
                      </option > <option    >
                                                    Overlock SC
                      </option > <option    >
                                                    Overpass
                      </option > <option    >
                                                    Overpass Mono
                      </option > <option    >
                                                    Ovo
                      </option > <option    >
                                                    Oxanium
                      </option > <option    >
                                                    Oxygen
                      </option > <option    >
                                                    Oxygen Mono
                      </option > <option    >
                                                    PT Mono
                      </option > <option    >
                                                    PT Sans
                      </option > <option    >
                                                    PT Sans Caption
                      </option > <option    >
                                                    PT Sans Narrow
                      </option > <option    >
                                                    PT Serif
                      </option > <option    >
                                                    PT Serif Caption
                      </option > <option    >
                                                    Pacifico
                      </option > <option    >
                                                    Padauk
                      </option > <option    >
                                                    Palanquin
                      </option > <option    >
                                                    Palanquin Dark
                      </option > <option    >
                                                    Pangolin
                      </option > <option    >
                                                    Paprika
                      </option > <option    >
                                                    Parisienne
                      </option > <option    >
                                                    Passero One
                      </option > <option    >
                                                    Passion One
                      </option > <option    >
                                                    Pathway Gothic One
                      </option > <option    >
                                                    Patrick Hand
                      </option > <option    >
                                                    Patrick Hand SC
                      </option > <option    >
                                                    Pattaya
                      </option > <option    >
                                                    Patua One
                      </option > <option    >
                                                    Pavanam
                      </option > <option    >
                                                    Paytone One
                      </option > <option    >
                                                    Peddana
                      </option > <option    >
                                                    Peralta
                      </option > <option    >
                                                    Permanent Marker
                      </option > <option    >
                                                    Petit Formal Script
                      </option > <option    >
                                                    Petrona
                      </option > <option    >
                                                    Philosopher
                      </option > <option    >
                                                    Piazzolla
                      </option > <option    >
                                                    Piedra
                      </option > <option    >
                                                    Pinyon Script
                      </option > <option    >
                                                    Pirata One
                      </option > <option    >
                                                    Plaster
                      </option > <option    >
                                                    Play
                      </option > <option    >
                                                    Playball
                      </option > <option    >
                                                    Playfair Display
                      </option > <option    >
                                                    Playfair Display SC
                      </option > <option    >
                                                    Podkova
                      </option > <option    >
                                                    Poiret One
                      </option > <option    >
                                                    Poller One
                      </option > <option    >
                                                    Poly
                      </option > <option    >
                                                    Pompiere
                      </option > <option    >
                                                    Pontano Sans
                      </option > <option    >
                                                    Poor Story
                      </option > <option    >
                                                    Poppins
                      </option > <option    >
                                                    Port Lligat Sans
                      </option > <option    >
                                                    Port Lligat Slab
                      </option > <option    >
                                                    Potta One
                      </option > <option    >
                                                    Pragati Narrow
                      </option > <option    >
                                                    Prata
                      </option > <option    >
                                                    Preahvihear
                      </option > <option    >
                                                    Press Start 2P
                      </option > <option    >
                                                    Pridi
                      </option > <option    >
                                                    Princess Sofia
                      </option > <option    >
                                                    Prociono
                      </option > <option    >
                                                    Prompt
                      </option > <option    >
                                                    Prosto One
                      </option > <option    >
                                                    Proza Libre
                      </option > <option    >
                                                    Public Sans
                      </option > <option    >
                                                    Puritan
                      </option > <option    >
                                                    Purple Purse
                      </option > <option    >
                                                    Quando
                      </option > <option    >
                                                    Quantico
                      </option > <option    >
                                                    Quattrocento
                      </option > <option    >
                                                    Quattrocento Sans
                      </option > <option    >
                                                    Questrial
                      </option > <option    >
                                                    Quicksand
                      </option > <option    >
                                                    Quintessential
                      </option > <option    >
                                                    Qwigley
                      </option > <option    >
                                                    Racing Sans One
                      </option > <option    >
                                                    Radley
                      </option > <option    >
                                                    Rajdhani
                      </option > <option    >
                                                    Rakkas
                      </option > <option    >
                                                    Raleway
                      </option > <option    >
                                                    Raleway Dots
                      </option > <option    >
                                                    Ramabhadra
                      </option > <option    >
                                                    Ramaraja
                      </option > <option    >
                                                    Rambla
                      </option > <option    >
                                                    Rammetto One
                      </option > <option    >
                                                    Ranchers
                      </option > <option    >
                                                    Rancho
                      </option > <option    >
                                                    Ranga
                      </option > <option    >
                                                    Rasa
                      </option > <option    >
                                                    Rationale
                      </option > <option    >
                                                    Ravi Prakash
                      </option > <option    >
                                                    Recursive
                      </option > <option    >
                                                    Red Hat Display
                      </option > <option    >
                                                    Red Hat Text
                      </option > <option    >
                                                    Red Rose
                      </option > <option    >
                                                    Redressed
                      </option > <option    >
                                                    Reem Kufi
                      </option > <option    >
                                                    Reenie Beanie
                      </option > <option    >
                                                    Reggae One
                      </option > <option    >
                                                    Revalia
                      </option > <option    >
                                                    Rhodium Libre
                      </option > <option    >
                                                    Ribeye
                      </option > <option    >
                                                    Ribeye Marrow
                      </option > <option    >
                                                    Righteous
                      </option > <option    >
                                                    Risque
                      </option > <option    >
                                                    Roboto
                      </option > <option    >
                                                    Roboto Condensed
                      </option > <option    >
                                                    Roboto Mono
                      </option > <option    >
                                                    Roboto Slab
                      </option > <option    >
                                                    Rochester
                      </option > <option    >
                                                    Rock Salt
                      </option > <option    >
                                                    RocknRoll One
                      </option > <option    >
                                                    Rokkitt
                      </option > <option    >
                                                    Romanesco
                      </option > <option    >
                                                    Ropa Sans
                      </option > <option    >
                                                    Rosario
                      </option > <option    >
                                                    Rosarivo
                      </option > <option    >
                                                    Rouge Script
                      </option > <option    >
                                                    Rowdies
                      </option > <option    >
                                                    Rozha One
                      </option > <option    >
                                                    Rubik
                      </option > <option    >
                                                    Rubik Mono One
                      </option > <option    >
                                                    Ruda
                      </option > <option    >
                                                    Rufina
                      </option > <option    >
                                                    Ruge Boogie
                      </option > <option    >
                                                    Ruluko
                      </option > <option    >
                                                    Rum Raisin
                      </option > <option    >
                                                    Ruslan Display
                      </option > <option    >
                                                    Russo One
                      </option > <option    >
                                                    Ruthie
                      </option > <option    >
                                                    Rye
                      </option > <option    >
                                                    Sacramento
                      </option > <option    >
                                                    Sahitya
                      </option > <option    >
                                                    Sail
                      </option > <option    >
                                                    Saira
                      </option > <option    >
                                                    Saira Condensed
                      </option > <option    >
                                                    Saira Extra Condensed
                      </option > <option    >
                                                    Saira Semi Condensed
                      </option > <option    >
                                                    Saira Stencil One
                      </option > <option    >
                                                    Salsa
                      </option > <option    >
                                                    Sanchez
                      </option > <option    >
                                                    Sancreek
                      </option > <option    >
                                                    Sansita
                      </option > <option    >
                                                    Sansita Swashed
                      </option > <option    >
                                                    Sarabun
                      </option > <option    >
                                                    Sarala
                      </option > <option    >
                                                    Sarina
                      </option > <option    >
                                                    Sarpanch
                      </option > <option    >
                                                    Satisfy
                      </option > <option    >
                                                    Sawarabi Gothic
                      </option > <option    >
                                                    Sawarabi Mincho
                      </option > <option    >
                                                    Scada
                      </option > <option    >
                                                    Scheherazade
                      </option > <option    >
                                                    Schoolbell
                      </option > <option    >
                                                    Scope One
                      </option > <option    >
                                                    Seaweed Script
                      </option > <option    >
                                                    Secular One
                      </option > <option    >
                                                    Sedgwick Ave
                      </option > <option    >
                                                    Sedgwick Ave Display
                      </option > <option    >
                                                    Sen
                      </option > <option    >
                                                    Sevillana
                      </option > <option    >
                                                    Seymour One
                      </option > <option    >
                                                    Shadows Into Light
                      </option > <option    >
                                                    Shadows Into Light Two
                      </option > <option    >
                                                    Shanti
                      </option > <option    >
                                                    Share
                      </option > <option    >
                                                    Share Tech
                      </option > <option    >
                                                    Share Tech Mono
                      </option > <option    >
                                                    Shippori Mincho
                      </option > <option    >
                                                    Shippori Mincho B1
                      </option > <option    >
                                                    Shojumaru
                      </option > <option    >
                                                    Short Stack
                      </option > <option    >
                                                    Shrikhand
                      </option > <option    >
                                                    Siemreap
                      </option > <option    >
                                                    Sigmar One
                      </option > <option    >
                                                    Signika
                      </option > <option    >
                                                    Signika Negative
                      </option > <option    >
                                                    Simonetta
                      </option > <option    >
                                                    Single Day
                      </option > <option    >
                                                    Sintony
                      </option > <option    >
                                                    Sirin Stencil
                      </option > <option    >
                                                    Six Caps
                      </option > <option    >
                                                    Skranji
                      </option > <option    >
                                                    Slabo 13px
                      </option > <option    >
                                                    Slabo 27px
                      </option > <option    >
                                                    Slackey
                      </option > <option    >
                                                    Smokum
                      </option > <option    >
                                                    Smythe
                      </option > <option    >
                                                    Sniglet
                      </option > <option    >
                                                    Snippet
                      </option > <option    >
                                                    Snowburst One
                      </option > <option    >
                                                    Sofadi One
                      </option > <option    >
                                                    Sofia
                      </option > <option    >
                                                    Solway
                      </option > <option    >
                                                    Song Myung
                      </option > <option    >
                                                    Sonsie One
                      </option > <option    >
                                                    Sora
                      </option > <option    >
                                                    Sorts Mill Goudy
                      </option > <option    >
                                                    Source Code Pro
                      </option > <option    >
                                                    Source Sans Pro
                      </option > <option    >
                                                    Source Serif Pro
                      </option > <option    >
                                                    Space Grotesk
                      </option > <option    >
                                                    Space Mono
                      </option > <option    >
                                                    Spartan
                      </option > <option    >
                                                    Special Elite
                      </option > <option    >
                                                    Spectral
                      </option > <option    >
                                                    Spectral SC
                      </option > <option    >
                                                    Spicy Rice
                      </option > <option    >
                                                    Spinnaker
                      </option > <option    >
                                                    Spirax
                      </option > <option    >
                                                    Squada One
                      </option > <option    >
                                                    Sree Krushnadevaraya
                      </option > <option    >
                                                    Sriracha
                      </option > <option    >
                                                    Srisakdi
                      </option > <option    >
                                                    Staatliches
                      </option > <option    >
                                                    Stalemate
                      </option > <option    >
                                                    Stalinist One
                      </option > <option    >
                                                    Stardos Stencil
                      </option > <option    >
                                                    Stick
                      </option > <option    >
                                                    Stint Ultra Condensed
                      </option > <option    >
                                                    Stint Ultra Expanded
                      </option > <option    >
                                                    Stoke
                      </option > <option    >
                                                    Strait
                      </option > <option    >
                                                    Stylish
                      </option > <option    >
                                                    Sue Ellen Francisco
                      </option > <option    >
                                                    Suez One
                      </option > <option    >
                                                    Sulphur Point
                      </option > <option    >
                                                    Sumana
                      </option > <option    >
                                                    Sunflower
                      </option > <option    >
                                                    Sunshiney
                      </option > <option    >
                                                    Supermercado One
                      </option > <option    >
                                                    Sura
                      </option > <option    >
                                                    Suranna
                      </option > <option    >
                                                    Suravaram
                      </option > <option    >
                                                    Suwannaphum
                      </option > <option    >
                                                    Swanky and Moo Moo
                      </option > <option    >
                                                    Syncopate
                      </option > <option    >
                                                    Syne
                      </option > <option    >
                                                    Syne Mono
                      </option > <option    >
                                                    Syne Tactile
                      </option > <option    >
                                                    Tajawal
                      </option > <option    >
                                                    Tangerine
                      </option > <option    >
                                                    Taprom
                      </option > <option    >
                                                    Tauri
                      </option > <option    >
                                                    Taviraj
                      </option > <option    >
                                                    Teko
                      </option > <option    >
                                                    Telex
                      </option > <option    >
                                                    Tenali Ramakrishna
                      </option > <option    >
                                                    Tenor Sans
                      </option > <option    >
                                                    Text Me One
                      </option > <option    >
                                                    Texturina
                      </option > <option    >
                                                    Thasadith
                      </option > <option    >
                                                    The Girl Next Door
                      </option > <option    >
                                                    Tienne
                      </option > <option    >
                                                    Tillana
                      </option > <option    >
                                                    Timmana
                      </option > <option    >
                                                    Tinos
                      </option > <option    >
                                                    Titan One
                      </option > <option    >
                                                    Titillium Web
                      </option > <option    >
                                                    Tomorrow
                      </option > <option    >
                                                    Trade Winds
                      </option > <option    >
                                                    Train One
                      </option > <option    >
                                                    Trirong
                      </option > <option    >
                                                    Trispace
                      </option > <option    >
                                                    Trocchi
                      </option > <option    >
                                                    Trochut
                      </option > <option    >
                                                    Truculenta
                      </option > <option    >
                                                    Trykker
                      </option > <option    >
                                                    Tulpen One
                      </option > <option    >
                                                    Turret Road
                      </option > <option    >
                                                    Ubuntu
                      </option > <option    >
                                                    Ubuntu Condensed
                      </option > <option    >
                                                    Ubuntu Mono
                      </option > <option    >
                                                    Ultra
                      </option > <option    >
                                                    Uncial Antiqua
                      </option > <option    >
                                                    Underdog
                      </option > <option    >
                                                    Unica One
                      </option > <option    >
                                                    UnifrakturCook
                      </option > <option    >
                                                    UnifrakturMaguntia
                      </option > <option    >
                                                    Unkempt
                      </option > <option    >
                                                    Unlock
                      </option > <option    >
                                                    Unna
                      </option > <option    >
                                                    VT323
                      </option > <option    >
                                                    Vampiro One
                      </option > <option    >
                                                    Varela
                      </option > <option    >
                                                    Varela Round
                      </option > <option    >
                                                    Varta
                      </option > <option    >
                                                    Vast Shadow
                      </option > <option    >
                                                    Vesper Libre
                      </option > <option    >
                                                    Viaoda Libre
                      </option > <option    >
                                                    Vibes
                      </option > <option    >
                                                    Vibur
                      </option > <option    >
                                                    Vidaloka
                      </option > <option    >
                                                    Viga
                      </option > <option    >
                                                    Voces
                      </option > <option    >
                                                    Volkhov
                      </option > <option    >
                                                    Vollkorn
                      </option > <option    >
                                                    Vollkorn SC
                      </option > <option    >
                                                    Voltaire
                      </option > <option    >
                                                    Waiting for the Sunrise
                      </option > <option    >
                                                    Wallpoet
                      </option > <option    >
                                                    Walter Turncoat
                      </option > <option    >
                                                    Warnes
                      </option > <option    >
                                                    Wellfleet
                      </option > <option    >
                                                    Wendy One
                      </option > <option    >
                                                    Wire One
                      </option > <option    >
                                                    Work Sans
                      </option > <option    >
                                                    Xanh Mono
                      </option > <option    >
                                                    Yanone Kaffeesatz
                      </option > <option    >
                                                    Yantramanav
                      </option > <option    >
                                                    Yatra One
                      </option > <option    >
                                                    Yellowtail
                      </option > <option    >
                                                    Yeon Sung
                      </option > <option    >
                                                    Yeseva One
                      </option > <option    >
                                                    Yesteryear
                      </option > <option    >
                                                    Yrsa
                      </option > <option    >
                                                    Yusei Magic
                      </option > <option    >
                                                    ZCOOL KuaiLe
                      </option > <option    >
                                                    ZCOOL QingKe HuangYou
                      </option > <option    >
                                                    ZCOOL XiaoWei
                      </option > <option    >
                                                    Zen Dots
                      </option > <option    >
                                                    Zeyada
                      </option > <option    >
                                                    Zhi Mang Xing
                      </option > <option    >
                                                    Zilla Slab
                      </option > <option    >
                                                    Zilla Slab Highlight
                      </option >
                                            </select >
                                        </div >
                                    </div >
                                    </div >
                                    <div className="field"    >
                                        <div className="control"    >
                                            <label className="label"    > Font Size</label >
                                            <input id="fontsize" type="integer" min="10" max="500"
                                                onChange={onChangeinput}
                                                maxLength="2"
                                                placeholder="Font Size" value={state.fontsize} className="input" />
                                        </div >
                                    </div >
                                </div >
                                <div className="column is-one-third"    >
                                    <div className="field"    >
                                        <div className="control"    >
                                            <label className="label"    > Font Color</label >
                                            <input id="fontColor" type="text"
                                                placeholder="Font Color" defaultValue={fontcolor}
                                                className="input font-color" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(34, 34, 34)' }
                                                } />
                                        </div >
                                    </div >
                                </div >
                                <div className="column is-one-third"    >
                                    <div className="field"    > <div className="control"    >
                                        <label className="label"    > Background Color</label >
                                        <input id="backgroundColor"
                                            type="text" placeholder="Background Color"
                                            defaultValue={bgcolor}
                                            className="input background-color" style={{ backgroundColor: 'rgb(32, 156, 238)', color: 'rgb(34, 34, 34)' }} />
                                    </div >
                                    </div >
                                </div >
                            </div >

                        </form >
                    </Card >
                    <br />

                    <Grid>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Card elevation={1} className="box container">
                                <h3 className="title is-4">Installation</h3>
                                <p>First, use the download button to download the files listed below.
                                Place the files in the root directory of your website.
            </p>
                                <ul>
                                    <li>android-chrome-192x192.png</li>
                                    <li>android-chrome-512x512.png</li>
                                    <li>apple-touch-icon.png</li>
                                    <li>favicon-16x16.png</li>
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
                                    &lt;link rel=&quot;manifest &quot;href=&quot;/site.webmanifest &quot;&gt;</code>
                                </pre>
                                <br />
                                <button onClick={fncopytext} className="button is-info">Copy</button>
                                <br />
                            </Card>
                            <br />
                            <Card elevation={1} className="box container"  >
                                <h3 className="title is-4"  >About favicon generator</h3>
                                <p  >Whether you want to generate a favicon from text, from an
                                existing image, or from an emoji we've got you covered. The
                                favicon generator is completely free and extremely easy to
                                use. The generated favicon will work for all browsers and
                                multiple platforms.
              </p>
                                <br />
                                <h3 className="title is-4"  >Getting started with the favicon generator
              </h3>
                                <p  >
                                    The tool above will allow you to generate a favicon from text.
                                    Start by choosing one to two letters for the favicon
                                    generator. Since the favicon generator outputs very small
                                    images it's important to use few characters for maximum
                                    legibility. Once cool feature with this favicon generator is
                                    that you can copy and paste both unicode characters and emojis
                                            into the text box.</p>
                                <br />
                                <h3 className="title is-4"  >Making the background simple</h3>
                                <p  >
                                    Next, select the shape of the background. There are three
                                    simple shapes available: square, circle, and rounded. These
                                    are the most common shapes used to generate a favicon.
                                    </p>
                                <br />
                                <h3 className="title is-4"  >Selecting the font for your favicon</h3>
                                <p  >
                                    The favicon generator uses
                <a href="https://fonts.google.com/" target="_blank" rel="noreferrer"  >Google Fonts</a>
                                        which has 800+ fonts available. This is useful to match the
                font used on your own website. In the future there will be a
                dedicated font page to help you select your font. It will have
                filters for languages, styles, and commonly used fonts. You
                can edit the font size once you've selected your font. Try to
                take up as much space as possible.

                                    </p>
                                <br />
                                <h3 className="title is-4"  >Tailoring the colors</h3>
                                <p  >
                                    The last step is to select the colors. If you have the HEX
                                    values of the colors you want then you can just enter them
                                    into the input box. Otherwise you can use some of the colors
                                    that we suggest using the color picker below each input box.
                                    .
                                    </p>

                            </Card>
                            <br />
                        </Grid>
                        <Grid item xs={false} sm={false} md={4} lg={4} xl={4}></Grid>
                    </Grid>
                </div >
            </Container>
        </React.Fragment >
    );
}
