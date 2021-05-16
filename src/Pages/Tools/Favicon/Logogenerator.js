import React, { useEffect, useState } from "react";
import { } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import * as fileSave from "file-saver";
// import js , css and iamges
import '../../../Assets/favicon/css/stylesfavicon.css';
import Favicon from "../../../Assets/favicon/js/favicon.js/src/package";

export default function Favicongenerator(props) {

    const [file, setFile] = useState();
    const [resultFiles, setResultFiles] = useState();
    const generateFavicon = e => {
        //create folder and zip it

        const zip = require('jszip')();

        // for (let file = 0; file < resultFiles.length; file++) {
        //     // Zip file with the file name.
        //     zip.file('favicon.ico', resultFiles['ico']);
        // }

        let folderName = zip.folder('favicon');
        let Filenames = Object.keys(resultFiles)
        for (let i = 0; i < resultFiles.length; ++i) {
            folderName.file(Filenames[i], resultFiles[Filenames[i]]);
        }

        zip.generateAsync({ type: "blob" }).then(content => {
            fileSave.saveAs(content, "favicon.zip");
        });

        // Activate the download button
        const download = document.createElement("a");
        download.href = resultFiles.ico;
        download.setAttribute("download", "favicon.ico");
        download.target = "_blank";
        download.click();
    }

    useEffect(() => {
        let fileInput = document.getElementById('image');
        fileInput.addEventListener('change',
            function (ev) {
                try {
                    console.log("hi");
                    console.log(ev.target.files);
                    setFile(ev.target.files[0]);
                    if (ev.target.files.length !== 0) {
                        let file = ev.target.files[0];
                        let reader = new FileReader();
                        reader.onloadend = function (e) {
                            let image = new Image();
                            image.src = e.target.result;
                            image.onload = function (ev) {
                                console.log("loading");
                                let canvas = document.getElementById('canvas');
                                canvas.width = image.width;
                                canvas.height = image.height;
                                let ctx = canvas.getContext('2d');
                                ctx.drawImage(image, 100, 100);

                                // Create favicon.ico dataurl
                                const resFiles = Favicon.generate(canvas);
                                setResultFiles(resFiles);
                            }
                        }
                        reader.readAsDataURL(file);
                    }
                }
                catch (e) { }
            })
    }, []);

    return (
        <React.Fragment>
            <head>
                <title>The best Logo Generator (completely free) - favicon.io</title>
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta data-vue-tag="ssr" property="og:title" content="Favicon.io - The Ultimate Favicon Generator (Free)" />
                <meta property="og:description" content="With Favicon.io you can quickly generate a favicon for your website for free!" />
            </head>

            <div data-server-rendered="true" id="app" class="layout" data-v-76cff3be>
                <nav class="navbar is-tablet">
                    <div class="container">
                        <div class="navbar-brand">
                            <a href="/" class="navbar-item active">
                                <img src="/assets/img/navbar-logo-2x.d9aeaef3.png" alt="Favicon.io Logo" width="166" height="28" />
                            </a>
                            <div data-target="navbar" class="navbar-burger burger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div id="navbar" class="navbar-menu">
                            <div class="navbar-start has-text-weight-bold">
                                <a href="/favicon-converter/" class="navbar-item">Converter</a>
                                <a href="/favicon-generator/" class="navbar-item">Generator</a>
                                <a href="/emoji-favicons/" class="navbar-item">Emojis</a>
                                <a href="/tutorials/" class="navbar-item">Tutorials</a>
                                <a href="/logo-generator/" aria-current="page" class="navbar-item active--exact active">Logos</a>
                            </div>
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="field is-grouped">
                                        <p class="control">
                                            <a target="_blank" href="https://twitter.com/intent/tweet?text=Generate a simple text based favicon with https://favicon.io (via @johnsorrentino)" class="button is-default">
                                                <span class="icon">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16">
                                                        <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                                    </svg>
                                                </span>
                                                <strong>Tweet</strong>
                                            </a>
                                        </p>
                                        <p class="control">
                                            <a target="_blank" href="https://www.buymeacoffee.com/johnsorrentino" class="button is-default">
                                                <span class="icon">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coffee" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-coffee fa-w-20">
                                                        <path fill="currentColor" d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
                                                    </svg>
                                                </span>
                                                <strong>Buy me a coffee</strong>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section class="hero is-dark" data-v-76cff3be>
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-7">
                                    <h1 class="subtitle is-spaced is-uppercase has-text-grey-light has-text-weight-bold">Logo Generator
          </h1>
                                    <p class="title is-3 has-text-letter-spacing-wide">Generate a logo by configuring the settings below. Download your logo in a variety of layouts and formats.
          </p>
                                </div>
                                <div class="column is-4">
                                    <div class="is-pulled-right">
                                        <ins data-ad-client="ca-pub-6364731787646900" data-ad-slot="8415939935" class="adsbygoogle" style="display:inline-block;width:300px;height:250px;"></ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section" data-v-76cff3be>
                    <div class="container" data-v-76cff3be>
                        <div class="columns" data-v-76cff3be>
                            <div class="column is-one-third" data-v-76cff3be>
                                <form id="form" data-v-58262af9 data-v-76cff3be>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="logoText" class="label" data-v-58262af9>Text</label>
                                            <input id="logoText" name="logoText" type="text" value="Favicon.io" class="input" data-v-58262af9 />
                                        </div>
                                    </div>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="font" class="label" data-v-58262af9>Font</label>
                                            <div class="select" data-v-58262af9>
                                                <select id="font" name="font" data-v-58262af9></select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="logoColor" class="label" data-v-58262af9>Color</label>
                                            <input id="logoColor" name="logoColor" type="text" value="#F4D35E" class="input" data-v-58262af9 />
                                        </div>
                                    </div>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="logoFontColor" class="label" data-v-58262af9>Font Color</label>
                                            <input id="logoFontColor" name="logoFontColor" type="text" value="#083D77" class="input" data-v-58262af9 />
                                        </div>
                                    </div>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="iconText" class="label" data-v-58262af9>Text</label>
                                            <input id="iconText" name="iconText" type="text" value="F" class="input" data-v-58262af9 />
                                        </div>
                                    </div>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="iconFontColor" class="label" data-v-58262af9>Font Color</label>
                                            <input id="iconFontColor" name="iconFontColor" type="text" value="#F4D35E" class="input" data-v-58262af9 />
                                        </div>
                                    </div>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="iconShape" class="label" data-v-58262af9>Shape</label>
                                            <div id="iconShape" name="iconShape" class="select" data-v-58262af9>
                                                <select id="background" name="iconShape" data-v-58262af9>
                                                    <option value="square" selected="selected" data-v-58262af9>Square</option>
                                                    <option value="circle" data-v-58262af9>Circle</option>
                                                    <option value="rounded" data-v-58262af9>Rounded</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="field" data-v-58262af9>
                                        <div class="control" data-v-58262af9>
                                            <label for="iconColor" class="label" data-v-58262af9>Color</label>
                                            <input id="iconColor" name="iconColor" type="text" value="#2E4057" class="input" data-v-58262af9 />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="column is-two-thirds" data-v-76cff3be>
                                <div class="box" style="background-color:#F4D35E;" data-v-64e92e16 data-v-76cff3be></div>
                                <button class="button is-success is-pulled-right" data-v-76cff3be>Download
          </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment >
    );
}

