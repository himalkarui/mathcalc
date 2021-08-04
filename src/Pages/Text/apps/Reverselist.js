import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Card, Container, Typography
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import * as fileSave from 'file-saver';
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

export default function Reverselist() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',
        originalArray: [],
        sortedArray: [],
        isSortasc: true,
        isRandom: false,
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
        let arrOriginalArray = resulttext.split('\n');

        //sorted result array store in same variable
        arrOriginalArray.reverse();
        setState({
            ...state,
            resulttext: arrOriginalArray.toString().replaceAll(',', '\n'),
        })
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

        fileSave.saveAs(blob, 'reversed_lists.txt');

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
                <title>Reverse list online | mathcalc</title>
                <meta name="keywords" content="reverse, invert, revert, inverse, inversion, reversion, list, backwards, order" />
                <meta name="description" content="Sort a list or text in reverse order" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>

            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Reverse List"
                    links={[{
                        url: "/text-lists/",
                        urlName: "Text and Lists"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                REVERSE LIST ONLINE</h1>
                            <p className="  has-text-grey">
                                Sort a list or text in reverse order</p>
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
                                    <span><strong>The list you want to reverse</strong></span><br /><br />
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
                                >Reverse</Button>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                    onClick={onClearClick}
                                >Clear</Button>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h6" className={'text-option'}>
                                        Reversed List
                                    </Typography><br />
                                    <span><strong>The list in reverse order</strong></span><br /><br />
                                    <div className={'resultsec'}>
                                        <textarea className="input"
                                            id="resulttext"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '220px'
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
                                    >Download</Button>
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