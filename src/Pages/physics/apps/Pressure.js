import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Chip, Typography, Paper, FormControl, Button, Stepper, Step, StepLabel, Container, Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import VerticalAds from '../../../Components/VerticalAds';
import SubNavBar from '../../../Components/SubNavBar';
import CustomSnakbar from '../../../Components/CustomSnakbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    divcalc: {
        borderRadius: '12px',
        padding: '1em',
        color: '#314259'
    },
    formelems: {
        display: 'grid',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%'
        },
    },
    anchorCalc: {
        margin: '0px 8px 16px 0px',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 1px 3px rgb(34 25 25 / 40%)',
        color: 'white',
        padding: '2px',
        backgroundColor: '#112233b0',
        '&:hover': {
            color: '#112233b0 !important',
            backgroundColor: 'transparent',
            border: '1px solid #112233b0'
        },
    },
    imgcenter: {
        marginLeft: '55px',
    },
    allCalc: {
        padding: '24px',
        border: '1px solid antiquewhite',
        backgroundColor: 'white'
    },
    label: {
        marginLeft: '10px',
    },
    formcontrol: {
        flexDirection: 'column',
        margin: '6px',
    },
}));

export default function Pressure() {
    const [state, setState] = React.useState({
        force: '',
        area: '',
        press: 'x',
        result: null,
    })

    const [calcs, setCalcs] = React.useState([
        {
            urlname: "Power",
            urlpath: "/physics/power/"
        },
        {
            urlname: 'Energy Mass',
            urlpath: '/physics/eeqlmc2/'
        },
        {
            urlname: 'Ohms law',
            urlpath: '/physics/ohmslaw/'
        },
        {
            urlname: 'Newtons law of gravity',
            urlpath: '/physics/newtons-law-of-gravity/'
        },
        {
            urlname: 'Capacitance',
            urlpath: '/physics/capacitance/'
        },
        {
            urlname: 'Inductance',
            urlpath: '/physics/inductance/'
        },
        {
            urlname: 'Kinetic Energy',
            urlpath: '/physics/kinetic-energy/'
        },
        {
            urlname: 'Pressure',
            urlpath: '/physics/Pressure/'
        },
        {
            urlname: 'Pressure',
            urlpath: '/physics/pressure'
        }
        // "Newton's second law",
        // "Acceleration",
        // "Torque",
        // "constant acceleration",
        // "Centripetel acceleration",
        // "Efficiency",
        // "Frequency",
        // "Pressure"
    ]);

    const onCalculate = () => {
        let force = state.force ? state.force : 0;
        let area = state.area ? state.area : 9.807;
        let press = state.press ? state.press : 0;

        let result = '';
        if (force.toString().toLowerCase() === 'x') {
            result = 'Force = ' + (press * area).toFixed(2);
        }
        else if (area.toString().toLowerCase() === 'x') {
            result = 'Area = ' + (force / press).toFixed(2);
        }
        else if (press.toString().toLowerCase() === 'x') {
            result = 'Pressure = ' + (force / area).toFixed(2) + ' pascal';
        }
        else {
            setSnakOpen(true);
            setTimeout(() => {
                setSnakOpen(null);
            }, 3000);
        }
        setState({
            ...state,
            result: result
        })
    }

    const clearAll = () => {
        setState({
            force: '',
            area: '',
            press: 'x',
            result: null,
        })
    }

    const onInputChange = (e) => {
        if (!isNaN(e.target.value) || e.target.value.toString().toLowerCase() === 'x') {
            setState({
                ...state,
                [e.target.id]: e.target.value
            });
        }
    }

    const [snakOpen, setSnakOpen] = React.useState(null);
    const handleClose = (e) => {
        setSnakOpen(null);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={'Fill all the fields correctly'}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Pressure Calculator - Free online Pressure calculator - Mathcalc</title>
                <meta name="keywords" content="Pressure calculator,mathcalc,pressure, surface, covered area, applied force" />
                <meta name="description" content="Learn how to use the Pressure calculator with a step-by-step procedure. Get the Pressure calculator available online for free only at mathcalc. Pressure is the ratio of force applied to the area covered." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Pressure Calculator"
                    links={[{
                        url: "/physics/",
                        urlName: "Physics"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-6 is-spaced is-uppercase has-text-weight-bold">
                                Calculate a pressure on area covered</h1>
                            <p className="has-text-grey">
                                Learn how to use the Pressure calculator with a step-by-step procedure. Get the Pressure calculator available online for free only at mathcalc. Pressure is the ratio of force applied to the area covered.
                            </p>
                        </div>
                    </div>
                </section>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Box m={1} id="Pressure">
                            <Paper variant="outlined">
                                <Box m={2}>
                                    <Typography component="h1" className={"title is-5"} >
                                        Pressure calculator online
                                    </Typography>
                                </Box>
                                <Divider />
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '14px',
                                }}>
                                    <div style={{ margin: '0px 10px', padding: '10px' }}>Pressure (P) &nbsp; = &nbsp; F &nbsp; / &nbsp; A</div>
                                </div>
                                <Divider />
                                <Box m={1}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
                                        <Grid item xs={12} sm={12} md={8} lg={8}>
                                            <br />
                                            <div className="content" >
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <Typography><strong>Force (F))</strong></Typography>
                                                    </div>
                                                    <div>
                                                        <TextField className={classes.formelems} onChange={onInputChange}
                                                            placeholder="0.0" value={state.force} id="force" variant="outlined" type="text"></TextField>
                                                    </div>
                                                </FormControl>
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <Typography><strong>Area (A)</strong></Typography>
                                                    </div>
                                                    <div>  <TextField className={classes.formelems} onChange={onInputChange}
                                                        placeholder="0.0" value={state.area} id="area" variant="outlined" type="text"></TextField>
                                                    </div>
                                                </FormControl>
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <Typography><strong>Pressure (P)</strong></Typography>
                                                    </div>
                                                    <div> <TextField className={classes.formelems} onChange={onInputChange}
                                                        value={state.press} id="press" variant="outlined" type="text" ></TextField>
                                                    </div>
                                                </FormControl>
                                                {
                                                    state.result ?
                                                        <div style={{ textAlign: 'center' }}>
                                                            <br />
                                                            <strong> Result : </strong> {state.result}
                                                        </div> : <></>
                                                }
                                                <br />
                                            </div>
                                            <FormControl style={{
                                                flexDirection: 'row', textAlign: 'center',
                                                justifyContent: 'center',
                                                width: '100%'
                                            }}>
                                                <Button aria-label="Clear All"
                                                    color="primary"
                                                    variant="outlined"
                                                    style={{ marginRight: '10px' }}
                                                    onClick={clearAll}
                                                >
                                                    Clear All
                                                </Button>
                                                <Button aria-label="Clear All"
                                                    color="primary"
                                                    variant="contained"
                                                    onClick={onCalculate}
                                                >
                                                    Calculate
                                                </Button>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={2} lg={2}>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <br />
                            </Paper>
                            <br />
                            <Paper variant="outlined">
                                <Box m={2}>
                                    <h1 className="title is-5">What is Pressure Calculator</h1>
                                    <p>
                                        Pressure is the ratio of force applied to the area covered. Pressure calculator can calculate pressure, area covered and force applied .
                                    </p>
                                    <br />
                                    <h1 className="title is-5"> How to Use the Pressure Calculator?</h1>
                                    <p>The procedure to use the Pressure calculator is as follows:</p>

                                    <Stepper activeStep={3} orientation="vertical">
                                        <Step key={'label1'}>
                                            <StepLabel>
                                                Step 1: Enter the value of force and covered area on which force is applied and x for the unknown in the respective input field
                                            </StepLabel>
                                        </Step>
                                        <Step key={'label2'}>
                                            <StepLabel>
                                                Step 2: Now click the button “Calculate" to get the Pressure
                                            </StepLabel>
                                        </Step>
                                        <Step key={'label3'}>
                                            <StepLabel>
                                                Step 3: Finally, the Pressure value will be displayed as result.
                                            </StepLabel>
                                        </Step>
                                    </Stepper>
                                </Box>
                            </Paper>
                            <br />
                            <Paper variant="outlined">
                                <Box m={2}>
                                    <h1 className="title is-5">What is pressure ?</h1>
                                    <p> Pressure is the ratio of force applied to the area covered. </p>
                                    <br />
                                    <p>  P = 	F / A </p>
                                    <br />
                                    <p>
                                        The unit of pressure is the pascal
                                    </p>
                                    <br />


                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>

                                        <div style={{ margin: '0px 10px', padding: '10px' }}>Pressue (Pa) &nbsp; = &nbsp; </div>
                                        <div>
                                            <div>N</div>
                                            <div style={{ margin: '-14px 0px 0px -4px' }}>____</div>
                                            <div>M<sup>2</sup></div>
                                        </div>
                                        <div>&nbsp;&nbsp; = &nbsp;&nbsp;</div>
                                        <div>
                                            <div>kg m/s <sup>2</sup></div>
                                            <div style={{ margin: '-14px 0px 0px -4px' }}>______</div>
                                            <div>M<sup>2</sup></div>
                                        </div>
                                        <div>&nbsp;&nbsp; = &nbsp;&nbsp;</div>
                                        <div>
                                            <div>kg</div>
                                            <div style={{ margin: '-14px 0px 0px -4px' }}>______</div>
                                            <div>M s<sup>2</sup></div>
                                        </div>
                                    </div>
                                    <br />
                                    <p>
                                        The pascal is also a unit of stress and the topics of pressure and stress are connected.
                                    </p>
                                    <br />
                                    <p>
                                        Bed of nails (not really pressure but shear strain, which has the same units)
                                        Finger bones are flat on the gripping side to increase surface area in contact and thus reduce compressional stresses
                                    </p>
                                    <br />
                                    <h1 className="title is-5"> Gauge vs. Absolute </h1>
                                    <p>
                                        Selected gauge pressures
                                    </p>
                                    <br />
                                    <div style={{ maxWidth: '81vw' }}>
                                        <div style={{ overflow: 'auto' }}>
                                            <table class="table is-bordered">
                                                <caption className="title is-5">Selected gauge pressures (black-positive, <span class="negative">red-negative</span>)</caption>
                                                <tbody><tr>
                                                    <th>atm</th>
                                                    <th>kPa</th>
                                                    <th style={{ textAlign: 'left' }}>device, event, phenomenon, process</th>
                                                </tr>
                                                    <tr>
                                                        <td>200</td>
                                                        <td>20,000</td>
                                                        <td style={{ textAlign: 'left' }}>pressurized breathing apparatus</td>
                                                    </tr>
                                                    <tr>
                                                        <td>140</td>
                                                        <td>14,000</td>
                                                        <td style={{ textAlign: 'left' }}>milk homogenization</td>
                                                    </tr>
                                                    <tr>
                                                        <td>110</td>
                                                        <td>11,000</td>
                                                        <td style={{ textAlign: 'left' }}>rupture compression strength of vertebral disks</td>
                                                    </tr>
                                                    <tr>
                                                        <td>7–14</td>
                                                        <td>700–1400</td>
                                                        <td style={{ textAlign: 'left' }}>puffed cereal manufacture</td>
                                                    </tr>
                                                    <tr>
                                                        <td>9</td>
                                                        <td>900</td>
                                                        <td style={{ textAlign: 'left' }}>espresso machine</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4–7</td>
                                                        <td>400–700</td>
                                                        <td style={{ textAlign: 'left' }}>bicycle tire</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&gt;&nbsp;4</td>
                                                        <td>&gt;&nbsp;400</td>
                                                        <td style={{ textAlign: 'left' }}>oxygen poisoning and nitrogen narcosis for dives &gt;&nbsp;30&nbsp;m</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2.7–4.1</td>
                                                        <td>275–415</td>
                                                        <td style={{ textAlign: 'left' }}>champagne at serving temperature (10&nbsp;°C)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2.7</td>
                                                        <td>275</td>
                                                        <td style={{ textAlign: 'left' }}>carbonated soft drinks</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2.0–2.5</td>
                                                        <td>200–250</td>
                                                        <td style={{ textAlign: 'left' }}>car tire</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&gt;&nbsp;4</td>
                                                        <td>&gt;&nbsp;400</td>
                                                        <td style={{ textAlign: 'left' }}>blast wave, 100% lethality</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2.3–4.0</td>
                                                        <td>230–400</td>
                                                        <td style={{ textAlign: 'left' }}>blast wave, 50% lethality</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1.6–2.3</td>
                                                        <td>160–230</td>
                                                        <td style={{ textAlign: 'left' }}>blast wave, 1% lethality</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1.02</td>
                                                        <td>103</td>
                                                        <td style={{ textAlign: 'left' }}>typical household pressure cooker</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>101.325</td>
                                                        <td style={{ textAlign: 'left' }}>one standard atmosphere over environment</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>47</td>
                                                        <td style={{ textAlign: 'left' }}>bottom of feet while standing</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>20</td>
                                                        <td style={{ textAlign: 'left' }}>lungs, extreme exhalation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>17</td>
                                                        <td style={{ textAlign: 'left' }}>sustained pressure, eardrum ruptures</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>8</td>
                                                        <td style={{ textAlign: 'left' }}>sustained pressure, eardrum senses pain</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>13–19</td>
                                                        <td style={{ textAlign: 'left' }}>blood pressure, arterial, systolic (during a heartbeat)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>8–12</td>
                                                        <td style={{ textAlign: 'left' }}>blood pressure, arterial, diastolic (between heartbeats)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>7–14</td>
                                                        <td style={{ textAlign: 'left' }}>aircraft shock wave</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>8.8</td>
                                                        <td style={{ textAlign: 'left' }}>blowing your nose</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>11</td>
                                                        <td style={{ textAlign: 'left' }}>eye, severe glaucoma</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>1.6–3.0</td>
                                                        <td style={{ textAlign: 'left' }}>eye, normal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>7</td>
                                                        <td style={{ textAlign: 'left' }}>
                                                            tennis ball</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>4.0</td>
                                                        <td style={{ textAlign: 'left' }}>blood pressure, capillary, arterial end</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>1.3</td>
                                                        <td style={{ textAlign: 'left' }}>blood pressure, capillary, venous end</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>15</td>
                                                        <td style={{ textAlign: 'left' }}>bladder, voiding, maximum</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>3</td>
                                                        <td style={{ textAlign: 'left' }}>bladder, micturition reflex (gotta go urge)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>2–4</td>
                                                        <td style={{ textAlign: 'left' }}>bladder, voiding, sustained</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>1.3–2.6</td>
                                                        <td style={{ textAlign: 'left' }}>gastrointestinal tract</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>0.6–1.6</td>
                                                        <td style={{ textAlign: 'left' }}>cerebrospinal fluid</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>0.4–0.9</td>
                                                        <td style={{ textAlign: 'left' }}>blood pressure, venous</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>0.6–0.8</td>
                                                        <td style={{ textAlign: 'left' }}>interstitial fluid (osmotic pressure)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>2</td>
                                                        <td style={{ textAlign: 'left' }}>acoustic pressure, eardrum ruptures (160&nbsp;dB)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>0.02</td>
                                                        <td style={{ textAlign: 'left' }}>acoustic pressure, eardrum senses pain (120&nbsp;dB)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>2&nbsp;×&nbsp;10<sup>−8</sup></td>
                                                        <td style={{ textAlign: 'left' }}>acoustic pressure, threshold of hearing (0&nbsp;dB)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td style={{ textAlign: 'left' }}>environmental pressure</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td class="negative">−1.3</td>
                                                        <td style={{ textAlign: 'left' }}>lungs, resting</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td class="negative">−1.5</td>
                                                        <td style={{ textAlign: 'left' }}>lungs, drinking through a 15 cm straw</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td class="negative">−25</td>
                                                        <td style={{ textAlign: 'left' }}>lungs, extreme inhalation</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="negative">−1</td>
                                                        <td class="negative">−101.325</td>
                                                        <td style={{ textAlign: 'left' }}>one standard atmosphere below environment, a perfect vacuum in a standard atmosphere</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <br />
                                    <Divider />
                                    <br />
                                    <div style={{ maxWidth: '81vw' }}>
                                        <div style={{ overflow: 'auto' }}>
                                            <table class="table is-bordered">
                                                <caption className="title is-5">Selected absolute pressures</caption>
                                                <tbody><tr>
                                                    <th>atm</th>
                                                    <th>Pa</th>
                                                    <th style={{ textAlign: 'left' }}>device, event, phenomenon, process</th>
                                                </tr>
                                                    <tr>
                                                        <td>3.4&nbsp;×&nbsp;10<sup>11</sup></td>
                                                        <td>3.4&nbsp;×&nbsp;10<sup>16</sup></td>
                                                        <td style={{ textAlign: 'left' }}>center of the Sun</td>
                                                    </tr>
                                                    <tr>
                                                        <td>????</td>
                                                        <td>????</td>
                                                        <td style={{ textAlign: 'left' }}>center of Jupiter</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10<sup>10</sup></td>
                                                        <td>10<sup>15</sup></td>
                                                        <td style={{ textAlign: 'left' }}>diamond anvil, record high</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3.6&nbsp;×&nbsp;10<sup>6</sup></td>
                                                        <td>3.6&nbsp;×&nbsp;10<sup>11</sup></td>
                                                        <td style={{ textAlign: 'left' }}>center of Earth</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1080</td>
                                                        <td>1.1&nbsp;×&nbsp;10<sup>8</sup></td>
                                                        <td style={{ textAlign: 'left' }}>Marianas Trench, Pacific Ocean (−10,924&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>160</td>
                                                        <td>1.6&nbsp;×&nbsp;10<sup>7</sup></td>
                                                        <td style={{ textAlign: 'left' }}>Lake Baikal, Asia (−1620&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>140</td>
                                                        <td>1.4&nbsp;×&nbsp;10<sup>7</sup></td>
                                                        <td style={{ textAlign: 'left' }}>Lake Tanganyika, Africa (−1470&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>90</td>
                                                        <td>9.0&nbsp;×&nbsp;10<sup>6</sup></td>
                                                        <td style={{ textAlign: 'left' }}>surface of Venus</td>
                                                    </tr>
                                                    <tr>
                                                        <td>40</td>
                                                        <td>4.0&nbsp;×&nbsp;10<sup>6</sup></td>
                                                        <td style={{ textAlign: 'left' }}>Lake Superior, North America (−406&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>????</td>
                                                        <td>????</td>
                                                        <td style={{ textAlign: 'left' }}>record dive by a human</td>
                                                    </tr>
                                                    <tr>
                                                        <td>26</td>
                                                        <td>2.6&nbsp;×&nbsp;10<sup>6</sup></td>
                                                        <td style={{ textAlign: 'left' }}>helium freezes at about 1&nbsp;K</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&gt;&nbsp;3</td>
                                                        <td>&gt;&nbsp;300,000</td>
                                                        <td style={{ textAlign: 'left' }}>oxygen poisoning and nitrogen narcosis for dives &gt;&nbsp;30&nbsp;m</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>108,380</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, record high, altitude adjusted (Siberia, 1968)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>106,000</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, Dead Sea (−400&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>101,325</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, sea level, standard atmosphere</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>90,000</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere at 1000&nbsp;m, interior of Concorde</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>87,000></td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, record low, altitude adjusted (Typhoon Tip, 1979)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>80,000</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere at 2000&nbsp;m, interior of commercial jet aircraft</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>65,000</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, La Paz, Bolivia (3650&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>~&nbsp;½</td>
                                                        <td>53,000</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, highest permanently inhabited town (5100&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&nbsp;</td>
                                                        <td>~&nbsp;40,000<span class="vanish">&nbsp;~</span></td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, vertical limit of human survivability (~7000&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>~&nbsp;⅓</td>
                                                        <td>31,000</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, Mount Everest (8848&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>~&nbsp;⅕</td>
                                                        <td>19,000</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, altitude of commercial jet aircraft (12,000&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0.063</td>
                                                        <td>6400</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, Armstrong limit, exposed body liquids boil (19,000&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&gt;&nbsp;0.033&nbsp;</td>
                                                        <td>&gt;&nbsp;3300<span class="vanish">&nbsp;&gt;</span></td>
                                                        <td style={{ textAlign: 'left' }}>low vacuum (LV)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&lt;&nbsp;0.033&nbsp;</td>
                                                        <td>&lt;&nbsp;3300<span class="vanish">&nbsp;&lt;</span></td>
                                                        <td style={{ textAlign: 'left' }}>medium vacuum (MV)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0.025</td>
                                                        <td>2200</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, altitude of reconnaissance plane (26,000&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0.007</td>
                                                        <td>700</td>
                                                        <td style={{ textAlign: 'left' }}>surface of Mars</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0.002</td>
                                                        <td>230</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, altitude of highest sky dive (
                                                            41,422&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>0.0006</td>
                                                        <td>60</td>
                                                        <td style={{ textAlign: 'left' }}>Earth atmosphere, altitude of highest unmanned balloon flight (
                                                            52,000&nbsp;m)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>~&nbsp;10<sup>−5</sup></td>
                                                        <td>~&nbsp;1</td>
                                                        <td style={{ textAlign: 'left' }}>surface of Pluto, maximum</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&lt;&nbsp;10<sup>−6</sup></td>
                                                        <td>&lt;&nbsp;0.1</td>
                                                        <td style={{ textAlign: 'left' }}>high vacuum (HV)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&lt;&nbsp;10<sup>−9</sup></td>
                                                        <td>&lt;&nbsp;0.0001</td>
                                                        <td style={{ textAlign: 'left' }}>very high vacuum (VHV)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&lt;&nbsp;10<sup>−12</sup></td>
                                                        <td>&lt;&nbsp;10<sup>−7</sup></td>
                                                        <td style={{ textAlign: 'left' }}>ultra high vacuum (UHV)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>~&nbsp;10<sup>−13</sup></td>
                                                        <td>~&nbsp;10<sup>−8</sup></td>
                                                        <td style={{ textAlign: 'left' }}>surface of the Moon, daytime</td>
                                                    </tr>
                                                    <tr>
                                                        <td>~&nbsp;10<sup>−15</sup></td>
                                                        <td>~&nbsp;10<sup>−10</sup></td>
                                                        <td style={{ textAlign: 'left' }}>surface of the Moon, nighttime</td>
                                                    </tr>
                                                    <tr>
                                                        <td>&lt;&nbsp;10<sup>−15</sup></td>
                                                        <td>&lt;&nbsp;10<sup>−10</sup></td>
                                                        <td style={{ textAlign: 'left' }}>extreme ultrahigh vacuum (XHV)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>~&nbsp;10<sup>−17</sup></td>
                                                        <td>~&nbsp;10<sup>−12</sup></td>
                                                        <td style={{ textAlign: 'left' }}>I am told that below this value all vacuum equipment leaks.</td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                    </div>
                                    <br />
                                    <h1 className="title is-5">The atmosphere
                                    </h1>
                                    <p> Standard Atmospheric Tables</p>
                                    <br />
                                    <p>
                                        Chemical composition of the atmosphere
                                        Source: US Standard Atmosphere, 1976
                                        gas	formula	molecular Pressure
                                    </p>
                                    <br />
                                    <div style={{ maxWidth: '81vw' }}>
                                        <div style={{ overflow: 'auto' }}>
                                            <table class="table is-bordered">
                                                <caption className="title is-5">Chemical composition of the atmosphere</caption>
                                                <tbody><tr>
                                                    <th>gas</th>
                                                    <th>formula</th>
                                                    <th>molecular&nbsp;weight<br />(g/mol)</th>
                                                    <th>fraction</th>
                                                </tr>
                                                    <tr>
                                                        <td>nitrogen</td>
                                                        <td>N<sub>2</sub></td>
                                                        <td><span class="vanish">0</span>28.0134<span class="vanish">000</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.78084</td>
                                                    </tr>
                                                    <tr>
                                                        <td>oxygen</td>
                                                        <td>O<sub>2</sub></td>
                                                        <td><span class="vanish">0</span>31.9988<span class="vanish">000</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.209476</td>
                                                    </tr>
                                                    <tr>
                                                        <td>argon</td>
                                                        <td>Ar</td>
                                                        <td><span class="vanish">0</span>39.948<span class="vanish">0000</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.00934</td>
                                                    </tr>
                                                    <tr>
                                                        <td>carbon dioxide</td>
                                                        <td>CO<sub>2</sub></td>
                                                        <td><span class="vanish">0</span>44.00995<span class="vanish">00</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.000314</td>
                                                    </tr>
                                                    <tr>
                                                        <td>neon</td>
                                                        <td>Ne</td>
                                                        <td><span class="vanish">0</span>20.183<span class="vanish">0000</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.00001818</td>
                                                    </tr>
                                                    <tr>
                                                        <td>helium</td>
                                                        <td>He</td>
                                                        <td><span class="vanish">00</span>4.0026<span class="vanish">000</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.00000524</td>
                                                    </tr>
                                                    <tr>
                                                        <td>methane</td>
                                                        <td>CH<sub>4</sub></td>
                                                        <td><span class="vanish">0</span>16.04303<span class="vanish">00</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.000002</td>
                                                    </tr>
                                                    <tr>
                                                        <td>krypton</td>
                                                        <td>Kr</td>
                                                        <td><span class="vanish">0</span>83.80<span class="vanish">00000</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.00000114</td>
                                                    </tr>
                                                    <tr>
                                                        <td>hydrogen</td>
                                                        <td>H<sub>2</sub></td>
                                                        <td><span class="vanish">00</span>2.01594<span class="vanish">00</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.0000005</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xenon</td>
                                                        <td>Xe</td>
                                                        <td>131.3<span class="vanish">000000</span></td>
                                                        <td style={{ textAlign: 'left' }}>0.000000087</td>
                                                    </tr>
                                                    <tr>
                                                        <td>overall</td>
                                                        <td></td>
                                                        <td><span class="vanish">0</span>28.9644253</td>
                                                        <td style={{ textAlign: 'left' }}>0.999997147</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <br />
                                    <h1 className="title is-5">Fluids</h1>
                                    <p>
                                        The gauge pressure in a uniform fluid at a particular depth is directly proportional to…
                                    </p>
                                    <br />
                                    <p>
                                        the density of the fluid (ρ). The denser the fluid, the greater the pressure.
                                        the acceleration due to gravity (g). The stronger the gravity, the greater the pressure.
                                        the depth (h). The deeper you go, the greater the pressure.
                                    </p>
                                    <br />
                                    <p>
                                        <strong>Pressure in a uniform fluid</strong>  — Stevin's law. Simon Stevin (1548–1620) discovered the hydrostatic paradox that the downward pressure of a liquid is independent of the shape of the vessel, and depends only on its height. Stevin was probably the first to work with the concept of pressure, having lived entirely before Pascal or Bernoulli. Stevin's Flemish word for pressure was the noun gheprang from the verb pranghen, to press (geprang and prangen in modern spelling). The current Dutch word for pressure is druk and the verb to press is drukken.
                                    </p>
                                    <br />
                                    <h1 className="title is-5">Physiology</h1>
                                    blood pressure
                                    <p>Ear pressure in the middle ear: eardrum at end of outer ear connected to smaller oval window at beginning of inner ear. 15-30 times greater pressure. combination of difference in membrane diameters and lever effects of middle ear bones.
                                    </p>
                                    <br />
                                    <div style={{ maxWidth: '81vw' }}>
                                        <div style={{ overflow: 'auto' }}>
                                            <table class="table is-bordered is-boxed">
                                                <caption className="title is-6">Circulatory pressures (mm&nbsp;Hg, a.k.a. torr)</caption>
                                                <tbody><tr>
                                                    <th style={{ textAlign: 'left' }}>location</th>
                                                    <th>systolic</th>
                                                    <th>diastolic</th>
                                                    <th>mean</th>
                                                </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left' }}>aorta</td>
                                                        <td>120</td>
                                                        <td>80</td>
                                                        <td>100</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left' }}>left ventricle</td>
                                                        <td>120</td>
                                                        <td>8</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left' }}>left atrium</td>
                                                        <td>7</td>
                                                        <td>10</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left' }}>pulmonay artery</td>
                                                        <td>15</td>
                                                        <td>7</td>
                                                        <td>12</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left' }}>right ventricle</td>
                                                        <td>15</td>
                                                        <td>2</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left' }}>right atrium</td>
                                                        <td>4</td>
                                                        <td>4</td>
                                                        <td>0</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textAlign: 'left' }}>pulmonary&nbsp;capillary&nbsp;wedge</td>
                                                        <td>7</td>
                                                        <td>10</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <br />
                                    <h1 className="title is-5">Pascal's principle</h1>
                                    <p> Pascal's principle: Pressure changes applied to the surface of an enclosed fluid are transmitted evenly throughout the fluid.
                                        Water seeks its own level. That's one of the realities of life.
                                    </p>
                                </Box>
                            </Paper>
                            <br />
                            <Box className={classes.allCalc} itemScope itemType="https://schema.org/SiteNavigationElement">
                                <Typography component="h1" className={"title is-6"} variant="h1">Related calculators</Typography>
                                {
                                    calcs && calcs.length > 0 ? calcs.map((calc, index) => {
                                        return (
                                            <Chip
                                                itemProp="name" component="a" href={calc.urlpath}
                                                className={classes.anchorCalc} key={index} variant="outlined" label={calc.urlname + ' calculator'} />
                                        )
                                    }) : <></>
                                }
                            </Box>
                            <br />
                        </Box>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
