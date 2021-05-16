import React, { useEffect, useState } from "react";
import { } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import * as fileSave from "file-saver";
// import js , css and iamges
import '../../../Assets/favicon/css/stylesfavicon.css';
import Favicon from "../../../Assets/favicon/js/favicon.js/src/package";

export default function Emojifavicons(props) {

    return (
        <React.Fragment>
            <head>
                <title>Favicon Generator - Emoji to Favicon - favicon.io</title>
                <meta charset="utf-8" />
            </head>

            <div data-server-rendered="true" id="app" class="layout">
                <section class="hero is-dark" style={{backgroundColor:"#563279"}}>
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-7">
                                    <h1 class="subtitle is-spaced is-uppercase has-text-grey-light has-text-weight-bold">Favicon Generator / Generate from Emoji
          </h1>
                                    <p class="title is-3 has-text-letter-spacing-wide">Choose from hundreds of emojis to create your favicon. Emoji images from the Twemoji project.
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
                <section id="generate-from-emoji" class="section">
                    <div class="container">
                        <div class="columns">
                            <div class="column is-8">
                                <div class="box">
                                    <h3 class="title is-3">Emoji Favicons</h3>
                                    <div class="notification is-light">
                                        The emoji graphics are from the open source project
              <a target="_blank" href="https://twemoji.twitter.com/">Twemoji</a>
                                    .
              The graphics are copyright 2020 Twitter, Inc and other contributors. The graphics are licensed under
              <a target="_blank" href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a>
                                    . You should review the license before usage in your project.

                                </div>
                                    <table class="table is-fullwidth">
                                        <thead>
                                            <tr>
                                                <th>Preview</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img alt="grinning squinting face" src="https://twemoji.maxcdn.com/2/svg/1f606.svg" class="g-image" style={{ height: '64px' }} />
                                                </td>
                                                <td class="is-capitalized">
                                                    <a href="/emoji-favicons/grinning-squinting-face">grinning squinting face</a>
                                                </td>
                                                <td class="is-capitalized">smileys &amp;emotion</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="beaming face with smiling eyes" src="https://twemoji.maxcdn.com/2/svg/1f601.svg" class="g-image" style={{ height: '64px' }} />
                                                </td>
                                                <td class="is-capitalized">
                                                    <a href="/emoji-favicons/beaming-face-with-smiling-eyes">beaming face with smiling eyes</a>
                                                </td>
                                                <td class="is-capitalized">smileys &amp;emotion</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="grinning face with smiling eyes" src="https://twemoji.maxcdn.com/2/svg/1f604.svg" class="g-image" style={{ height: '64px' }} />
                                                </td>
                                                <td class="is-capitalized">
                                                    <a href="/emoji-favicons/grinning-face-with-smiling-eyes">grinning face with smiling eyes</a>
                                                </td>
                                                <td class="is-capitalized">smileys &amp;emotion</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="grinning face with big eyes" src="https://twemoji.maxcdn.com/2/svg/1f603.svg" class="g-image" style={{ height: '64px' }} />
                                                </td>
                                                <td class="is-capitalized">
                                                    <a href="/emoji-favicons/grinning-face-with-big-eyes">grinning face with big eyes</a>
                                                </td>
                                                <td class="is-capitalized">smileys &amp;emotion</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img alt="grinning face" src="https://twemoji.maxcdn.com/2/svg/1f600.svg" class="g-image" style={{ height: '64px' }} />
                                                </td>
                                                <td class="is-capitalized">
                                                    <a href="/emoji-favicons/grinning-face">grinning face</a>
                                                </td>
                                                <td class="is-capitalized">smileys &amp;emotion</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="column is-4">
                                <div class="is-pulled-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment >
    );
}
