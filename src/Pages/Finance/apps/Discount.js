import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, Typography } from '@material-ui/core';
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
                <title>Discount Calculator  - calculate your discount value || MathCalc.xyz</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <SubNavBar />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>
                                Calculate Your discount amount</div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'} >
                                    Discounting is a financial mechanism in which a debtor obtains the right to delay payments to a creditor,
                                    for a defined period of time, in exchange for a charge or fee.
                           </p>
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
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
