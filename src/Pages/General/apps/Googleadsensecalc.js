import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React, { useState } from "react";
import { Card, Container, Grid, TextField } from '@material-ui/core';
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
            margin: '10px 0px 10px 0px',
        },
    },
}));

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
        return [currenttop - 70];
    }
}
export default function Googleadsensecalc(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        dailyPageImpression: '',
        clickThroughRate: '',
        costPerClick: '',
        isShowResult: false,
        resultData: '',
    });

    const onClickCalculate = (e) => {
        let dailyimpression = state.dailyPageImpression === "" ? 0 : parseFloat(state.dailyPageImpression);
        let clickthroughrate = state.clickThroughRate === "" ? 0 : parseFloat(state.clickThroughRate);
        let costperclick = state.costPerClick === "" ? 0 : parseFloat(state.costPerClick);
        let result = dailyimpression * (clickthroughrate / 100) * costperclick;
        setState({
            ...state,
            resultData: result,
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
    }
    return (
        <React.Fragment>
            <Helmet>
                <title>Google Adsense Calculator Online</title>
                <meta charset="utf-8" />
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="description" content="Google Adsense Calculator is used to calculate daily, monthly and yearly earnings from page impressions , click through rate and cost per click" />
                <meta name="keywords" content="Google Adsense Calculator, adsense calculator, click through rate , page impressions,cost per click" />
            </Helmet>
            <Container maxWidth="xl">
                <Grid container direction="row">
                    <Grid item md={8} lg={8} sm={12}>
                        <SubNavBar
                            pageTitle="Google Adsense Calculator"
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
                                                Google Adsense Calculator</h1>
                                            <p className="has-text-letter-spacing-wide has-text-grey" style={{ fontSize: '1rem', lineHeight: '27px' }}>
                                                Google Adsense Calculator is used to calculate daily,
                                                monthly and yearly earnings from page impressions , click through rate and cost per click
                        </p>
                                        </div>
                                    </div>
                                </section>
                                <Card elevation={1} className="box">
                                    <div className="column">
                                        <div className="columns is-6">
                                            <div className="resultcon" >
                                                {
                                                    state.isShowResult ? <>
                                                        <h4 className="title is-4" style={{ color: 'whitesmoke' }}>
                                                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                                                Google Adsense Result</h1></h4>
                                                        <TableContainer component={Paper}>
                                                            <Table className={classes.table} aria-label="simple table">
                                                                <TableBody>
                                                                    <TableRow key={0}>
                                                                        <TableCell align="right">Daily Earnings</TableCell>
                                                                        <TableCell align="right">{'$ ' + state.resultData}</TableCell>
                                                                        <TableCell align="right">Daily Clicks</TableCell>
                                                                        <TableCell align="right">{state.resultData / state.costPerClick}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow key={1}>
                                                                        <TableCell align="right">Monthly Earnings</TableCell>
                                                                        <TableCell align="right">{'$ ' + state.resultData * 30}</TableCell>
                                                                        <TableCell align="right">Monthly Clicks</TableCell>
                                                                        <TableCell align="right">{state.resultData * 30 / state.costPerClick}</TableCell>
                                                                    </TableRow>
                                                                    <TableRow key={1}>
                                                                        <TableCell align="right">Yearly Earnings</TableCell>
                                                                        <TableCell align="right">{'$ ' + state.resultData * 365}</TableCell>
                                                                        <TableCell align="right">Yearly Clicks</TableCell>
                                                                        <TableCell align="right">{state.resultData * 365 / state.costPerClick}</TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>

                                                    </> : <></>
                                                }
                                            </div>
                                        </div>
                                        <br />
                                        <div className="columns is-6">
                                            <div className="container">
                                                <div className="flex-column">
                                                    <label>Page Impressions</label><br />
                                                    <TextField name="txtEmail"
                                                        onChange={onChangeInput}
                                                        variant="outlined"
                                                        value={state.dailyPageImpression} type="number" id="dailyPageImpression"
                                                        className={classes.formelems} placeholder="Daily Page Impressions" /><br />
                                                    <label>Click Through Rate</label><br />
                                                    <TextField
                                                        onChange={onChangeInput}
                                                        value={state.clickThroughRate} type="number" id="clickThroughRate" variant="outlined"
                                                        className={classes.formelems} placeholder="Click Through Rate (%)" /><br />
                                                    <label>Cost per Click</label>
                                                    <br />
                                                    <TextField
                                                        onChange={onChangeInput}
                                                        value={state.costPerClick} type="number" id="costPerClick" variant="outlined"
                                                        className={classes.formelems} placeholder="Cost per click ($)" /><br />
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
                                <Card className="box" elevation={1} style={{ fontSize: '1rem', lineHeight: '27px' }}>
                                    <div className="col-lg-12">
                                        <h4 className="title is-6 subtext subtitle">  Our AdSense Calculator helps Google AdSense users understand what affects their potential earnings allowing users to experiment with values:
                                 </h4> <br />
                                        <h4 className="title is-6"> Daily Page Impressions</h4>
                                        <p> Use your average, anticipated, or current daily page impressions, which indicates how many times ads are shownper page
                                   </p><br />
                                        <h4 className="title is-6"> Click Through Rate (CTR)</h4>
                                        <p> The CTR represents how many visitorsclick on your advertisements. You can access this information easily on yourGoogle AdSense stats page labeled "CTR." The average rate isestimated to be about 1.5%.
                                  </p><br />
                                        <h4 className="title is-6">Cost Per Click (CPC)</h4>
                                        <p>Your CPC is the average amount paid whensomeone clicks one of your advertisements. To find your average CPC, take theamount of money earned from AdSense (daily, monthly, or all time) and divide itby your total clicks (daily, monthly, or all time).
                                  </p>
                                    </div>
                                </Card>
                                <hr />
                            </div >
                        </div>
                    </Grid >
                    <Grid item md={4} lg={4} sm={12}></Grid>
                </Grid >
            </Container>
        </React.Fragment >
    );
}