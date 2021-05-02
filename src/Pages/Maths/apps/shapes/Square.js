import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, CardContent, FormControl, InputLabel, MenuItem,
    Typography, Container, TextField, Select
} from '@material-ui/core';
import SubNavBar from '../../../../Components/SubNavBar';
import imgSquare from '../../../../Assets/images/square.svg';

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
    square: {
        minHeight: '240px',
        minWidth: '240px',
        border: '1px solid brown',
    },
    face_field: {
        marginTop: '25%',
        marginLeft: '50%',
        overflow: 'hidden'
    },
    formControl: {
        display: 'inherit',
        marginTop: '2rem'
    }
}));


export default function Square() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        length: '0',
        area: '0',
        perimeter: '0',
        diagonal: '0',
        commonval: '0',
        metrics: 0,
    });

    const onChangeMetrics = (metric, comval) => {
        debugger;
        let len;
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
                    length: parseFloat(cval).toFixed(3),
                    area: parseFloat(Math.pow(cval, 2)).toFixed(3),
                    perimeter: parseFloat(4 * cval).toFixed(3),
                    diagonal: parseFloat(cval * Math.sqrt(2)).toFixed(3),
                    commonval: cval,
                    metrics: 0
                });
                break;
            case 1:
                len = parseFloat(Math.sqrt(cval)).toFixed(3);
                setState({
                    ...state,
                    length: len,
                    area: parseFloat(cval).toFixed(3),
                    perimeter: parseFloat(4 * len).toFixed(3),
                    commonval: cval,
                    diagonal: parseFloat(len * Math.sqrt(2)).toFixed(3),
                    metrics: 1
                });
                break;
            case 2:
                len = parseFloat(cval / 4).toFixed(3);
                setState({
                    ...state,
                    length: len,
                    area: parseFloat(Math.pow(len, 2)).toFixed(3),
                    diagonal: parseFloat(len * Math.sqrt(2)).toFixed(3),
                    perimeter: cval,
                    commonval: cval,
                    metrics: 2
                });
                break;
            case 3:
                len = parseFloat(Math.pow(cval, 2) / (2)).toFixed(3);
                setState({
                    ...state,
                    length: parseFloat(len).toFixed(3),
                    area: parseFloat(Math.pow(len, 2)).toFixed(3),
                    perimeter: parseFloat(4 * cval).toFixed(3),
                    diagonal: cval,
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
                <title>Square calculator || Calculate Area and perimeter of a square || MathCalc.xyz</title>
                <meta name="keywords" content="One stop tool for doing all kind of mathamatical calculations" />
                <meta name="description"
                    content="mathcalc is the all in one web app for all kind of mathamatical calculations in all fields of science like physics ,chemistry ,mathamatics, quantum physics and a lot " />
            </Helmet>
            <SubNavBar />
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>Square Calculator</div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'} >
                                    In geometry, a square is a regular quadrilateral,
                                which means that it has four equal sides and four equal angles</p>
                                <Grid container justify="space-around">
                                    <Grid item>
                                        <div className={classes.sqouare}>
                                            <img src={imgSquare} style={{ minWidth: '255px', maxWidth: '255px', margin: '1rem' }} alt={'square'}></img>
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
                                                <MenuItem value={0}>Length</MenuItem>
                                                <MenuItem value={1}>Area</MenuItem>
                                                <MenuItem value={2}>Perimeter</MenuItem>
                                                <MenuItem value={3}>Diagonal</MenuItem>
                                            </Select>
                                            <TextField id="comonval" type={'number'}
                                                style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                                value={state.commonval} variant="outlined"
                                                onChange={(e) => { onChangeMetrics(state.metrics, e.target.value) }}
                                            />
                                        </FormControl>
                                        <Typography component='label' hidden={state.metrics === 0}>Length :<strong>{state.length}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 1}>Area :  <strong>{state.area}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 2}>Perimeter : <strong> {state.perimeter}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 3}>Diagonal :  <strong>{state.diagonal}</strong><br /></Typography>
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
