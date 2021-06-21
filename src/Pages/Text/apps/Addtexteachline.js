import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Typography, ButtonGroup, FormControlLabel, Checkbox,
    Backdrop, CircularProgress, FormControl, Card, Container
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import SubNavBar from '../../../Components/SubNavBar';
import * as fileSave from "file-saver";

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
}));

export default function Addtexttoeachline() {
    const [state, setState] = React.useState({
        result: '',
        inputText: '',
        isBegin: false,
        isEnd: false,
        txtBegin: '',
        txtEnd: '',
        isAddLeadingzero: false,
    })

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const onClickCalculate = () => {

        let OriginalText = state.inputText === '' ? '' : state.inputText.trim();

        let originalArr = OriginalText.split('\n');

        let resultText = "";

        let trailingzero = '';
        let lengthofZeroes = originalArr.length.toString().length;
        for (let j = 1; j < lengthofZeroes; ++j) {
            trailingzero += '0';
        }
        let continuenum = 0;

        if (state.isAddLeadingzero) {
            for (let i = 0; i < originalArr.length; i++) {
                continuenum = parseFloat(continuenum + 1);
                trailingzero = trailingzero.slice(0, lengthofZeroes - continuenum.toString().length);

                resultText += (state.txtBegin + originalArr[i] + state.txtEnd + " \n").toString().replaceAll("%N%", (trailingzero + (1 + i))).toString().replaceAll("%L%", originalArr[i]);
            }
        } else {
            for (let i = 0; i < originalArr.length; i++) {
                resultText += (state.txtBegin + originalArr[i] + state.txtEnd + " \n").toString().replaceAll("%N%", (1 + i)).toString().replaceAll("%L%", originalArr[i]);
            }
        }
        setState({
            ...state,
            result: resultText.toString(),
        });

        setTimeout(() => {
            SetBackDropopen(false);
        }, 250);

        //blink the result
        let resultDiv = document.getElementsByClassName('resultsec')[0];
        resultDiv.className = 'resultsec blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultsec';
        }, 1000);
    }

    const fncopytext = (e) => {
        /* Get the text field */

        let copyInput = document.getElementById('result');
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    const onClickDownload = () => {

        let strFile = state.result;

        let blob = new Blob([strFile], { type: 'text' });

        fileSave.saveAs(blob, 'generated_text.txt');

    }

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const onChangeLeadingZero = (e) => {
        setState({
            ...state,
            isAddLeadingzero: !state.isAddLeadingzero,
        })
    }

    const onCheckboxChange = (e) => {

        if (e.target.name === "isEnd") {
            if (e.target.checked) {
                setState({
                    ...state,
                    [e.target.name]: e.target.checked,
                });
            } else {
                setState({
                    ...state,
                    [e.target.name]: e.target.checked,
                    txtEnd: '',
                });
            }
        } else if (e.target.name === "isBegin") {
            if (e.target.checked) {
                setState({
                    ...state,
                    [e.target.name]: e.target.checked,
                });
            } else {
                setState({
                    ...state,
                    [e.target.name]: e.target.checked,
                    txtBegin: '',
                });
            }
        }
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
                <title>Add text to each line | mathcalc</title>
                <meta name="keywords" content="append, add, texts, lines, number, prepend, concatenate,mathcalc" />
                <meta name="description" content="Append text to the end or beginning of each line. You can add constant text, the number of line and more" />
                <meta property="og:title" content="Add text to each line | mathcalc">
                </meta>
                <meta property="og:url" content="https://mathcalc.xyz/add-text-each-line/">
                </meta>
                <meta property="og:description"
                    content="Append text to the end or beginning of each line. You can add constant text, the number of line, the line itself and more">
                </meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="ADD TEXT TO EACH LINE"
                    links={[{
                        url: "/text-lists/",
                        urlName: "Text and Lists"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                ADD TEXT TO EACH LINE ONLINE</h1>
                            <p className="  has-text-grey">
                                Append text to the end or beginning of each line. You can add constant text, the number of line , the line itself and more</p>
                        </div>
                    </div>
                </section>
                <div className="container" data-v-14591542>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box" data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h6" className={'text-option'}>
                                        Original List</Typography><br />
                                    <span><strong>The text you want to work with</strong></span><br />
                                    <textarea className="input"
                                        id="inputText"
                                        type="text"
                                        maxLength="50000"
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '220px',
                                            marginBottom: '10px'
                                        }} value={state.inputText}
                                        onChange={onInputChange}
                                    ></textarea>
                                    <br />
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h6" className={'text-option'}>New Text</Typography><br />
                                    <span>Tip: write  <strong>%N%</strong> for the line number; and <strong>%L%</strong> for the line itself</span>
                                    <div className={'resultsec'}>
                                        <textarea className="input"
                                            id="result"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '210px'
                                            }} value={state.result}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <Button variant="contained" style={{ margin: '5px' }} className={"shade_me button is-success"}
                                        startIcon={<SettingIcon />}
                                        onClick={onClickCalculate}
                                    >Execute</Button>
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-info"}
                                        startIcon={<FileCopyIcon />}
                                        onClick={fncopytext}
                                    >Copy</Button>
                                    <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                        startIcon={<FontDownloadIcon />}
                                        onClick={onClickDownload}
                                    >Download</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6">
                            <Card className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h6" className={'text-option'}>Options</Typography><br />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isBegin}
                                                onChange={onCheckboxChange}
                                                name="isBegin"
                                                color="primary"
                                            />
                                        }
                                        label="Add text at the beginning of the lines?"
                                    /><br />
                                    {!state.isBegin ? <></> : <>
                                        <FormControl>
                                            <span><strong>Text at the beginning</strong></span>
                                            <TextField className={classes.formelems} onChange={onInputChange}
                                                value={state.txtBegin}
                                                placeholder="Text at the beginning"
                                                id="txtBegin" variant="outlined">
                                            </TextField>
                                        </FormControl>
                                    </>
                                    }
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isEnd}
                                                onChange={onCheckboxChange}
                                                name="isEnd"
                                                color="primary"
                                            />
                                        }
                                        label="Add text at the end of the lines?"
                                    /><br />
                                    {!state.isEnd ? <></> : <>
                                        <FormControl>
                                            <span><strong>Text at the end</strong></span>
                                            <TextField className={classes.formelems}
                                                onChange={onInputChange}
                                                value={state.txtEnd}
                                                placeholder="Text at the end"
                                                id="txtEnd" variant="outlined" type="text"></TextField>
                                        </FormControl>
                                    </>
                                    }
                                    <br />
                                    <span><strong>How to count lines?</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px' }}>
                                        <Button aria-label="1,2,3.."
                                            className={!state.isAddLeadingzero ? "button is-success" : 'button'}
                                            onClick={onChangeLeadingZero}
                                        >
                                            1,2,3..
                                    </Button>
                                        <Button aria-label="01,02,03.."
                                            className={state.isAddLeadingzero ? "button is-success" : 'button'}
                                            onClick={onChangeLeadingZero}
                                        >
                                            01,02,03..
                                    </Button>
                                    </ButtonGroup><br />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <br />
            </Container>
        </div >
    );
}
