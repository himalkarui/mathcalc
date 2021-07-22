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
                <title>Free Online Interest Calculator  - calculate your simple and compound interest</title>
                <meta name="keywords" content="mathcalc, free online interest calculator, free interest calculator Online, finance calculator" />
                <meta name="description" content="Compound interest (or compounding interest) is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. Thought to have originated in 17th-century Italy, compound interest can be thought of as ' interest on interest,' and will make a sum grow at a faster rate than simple interest, which is calculated only on the principal amount" />
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Compound Interest Calculator"
                            links={[{
                                url: "/finance/",
                                urlName: "Finance"
                            }]}
                        />
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        COMPOUND INTEREST CALCULATOR</h1>
                                    <p className="  has-text-grey">
                                        To calculate Compount Interest earned and total value</p>
                                </div>
                            </div>
                        </section>
                        <Card className="box" elevation={1} >
                            <h1 className="title is-5">
                                Calculate Your Compound Interest</h1>
                            <p>
                                Compound interest is the interest on interest.
                                In simple terms, the addition of interest to the principal sum of the loan or deposit is called compound interest.
                            </p>
                            <br />
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
                        </Card>
                        <br />
                        <Card className="box" elevation={1}>
                            <h2 className="title is-5">What Is Compound Interest?</h2>
                            <p>
                                Compound interest (or compounding interest) is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. Thought to have originated in 17th-century Italy, compound interest can be thought of as "interest on interest," and will make a sum grow at a faster rate than simple interest, which is calculated only on the principal amount.
                                <br />
                                <br />
                                The rate at which compound interest accrues depends on the frequency of compounding, such that the higher the number of compounding periods, the greater the compound interest. Thus, the amount of compound interest accrued on $100 compounded at 10% annually will be lower than that on $100 compounded at 5% semi-annually over the same time period. Since the interest-on-interest effect can generate increasingly positive returns based on the initial principal amount, it has sometimes been referred to as the "miracle of compound interest."
                            </p>
                            <br />
                            <h2 className="title is-5"> KEY TAKEAWAYS</h2>
                            <ul className={classes.ulElem}>
                                <li>     Compound interest (or compounding interest) is interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods on a deposit or loan.
                                </li>
                                <li>  Compound interest is calculated by multiplying the initial principal amount by one plus the annual interest rate raised to the number of compound periods minus one.
                                </li>
                                <li>   Interest can be compounded on any given frequency schedule, from continuous to daily to annually.
                                </li>
                                <li> When calculating compound interest, the number of compounding periods makes a significant difference.
                                </li>
                            </ul>
                            <br />
                            <h2 className="title is-4">Understanding Compound Interest</h2>
                            <h2 className="title is-5">Calculating Compound Interest</h2>
                            <p>Compound interest is calculated by multiplying the initial principal amount by one plus the annual interest rate raised to the number of compound periods minus one. The total initial amount of the loan is then subtracted from the resulting value.
                            </p>
                            <br />
                            <h2 className="title is-5">What is Compound Interest?</h2>
                            <p>
                                The formula for calculating compound interest is:
                                <br />
                                Compound interest
                                <br /> = total amount of principal and interest in future (or future value) less principal amount at present (or present value)
                                <br />= [P (1 + i)n] – P
                                <br />= P [(1 + i)n – 1]
                                <br /> Where:
                                <br />
                                P = principal
                                <br />
                                i = nominal annual interest rate in percentage terms
                                <br />
                                n = number of compounding periods
                                <br />
                                Take a three-year loan of $10,000 at an interest rate of 5% that compounds annually.
                                <br />
                                <br />
                                <h2 className="title is-5">
                                    What would be the amount of interest? </h2>
                                In this case, it would be:
                                <br />
                                $10,000 [(1 + 0.05) 3 – 1] = $10,000 [1.157625 – 1] = $1,576.25
                            </p>
                            <br />
                            <h2 className="title is-5">Growth of Compound Interest</h2>
                            <p>
                                Using the above example, since compound interest also takes into consideration accumulated interest in previous periods, the interest amount is not the same for all three years, as it would be with simple interest.
                                <br />
                                While the total interest payable over the three-year period of this loan is $1,576.25, the interest payable at the end of each year is shown in the table below.
                            </p>
                            <br />
                            <h2 className="title is-5">Compounding Periods</h2>
                            <p>
                                When calculating compound interest, the number of compounding periods makes a significant difference. The basic rule is that the higher the number of compounding periods, the greater the amount of compound interest.
                                <br />
                                The following table demonstrates the difference that the number of compounding periods can make for a $10,000 loan with an annual 10% interest rate over a 10-year period.
                                <br />
                                Compound interest can significantly boost investment returns over the long term. While a $100,000 deposit that receives 5% simple annual interest would earn $50,000 in total interest over 10 years, the annual compound interest of 5% on $10,000 would amount to $62,889.46 over the same period. If the compounding period were instead paid monthly over the same 10-year period at 5% compound interest, the total interest would instead grow to $64,700.95.1
                            </p>
                            <br />
                            <h2 className="title is-5">The Frequency of Compounding</h2>
                            <p>
                                Interest can be compounded on any given frequency schedule, from daily to annually. There are standard compounding frequency schedules that are usually applied to financial instruments.
                                <br />
                                <br />
                                The commonly used compounding schedule for savings account at a bank is daily. For a CD, typical compounding frequency schedules are daily, monthly, or semi-annually; for money market accounts, it's often daily. For home mortgage loans, home equity loans, personal business loans, or credit card accounts, the most commonly applied compounding schedule is monthly.
                                <br />
                                <br />
                                There can also be variations in the time frame in which the accrued interest is actually credited to the existing balance. Interest on an account may be compounded daily but only credited monthly. It is only when the interest is actually credited, or added to the existing balance, that it begins to earn additional interest in the account.
                                <br />
                                <br />
                                Some banks also offer something called continuously compounding interest, which adds interest to the principal at every possible instant. For practical purposes, it doesn't accrue that much more than daily compounding interest unless you're wanting to put money in and take it out the same day.
                                <br />
                                <br />
                                More frequent compounding of interest is beneficial to the investor or creditor. For a borrower, the opposite is true.
                            </p>
                            <br />
                            <h2 className="title is-5">Time Value of Money Consideration</h2>

                            <p> Understanding the time value of money and the exponential growth created by compounding is essential for investors looking to optimize their income and wealth allocation.
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
