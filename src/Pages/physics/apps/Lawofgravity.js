import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
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
        width: '40% !important',
    },
    ulElem: {
        listStyle: 'disc !important',
        padding: '1.5rem',
        borderBottom: 'solid',
        borderTop: 'solid',
        "& li": {
            listStyleType: 'disc'
        }
    }
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
                <meta name="keywords" content="Newton's law of universal calculator, online calculator " />
                <meta name="description" content="newton's law of universal gravitation is usually stated as that every particle attracts every other particle in the universe with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <div className={classes.row}>
                    <Grid>
                        <Grid item xl={8} lg={8} md={8} sm={12}>
                            <SubNavBar
                                pageTitle="Newton's gravitation Calculator"
                                links={[{
                                    url: "/physics/",
                                    urlName: "Physics"
                                }]}
                            />
                            <section className="hero" data-v-23847e07>
                                <div style={{ padding: '2rem 0.5rem' }}>
                                    <div className="container">
                                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                            NEWTON'S GRAVITATION CALCULATOR</h1>
                                        <p className="  has-text-grey">
                                            To calculate the Force between the two masses M1 and m2 at r - distance</p>
                                    </div>
                                </div>
                            </section>
                            <Card raised elevation={1} className="box" >
                                <h2 className={'title is-5'}>
                                    Newton's Law of Universal Gravitation</h2>
                                <br />
                                <figure className="image">
                                    <img className={classes.imgcenter} src={'https://wikimedia.org/api/rest_v1/media/math/render/svg/48f74b3b4d591ba1996c4d481f74ac3ab7e279d7'} alt='newtons law of gravity' />
                                </figure>
                                <br />
                                <div className={classes.divcalc}>
                                    <div className={classes.formelems} noValidate autoComplete="off">
                                        <table>
                                            <tbody>
                                                <tr><td>
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
                                                            <MenuItem value={0}>Force</MenuItem>
                                                            <MenuItem value={1}>Mass 1</MenuItem>
                                                            <MenuItem value={2}>Mass 2</MenuItem>
                                                            <MenuItem value={3}>Distance</MenuItem>
                                                        </Select>
                                                    </FormControl>

                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <br />
                                                        <p className={'resPercentage'}>   {state.result}</p>
                                                        <br />
                                                    </td>
                                                </tr>
                                                <tr style={{ display: state.solvedfor === 0 ? 'none' : 'table-row' }}>
                                                    <td>
                                                        <br />
                                                        <TextField id="force" label="Force" variant="outlined"
                                                            value={state.force}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                        <br />
                                                    </td>
                                                </tr>

                                                <tr style={{ display: state.solvedfor === 1 ? 'none' : 'table-row' }}>
                                                    <td>
                                                        <br />
                                                        <TextField id="massOne" label="Mass 1" variant="outlined"
                                                            value={state.massOne}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                        <br />
                                                    </td>
                                                </tr>
                                                <tr style={{ display: state.solvedfor === 2 ? 'none' : 'table-row' }}>
                                                    <td>
                                                        <br />
                                                        <TextField id="massTwo" label="Mass 2" variant="outlined"
                                                            value={state.massTwo}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                        <br />
                                                    </td>
                                                </tr>
                                                <tr style={{ display: state.solvedfor === 3 ? 'none' : 'table-row' }}>
                                                    <td>
                                                        <br />
                                                        <TextField id="distance" label="Distance" variant="outlined"
                                                            value={state.distance}
                                                            onChange={onInputChange}
                                                            type={'number'}
                                                        />
                                                        <br />
                                                    </td>
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
                            </Card>

                            <Card elevation={1} raised className="box">

                                <h2 className="title is-5">The Law of Universal Gravitation</h2>

                                <p> While an apple might not have struck Sir Isaac Newton’s head as myth suggests, the falling of one did inspire Newton to one of the great discoveries in mechanics: The Law of Universal Gravitation. Pondering why the apple never drops sideways or upwards or any other direction except perpendicular to the ground, Newton realized that the Earth itself must be responsible for the apple’s downward motion.
                                    <br />
                                    <br />
                                Theorizing that this force must be proportional to the masses of the two objects involved, and using previous intuition about the inverse-square relationship of the force between the earth and the moon, Newton was able to formulate a general physical law by induction.
                                    <br />
                                    <br />
                                    <h2 className="title is-5">Key Points</h2>
                                    <ul className={classes.ulElem}>
                                        <li>         Sir Isaac Newton’s inspiration for the Law of Universal Gravitation was from the dropping of an apple from a tree.
                               </li><li>     Newton’s insight on the inverse-square property of gravitational force was from intuition about the motion of the earth and the moon.
                                       </li>
                                        <li> The mathematical formula for gravitational force is
                                            <br />
                                        F = (G &nbsp; *&nbsp; M&nbsp; *&nbsp; m&nbsp;) &nbsp;/ &nbsp; ( r)<sup> 2</sup>
                                            <br /> where G is the gravitational constant.
                                        </li>
                                        <li>
                                            <strong> induction:</strong> Use inductive reasoning to generalize and interpret results from applying Newton’s Law of Gravitation.
                                        </li>
                                        <li> <strong> inverse:</strong> Opposite in effect or nature or order.</li>
                                    </ul>
                                    <br />
                                    <br />
                                The Law of Universal Gravitation states that every point mass attracts every other point mass in the universe by a force pointing in a straight line between the centers-of-mass of both points, and this force is proportional to the masses of the objects and inversely proportional to their separation This attractive force always points inward, from one point to the other.
                                <br />
                                    <br />
                                The Law applies to all objects with masses, big or small. Two big objects can be considered as point-like masses, if the distance between them is very large compared to their sizes or if they are spherically symmetric. For these cases the mass of each object can be represented as a point mass located at its center-of-mass.
                                   <br />
                                    <br />
                                While Newton was able to articulate his Law of Universal Gravitation and verify it experimentally, he could only calculate the relative gravitational force in comparison to another force.
                                 It wasn’t until Henry Cavendish’s verification of the gravitational constant that the Law of Universal Gravitation received its final algebraic form:
                                </p>
                                <br />
                                        F = (G &nbsp; *&nbsp; M&nbsp; *&nbsp; m&nbsp;) &nbsp;/ &nbsp; ( r)<sup> 2</sup>
                                <br />
                                <br />
                                where G is the gravitational constant.
                                <br />
                                where F represents the force in Newtons,
                                <br />    M and m represent the two masses in kilograms, and
                                <br />    r represents the separation in meters.
                                <br />    G represents the gravitational constant,
                                <br /> which has a value of <strong> 6.674⋅10<sup>−11</sup> N(m/kg)<sup>2</sup></strong>
                                <br />
                                <br />
                                 Because of the magnitude of  G , gravitational force is very small unless large masses are involved.

                             </Card>
                        </Grid>
                        <Grid item lg={4} md={4} sm={false}></Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}
