import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import kineticenergy from '../../../Assets/images/kineticenergy.gif';
import kineticenergysvg from '../../../Assets/images/kineticenergy.svg';
import SubNavBar from '../../../Components/SubNavBar';

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
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
}));

export default function Kineticenergy() {
    const [state, setState] = React.useState({
        kineticenergy: 0,
        mass: 0,
        velocity: 0,
        solvedfor: 0,
        result: 0,
    })

    React.useEffect(() => {

        const calcResult = (e) => {

            let fResult = 0;
            let kineticenergy = state.kineticenergy === '' ? 0 : parseFloat(state.kineticenergy);
            let mass = state.mass === '' ? 0 : parseFloat(state.mass);
            let velocity = state.velocity === '' ? 0 : parseFloat(state.velocity);
            switch (state.solvedfor) {
                case 0:
                    fResult = 0.5 * (mass * Math.pow(velocity, 2)).toFixed(4) + ' Joule';
                    break;
                case 1:
                    fResult = (2 * kineticenergy / Math.pow(velocity, 2)).toFixed(4) + ' kg';
                    break;
                case 2:
                    fResult = (Math.sqrt(2 * kineticenergy / mass)).toFixed(4) + ' m/s';
                    break;

                default:
                    break;
            }
            setState({
                ...state,
                result: fResult,
            })
        }
        calcResult();
        // eslint-disable-next-line
    }, [state.kineticenergy, state.mass, state.velocity, state.solvedfor]);

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free kinetic energy calculator online | mathcalc</title>
                <meta name="keywords" content="kinetic energy, mass, velocity, energy calculator" />
                <meta name="description" content="In physics, the kinetic energy of an object is the energy that it possesses due to its motion." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>

            <Container maxWidth={'xl'} >
                <div className={classes.row}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item lg={8} md={8} sm={12}>
                            <SubNavBar
                                pageTitle="Kinetic Energy Calculator"
                                links={[{
                                    url: "/physics/",
                                    urlName: "Physics"
                                }]}
                            />
                            <section className="hero" data-v-23847e07>
                                <div style={{ padding: '2rem 0.5rem' }}>
                                    <div className="container">
                                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                            ONLINE FREE KINETIC ENERGY CALCULATOR</h1>
                                        <p className="has-text-letter-spacing-wide has-text-grey">
                                            To calculate the kinetic energy , velocity and mass of an object</p>
                                    </div>
                                </div>
                            </section>
                            <Card raised elevation={1} className="box" >
                                <h2 className={'title is-5'}>
                                    Kinetic Energy</h2>
                                <img className={classes.imgcenter} src={kineticenergysvg} alt='kinetic energy' />
                                <br />
                                <div className={classes.divcalc}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <FormControl variant="outlined" style={{ width: '100%', maxWidth: '243px' }}>
                                                <InputLabel id="demo-simple-select-outlined-label">Solved For</InputLabel>
                                                <Select
                                                    id="metrics-outlined"
                                                    label="Solved For" style={{ width: '100%', minWidth: '120px' }}
                                                    onChange={(e) => { setState({ ...state, solvedfor: e.target.value }) }}
                                                    value={state.solvedfor}
                                                    variant={'outlined'}
                                                    aria-label="Select"
                                                >
                                                    <MenuItem value={0}>Kinetic energy</MenuItem>
                                                    <MenuItem value={1}>Mass</MenuItem>
                                                    <MenuItem value={2}>Velocity</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <p className={'resPercentage'}> {state.result}</p>
                                        </Grid>
                                    </Grid>
                                    <div className={classes.formelems} noValidate autoComplete="off">
                                        <div style={{ display: state.solvedfor === 0 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="kineticenergy" label="Kinetic Energy" variant="outlined"
                                                value={state.kineticenergy}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                        <div style={{ display: state.solvedfor === 1 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="mass" label="Mass" variant="outlined"
                                                value={state.mass}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>

                                        <div style={{ display: state.solvedfor === 2 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="velocity" label="Velocity" variant="outlined"
                                                value={state.velocity}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <hr />
                            <Card elevation={1} className="box">
                                <h2 className="title is-5">
                                    Kinetic Energy
                                </h2>
                                <Typography>
                                    In physics, the kinetic energy of an object is the energy that it possesses due to its motion.
                                    It is defined as the work needed to accelerate a body of a given mass from rest to its stated velocity.
                                 <br /><br />   Having gained this energy during its acceleration, the body maintains this kinetic energy unless its speed changes.
                                 The same amount of work is done by the body when decelerating from its current speed to a state of rest. <br />
                                </Typography>
                                <br />
                                <figure className="image">
                                    <img src={kineticenergy} alt='Kinetic enery' />
                                </figure>
                                <br />
                                <p>   <strong>E</strong> is the kinetic energy of a non-rotating object of mass ,
                                    <strong>m</strong> traveling at a speed <strong>v</strong>
                                    <br /><br />
                                    he standard unit of kinetic energy is the joule, while the English unit of kinetic energy is the foot-pound.
                                    </p>
                                <br />
                                <br />
                                <p>
                                    Energy occurs in many forms, including chemical energy, thermal energy, electromagnetic radiation, gravitational energy, electric energy, elastic energy, nuclear energy, and rest energy. These can be categorized in two main classes: potential energy and kinetic energy. Kinetic energy is the movement energy of an object. Kinetic energy can be transferred between objects and transformed into other kinds of energy
<br />
                                    <br />
                                    Kinetic energy may be best understood by examples that demonstrate how it is transformed to and from other forms of energy. For example, a cyclist uses chemical energy provided by food to accelerate a bicycle to a chosen speed. On a level surface, this speed can be maintained without further work, except to overcome air resistance and friction. The chemical energy has been converted into kinetic energy, the energy of motion, but the process is not completely efficient and produces heat within the cyclist.
                                    <br />
                                    <br />
                                    The kinetic energy in the moving cyclist and the bicycle can be converted to other forms. For example, the cyclist could encounter a hill just high enough to coast up, so that the bicycle comes to a complete halt at the top. The kinetic energy has now largely been converted to gravitational potential energy that can be released by freewheeling down the other side of the hill. Since the bicycle lost some of its energy to friction, it never regains all of its speed without additional pedaling. The energy is not destroyed; it has only been converted to another form by friction. Alternatively, the cyclist could connect a dynamo to one of the wheels and generate some electrical energy on the descent. The bicycle would be traveling slower at the bottom of the hill than without the generator because some of the energy has been diverted into electrical energy. Another possibility would be for the cyclist to apply the brakes, in which case the kinetic energy would be dissipated through friction as heat.
                                    <br />
                                    <br />
                                    Like any physical quantity that is a function of velocity, the kinetic energy of an object depends on the relationship between the object and the observer's frame of reference. Thus, the kinetic energy of an object is not invariant.
                                    <br />
                                    <br />
                                    Spacecraft use chemical energy to launch and gain considerable kinetic energy to reach orbital velocity. In an entirely circular orbit, this kinetic energy remains constant because there is almost no friction in near-earth space. However, it becomes apparent at re-entry when some of the kinetic energy is converted to heat. If the orbit is elliptical or hyperbolic, then throughout the orbit kinetic and potential energy are exchanged; kinetic energy is greatest and potential energy lowest at closest approach to the earth or other massive body, while potential energy is greatest and kinetic energy the lowest at maximum distance. Without loss or gain, however, the sum of the kinetic and potential energy remains constant.
                                    <br />
                                    <br />
                                    Kinetic energy can be passed from one object to another. In the game of billiards, the player imposes kinetic energy on the cue ball by striking it with the cue stick. If the cue ball collides with another ball, it slows down dramatically, and the ball it hit accelerates its speed as the kinetic energy is passed on to it. Collisions in billiards are effectively elastic collisions, in which kinetic energy is preserved. In inelastic collisions, kinetic energy is dissipated in various forms of energy, such as heat, sound, binding energy (breaking bound structures).
                                    <br />
                                    <br />
                                    Flywheels have been developed as a method of energy storage. This illustrates that kinetic energy is also stored in rotational motion.
                                    <br />
                                    <br />
                                    Several mathematical descriptions of kinetic energy exist that describe it in the appropriate physical situation. For objects and processes in common human experience, the formula ½mv² given by Newtonian (classical) mechanics is suitable. However, if the speed of the object is comparable to the speed of light, relativistic effects become significant and the relativistic formula is used. If the object is on the atomic or sub-atomic scale, quantum mechanical effects are significant, and a quantum mechanical model must be employed.
</p>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} sm={false}></Grid>
                    </Grid>
                </div>
            </Container >
        </div >
    );
}
