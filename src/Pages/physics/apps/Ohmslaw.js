import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';

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
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <div className={classes.row}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item lg={8} md={8} sm={12}>
                            <Card raised elevation={0} >
                                <div className={'appHeading'}>
                                    Ohm's Law</div>
                                <CardContent className='appContainer'>
                                    <Typography paragraph>
                                        <img className={classes.imgcenter} src={'https://wikimedia.org/api/rest_v1/media/math/render/svg/ccb6636ea16861f62089604333e92855888f0db2'} alt='ohmslaw' />
                                    </Typography>
                                    <div className={classes.divcalc}>
                                        <div className={classes.formelems} noValidate autoComplete="off">
                                            <table>
                                                <tbody>
                                                    <tr><td>
                                                        <FormControl variant="outlined" className={classes.formControl}>
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
                                                    </td><td>
                                                            <span className={'resPercentage'}> {state.result}</span>
                                                        </td>
                                                    </tr><br />
                                                    <tr style={{ display: state.solvedfor === 1 ? 'none' : 'table-row' }}>
                                                        <TextField id="voltage" label="Voltage (Volts)" variant="outlined"
                                                            value={state.voltage}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                    </tr><br />
                                                    <tr style={{ display: state.solvedfor === 2 ? 'none' : 'table-row' }}>
                                                        <TextField id="resistance" label="Resistance (Ohms)" variant="outlined"
                                                            value={state.resistance}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                    </tr>
                                                    <br />
                                                    <tr style={{ display: state.solvedfor === 0 ? 'none' : 'table-row' }}>
                                                        <TextField id="current" label="Current (Amps)" variant="outlined"
                                                            value={state.current}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                    </tr>
                                                </tbody>
                                            </table>
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
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} sm={false}></Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}
