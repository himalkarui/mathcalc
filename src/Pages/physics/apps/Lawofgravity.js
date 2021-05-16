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

export default function Lawofgravity() {
    const [state, setState] = React.useState({
        force: '1',
        massOne: '1',
        massTwo: '1',
        distance: '1',
        solvedfor: 0,
        result: '0',
    })

    React.useEffect(() => {

        const calcResult = (e) => {
            const gVal = 6.674 / Math.pow(10, 11);
            let fResult = 0;
            let fForce = state.force === '' ? 0 : parseFloat(state.force);
            let fMassOne = state.massOne === '' ? 0 : parseFloat(state.massOne);
            let fMassTwo = state.massTwo === '' ? 0 : parseFloat(state.massTwo);
            let fDistance = state.distance === '' ? 0 : parseFloat(state.distance);
            switch (state.solvedfor) {
                case 0:
                    fResult = (gVal * fMassOne * fMassTwo) / Math.pow(fDistance, 2);
                    break;
                case 1:
                    fResult = (fForce * Math.pow(fDistance, 2)) / (gVal * fMassTwo);
                    break;
                case 2:
                    fResult = (fForce * Math.pow(fDistance, 2)) / (gVal * fMassOne);
                    break;
                case 3:
                    fResult = Math.sqrt((gVal * fMassOne * fMassTwo) / fForce);
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
    }, [state.force, state.massOne, state.massTwo, state.distance, state.solvedfor]);

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Newton's Law of universal gravitation | mathcalc</title>
                <meta name="keywords" content="Newton's law of universal gravitation is usually stated as that every particle attracts every other particle in the universe with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers" />
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
                                    Newton's Law of Universal Gravitation</div>
                                <CardContent className='appContainer'>
                                    <Typography paragraph>
                                        <img className={classes.imgcenter} src={'https://wikimedia.org/api/rest_v1/media/math/render/svg/48f74b3b4d591ba1996c4d481f74ac3ab7e279d7'} alt='newtons law of gravity' />
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
                                                                <MenuItem value={0}>Force</MenuItem>
                                                                <MenuItem value={1}>Mass 1</MenuItem>
                                                                <MenuItem value={2}>Mass 2</MenuItem>
                                                                <MenuItem value={3}>Distance</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </td><td>
                                                            <span className={'resPercentage'}>   {state.result}</span>
                                                        </td>
                                                    </tr>
                                                    <br />
                                                    <tr style={{ display: state.solvedfor === 0 ? 'none' : 'table-row' }}>
                                                        <TextField id="force" label="Force" variant="outlined"
                                                            value={state.force}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                    </tr>
                                                    <br />
                                                    <tr style={{ display: state.solvedfor === 1 ? 'none' : 'table-row' }}>
                                                        <TextField id="massOne" label="Mass 1" variant="outlined"
                                                            value={state.massOne}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                    </tr><br />
                                                    <tr style={{ display: state.solvedfor === 2 ? 'none' : 'table-row' }}>
                                                        <TextField id="massTwo" label="Mass 2" variant="outlined"
                                                            value={state.massTwo}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                    </tr>
                                                    <br />
                                                    <tr style={{ display: state.solvedfor === 3 ? 'none' : 'table-row' }}>
                                                       <TextField id="distance" label="Distance" variant="outlined"
                                                            value={state.distance}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <Typography>
                                        Newton's law of universal gravitation is usually stated as that every particle attracts every other particle in the universe with a force that is directly proportional
                                    to the product of their masses and inversely proportional to the square of the distance between their centers <br />
                                        <br />
                                        where F is the gravitational force acting between two objects, m1 and m2 are the masses of the objects,
                                         r is the distance between the centers of their masses, and G is the gravitational constant.
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
