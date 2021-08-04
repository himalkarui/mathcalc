import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    Button, Typography, FormControl, MenuItem, Backdrop, CircularProgress, Container, Card, Select, ButtonGroup
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import * as fileSave from "file-saver";
import SubNavBar from '../../../Components/SubNavBar';
import { Grid } from '@material-ui/core';
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

export default function BasesfEncode() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',
        isTextInput: true,
        outputFormat: '0',
        casetype: '1',
    });

    const onClearClick = () => {
        setState({
            ...state,
            originalText: '',
        })
    }

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const [inputFile, setInputFile] = React.useState();

    const onClickInputFormat = (e) => {
        setState({
            ...state,
            isTextInput: !state.isTextInput,
        });
    }

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

    const onChangeFile = (e) => {
        if (e.target.files[0]) {
            setInputFile(e.target.files[0])
        }
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    async function onClickCalculate() {
        try {
            let orgtext = state.originalText;
            let resText = "";
            let baseString = "";

            if (!state.isTextInput && inputFile) {
                baseString = await getBase64(inputFile);
            } else {
                baseString = "data:text/plain;base64," + btoa(orgtext);
            }

            if (state.casetype === "1") {
                resText = baseString.split(",")[1].toString();
            }
            else if (state.casetype === "2") {
                resText = baseString;
            }
            else if (state.casetype === "6") {
                resText = '<link rel="stylesheet" type="text/css" href="' + baseString + '" />';
            }
            else if (state.casetype === "7") {
                resText = '<script type="text/javascript" src="' + baseString + '"></script>';
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
        } catch (e) { }
    }

    const fncopytext = (e) => {
        /* Get the text field */
        setSnakOpen(true);
        let copyInput = document.getElementById('resulttext');
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
        setSnakMessage("Copied !");
        setTimeout(() => {
            setSnakOpen(false);
        }, 2000);
    }

    const onClickDownload = () => {
        let strFile = state.resulttext;
        let blob = new Blob([strFile], { type: 'text' });
        fileSave.saveAs(blob, 'output.txt');
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
                <title>Base64 encode online</title>
                <meta name="keywords" content="texts, files, ecode, base64 , encode files to base64 , encode files to data URI, encode files to css, encode files to javascript, emcode files to html" />
                <meta name="description" content="Encode files or text to base64. It is useful for embebbing files in HTML or CSS code as text" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Base64 encode online"
                    links={[{
                        url: "/files/",
                        urlName: "Files"
                    }]}
                    txtTitle="Encode files or text to base64. It is useful for embebbing files in HTML or CSS code as text"
                />
                <br />
                <div className="container" data-v-14591542>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h1" className={'title is-6 text-option'}>
                                        Options
                                    </Typography>
                                    <Grid container>
                                        <Grid item sm={12} md={12} lg={4}>
                                            <span><strong>Input Type</strong></span><br />
                                            <ButtonGroup style={{ margin: '5px 0px' }}>
                                                <Button aria-label="File"
                                                    className={!state.isTextInput ? "button is-success" : 'button'}
                                                    onClick={onClickInputFormat}
                                                >
                                                    File
                                                </Button>
                                                <Button aria-label="Text"
                                                    className={state.isTextInput ? "button is-success" : 'button'}
                                                    onClick={onClickInputFormat}
                                                >
                                                    Text
                                                </Button>
                                            </ButtonGroup>
                                        </Grid>
                                        <Grid item sm={12} md={12} lg={8}>
                                            <span><strong>Output format</strong></span><br />
                                            <FormControl variant="outlined" className={classes.formControl}>
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
                                                >
                                                    <MenuItem value="1">Base64 string</MenuItem>
                                                    <MenuItem value="2">Data URL</MenuItem>
                                                    <MenuItem value="6">CSS embedding in HTML</MenuItem>
                                                    <MenuItem value="7">Javascript embedding in HTML</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Card>
                            <fieldset title="Related tools" className="field field-light">
                                <legend><strong>Related tools</strong></legend>
                                <Typography>
                                    To encode image file try this tool, &nbsp;
                                    <Link to={'/image-base64-generator'} style={{ color: 'blue', textDecoration: 'underline' }}>Image file encoder</Link>.
                                </Typography>
                            </fieldset>
                            <VerticalAds />
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box" data-v-14591542>
                                {
                                    state.isTextInput ?
                                        <>
                                            <Typography variant="h1" className={'title is-6 text-option'}>
                                                Input Text</Typography><br />
                                            <textarea className="input"
                                                id="originalText"
                                                style={{
                                                    resize: 'none',
                                                    minWidth: '255px',
                                                    minHeight: '80px'
                                                }} value={state.originalText}
                                                onChange={onInputChange}
                                            ></textarea>
                                            <br />
                                            <br />
                                        </>
                                        : <>
                                            <Typography variant="h1" className={'title is-6 text-option'}>
                                                Input file</Typography><br />
                                            <input type="file" className="file" onChange={onChangeFile} ></input>
                                            <hr />
                                        </>
                                }
                                <Button variant="contained" style={{ margin: '5px' }} color="secondary"
                                    onClick={onClearClick}
                                >Clear</Button>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-dark"
                                    startIcon={<SettingIcon />}
                                    onClick={onClickCalculate}
                                >Encode!</Button>
                            </Card>
                            <Card elevation={1} className="box" data-v-14591542>
                                <div>
                                    <Typography variant="h1" className={'title is-6 text-option'}>
                                        Output text (base64)
                                    </Typography><br />
                                    <div className={'resultsec'}>
                                        <textarea className="input"
                                            id="resulttext"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '90px'
                                            }} value={state.resulttext}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} color="primary"
                                        startIcon={<FileCopyIcon />}
                                        onClick={fncopytext}
                                    >Copy</Button>
                                    <Button variant="contained" style={{ margin: '5px' }} color="primary"
                                        startIcon={<FontDownloadIcon />}
                                        onClick={onClickDownload}
                                    >Download</Button><br />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <br />
                </div>
            </Container>
        </div >
    );
}