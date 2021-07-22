import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import SubNavBar from '../../../Components/SubNavBar';
import VerticalAds from '../../../Components/VerticalAds';

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

export default function Discount() {
    const [state, setState] = React.useState({
        principleAmount: 1000,
        discountRate: 10,
        discountValue: 100,
        finalValue: 900,
    });


    const onChangeInput = (e) => {

        setState({
            ...state, [e.target.id]: e.target.value,
        })

    };


    React.useEffect(() => {
        const fnCalcDiscount = (e) => {
            setState({
                ...state,
                discountValue: (state.principleAmount * (state.discountRate / 100)),
                finalValue: (state.principleAmount - (state.principleAmount * (state.discountRate / 100)))
            });
        }
        fnCalcDiscount();
        // eslint-disable-next-line
    }, [state.principleAmount, state.discountRate,]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Discount Calculator  - calculate your discount value | mathcalc</title>
                <meta name="keywords" content="mathcalc, free online discount calculator, discount calculator, free calculator,discount, online calculator" />
                <meta name="description" content="A discount, broadly, refers to some reduction in the going price of an item or asset. In finance and investing, a discount refers to a situation when a security is trading for lower than its fundamental or intrinsic value." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Discount Calculator"
                            links={[{
                                url: "/finance/",
                                urlName: "Finance"
                            }]}
                        />
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        ONLINE DICOUNT CALCULATOR</h1>
                                    <p className="  has-text-grey">
                                        To calculate Final price and the amount you save!</p>
                                </div>
                            </div>
                        </section>
                        <Card raised elevation={1} className="box" >
                            <h2 className={'title is-5'}>
                                Calculate Your discount amount</h2>
                            <p>
                                Discounting is a financial mechanism in which a debtor obtains the right to delay payments to a creditor,
                                for a defined period of time, in exchange for a charge or fee.
                           </p>
                            <br />
                            <div className={classes.formelems} noValidate autoComplete="off">
                                <TextField id="principleAmount" label="Principle Amount" variant="outlined"
                                    value={state.principleAmount}
                                    type={'number'}
                                    onChange={onChangeInput}
                                /><br />
                                <TextField id="discountRate" label="Discount Rate (%)" variant="outlined"
                                    value={state.discountRate}
                                    type={'number'}
                                    onChange={onChangeInput}
                                /><br />
                            </div>
                            <div className={classes.resultDiv}>
                                <Typography component='label' >Final Price : &nbsp; <strong>{state.finalValue}</strong><br /></Typography><br />
                                <Typography component='label' >You Save : &nbsp; <strong>{state.discountValue}</strong><br /></Typography>
                            </div>
                        </Card>

                        <Card className="box" elevation={1}>

                            <h2 className="title is-5">  What Is a Discount?</h2>

                            <p>
                                A discount, broadly, refers to some reduction in the going price of an item or asset. In finance and investing, a discount refers to a situation when a security is trading for lower than its fundamental or intrinsic value.
                                <br />
                                <br />
                                In fixed-income trading, a discount occurs when a bond's price is trading below its par or face value, with the size of the discount equal to the difference between the price paid for a security and its par value. Bonds may trade at a discount for several reasons, including rising interest rates, or due to credit issues or riskiness associated with the underlying company compared to comparable bonds.
                                <br />
                                <br />
                                A discount should not be confused with the discount rate, which is an interest rate used for computing the time value of money.
                            </p>
                            <br />

                            <h2 className="title is-5"> KEY TAKEAWAYS</h2>
                            <ul className={classes.ulElem}>
                                <li> A discount refers to a reduction in price or cost compared to its sticker price or fair value.
    </li>
                                <li>             Bonds trade at a discount when their market is lower than its face (par) value.
    </li>
                                <li>               Bonds may trade at a discount for several reasons, including rising interest rates, or financial distress with the issuer.
    </li>
                                <li>               Discount bonds may thus indicate the belief that the underlying company may default on its debt obligations.
    </li>
                                <li>               Companies may offer cash discounts as incentivizes to customers or to increase demand for their products or services.
             </li>
                            </ul>
                            <br />
                            <h2 className="title is-5">Understanding Bond Discounts</h2>
                            <p>
                                The par value of a bond is most often set at $1,000. The par value is the amount that the issuer will repay to an investor when the debt security matures. If the price of the bond in the market is lower than $1,000 it is said to be trading at a discount. A discount bond may be contrasted with a bond trading at a premium, where the market price is above its face.
                                <br />
                                <br />
                            A bond may trade at a discount for several reasons, and since bond prices and interest rates are inversely correlated, if a bond offers a lower interest (coupon) rate than the prevailing interest rate in the economy it will become less attractive than newly issued bonds with higher coupons, and be discounted accordingly. Put differently, since the issuer is not paying as high of an interest rate to bondholders, these bonds must command a lower price to be competitive, or else no one would buy it.
                            </p>
                            <br />
                            <h2 className="title is-5">Example</h2>
                            <p>For example, if a bond with a par value of $1,000 is currently selling for $990, it is selling at a discount of 1% or $10 ($1000/$990 = 1).
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
