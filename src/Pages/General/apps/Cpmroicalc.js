import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useState } from "react";
import { Container, FormControl, Grid, TextField, Tooltip, Card } from '@material-ui/core';
import Helmet from 'react-helmet';
// import js , css and iamges
import '../../../Assets/favicon/css/stylesfavicon.css';
import SubNavBar from '../../../Components/SubNavBar';
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
        monthlyPageImpression: '',
        clickThroughRate: '',
        estimatedAverageCPM: '',
        conversionRate: '',
        averageProfitperConversion: '',
        isShowResult: false,
        MonthlyCPMAdvertisingCost: '',
        NumberofConversionsFromCPMtraffic: '',
        ProjectedProfitFromCPMTraffic: '',
        YourCPMAdvertisingROI: ''
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
        let monthlyPageImpression = state.monthlyPageImpression === "" ? 0 : parseFloat(state.monthlyPageImpression);
        let estimatedAverageCPMCost = state.estimatedAverageCPM === "" ? 0 : parseFloat(state.estimatedAverageCPM);
        let clickThroughRate = state.clickThroughRate === "" ? 0 : parseFloat(state.clickThroughRate);
        let conversionRate = state.conversionRate === "" ? 0 : parseFloat(state.conversionRate);
        let averageProfitperConversion = state.averageProfitperConversion === "" ? 0 : parseFloat(state.averageProfitperConversion);

        let MonthlyCPMAdvertisingCost = (estimatedAverageCPMCost * monthlyPageImpression) / 1000;
        let NumberofConversionsFromCPMtraffic = (monthlyPageImpression * clickThroughRate * conversionRate) / 10000;

        let ProjectedProfitFromCPMTraffic = (NumberofConversionsFromCPMtraffic * averageProfitperConversion)
            - MonthlyCPMAdvertisingCost;
        let YourCPMAdvertisingROI = (100 * ProjectedProfitFromCPMTraffic) / MonthlyCPMAdvertisingCost;

        setState({
            ...state,
            MonthlyCPMAdvertisingCost: MonthlyCPMAdvertisingCost.toFixed(2),
            NumberofConversionsFromCPMtraffic: NumberofConversionsFromCPMtraffic.toFixed(2),
            ProjectedProfitFromCPMTraffic: ProjectedProfitFromCPMTraffic.toFixed(2),
            YourCPMAdvertisingROI: YourCPMAdvertisingROI.toFixed(2),
            isShowResult: true,
        });
        let resultDiv = document.getElementsByClassName('resultcon')[0];
        resultDiv.className = 'resultcon blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultcon';
        }, 1000);
        scrolldiv(resultDiv);
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
                <title>CPM Advertising ROI Calculator | Get the Most ROI from your CPM Campaign</title>
                <meta charset="utf-8" />
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="description" content="This calculator measures your ROI (return on investment) if you are using the CPM (cost per thousand) impressions advertising model (which is common to most banner and button ad campaigns)." />
                <meta name="keywords" content="CPM Advertising calculator,Return of investment calculator,monthly impressions, click throught rate, conversion rate, clicks, cost per clicks, cost per months, cost per click advertisoments" />
            </Helmet>
            <Container maxWidth="xl">
                <Grid >
                    <Grid item md={8} lg={8} sm={12}>
                        <SubNavBar
                            pageTitle="CPM Calculator"
                            links={[{
                                url: "/general/",
                                urlName: "General"
                            }]}
                        />
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        CPM (Cost per thousand Advertising model) Advertising ROI Calculator
                                        </h1>
                                    <p style={{ fontSize: '1rem', lineHeight: '27px' }} className="  has-text-grey">
                                        This calculator measures your ROI (return on investment) if you are using the CPM (cost per thousand)
                                        impressions advertising model (which is common to most banner and button ad campaigns).
                                        </p>
                                </div>
                            </div>
                        </section>
                        <Card elevation={1} className="box">
                            <div className="column">
                                <div className="columns is-6">
                                    <div className="resultcon" style={{ display: state.isShowResult ? 'block' : 'none' }}>
                                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                            Results for: CPM Advertising</h1>
                                        <TableContainer component={Paper}>
                                            <Table className={classes.table} aria-label="simple table">
                                                <TableBody>
                                                    <TableRow key={0}>
                                                        <TableCell align="right">Monthly CPM advertising cost</TableCell>
                                                        <TableCell align="right">{'$ ' + state.MonthlyCPMAdvertisingCost}</TableCell>
                                                    </TableRow>
                                                    <TableRow key={1}>
                                                        <TableCell align="right">Number of conversions from CPM traffic</TableCell>
                                                        <TableCell align="right">{state.NumberofConversionsFromCPMtraffic}</TableCell>
                                                    </TableRow>
                                                    <TableRow key={2}>
                                                        <TableCell align="right">Projected profit from CPM traffic</TableCell>
                                                        <TableCell align="right">{'$ ' + state.ProjectedProfitFromCPMTraffic}</TableCell>
                                                    </TableRow>
                                                    <TableRow key={3}>
                                                        <TableCell align="right">Your CPM advertising ROI</TableCell>
                                                        <TableCell align="right">{state.YourCPMAdvertisingROI + ' %'}</TableCell>
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
                                                <label>Total Monthly Impressions</label>
                                                <Tooltip title="Total monthly impressions from your CPM advertising">
                                                    <TextField
                                                        onChange={onChangeInput}
                                                        variant="outlined"
                                                        value={state.monthlyPageImpression} type="number" id="monthlyPageImpression"
                                                        className={classes.formelems} placeholder="Total monthly impressions from your CPM advertising"
                                                    />
                                                </Tooltip>
                                            </FormControl>
                                            <FormControl>
                                                <label>CPM</label>
                                                <TextField
                                                    onChange={onChangeInput}
                                                    value={state.estimatedAverageCPM} type="number"
                                                    id="estimatedAverageCPM" variant="outlined"
                                                    className={classes.formelems}
                                                    placeholder="Estimated average CPM ($)" /><br />
                                            </FormControl>
                                            <FormControl>
                                                <label>Clicks Through Rate</label>
                                                <TextField
                                                    onChange={onChangeInput}
                                                    value={state.clickThroughRate} type="number" id="clickThroughRate" variant="outlined"
                                                    className={classes.formelems} placeholder="Click Through rate (%)" />
                                            </FormControl>
                                            <FormControl>
                                                <label>Conversion Rate</label>
                                                <TextField
                                                    onChange={onChangeInput}
                                                    value={state.conversionRate} type="number" id="conversionRate" variant="outlined"
                                                    className={classes.formelems} placeholder="Conversion Rate($)" /><br />
                                            </FormControl>
                                            <FormControl>
                                                <label>Profit</label>
                                                <TextField
                                                    onChange={onChangeInput}
                                                    value={state.averageProfitperConversion} type="number" id="averageProfitperConversion" variant="outlined"
                                                    className={classes.formelems}
                                                    placeholder="Average profit per conversion ($)" /><br />
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
                        <br />
                        <Card elevation={1} raised className="box">
                            <div className="col-lg-12">
                                <h4 className="title is-6 subtext subtitle">
                                    This calculator measures your ROI (return on investment) if you are using the CPM (cost per thousand)
                                        impressions advertising model (which is common to most banner and button ad campaigns).</h4>
                                <br />
                                <h4 className="title is-6">Total monthly impressions from your CPM advertising</h4>
                                <p> This section of this CPM calculator tool lets you put in last month's number to calculate last month's ROI. You can also project next month's number to calculate next month's potential ROI
                              </p><br />
                                <h4 className="title is-6">Estimated average CPM</h4>
                                <p> Here you can put in last month's number to calculate last month's ROI. You can also project next month's number to calculate next month's potential ROI.</p>
                                <br />
                                <h4 className="title is-6"> Click-through rate</h4>
                                <p> Your click-through rate is the percentage of actual click-throughs per number of impressions. For example, if you pay for 5,000 impressions and get 50 click-throughs, your click-through rate would be 1%. Enter a percent number, not a fraction. For instance, for 10% enter 10, not 0.10.</p>
                                <br />
                                <h4 className="title is-6">Conversion Rate</h4>
                                <p> Your conversion rate is the percentage of visitors who come to your site from a banner or button and convert into customers, for instance, by making a purchase. Conversion rates vary by company, but an average conversion rate you can use as a test would be 2-3%. Enter a percent number, not a fraction. For instance, for 10% enter 10, not 0.10.</p>
                                <br />
                                <h4 className="title is-6">Average profit per conversion</h4>
                                <p> Profit refers to the amount of money you earn from a sale. For example, if you sell a software package for $100 and it only cost you $10, your profit is $90. In order for our advertising ROI calculator to work efficiently, you must supply this number from your own records by estimating the average amount of profit you make from each conversion.</p>
                            </div>
                        </Card>
                        <hr />
                    </Grid >
                    <Grid item md={4} lg={4} sm={12}></Grid>
                </Grid >
            </Container>
        </React.Fragment >
    );
}