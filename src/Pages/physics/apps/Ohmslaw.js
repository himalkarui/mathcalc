import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
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
        width: '243px',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            minWidth: '243px'
        },
    },
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
}));

export default function Ohmslaw() {
    const [state, setState] = React.useState({
        current: '0',
        voltage: '0',
        resistance: '0',
        solvedfor: 0,
        result: 0,
    })

    React.useEffect(() => {

        const calcResult = (e) => {

            let fResult = 0;
            let fcurrent = state.current === '' ? 0 : parseFloat(state.current);
            let fvoltage = state.voltage === '' ? 0 : parseFloat(state.voltage);
            let fresistance = state.resistance === '' ? 0 : parseFloat(state.resistance);
            switch (state.solvedfor) {
                case 0:
                    fResult = (fvoltage / fresistance).toFixed(4) + ' Amps';
                    break;
                case 1:
                    fResult = (fcurrent * fresistance).toFixed(4) + ' Volts';
                    break;
                case 2:
                    fResult = (fvoltage / fcurrent).toFixed(4) + ' Ohms';
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
    }, [state.current, state.voltage, state.resistance, state.solvedfor]);

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Ohm's law | mathcalc</title>
                <meta name="keywords" content="Mathcalc, ohm's law calculator, free online ohm's law calculator" />
                <meta name="description" content="Ohm's law calculator is used to calculate the current ,voltage and resistance on the conductor at constant temperature" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <div className={classes.row}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item lg={8} md={8} sm={12}>
                            <SubNavBar
                                pageTitle="Ohm's Law Calculator"
                                links={[{
                                    url: "/physics/",
                                    urlName: "Physics"
                                }]}
                            />
                            <section className="hero" data-v-23847e07>
                                <div style={{ padding: '2rem 0.5rem' }}>
                                    <div className="container">
                                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                            ONLINE OHM'S LAW CALCULATOR</h1>
                                        <p className="  has-text-grey">
                                            To calculate the resistance, current and voltage of a conductor at constant temperature</p>
                                    </div>
                                </div>
                            </section>
                            <Card raised elevation={1} className="box" >
                                <h2 className={'title is-5'}>
                                    Ohm's Law</h2>
                                <Typography paragraph>
                                    <img className={classes.imgcenter} src={'https://wikimedia.org/api/rest_v1/media/math/render/svg/ccb6636ea16861f62089604333e92855888f0db2'} alt='ohmslaw' />
                                </Typography>
                                <div className={classes.divcalc}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <FormControl variant="outlined" className={classes.formelems}>
                                                <InputLabel id="demo-simple-select-outlined-label">Solved For</InputLabel>
                                                <Select
                                                    id="metrics-outlined"
                                                    label="Solved For" style={{ width: '100%', minWidth: '120px' }}
                                                    onChange={(e) => { setState({ ...state, solvedfor: e.target.value }) }}
                                                    value={state.solvedfor}
                                                    variant={'outlined'}
                                                    aria-label="Select"
                                                >
                                                    <MenuItem value={0}>Current</MenuItem>
                                                    <MenuItem value={1}>Voltage</MenuItem>
                                                    <MenuItem value={2}>Resistance</MenuItem>
                                                </Select>
                                            </FormControl>

                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <p className={'resPercentage'}> {state.result}</p>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.formelems} noValidate autoComplete="off">

                                        <div style={{ display: state.solvedfor === 1 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="voltage" label="Voltage (Volts)" variant="outlined"
                                                value={state.voltage}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                        <div style={{ display: state.solvedfor === 2 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="resistance" label="Resistance (Ohms)" variant="outlined"
                                                value={state.resistance}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />
                                        </div>
                                        <div style={{ display: state.solvedfor === 0 ? 'none' : 'table-row' }}>
                                            <br />
                                            <TextField id="current" label="Current (Amps)" variant="outlined"
                                                value={state.current}
                                                onChange={onInputChange}
                                                type={'number'}
                                            />

                                        </div>

                                    </div>
                                </div>
                                <Typography>
                                    Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points. Introducing the constant of proportionality,
                                    the resistance, one arrives at the usual mathematical equation that describes this relationship:   <br />
                                    <br />
                                    <img className={classes.imgcenter} src={'https://upload.wikimedia.org/wikipedia/commons/d/de/OhmsLaw.svg'} alt='ohmslaw circuit' />
                                    <br />
                                    where I is the current through the conductor in units of amperes, V is the voltage measured across the conductor in units of volts,
                                    and R is the resistance of the conductor in units of ohms
                             </Typography>
                            </Card>
                            <br />
                            <Card className="box" elevation={1}>
                                <h2 className="title is-4">Frequently Asked Questions – FAQs</h2>
                                <h2 className="title is-5">What does Ohm’s law state?</h2>
                                <p>Ohm’s law states that the current through a conductor between two points is directly proportional to the voltage across the two points.
                              </p>
                                <br />
                                <h2 className="title is-5">  What can Ohm’s Law be used for?</h2>
                                <p>  Ohm’s law is used to validate the static values of circuit components such as current levels, voltage supplies, and voltage drops.
                              </p>
                                <br />
                                <h2 className="title is-5">
                                    Is Ohm’s Law Universal?</h2>
                                <p> No. Ohm’s law is not a universal law. This is because ohm’s law is only applicable to ohmic conductors such as iron and copper but is not applicable to non-ohmic conductors such as semiconductors.
                               </p>
                                <br />
                                <h2 className="title is-5">   Why is Ohm’s law not applicable to semiconductors?</h2>
                                <p>  Ohm’s law doesn’t apply to semiconducting devices because they are nonlinear devices. This means that the ratio of voltage to current doesn’t remain constant for variations in voltage.
                             </p>
                                <br />
                                <h2 className="title is-5">  When does Ohm’s law fail?</h2>
                                <p>  Ohm’s law fails to explain the behaviour of semiconductors and unilateral devices such as diodes. Ohm’s law may not give the desired results if the physical conditions such as temperature or pressure are not kept constant.
                              </p>
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
