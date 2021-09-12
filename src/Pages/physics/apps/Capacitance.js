import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, FormControl, InputLabel, Select, MenuItem, Chip, Box, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import capacitanceform from '../../../Assets/images/capacitanceform.svg';
import capacitor from '../../../Assets/images/capacitor.png';
import VerticalAds from '../../../Components/VerticalAds';
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
        width: '100px !important'
    },
    allCalc: {
        padding: '24px',
        border: '1px solid antiquewhite',
        backgroundColor: 'white'
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
}));

export default function Capacitance() {
    const [state, setState] = React.useState({
        capacitance: '0',
        potential: '0',
        charge: '0',
        solvedfor: 0,
        result: 0,
    })

    React.useEffect(() => {

        const calcResult = (e) => {

            let fResult = 0;
            let fcapacitance = state.capacitance === '' ? 0 : parseFloat(state.capacitance);
            let fcharge = state.charge === '' ? 0 : parseFloat(state.charge);
            let fpotential = state.potential === '' ? 0 : parseFloat(state.potential);
            switch (state.solvedfor) {
                case 0:
                    fResult = (fcharge / fpotential).toFixed(4) + ' farads';
                    break;
                case 1:
                    fResult = (fcapacitance * fpotential).toFixed(4) + ' Columnbs';
                    break;
                case 2:
                    fResult = (fcharge / fcapacitance).toFixed(4) + ' Volts';
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
    }, [state.charge, state.potential, state.capacitance, state.solvedfor]);

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

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
            urlname: 'Power',
            urlpath: '/physics/power/'
        }
        // 'Weight',
        // "Newton's second law",
        // "Acceleration",
        // "Torque",
        // "constant acceleration",
        // "Centripetel acceleration",
        // "Efficiency",
        // "Frequency",
        // "Pressure"
    ];

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Free Online Capacitance calculator | mathcalc</title>
                <meta name="keywords" content="Mathcalc, capacitance calculator, capacitor, online calculator" />
                <meta name="description" content="Online capacitance calculator is used to To calculate the capacitance , electric charge and electric potential.  " />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Capacitance Calculator"
                    links={[{
                        url: "/physics/",
                        urlName: "Physics"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                ONLINE FREE CAPACITANCE CALCULATOR</h1>
                            <p className="  has-text-grey">
                                To calculate the capacitance , electric charge and electric potential.   </p>
                        </div>
                    </div>
                </section>
                <div className={classes.row}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item lg={8} md={8} sm={12}>
                            <Card raised elevation={1} className="box">
                                <h2 className={'title is-5'}>Capacitance</h2>
                                <figure className="image">
                                    <img className={classes.imgcenter} src={capacitanceform} alt='capacitance' />
                                </figure>
                                <br />
                                <div className={classes.divcalc}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <FormControl variant="outlined" style={{ width: '100%', maxWidth: '243px' }} >
                                                <InputLabel id="demo-simple-select-outlined-label">Solved For</InputLabel>
                                                <Select
                                                    id="metrics-outlined"
                                                    label="Solved For" style={{ width: '100%', minWidth: '120px' }}
                                                    onChange={(e) => { setState({ ...state, solvedfor: e.target.value }) }}
                                                    value={state.solvedfor}
                                                    variant={'outlined'}
                                                    aria-label="Select"
                                                >
                                                    <MenuItem value={0}>Capacitance</MenuItem>
                                                    <MenuItem value={1}>Charge</MenuItem>
                                                    <MenuItem value={2}>Potential</MenuItem>
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
                                            <TextField id="capacitance" label="Capacitance" variant="outlined"
                                                value={state.voltage}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                        <div style={{ display: state.solvedfor === 1 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="charge" label="Charge" variant="outlined"
                                                value={state.resistance}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                        <div style={{ display: state.solvedfor === 2 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="potential" label="Potential" variant="outlined"
                                                value={state.current}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
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
                            <Card elevation={1} className="box">
                                <h2 className="title is-5">Capacitor</h2>
                                <figure className="image">
                                    <img src={capacitor} alt='capacitor' ></img>
                                </figure>
                                <br />
                                <Typography>
                                    Capacitance is the ratio of the amount of electric charge stored on a conductor to a difference in electric potential.
                                    <br />
                                    where
                                    <ul>
                                        <br />   <li><strong>q - </strong> is the charge held on the conductor,</li>
                                        <br />  <li>
                                            <img alt="electric potential" className={classes.imgcenter} src='https://wikimedia.org/api/rest_v1/media/math/render/svg/3c012cba2a017a63dd08776373adebb0b2b5e67c' />
                                            is the electric potential,  </li>
                                        <br /> <li>
                                            <strong> σ - </strong>  is the surface charge density.
                                        </li>
                                        <br />  <li>
                                            <strong>dS - </strong> is an infinitesimal element of area on the surface of the conductor,
                                        </li>
                                        <br />   <li>
                                            <strong>r - </strong> is the length from dS to a fixed point M on the conductor
                                        </li>
                                        <br />  <li>
                                            <strong>ε - </strong> is the vacuum permittivity</li>
                                        <br />  <li>

                                            Using this method, the self capacitance of a conducting sphere of radius R is:<br />
                                            <img alt="self capacitance folmula" src='https://wikimedia.org/api/rest_v1/media/math/render/svg/5922a6ebc5a13df9d80d29f3f6c082fa8086e4cd'></img></li>
                                    </ul>
                                    <br />
                                    The SI unit of capacitance is the farad (symbol: F), named after the English physicist Michael Faraday. A 1 farad capacitor, when charged with 1 coulomb of electrical charge,
                                    has a potential difference of 1 volt between its plates. The reciprocal of capacitance is called elastance.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                            <VerticalAds /></Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}
