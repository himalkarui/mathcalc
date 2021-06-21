import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Card, Container, Typography,
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import Helmet from 'react-helmet';
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
    }
}));

export default function CountLetters() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',
        noAllLines: '0',
        noOfTextLine: '0'
    })

    const onClearClick = () => {
        setState({
            ...state,
            originalText: '',
        })
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
    const onClickCalculate = () => {
        // SetBackDropopen(true);

        let resulttext = state.originalText;
        let inputArray = resulttext.toString().split("\n");
        let noOfTextLine = 0;
        for (let i = 0; i < inputArray.length; ++i) {
            if (inputArray[i].toString().length > 0) {
                noOfTextLine += 1;
            }
        }

        if (state.originalText.length > 0) {
            setState({
                ...state,
                noOfTextLine: noOfTextLine,
                noAllLines: inputArray.length,
            });
        } else {
            setState({
                ...state,
                noOfCharswithoutspace: 0,
                noOfCharswithspace: 0,
            });
        }
        //blink the result
        let resultDiv = document.getElementsByClassName('resultDiv')[0];
        scrolldiv(resultDiv);
        resultDiv.className = 'resultDiv blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultDiv';
        }, 1000);
    }

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Count text lines online | mathcalc</title>
                <meta name="keywords" content="count, number, amount, quantity, breaks, paragraph, newline, lines" />
                <meta name="description" content="Count the lines of the text or list" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Count Lines"
                    links={[{
                        url: "/text-lists/",
                        urlName: "Text and Lists"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                COUNT TEXT LINES ONLINE</h1>
                            <p className="  has-text-grey">
                                Count the lines of the text or list</p>
                        </div>
                    </div>
                </section>
                <div className="container" data-v-14591542>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box" data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h6" className={'text-option'}>
                                        Input Text</Typography><br />
                                    <textarea className="input"
                                        id="originalText"
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '220px'
                                        }} value={state.originalText}
                                        onChange={onInputChange}
                                    ></textarea>
                                    <br />
                                </div>
                                <Button variant="contained" style={{ margin: '5px' }} className={"shade_me button is-success"}
                                    startIcon={<SettingIcon />}
                                    onClick={onClickCalculate}
                                >Count Lines</Button>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                    onClick={onClearClick}
                                >Clear</Button>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h6" className={'text-option'}>
                                        NUMBER OF LINES
                                    </Typography>
                                    <br />
                                    <br />
                                    <div className={'resultDiv'}>
                                        <span><strong>{state.noAllLines} Lines </strong>(including empty lines)</span><br /><br />
                                        <span><strong>{state.noOfTextLine} Lines </strong>(non-empty lines)</span><br /><br />
                                    </div>
                                    <br />
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