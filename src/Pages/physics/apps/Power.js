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
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginRight: '10px',
        width: '90px',
        whiteSpace: 'nowrap'
    },
    formcontrol: {
        flexDirection: 'row',
    },
}));

export default function Power() {
    const [state, setState] = React.useState({
        work: '',
        time: '',
        power: 'x',
        result: null,
    })

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
        }
        // "Newton's second law",
        // "Acceleration",
        // "Torque",
        // "constant acceleration",
        // "Centripetel acceleration",
        // "Efficiency",
        // "Frequency",
    ];

    const onCalculate = () => {
        let work = state.work ? state.work : 0;
        let time = state.time ? state.time : 0;
        let power = state.power ? state.power : 0;

        let result = '';
        if (work.toString().toLowerCase() === 'x') {
            result = 'Work = ' + (power * time).toFixed(2);
        }
        else if (time.toString().toLowerCase() === 'x') {
            result = 'Time = ' + (work / power).toFixed(2);
        }
        else if (power.toString().toLowerCase() === 'x') {
            result = 'Power = ' + (work / time).toFixed(2) + ' W';
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
            work: '',
            time: '',
            power: 'x',
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
                <title>Power Calculator - Free Online Calculator - Mathcalc</title>
                <meta name="keywords" content="power calculator,mathcalc, work, time , power joule, watts, kilowatts" />
                <meta name="description" content="Learn how to use the power calculator with a step-by-step procedure. Get the power calculator available online for free only at mathcalc" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Power Calculator"
                    links={[{
                        url: "/physics/",
                        urlName: "Physics"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-6 is-spaced is-uppercase has-text-weight-bold">
                                Calculator for power used in mechanics online</h1>
                            <p className="has-text-grey">
                                Power is the rate at which work is done or the rate at which energy is transfered from one place to another or transformed from one type to another.
                            </p>
                        </div>
                    </div>
                </section>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Box m={1} id="Power">
                            <Paper variant="outlined">
                                <Box m={2}>
                                    <Typography component="h1" className={"title is-5"} >
                                        Power calculator online
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box m={2}>
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
                                        <Grid item xs={12} sm={12} md={8} lg={8} style={{ textAlign: 'center' }}>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <div style={{ margin: '0px 10px', padding: '10px' }}>Power (P) &nbsp; = &nbsp;</div>
                                                <div>
                                                    <div>dW</div>
                                                    <div style={{ margin: '-14px 0px 0px -4px' }}>_____</div>
                                                    <div>dt</div>
                                                </div>
                                            </div>
                                            <div className="content" >
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <strong>Work (W)</strong>
                                                    </div>
                                                    <div>
                                                        <TextField className={classes.formelems} onChange={onInputChange}
                                                            value={state.work} id="work" variant="outlined" type="text"></TextField>
                                                    </div>
                                                </FormControl>
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <Typography><strong>Time (T)</strong></Typography>
                                                    </div>
                                                    <div>  <TextField className={classes.formelems} onChange={onInputChange}
                                                        value={state.time} id="time" variant="outlined" type="text"></TextField>
                                                    </div>
                                                </FormControl>
                                                <FormControl className={classes.formcontrol}>
                                                    <div className={classes.label}>
                                                        <Typography><strong>Power (P)</strong></Typography>
                                                    </div>
                                                    <div> <TextField className={classes.formelems} onChange={onInputChange}
                                                        value={state.power} id="power" variant="outlined" type="text" ></TextField>
                                                    </div>
                                                </FormControl>
                                                <br />
                                                <br />
                                                {
                                                    state.result ?
                                                        <div>
                                                            <strong> Result : </strong> {state.result}
                                                        </div> : <></>
                                                }
                                                <br />
                                                <FormControl className={classes.formcontrol}>
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
                                            </div>
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
                                    <h1 className="title is-5">Power Calculator</h1>
                                    <p>Power Calculator is a free online tool that displays the power for the given work and time. Mathcalc'S online power calculator tool makes the calculation faster, and it displays the power in a fraction of seconds.
                                    </p>
                                    <br />
                                    <h1 className="title is-5"> How to Use the Power Calculator?</h1>
                                    <p>The procedure to use the power calculator is as follows:</p>

                                    <Stepper activeStep={3} orientation="vertical">
                                        <Step key={'label1'}>
                                            <StepLabel>
                                                Step 1: Enter the work, time and x for the unknown in the respective input field
                                            </StepLabel>
                                        </Step>
                                        <Step key={'label2'}>
                                            <StepLabel>
                                                Step 2: Now click the button “Calculate" to get the power
                                            </StepLabel>
                                        </Step>
                                        <Step key={'label3'}>
                                            <StepLabel>
                                                Step 3: Finally, the power value will be displayed as result.
                                            </StepLabel>
                                        </Step>
                                    </Stepper>
                                </Box>
                                <Box m={1} display='flex' flexDirection='row' justifyContent='center' >
                                    <table className="table table-container is-bordered">
                                        <thead>
                                            <tr>
                                                <th>Power of some things</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>   power (W)	device, event, phenomenon, process
                                            </td></tr>
                                            <tr><td>   gamma ray burster
                                            </td></tr><tr><td>   3.6 × 1039	typical quasar
                                            </td></tr><tr><td>   3.6 × 1026	the Sun
                                            </td></tr><tr><td>   1.25 × 1015	most powerful laser, 1999 (Petawatt)
                                            </td></tr><tr><td>   1.07 × 1015	most powerful laser, 2017 (LFEX)
                                            </td></tr><tr><td>   1.3 × 1013	total human consumption, global
                                            </td></tr><tr><td>   3.2 × 1012	total human consumption, US
                                            </td></tr><tr><td>   1.2 × 1010	space shuttle at launch
                                            </td></tr><tr><td>   109 ~ 1010	large commercial power plant
                                            </td></tr><tr><td>   4,700,000	most powerful locomotive (GE AC6000 CW)
                                            </td></tr><tr><td>   2,610,000	most powerful truck (Komatsu 980E-4)
                                            </td></tr><tr><td>   1,800,000	most powerful radio transmitter (VLF Cutler, Maine)
                                            </td></tr><tr><td>   1,550,000	most powerful car (Arash AF10)
                                            </td></tr><tr><td>   10,000	Watt's steam engine of 1778
                                            </td></tr><tr><td>   746	1 horsepower
                                            </td></tr><tr><td>   100	human, daily average
                                            </td></tr><tr><td>   1	1 watt
                                            </td></tr><tr><td>   0.293	1 Btu/h
                                            </td></tr><tr><td>   10−5	human, sounds produced during normal speech
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                </Box>
                            </Paper>
                            <br />
                            <Paper variant="outlined">
                                <Box m={2}>
                                    <h1 className="title is-5">Power</h1>
                                    <Typography component="h1" className={"title is-6"} variant="subtitle1">
                                        Power is the rate at which work is done or the rate at which energy is transfered from one place to another or transformed from one type to another.
                                    </Typography>
                                    <h1 className="title is-5">Units</h1>
                                    <p>
                                        any units of work (or energy) and time can be used to generate a unit of power. The International System uses joules [J] and seconds [s] for these, respectively.
                                    </p>
                                    <br />
                                    <p>
                                        A joule per second is called a watt [W] in honor of the Scottish mechanical engineer James Watt. Watt is most famous for inventing an improved steam engine in the years around 1770 and slightly less famous for inventing the concept of power shortly thereafter. Power was a new way to compare his engines to the machines they were designed to replace — horses. (More on that later.)
                                    </p>
                                    <br />
                                    <p>  The kilowatt-hour is a unit of energy used by electric utilities.</p>
                                    <p>  The Btu per hour (often erroneously shortened to Btu) is a unit of power used by the heating, ventilation, and cooling industry (HVAC).
                                    </p>
                                    <br />
                                    <p>A horsepower is a unit of power sufficient to raise 33,000 pounds 1 foot every 1 minute (550 lbs, 1 ft, 1 sec) equivalent to roughly 745.70 W                                    </p>
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
                                <Box style={{
                                    borderRadius: '2px',
                                    padding: '16px',
                                    fontStyle: 'italic'
                                }}>
                                    <h1 className="title is-5"> Horse power and the horsepower</h1>
                                    <p>
                                        James Watt was a Scottish mechanical engineer most famous for his improvements in the design of steam engines. While Thomas Newcomen is generally regarded to have invented the steam engine around 1698, Watt's improved design patented in 1769 became the industry standard that powered the Industrial Revolution in Britain and elsewhere.
                                    </p><br />
                                    <p>
                                        One of the earliest commercial engines Watt built was sold to a copper mine in Cornwall, a region of England where coal was expensive. Watt supervised the construction of purpose-built steam engines at the mines and then charged a licensing fee equal to a fraction of the money saved by switching to his improved design.
                                    </p><br />

                                    <p>  Newcomen and Watt engines are examples of reciprocating engines. So are the engines in most cars and trucks. Steam is pumped into a vertical cylinder, driving a piston up. The steam condenses and atmospheric pressure drives the piston down. In an engine with more than one cylinder, when one of the pistons is moving up, the other is moving down. The motion of one is reciprocated by the motion of the other. (Strangely, a piston driven engine with even one cylinder is still called a reciprocating engine.) Watt's pistons were originally attached to a rocking beam that was perfect for driving a lift pump. This is the classic, old-timey pump with a handle that everyone has probably seen — in photographs, at least, if not in person. Later mechanical additions allowed Watt to transform the reciprocating motion of the beam into the rotational motion of an axle. This opened the steam engine up to new applications.
                                    </p><br />
                                    <p>  The strongest competitor to the steam engine at the time of its invention was the horse. One of the more ingenious ways the power of the horse was harnessed was the horse mill (also known as the horse gin) — a large spoke and axle contraption like a wagon wheel without a rim that could be rotated horizontally. Horses were harnessed to the ends of the spokes (four to six at a time, for large applications) and compelled to walk in circles around the central drive shaft for hours at a time. The human powered equivalent of a horse mill is called a treadmill. 18th century treadmills weren't anything like the exercise equipment first sold in the 20th century. Horse mills and treadmills were preindustrial machines for doing work — not the abstract mathematical work of force times displacement, but genuine back breaking, hard labor.
                                    </p><br />

                                    <p>  In order for Watt to charge a licensing fee for his "rotative" steam engines, he needed an economic equivalent — something he could compare them to. Horses were the natural choice, but how much work does a horse do? Work isn't even the right concept. One horse can do so much work, but two horses will do it twice as fast. It's not the amount of work a horse does that matters, it's the rate at which it does it.
                                    </p><br />

                                    <p>  Watt identified the Whitbread Brewery in London as a potential customer. Large London breweries like Whitbread's are estimated to have employed an average of 20 horses for the mill at once. Whitbread's horses were strapped six to a mill and set to walk a 24 foot diameter circle 144 times per hour grinding malted barley into powder with a force of 180 pounds. The resulting number was rounded to two significant digits for convenience.
                                    </p>
                                    <br />
                                    <p>   P = 	Fv
                                    </p><p>  P = 	F∆s/∆t = F(n2πr/t)
                                    </p><p>    P = 	(180 lb)(144 × 2π × 12 ft)/(60 min)
                                    </p><p>    P = 	32,572.03263… lb ft/min
                                    </p><p>     P = 	33,000 lb ft/min
                                    </p>
                                    <br />
                                    <p> Prior to Mr Watt's application of the steam engine to produce rotative motion, the great manufactories of the kingdom had their mill work set in motion by the agency of water, of wind, or of horses; and the latter had for many years, been almost exclusively employed in the breweries and distilleries of the metropolis. It was therefore natural for one who wished to substitute the power of steam for the power of horses, to state the number of the latter to which the new power, under given conditions, would be equivalent; and it is probable that Boulton and Watt felt that such a mode of comparison would be more intelligible to common apprehensions than a more accurate and scientific formula. It gave the power of an engine expressed in numbers, of which the ordinary strength of a horse is the unit….
                                    </p><br />
                                    <p> Boulton and Watt, however, have not left the matter in a state that can be accounted incorrect in any case, but have given to it all the accuracy that can be required, when, from the result of experiments made with the strong horses employed by the brewers in London they have assumed, as the standard of a horse's power, a force able to raise 33,000 lib. one foot high in a minute; and this, no doubt, was meant to include an allowance of power sufficiently ample to cover the usual variations of the strength of horses, and of other circumstances that may affect the accuracy of the result.
                                    </p>
                                    <h1
                                        style={{
                                            textAlign: 'right',
                                            fontStyle: 'oblique',
                                            fontWeight: 'bold',
                                            textDecoration: 'underline',
                                            padding: '1rem'
                                        }}
                                    > Olinthus Gregory, 1809</h1>
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
