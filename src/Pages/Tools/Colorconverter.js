import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container
} from '@material-ui/core';
import VerticalAds from '../../Components/VerticalAds';
import Helmet from 'react-helmet';
import SubNavBar from '../../Components/SubNavBar';
import '../../Assets/styles/Colorapp.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    }
}));

export default function Colorconverter() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Convert a Color – HEX, RGB, HSL, CMYK</title>
                <meta charset="utf-8"></meta>
                <meta name="keywords" content="color converter, css, html, hexa, rgb, hsl, cymk, background, background color" />
                <meta name="description" content="Convert colors between formats HEX, RGB, HSL and CMYK. Simple, beautiful and fast." />
                <meta property="og:title" content="Convert a Color – HEX, RGB, HSL, CMYK"></meta>
                <meta property="og:keywords" content="color converter, css, html, hexa, rgb, hsl, cymk, background, background color" />
                <meta property="og:description" content="Convert colors between formats HEX, RGB, HSL and CMYK. Simple, beautiful and fast." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                <script src="https://rawcdn.githack.com/blackLilly/megawin/03e81a9acab46af5a056e4c06707ad220a84867e/src/colorapp.js"></script>

            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Color converter"
                    links={[{
                        url: "/tools/",
                        urlName: "Tools"
                    }]}
                />
                <section className="hero">
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                Color Converter</h1>
                            <p className="  has-text-grey">
                                Convert colors between formats HEX, RGB, HSL and CMYK. Simple, beautiful and fast.
                            </p>
                        </div>
                    </div>
                </section>
                <VerticalAds />
                <div className="container box" id="mathcolorapp" >
                    <div id="header">
                        <div id="logo">
                            <a href="https://mathcalc.xyz/color-converter/"
                            >Color <span className="mid">Code</span> Converter</a>
                        </div>
                    </div>
                    <div id="random-tip" style={{ display: 'none' }}>
                        <div className="text show">ALT-click to random a color!</div>
                    </div>
                    <div id="content">
                        <div className="field">
                            <label >HEX</label>
                            <input type="text" name="hex" id="hex" className="color-field" placeholder="#FF9200" maxLength="7" style={{ color: "rgb(7, 124, 28)", borderColor: "rgb(7, 124, 28)" }} />
                            <div className="copy" title="Copy HEX color value">
                            </div>
                        </div>
                        <div className="field"><label >RGB</label>
                            <input type="text" name="rgb" id="rgb" className="color-field" placeholder="rgb(255,255,255)" maxLength="16" style={{ color: "rgb(7, 124, 28)", borderColor: "rgb(7, 124, 28)" }} />
                            <div className="copy" title="Copy RGB color value"></div></div>
                        <div className="field"><label >HSL</label>
                            <input type="text" name="hsl" id="hsl" className="color-field" placeholder="hsl(255, 100%, 50%)" maxLength="26" style={{ color: "rgb(7, 124, 28)", borderColor: "rgb(7, 124, 28)" }} />
                            <div className="copy" title="Copy HSL color value">
                            </div>
                        </div>
                        <div className="field">
                            <label >CMYK</label>
                            <input type="text" name="cmyk" id="cmyk" className="color-field" placeholder="cmyk(100%, 0%, 0%, 0%)" style={{ color: "rgb(7, 124, 28)", borderColor: "rgb(7, 124, 28)" }} />
                            <div className="copy" title="Copy CMYK color value">
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <br />
                <div>
                    <div class="mc-col l10 m12 container" id="main">
                        <div class="mc-panel mc-info intro">
                            <p>Colors are displayed combining RED, GREEN, and BLUE light.</p>
                        </div>
                        <hr />
                        <div className="box">
                            <h2 className="title is-2">Color Names</h2>
                            <p>With CSS, colors can be set by using color names:</p>
                            <div class="mc-example">
                                <h3>Example</h3>
                                <div class="notranslate">
                                    <div class="mc-responsive">
                                        <table class="ws-table-all notranslate">
                                            <tbody><tr>
                                                <th style={{ width: "50%" }}>Color</th>
                                                <th>Name</th>
                                            </tr>
                                                <tr><td style={{ backgroundColor: "red" }}>&nbsp;</td><td>Red</td></tr>
                                                <tr><td style={{ backgroundColor: "yellow" }}>&nbsp;</td><td>Yellow</td></tr>
                                                <tr><td style={{ backgroundColor: "cyan" }}>&nbsp;</td><td>Cyan</td></tr>
                                                <tr><td style={{ backgroundColor: "blue" }}>&nbsp;</td><td>Blue</td></tr>
                                                <tr><td style={{ backgroundColor: "magenta" }}>&nbsp;</td><td>Magenta</td></tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="box">

                            <h2 className="title is-2">CSS Color Values</h2>
                            <p className="subtitle">With CSS, colors can be specified in different ways:</p>
                            <ul className="menu-list">
                                <li>By color names</li>
                                <li>As RGB values</li>
                                <li>As hexadecimal values</li>
                                <li>As HSL values (CSS3)</li>
                                <li>As HWB values (CSS4)</li>
                                <li>With the <code class="mc-codespan">currentcolor</code> keyword</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="box">
                            <h2 className="title is-2">RGB Colors</h2>
                            <p>RGB color values are supported in all browsers.</p>
                            <p><b>An RGB color value is specified with: rgb(
                                <span style={{ color: "red" }}>RED</span> ,
                                <span style={{ color: "green" }}>GREEN</span> ,
                                <span style={{ color: "blue" }}>BLUE</span> ).</b></p>
                            <p>Each parameter defines the intensity of the color as an integer between 0 and 255.</p>
                            <p>For example, rgb(0,0,255) is rendered as blue,
                                because the blue parameter is set to its highest value (255) and the others are set to 0.</p>
                            <div class="mc-example">
                                <h3>Example</h3>
                                <div class="notranslate">
                                    <div class="mc-responsive">
                                        <table class="ws-table-all notranslate">
                                            <tbody><tr>
                                                <th style={{ width: "25%" }}>Color</th>
                                                <th style={{ width: "25%" }}>RGB</th>
                                                <th>Color</th>
                                            </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#FF0000" }}>&nbsp;</td>
                                                    <td>rgb(255,0,0)</td>
                                                    <td>Red</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#00FF00" }}>&nbsp;</td>
                                                    <td>rgb(0,255,0)</td>
                                                    <td>Green</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#0000FF" }}>&nbsp;</td>
                                                    <td>rgb(0,0,255)</td>
                                                    <td>Blue</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <p>Shades of gray are often defined using equal values for all the 3 light sources:</p>
                            <div class="mc-example">
                                <h3>Example</h3>
                                <div class="notranslate">
                                    <div class="mc-responsive">
                                        <table class="ws-table-all notranslate">
                                            <tbody><tr>
                                                <th style={{ width: "25%" }}>Color</th>
                                                <th style={{ width: "25%" }}>RGB</th>
                                                <th>Color</th>
                                            </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#000000" }}>&nbsp;</td>
                                                    <td>rgb(0,0,0)</td>
                                                    <td>Black</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#808080" }}>&nbsp;</td>
                                                    <td>rgb(128,128,128)</td>
                                                    <td>Gray</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#FFFFFF" }}>&nbsp;</td>
                                                    <td>rgb(255,255,255)</td>
                                                    <td>White</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <hr />
                        <div className="box">
                            <h2 className="title is-2">Hexadecimal Colors</h2>
                            <p>Hexadecimal color values are also supported in all browsers.</p>
                            <p><b>A hexadecimal color is specified with:
                                #<span style={{ color: "#ff0000" }}>RR</span>
                                <span style={{ color: "green" }}>GG</span>
                                <span style={{ color: "#0000ff" }} >BB</span></b>.</p>
                            <p>RR(red), GG(green) and BB(blue) are hexadecimal integers between 00 and
                                FF specifying the intensity of the color.</p>
                            <p>For example, #0000FF is displayed as blue, because the blue component is set to its highest value (FF) and the others are set to
                                00.</p>
                            <div class="mc-example">
                                <h3>Example</h3>
                                <div class="notranslate">
                                    <div class="mc-responsive">
                                        <table class="ws-table-all notranslate">
                                            <tbody><tr>
                                                <th style={{ width: "25%" }}>Color</th>
                                                <th style={{ width: "25%" }}>HEX</th>
                                                <th style={{ width: "25%" }}>RGB</th>
                                                <th>Color</th>
                                            </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#FF0000" }}>&nbsp;</td>
                                                    <td>#FF0000</td>
                                                    <td>rgb(255,0,0)</td>
                                                    <td>Red</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#00FF00" }}>&nbsp;</td>
                                                    <td>#00FF00</td>
                                                    <td>rgb(0,255,0)</td>
                                                    <td>Green</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#0000FF" }}>&nbsp;</td>
                                                    <td>#0000FF</td>
                                                    <td>rgb(0,0,255)</td>
                                                    <td>Blue</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <p>Shades of gray are often defined using equal values for all the 3 light sources:</p>
                            <div class="mc-example">
                                <h3>Example</h3>
                                <div class="notranslate">
                                    <div class="mc-responsive">
                                        <table class="ws-table-all notranslate">
                                            <tbody><tr>
                                                <th style={{ width: "25%" }}>Color</th>
                                                <th style={{ width: "25%" }}>HEX</th>
                                                <th style={{ width: "25%" }}>RGB</th>
                                                <th>Color</th>
                                            </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#000000" }}>&nbsp;</td>
                                                    <td>#000000</td>
                                                    <td>rgb(0,0,0)</td>
                                                    <td>Black</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#808080" }}>&nbsp;</td>
                                                    <td>#808080</td>
                                                    <td>rgb(128,128,128)</td>
                                                    <td>Gray</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ backgroundColor: "#FFFFFF" }}>&nbsp;</td>
                                                    <td>#FFFFFF</td>
                                                    <td>rgb(255,255,255)</td>
                                                    <td>White</td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h2 className="title is-2">Upper Case or Lower Case?</h2>
                            <p>You can use upper case or lower case letters to specify hexadecimal values.
                            </p>
                            <div class="mc-panel mc-note">
                                <p>Lower case are easier to write. Upper case are easier to read.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="box">
                            <h2 className="title is-2" >Color Names</h2>
                            <p>CSS supports 140 standard color names.</p>
                            <p>In the next chapter you will find a complete alphabetical list of color names
                                with hexadecimal values:</p>
                            <div class="mc-responsive">
                                <table class="ws-table-all notranslate">
                                    <tbody><tr>
                                        <th style={{ width: "25%" }}>Color Name</th>
                                        <th style={{ width: "25%" }}>Hex</th>
                                        <th>Color</th>
                                    </tr>

                                        <tr>
                                            <td>AliceBlue</td>
                                            <td>#F0F8FF</td>
                                            <td bgcolor="#F0F8FF">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>AntiqueWhite</td>
                                            <td>#FAEBD7</td>
                                            <td bgcolor="#FAEBD7">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>Aqua</td>
                                            <td>#00FFFF</td>
                                            <td bgcolor="#00FFFF">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>Aquamarine</td>
                                            <td>#7FFFD4</td>
                                            <td bgcolor="#7FFFD4">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>Azure</td>
                                            <td>#F0FFFF</td>
                                            <td bgcolor="#F0FFFF">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>Beige</td>
                                            <td>#F5F5DC</td>
                                            <td bgcolor="#F5F5DC">&nbsp;</td>
                                        </tr>

                                        <tr>
                                            <td>Bisque</td>
                                            <td>#FFE4C4</td>
                                            <td bgcolor="#FFE4C4">&nbsp;</td>
                                        </tr>

                                    </tbody></table>
                            </div>
                        </div>
                        <hr />
                        <div className="box">
                            <h2 className="title is-2">The currentcolor Keyword</h2>
                            <p>The <code class="mc-codespan">currentcolor</code> keyword refers to the value of the color property of an element.</p>
                            <div class="mc-example">
                                <h3 className="title is-3">Example</h3>
                                <p>The border color of the following &lt;div&gt; element will be blue, because the
                                    text color of the &lt;div&gt; element is blue:</p>
                                <div class="mc-code notranslate cssHigh">
                                    <code>
                                        <span class="cssselectorcolor" style={{ color: "brown" }}>
                                            #myDIV <span class="cssdelimitercolor" style={{ color: "black" }} >
                                            </span> {"{"}
                                        </span>
                                        <span class="csspropertycolor" style={{ color: "red" }}><br />&nbsp; color<span class="csspropertyvaluecolor"
                                            style={{ color: "mediumblue" }}><span class="cssdelimitercolor" style={{ color: "black" }}>:</span> blue
                                            <span class="cssdelimitercolor" style={{ color: "black" }}>;
                                            </span></span>
                                            <span class="commentcolor" style={{ color: "green" }}> {"/* Blue text color */"}</span><br />
                                            &nbsp; border
                                            <span class="csspropertyvaluecolor" style={{ color: "mediumblue" }}><span class="cssdelimitercolor"
                                                style={{ color: "black" }}>
                                                :</span> 10px solid currentcolor
                                                <span class="cssdelimitercolor" style={{ color: "black" }}>;
                                                </span>
                                            </span>
                                            <span class="commentcolor" style={{ color: "green" }}> {"/* Blue border color */"}</span>
                                            <br />
                                        </span>
                                        <span class="cssdelimitercolor" style={{ color: "black" }}>{"}"}
                                        </span>
                                    </code>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </Container>
        </div >
    );
}