import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Typography, Grid,
    Backdrop, CircularProgress, Container, Card,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings';
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


    const fncopytext = (id) => {
        /* Get the text field */

        let copyInput = document.getElementById(id);
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
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
                <title>Generate list of numbers online | mathcalc</title>
                <meta name="keywords" content="generate list of numbers online, generate list, generate numbers, generate word list,create list of numbers" />
                <meta name="description" content="Generate list of numbers from first number to last number with step input and copy or download the result in text file" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>

            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Generate random numbers"
                    links={[{
                        url: "/numbers/",
                        urlName: "Numbers"
                    }]}
                />
                <section className="hero" >
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-6 is-spaced is-uppercase has-text-weight-bold">
                                Generate random numbers</h1>
                            <p className="  has-text-grey">
                                Generate random numbers online, choose the first and last numbers then click generate to get new random number</p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <Grid container>
                        <Grid item xs={12} sm={10} md={10} lg={10}>
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
                            <Card elevation={2} className="box">
                                <h1 className="title is-5">  Random Number Generator</h1>

                                <p> This version of the generator creates a random integer. It can deal with very large integers up to a few thousand digits.
                                </p>
                                <br />
                                <h1 className="title is-5">What is random number</h1>
                                <p>  A random number is a number chosen from a pool of limited or unlimited numbers that has no discernible pattern for prediction.
                                </p>
                                <br />
                                <p>
                                    The pool of numbers is almost always independent from each other. However, the pool of numbers may follow a specific distribution. For example, the height of the students in a school tends to follow a normal distribution around the median height. If the height of a student is picked at random, the picked number has higher chance to be closer to the median height than being classified as very tall or very short.
                                </p>
                                <br />
                                <p> The random number generators above assume that the numbers generated are independent of each other, and will be evenly spread across the whole range of possible values.
                                </p>
                                <br />
                                <p>
                                    A random number generator, like the ones above, is a device that can generate one or many random numbers within a defined scope. Random number generators can be hardware based or pseudo-random number generators. Hardware based random-number generators can involve the use of a dice, a coin for flipping, or many other devices.
                                </p>
                                <br />
                                <p>
                                    A pseudo-random number generator is an algorithm for generating a sequence of numbers whose properties approximate the properties of sequences of random numbers. Computer based random number generators are almost always pseudo-random number generators. Yet, the numbers generated by pseudo-random number generators are not truly random. Likewise, our generators above are also pseudo-random number generators.
                                </p>
                                <br />
                                <p>
                                    The random numbers generated are sufficient for most applications yet they should not be used for cryptographic purposes. True random numbers are based on physical phenomenon such as atmospheric noise, thermal noise, and other quantum phenomena. Methods that generate true random numbers also involve compensating for potential biases caused by the measurement process.
                                </p>
                                <br />
                            </Card>
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={10} md={10} lg={10}>
                            <VerticalAds />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}
