import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    formelems: {
        display: 'grid',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%'
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
                                Calculate Your Compound Interest</div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'}>
                                    Compound interest is the interest on interest.
                                    In simple terms, the addition of interest to the principal sum of the loan or deposit is called compound interest.
                                </p>
                                <div className={classes.formelems} noValidate autoComplete="off">
                                    <TextField id="principleAmount" label="Principle Amount" variant="outlined"
                                        value={state.principleAmount}
                                        onChange={fnprincipleAmount}
                                        type={'number'}
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
                                        type={'number'}
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
                                        type={'number'}
                                    /><br />
                                </div>

                                <Typography component='label' >
                                    Interest Earned : &nbsp; <strong>{state.interestEarned}</strong><br /></Typography><br />

                                <Typography component='label' >
                                    Principle Amount : &nbsp; <strong>{state.principleAmount}</strong><br /></Typography><br />

                                <Typography component='label' >
                                    Total value : &nbsp; <strong>{state.totalValue}</strong><br /></Typography><br />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
