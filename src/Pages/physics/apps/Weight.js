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

export default function Weight() {
    const [state, setState] = React.useState({
        mass: '',
        gracc: '9.807',
        weigt: 'x',
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
            urlname: 'Weight',
            urlpath: '/physics/Weight/'
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
        let mass = state.mass ? state.mass : 0;
        let gracc = state.gracc ? state.gracc : 9.807;
        let weight = state.weigt ? state.weigt : 0;

        let result = '';
        if (mass.toString().toLowerCase() === 'x') {
            result = 'Mass = ' + (weight / gracc).toFixed(2);
        }
        else if (gracc.toString().toLowerCase() === 'x') {
            result = 'Gravitational acc. = ' + (weight / mass).toFixed(2);
        }
        else if (weight.toString().toLowerCase() === 'x') {
            result = 'Weight = ' + (mass * gracc).toFixed(2) + ' N';
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
            mass: '',
            gracc: '9.807',
            weigt: 'x',
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
        console.log(state);
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
                <title>Weight Calculator - Free online weight calculator - Mathcalc</title>
                <meta name="keywords" content="Weight calculator,mathcalc, mass,weight of mass in earth sun moon, gravity, gravitational acceleration, Weight, meter per second, m/s" />
                <meta name="description" content="Learn how to use the Weight calculator with a step-by-step procedure. Get the Weight calculator available online for free only at mathcalc" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Weight Calculator"
                    links={[{
                        url: "/physics/",
                        urlName: "Physics"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-6 is-spaced is-uppercase has-text-weight-bold">
                                Calculator for Weight of a mass in various environments like earth, sun and moon etc. online</h1>
                            <p className="has-text-grey">
                                An interaction between bodies due to their mass. Weight is the force of gravity acting on an object.
                            </p>
                        </div>
                    </div>
                </section>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Box m={1} id="Weight">
                            <Paper variant="outlined">
                                <Box m={2}>
                                    <Typography component="h1" className={"title is-5"} >
                                        Weight calculator online
                                    </Typography>
                                </Box>
                                <Divider />
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '14px',
                                }}>
                                    <div style={{ margin: '0px 10px', padding: '10px' }}>Weight (W) &nbsp; = &nbsp; m &nbsp; x &nbsp; g</div>
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
                                                        <Typography><strong>Mass (m)</strong></Typography>
                                                    </div>
                                                    <div>
                                                        <TextField className={classes.formelems} onChange={onInputChange}
                                                            placeholder="0.0" value={state.mass} id="mass" variant="outlined" type="text"></TextField>
                                                    </div>
                                                </FormControl>
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <Typography><strong>Gravitational accelaration (Earth)</strong></Typography>
                                                    </div>
                                                    <div>  <TextField className={classes.formelems} onChange={onInputChange}
                                                        value={state.gracc} id="gracc" variant="outlined" type="text"></TextField>
                                                    </div>
                                                </FormControl>
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <Typography><strong>Weight (W)</strong></Typography>
                                                    </div>
                                                    <div> <TextField className={classes.formelems} onChange={onInputChange}
                                                        value={state.weigt} id="weigt" variant="outlined" type="text" ></TextField>
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
                                    <h1 className="title is-5">What is Weight Calculator</h1>
                                    <p>
                                        An interaction between bodies due to their mass. Weight is the force of gravity acting on an object.
                                    </p>
                                    <br />
                                    <h1 className="title is-5"> How to Use the Weight Calculator?</h1>
                                    <p>The procedure to use the Weight calculator is as follows:</p>

                                    <Stepper activeStep={3} orientation="vertical">
                                        <Step key={'label1'}>
                                            <StepLabel>
                                                Step 1: Enter the mass of any material and x for the unknown in the respective input field
                                            </StepLabel>
                                        </Step>
                                        <Step key={'label2'}>
                                            <StepLabel>
                                                Step 2: Now click the button “Calculate" to get the Weight
                                            </StepLabel>
                                        </Step>
                                        <Step key={'label3'}>
                                            <StepLabel>
                                                Step 3: Finally, the Weight value will be displayed as result.
                                            </StepLabel>
                                        </Step>
                                    </Stepper>
                                </Box>
                            </Paper>
                            <br />
                            <Paper variant="outlined">
                                <Box m={4}>
                                    <h1 className="title is-5">Weight calculator</h1>
                                    <p> An interaction between bodies due to their mass. Weight is the force of gravity acting on an object.
                                    </p>
                                    <br />
                                    <p> Derive formula from free fall thought experiment.
                                    </p>
                                    <br />
                                    <p> W = mg</p>
                                    <span>
                                        where W is the weight, m the mass of the object, and g gravitational acceleration.
                                    </span>

                                    <br />
                                    <p>
                                        Things that weigh a newton. One newton is about halfway between one-fifth and one-fourth of a pound or the weight of one hundred grams.
                                    </p>
                                    <br />
                                    <p> 1 N ≈ 	101.972 gf	or	0.101972 kgf
                                    </p> <br />
                                    <p>1 N ≈ 	0.224809 lb	or	3.59694 oz </p>
                                    <br />
                                    <p>  The "acceleration due to gravity" is also equal to the "gravitational field". Equivalence of inertial and gravitational mass.
                                    </p>
                                    <br />
                                    <p>
                                        Weight is the effect on objects of the acceleration of a reference frame.
                                    </p>
                                    <br />
                                    <h1 className="title is-5">Gravitational acceleration of earth</h1>
                                    <p>
                                        In physics, gravitational acceleration is the acceleration of an object in free fall within a vacuum (and thus without experiencing drag).
                                        <br /><br />
                                        This is the steady gain in speed caused exclusively by the force of gravitational attraction. At a fixed point on the Earth's surface, all bodies accelerate in vacuum at the same rate, regardless of the masses or compositions of the bodies.
                                        the measurement and analysis of these rates is known as gravimetry.
                                    </p><br />
                                    <p>
                                        At different points on Earth's surface, the free fall acceleration ranges from <strong>9.764 m/s2 to 9.834 m/s2</strong>  depending on altitude, latitude, and longitude.
                                        <br /><br />
                                        A conventional standard value is defined exactly as 9.80665 m/s2 (approximately 32.17405 ft/s2). Locations of significant variation from this value are known as gravity anomalies. This does not take into account other effects, such as buoyancy or drag
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
                            <Paper variant="outlined">
                                <Box m={2} >
                                    <h1 className="title is-5">Comparative gravities of the Earth, Sun, Moon, and planets</h1>
                                    <p>The table below shows comparative gravitational accelerations at the surface of the Sun, the Earth's moon, each of the planets in the Solar System and their major moons, Ceres, Pluto, and Eris.
                                        <br />
                                        <br />
                                        For gaseous bodies, the "surface" is taken to mean visible surface: the cloud tops of the gas giants (Jupiter, Saturn, Uranus and Neptune), and the Sun's photosphere. The values in the table have not been de-rated for the centrifugal force effect of planet rotation (and cloud-top wind speeds for the gas giants) and therefore, generally speaking, are similar to the actual gravity that would be experienced near the poles.
                                        <br /><br />
                                        For reference the time it would take an object to fall 100 metres, the height of a skyscraper, is shown, along with the maximum speed reached. Air resistance is neglected.
                                    </p>
                                    <br />
                                    <div style={{ maxWidth: '81vw' }}>
                                        <div style={{ overflow: 'auto' }}>
                                            <table class="table is-bordered" style={{ textAlign: 'center' }}>
                                                <thead>
                                                    <tr>
                                                        <th >Body
                                                        </th>
                                                        <th >Multiple of<br />Earth gravity
                                                        </th>
                                                        <th >m/s<sup>2</sup>
                                                        </th>
                                                        <th >ft/s<sup>2</sup>
                                                        </th>
                                                        <th data-sort-type="number" colspan="2" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Time to fall 100 m and<br />maximum speed reached
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href="/wiki/Sun" title="Sun">Sun</a>
                                                        </td>
                                                        <td>27.90
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>274.1
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>899
                                                        </td>

                                                        <td>0.85 s</td>
                                                        <td>843&nbsp;km/h (524&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Mercury_(planet)" title="Mercury (planet)">Mercury</a>
                                                        </td>
                                                        <td>0.3770
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>3.703
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>12.15
                                                        </td>

                                                        <td>7.4 s</td>
                                                        <td>98&nbsp;km/h (61&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Venus" title="Venus">Venus</a>
                                                        </td>
                                                        <td>0.9032
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>8.872
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>29.11
                                                        </td>

                                                        <td>4.8 s</td>
                                                        <td>152&nbsp;km/h (94&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Earth" title="Earth">Earth</a>
                                                        </td>
                                                        <td>1
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>9.8067
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>32.174
                                                        </td>
                                                        <td>4.5 s</td>
                                                        <td>159&nbsp;km/h (99&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Moon" title="Physics">Moon</a>
                                                        </td>
                                                        <td>0.1655
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.625
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>5.33
                                                        </td>

                                                        <td>11.1 s</td>
                                                        <td>65&nbsp;km/h (40&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Mars" title="Mars">Mars</a>
                                                        </td>
                                                        <td>0.3895
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>3.728
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>12.23
                                                        </td>

                                                        <td>7.3 s</td>
                                                        <td>98&nbsp;km/h (61&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Ceres_(dwarf_planet)" title="Ceres (dwarf planet)">Ceres</a>
                                                        </td>
                                                        <td>0.029
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>0.28
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>0.92
                                                        </td>

                                                        <td>26.7 s</td>
                                                        <td>27&nbsp;km/h (17&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Jupiter" title="Jupiter">Jupiter</a>
                                                        </td>
                                                        <td>2.640
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>25.93
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>85.1
                                                        </td>

                                                        <td>2.8 s</td>
                                                        <td>259&nbsp;km/h (161&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Io_(moon)" title="Io (moon)">Io</a>
                                                        </td>
                                                        <td>0.182
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.789
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>5.87
                                                        </td>

                                                        <td>10.6 s</td>
                                                        <td>68&nbsp;km/h (42&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Europa_(moon)" title="Europa (moon)">Europa</a>
                                                        </td>
                                                        <td>0.134
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.314
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>4.31
                                                        </td>

                                                        <td>12.3 s</td>
                                                        <td>58&nbsp;km/h (36&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Ganymede_(moon)" title="Ganymede (moon)">Ganymede</a>
                                                        </td>
                                                        <td>0.145
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.426
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>4.68
                                                        </td>

                                                        <td>11.8 s</td>
                                                        <td>61&nbsp;km/h (38&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Callisto_(moon)" title="Callisto (moon)">Callisto</a>
                                                        </td>
                                                        <td>0.126
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.24
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>4.1
                                                        </td>

                                                        <td>12.7 s</td>
                                                        <td>57&nbsp;km/h (35&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Saturn" title="Saturn">Saturn</a>
                                                        </td>
                                                        <td>1.139
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>11.19
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>36.7
                                                        </td>

                                                        <td>4.2 s</td>
                                                        <td>170&nbsp;km/h (110&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Titan_(moon)" title="Titan (moon)">Titan</a>
                                                        </td>
                                                        <td>0.138
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.3455
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>4.414
                                                        </td>

                                                        <td>12.2 s</td>
                                                        <td>59&nbsp;km/h (37&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Uranus" title="Uranus">Uranus</a>
                                                        </td>
                                                        <td>0.917
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>9.01
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>29.6
                                                        </td>

                                                        <td>4.7 s</td>
                                                        <td>153&nbsp;km/h (95&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Titania_(moon)" title="Titania (moon)">Titania</a>
                                                        </td>
                                                        <td>0.039
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>0.379
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.24
                                                        </td>

                                                        <td>23.0 s</td>
                                                        <td>31&nbsp;km/h (19&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Oberon_(moon)" title="Oberon (moon)">Oberon</a>
                                                        </td>
                                                        <td>0.035
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>0.347
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>1.14
                                                        </td>

                                                        <td>24.0 s</td>
                                                        <td>30&nbsp;km/h (19&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Neptune" title="Neptune">Neptune</a>
                                                        </td>
                                                        <td>1.148
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>11.28
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>37.0
                                                        </td>

                                                        <td>4.2 s</td>
                                                        <td>171&nbsp;km/h (106&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td> <a href="/wiki/Triton_(moon)" title="">Triton</a>
                                                        </td>
                                                        <td>0.079
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>0.779
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>2.56
                                                        </td>

                                                        <td>16.0 s</td>
                                                        <td>45&nbsp;km/h (28&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Pluto" title="Pluto">Pluto</a>
                                                        </td>
                                                        <td>0.0621
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>0.610
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>2.00
                                                        </td>

                                                        <td>18.1 s</td>
                                                        <td>40&nbsp;km/h (25&nbsp;mph)
                                                        </td></tr>
                                                    <tr>
                                                        <td><a href="/wiki/Eris_(dwarf_planet)" title="Eris (dwarf planet)">Eris</a>
                                                        </td>
                                                        <td>0.0814
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>0.8
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>2.6
                                                        </td>
                                                        <td>15.8 s</td>
                                                        <td>46&nbsp;km/h (29&nbsp;mph)
                                                        </td></tr></tbody><tfoot></tfoot></table>
                                        </div>
                                    </div>
                                </Box>
                            </Paper>
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