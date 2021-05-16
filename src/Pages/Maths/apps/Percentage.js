import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings'
import Helmet from 'react-helmet';

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
}));

export default function Percentage() {
    const [state, setState] = React.useState({
        result: 'Some field is empty or wrong',
        fieldOne: '',
        fieldTwo: '',
        labelOne: '',
        lablelTwo: '',
        option: 0,
        decimalPlace: 5,
    })

    React.useEffect(() => {
        onClickCalculate();
    }, [state.option]);

    const OnchangeOption = (e) => {
        switch (e.target.value) {
            case 0:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of P (%)',
                    lablelTwo: 'Value of N',
                    option: 0
                })
                break;
            case 1:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of P (%)',
                    lablelTwo: 'Value of N',
                    option: 1
                })
                break;
            case 2:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of N1',
                    lablelTwo: 'Value of N2',
                    option: 2
                })
                break;
            case 3:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of P (%)',
                    lablelTwo: 'Value of N',
                    option: 3
                })
                break;
            case 4:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Old Value',
                    lablelTwo: 'New Value',
                    option: 4
                })
                break;
            case 5:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Old Value',
                    lablelTwo: 'New Value',
                    option: 5
                })
                break;
            case 6:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of N',
                    lablelTwo: 'Value of P (%)',
                    option: 6
                });
                break;
            case 7:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of N',
                    lablelTwo: 'Value of P (%)',
                    option: 7
                })
                break;

            default:
                break;
        }
    }

    const onClickCalculate = () => {

        let valOne = state.fieldOne === '' ? 0 : parseFloat(state.fieldOne);
        let valTwo = state.fieldTwo === '' ? 0 : parseFloat(state.fieldTwo);

        switch (state.option) {
            case 0:
                setState({
                    ...state,
                    result: valOne + ' % of ' + valTwo + ' is <span class="resPercentage">' + (valOne * valTwo / 100).toFixed(state.decimalPlace) + '</span>'
                });
                break;
            case 1:
                setState({
                    ...state,
                    result: valOne + ' % of <span class="resPercentage">' + ((valTwo * 100) / valOne).toFixed(state.decimalPlace) + '</span> is ' + valTwo
                });
                break;
            case 2:
                setState({
                    ...state,
                    result: '<span class="resPercentage">' + ((valTwo * 100) / valOne).toFixed(state.decimalPlace) + '</span> % of ' + valOne + ' is ' + valTwo
                });
                break;
            case 3:
                setState({
                    ...state,
                    result: valOne + ' / ' + valTwo + '<span class="resPercentage">' + ((valOne * 100) / valTwo).toFixed(state.decimalPlace) + ' %</span>'
                });
                break;
            case 4:
                setState({
                    ...state,
                    result: valOne + ' increased by <span class="resPercentage">' + (((valTwo - valOne) / valOne) * 100).toFixed(state.decimalPlace) + ' % </span> is ' + valTwo
                });
                break;
            case 5:
                setState({
                    ...state,
                    result: valOne + ' decreased by <span class="resPercentage">' + (((valOne - valTwo) / valOne) * 100).toFixed(state.decimalPlace) + ' % </span> is ' + valTwo
                });
                break;
            case 6:
                setState({
                    ...state,
                    result: valOne + ' increased by ' + valTwo + ' % is <span class="resPercentage">' + (((valOne * valTwo) / 100) + valOne).toFixed(state.decimalPlace) + ' </span> '
                });
                break;
            case 7:
                setState({
                    ...state,
                    result: valOne + ' decreased by ' + valTwo + ' % is <span class="resPercentage">' + (valOne - ((valOne * valTwo) / 100)).toFixed(state.decimalPlace) + ' </span> '
                });
                break;

            default:
                break;
        }
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
                <title>Online Percentage Calculator | mathcalc</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <section class="hero" data-v-23847e07>
                <div style={{ padding: '1rem 0.5rem' }}>
                    <div class="container">
                        <h1 class="subtitle is-spaced is-uppercase has-text-weight-bold">Online Percentage Calculator
          </h1>
                        <p class="has-text-letter-spacing-wide has-text-grey">
                            Calculate the percentage of a number, or find a number given its percent, or find the percent given two numbers, or calculate the percentage increment or decrement
          </p>
                    </div>
                </div>
            </section>

            <div class="container" data-v-14591542>
                <div class="columns" data-v-14591542>
                    <div class="column is-6" data-v-14591542>
                        <div class="box" data-v-14591542>
                            <div class="content" data-v-14591542>
                                <Typography variant="h4" className={'text-option'}>Options</Typography>
                                <br /> <Select
                                    id="metrics-outlined"
                                    className={classes.formelems}
                                    style={{ width: '100%' }}
                                    onChange={OnchangeOption}
                                    value={state.option}
                                    variant={'outlined'}
                                    aria-label="Select"
                                >
                                    <MenuItem value={0}>P % of N = ?</MenuItem>
                                    <MenuItem value={1}>P % of ? = N</MenuItem>
                                    <MenuItem value={2}>? % of N1 = N2</MenuItem>
                                    <MenuItem value={3}>N1 / N2 = ? % (Fraction to Percentage)</MenuItem>
                                    <MenuItem value={4}>Relative Increase</MenuItem>
                                    <MenuItem value={5}>Relative Decrease</MenuItem>
                                    <MenuItem value={6}>Increase N by P %</MenuItem>
                                    <MenuItem value={7}>Decrease N by P%</MenuItem>
                                </Select><br />
                                <span> <strong>  {state.labelOne}</strong></span><br />
                                <TextField className={classes.formelems} onChange={onInputChange} value={state.fieldOne} id="fieldOne" variant="outlined" type="number"></TextField><br />
                                <span><strong> {state.lablelTwo}</strong></span><br />
                                <TextField className={classes.formelems} onChange={onInputChange} value={state.fieldTwo} id="fieldTwo" variant="outlined" type="number"></TextField><br />
                                <span> <strong>Number of decimal places</strong></span><br />
                                <TextField className={classes.formelems} onChange={onInputChange} value={state.decimalPlace} id="decimalPlace" variant="outlined" type="number"></TextField>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6" data-v-14591542>
                        <div class="box" data-v-14591542>
                            <div class="content" data-v-14591542>
                                <Typography variant="h4" className={'text-option'}>Result</Typography>
                                <div className={'resultDiv'}>

                                    <span dangerouslySetInnerHTML={{ __html: state.result }}></span>
                                </div>
                                <br />
                                <Button variant="contained" className={"button is-info"}
                                    startIcon={<SettingIcon />}
                                    onClick={onClickCalculate}
                                >Calculate</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
