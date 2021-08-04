import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Typography, FormControl, MenuItem, InputLabel,
    Backdrop, CircularProgress, Container, Card, Select
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import * as fileSave from "file-saver";
import SubNavBar from '../../../Components/SubNavBar';
import VerticalAds from '../../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    divcalc: {
        borderRadius: '12px',
        padding: '1em',
        color: '#314259'
    },
    formelems: {
        '& > *': {
            margin: '10px 0px 10px 0px',
        },
    },
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    formControl: {
        width: "243px",
    }
}));

export default function Caseconverter() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',
        casetype: "10"
    });

    const onClearClick = () => {
        setState({
            ...state,
            originalText: '',
        })
    }

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);

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
    React.useEffect(() => {
        onClickCalculate();
    }, [state.casetype]); // eslint-disable-line react-hooks/exhaustive-deps

    const onClickCalculate = () => {
        let orgtext = state.originalText;
        let resText = "";
        if (state.casetype.toString() === "10") {
            resText = orgtext.toString().toLowerCase();
        }
        else if (state.casetype.toString() === "20") {
            resText = orgtext.toString().toUpperCase();
        }
        else if (state.casetype.toString() === "30") {
            function inversechar(ch) {
                if (ch >= "A" && ch <= "Z")
                    return ch.toLowerCase();
                else if (ch >= "a" && ch <= "z")
                    return ch.toUpperCase();
                else
                    return ch;
            }
            let orgtextArr = orgtext.split("");
            for (let i = 0; i < orgtextArr.length; ++i) {
                resText += inversechar(orgtextArr[i]);
            }
        }
        else if (state.casetype.toString() === "40") {
            let orgLines = orgtext.split(".");
            for (let i = 0; i < orgLines.length; ++i) {
                let lineLength = orgLines[i].trim().length;
                let char = orgLines[i].trim().slice(0, 1);
                resText += char.toUpperCase() + orgLines[i].trim().slice(1, lineLength) + ".";
            }
        }
        else if (state.casetype.toString() === "50") {
            let wordsArr = orgtext.split(" ");
            for (let i = 0; i < wordsArr.length; ++i) {
                let lineLength = wordsArr[i].trim().length;
                let char = wordsArr[i].trim().slice(0, 1);
                resText += char.toUpperCase() + wordsArr[i].trim().slice(1, lineLength).toLowerCase() + " ";
            }
        }
        else if (state.casetype.toString() === "60") {
            let wordsArr = orgtext.split(" ");
            for (let i = 0; i < wordsArr.length; ++i) {
                let lineLength = wordsArr[i].trim().length;
                let char = wordsArr[i].trim().slice(0, 1);
                resText += char.toUpperCase() + wordsArr[i].trim().slice(1, lineLength).toLowerCase();
            }
        }
        else if (state.casetype.toString() === "70") {
            let orgtextArr = orgtext.split("");
            for (let i = 0; i < orgtextArr.length; ++i) {
                if (i % 2 === 0) {
                    resText += orgtextArr[i].toUpperCase();
                } else {
                    resText += orgtextArr[i].toLowerCase();
                }
            }
        }
        else if (state.casetype.toString() === "80") {
            let wordsArr = orgtext.split(" ");
            for (let i = 0; i < wordsArr.length; ++i) {
                let lineLength = wordsArr[i].trim().length;
                let char = wordsArr[i].trim().slice(0, 1);
                if (i === 0) {
                    resText += wordsArr[i].trim();
                } else {
                    resText += char.toUpperCase() + wordsArr[i].trim().slice(1, lineLength).toLowerCase();
                }
            }
        } else if (state.casetype.toString() === "90") {
            resText = orgtext.toString().toLowerCase().replaceAll(" ", "-");
        } else if (state.casetype.toString() === "100") {
            resText = orgtext.toString().toLowerCase().replaceAll(" ", "_");
        }
        setState({
            ...state,
            resulttext: resText
        });
        setTimeout(() => {
            SetBackDropopen(false);
        }, 250);
        //blink the result
        let resultDiv = document.getElementsByClassName('resultsec')[0];
        scrolldiv(resultDiv);
        resultDiv.className = 'resultsec blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultsec';
        }, 1000);
    }

    const fncopytext = (e) => {
        /* Get the text field */

        let copyInput = document.getElementById('resulttext');
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    const onClickDownload = () => {

        let strFile = state.resulttext;

        let blob = new Blob([strFile], { type: 'text' });

        fileSave.saveAs(blob, 'case_converted_lists.txt');

    }

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    const [backDropopen, SetBackDropopen] = React.useState(false);

    return (
        <div className={classes.root}>
            <Backdrop className={classes.backdrop} open={backDropopen}>
                <CircularProgress color="inherit" />
            </Backdrop>

            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Online case converter | mathcalc</title>
                <meta name="keywords" content="texts, lists, cases, converter, convert, capital, letter, majuscule, minuscule, lower, upper, title, capitalized, start, proper, sentence, inverse, toggle, alternate, alternating, camel, pascal, hyphen, snake" />
                <meta name="description" content="Sort a list in (reverse) alphabetical order. You can use the natural sort algorithm (human friendly) or the classical sort algorithm (machine friendly)" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Online case converter"
                    links={[{
                        url: "/text-lists/",
                        urlName: "Text and Lists"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                ONLINE CASE CONVERTER</h1>
                            <p className="  has-text-grey">
                                Change text case to upper case, lower case, proper case, sentence case, title case and more
                            </p>
                        </div>
                    </div>
                </section>
                <div className="container" data-v-14591542>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box" data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h1" className={'title is-6 text-option'}>
                                        Original Text</Typography><br />
                                    <textarea className="input"
                                        id="originalText"
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '160px'
                                        }} value={state.originalText}
                                        onChange={onInputChange}
                                    ></textarea>
                                    <br />
                                </div>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                    onClick={onClearClick}
                                >Clear</Button>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-dark"
                                    startIcon={<SettingIcon />}
                                    onClick={onClickCalculate}
                                >Convert!</Button>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h1" className={'title is-6 text-option'}>
                                        Options
                                    </Typography><br />
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="casetype-label">Convert to</InputLabel>
                                        <Select
                                            labelId="casetype-label"
                                            id="casetype"
                                            value={state.casetype}
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                setState({
                                                    ...state,
                                                    casetype: e.target.value
                                                })
                                            }}
                                            label="Convert to"
                                        >
                                            <MenuItem value={10}>Lower case</MenuItem>
                                            <MenuItem value={20}>Upper case</MenuItem>
                                            <MenuItem value={30}>Inverse case / Toggle case</MenuItem>
                                            <MenuItem value={40}>Sentence case</MenuItem>
                                            <MenuItem value={50}>Title case / Start case / Proper case</MenuItem>
                                            <MenuItem value={60}>Pascal case</MenuItem>
                                            <MenuItem value={70}>Alternating case</MenuItem>
                                            <MenuItem value={80}>Camel case</MenuItem>
                                            <MenuItem value={90}>Hyphen case</MenuItem>
                                            <MenuItem value={100}>Snake case</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <br />
                                    <Typography variant="h1" className={'title is-6 text-option'}>
                                        Converted list
                                    </Typography><br />
                                    <div className={'resultsec'}>
                                        <textarea className="input"
                                            id="resulttext"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '160px'
                                            }} value={state.resulttext}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-info"}
                                        startIcon={<FileCopyIcon />}
                                        onClick={fncopytext}
                                    >Copy</Button>
                                    <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                        startIcon={<FontDownloadIcon />}
                                        onClick={onClickDownload}
                                    >Download</Button><br />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <br />
                </div>
                <VerticalAds />
            </Container>

        </div >
    );
}