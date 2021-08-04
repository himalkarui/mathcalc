import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Container, Card, FormControl, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings'
import VerticalAds from '../../../Components/VerticalAds';
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
            margin: '10px 10px 10px 0px',
        },
    },
    label: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginRight: '10px',
        width: '90px'
    },
    formcontrol: {
        flexDirection: 'row',
    },
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
}));

export default function Baseconvertor() {
    const [state, setState] = React.useState({
        binVal: '',
        decVal: '',
        octVal: '',
        hexaVal: '',
        baseconvertion: '',
        inputnumber: '',
        baseVal: '',
        targetbase: '',
    });

    const onInputChange = (e) => {
        let bin = 0;
        let dec = 0;
        let oct = 0;
        let hex = 0;
        debugger
        if (e.target.id === "binVal") {
            bin = parseInt(e.target.value === '' ? 0 : e.target.value);
            dec = parseInt((bin + '').replace(/[^01]/gi, ''), 2);
            oct = parseInt(dec).toString(8);
            hex = parseInt(dec).toString(16);

            dec = isNaN(dec) ? '' : dec;
            oct = isNaN(oct) ? '' : oct;
            hex = hex.toString() === "NaN" ? '' : hex;

            setState({
                ...state,
                binVal: e.target.value,
                decVal: dec,
                octVal: oct.toString().toUpperCase(),
                hexaVal: hex.toString().toUpperCase(),
            })
        } else if (e.target.id === "decVal") {
            dec = parseInt(e.target.value === '' ? 0 : e.target.value);
            bin = parseInt(dec).toString(2);
            oct = parseInt(dec).toString(8);
            hex = parseInt(dec).toString(16);


            bin = isNaN(bin) ? '' : bin;
            oct = isNaN(oct) ? '' : oct;
            hex = hex.toString() === "NaN" ? '' : hex;

            setState({
                ...state,
                binVal: bin,
                decVal: e.target.value,
                octVal: oct.toString().toUpperCase(),
                hexaVal: hex.toString().toUpperCase(),
            })
        } else if (e.target.id === "octVal") {
            oct = parseInt(e.target.value === '' ? 0 : e.target.value);
            dec = parseInt(oct, 8);
            bin = parseInt(dec).toString(2);
            hex = parseInt(dec).toString(16);

            bin = isNaN(bin) ? '' : bin;
            dec = isNaN(dec) ? '' : dec;
            hex = hex.toString() === "NaN" ? '' : hex;

            setState({
                ...state,
                binVal: bin,
                decVal: dec,
                octVal: e.target.value.toString().toUpperCase(),
                hexaVal: hex.toString().toUpperCase(),
            })
        } else if (e.target.id === "hexaVal") {
            hex = e.target.value === '' ? 0 : e.target.value;
            dec = parseInt('0x' + hex);
            bin = parseInt(dec).toString(2);
            oct = parseInt(dec).toString(8);

            bin = isNaN(dec) ? '' : bin;
            dec = isNaN(dec) ? '' : dec;
            oct = isNaN(oct) ? '' : oct;

            setState({
                ...state,
                binVal: bin,
                decVal: dec,
                octVal: oct.toString().toUpperCase(),
                hexaVal: e.target.value.toString().toUpperCase(),
            })
        } else {
            setState({
                ...state,
                [e.target.id]: e.target.value,
            })
        }
    }

    const ClearAll = (e) => {
        setState({
            ...state,
            binVal: '',
            decVal: '',
            octVal: '',
            hexaVal: '',
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Base Converter | mathcalc</title>
                <meta name="keywords" content="Mathcalc,radix,radix conversion, binary to decimal ,hexadecimal to binary, hexadecimal to octal,binary to hexa decimal, decimal to binary, binary convertion,decimal conversion" />
                <meta name="description" content="Mathcalc - Online base converter is used to convert from one base of number(binary or decimal or octal or hexadecimal) into another base of number (binary or decimal or octal or hexadecimal)" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Base Converter"
                    links={[{
                        url: "/numbers/",
                        urlName: "Numbers"
                    }]}
                />
                <section className="hero">
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                ONLINE BASE CONVERTER OF NUMMBERS
                            </h1>
                            <p className="  has-text-grey">
                                Base conversion of a numbers from varoius bases like binary , octal, decimal, hexadecimal and custom radix conversion </p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Base Conversion</Typography>
                                    <br />
                                    <FormControl className={classes.formcontrol}>
                                        <div className={classes.label}>
                                            <strong>BIN</strong>
                                        </div>
                                        <div>
                                            <TextField className={classes.formelems} onChange={onInputChange}
                                                value={state.binVal} id="binVal" variant="outlined" type="number"></TextField>
                                        </div>
                                    </FormControl>
                                    <FormControl className={classes.formcontrol}>
                                        <div className={classes.label}>
                                            <Typography><strong>OCT</strong></Typography>
                                        </div>
                                        <div>  <TextField className={classes.formelems} onChange={onInputChange}
                                            value={state.octVal} id="octVal" variant="outlined" type="number"></TextField>
                                        </div>
                                    </FormControl>
                                    <FormControl className={classes.formcontrol}>
                                        <div className={classes.label}>
                                            <Typography><strong>DEC</strong></Typography>
                                        </div>
                                        <div> <TextField className={classes.formelems} onChange={onInputChange}
                                            value={state.decVal} id="decVal" variant="outlined" type="number" ></TextField>
                                        </div>
                                    </FormControl>
                                    <FormControl className={classes.formcontrol}>
                                        <div className={classes.label}>
                                            <Typography><strong>HEXA</strong></Typography>
                                        </div>
                                        <div>   <TextField className={classes.formelems} onChange={onInputChange}
                                            value={state.hexaVal} id="hexaVal" variant="outlined" ></TextField>
                                        </div>
                                    </FormControl>
                                    <br />
                                    <br />
                                    <FormControl className={classes.formcontrol}>
                                        <div className={classes.label}></div>
                                        <Button aria-label="Clear All"
                                            color="secondary"
                                            variant="contained"
                                            onClick={ClearAll}
                                        >
                                            Clear All
                                        </Button>
                                    </FormControl>
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Radix Conversion</Typography>
                                    <br />
                                    <FormControl className={classes.formcontrol}>
                                        <div>
                                            <TextField className={classes.formelems} onChange={
                                                (e) => {
                                                    let num = state.inputnumber;
                                                    for (let i = parseInt(state.baseVal); i < 10; ++i) {
                                                        num = num.replaceAll("" + i + "", "");
                                                    }
                                                    if (e.target.value === "" || e.target.value <= 32) {
                                                        setState({
                                                            ...state,
                                                            [e.target.id]: e.target.value,
                                                            inputnumber: num,
                                                            baseconvertion: ""
                                                        });
                                                    }
                                                }
                                            }
                                                label="Radix of Number"
                                                value={state.baseVal} id="baseVal" variant="outlined" type="number"></TextField>
                                        </div>
                                        <div >
                                            <TextField className={classes.formelems} onChange={
                                                (e) => {

                                                    let num = e.target.value.toString();
                                                    if (state.baseVal < 10) {
                                                        for (let i = parseInt(state.baseVal); i < 10; ++i) {
                                                            num = num.replaceAll("" + i + "", "");
                                                        }
                                                        setState({
                                                            ...state,
                                                            [e.target.id]: num,
                                                            baseconvertion: ""
                                                        })
                                                    } else {
                                                        setState({
                                                            ...state,
                                                            [e.target.id]: e.target.value,
                                                            baseconvertion: ""
                                                        })
                                                    }
                                                }
                                            }
                                                label="Input Number"
                                                value={state.inputnumber} id="inputnumber" variant="outlined" type="number"></TextField>
                                        </div>
                                    </FormControl>
                                    <FormControl className={classes.formcontrol}>
                                        <div>
                                            <TextField className={classes.formelems} onChange={
                                                (e) => {
                                                    if (e.target.value === "" || e.target.value <= 32) {
                                                        setState({
                                                            ...state,
                                                            [e.target.id]: e.target.value,
                                                            baseconvertion: ""
                                                        });
                                                    }
                                                }
                                            }
                                                label="Target radix of number"
                                                value={state.targetbase} id="targetbase" variant="outlined" type="number"></TextField>
                                        </div>
                                    </FormControl>
                                    <br />
                                    <br />
                                    <FormControl className={classes.formcontrol}>
                                        <div className={classes.label}></div>
                                        <Button aria-label="Clear All"
                                            color="primary"
                                            variant="contained"
                                            startIcon={<SettingIcon />}
                                            onClick={(e) => {
                                                let inputnum = state.inputnumber === "" ? 0 : state.inputnumber;
                                                let base = state.baseVal === "" ? 0 : state.baseVal;
                                                let target = state.targetbase === "" ? 0 : state.targetbase;

                                                if (!(base >= 2 && base <= 36) || !(target >= 2 && target <= 36)) {
                                                    setState({
                                                        ...state,
                                                        baseconvertion: "Radix should be between 2 and 36"
                                                    })
                                                } else {
                                                    setState({
                                                        ...state,
                                                        baseconvertion: parseInt(inputnum, base).toString(target).toUpperCase() === "NAN" ?
                                                            "Invalid input number" : parseInt(inputnum, base).toString(target).toUpperCase()
                                                    });
                                                }
                                            }}
                                        >
                                            Convert
                                        </Button>
                                    </FormControl>
                                    <br />
                                    <br />
                                    <Typography>Result : {state.baseconvertion}</Typography>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <br />
                </div>
                <VerticalAds />
                <Card elevation={1} className="box">
                    <h1 className="title is-5"> The base converter</h1>
                    <p>
                        The base converter feature provides different number base equivalents to be viewed at the same time.
                    </p>
                    <br />
                    <p>
                        The bases that are supported are binary, octal, decimal, and hexadecimal.
                    </p>
                    <br />
                    <p>
                        A number can be entered into any of the number bases and the others will change automatically.
                    </p>
                    <br />
                    <p>
                        By clicking on the Clear all button will clear all the values in input fields .
                    </p>
                    <br />
                </Card>
                <br />
                <Card elevation={1} className="box">
                    <h1 className="title is-5"> The Radix converter</h1>
                    <p>
                        The radix converter feature used to convert the number from one radix (from 2 to 36) to another radix number.
                    </p>
                    <br></br>
                    <p>
                        Enter the base radix of a number and the input number
                    </p><br />
                    <p>Then ,click convert to view the converted number</p>
                    <br />
                </Card>
                <br />
            </Container>
        </div >
    );
}
