import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, CardContent, FormControl, InputLabel, MenuItem,
    Typography, Container, TextField, Select
} from '@material-ui/core';
import SubNavBar from '../../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '99%',
        backgroundColor: 'white'
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
    circle_input: {
        minHeight: '240px',
        minWidth: '240px',
        borderRadius: '50%',
        border: '1px solid brown',
    },
    radius_field: {
        marginTop: '25%',
        marginLeft: '50%',
        overflow: 'hidden'
    },
    formControl: {
        display: 'inherit',
        marginTop: '2rem'
    }
}));


export default function Circle() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        radius: '0',
        diameter: '0',
        area: '0',
        circumference: '0',
        commonval: '0',
        metrics: 0,
    });

    const onChangeRadius = (e) => {
        let rad = parseFloat(e.target.value === '' ? 0 : e.target.value)
        setState({
            ...state,
            radius: e.target.value,
            diameter: (2 * rad).toFixed(3),
            area: (Math.PI * Math.pow(rad, 2)).toFixed(3),
            circumference: (2 * Math.PI * rad).toFixed(3),
            metrics: 0,
            commonval: rad
        });
    }

    const onChangeMetrics = (metric, comval) => {
        let rad;
        let cval;
        if (comval || comval === "") {
            cval = comval;
        } else {
            cval = parseFloat(state.commonval === '' ? 0 : state.commonval);
        }
        switch (metric) {
            case 0:
                setState({
                    ...state,
                    radius: cval,
                    diameter: (2 * cval).toFixed(3),
                    area: (Math.PI * Math.pow(cval, 2)).toFixed(3),
                    circumference: (2 * Math.PI * cval).toFixed(3),
                    commonval: cval,
                    metrics: 0
                });
                break;
            case 1:
                setState({
                    ...state,
                    radius: parseFloat(cval / 2).toFixed(3),
                    diameter: (cval).toFixed(3),
                    area: (Math.PI * Math.pow((cval / 2), 2)).toFixed(3),
                    circumference: (2 * Math.PI * (cval / 2)).toFixed(3),
                    commonval: cval,
                    metrics: 1
                });
                break;
            case 2:
                rad = parseFloat(Math.sqrt(cval / Math.PI)).toFixed(3);
                setState({
                    ...state,
                    radius: rad,
                    diameter: (2 * rad).toFixed(3),
                    area: cval,
                    circumference: parseFloat(2 * Math.PI * rad).toFixed(3),
                    commonval: cval,
                    metrics: 2
                });
                break;
            case 3:
                rad = parseFloat(cval / (2 * Math.PI)).toFixed(3);
                setState({
                    ...state,
                    radius: rad,
                    diameter: (2 * rad).toFixed(3),
                    area: (Math.PI * Math.pow(rad, 2)).toFixed(3),
                    circumference: cval,
                    commonval: cval,
                    metrics: 3
                });
                break;
            default:
                break;
        }
    }

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Circle calculator || Calculate diameter, Area and circumference of a circle || MathCalc.xyz</title>
                <meta name="keywords" content="One stop tool for doing all kind of mathamatical calculations" />
                <meta name="description"
                    content="mathcalc is the all in one web app for all kind of mathamatical calculations in all fields of science like physics ,chemistry ,mathamatics, quantum physics and a lot " />
            </Helmet>
            <SubNavBar />
            <Container maxWidth={'xl'}  >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>Circle Calculator</div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'} >
                                    Circle is a particular shape and defined as the set of points in a plane placed at equal
                                    distance from a single point called the center of the circle
                        </p>
                                <Grid container justify="space-around">
                                    <Grid item>
                                        <div className={classes.circle_input}>
                                            <TextField id="radius" className={classes.radius_field}
                                                value={state.radius} label="Enter Radius" variant="standard"
                                                onChange={onChangeRadius} />
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                            <InputLabel id="metrics">Calculate For</InputLabel>
                                            <Select
                                                labelId="metrics-label"
                                                id="metrics-outlined"
                                                label="Calculate For" style={{ width: '100%', marginBottom: '2rem' }}
                                                onChange={(e) => { onChangeMetrics(e.target.value) }}
                                                value={state.metrics}
                                            >
                                                <MenuItem value={0}>Radius</MenuItem>
                                                <MenuItem value={1}>Diameter</MenuItem>
                                                <MenuItem value={2}>Area</MenuItem>
                                                <MenuItem value={3}>Circumference</MenuItem>
                                            </Select>
                                            <TextField id="comonval" type={'number'}
                                                style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                                value={state.commonval} variant="outlined"
                                                onChange={(e) => { onChangeMetrics(state.metrics, e.target.value) }}
                                            />
                                        </FormControl>
                                        <Typography component='label' hidden={state.metrics === 0}>Radius :<strong>{state.radius}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 1}>Diameter :  <strong>{state.diameter}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 2}>Area : <strong> {state.area}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 3}>Circumference :  <strong>{state.circumference}</strong><br /></Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
