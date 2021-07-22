import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Typography, FormControl, InputLabel, Select, MenuItem, Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import inductanceimg from '../../../Assets/images/inductance.png';
import inductor from '../../../Assets/images/inductor.png';
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
    },
}));

export default function Inductance() {
    const [state, setState] = React.useState({
        changeincurrent: 0,
        inducedvoltage: 0,
        inductance: 0,
        solvedfor: 0,
        result: 0,
    })

    React.useEffect(() => {
        const calcResult = (e) => {
            let fResult = 0;
            let fVoltage = state.inducedvoltage === '' ? 0 : parseFloat(state.inducedvoltage);
            let fCurrent = state.changeincurrent === '' ? 0 : parseFloat(state.changeincurrent);
            let fInductance = state.inductance === '' ? 0 : parseFloat(state.inductance);
            switch (state.solvedfor) {
                case 0:
                    fResult = (fVoltage / fCurrent).toFixed(4) + ' Henry';
                    break;
                case 1:
                    fResult = (fVoltage / fInductance).toFixed(4) + ' Amps';
                    break;
                case 2:
                    fResult = (fInductance * fCurrent).toFixed(4) + ' Volts';
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
    }, [state.changeincurrent, state.inducedvoltage, state.inductance, state.solvedfor]);

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Inductance calculator | mathcalc</title>
                <meta name="keywords" content="Inductance,mathcalc, induced voltage calculator, inductor calculator" />
                <meta name="description" content="Inductance is defined as the ratio of the induced voltage to the rate of change of current causing it. It is a proportionality factor that depends on the geometry of circuit conductors and the magnetic permeability of nearby materials." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Inductance Calculator"
                    links={[{
                        url: "/physics/",
                        urlName: "Physics"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                ONLINE FREE INDUCTANCE CALCULATOR</h1>
                            <p className="  has-text-grey">
                                To calculate the inductance , change in current and induced voltage.   </p>
                        </div>
                    </div>
                </section>
                <div className={classes.row}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item lg={8} md={8} sm={12}>
                            <Card raised elevation={1} className="box" >
                                <h2 className={'title is-5'}>
                                    Inductance</h2>
                                <img className={classes.imgcenter} src={inductanceimg} alt='inductance im' />
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
                                                    <MenuItem value={0}>Inductance</MenuItem>
                                                    <MenuItem value={1}>Change in Current</MenuItem>
                                                    <MenuItem value={2}>Induced Voltage</MenuItem>
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
                                            <TextField id="inductance" label="Inductance" variant="outlined"
                                                value={state.inductance}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                        <div style={{ display: state.solvedfor === 2 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="inducedvoltage" label="Induced Voltage" variant="outlined"
                                                value={state.inducedvoltage}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                        <div style={{ display: state.solvedfor === 1 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="changeincurrent" label="Change in Current" variant="outlined"
                                                value={state.changeincurrent}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <hr />
                            <Card elevation={1} className="box">
                                <h2 className="title is-5">Definition of Inductance</h2>
                                <Typography>
                                    Inductance is defined as the ratio of the induced voltage to the rate of change of current causing it. It is a proportionality factor that depends
                                    on the geometry of circuit conductors and the magnetic permeability of nearby materials   <br />
                                    <img className={classes.imgcenter} src={inductor} alt='simple inductor' />
                                    <br />
                                    where v(t) is induced voltage in units of volts,
                                     di/dt is the rate of change of current in units of amphere,
                                    and L is the Self Inductance of the conductor in units of Hendry
                                    <br />
                                    <br />
                                    Thus, inductance is a property of a conductor or circuit, due to its magnetic field, which tends to oppose changes in current through the circuit. The unit of inductance in the SI system is the henry (H), named after American scientist Joseph Henry, which is the amount of
                                    inductance which generates a voltage of one volt when the current is changing at a rate of one ampere per second.
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
