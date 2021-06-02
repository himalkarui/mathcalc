import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Typography, ButtonGroup,
    Backdrop, CircularProgress, FormControlLabel, Checkbox, TextField, Container, Card
} from '@material-ui/core';
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
        margin: '5px 10px',
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
    hrElem: {
        margin: '0.6rem 0px',
        "& hr": {
            margin: '0.6rem 0px',
        }
    }
}));

export default function Filternumbers() {
    const [state, setState] = React.useState({
        result: '',
        originalText: '1,2,3,4,5,6,7,8,9,10,,',
        hasRemovecriteriameet: false,
        isAnyorAll: false,
        isGreater: false,
        txtGreate: '',
        isGreterorEqualto: false,
        isLessthan: false,
        txtLesser: '',
        isLessthanorequal: false,
        isSelectOdd: false,
        isSelecteven: false,
        isMultiplesof: false,
        txtMultiplesof: '',
        isDivisorsof: false,
        txtDivisorsof: '',
    })

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);


    const onClickCalculate = () => {
        // SetBackDropopen(true);
        try {
            if (state.originalText !== "") {
                let originalArray = state.originalText.trim(',').split(',').filter(function (a) { return a !== '' });
                let newResultArray = originalArray.filter(function (a) { return a; });
                if (!state.isAnyorAll) {
                    if (state.isGreater && state.txtGreate.trim() && state.isGreterorEqualto) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a >= parseFloat(state.txtGreate)
                            }
                        )
                    }
                    else if (state.isGreater && state.txtGreate.trim()) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a > parseFloat(state.txtGreate.trim());
                            }
                        );
                    }
                    if (state.isLessthan && state.txtLesser.trim() && state.isLessthanorequal) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a <= parseFloat(state.txtLesser.trim());
                            }
                        );
                    }
                    else if (state.isLessthan && state.txtLesser.trim()) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a < parseFloat(state.txtLesser.trim());
                            }
                        );
                    }
                    if (!(state.isSelecteven && state.isSelectOdd)) {
                        if (state.isSelecteven) {
                            newResultArray = newResultArray.filter(
                                function (a) {
                                    return a % 2 === 0
                                }
                            );
                        }

                        if ((state.isSelectOdd)) {
                            newResultArray = newResultArray.filter(
                                function (a) {
                                    return a % 2 === 1
                                }
                            );
                        }
                    }
                    if (state.isMultiplesof && state.txtMultiplesof.trim() !== "") {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a % state.txtMultiplesof.trim() === 0
                            }
                        );
                    }
                    if (state.isDivisorsof && state.txtDivisorsof.trim() !== "") {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return state.txtDivisorsof.trim() % a === 0 && a <= parseFloat(state.txtDivisorsof);
                            }
                        );
                    }
                } else {

                    let anyconArray = [];

                    if (state.isGreater && state.txtGreate.trim() && state.isGreterorEqualto) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a >= parseFloat(state.txtGreate)
                            }
                        );
                        for (let i = 0; i < newResultArray.length; ++i) {
                            anyconArray.push(newResultArray[i]);
                        }
                    }
                    else if (state.isGreater && state.txtGreate.trim()) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a > parseFloat(state.txtGreate.trim());
                            }
                        );
                        for (let i = 0; i < newResultArray.length; ++i) {
                            anyconArray.push(newResultArray[i]);
                        }
                    }
                    if (state.isLessthan && state.txtLesser.trim() && state.isLessthanorequal) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a <= parseFloat(state.txtLesser.trim());
                            }
                        );
                        for (let i = 0; i < newResultArray.length; ++i) {
                            anyconArray.push(newResultArray[i]);
                        }
                    }
                    else if (state.isLessthan && state.txtLesser.trim()) {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a < parseFloat(state.txtLesser.trim());
                            }
                        );
                        for (let i = 0; i < newResultArray.length; ++i) {
                            anyconArray.push(newResultArray[i]);
                        }
                    }
                    if (!(state.isSelecteven && state.isSelectOdd)) {
                        if (state.isSelecteven) {
                            newResultArray = newResultArray.filter(
                                function (a) {
                                    return a % 2 === 0
                                }
                            );
                            for (let i = 0; i < newResultArray.length; ++i) {
                                anyconArray.push(newResultArray[i]);
                            }
                        }

                        if ((state.isSelectOdd)) {
                            newResultArray = newResultArray.filter(
                                function (a) {
                                    return a % 2 === 1
                                }
                            );
                            for (let i = 0; i < newResultArray.length; ++i) {
                                anyconArray.push(newResultArray[i]);
                            }
                        }
                    }
                    if (state.isMultiplesof && state.txtMultiplesof.trim() !== "") {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return a % state.txtMultiplesof.trim() === 0
                            }
                        );
                        for (let i = 0; i < newResultArray.length; ++i) {
                            anyconArray.push(newResultArray[i]);
                        }
                    }
                    if (state.isDivisorsof && state.txtDivisorsof.trim() !== "") {
                        newResultArray = newResultArray.filter(
                            function (a) {
                                return state.txtDivisorsof.trim() % a === 0 && a <= parseFloat(state.txtDivisorsof);
                            }
                        );
                        for (let i = 0; i < newResultArray.length; ++i) {
                            anyconArray.push(newResultArray[i]);
                        }
                    }

                    newResultArray = anyconArray.filter((c, index) => {
                        return anyconArray.indexOf(c) === index;
                    });
                }
                if (state.hasRemovecriteriameet) {
                    newResultArray = originalArray.filter(function (a) {
                        let isThere = true;
                        for (let i = 0; i < newResultArray.length; ++i) {
                            if (newResultArray[i] === a) {
                                isThere = false;
                            }
                        }
                        return isThere;
                    });
                }
                setState({
                    ...state,
                    result: newResultArray.toString(),
                });
            }
        } catch (e) { }
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

        fileSave.saveAs(blob, 'generatednumbers.txt');

    }

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const onCheckboxChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.checked
        })
    }


    const hasRemovecriteriameetChange = (e) => {
        setState({
            ...state,
            hasRemovecriteriameet: !state.hasRemovecriteriameet,
        })
    }

    const isAnyorAllChange = (e) => {
        setState({
            ...state,
            isAnyorAll: !state.isAnyorAll,
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
                <title>Filter numbers online | mathcalc</title>
                <meta name="keywords" content="filter, numbers, maximum, minimum, divisor, multiple" />
                <meta name="description" content="Filter numbers from a list, according to various criteria, such as maximum, minimum, divisor, multiple and more" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Filter Numbers"
                    links={[{
                        url: "/numbers/",
                        urlName: "Numbers"
                    }]}
                />
                <section className="hero">
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                FILTER NUMBERS ONLINE</h1>
                            <p className="has-text-letter-spacing-wide has-text-grey">
                                Filter numbers from a list, according to various criteria, such as maximum, minimum, divisor, multiple and more
                        </p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h4" className={'text-option'}>Original List</Typography><br />
                                    <span>The numbers you want to filter</span><br />
                                    <textarea className="input"
                                        id="originalText"
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '100px'
                                        }} value={state.originalText}
                                        onChange={onInputChange}
                                    ></textarea>
                                    <hr />
                                    <Typography variant="h4" className={'text-option'}>Filtered Numbers</Typography>
                                    <div className={'resultDiv blink_me'}>
                                        <textarea className="input"
                                            id="result"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '100px'
                                            }} value={state.result}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} className={"shade_me button is-success"}
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
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className={classes.hrElem + " content"} >
                                    <Typography variant="h4" className={'text-option'}>Options</Typography><br />
                                    <span><strong>Remove the numbers that meet the criteria, or preserve them?</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px' }}>
                                        <Button aria-label="Preserve"
                                            className={!state.hasRemovecriteriameet ? "button is-success" : 'button'}
                                            onClick={hasRemovecriteriameetChange}
                                        >
                                            Preserve
                                </Button>
                                        <Button aria-label="Remove"
                                            className={state.hasRemovecriteriameet ? "button is-success" : 'button'}
                                            onClick={hasRemovecriteriameetChange}
                                        >
                                            Remove
                                    </Button>
                                    </ButtonGroup><br />
                                    <span><strong>Select the numbers that meet any or all conditions?</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px' }}>
                                        <Button aria-label="Any(OR)"
                                            className={state.isAnyorAll ? "button is-success" : 'button'}
                                            onClick={isAnyorAllChange}
                                        >
                                            Any (OR)
                                </Button>
                                        <Button aria-label="All(AND)"
                                            className={!state.isAnyorAll ? "button is-success" : 'button'}
                                            onClick={isAnyorAllChange}
                                        >
                                            All (AND)
                                    </Button>
                                    </ButtonGroup><br />
                                    <hr />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isGreater}
                                                onChange={onCheckboxChange}
                                                name="isGreater"
                                                color="primary"
                                            />
                                        }
                                        label="Select numbers greater than..."
                                    /><br />
                                    {!state.isGreater ? <></> : <><span><strong>Greater than</strong></span><br />
                                        <TextField className={classes.formelems} onChange={onInputChange}
                                            value={state.txtGreate} id="txtGreate" variant="outlined" type="number"></TextField>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className={classes.formelems}
                                                    checked={state.isGreterorEqualto}
                                                    onChange={onCheckboxChange}
                                                    name="isGreterorEqualto"
                                                    color="primary"
                                                />
                                            }
                                            label="Or Equal to.."
                                        /><br />
                                    </>
                                    }
                                    <hr />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isLessthan}
                                                onChange={onCheckboxChange}
                                                name="isLessthan"
                                                color="primary"
                                            />
                                        }
                                        label="Select numbers lesser than..."
                                    /><br />
                                    {!state.isLessthan ? <></> : <><span><strong>Lesser than</strong></span><br />
                                        <TextField className={classes.formelems} onChange={onInputChange}
                                            value={state.txtLesser} id="txtLesser" variant="outlined" type="number"></TextField>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    className={classes.formelems}
                                                    checked={state.isLessthanorequal}
                                                    onChange={onCheckboxChange}
                                                    name="isLessthanorequal"
                                                    color="primary"
                                                />
                                            }
                                            label="Or Equal to.."
                                        /><br />
                                    </>
                                    }
                                    <hr />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isSelecteven}
                                                onChange={onCheckboxChange}
                                                name="isSelecteven"
                                                color="primary"
                                            />
                                        }
                                        label="Select even numbers"
                                    /><br />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isSelectOdd}
                                                onChange={onCheckboxChange}
                                                name="isSelectOdd"
                                                color="primary"
                                            />
                                        }
                                        label="Select odd numbers"
                                    /><br />
                                    <hr />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isMultiplesof}
                                                onChange={onCheckboxChange}
                                                name="isMultiplesof"
                                                color="primary"
                                            />
                                        }
                                        label="Select multiples of..."
                                    /><br />
                                    {!state.isMultiplesof ? <></> : <><span><strong>Multiples of</strong></span><br />
                                        <TextField className={classes.formelems} onChange={onInputChange}
                                            value={state.txtMultiplesof} id="txtMultiplesof" variant="outlined" type="number"></TextField>
                                    </>
                                    }
                                    <hr />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={state.isDivisorsof}
                                                onChange={onCheckboxChange}
                                                name="isDivisorsof"
                                                color="primary"
                                            />
                                        }
                                        label="Select divisors of..."
                                    /><br />
                                    {!state.isDivisorsof ? <></> : <><span><strong>Divisors of</strong></span><br />
                                        <TextField className={classes.formelems} onChange={onInputChange}
                                            value={state.txtDivisorsof} id="txtDivisorsof" variant="outlined" type="number"></TextField>
                                    </>
                                    }
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
