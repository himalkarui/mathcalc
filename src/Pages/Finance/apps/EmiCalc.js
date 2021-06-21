import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
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
    resultDiv: {
        padding: '13px',
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

export default function EmiCalc() {
    const [state, setState] = React.useState({
        loanAmount: 1000,
        interestRate: 10,
        noofmonth: 12,
        emiPayable: 0,
        totalIntest: 0,
        payableAmount: 0,
    });


    const onChangeInput = (e) => {

        setState({
            ...state,
            [e.target.id]: e.target.value,
        })

    };


    React.useEffect(() => {
        const fnCalcDiscount = (e) => {
            // P × r × (1 + r)n / ((1 + r)n - 1);

            let p = state.loanAmount;
            let r = parseFloat(state.interestRate) / (12 * 100);
            let n = state.noofmonth;

            let part = Math.pow((1 + r), n);

            setState({
                ...state,
                emiPayable: ((p * r) * (part / (part - 1))).toFixed(5),
                payableAmount: ((p * r) * (part / (part - 1)) * n).toFixed(5),
                totalIntest: (((p * r) * (part / (part - 1)) * n) - state.loanAmount).toFixed(5),
            });
        }
        fnCalcDiscount();
        // eslint-disable-next-line
    }, [state.loanAmount, state.interestRate, state.noofmonth]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>EMI (Equated Monthly Installment) Calculator - Calulate emi for home load car loan and etc. | mathcalc</title>
                <meta name="keywords" content="mathcalc, free online emi calculator, free calculator, online calculator,emi calculator online" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <SubNavBar
                    pageTitle="EMI Calculator"
                    links={[{
                        url: "/finance/",
                        urlName: "Finance"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                EMI CALCULATOR</h1>
                            <p className="  has-text-grey">
                                To calculate EMI Payable, interest and payable amount</p>
                        </div>
                    </div>
                </section>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card elevation={1} className="box" >
                            <h2 className="title is-5">EMI Calculator : Home Loan, Car Loan, Personal Loan</h2>
                            <p>
                                EMI Calculator – Calculate Loan EMI in 3 Easy Steps. Use our EMI calculator to estimate your Home Loan EMI and also analyse interest and outstanding principal repayment.  </p>
                            <br />
                            <div className={classes.formelems} noValidate autoComplete="off">
                                <TextField id="loanAmount" label="Loan Amount" variant="outlined"
                                    value={state.loanAmount}
                                    type={'number'}
                                    onChange={onChangeInput}
                                /><br />
                                <TextField id="noofmonth" label="Number of Months" variant="outlined"
                                    value={state.noofmonth}
                                    type={'number'}
                                    onChange={onChangeInput}
                                /><br />
                                <TextField id="interestRate" label="Interest Rate (%)" variant="outlined"
                                    value={state.interestRate}
                                    type={'number'}
                                    onChange={onChangeInput}
                                /><br />
                            </div>
                            <div className={classes.resultDiv}>
                                <Typography component='label' >EMI Payable is : &nbsp; <strong>{state.emiPayable}</strong><br /></Typography>
                                <Typography component='label' >Total Interest is : &nbsp; <strong>{state.totalIntest}</strong><br /></Typography>
                                <Typography component='label' >Payable Amount : &nbsp; <strong>{state.payableAmount}</strong><br /></Typography>
                            </div>
                        </Card>
                        <br />
                        <Card className="box" elevation={1}>
                            <h2 className="title is-5">   What Is an Equated Monthly Installment (EMI)?</h2>

                            <p>   An equated monthly installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. Equated monthly installments are applied to both interest and principal each month so that over a specified number of years, the loan is paid off in full. In the most common types of loans—such as real estate mortgages, auto loans, and student loans—the borrower makes fixed periodic payments to the lender over the course of several years with the goal of retiring the loan.
                         </p>

                            <h2 className="title is-5"> KEY TAKEAWAYS</h2>
                            <ul className={classes.ulElem}>
                                <li>   An equated monthly installment (EMI) is a fixed payment made by a borrower to a lender on a specified date of each month.
                             </li><li>EMIs are applied to both interest and principal each month so that over a specified time period, the loan is paid off in full.
                             </li><li> EMIs can be calculated in two ways: the flat-rate method or the reducing-balance method.
                             </li><li>The EMI reducing-balance method generally is more favorable for borrowers, as it results in lower interest payments overall.
                             </li><li>  EMIs allow borrowers the peace of mind of knowing exactly how much money they will need to pay each month toward their loan.
                            </li>
                            </ul>
                            <br />
                            <h2 className="title is-5">
                                Equated Monthly Installment</h2>
                            <h2 className="title is-5"> How an Equated Monthly Installment (EMI) Works</h2>

                            <p>  EMIs differ from variable payment plans, in which the borrower is able to pay higher amounts at his or her discretion. In EMI plans borrowers are usually only allowed one fixed payment amount each month.
                                <br />
                                <br />
                            The benefit of an EMI for borrowers is that they know precisely how much money they will need to pay toward their loan each month, which can make personal budgeting easier. The benefit to lenders (or investors the loan is sold to) is that they can count on a steady, predictable income stream from the loan interest.
                                <br />
                                <br />
                            The EMI can be calculated using either the flat-rate method or the reducing-balance (aks the reduce-balance) method.
                                <br />
                                <br />
                            The EMI flat-rate formula is calculated by adding together the principal loan amount and the interest on the principal and dividing the result by the number of periods multiplied by the number of months.
                                <br />
                                <br />
                            </p>

                            <h2 className="title is-5">  Examples of Equated Monthly Installment (EMI)</h2>
                            <p>
                                To demonstrate how EMI works, let's walk through a calculation of it, using both methods. Assume an individual takes out a mortgage to buy a new home. The principal amount is $500,000, and the loan terms include an interest rate of 3.50% for 10 years.
                                <br />
                                <br />
                                Using the flat-rate method to calculate the EMI, the homeowner's monthly payments come out to $5,625, or ($500,000 + ($500,000 x 10 x 0.035)) / (10 x 12).
                                <br />
                                <br />
                                Using the EMI reducing-balance method, monthly payments would be approximately $1,459.34, or (($500,000 * (0.035)) * (1 + (0.035 / 12)) * 120) / (12 x ((1 + (0.035/12)) * 120) - 1).
                                <br />
                                <br />
                                Note that in the EMI flat-rate calculation, the principal loan amount remains constant throughout the 10-year mortgage period. This suggests that the EMI reducing-balance method may be a better option because the dwindling loan principal also shrinks the amount of interest due.
                                In the flat-rate method, each interest charge is calculated based on the original loan amount, even though the loan balance outstanding is gradually being paid down.
</p>
                            <br />
                            <h2 className="title is-5">What Does EMI Mean?</h2>
                            <p>
                                In the finance world, EMI stands for equated monthly installment. It refers to periodic payments made to settle an outstanding loan within a stipulated time frame. As the name suggests, these payments are the same amount each time.
</p><br />
                            <h2 className="title is-5">How Is EMI Calculated?</h2>
                            <p>
                                There are two ways to calculate EMI: the flat-rate method and the reducing-balance (or reduce-balance) method. Both take into account the loan principal, the loan interest rate, and the term of the loan in their calculations.
</p>
                            <br />
                            <h2 className="title is-5">How Is EMI Deducted From a Credit Card?</h2>
                            <p>
                                As soon as you purchase something on a credit card with an EMI option (that is, doesn't demand payment in full each month), your card's available credit limit is reduced by the total cost of the goods or service.

                                The EMI on credit cards then works much like a home loan or a personal loan: You pay back the principal and interest each month, gradually reducing your debt over a period of time until you pay it off in full.

                                EMI is deducted from a credit card using the reduce-balance method.
</p>
                            <br />
                            <h2 className="title is-5">
                                Is EMI Good or Bad?</h2>
                            <p>
                                EMI is neither inherently good or bad—unless you consider borrowing and accruing debt bad, and paying for things in full the only "good" option.
<br />
                                <br />
                                In terms of borrowing options, EMI does have its good points, though. Because it divides the debt into the same fixed payments each month, it helps borrowers budget their finances and keep in mind their outstanding obligations.
                                They know how much they have to pay, and how long it will take them to settle their debt in full.
 </p>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
