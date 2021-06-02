import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, Collapse
    , Avatar, Button, Typography, Container, Backdrop, CircularProgress, TextField
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Alert from '@material-ui/lab/Alert';
import CaculateIcon from '@material-ui/icons/SendOutlined';
import TrendingUp from '@material-ui/icons/TrendingUpOutlined';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import SubNavBar from '../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '99%',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        height: 40,
        minWidth: "243px !important",
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
    }
}));


export default function Bmi() {

    const classes = useStyles();
    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);

    const [state, setState] = React.useState({
        weight: '',
        height: '',
        bmi: 0,
        seviority: '',
        message: '',
        showResult: false,
    });

    const onSubmitClick = (e) => {

        if (state.height.length === 0) {
            setSnakOpen(true);
            setSnakMessage('Enter height value !');
        } else if (state.weight.length === 0) {
            setSnakOpen(true);
            setSnakMessage('Enter weight value !');
        } else {
            let fltbmi = ((state.weight * 10000) / (state.height * state.height)).toPrecision(4);
            setState({
                ...state,
                bmi: fltbmi,
                showResult: 'true',
                message: fltbmi < 18.5 ? 'You are Under weight' : (
                    fltbmi >= 18.5 && fltbmi <= 24.9 ? 'You are normal weight' : (
                        fltbmi >= 2.5 && fltbmi <= 29.9 ? 'You are over weight' : 'oh !. You have obesity problem.'
                    )
                ),
                seviority: fltbmi < 18.5 ? 'info' : (
                    fltbmi >= 18.5 && fltbmi <= 24.9 ? 'success' : (
                        fltbmi >= 2.5 && fltbmi <= 29.9 ? 'warning' : 'error'
                    )
                ),
            })
            SetBackDropopen(true);
            setTimeout(() => {
                SetBackDropopen(false);
            }, 250);
        }
    };

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

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
                <title>Body Mass Index (BMI) Calculator || Calculate your Body Mass Index - mathcalc</title>
                <meta name="keywords" content="bmi, mathamatical calculations, mathcalc, bmi calculator, online free bmi calculator, free calculator" />
                <meta name="description"
                    content=" Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women."></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid>
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="BMI Calculator"
                            links={[{
                                url: "/general/",
                                urlName: "General"
                            }]}
                        />
                        <br />
                        <Card raised elevation={1} className="box" >
                            <h2 className={'title is-5'}>
                                BMI Calculator
                            </h2>
                            <p>
                                Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.

                                Enter your weight and height using standard measures.
                                Select "Calculate BMI" and your BMI will appear below.
                        </p>
                            <br />
                            <Grid container justify="space-around">
                                <TextField id="outlined-basic" style={{ display: 'none' }}
                                    label="Outlined" variant="outlined" type={'number'} />
                                <TextField
                                    label="Height in cm"
                                    id="height"
                                    className={'gridItem'}
                                    variant="outlined"
                                    value={state.height}
                                    maxLength={'7'}
                                    type={'number'}
                                    onChange={(e) => {
                                        if (!isNaN(e.target.value) && e.currentTarget.value.length < 7) {
                                            setSnakOpen(null);
                                            setSnakMessage(null);
                                            setState({
                                                ...state, height: e.target.value
                                            });
                                        } else {
                                            setSnakOpen(null);
                                            setSnakMessage(null);
                                            return
                                        }
                                    }}
                                />
                                <TextField
                                    label="Weight in kgs"
                                    id="weight"
                                    className={'gridItem'}
                                    variant="outlined"
                                    value={state.weight}
                                    maxLength={'7'}
                                    type={'number'}
                                    onChange={(e) => {
                                        if (!isNaN(e.target.value) && e.currentTarget.value.length < 7) {
                                            setSnakOpen(null);
                                            setSnakMessage(null);
                                            setState({
                                                ...state, weight: e.target.value
                                            });
                                        } else {
                                            setSnakOpen(null);
                                            setSnakMessage(null);
                                            return
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="white"
                                    className={classes.button + ' gridItem'}
                                    startIcon={<CaculateIcon />}
                                    onClick={() => { onSubmitClick() }}
                                >Calculate BMI</Button>
                            </Grid>
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                <br />
                                <div className='div-card' style={{
                                    display: state.showResult ? 'block' : 'none', border: '0px',
                                    background: 'linear-gradient(to right, rgba(49,207,171,0.5), #50e3c2)',
                                    transition: 'all 250ms ease-out',
                                    transitionDelay: '50ms',
                                    marginBottom: '1rem'
                                }}>
                                    <Typography paragraph className='my-4 header-left' ><strong>Result:
                                                              </strong> &nbsp; Your BMI is {state.bmi}
                                    </Typography>
                                    <Alert elevation={6} variant="filled" severity={state.seviority}>
                                        {state.message}
                                    </Alert>
                                </div>
                                <br />
                                <div style={{ backgroundColor: '#e5a400', width: '100%', padding: '1rem', borderRadius: '4px' }}>
                                    <Typography variant="h6" style={{ fontWeight: '800', fontSize: '1.5rem' }}>
                                        BMI Categories
                                </Typography>
                                    <div style={{ color: 'white' }} >
                                        <List >
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.avatar}>
                                                        <TrendingUp />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Underweight <= 18.5"
                                                />
                                            </ListItem>  <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.avatar}>
                                                        <TrendingUp />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary="Normal weight = 18.5–24.9"
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.avatar}>
                                                        <TrendingUp />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary=" Overweight = 25–29.9
                                                Obesity = BMI of 30 or greater"
                                                />
                                            </ListItem>
                                        </List>
                                    </div>
                                </div>
                                <br />
                                <Typography paragraph className='my-4 header-left' ><strong>Who shouldn't use a BMI calculator</strong></Typography>
                                <p className={'header-left'} >  BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children. This is because BMI does not take into account whether the weight is carried as muscle or fat, just the number. Those with a higher muscle mass, such as athletes, may have a high BMI but not be at greater health risk. Those with a lower muscle mass, such as children who have not completed their growth or the elderly who may be losing some muscle mass may have a lower BMI.
                                During pregnancy and lactation, a woman's body composition changes, so using BMI is not appropriate.
                    </p>
                            </Collapse>
                        </Card>
                        <br />
                        <Card elevation={1} className="box" >
                            <h2 className="title is-4">
                                FREQUENTLY ASKED QUESTIONS (FAQs)</h2>

                            <h2 className="title is-5">How to use BMI calculator?</h2>

                            <p> To calculate your BMI, follow these steps:</p>
                            <p> Enter your weight in kilograms.</p>
                            <p> Enter your height in centimeters.</p>
                            <p> Press calculate.</p>
                            <p> If you want to calculate again, simply press re-calculate.</p>
                            <br />

                            <h2 className="title is-5"> How is BMI calculated?</h2>

                            <p>  BMI is calculated by dividing a person’s weight in kilograms by the square of his/her height in meters.
                                <br /> For example, if your weight is 60 kilograms and your height is 5 feet 3 inches, your BMI will be calculated as follows:60 / 2.61 (1.6 * 1.6) (5 feet 3 inches is approximately 1.6 meters)This gives us a BMI reading at 22.9.
                          </p>
                            <br />
                            <h2 className="title is-5"> Why is BMI calculation important for your health?</h2>

                            <p>    The National Institute of Health (NIH) has now defined BMI to be the deciding parameter to know if you are underweight, normal weight, overweight or obese.
                                <br />
                                <br />
                                If you do not fall in the category of normal weight, your health is at risk.
                                <br /> Let’s say your BMI is 17.5. This means that you are underweight. Being underweight makes you more prone to diseases because it signifies that your body’s immunity is weak. You can even get osteoporosis in later stages of life or be anaemic.
                                <br />
                                <br />
                                 However, if you are overweight, obese or severely obese, your chances of developing various diseases increase with the increase in your BMI number. You get more prone to diseases such as high blood pressure, type 2 diabetes, high cholesterol, coronary artery disease, stroke, among many others.
                        </p>
                            <br />
                            <h2 className="title is-5">What is the average BMI value for children and adults?</h2>
                            <p>In children, BMI is calculated in the same way as adults but the healthy and unhealthy ranges are determined in a different way. We do not have fixed values to determine healthy and at-risk thresholds in children.
                            <br />
                                <br />

                                Children’s BMI values are compared with other children of the same age and sex and a percentile is calculated.If the BMI value is below the 5th percentile for children, they are considered underweight. If the BMI value is over 95th percentile value, they are considered obese. A value within 85th and 95th percentile is considered overweight and from 5th to 85th percentile, the value is considered as normal.
                            </p>
                            <br />
                            <h2 className="title is-5">
                                When to see a doctor?</h2>
                            <p>
                                Ideally, if your BMI belongs to any category other than normal, you should get yourself tested every once in six months or a year at the maximum.
                                <br />
                                <br />
                                 However, the farther your BMI is from the normal range, that is 18.5 to 25, the more risk you are at. If you are severely underweight or even at the beginning threshold of obesity, you must see a doctor immediately. For the rest of the readings, it is difficult to tell the exact condition of your health because of the limiting extent of a BMI number. The above value only gives you an estimate that applies to everyone. They are non-personal and should not replace medical advice in any situation.
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
