import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    Button, Typography, Container, Card, ButtonGroup
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import * as fileSave from "file-saver";
import VerticalAds from '../../../Components/VerticalAds';
import SubNavBar from '../../../Components/SubNavBar';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    }
}));

export default function Basesfdecode() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',
        isTextInput: true,
        isTextOutput: true,
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
            if (e.target.files[0].name.split(".")[1].toLowerCase() === "txt") {
                let reader = new FileReader();
                reader.onloadend = function (e) {
                    if (e.target.result.length < 524287) {
                        setState({
                            ...state,
                            originalText: e.target.result
                        });
                    }
                }
                reader.readAsText(e.target.files[0]);
            } else {
                e.target.value = "";
                setSnakOpen(true);
                setSnakMessage("Select text file only");
                setTimeout(() => {
                    setSnakOpen(false);
                }, 2000);
            }
        }
    }

    async function onClickCalculate() {
        try {
            let orgtext = state.originalText;
            let resText = "";
            resText = atob(orgtext).toString();
            setState({
                ...state,
                resulttext: resText
            });
            //blink the result
            let resultDiv = document.getElementsByClassName('resultsec')[0];
            scrolldiv(resultDiv);
            resultDiv.className = 'resultsec blink_me'
            setTimeout(() => {
                resultDiv.className = 'resultsec';
            }, 1000);
        } catch (e) {
            setSnakOpen(true);
            setSnakMessage("Input text not valid");
            setTimeout(() => {
                setSnakOpen(false);
            }, 2000);
        }
    }

    const fncopytext = (e) => {
        /* Get the text field */
        setSnakOpen(true);
        setSnakMessage("Copied !");
        let copyInput = document.getElementById('resulttext');
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand("copy");
        setTimeout(() => {
            setSnakOpen(false);
        }, 1600);
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

    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Base64 decode online | Base64 decode to file and download easily</title>
                <meta name="keywords" content="base64 base 64 decode files texts strings html css images" />
                <meta name="description" content="Decode base64 from text, you can generate files or texts After converting your base64 to readable text you can download to text file easily" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Base64 decode online"
                    links={[{
                        url: "/files/",
                        urlName: "Files"
                    }]}
                    txtTitle="Decode base64 from text, you can generate files or texts"
                />
                <br />
                <div className="container" data-v-14591542>
                    <Grid spacing={1}>
                        <Grid item sm={12} md={12} lg={8}>
                            <div className="columns" data-v-14591542>
                                <div className="column is-6" data-v-14591542>
                                    <Card elevation={1} className="box " data-v-14591542>
                                        <div className="content" data-v-14591542>
                                            <Typography variant="h1" className={'title is-6 text-option'}>
                                                Options
                                            </Typography>
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
                                                    Text(Base64)
                                                </Button>
                                            </ButtonGroup>
                                            <br />
                                        </div>
                                    </Card>
                                    <fieldset title="Related tools" className="field field-light">
                                        <legend><strong>Related tools</strong></legend>
                                        <Typography>
                                            To encode image file try this tool , &nbsp;
                                            <Link to={'/image-base64-generator'} style={{ color: 'blue', textDecoration: 'underline' }}>Image file encoder</Link>.
                                        </Typography>
                                    </fieldset>
                                </div>
                                <div className="column is-6" data-v-14591542>
                                    <Card elevation={1} className="box" data-v-14591542>
                                        {
                                            state.isTextInput ?
                                                <>
                                                    <Typography variant="h1" className={'title is-6 text-option'}>
                                                        Input Text (base64)</Typography><br />
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
                                        >Decode!</Button>
                                    </Card>
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={12} lg={8}>
                            <br />
                            <Card elevation={1} className="box" data-v-14591542>
                                <div>
                                    <Typography variant="h1" className={'title is-6 text-option'}>
                                        Output text
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
                                    <Button variant="outlined" style={{ margin: '5px' }} color="primary"
                                        startIcon={<FontDownloadIcon />}
                                        onClick={onClickDownload}
                                    >Download File</Button>
                                    <br />
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <VerticalAds />
                        </Grid>
                    </Grid>
                    <br />
                </div>
            </Container >
        </div >
    );
}