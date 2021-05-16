import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, FormGroup, Switch, FormControlLabel, } from '@material-ui/core';
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

export default function Radiandegree() {
    const [state, setState] = React.useState({
        result: '3.84 rad = <strong> 220.01579°</strong>',
        resultLabel: 'Radians To Degrees',
        labelInput: 'Radians',
        isRadians: true,
        inputVal: '3.84',
        decimalPlace: 5,
    })

    const onClickCalculate = () => {
        if (state.isRadians) {
            setState({
                ...state,
                result: state.inputVal + ' rad =<strong> ' + ((state.inputVal * 180) / Math.PI).toFixed(state.decimalPlace) + '°</strong>'
            });
        } else {
            setState({
                ...state,
                result: state.inputVal + '°  =<strong> ' + ((state.inputVal * Math.PI) / 180).toFixed(state.decimalPlace) + ' rad </strong>'
            });
        }
        let resultDiv = document.getElementsByClassName('resultDiv')[0];
        resultDiv.className = 'resultDiv blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultDiv';
        }, 1000);
    }

    React.useEffect(() => {
        onClickCalculate();
        // eslint-disable-next-line
    }, [state.inputVal]);


    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const toggleChecked = () => {
        if (state.isRadians) {
            setState({
                ...state,
                isRadians: !state.isRadians,
                resultLabel: 'Degrees to Radians',
                labelInput: 'Degrees',
                result: state.inputVal + '° = <strong>' + ((state.inputVal * Math.PI) / 180).toFixed(state.decimalPlace) + ' rad</strong>'
            })
        } else {
            setState({
                ...state,
                isRadians: !state.isRadians,
                resultLabel: 'Radians to Degrees',
                labelInput: 'Radians',
                result: state.inputVal + ' rad = <strong> ' + ((state.inputVal * 180) / Math.PI).toFixed(state.decimalPlace) + '°</strong>'
            })
        }
    }


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Online Radians and Degrees converter | mathcalc</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <section class="hero" data-v-23847e07>
                <div style={{ padding: '1rem 0.5rem' }}>
                    <div class="container">
                        <h1 class="subtitle is-spaced is-uppercase has-text-weight-bold">
                            ONLINE RADIANS AND DEGREES CONVERTER</h1>
                        <p class="has-text-letter-spacing-wide has-text-grey">
                            Radians to degrees and degrees to radians conversion   </p>
                    </div>
                </div>
            </section>
            <div class="container" data-v-14591542>
                <div class="columns" data-v-14591542>
                    <div class="column is-6" data-v-14591542>
                        <div class="box" data-v-14591542>
                            <div class="content" data-v-14591542>
                                <Typography variant="h4" className={'text-option'}>Options</Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch checked={state.isRadians} onChange={toggleChecked} />}
                                        label="Radians to Degrees"
                                    />
                                    <FormControlLabel
                                        control={<Switch checked={!state.isRadians} onChange={toggleChecked} />}
                                        label="Degrees to Radians"
                                    />
                                </FormGroup>
                                <br />
                                <span><strong> {state.labelInput}</strong></span><br />
                                <TextField className={classes.formelems} onChange={onInputChange}
                                    value={state.inputVal} id="inputVal" variant="outlined" type="number"></TextField><br />
                                <span> <strong>Number of decimal places</strong></span><br />
                                <TextField className={classes.formelems} onChange={onInputChange} value={state.decimalPlace} id="decimalPlace" variant="outlined" type="number"></TextField>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6" data-v-14591542>
                        <div class="box " data-v-14591542>
                            <div class="content" data-v-14591542>
                                <Typography variant="h4" className={'text-option'}>Result</Typography>
                                <div className={'resultDiv blink_me'}>
                                    <span className={'resPercentage'}>{state.resultLabel}</span><br /><br />
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
