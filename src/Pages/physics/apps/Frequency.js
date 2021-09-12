import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Box, Chip, Typography, Paper,
    MenuItem, Menu, Fab, Button, Tooltip, Container, Divider
} from '@material-ui/core';

import RefreshIcon from '@material-ui/icons/RefreshRounded';

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
        flexDirection: 'row',
        alignItems: 'center',
        margin: '6px',
    },
    calcContent: {
        "& h2,h3": {
            marginBottom: '2rem',
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        "& ol": {
            marginBottom: '2rem',
        },
        "& ol li": {
            listStyleType: 'decimal',
            marginLeft: '24px !important',
        },
        "& p": {
            marginBottom: '1.5rem'
        }
    },
    table: {
        "& tr div": {
            padding: '0px',
            margin: '0px'
        },
        "& tr": {
            height: '54px !important',
        }
    },
    rowinputs: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 'auto',
        borderBottom: "1px solid #dbdbdb",
        padding: '10px 0px',
        "& input": {
            border: 'none !important',
            boxShadow: 'none !important',
            textAlign: 'right',
        },
        "& span": {
            whiteSpace: 'nowrap',
        }
    },
    inps: {
        border: 'none',
        boxShadow: 'none',
    },
    fab: {
        transitionDuration: '0.5s',
        transition: '0.5s',
        "&:hover": {
            transform: 'rotateZ(360deg)',
            transition: '0.5s',
        }
    }
}));



function Custompoper(props) {

    //dropdown
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        props.handleChange(event);
        setOpen(false);
    };

    const handleToggle = (e) => {
        // setAnchorEl(e.currentTarget);
        // setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        setAnchorEl(null);
        setOpen(false);
    };


    return (
        <div>
            <Button color="inherit" style={{ textTransform: 'none', color: 'blue', textDecoration: 'none' }} onClick={handleToggle}
            >{props.options[selectedIndex].value} &nbsp;
                {/* <svg class="MuiSvgIcon-root MuiSelect-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg> */}
            </Button>
            <Menu
                id={props.id}
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                {props.options.map((option, index) => (
                    <MenuItem
                        key={option.value}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option.text}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}




export default function Frequency() {

    const calcs = [
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
            urlpath: '/physics/weight/'
        },
        {
            urlname: 'Frequency',
            urlpath: '/physics/frequency'
        }
        // "Newton's second law",
        // "Acceleration",
        // "Torque",
        // "constant acceleration",
        // "Centripetel acceleration",
        // "Efficiency",
    ];

    const [state, setState] = React.useState({
        velocityOf: '',
        velocity: '',
        frequency: '',
        period: '',
        wavelength: '',
        siFrequency: 'Hz',
        siVelocity: 'm/s',
        siWavelength: 'm',
        siPeriod: 's',
    });

    const clearAll = () => {
        setState({
            velocityOf: '',
            velocity: '',
            frequency: '',
            period: '',
            wavelength: '',
        })
    }

    const onInputChange = (e) => {
        if (!isNaN(e.target.value)) {
            let flvelocity = state.velocity;
            let flwavelength = state.wavelength;
            let flperiod = state.period;
            let flfrequency = state.frequency;

            if (e.target.id === "velocity") {
                flvelocity = e.target.value;
                flfrequency = parseFloat(flvelocity) / parseFloat(flwavelength);
                flperiod = 1 / (parseFloat(flfrequency));
            } else if (e.target.id === "wavelength") {
                flwavelength = e.target.value;
                flfrequency = parseFloat(flvelocity) / parseFloat(flwavelength);
                flperiod = 1 / (parseFloat(flfrequency));
            }
            else if (e.target.id === "period") {
                flperiod = e.target.value;
                flfrequency = 1 / (parseFloat(flperiod));
            }
            else if (e.target.id === "frequency") {
                flfrequency = e.target.value;
                flperiod = 1 / (parseFloat(flfrequency));
            }

            if (!isNaN(flfrequency) && !isNaN(flperiod) && !isNaN(flwavelength) && !isNaN(flvelocity)) {
                setState({
                    ...state,
                    velocity: parseFloat(flvelocity).toLocaleString().replaceAll(',', ''),
                    wavelength: parseFloat(flwavelength).toLocaleString().replaceAll(',', ''),
                    period: parseFloat(flperiod).toLocaleString().replaceAll(',', ''),
                    frequency: parseFloat(flfrequency).toLocaleString().replaceAll(',', ''),
                });
            } else {
                setState({
                    ...state,
                    [e.target.id]: e.target.value,
                });
            }

        }
    }

    const handleChange = (e) => {

        setState({
            ...state,
            [e.target.id]: e.target.value
        });

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
                <title>Frequency Calculator - Free online frequency calculator - Mathcalc</title>
                <meta name="og:keywords" content="frequency calculator,mathcalc, mass,frequency of mass in earth sun moon, gravity, gravitational acceleration, frequency, meter per second, m/s" />
                <meta name="og:description" content="Learn how to use the frequency calculator with a step-by-step procedure. Get the frequency calculator available online for free only at mathcalc" />
                <meta name="og:author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>

                <meta property='og:title' content='Frequency Calculator - Free online frequency calculator - Mathcalc' />
                <meta property='og:image' content='https://i.imgur.com/WXSjhhv.jpg' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='627' />
                <meta property="og:type" content='website' />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="frequency Calculator"
                    links={[{
                        url: "/physics/",
                        urlName: "Physics"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-6 is-spaced is-uppercase has-text-frequency-bold">
                                Calculator for frequency online</h1>
                            <p className="has-text-grey">
                                Frequency is the number of completed wave cycles per second. In other words, frequency tells us how many wave crests pass a given point in a second.
                            </p>
                        </div>
                    </div>
                </section>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Box m={1} id="frequency">
                            <Paper variant="outlined" style={{ padding: '14px', margin: '-14px' }}>
                                <Box m={2}>
                                    <Typography component="h1" className={"title is-5"} >
                                        Frequency calculator online
                                    </Typography>
                                </Box>
                                <Divider />
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    margin: '14px',
                                }}>
                                    <div style={{ margin: '0px 10px', padding: '10px' }}>frequency (f) &nbsp; = &nbsp; 1 &nbsp; / &nbsp; T</div>
                                    <div style={{ margin: '0px 10px', padding: '10px' }}>frequency (f) &nbsp; = &nbsp; v &nbsp; / &nbsp; λ</div>
                                </div>
                                <Divider />
                                <Box m={1}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                            <div className="content" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around',
                                            }}>
                                                <div style={{ maxWidth: '500px' }}>
                                                    <Typography style={{ fontWeight: 'bold' }}>Frequency Calculator of wave</Typography>
                                                    <div className={classes.table}>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <div style={{
                                                                justifyContent: 'space-evenly',
                                                                alignItems: 'center',
                                                                mmarginBottom: '4px',
                                                                display: 'none',
                                                            }}>
                                                                <div>
                                                                    Velocity of
                                                                </div>
                                                                <div colSpan={2}>
                                                                    <Custompoper id="siPeriod" options={
                                                                        [
                                                                            { text: 'custom', value: 'custom' },
                                                                            { text: 'light in air', value: 'light in air' },
                                                                            { text: 'light in water', value: 'light in water' },
                                                                            { text: 'light in vacuum', value: 'light in vacuum' },
                                                                            { text: 'light in glass', value: 'light in glass' },
                                                                            { text: 'sound in air at 20 °C', value: 'sound in air at 20 °C' },
                                                                            { text: 'sound in air at 40 °C', value: 'sound in air at 40 °C' },
                                                                            { text: 'sound in rubber', value: 'sound in rubber' },
                                                                            { text: 'sound in lead', value: 'sound in lead' },
                                                                            { text: 'sound in gold', value: 'sound in gold' },
                                                                            { text: 'sound in copper', value: 'sound in copper' },
                                                                            { text: 'sound in glass', value: 'sound in glass' },
                                                                            { text: 'sound in aluminium', value: 'sound in aluminium' },
                                                                        ]}
                                                                        handleChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            <div className={classes.rowinputs}>
                                                                <div>
                                                                    Velocity(v)
                                                                </div>
                                                                <div>
                                                                    <input className='input'
                                                                        type="text"
                                                                        onChange={onInputChange}
                                                                        placeholder="0.0" value={state.velocity} id="velocity" variant="outlined"></input>
                                                                </div>
                                                                <div>
                                                                    <Custompoper id="siVelocity" options={
                                                                        [
                                                                            { text: 'meters per second (m/s)', value: 'm/s' },
                                                                            { text: 'kilometers per hour (km/h)', value: 'km/h' },
                                                                            { text: 'feet per second (f/s)', value: 'f/s' },
                                                                            { text: 'knots', value: 'knots' },
                                                                            { text: 'kilometers/second (km/s)', value: 'km/s' },
                                                                            { text: 'centimeters per second (cm/s)', value: 'cm/s' },
                                                                        ]
                                                                    }
                                                                        handleChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            <div className={classes.rowinputs}>
                                                                <div>Wavelength (λ)
                                                                </div>
                                                                <div>
                                                                    <input className='input' onChange={onInputChange}
                                                                        type="text"
                                                                        placeholder="0.0" value={state.wavelength} id="wavelength" variant="outlined" ></input>
                                                                </div>
                                                                <div>
                                                                    <Custompoper id="siWavelength" options={
                                                                        [
                                                                            { text: 'meter(m)', value: 'm' },
                                                                            { text: 'angstrom(A)', value: 'A' },
                                                                            { text: 'nanometer(nm)', value: 'nm' },
                                                                            { text: 'micrometer(µm)', value: 'µm' },
                                                                            { text: 'millimeter(mm)', value: 'mm' },
                                                                            { text: 'centimeter(cm)', value: 'cm' },
                                                                            { text: 'inche(in)', value: 'in' },
                                                                            { text: 'feet(f)', value: 'f' },
                                                                            { text: 'yard(yd)', value: 'yd' },
                                                                            { text: 'miles(mi)', value: 'mi' },
                                                                            { text: 'kilo meter(km)', value: 'km' },
                                                                        ]
                                                                    }
                                                                        siWavelength={state.siWavelength}
                                                                        handleChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            <div className={classes.rowinputs}>
                                                                <div>
                                                                    Period(T)
                                                                </div>
                                                                <div>
                                                                    <input className={'input'} onChange={onInputChange}
                                                                        type="text"
                                                                        placeholder="0.0" value={state.period} id="period" />
                                                                </div>
                                                                <div>
                                                                    <Custompoper id="siPeriod" options={
                                                                        [
                                                                            { text: 'seconds(s)', value: 's' },
                                                                            { text: 'picoseconds(ps)', value: 'ps' },
                                                                            { text: 'nanoseconds(ns)', value: 'ns' },
                                                                            { text: 'milliseconds(ms)', value: 'ms' },
                                                                            { text: 'microseconds(µs)', value: 'µs' },
                                                                        ]
                                                                    }
                                                                        handleChange={handleChange} />
                                                                </div>
                                                            </div>
                                                            <div className={classes.rowinputs}>
                                                                <div>
                                                                    Frequency(F)
                                                                </div>
                                                                <div>
                                                                    <input className='input' onChange={onInputChange}
                                                                        type="text"
                                                                        placeholder="0.0" value={state.frequency} id="frequency" />
                                                                </div>
                                                                <div>
                                                                    <Custompoper id="siFrequency" options={
                                                                        [
                                                                            { text: 'Hertz(Hz)', value: 'Hz' },
                                                                            { text: 'KiloHertz(kHz)', value: 'kHz' },
                                                                            { text: 'megaHertz(mHz)', value: 'mHz' },
                                                                            { text: 'gigaHertz(gHz)', value: 'gHz' },
                                                                            { text: 'teraHertz(tHz)', value: 'tHz' },
                                                                        ]
                                                                    }
                                                                        handleChange={handleChange} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{
                                                        textAlign: 'center',
                                                        margin: '10px'
                                                    }}>
                                                        <div >
                                                            <Tooltip title="Reset">
                                                                <Fab color="primary" size="small" className={classes.fab}
                                                                    onClick={clearAll}>
                                                                    <RefreshIcon />
                                                                </Fab>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6}>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                            <br />
                            <br />
                            <br />
                            <Paper variant="outlined" style={{ padding: '14px', margin: '-14px' }}>
                                <Box >
                                    <div id="calculator-description">
                                        <h1 className="title is-3">The frequency calculator</h1>
                                        <div className="">
                                            <div className={classes.calcContent}>
                                                <p>The frequency calculator will let you <strong>find a wave's frequency given the wavelength and its</strong> <a className="js-link" href="/physics/velocity"><strong>velocity</strong></a> <strong>or period</strong> in no time. You can choose a wave velocity from the preset list, so you don't have to remember, e.g., the <a className="js-link" href="/physics/speed-of-sound">speed of sound</a>.</p>
                                                <p>In the text, you'll also find the <strong>frequency definition</strong>, two <strong>frequency formulas</strong> (period to frequency and wavelength to frequency), and a few examples showing how to calculate frequency.</p>
                                                <p>If you want to know more about waves, check the <a className="js-link" href="/physics/wavelength">wavelength calculator</a>, and if you want to know the frequency of musical notes, check out the <a className="js-link" href="/other/note-frequency">note frequency calculator</a>.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h2 id="frequency-definition-and-the-frequency-formula">Frequency definition and the frequency formula</h2>
                                                <p>Have a look at the following model of a wave; it will help you understand the terms used in the frequency definition below it.</p>
                                                <br />
                                                <center>
                                                    <picture>
                                                        <img src="https://dam-assets.fluke.com/s3fs-public/6004181-dmm-whatis-frequency-715x360-2.jpg" alt="frequency" />
                                                    </picture>
                                                </center>
                                                <br />
                                                <br />
                                                <p>
                                                    <strong>Frequency is the number of completed wave cycles per second</strong>. In other words, frequency tells us how many wave crests pass a given point in a second.</p>
                                                <p>This frequency definition leads us to the simplest <strong>frequency formula</strong>:</p>
                                                <p><code>f = 1 / T</code>.</p>
                                                <p><code>f</code> denotes frequency and <code>T</code> stands for the <a className="js-link" href="/conversion/time-unit-converter">time</a> it takes to complete one wave cycle measured in seconds.</p>
                                                <p>The SI <strong>frequency unit is Hertz (Hz)</strong>, which equals 1/s (one cycle per second). Other frequency units include millihertz (mHz), kilohertz (kHz), megahertz (MHz), gigahertz (GHz), and terahertz (THz).</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h2 id="frequency-equation-from-the-wavelength">Frequency equation from the wavelength</h2>
                                                <p>Have a look at another picture which will allow us to see that frequency is connected to wavelength. Wavelength is the distance between two adjacent crests (or troughs). In other words - it is the <a className="js-link" href="/conversion/length-converter">length</a> of one wave cycle. <strong>The longer the wavelength, the lower the frequency</strong>:</p>
                                                <center>
                                                    <picture>
                                                        <img src="https://uploads-cdn.omnicalculator.com/images/britannica-wave-frequency.jpg?width=1025&amp;enlarge=0&amp;format=jpeg" alt="a low frequency and high frequency waves" width="90%" loading="lazy" />
                                                    </picture>
                                                </center>
                                                <p>Another fact we need - how fast the waves travel at (wave velocity) determines how many of them will pass a given point per second. This means <strong>the higher the wave velocity, the higher the frequency</strong>.</p>
                                                <p>These two relationships between frequency and wavelength (λ), and between frequency and velocity (v), bring us to the following <strong>frequency equation</strong>:</p>
                                                <p><code>f = v / λ</code>.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h2 id="how-to-use-the-frequency-calculator">How to use the frequency calculator?</h2>
                                                <p>Our frequency calculator incorporates the above-mentioned frequency formulas, therefore you can use it as a period to frequency calculator or a wavelength to frequency calculator.</p>
                                                <p><strong>How to use it as a period to frequency calculator?</strong> (How to find frequency if you know period?)</p>
                                                <ol>
                                                    <li>
                                                        <p>Input the time in which one wave cycle occurs (<strong>period</strong>). The calculator will determine the frequency.</p>
                                                    </li>
                                                    <li>
                                                        <p>You can use this calculator to determine the period, if you know its frequency.</p>
                                                    </li>
                                                </ol>
                                                <p><strong>How to use it as a wavelength to frequency calculator?</strong> (How to calculate frequency from wavelength?)</p>
                                                <ol>
                                                    <li>
                                                        <p>Enter the wave velocity into the second field or choose the type of wave and its medium from the list in the first field. By default, it is set to light in a vacuum.</p>
                                                    </li>
                                                    <li>
                                                        <p>Enter the wavelength, and the frequency value will appear.</p>
                                                    </li>
                                                </ol>
                                                <p>So, basically, you can enter any two variables, and the third will appear immediately 😀</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h2 id="example:-how-to-calculate-frequency-from-the-period">Example: How to calculate frequency from the period?</h2>
                                                <p>To resolve any doubts about how to calculate frequency from the period, let's analyze some simple examples. Firstly, recall the frequency equation:</p>
                                                <p><code>f = 1 / T</code>.</p>
                                                <p><strong>Example 1:</strong></p>
                                                <p>How to find the frequency of a wave in which one cycle is completed in 0.25s:</p>
                                                <p><code>f = 1 / 0.25 s</code></p>
                                                <p><code>f = 4 * 1/s</code></p>
                                                <p>Remember to convert "1/s" to the frequency unit:</p>
                                                <p><code>f = 4 Hz</code></p>
                                                <p><strong>Example 2:</strong></p>
                                                <p>How to find the frequency of a wave in which 360 cycles occur in 1 minute:</p>
                                                <p><code>f = 360 / 1 min</code></p>
                                                <p><code>f = 360 / 60 s</code></p>
                                                <p><code>f = 6/s = 6 Hz</code></p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h2 id="example:-how-to-find-the-frequency-of-a-wave">Example: How to find the frequency of a wave?</h2>
                                                <p>This time, we want to learn how to find the frequency of a wave if you're given the wave velocity and wavelength. You need to use the following frequency formula:</p>
                                                <p><code>f = v / λ</code>.</p>
                                                <p><strong>Example 1:</strong></p>
                                                <p>A wave's velocity equals 320 m/s and its wavelength is 8 m. Find its frequency.</p>
                                                <p><code>f = 320 m/s / 8 m</code></p>
                                                <p><code>f = 40/s</code></p>
                                                <p><code>f = 40 Hz</code></p>
                                                <p><strong>Example 2:</strong></p>
                                                <p>Find the frequency of light if wavelength equals 3000 km.</p>
                                                <p>The wave velocity equals the <a className="js-link" href="/everyday-life/speed">speed</a> of light in vacuum:</p>
                                                <p><code>v = c ≈ 300,000 km/s</code></p>
                                                <p><code>f ≈ 300,000 km/s / 3000 km</code></p>
                                                <p><code>f ≈ 100/s ≈ 100 Hz</code></p>
                                                <p><code>f ≈ 100 Hz</code></p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h2 id="faq">FAQ</h2>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>How to calculate frequency?</h3>
                                                <p>You need to either know the wavelength and the velocity or the wave period (the time it takes to complete one wave cycle). If you know the period:</p>
                                                <ol>
                                                    <li><strong>Convert</strong> it to seconds if needed and <strong>divide 1 by the period</strong>.</li>
                                                    <li>The result will be the <strong>frequency expressed in Hertz</strong>.</li>
                                                </ol>
                                                <p>If you want to calculate the frequency from wavelength and wave velocity:</p>
                                                <ol>
                                                    <li><strong>Make</strong> sure they have the same length unit.</li>
                                                    <li><strong>Divide the wave velocity by the wavelength</strong>.</li>
                                                    <li><strong>Convert</strong> the result to Hertz. 1/s equals 1 Hertz.</li>
                                                </ol>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>How do I find wavelength from frequency?</h3>
                                                <ol>
                                                    <li><strong>Determine</strong> the wave velocity.</li>
                                                    <li><strong>Determine</strong> the frequency.</li>
                                                    <li><strong>Convert</strong> Hertz to 1/s.</li>
                                                    <li><strong>Make</strong> sure the wave velocity and the frequency have the same time unit.</li>
                                                    <li><strong>Divide</strong> the wave velocity by the frequency.</li>
                                                </ol>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>What is the relationship between frequency and wavelength?</h3>
                                                <p>Frequency equals wave velocity divided by wavelength. Therefore, the longer the wavelength, the lower the frequency, and the shorter the wavelength, the higher the frequency. In other words, <strong>frequency is inversely proportional to wavelength</strong>.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>What is frequency measured in?</h3>
                                                <p><strong>The frequency of a wave is measured in Hertz</strong>. 1 Hertz equals 1/s - one cycle per second. The related units include millihertz (one-thousandth of a Hertz), kilohertz (a thousand Hertz), megahertz (a million Hertz), and gigahertz (a billion Hertz). The unit is named after Heinrich Rudolf Hertz, the physicist who proved the existence of electromagnetic waves.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>How to find the frequency of a wave?</h3>
                                                <ol>
                                                    <li><strong>Determine</strong> the wave velocity.</li>
                                                    <li><strong>Determine</strong> the wavelength.</li>
                                                    <li><strong>Make</strong> sure the wave velocity and the wavelength have the same length unit, e.g., if velocity is expressed in meters per second, the wavelength should be expressed in meters.</li>
                                                    <li><strong>Divide</strong> the wave velocity by the wavelength.</li>
                                                    <li><strong>Convert</strong> the result to Hertz. One Hertz equals 1/s - one cycle per second.</li>
                                                </ol>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>What frequency is 5G?</h3>
                                                <p>5G, which is the fifth generation technology standard for cellular networks, operates at various frequency bands which fall into two frequency ranges. Frequency range 1 is from <strong>450 MHz to 6 GHz</strong>, and frequency range 2 is from <strong>24.25 GHz to 52.6 GHz</strong>.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>Which color has the highest frequency?</h3>
                                                <p><strong>Violet is the color with the highest frequency</strong>, which ranges from around 670 to 750 terahertz. On the other side of the spectrum there's red with a frequency between 430 and 480 terahertz.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>What is the relationship between frequency and energy?</h3>
                                                <p><strong>Energy is directly proportional to frequency</strong>. In other words, the higher the frequency, the greater the energy. The relationship between frequency and energy is described by the following formula for the energy of a photon:</p>
                                                <p><code>E = h ⨉ f</code></p>
                                                <p>"E" is the symbol for energy, "h" is Planck's constant, and "f" stands for frequency.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>What wave has the highest frequency?</h3>
                                                <p><strong>Gamma rays are electromagnetic waves with the highest frequency</strong>, that is more than 10<sup>19</sup> Hz. They have the highest energy and shortest wavelengths of all electromagnetic waves. Their high energy enables them to detach electrons from atoms and damage living cells. Sources of gamma rays include neutron stars, supernovas, nuclear explosions, and lightning.</p>
                                            </div>
                                            <div className={classes.calcContent}>
                                                <h3>How to get period from frequency?</h3>
                                                <ol>
                                                    <li>The formula for period is <code>T = 1 / f</code>, where "T" is period – the time it takes for one cycle to complete, and "f" is frequency.</li>
                                                    <li>To get period from frequency, <strong>first convert frequency from Hertz to 1/s</strong>.</li>
                                                    <li>Now <strong>divide 1 by the frequency</strong>. The result will be time (period) expressed in seconds.</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
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
                            </Paper>
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