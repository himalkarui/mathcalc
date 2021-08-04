import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Typography, ButtonGroup,
    Backdrop, CircularProgress, Container, Card,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import VerticalAds from '../../../Components/VerticalAds';
import * as fileSave from "file-saver";
import SubNavBar from '../../../Components/SubNavBar';

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
    input: {
        margin: '0px 10px',
    },
    link: {
        color: '#065798',
        "&hover": {
            textDecoration: 'underline'
        }
    }
}));

export default function Generatelistofnums() {
    const [state, setState] = React.useState({
        result: '',
        fNumber: 0,
        lNumber: 1,
        stepDiff: 1,
        isAddLeadingzero: false,
        textBefore: '',
        textAfter: '',
        sameorSeperateline: false,
        randomNumber: '',
        Min: 0,
        Max: 10
    })

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);


    const onClickCalculate = () => {
        // SetBackDropopen(true);

        let resulttext = "";
        let fnumber = state.fNumber === '' ? 0 : parseFloat(state.fNumber);
        let lnumber = state.lNumber === '' ? 0 : parseFloat(state.lNumber);
        let stepnum = state.stepDiff === '' ? 0.0 : parseFloat(state.stepDiff);

        let trailingzero = '';
        for (let j = 1; j < state.lNumber.toString().length; ++j) {
            trailingzero += '0';
        }
        if (fnumber > lnumber) {
            setSnakOpen(true);
            setSnakMessage('First number should be less than last number');
        } else if (stepnum <= 0) {
            setSnakOpen(true);
            setSnakMessage('Step difference should be greater than 0');
        } else {
            if (state.sameorSeperateline) {
                if (state.isAddLeadingzero) {
                    resulttext = state.textBefore + trailingzero + fnumber + state.textAfter;
                } else {
                    resulttext = state.textBefore + fnumber + state.textAfter;
                }
            }
            else {
                if (state.isAddLeadingzero) {
                    resulttext = state.textBefore + trailingzero + fnumber + state.textAfter + ' \n';
                } else {
                    resulttext = state.textBefore + fnumber + state.textAfter + ' \n';
                }
            }

            let continuenum = fnumber;
            for (let i = fnumber; i < lnumber / parseFloat(state.stepDiff); ++i) {
                continuenum = parseFloat(continuenum + parseFloat(state.stepDiff))

                trailingzero = trailingzero.slice(0, state.lNumber.toString().length - continuenum.toString().length);

                if (continuenum <= lnumber) {
                    if (state.sameorSeperateline) {
                        if (state.isAddLeadingzero) {
                            resulttext += state.textBefore + trailingzero + continuenum.toPrecision(2) + state.textAfter;
                        } else {
                            resulttext += state.textBefore + continuenum.toPrecision(2) + state.textAfter;
                        }
                    } else {
                        if (state.isAddLeadingzero) {
                            resulttext += state.textBefore + trailingzero + continuenum.toPrecision(2) + state.textAfter + ' \n';
                        } else {
                            resulttext += state.textBefore + continuenum.toPrecision(2) + state.textAfter + ' \n';
                        }
                    }
                }
            }

            setState({
                ...state,
                result: resulttext,
            });
        }
        setTimeout(() => {
            SetBackDropopen(false);
        }, 250);

        //blink the result
        let resultDiv = document.getElementsByClassName('resultDiv')[0];
        resultDiv.className = 'resultDiv blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultDiv';
        }, 1000);
    }

    const fncopytext = (id) => {
        /* Get the text field */

        let copyInput = document.getElementById(id);
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
    }

    const onClickDownload = () => {

        let strFile = state.result;

        let blob = new Blob([strFile], { type: 'text' });

        fileSave.saveAs(blob, 'generatednumbers.txt');

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

    const onChangeoneSeperateLine = (e) => {
        setState({
            ...state,
            sameorSeperateline: !state.sameorSeperateline,
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
                <title>Generate list of numbers online | mathcalc</title>
                <meta name="keywords" content="generate list of numbers online, generate list, generate numbers, generate word list,create list of numbers" />
                <meta name="description" content="Generate list of numbers from first number to last number with step input and copy or download the result in text file" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>

            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Generate List of Numbers"
                    links={[{
                        url: "/numbers/",
                        urlName: "Numbers"
                    }]}
                />
                <section className="hero" >
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-6 is-spaced is-uppercase has-text-weight-bold">
                                GENERATE NUMBERS ONLINE , &nbsp; <a href="#randomnumbers" className={classes.link}>Generate random numbers</a></h1>
                            <p className="  has-text-grey">
                                Generate a list of numbers, choose the first and last numbers and the step between consecutive numbers</p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Options</Typography><br />
                                    <span><strong>First Number</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange}
                                        value={state.fNumber} id="fNumber" variant="outlined" type="number"></TextField><br />
                                    <span><strong>Last Number</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange}
                                        value={state.lNumber} id="lNumber" variant="outlined" type="number"></TextField><br />
                                    <span><strong>Step (difference between consecutive numbers)</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange}
                                        value={state.stepDiff} id="stepDiff" variant="outlined" type="number"></TextField><br />
                                    <span><strong>Add leading zeros?</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px' }}>
                                        <Button aria-label="No (..., 7, 8, 9, ...)"
                                            className={!state.isAddLeadingzero ? "button is-success" : 'button'}
                                            onClick={onChangeLeadingZero}
                                        >
                                            No (.., 7, 8, 9,..)
                                        </Button>
                                        <Button aria-label="Yes (..., 07, 08, 09, ...)"
                                            className={state.isAddLeadingzero ? "button is-success" : 'button'}
                                            onClick={onChangeLeadingZero}
                                        >
                                            YES (.., 07, 08, 09,..)
                                        </Button>
                                    </ButtonGroup><br />

                                    <span><strong>Text Before</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange}
                                        value={state.textBefore} id="textBefore" variant="outlined" ></TextField><br />

                                    <span><strong>Text After</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange}
                                        value={state.textAfter} id="textAfter" variant="outlined"></TextField><br />

                                    <span><strong>Numbers listed in the same line or in separate lines?</strong></span><br />
                                    <ButtonGroup style={{ marginTop: '9px' }}>
                                        <Button aria-label="reduce"
                                            className={state.sameorSeperateline ? "button is-success" : 'button'}
                                            onClick={onChangeoneSeperateLine}
                                        >
                                            One Line
                                        </Button>
                                        <Button aria-label="increase"
                                            className={!state.sameorSeperateline ? "button is-success" : 'button'}
                                            onClick={onChangeoneSeperateLine}
                                        > Seperate Lines</Button>
                                    </ButtonGroup>
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" >
                            <Card elevation={1} className="box " >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Result</Typography>
                                    <div className={'resultDiv'}>
                                        <textarea className="input"
                                            id="result"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '200px'
                                            }} value={state.result}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-success"}
                                        startIcon={<SettingIcon />}
                                        onClick={onClickCalculate}
                                    >Generate</Button>
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-info"}
                                        startIcon={<FileCopyIcon />}
                                        onClick={() => {
                                            fncopytext('result')
                                        }
                                        }
                                    >Copy</Button>
                                    <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                        startIcon={<FontDownloadIcon />}
                                        onClick={onClickDownload}
                                    >Download</Button>
                                </div>
                            </Card>
                            <br />
                        </div>
                    </div>
                    <br />
                    <div className="columns">
                        <div className="column is-6" >
                            <Card elevation={1} className="box " id="randomnumbers" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Generate random number</Typography>
                                    <div>
                                        <TextField className={classes.input}
                                            id="Min"
                                            value={state.Min}
                                            type="number"
                                            onChange={onInputChange}
                                            label="Min"></TextField>
                                        <TextField className={classes.input}
                                            id="Max"
                                            type="number"
                                            value={state.Max}
                                            onChange={onInputChange}
                                            label="Max"></TextField>
                                    </div>
                                    <br />
                                    <div className={'resultDi'}>
                                        <textarea className="input"
                                            id="randomNumber"
                                            style={{
                                                resize: 'none',
                                                fontSize: '2rem',
                                                minWidth: '255px',
                                                minHeight: '70px'
                                            }} value={state.randomNumber}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-success"}
                                        startIcon={<SettingIcon />}
                                        onClick={() => {
                                            function getRandomInt(min, max) {
                                                min = Math.ceil(min);
                                                max = Math.floor(max);
                                                return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
                                            }
                                            let resnumber = getRandomInt(state.Min, state.Max);
                                            let connum = 0;
                                            let step = resnumber / 10;
                                            let intervalId = setInterval(() => {
                                                connum = connum + step
                                                if (connum <= resnumber) {
                                                    setState({
                                                        ...state,
                                                        randomNumber: Math.round(connum)
                                                    });
                                                }
                                                clear();
                                            }, 1);
                                            function clear() {
                                                if (connum >= resnumber) {
                                                    clearInterval(intervalId);
                                                }
                                            }
                                        }
                                        }
                                    >Generate</Button>
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-info"}
                                        startIcon={<FileCopyIcon />}
                                        onClick={() => {
                                            fncopytext('randomNumber')
                                        }
                                        }
                                    >Copy</Button>
                                </div>
                            </Card>
                            <br />
                        </div>
                        <div className="column is-6">
                            <VerticalAds />
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    );
}
