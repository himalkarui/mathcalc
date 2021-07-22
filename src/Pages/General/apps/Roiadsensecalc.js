import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useState } from "react";
import { Card, Container, FormControl, Grid, TextField } from '@material-ui/core';
import Helmet from 'react-helmet';
// import js , css and iamges
import '../../../Assets/favicon/css/stylesfavicon.css';
import SubNavBar from '../../../Components/SubNavBar';
import VerticalAds from '../../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    table: {
        backgroundColor: '#fafafa',
    },
    formelems: {
        '& > *': {
            margin: '10px 10px 10px 0px',
            minWidth: '300px',
        },
    },
}));

export default function Roiadsensecalc(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        dailyPageImpression: '',
        clickThroughRate: '',
        costPerClick: '',
        averageProfit: '',
        isShowResult: false,
        noOfConversion: '',
        monthlyCost: '',
        projectedProfit: '',
        returnOnInvestmentPercentage: '',
    });

    function scrolldiv(div) {
        window.scroll(0,
            findPosition(div));
    }
    function findPosition(obj) {
        var currenttop = 0;
        if (obj.offsetParent) {
            do {
                currenttop += obj.offsetTop;
            } while ((obj = obj.offsetParent));
            return [currenttop];
        }
    }
    const onClickCalculate = (e) => {
        let dailyimpression = state.dailyPageImpression === "" ? 0 : parseFloat(state.dailyPageImpression);
        let clickthroughrate = state.clickThroughRate === "" ? 0 : parseFloat(state.clickThroughRate);
        let costperclick = state.costPerClick === "" ? 0 : parseFloat(state.costPerClick);
        let averageProfit = state.averageProfit === "" ? 0 : parseFloat(state.averageProfit);

        let noOfConversion = dailyimpression * (clickthroughrate / 100);
        let monthlyCost = dailyimpression * costperclick;
        let projectedProfit = (noOfConversion * averageProfit) - monthlyCost;

        let returnOnInvestmentPercentage = (projectedProfit / monthlyCost) * 100;

        setState({
            ...state,
            noOfConversion: Math.round(noOfConversion),
            monthlyCost: monthlyCost,
            projectedProfit: projectedProfit,
            returnOnInvestmentPercentage: isNaN(returnOnInvestmentPercentage) ? 0 : returnOnInvestmentPercentage.toFixed(2),
            isShowResult: true,
        });
        let resultDiv = document.getElementsByClassName('resultcon')[0];
        resultDiv.className = 'resultcon blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultcon';
        }, 1000);
        scrolldiv(resultDiv)
    }
    const onChangeInput = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
            isShowResult: false,
        })
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Return on Invest(ROI) cost per click calculator online | mathcalc</title>
                <meta charset="utf-8" />
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="description" content=" Google Ads The ROI (Return  on Investment) Calculator Tool can be used to measure the ROI of CPC (cost per click) advertising.    " />
                <meta name="keywords" content="Google Adsense Calculator, adsense calculator, click through rate , page impressions,cost per click" />
            </Helmet>
            <Container maxWidth="xl">
                <Grid >
                    <Grid item md={8} lg={8} sm={12}>
                        <SubNavBar
                            pageTitle="ROI Calculator"
                            links={[{
                                url: "/general/",
                                urlName: "General"
                            }]}
                        />
                        <div data-server-rendered="true" className="layout" data-v-14591542>
                            <div className="container-fluid">
                                <section className="hero" data-v-23847e07>
                                    <div style={{ padding: '2rem 0.5rem' }}>
                                        <div className="container">
                                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                                Google Ads Return on Invest(ROI) Cost per Click Calculator</h1>
                                            <p style={{ fontSize: '1rem', lineHeight: '27px' }} className="  has-text-grey">
                                                Google Ads The ROI (Return  on Investment) Calculator Tool can be used to measure
                                                the ROI of CPC (cost per click) advertising.                       </p>
                                        </div>
                                    </div>
                                </section>
                                <Card elevation={1} className="box">
                                    <div className="column">
                                        <div className="columns is-6">
                                            <div className="resultcon" style={{ display: state.isShowResult ? 'block' : 'none' }} >
                                                <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                                    Google Ads Results for: ROI</h1>
                                                <TableContainer component={Paper}>
                                                    <Table className={classes.table} aria-label="simple table">
                                                        <TableBody>
                                                            <TableRow key={0}>
                                                                <TableCell align="right">Monthly Cost</TableCell>
                                                                <TableCell align="right">{'$ ' + state.monthlyCost}</TableCell>
                                                            </TableRow>
                                                            <TableRow key={1}>
                                                                <TableCell align="right">Number of Conversions</TableCell>
                                                                <TableCell align="right">{state.noOfConversion}</TableCell>
                                                            </TableRow>
                                                            <TableRow key={2}>
                                                                <TableCell align="right">Projected profit from Click through traffic</TableCell>
                                                                <TableCell align="right">{'$ ' + state.projectedProfit}</TableCell>
                                                            </TableRow>
                                                            <TableRow key={3}>
                                                                <TableCell align="right">ROI </TableCell>
                                                                <TableCell align="right">{state.returnOnInvestmentPercentage + ' %'}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="columns is-6">
                                            <div className="container">
                                                <div className="flex-column">
                                                    <FormControl>
                                                        <label>Total Clicks</label>
                                                        <TextField
                                                            onChange={onChangeInput}
                                                            variant="outlined"
                                                            value={state.dailyPageImpression} type="number" id="dailyPageImpression"
                                                            className={classes.formelems} placeholder="Total monthly clicks from publisher" />
                                                    </FormControl>
                                                    <FormControl>
                                                        <label>Cost Per Click (CPC)</label>
                                                        <TextField
                                                            onChange={onChangeInput}
                                                            value={state.costPerClick} type="number" id="costPerClick" variant="outlined"
                                                            className={classes.formelems} placeholder="Estimated average cost-per-click ($)" /><br />
                                                    </FormControl>
                                                    <FormControl>
                                                        <label>Rate</label>
                                                        <TextField
                                                            onChange={onChangeInput}
                                                            value={state.clickThroughRate} type="number" id="clickThroughRate" variant="outlined"
                                                            className={classes.formelems} placeholder="Conversion rate (%)" />
                                                    </FormControl>
                                                    <FormControl>
                                                        <label>Profit</label>
                                                        <TextField
                                                            onChange={onChangeInput}
                                                            value={state.averageProfit} type="number" id="averageProfit" variant="outlined"
                                                            className={classes.formelems} placeholder="Average profit per conversion ($)" /><br />
                                                    </FormControl>
                                                    <div style={{ margin: '1rem 0px' }}>
                                                        <button onClick={onClickCalculate} id="btncheck" className="button is-info">Calculate</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                </Card>
                                <hr />
                                <Card elevation={1} className="box">
                                    <div className="col-lg-12">
                                        <h4 className="title is-6 subtext subtitle">
                                            The ROI (Return  on Investment) Calculator Tool can be used to measure
                                            the ROI of CPC (cost per click) advertising
                                        </h4> <br />
                                        <h4 className="title is-6">
                                            Monthly Clicks Total From Publisher</h4>
                                        <p>
                                            Each month you will receive a Client Activity Report email from your advertising publisher. Use the number located in this email to calculate your ROI for the last month. You will also have the ability to predict the potential ROI for the next month.
                                        </p>
                                        <br />
                                        <h4 className="title is-6">Average Estimated CPC</h4>
                                        <p>
                                            CPC is simply the amount of money that you pay to the advertisement published for each time a user clicks on one of your listings. This number can also be obtained from the Client Activity Report email that you receive each month.
                                        </p>
                                        <br />
                                        <h4 className="title is-6">Conversion Rates</h4>
                                        <p>The percentage of users that come to your site from the ad publisher and are converted into customers is referred to as the conversion rate. This number must be obtained from your personal records and will not be found in the Client Activity Report email. Conversion rates will always vary greatly depending on the company but if you want to test an average rate, you can use 2-3%. Be sure to enter a percent number as opposed to a fraction. For example, for 5% enter 5, not 0.05.
                                        </p>
                                        <br />
                                        <h4 className="title is-6">Profit Average Per Conversion</h4>
                                        <p>The amount of money earned from a sale is referred to as profit. For instance, if you sell your product for $80 but it only cost you $20, then your profit would be $60. Using your own records, you will need to estimate the average profit you make from each conversion.
                                        </p>
                                    </div>
                                </Card>
                                <hr />
                            </div >
                        </div>
                    </Grid >
                    <Grid item md={4} lg={4} sm={12}>
                        <VerticalAds />
                    </Grid>
                </Grid >
            </Container>
        </React.Fragment >
    );
}