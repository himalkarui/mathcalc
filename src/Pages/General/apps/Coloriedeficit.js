import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import clsx from 'clsx';
import {
    Grid, Radio, FormControl, RadioGroup, FormControlLabel, Card, Backdrop, CircularProgress, Container
} from '@material-ui/core';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import SubNavBar from '../../../Components/SubNavBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, rgb(0 85 255) 0%, #1962BF 100%) 0% 0% no-repeat padding-box",
        fontSize: 15,
        color: "white",
        marginTop: 14,
        padding: '26px',
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

export default function Coloriedeficit() {

    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);

    const [state, setState] = useState({

    });

    const onCalculateClick = (e) => {
    }

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };
    const onInputChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }

    const onInputminsecChange = (e) => {
        if (e.target.value <= 59)
            setState({
                ...state,
                [e.target.id]: e.target.value,
            })
    }

    const onInputHourChange = (e) => {
        if (e.target.value <= 23)
            setState({
                ...state,
                [e.target.id]: e.target.value,
            })
    }

    useEffect(() => {
        onCalculateClick();
        // eslint-disable-next-line
    }, [state.startDay, state.startHour, state.startMinute, state.startSec, state.opDay
        , state.opHour, state.opMinute, state.opSec, state.operation])

    const [backDropopen, SetBackDropopen] = React.useState(false);
    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Backdrop className={classes.backdrop} open={backDropopen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Calorie deficit calculator - mathcalc</title>
                <meta name="keywords" content="mathcalc,time calculator, online time calculator, online free time calculator, time" />
                <meta name="description" content="Time calculator can be used to add or subtract two time values." />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <div className={classes.root}>
                    <Grid container>
                        <Grid item lg={8} md={8} sm={12}>
                            <SubNavBar
                                pageTitle="Calorie Deficit Calculator"
                                links={[{
                                    url: "/general/",
                                    urlName: "General"
                                }]}
                            />
                            <section className="hero" data-v-23847e07>
                                <div style={{ padding: '2rem 0.5rem' }}>
                                    <div className="container">
                                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                            Calorie Deficit CALCULATOR</h1>
                                        <p style={{ lineHeight: '27px' }} className="has-text-letter-spacing-wide has-text-grey subtitle is-6">
                                            Estimating the calories you are consuming in your food and beverages and factoring
                                        in what you burn through activity are the two key elements to calculate your goal calorie deficit.   </p>
                                    </div>
                                </div>
                            </section>

                            <Card raised className="box" elevation={1}>
                            </Card>
                            <br />
                            <Card raised className="box" elevation={1}>
                                <h2 className="title is-4">What are Calories?</h2>
                                <p>
                                    Calories are simply a measure of heat, or energy. Technically, 1 calorie is the amount of heat it takes to raise the temperature of one gram of water by one degree Celsius. To our bodies, calories are the way we exchange energy. Food contains the energy that we put in our bodies, and exercise is the way that we expend or burn energy. When our body stores energy, it is typically in the form of body fat.
                               </p>
                                <br />
                                <br />

                                <h2 className="title is-4">  What is a Calorie Deficit?</h2>

                                <p> A calorie deficit is when you are consuming fewer calories than you are burning over time. For example, if you burn 2000 calories a day but only consume 1500, you’ll be in a 500 calorie deficit. Another example of a calorie deficit is consuming 2000 calories for a day but burning 2500.
                               </p>
                                <br />
                                <p>
                                    Based on your diet and exercise, you can achieve a deficit in two ways – eating less or exercising more – or more often, a combination of both.
                                </p>
                                <br />
                                <p>  Find out the calorie content of daily foods with our calories chart below.
                                </p>
                                <br />
                                <br />
                                <h2 className="title is-4"> How is a Calorie Deficit important for weight loss?</h2>

                                <p>   Calorie deficits are the single most important factor for weight loss. No matter what the latest diet trend is, the common factor among successful weight loss plans is a calorie deficit. Whether you cut carbs, fat or fast intermittently – they usually all result in a calorie deficit to see weight loss.
                                </p>
                                <br />
                                <p>  1 kilo of body fat contains about 7,700 calories, and losing weight at about 0.5-1 kilo per week has been shown to be safe and sustainable.
                                </p>
                                <br />
                                <br />
                                <h2 className="title is-4"> How to Calculate a Calorie Deficit | 3 Steps</h2>
                                <h2 className="title is-5"> 1. Calculate your daily maintenance calorie intake</h2>
                                <p>To calculate your daily maintenance calorie intake, or the calories you’d eat to stay at the same weight, grab a calculator – and your most recent weight and height in kilos and cm. We’ll start by calculating your basal metabolic rate, or BMR, using the Mifflin St. Jeor equation, one of several options – but is commonly researched and regarded as a good estimate.
                                </p>
                                <br />
                                <br />
                                <strong>   Men: BMR = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) + 5</strong>
                                <br />
                                <br />
                                <strong>   Women: BMR = 10 x weight (kg) + 6.25 x height (cm) – 5 x age (years) – 161</strong>
                                <br />
                                <br />
                                <p>   This basal metabolic rate is the number of calories your body burns at rest – if you did nothing but lay in bed all day.
                                </p>
                                <br />
                                <p> Next, we have to account for the level of activity in your life. Multiply the BMR you calculate above by an activity factor in this table.
                                </p>

                                <p> If you are between two levels, choose a number in the middle.
                                </p>
                                <br />

                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead style={{ backgroundColor: '#dbdbdb' }}>
                                            <TableRow style={{ backgroundColor: '#dbdbdb' }}>
                                                <TableCell>Physical Activity Level</TableCell>
                                                <TableCell>Physical Activity Ratio</TableCell>
                                                <TableCell>Description</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>
                                                    Sedentary
                                                </TableCell>
                                                <TableCell>
                                                    1.55
                                                </TableCell>
                                                <TableCell>
                                                    Sitting most of the day with no structured exercise
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Moderately active
                                                </TableCell>
                                                <TableCell>
                                                    1.85
                                                </TableCell>
                                                <TableCell>
                                                    • Sedentary or low active job with 1 hr exercise daily
                                                    <br />
                                                    • Active job (moderate movement 8+ hrs per day) but no structured exercise
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Vigorously active
                                                </TableCell>
                                                <TableCell>
                                                    2.2
                                                </TableCell>
                                                <TableCell>
                                                    • Active job (moderate movement 8+ hours per day) and 1 hr exercise per day
                                                    <br />
                                                    • Sedentary or low active job but 2 hours of exercise daily
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>
                                                    Extremely active
                                                </TableCell>
                                                <TableCell>
                                                    2.4
                                                </TableCell>
                                                <TableCell>
                                                    • Training more than 2 hrs per day
                                                    <br />
                                                    • Moderately active job (walking all day) plus at least 1 hr of exercise daily
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <br />

                                <h2 className="title is-4">  Multiply your BMR x Activity Factor = Maintenance Calories
                                </h2>
                                <br />

                                <h2 className="title is-5">     2. Adjust your calorie intake for weight loss</h2>

                                <p>Once you know your maintenance calories, for example let’s say 2500, we can calculate the calorie intake level needed for weight loss.
                               </p>
                                <br />
                                <p>Remembering that 1 kilo of body fat is about 7,700 calories and we want to aim for 0.5-1 kilo of weight loss per week:
                                </p>
                                <br />
                                <p><strong>400 calorie deficit per day = 2,800 calorie deficit per week</strong> </p>
                                <br />
                                <p><strong>    600 calorie deficit per day = 3,200 calorie deficit per week</strong> </p>
                                <br />
                                <p>   These calorie deficits come from a combination of eating less and burning more. If you have a strictly healthy diet and aren’t sure where to cut calories, you might have to exercise a little bit harder.
                                </p>
                                <br />
                                <p>  If you know you can reduce your portions and cut back on carbs or fats in your diet, you can focus on a greater calorie deficit from your food. Keeping track of the calories you eat by measuring and weighing your portions is crucial for these calculations.
                                </p>
                                <br />
                                <h2 className="title is-5">    3. Adjust for physical activity</h2>
                                <p>
                                    Changing your diet is just part of the calorie deficit – you also have to factor in your exercise. When you eat, those calories go in the “plus” calories column for the day, while exercise is where you subtract your calories. For weight loss, we want your daily net calories to be about 500 calories lower than your BMR.
                                </p>
                                <br />
                                <p>
                                    <strong>  Food Calories – Exercise Calories = Net Calories</strong>
                                </p>
                                <br />
                                <p>
                                    Calculating exactly how many calories your burn during exercise is tricky, because it is not an exact science. The best way to estimate calorie burn is with a device that measures your heart rate and adjusts for your age, weight, and activity level.
                                </p>
                                <p>
                                    There are equations where you can calculate this manually, but it can be cumbersome. You can also reference a calorie burn chart to estimate your exercise calories.
                                </p>
                                <br />
                                <h2 className="title is-5"> Take Home Message</h2>
                                <p> While calculating a calorie deficit is based on science, it is not always straightforward. You have to examine your habits – both in the kitchen and gym – and decide where you can make sustainable changes to have long term success for fat loss. Keep in mind that your goals should be realistic and recognize that weight loss takes time.
                               </p>
                            </Card>
                            <br />
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}></Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
