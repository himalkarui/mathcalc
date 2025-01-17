import { makeStyles } from '@material-ui/core/styles';
import { Table, Button } from '@material-ui/core';
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
import VerticalAds from '../../../Components/VerticalAds';
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
                <title>Google Adsense Calculator Online | mathcalc</title>
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
                                            <p className="  has-text-grey" style={{ fontSize: '1rem', lineHeight: '27px' }}>
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
                                        <br />
                                        <div className="columns is-6">
                                            <div className="container">
                                                <div className="flex-column">
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} sm={4} md={4} lg={4} >
                                                            <label>Page Impressions</label><br />
                                                            <TextField name="txtEmail"
                                                                onChange={onChangeInput}
                                                                variant="outlined"
                                                                value={state.dailyPageImpression} type="number" id="dailyPageImpression"
                                                                className={classes.formelems} placeholder="Daily Page Impressions" /><br />
                                                        </Grid>
                                                        <Grid item xs={12} sm={4} md={4} lg={4} >
                                                            <label>Click Through Rate</label><br />
                                                            <TextField
                                                                onChange={onChangeInput}
                                                                value={state.clickThroughRate} type="number" id="clickThroughRate" variant="outlined"
                                                                className={classes.formelems} placeholder="Click Through Rate (%)" /><br />
                                                        </Grid>
                                                        <Grid item xs={12} sm={4} md={4} lg={4} >
                                                            <label>Cost per Click</label>
                                                            <br />
                                                            <TextField
                                                                onChange={onChangeInput}
                                                                value={state.costPerClick} type="number" id="costPerClick" variant="outlined"
                                                                className={classes.formelems} placeholder="Cost per click ($)" /><br />
                                                        </Grid>
                                                        <Grid item style={{
                                                            width: '100%',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            display: 'flex'
                                                        }}>
                                                            <Button onClick={onClickCalculate} id="btncheck"
                                                                variant="contained" color='primary'>Calculate</Button>
                                                        </Grid>
                                                    </Grid>

                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                </Card>
                                <hr />
                                <Card className="box" elevation={1}>
                                    <div className="col-lg-12">
                                        <h4 className="title is-4">Our AdSense Calculator helps Google AdSense users understand what affects their potential earnings allowing users to experiment with values:
                                        </h4>
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
                                <Card className="box" elevation={1} >
                                    <h1 className="title is-5">  What is RPM?</h1>

                                    <p>Fundamentally it’s the calculation of how much money you made per 1000 visitors. It’s calculated based on your traffic, CTR (click-through-rate), and CPC (cost per click). The average RPM I’ve experienced with Adsense is about $5 to $10 for broad niches and up to $100 for more competitive niches with high CPC.
                                    </p><br /><p>
                                        If you’re able to know your RPM, you can precisely estimate earnings potentials for superior traffic numbers, as well as the amount of traffic you’ll need to make a full-time income.
                                    </p><br /><p>

                                        For instance, if you’re making an average $10 RPM from one of your websites, that’s $10 for every 1000 visitors on your site.
                                    </p><br /><p>

                                        So you can easily calculate that if you increased your traffic to 100,000 visitors, you would make $1000. If you grew it to 1,000,000 you would make $10,000. Once more, not completely precise, but a first-rate opinion.
                                    </p><br /><p>

                                        This guide today is centered on the requirements to make 10 dollars per day from your existing blog (or even the new blog you are going to start) from Google Adsense. If you currently leverage/earn 6$ from 2000 Page views daily, then your RPM is 3$ (6 x 1000/2000) and if you are making $8 from 1000 page views daily, then your RPM is $6 (6 x 1000/1000). We will be connecting all the statistics/maths in RPM and thrash out how to make 10 dollars daily from Adsense.
                                    </p><br /><p>

                                        The RPM is not entirely the same for all type of blog, for example, Business, technology,Investments, news, entertainment, free stuff, financing and education etc.… blogs will have diverse RPM ( because the CPC and CTR would be different for each blogs).
                                    </p><br /><p>

                                        I would say practically that 3$ RPM is rational and your target should be centered on getting more than that. If you are generating 2 to 3 $ RPM, then you should spend more time to increase the RPM to 6$ or more dollars.
                                    </p><br /><p>

                                        In order to Earn 10 Dollars per Day from Adsense, you need to understand the following vividly;
                                    </p><br /><p>

                                        Let us assume 4$ RPM, you will likely make 4$ from every 1000 Page views generated from your sites daily. To get 10$ daily from Adsense, multiply this by 3 (this will give you 12$, although its $2 higher than $10) to get 10$ round figure per day. This simply implies that, your blog has to generate 3000 page views daily to make 10$ per day from Google Adsense.
                                    </p><br /><p>

                                        Do you think generating 3000 page views per day is a difficult task?…It will look hard for any new bloggers and even for the old bloggers who are under pressure to generate minimal traffic for their blogs.
                                    </p><br /><p>

                                        Let me break down the 3000 Page Views per day technically, so you can clearly understand the direction am coming from.
                                    </p><br /><p>
                                        It’s your decision and it’s up to you to choose which of them suites your status.
                                    </p><br /><p>

                                        At the end we need genuine 3000 page views daily to make 10 dollars per day from Google Adsense assuming the RPM is 3.5$.
                                    </p><br />
                                </Card>
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