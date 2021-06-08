import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Grid, FormControl, InputLabel, MenuItem,
    Typography, Container, TextField, Select, Card
} from '@material-ui/core';
import SubNavBar from '../../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '99%',
    },
    ulElem: {
        "& li": {
            listStyleType: 'decimal',
            marginLeft: '20px'
        }
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, rgb(0 85 255) 0%, #1962BF 100%) 0% 0% no-repeat padding-box",
        fontSize: 15,
        color: "white",
        marginTop: 14,
        padding: '26px',
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    circle_input: {
        minHeight: '210px',
        minWidth: '210px',
        maxWidth: '210px',
        borderRadius: '50%',
        border: '0px solid brown',
        boxShadow: '0px 0px 4px black'
    },
    radius_field: {
        marginTop: '25%',
        marginLeft: '50%',
        overflow: 'hidden'
    },
    formControl: {
        marginTop: '2rem'
    }
}));


export default function Circle() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        radius: '0',
        diameter: '0',
        area: '0',
        circumference: '0',
        commonval: '0',
        metrics: 0,
    });

    const onChangeRadius = (e) => {
        let rad = parseFloat(e.target.value === '' ? 0 : e.target.value)
        setState({
            ...state,
            radius: e.target.value,
            diameter: (2 * rad).toFixed(3),
            area: (Math.PI * Math.pow(rad, 2)).toFixed(3),
            circumference: (2 * Math.PI * rad).toFixed(3),
            metrics: 0,
            commonval: rad
        });
    }

    const onChangeMetrics = (metric, comval) => {
        let rad;
        let cval;
        if (comval || comval === "") {
            cval = comval;
        } else {
            cval = parseFloat(state.commonval === '' ? 0 : state.commonval);
        }
        if (cval !== "") {

            switch (metric) {
                case 0:
                    setState({
                        ...state,
                        radius: cval,
                        diameter: (2 * cval).toFixed(3),
                        area: (Math.PI * Math.pow(cval, 2)).toFixed(3),
                        circumference: (2 * Math.PI * cval).toFixed(3),
                        commonval: cval,
                        metrics: 0
                    });
                    break;
                case 1:
                    setState({
                        ...state,
                        radius: parseFloat(cval / 2).toFixed(3),
                        diameter: cval.toFixed(3),
                        area: (Math.PI * Math.pow((cval / 2), 2)).toFixed(3),
                        circumference: (2 * Math.PI * (cval / 2)).toFixed(3),
                        commonval: cval,
                        metrics: 1
                    });
                    break;
                case 2:
                    rad = parseFloat(Math.sqrt(cval / Math.PI)).toFixed(3);
                    setState({
                        ...state,
                        radius: rad,
                        diameter: (2 * rad).toFixed(3),
                        area: cval,
                        circumference: parseFloat(2 * Math.PI * rad).toFixed(3),
                        commonval: cval,
                        metrics: 2
                    });
                    break;
                case 3:
                    rad = parseFloat(cval / (2 * Math.PI)).toFixed(3);
                    setState({
                        ...state,
                        radius: rad,
                        diameter: (2 * rad).toFixed(3),
                        area: (Math.PI * Math.pow(rad, 2)).toFixed(3),
                        circumference: cval,
                        commonval: cval,
                        metrics: 3
                    });
                    break;
                default:
                    break;
            }
        } else {
            setState({
                ...state, commonval: '',
                radius: 0,
                diameter: 0,
                area: 0,
                circumference: 0,
            })
        }
    }

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Circle calculator | mathcalc</title>
                <meta name="keywords" content="Online circle calculator, free calculator, online calculator, mathcalc" />
                <meta name="description"
                    content="Calculate diameter, Area and circumference of a circle online for free" />
            </Helmet>
            <Container maxWidth={'xl'}  >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            links={[{
                                url: '/maths/',
                                urlName: 'Mathematics'
                            },
                            {
                                url: '/maths/shapes/',
                                urlName: 'Shapes'
                            }]}
                            pageTitle="Circle calculator"
                            txtTitle="Circle calculator is used to calculate the area , circumference and diameter of a circle"
                        />
                        <br />
                        <Card elevation={1} className="box">
                            <h2 className={'title is-5'}>Circle Calculator</h2>
                            <p>
                                Circle is a particular shape and defined as the set of points in a plane placed at equal
                                distance from a single point called the center of the circle
                                </p>
                            <br />
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xl={6} lg={9} md={12} sm={12}>
                                    <div className={classes.circle_input}>
                                        <TextField id="radius" className={classes.radius_field}
                                            value={state.radius} label="Enter Radius" variant="standard"
                                            type={'number'}
                                            onChange={onChangeRadius} />
                                    </div>
                                </Grid>
                                <Grid item xl={6} lg={6} md={12} sm={12}>
                                    <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                        <InputLabel id="metrics">Calculate For</InputLabel>
                                        <Select
                                            labelId="metrics-label"
                                            id="metrics-outlined"
                                            label="Calculate For" style={{ marginBottom: '2rem' }}
                                            onChange={(e) => { onChangeMetrics(e.target.value) }}
                                            value={state.metrics}
                                        >
                                            <MenuItem value={0}>Radius</MenuItem>
                                            <MenuItem value={1}>Diameter</MenuItem>
                                            <MenuItem value={2}>Area</MenuItem>
                                            <MenuItem value={3}>Circumference</MenuItem>
                                        </Select>
                                        <TextField id="comonval" type={'number'}
                                            style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                            value={state.commonval} variant="outlined"
                                            onChange={(e) => { onChangeMetrics(state.metrics, e.target.value) }}
                                        />
                                    </FormControl>
                                    <br />
                                    <div>
                                        <Typography component='label' hidden={state.metrics === 0}>Radius : <strong>{state.radius}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 1}>Diameter :  <strong>{state.diameter}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 2}>Area : <strong> {state.area}</strong><br /></Typography>
                                        <Typography component='label' hidden={state.metrics === 3}>Circumference :  <strong>{state.circumference}</strong><br /></Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card className="box" elevation={1}>
                            <h2 className="title is-4"> Frequently Asked Questions on Circles</h2>
                            <h2 className="title is-5">
                                Properties of circle
                            </h2>
                            <ul className={classes.ulElem}>
                                <li>  The circle is the shape with the largest area for a given length of perimeter (see Isoperimetric inequality).
                              </li>   <li> The circle is a highly symmetric shape: every line through the centre forms a line of reflection symmetry, and it has rotational symmetry around the centre for every angle. Its symmetry group is the orthogonal group O(2,R). The group of rotations alone is the circle group T.
                              </li>   <li>    All circles are similar.
                              </li>   <li>   A circle circumference and radius are proportional.
                              </li>   <li>  The area enclosed and the square of its radius are proportional.
                                </li>   <li>   The constants of proportionality are 2π and π respectively.
                                </li>   <li>  The circle that is centred at the origin with radius 1 is called the unit circle.
                                </li>   <li>  Thought of as a great circle of the unit sphere, it becomes the Riemannian circle.
                                </li>   <li>  Through any three points, not all on the same line, there lies a unique circle. In Cartesian coordinates, it is possible to give explicit formulae for the coordinates of the centre of the circle and the radius in terms of the coordinates of the three given points
                               </li>
                            </ul>
                            <br />
                            <h2 className="title is-5">What is called a circle?</h2>
                            <p>
                                A circle is a closed two-dimensional curve shaped figure, where all the points on the surface of the circle are equidistant from the centre point.
                        </p>
                            <br />
                            <h2 className="title is-5">What are the different parts of a circle?</h2>
                            <p>
                                The different parts of a circle are radius, diameter, chord, tangent, arc, centre, secant, sector.
                        </p>
                            <br />
                            <h2 className="title is-5">The circle formulas.</h2>
                            <p>
                                If “r” is the radius of the circle, then the formula for the area and the circumference of a circle are:
                                Circumference of a Circle = 2πr units
                                Area of a circle = πr2 square units.
                            </p>
                            <br />
                            <h2 className="title is-5">Radius and diameter of a circle.</h2>
                            <p>The radius of a circle is the line segment that connects the centre point and the circle surface. The diameter is considered as the longest chord of a circle which is twice the radius.
                            </p>
                            <br />
                            <h2 className="title is-5"> Define chord</h2>
                            <p>
                                The chord of a circle is defined as the straight line segment whose both endpoints touch the surface of a circle. The longest chord of a circle is a diameter.
                            </p>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
