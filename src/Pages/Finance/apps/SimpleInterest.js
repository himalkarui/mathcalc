import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import VerticalAds from '../../../Components/VerticalAds';
import SubNavBar from '../../../Components/SubNavBar';

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
    },
    ulElem: {
        listStyle: 'disc !important',
        padding: '1.5rem',
        borderBottom: 'solid',
        borderTop: 'solid',
        "& li": {
            listStyleType: 'disc'
        }
    }
}));

export default function SimpleInterest() {
    const [state, setState] = React.useState({
        principleAmount: '10000',
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
    React.useEffect(() => {
        const fnCalcSimpleInterest = (e) => {
            let interest = (parseFloat(state.principleAmount * state.period * state.anualRate * state.periodUnit) / (100)).toFixed(2);
            setState({
                ...state,
                totalValue: parseFloat(state.principleAmount) + parseFloat(interest),
                interestEarned: interest
            })
        }
        fnCalcSimpleInterest();
        // eslint-disable-next-line
    }, [state.principleAmount, state.period, state.periodUnit, state.anualRate]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Simple interest calculator  - Calculate your simple interest | mathCalc</title>
                <meta name="keywords" content="mathcalc, free online interest calculator, free interest calculator Online, finance calculator" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Simple Interest Calculator"
                            links={[{
                                url: "/finance/",
                                urlName: "Finance"
                            }]}
                        />
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        SIMPLE INTEREST CALCULATOR</h1>
                                    <p className="  has-text-grey">
                                        To calculate the Interest earned and Total value</p>
                                </div>
                            </div>
                        </section>
                        <Card className="box" raised elevation={1} >
                            <h2 className="title is-5"> Calculate Your Simple Interest</h2>
                            <p>
                                The rate at which you borrow or lend money is called the simple interest. If a borrower takes money from a lender, an extra amount of money is paid back to the lender. The borrowed money which is given for a specific period is called the principal.
                                The extra amount which is paid back to the lender for using the money is called the interest.
        </p>
                            <br />
                            <div className={classes.formelems} noValidate autoComplete="off">
                                <TextField id="principleAmount" label="Principle Amount" variant="outlined"
                                    value={state.principleAmount}
                                    onChange={fnprincipleAmount}
                                    type={'number'}
                                /><br />
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
                                        <MenuItem value={(0.00273972603)}>
                                            Days
                                            </MenuItem>
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
                        </Card>
                        <hr />
                        <Card className="box" elevation={1}>
                            <h2 className="title is-5">  What Is Simple Interest?</h2>
                            <p>  Simple interest is a quick and easy method of calculating the interest charge on a loan. Simple interest is determined by multiplying the daily interest rate by the principal by the number of days that elapse between payments.
                            <br />
                            This type of interest usually applies to automobile loans or short-term loans, although some mortgages use this calculation method.
                            </p>
                            <br />

                            <h2 className="title is-5"> KEY TAKEAWAYS</h2>
                            <ul className={classes.ulElem}>
                                <li>Simple interest is calculated by multiplying the daily interest rate by the principal, by the number of days that elapse between payments.</li>
                                <li>Simple interest benefits consumers who pay their loans on time or early each month.</li>
                                <li>Auto loans and short-term personal loans are usually simple interest loans.</li>
                            </ul>
                            <br />

                            <h2 className="title is-5">Understanding Simple Interest</h2>
                            <p>
                                When you make a payment on a simple interest loan, the payment first goes toward that month’s interest, and the remainder goes toward the principal. Each month’s interest is paid in full so it never accrues. In contrast, compound interest adds some of the monthly interest back onto the loan; in each succeeding month, you pay new interest on old interest.
                                <br />
                                To understand how simple interest works, consider an automobile loan that has a $15,000 principal balance and an annual 5% simple interest rate. If your payment is due on May 1 and you pay it precisely on the due date, the finance company calculates your interest on the 30 days in April. Your interest for 30 days is $61.64 under this scenario.
                               <br />
                                However, if you make the payment on April 21, the finance company charges you interest for only 20 days in April, dropping your interest payment to $41.09, a $20 savings.
                            </p>
                            <br />
                            <h2 className="title is-5">The Formula for Simple Interest Is</h2>
                            <p>
                                Simple Interest &nbsp; = &nbsp;P&nbsp;×&nbsp;I&nbsp;×&nbsp;N&nbsp;
                                <br />
                                where:
                                <br />
                                P&nbsp;=&nbsp;principle <br />
                                I&nbsp;=&nbsp;daily interest rate<br />
                                N&nbsp;=&nbsp;number of days between payments<br />
                            </p>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds /></Grid>
                </Grid>
            </Container>
        </div >
    );
}
