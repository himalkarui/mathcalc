import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    divcalc: {
        borderRadius: '12px',
        padding: '1em',
        color: '#314259'
    },
    formelems: {
        display: 'grid',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%'
        },
    },
    calcHeader: {
        fontFamily: 'system-ui',
        fontStyle: 'normal',
        fontSize: '22px',
        lineHeight: '39px',
        color: '#1e314f',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: '600'
    },
    row: {
        margin: '10px'
    },
    resultDiv: {
        padding: '20px 0',
        marginBottom: '10px',
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '34px',
        color: '#314259',
        '& > span': {
            marginLeft: '8px',
            color: '#1678fb'
        },
    }
}));

export default function CompoundInterest() {
    const [state, setState] = React.useState({
        principleAmount: '10000',
        compoundfrequency: '1',
        anualRate: '10',
        periodUnit: '1',
        period: '1',
        interestEarned: '0',
        totalValue: '0',
    })
    const fnprincipleAmount = (e) => {
        if (e.target.value.length > 15) {
            return;
        }
        if (isNaN(e.target.value)) {
            return;
        }
        setState({
            ...state, principleAmount: e.target.value
        })
    }
    const fnAnnualRate = (e) => {
        if (e.target.value.length > 15) {
            return;
        } else if (isNaN(e.target.value)) {
            return;
        } else {
            setState({
                ...state, anualRate: e.target.value
            })
        }
    }
    const fnPeriodUnit = (e) => {
        setState({
            ...state, periodUnit: e.target.value
        })
    }
    const fnPeriod = (e) => {
        if (e.target.value.length > 15) {
            return
        } else if (isNaN(e.target.value)) {
            return;
        }
        setState({
            ...state, period: e.target.value
        })
    }

    const fncompoundfrequency = (e) => {
        if (e.target.value.length > 15) {
            return
        } else if (isNaN(e.target.value)) {
            return;
        }
        setState({
            ...state, compoundfrequency: e.target.value
        })
    }

    const fnCalcCompountInterest = (e) => {
        //compound formulae P (1 + r/n)^(nt)
        let nt = (parseFloat(state.period) / parseFloat(state.compoundfrequency));
        let rdivn = ((parseFloat(state.anualRate) * state.period) * (parseFloat(state.compoundfrequency))) / 100
        let total = parseFloat(state.principleAmount) * (Math.pow((1 + rdivn), nt));
        setState({
            ...state,
            totalValue: total.toFixed(2),
            interestEarned: (total - state.principleAmount).toFixed(2)
        })
    }
    React.useEffect(() => {
        fnCalcCompountInterest();
        // eslint-disable-next-line
    }, [state.principleAmount, state.period, state.periodUnit, state.anualRate, state.compoundfrequency]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Interest Calculator  - calculate your simple and compound interest || MathCalc.xyz</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>
                                Calculate Your Simple Interest</div>
                            <CardContent className='appContainer'>
                                <div className={classes.formelems} noValidate autoComplete="off">
                                    <TextField id="principleAmount" label="Principle Amount" variant="outlined"
                                        value={state.principleAmount}
                                        onChange={fnprincipleAmount}
                                    /><br />
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Compound Frequency</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="compoundfrequency"
                                            value={state.compoundfrequency}
                                            onChange={fncompoundfrequency}
                                            label="Compound Frequency">
                                            <MenuItem value={(0.00273972603)}>Daily</MenuItem>
                                            <MenuItem value={0.0192307692}>Weekly</MenuItem>
                                            <MenuItem value={0.08333333}>Monthly</MenuItem>
                                            <MenuItem value={0.25}>Quarterly</MenuItem>
                                            <MenuItem value={0.5}>Semi-Annualy</MenuItem>
                                            <MenuItem value={1}>Annualy</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField id="anualRate" label="Anual Rate (%)" variant="outlined"
                                        value={state.anualRate}
                                        onChange={fnAnnualRate}
                                    /><br />
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Period Unit</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="periodUnit"
                                            value={state.periodUnit}
                                            onChange={fnPeriodUnit}
                                            label="Period Unit"
                                        >
                                            <MenuItem value={(0.00273972603)}>Days</MenuItem>
                                            <MenuItem value={0.0192307692}>Weeks</MenuItem>
                                            <MenuItem value={0.08333333}>Months</MenuItem>
                                            <MenuItem value={0.25}>Quarters</MenuItem>
                                            <MenuItem value={1}>Years</MenuItem>
                                        </Select>

                                    </FormControl>

                                    <TextField id="period" label="Period" variant="outlined"
                                        value={state.period}
                                        onChange={fnPeriod}
                                    /><br />
                                </div>
                                <div className={classes.resultDiv}>
                                    <label>Interest Earned </label><span>₹ {state.interestEarned}</span>
                                </div>
                                <div className={classes.resultDiv}>
                                    <label>Principle Amount </label> <span>₹ {state.principleAmount}</span>
                                </div>
                                <div className={classes.resultDiv}>
                                    <label>Total value</label><span>₹{state.totalValue}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
