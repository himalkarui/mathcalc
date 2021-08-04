import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Card, Container, Typography
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import Helmet from 'react-helmet';
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
    }
}));

export default function Countwords() {
    const [state, setState] = React.useState({
        originalText: '',
        noOfWords: 0
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
        let originalArrlength = resulttext.toString().trim().split(" ").length;
        setState({
            ...state,
            noOfWords: originalArrlength
        });
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
                <title>Count words online | mathcalc</title>
                <meta name="keywords" content="count, number, amount, quantity, letters, characters, chars" />
                <meta name="description" content="Counts the number of characters or letters in a text" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Count Words"
                    links={[{
                        url: "/text-lists/",
                        urlName: "Text and Lists"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                COUNT WORDS ONLINE</h1>
                            <p className="  has-text-grey">
                                Counts the number of words in a text</p>
                        </div>
                    </div>
                </section>
                <VerticalAds />
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
                                >Count Words</Button>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                    onClick={onClearClick}
                                >Clear</Button>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h6" className={'text-option'}>
                                        NUMBER OF WORDS
                                    </Typography>
                                    <br />
                                    <br />
                                    <div className={'resultDiv'}>
                                        <span><strong>{state.noOfWords + ""} &nbsp; Words </strong></span><br /><br />
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