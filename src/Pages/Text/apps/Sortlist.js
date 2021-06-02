import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Typography, ButtonGroup,
    Backdrop, CircularProgress, Container, Card
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import CustomSnakbar from '../../../Components/CustomSnakbar';
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
}));

export default function Sortlist() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',
        isNaturalSort: true,
        isCasesensitive: false,
        isAlphabetOrder: false,
    });

    const onChangeisNaturalSort = (e) => {
        setState({
            ...state,
            isNaturalSort: !state.isNaturalSort,
        });
    };

    const onChangeisCasesensitive = (e) => {
        setState({
            ...state,
            isCasesensitive: !state.isCasesensitive,
        });
    };

    const onChangeisAlphabetOrder = (e) => {
        setState({
            ...state,
            isAlphabetOrder: !state.isAlphabetOrder,
        });
    };

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
    const onClickCalculate = () => {
        // SetBackDropopen(true);

        let resulttext = state.originalText;
        let arrOriginalArray = resulttext.split('\n');

        const sorter = (a, b) => {
            function chunkify(t) {
                var tz = [], x = 0, y = -1, n = 0, i, j;

                while (i = (j = t.charAt(x++)).charCodeAt(0)) {
                    // eslint-disable-next-line
                    var m = (i === 46 || (i >= 48 && i <= 57));
                    if (m !== n) {
                        tz[++y] = "";
                        n = m;
                    }
                    tz[y] += j;
                }
                return tz;
            }

            var aa = chunkify(a);
            var bb = chunkify(b);

            for (let x = 0; aa[x] && bb[x]; x++) {
                if (aa[x] !== bb[x]) {
                    var c = Number(aa[x]), d = Number(bb[x]);
                    if (c === aa[x] && d === bb[x]) {
                        return c - d;
                    } else return (aa[x] > bb[x]) ? 1 : -1;
                }
            }
            return aa.length - bb.length;
        }
        if (state.isNaturalSort) {
            arrOriginalArray.sort(sorter);
        } else {
            arrOriginalArray.sort();
        }

        const sorterCaseInsestive = (a, b) => {
            function chunkify(t) {
                var tz = [], x = 0, y = -1, n = 0, i, j;
                while (i = (j = t.charAt(x++)).charCodeAt(0)) {
                    // eslint-disable-next-line
                    var m = (i === 46 || (i >= 48 && i <= 57));
                    if (m !== n) {
                        tz[++y] = "";
                        n = m;
                    }
                    tz[y] += j;
                }
                return tz;
            }

            var aa = chunkify(a.toLowerCase());
            var bb = chunkify(b.toLowerCase());

            for (let x = 0; aa[x] && bb[x]; x++) {
                if (aa[x] !== bb[x]) {
                    var c = Number(aa[x]), d = Number(bb[x]);
                    if (c === aa[x] && d === bb[x]) {
                        return c - d;
                    } else return (aa[x] > bb[x]) ? 1 : -1;
                }
            }
            return aa.length - bb.length;
        }

        if (!state.isCasesensitive) {
            arrOriginalArray.sort(sorterCaseInsestive);
        }

        if (state.isAlphabetOrder) {
            arrOriginalArray.reverse();
        }


        setState({
            ...state,
            resulttext: arrOriginalArray.toString().replaceAll(',', '\n'),
        })

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

        fileSave.saveAs(blob, 'sorted_lists.txt');

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
                <title>Sort list online | mathcalc</title>
                <meta name="keywords" content="alphabetical order, sort lists, case sensitive, case insensitive, natural sort" />
                <meta name="description" content="Sort a list in (reverse) alphabetical order. You can use the natural sort algorithm (human friendly) or the classical sort algorithm (machine friendly)" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Sort List"
                    links={[{
                        url: "/text-lists/",
                        urlName: "Text and Lists"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                Sort LIST ONLINE</h1>
                            <p className="has-text-letter-spacing-wide has-text-grey">
                                Sort a list in (reverse) alphabetical order. You can use the natural sort algorithm (human friendly) or the classical sort algorithm (machine friendly)</p>
                        </div>
                    </div>
                </section>
                <div className="container" data-v-14591542>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box" data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <Typography variant="h4" className={'text-option'}>
                                        Original List</Typography><br />
                                    <span><strong>The list you want to sort</strong></span><br /><br />
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
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                    onClick={onClearClick}
                                >Clear</Button>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-dark"
                                    startIcon={<SettingIcon />}
                                    onClick={onClickCalculate}
                                >Sort!</Button>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <br />
                                    <Typography variant="h4" className={'text-option'}>
                                        Options
                                    </Typography><br />
                                    <span><strong>Sorting algorithm</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px' }}>
                                        <Button aria-label="Natural sort"
                                            className={state.isNaturalSort ? "button is-success" : 'button'}
                                            onClick={onChangeisNaturalSort}
                                        >
                                            Natural sort
                                </Button>
                                        <Button aria-label="" Machine sort
                                            className={!state.isNaturalSort ? "button is-success" : 'button'}
                                            onClick={onChangeisNaturalSort}
                                        >
                                            Machine sort
                                    </Button>
                                    </ButtonGroup><br />
                                    <span><strong>Reverse order ?</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px' }}>
                                        <Button aria-label="A-Z"
                                            className={!state.isAlphabetOrder ? "button is-success" : 'button'}
                                            onClick={onChangeisAlphabetOrder}
                                        >
                                            A - Z
                                </Button>
                                        <Button aria-label="Z-A"
                                            className={state.isAlphabetOrder ? "button is-success" : 'button'}
                                            onClick={onChangeisAlphabetOrder}
                                        >
                                            Z - A
                                    </Button>
                                    </ButtonGroup><br />
                                    <span><strong>Case sensitivity</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px' }}>
                                        <Button aria-label="Case-sensitive"
                                            className={state.isCasesensitive ? "button is-success" : 'button'}
                                            onClick={onChangeisCasesensitive}
                                        >
                                            Case-sensitive
                                </Button>
                                        <Button aria-label="Case-insensitive"
                                            className={!state.isCasesensitive ? "button is-success" : 'button'}
                                            onClick={onChangeisCasesensitive}
                                        >
                                            Case-insensitive
                                    </Button>
                                    </ButtonGroup><br />
                                    <Typography variant="h4" className={'text-option'}>
                                        Sorted list
                                    </Typography><br />
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