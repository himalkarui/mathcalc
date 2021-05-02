import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import SubNavBar from '../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
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
    calcHeader: {
        fontFamily: 'system-ui',
        fontStyle: 'normal',
        fontSize: '22px',
        lineHeight: '39px',
        color: '#1e314f',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: '600'
    },
    row: {
        margin: '10px'
    },
    resultDiv: {
        padding: '20px 0',
        marginBottom: '10px',
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '34px',
        color: '#314259',
        '& > span': {
            marginLeft: '8px',
            color: '#1678fb'
        },
    }
}));

export default function SimpleInterest() {
    const [state, setState] = React.useState({
        energy: '0',
        mass: '0',
        speedoflight: '299792458',
    })

    const fnEnergy = (e) => {
        debugger;
        if (e.target.value.length > 35) {
            return
        } else if (isNaN(e.target.value)) {
            return;
        }
        setState({
            ...state, energy: e.target.value,
            mass: (parseFloat(e.target.value === '' ? '0' : e.target.value) / Math.pow(state.speedoflight, 2)).toString()
        })
    }
    const fnMass = (e) => {
        if (e.target.value.length > 35) {
            return
        } else if (isNaN(e.target.value)) {
            return;
        }
        setState({
            ...state, mass: e.target.value,
            energy: (parseFloat(e.target.value === '' ? '0' : e.target.value) * Math.pow(state.speedoflight, 2)).toFixed(3),
        })
    }

    React.useEffect(() => {
        setState({
            ...state,
            energy: parseFloat(state.mass) * Math.pow(state.speedoflight, 2),
            mass: state.energy / Math.pow(state.speedoflight, 2)
        })
        // eslint-disable-next-line
    }, []);


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>E=MC^2- Einstein's Energy Mass Equation</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <div className={classes.row}>
                    <SubNavBar />
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item lg={8} md={8} sm={12}>
                            <h1 className={classes.calcHeader} >Calculate Energy mass (E=MC <sup>2</sup>)</h1>
                            <div className={classes.divcalc}>
                                <div className={classes.formelems} noValidate autoComplete="off">
                                    <TextField id="mass" label="Mass (Kg)" variant="outlined"
                                        value={state.mass}
                                        onChange={fnMass}
                                    /><br />
                                    <TextField id="energy" label="Energy (J)" variant="outlined"
                                        value={state.energy}
                                        onChange={fnEnergy}
                                    /><br />
                                    <TextField id="sppedoflight" label="Speed of Light(M/S)" variant="outlined"
                                        value={state.speedoflight}
                                        disabled
                                    /><br />
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={false}></Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}
