import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, CardContent, FormControl, InputLabel, MenuItem,
    Typography, Container, TextField, Select,
} from '@material-ui/core';
import SubNavBar from '../../../../Components/SubNavBar';
import imgRectangle from '../../../../Assets/images/rectangle.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '99%',
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
        margin: '1rem 1rem 1rem 0rem',
        display: 'block',
        padding: '0px !important',
        height: '60px',
    },
    solved_for: {
        margin: '2rem 1rem 1rem 0rem',
        display: 'block',
        padding: '0px !important',
        height: '60px',
        maxWidth: '255px'
    },

}));


export default function Square() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        length: '',
        width: '',
        area: '0',
        perimeter: '0',
        diagonal: '0',
        commonval: '0',
        metrics: 2,
        solveby: 'Area',
        inputOne: '',
        inputTwo: '',
    });

    const onChangeInput = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }


    const onChangeMetrics = (metric, isOnchangeinput, isChoosing) => {
        let length, width, solveby;

        if (!isOnchangeinput && state.metrics !== 0 && state.metrics !== 1) {
            if (state.metrics === 0) {
                solveby = 'Width'
            } else if (state.metrics === 1) {
                solveby = 'Length'
            }
            else if (state.metrics === 2) {
                solveby = 'Area';
            }
            else if (state.metrics === 3) {
                solveby = 'Perimeter';
            }
            else if (state.metrics === 4) {
                solveby = 'Diagonal';
            } else if (!solveby) {
                solveby = state.solveby;
            }
        } else if (!solveby) {
            solveby = state.solveby;
        }
        if (metric === 2 || metric === 3 || metric === 4) {
            width = state.inputOne === '' ? 0 : state.inputOne;
            length = state.inputTwo === '' ? 0 : state.inputTwo;
            setState({
                ...state,
                length: parseFloat(length).toFixed(5),
                width: parseFloat(width).toFixed(5),
                area: parseFloat(width * length),
                perimeter: parseFloat(2 * (parseFloat(length) + parseFloat(width))).toFixed(5),
                diagonal: parseFloat(Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2))).toFixed(5),
                metrics: metric,
                solveby: solveby
            });
        }
    }

    useEffect(() => {
        onChangeMetrics(state.metrics, true);
        // eslint-disable-next-line
    }, [state.inputOne, state.inputTwo]);

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Rectangle calculator || Calculate Area, perimete and diagonal of a Rectangle || MathCalc.xyz</title>
                <meta name="keywords" content="One stop tool for doing all kind of mathamatical calculations" />
                <meta name="description"
                    content="mathcalc is the all in one web app for all kind of mathamatical calculations in all fields of science like physics ,chemistry ,mathamatics, quantum physics and a lot " />     </Helmet>
            <Container maxWidth={'xl'} >
                <SubNavBar />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>Rectangle Calculator</div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'} >
                                    In Euclidean plane geometry, a rectangle is a quadrilateral with four right angles.
                                    It can also be defined as: an equiangular quadrilateral, since equiangular means that all of its angles are equal (360°/4 = 90°);
                                    or a parallelogram containing a right angle. A rectangle with four sides of equal length is a square.
                                 </p>
                                <div><FormControl variant="outlined" className={classes.solved_for} aria-autocomplete={'none'}>
                                    <InputLabel id="metrics">Solved For</InputLabel>
                                    <Select
                                        labelId="metrics-label"
                                        id="metrics-outlined"
                                        label="Solved For" style={{ width: '100%', marginBottom: '2rem' }}
                                        onChange={(e) => { onChangeMetrics(e.target.value, false, true) }}
                                        value={state.metrics}
                                    >
                                        <MenuItem value={2}>Area</MenuItem>
                                        <MenuItem value={3}>Perimeter</MenuItem>
                                        <MenuItem value={4}>Diagonal</MenuItem>
                                    </Select>
                                </FormControl>
                                </div>
                                <div className='chtnE' style={{ fontSize: '30px' }}>
                                    <Typography component='label' hidden={!(state.metrics === 0)}>Width :<strong>{state.length}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 1)}>Length :<strong>{state.length}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 2)}>Area :  <strong>{state.area}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 3)}>Perimeter : <strong> {state.perimeter}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 4)}>Diagonal :  <strong>{state.diagonal}</strong><br /></Typography>
                                </div>
                                <Grid container justify="flex-start" >
                                    <Grid item>
                                        <div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        {/* <td colSpan={2}><Typography component='label'>
                                                            {
                                                                state.metrics === 0 ? state.solveby : 'Width'
                                                            }
                                                        </Typography></td> */}
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }}
                                                                    label="Width"
                                                                    value={state.inputOne} variant="outlined"
                                                                    id="inputOne"
                                                                    onChange={onChangeInput}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td colSpan={2}>  <Typography component='label'>
                                                            {
                                                                state.metrics === 1 ? state.solveby : 'Length'
                                                            }
                                                        </Typography></td> */}
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }} label="Length"
                                                                    value={state.inputTwo} variant="outlined"
                                                                    id="inputTwo"
                                                                    onChange={onChangeInput}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </Grid>
                                    <Grid item>
                                        <div className={classes.sqouare}>
                                            <img src={imgRectangle} style={{ margin: '1rem' }} alt={'square'}></img>
                                        </div>
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
