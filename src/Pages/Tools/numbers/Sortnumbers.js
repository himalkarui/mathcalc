import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Typography, ButtonGroup,
    Backdrop, CircularProgress, Checkbox, FormControlLabel, Container, Card
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

export default function Sortnumbers() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',
        originalArray: [],
        sortedArray: [],
        isSortasc: true,
        isRandom: false,
    })

    const onChangeSorttype = () => {
        setState({
            ...state,
            isSortasc: !state.isSortasc
        })
    }

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);


    const onClickCalculate = () => {
        // SetBackDropopen(true);

        let resulttext = state.originalText;
        let arrOriginalArray = resulttext.split(',');

        //sorted result array store in same variable
        if (state.isRandom) {
            arrOriginalArray.sort(function (a, b) { return Math.round(Math.random(-1, 1)) - 1 });
        } else if (state.isSortasc) {
            arrOriginalArray.sort(function (a, b) { return a - b });
        } else {
            arrOriginalArray.sort(function (a, b) { return b - a });
        }
        setState({
            ...state,
            resulttext: arrOriginalArray.toString(),
        })

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

    React.useEffect(() => {
        onClickCalculate();
        // eslint-disable-next-line
    }, []);


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

        fileSave.saveAs(blob, 'sorted_numbers.txt');

    }

    const handleChangeRandom = () => {
        setState({
            ...state,
            isRandom: !state.isRandom
        });
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
                <title>Sort Numbers online | mathcalc</title>
                <meta name="keywords" content="sort numbers from a list" />
                <meta name="description" content="Sort numbers from a list" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Sort Numbers"
                    links={[{
                        url: "/numbers/",
                        urlName: "Numbers"
                    }]}
                />
                <section className="hero">
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                SORT NUMBERS ONLINE</h1>
                            <p className="  has-text-grey">
                                Sort numbers from a list in ascending order, descending order or randomly</p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Original List</Typography><br />
                                    <span><strong>The numbers you want to sort with comma (,) seperation</strong></span><br /><br />
                                    <textarea className="input"
                                        id="originalText"
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '250px'
                                        }} value={state.originalText}
                                        onChange={onInputChange}
                                    ></textarea>
                                    <br />
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" >
                            <Card className="box " >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Options</Typography><br />

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isRandom}
                                                onChange={handleChangeRandom}
                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Arrange the numbers in random order"
                                    /><br />
                                    {state.isRandom ? <></> : <><span><strong>Order</strong></span><br />
                                        <ButtonGroup style={{ margin: '10px 0px' }}>
                                            <Button aria-label="Ascending"
                                                className={state.isSortasc ? "button is-success" : 'button'}
                                                onClick={onChangeSorttype}
                                            >
                                                Ascending
                                            </Button>
                                            <Button aria-label="Descending"
                                                className={!state.isSortasc ? "button is-success" : 'button'}
                                                onClick={onChangeSorttype}
                                            >
                                                Descending
                                            </Button>
                                        </ButtonGroup><br />
                                    </>}
                                    <Typography variant="h6" className={'text-option'}>Result</Typography><br />
                                    <div className={'resultDiv blink_me'}>
                                        <textarea className="input"
                                            id="resulttext"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '250px'
                                            }} value={state.resulttext}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-success"}
                                        startIcon={<SettingIcon />}
                                        onClick={onClickCalculate}
                                    >Calculate</Button>
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
            </Container>
        </div >
    );
}