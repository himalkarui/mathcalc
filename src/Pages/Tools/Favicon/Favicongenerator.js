import React, { useEffect, useState } from "react";
import { } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import * as fileSave from "file-saver";
// import js , css and iamges
import '../../../Assets/favicon/css/stylesfavicon.css';
import Favicon from "../../../Assets/favicon/js/favicon.js/src/package";

export default function Favicongenerator(props) {


    return (
        <React.Fragment>
            <Helmet>
                <title>Favicon Generator - Text to Favicon - favicon.io</title>
                <meta charset="utf-8" />
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta data-key="description" name="description" content="The only favicon generator you need for your next project. Quickly generate your favicon from text, image, or choose from hundreds of emojis." />
            </Helmet>
            <div data-server-rendered="true" id="app" class="layout" data-v-497b9a97>

                <section class="hero is-dark" data-v-497b9a97>
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-7">
                                    <h1 class="subtitle is-spaced is-uppercase has-text-grey-light has-text-weight-bold">Favicon Generator / Generate from Text
          </h1>
                                    <p class="title is-3 has-text-letter-spacing-wide">Quickly generate your favicon from text by selecting the text, fonts, and colors. Download your favicon in the most up to date formats.
          </p>
                                </div>
                                <div class="column is-4">
                                    <div class="is-pulled-right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav id="navbar-sticky" role="navigation" aria-label="main navigation" class="navbar navbar-secondary has-shadow is-spaced" data-v-497b9a97>
                    <div class="container" data-v-497b9a97>
                        <div class="navbar-brand" data-v-497b9a97>
                            <div href="https://bulma.io" class="navbar-item" data-v-497b9a97>
                                <strong data-v-497b9a97>Preview</strong>
                                <img id="preview-48x48" alt="Favicon of Preview 48x48" src="/assets/static/48x48.813b813.c2822fa3d9ef25a65543ba9409e52e89.png" width="40" srcset="/assets/static/48x48.813b813.c2822fa3d9ef25a65543ba9409e52e89.png 40w" sizes="(max-width: 40px) 100vw, 40px" class="is-hidden-mobile g-image" style={{ width: '48px', marginLeft: '0.75rem' }} data-v-497b9a97 />
                                <img id="preview-32x32" alt="Favicon of Preview 32x32" src="/assets/static/32x32.813b813.bb6f56dffa361fb0b235d35b62452db5.png" width="40" srcset="/assets/static/32x32.813b813.bb6f56dffa361fb0b235d35b62452db5.png 40w" sizes="(max-width: 40px) 100vw, 40px" class="is-hidden-mobile g-image" style={{ width: '32px', marginLeft: '0.75rem' }} data-v-497b9a97 />
                                <img id="preview-16x16" alt="Favicon of Preview 16x16" src="/assets/static/16x16.813b813.5c0d295e2144ef4e8341256bad6591cd.png" width="40" srcset="/assets/static/16x16.813b813.5c0d295e2144ef4e8341256bad6591cd.png 40w" sizes="(max-width: 40px) 100vw, 40px" class="is-hidden-mobile g-image" style={{ width: '16px', marginLeft: '0.75rem' }} data-v-497b9a97 />
                            </div>
                        </div>
                        <div class="navbar-end" data-v-497b9a97>
                            <div class="navbar-item" data-v-497b9a97>
                                <div class="field is-grouped" data-v-497b9a97>
                                    <p class="control is-hidden-mobile" data-v-497b9a97>
                                        <a id="share" target="_blank" href="https://twitter.com/intent/tweet?text=Generate a simple text based favicon with https://favicon.io (via @johnsorrentino)" class="button is-default" data-v-497b9a97>
                                            <span class="icon" data-v-497b9a97>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-twitter fa-w-16" data-v-497b9a97>
                                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" data-v-497b9a97></path>
                                                </svg>
                                            </span>
                                            <strong data-v-497b9a97>Share</strong>
                                        </a>
                                    </p>
                                    <p class="control" data-v-497b9a97>
                                        <a target="_blank" class="button is-info" data-v-497b9a97>
                                            <span class="icon" data-v-497b9a97>
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-download fa-w-16" data-v-497b9a97>
                                                    <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" data-v-497b9a97></path>
                                                </svg>
                                            </span>
                                            <strong data-v-497b9a97>Download</strong>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section id="generate-from-text" class="section" data-v-497b9a97>
                    <div class="container" data-v-497b9a97>
                        <form id="form" data-v-497b9a97>
                            <div class="box" data-v-497b9a97>
                                <h3 class="title is-3" data-v-497b9a97>Generate From Text</h3>
                                <div class="columns is-multilie" data-v-497b9a97>
                                    <div class="column is-one-third" data-v-497b9a97>
                                        <div class="field" data-v-497b9a97>
                                            <div class="control" data-v-497b9a97>
                                                <label for="text" class="label" data-v-497b9a97>Text</label>
                                                <input id="text" type="text" placeholder="Text" value="F" class="input" data-v-497b9a97 />
                                            </div>
                                        </div>
                                        <div class="field" data-v-497b9a97>
                                            <div class="control" data-v-497b9a97>
                                                <label for="background" class="label" data-v-497b9a97>Background</label>
                                                <div class="select" style={{ width: '100%' }} data-v-497b9a97>
                                                    <select id="background" style={{ width: '100%' }} data-v-497b9a97>
                                                        <option value="square" data-v-497b9a97>Square</option>
                                                        <option value="circle" data-v-497b9a97>Circle</option>
                                                        <option value="rounded" selected="selected" data-v-497b9a97>Rounded</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field" data-v-497b9a97>
                                            <div class="control" data-v-497b9a97>
                                                <label for="font-family" class="label" data-v-497b9a97>
                                                    Font Family (view all on
                    <a href="https://fonts.google.com/" target="_blank" data-v-497b9a97>Google Fonts</a>
                                                )

                                            </label>
                                                <div class="select" style={{ width: '100%' }} data-v-497b9a97>
                                                    <select id="font-family" style={{ width: '100%' }} data-v-497b9a97></select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="field" data-v-497b9a97>
                                            <div class="control" data-v-497b9a97>
                                                <label for="font-size" class="label" data-v-497b9a97>Font Size</label>
                                                <input id="font-size" type="integer" min="10" max="500" placeholder="Font Size" value="110" class="input" data-v-497b9a97 />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-one-third" data-v-497b9a97>
                                        <div class="field" data-v-497b9a97>
                                            <div class="control" data-v-497b9a97>
                                                <label for="font-color" class="label" data-v-497b9a97>Font Color</label>
                                                <input id="font-color" type="text" placeholder="Font Color" value="#FFFFFF" class="input" data-v-497b9a97 />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column is-one-third" data-v-497b9a97>
                                        <div class="field" data-v-497b9a97>
                                            <div class="control" data-v-497b9a97>
                                                <label for="background-color" class="label" data-v-497b9a97>Background Color</label>
                                                <input id="background-color" type="text" placeholder="Background Color" value="#209CEE" class="input" data-v-497b9a97 />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section class="section" data-v-497b9a97>
                    <div class="container">
                        <div class="content">
                            <div class="columns">
                                <div class="column is-8">
                                    <div class="box">
                                        <h3 class="title is-4">Installation</h3>
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
                                        <pre>
                                            <code>&lt;link rel=&quot;apple-touch-icon &quot;sizes=&quot;180x180 &quot;href=&quot;/apple-touch-icon.png &quot;&gt;&lt;link rel=&quot;icon &quot;type=&quot;image/png &quot;sizes=&quot;32x32 &quot;href=&quot;/favicon-32x32.png &quot;&gt;&lt;link rel=&quot;icon &quot;type=&quot;image/png &quot;sizes=&quot;16x16 &quot;href=&quot;/favicon-16x16.png &quot;&gt;&lt;link rel=&quot;manifest &quot;href=&quot;/site.webmanifest &quot;&gt;</code>
                                        </pre>
                                        <button class="button is-info">Copy</button>
                                    </div>
                                </div>
                                <div class="column is-4">
                                    <div class="is-pulled-right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section" data-v-497b9a97>
                    <div class="container" data-v-497b9a97>
                        <div class="columns" data-v-497b9a97>
                            <div class="column" data-v-497b9a97>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section" data-v-497b9a97>
                    <div class="container" data-v-497b9a97>
                        <div class="content" data-v-497b9a97>
                            <div class="columns" data-v-497b9a97>
                                <div class="column is-8" data-v-497b9a97>
                                    <div class="box" data-v-497b9a97>
                                        <h3 class="title is-4" data-v-497b9a97>Why favicon.io?</h3>
                                        <p data-v-497b9a97>Whether you want to generate a favicon from text, from an
                                        existing image, or from an emoji we've got you covered. The
                                        favicon generator is completely free and extremely easy to
                                        use. The generated favicon will work for all browsers and
                                        multiple platforms.
              </p>
                                        <h3 class="title is-4" data-v-497b9a97>Getting started with the favicon generator
              </h3>
                                        <p data-v-497b9a97>
                                            The tool above will allow you to generate a favicon from text.
                                            Start by choosing one to two letters for the favicon
                                            generator. Since the favicon generator outputs very small
                                            images it's important to use few characters for maximum
                                            legibility. Once cool feature with this favicon generator is
                                            that you can copy and paste both unicode characters and emojis
                                            into the text box. This is useful for when an emoji isn't
                                            listed on the emoji favicon page.
                <a href="https://favicon.io/favicon-generator/?t=%F0%9F%92%AF&amp;bc=%23FFF&amp;fc=%23FFF&amp;b=square" target="_blank" data-v-497b9a97>Here's an example keeping it 💯</a>
                                        </p>
                                        <h3 class="title is-4" data-v-497b9a97>Making the background simple</h3>
                                        <p data-v-497b9a97>
                                            Next, select the shape of the background. There are three
                                            simple shapes available: square, circle, and rounded. These
                                            are the most common shapes used to generate a favicon. You can
                                            see examples of these shapes with
                <a href="https://producthunt.com/" target="_blank" data-v-497b9a97>ProductHunt</a>
                                        ,
                <a href="https://indiehackers.com/" target="_blank" data-v-497b9a97>IndieHackers</a>
                                        , and
                <a href="https://news.ycombinator.com/" target="_blank" data-v-497b9a97>HackerNews</a>
                                        .

                                    </p>
                                        <h3 class="title is-4" data-v-497b9a97>Selecting the font for your favicon</h3>
                                        <p data-v-497b9a97>
                                            The favicon generator uses
                <a href="https://fonts.google.com/" target="_blank" data-v-497b9a97>Google Fonts</a>
                                        which has 800+ fonts available. This is useful to match the
                font used on your own website. In the future there will be a
                dedicated font page to help you select your font. It will have
                filters for languages, styles, and commonly used fonts. You
                can edit the font size once you've selected your font. Try to
                take up as much space as possible.

                                    </p>
                                        <h3 class="title is-4" data-v-497b9a97>Tailoring the colors</h3>
                                        <p data-v-497b9a97>
                                            The last step is to select the colors. If you have the HEX
                                            values of the colors you want then you can just enter them
                                            into the input box. Otherwise you can use some of the colors
                                            that we suggest using the color picker below each input box.
                                            One cool feature is that you can use transparent backgrounds.
                                            Simply type &quot;transparent &quot;into the background color box.
                <a href="https://favicon.io/favicon-generator/?t=w&amp;bc=transparent&amp;fc=%23000" target="_blank" data-v-497b9a97>Here's an example of a favicon generated with a transparent
                  background </a>
                                        .

                                    </p>
                                    </div>
                                </div>
                                <div class="column is-4" data-v-497b9a97>
                                    <div class="is-pulled-right" data-v-497b9a97>
                                        <br data-v-497b9a97 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment >
    );
}
