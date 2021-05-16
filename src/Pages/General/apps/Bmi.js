import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, CardContent, Collapse
    , Avatar, Button, Typography, Container, Backdrop, CircularProgress, TextField
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Alert from '@material-ui/lab/Alert';
import CaculateIcon from '@material-ui/icons/SendOutlined';
import TrendingUp from '@material-ui/icons/TrendingUpOutlined';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

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
                <title>Body Mass Index (BMI) calculator || Calculate your Body Mass Index - MathCalc</title>
                <meta name="keywords" content="One stop tool for doing all kind of mathamatical calculations" />
                <meta name="description"
                    content="mathcalc is the all in one web app for all kind of mathamatical calculations in all fields of science like physics ,chemistry ,mathamatics, quantum physics and a lot " />
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>
                                BMI Calculator
                            </div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'} >
                                    Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.

                                    Enter your weight and height using standard measures.
                                    Select "Compute BMI" and your BMI will appear below.
                        </p>
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
                                    >Compute BMI</Button>
                                </Grid>
                            </CardContent>
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                <CardContent>
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
                                    <div className='div-card' style={{ backgroundColor: '#e5a400', width: '100%' }}>
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

                                    <Typography paragraph className='my-4 header-left' ><strong>Who shouldn't use a BMI calculator</strong></Typography>
                                    <p className={'text-muted header-left'} >  BMI is not used for muscle builders, long distance athletes, pregnant women, the elderly or young children. This is because BMI does not take into account whether the weight is carried as muscle or fat, just the number. Those with a higher muscle mass, such as athletes, may have a high BMI but not be at greater health risk. Those with a lower muscle mass, such as children who have not completed their growth or the elderly who may be losing some muscle mass may have a lower BMI.
                                    During pregnancy and lactation, a woman's body composition changes, so using BMI is not appropriate.
                    </p>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
