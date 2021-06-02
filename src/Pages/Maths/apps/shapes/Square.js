import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, FormControl, InputLabel, MenuItem,
    Typography, Container, TextField, Select, Breadcrumbs
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';
import imgSquare from '../../../../Assets/images/square.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '99%',
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
    square: {
        minHeight: '240px',
        minWidth: '240px',
        border: '1px solid brown',
    },
    face_field: {
        marginTop: '25%',
        marginLeft: '50%',
        overflow: 'hidden'
    },
    formControl: {
        display: 'inherit',
        marginTop: '2rem'
    },
    ulElem: {
        "& li": {
            listStyleType: 'decimal',
            marginLeft: '20px'
        }
    },
}));


export default function Square() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        length: '0',
        area: '0',
        perimeter: '0',
        diagonal: '0',
        commonval: '0',
        metrics: 0,
    });

    const onChangeMetrics = (metric, comval) => {
        try {
            let len;
            let cval;
            if (comval || comval === "") {
                cval = comval;
            } else {
                cval = parseFloat(state.commonval === '' ? 0 : state.commonval);
            }
            switch (metric) {
                case 0:
                    setState({
                        ...state,
                        length: parseFloat(cval).toFixed(3),
                        area: parseFloat(Math.pow(cval, 2)).toFixed(3),
                        perimeter: parseFloat(4 * cval).toFixed(3),
                        diagonal: parseFloat(cval * Math.sqrt(2)).toFixed(3),
                        commonval: cval,
                        metrics: 0
                    });
                    break;
                case 1:
                    len = parseFloat(Math.sqrt(cval)).toFixed(3);
                    setState({
                        ...state,
                        length: len,
                        area: parseFloat(cval).toFixed(3),
                        perimeter: parseFloat(4 * len).toFixed(3),
                        commonval: cval,
                        diagonal: parseFloat(len * Math.sqrt(2)).toFixed(3),
                        metrics: 1
                    });
                    break;
                case 2:
                    len = parseFloat(cval / 4).toFixed(3);
                    setState({
                        ...state,
                        length: len,
                        area: parseFloat(Math.pow(len, 2)).toFixed(3),
                        diagonal: parseFloat(len * Math.sqrt(2)).toFixed(3),
                        perimeter: cval,
                        commonval: cval,
                        metrics: 2
                    });
                    break;
                case 3:
                    len = parseFloat(Math.pow(cval, 2) / (2)).toFixed(3);
                    setState({
                        ...state,
                        length: parseFloat(len).toFixed(3),
                        area: parseFloat(Math.pow(len, 2)).toFixed(3),
                        perimeter: parseFloat(4 * cval).toFixed(3),
                        diagonal: cval,
                        commonval: cval,
                        metrics: 3
                    });
                    break;
                default:
                    break;
            }
        } catch (e) { }
    }

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Square calculator | mathcalc</title>
                <meta name="keywords" content="mathcalc, online square calculator, square calculator, free calculator, online calculator" />
                <meta name="description"
                    content="Online square calculator is used to calculate Area and perimeter of a square online for free" />
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        <Breadcrumbs className="subtitle is-spaced is-uppercase has-text-weight-bold" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                            <Link to='/maths/'>Mathamatics</Link>
                                            <Link to='/maths/shapes/'>Shapes</Link>
                                            <Typography className="has-text-weight-bold">Square calculator</Typography>
                                        </Breadcrumbs>
                                    </h1>
                                    <p className="has-text-letter-spacing-wide has-text-grey">
                                        Calculate the length, area, perimeter and diagonal of a rectangle.</p>
                                </div>
                            </div>
                        </section>
                        <Card className="box" >
                            <h2 className={'title is-5'}>Square Calculator</h2>
                            <p >
                                In geometry, a square is a regular quadrilateral,
                                which means that it has four equal sides and four equal angles</p>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xl={6} lg={6} md={12} sm={12}>
                                    <div className={classes.sqouare}>
                                        <figure className="image">
                                            <img src={imgSquare} style={{ minWidth: '255px', maxWidth: '255px', margin: '1rem' }} alt={'square'}></img>
                                        </figure>
                                    </div>
                                </Grid>
                                <Grid item xl={6} lg={6} md={12} sm={12}>
                                    <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                        <InputLabel id="metrics">Calculate For</InputLabel>
                                        <Select
                                            labelId="metrics-label"
                                            id="metrics-outlined"
                                            label="Calculate For" style={{ marginBottom: '2rem', width: '100%' }}
                                            onChange={(e) => { onChangeMetrics(e.target.value) }}
                                            value={state.metrics}
                                        >
                                            <MenuItem value={0}>Length</MenuItem>
                                            <MenuItem value={1}>Area</MenuItem>
                                            <MenuItem value={2}>Perimeter</MenuItem>
                                            <MenuItem value={3}>Diagonal</MenuItem>
                                        </Select>
                                        <TextField id="comonval" type={'number'}
                                            style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                            value={state.commonval} variant="outlined"
                                            onChange={(e) => { onChangeMetrics(state.metrics, e.target.value) }}
                                        />
                                    </FormControl>
                                    <Typography component='label' hidden={state.metrics === 0}>Length :<strong>{state.length}</strong><br /></Typography>
                                    <Typography component='label' hidden={state.metrics === 1}>Area :  <strong>{state.area}</strong><br /></Typography>
                                    <Typography component='label' hidden={state.metrics === 2}>Perimeter : <strong> {state.perimeter}</strong><br /></Typography>
                                    <Typography component='label' hidden={state.metrics === 3}>Diagonal :  <strong>{state.diagonal}</strong><br /></Typography>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card elevation={1} className="box">
                            <h2 className="title is-5"> Shape of Square</h2>

                            <p> A square is a four-sided polygon which has it’s all sides equal in length and the measure of the angles are 90 degrees. The shape of the square is such as, if it is cut by a plane from the center, then both the halves are symmetrical. Each half of the square then looks like a rectangle with opposite sides equal.
                           </p>
                            <br />
                            <h2 className="title is-5">Properties of a Square</h2>
                            <p> The most important properties of a square are listed below:</p>
                            <ul className={classes.ulElem}>
                                <li>  All four interior angles are equal to 90°
                          </li><li>  All four sides of the square are congruent or equal to each other
                          </li><li>The opposite sides of the square are parallel to each other
                          </li><li>  The diagonals of the square bisect each other at 90°
                          </li><li>  The two diagonals of the square are equal to each other
                          </li><li>  The square has 4 vertices and 4 sides
                          </li><li>  The diagonal of the square divide it into two similar isosceles triangles
                          </li><li> The length of diagonals is greater than the sides of the square
                         </li>
                            </ul>
                            <br />

                            <h2 className="title is-5">Area and Perimeter of Square</h2>

                            <p>  The area and perimeter are two main properties that define a square as a square. Let us learn them one by one:
                            </p>
                            <br />
                            <h2 className="title is-5">Area</h2>
                            <p> Area of the square is the region covered by it in a two-dimensional plane. The area here is equal to the square of the sides or side squared. It is measured in square unit.

                            <p><strong>  Area = side <sup>2</sup> per square unit</strong></p>

                            If ‘a’ is the length of the side of square, then;

                            <p><strong>   Area = a <sup>2</sup> sq.unit</strong></p>

                            Also, learn to find Area Of Square Using Diagonals.
                            </p>
                            <br />
                            <h2 className="title is-5">Perimeter</h2>
                            <p> The perimeter of the square is equal to the sum of all its four sides. The unit of the perimeter remains the same as that of side-length of square.
                            </p>
                            <br />
                            <p><strong>   Perimeter = Side + Side + Side + Side = 4 Side </strong></p>
                            <br />
                            <p><strong>    Perimeter = 4 × side of the square </strong></p>
                            <br />
                            <p>  If ‘a’ is the length of side of square, then perimeter is:</p>
                            <br />
                            <p><strong>    Perimeter = 4a unit </strong> </p>
                            <br />
                            <h2 className="title is-5">Length of Diagonal of Square</h2>

                            <p>The length of the diagonals of the square is equal to s√2, where s is the side of the square. As we know, the length of the diagonals is equal to each other. Therefore, by Pythagoras theorem, we can say, diagonal is the hypotenuse and the two sides of the triangle formed by diagonal of the square, are perpendicular and base.</p>
                            <br />
                            <p><strong>Since, Hypotenuse <sup>2</sup> = Base<sup>2</sup> + Perpendicular<sup>2</sup></strong></p>
                            <br />
                            <p><strong>Hence, Diagonal<sup>2</sup> = Side<sup>2</sup> + Side<sup>2</sup></strong></p>
                            <br />
                            <p><strong>d = s√2</strong></p>
                            <p>Where d is the length of the diagonal of a square and s is the side of the square.</p>
                            <br />
                            <h2 className="title is-5">Diagonal of square</h2>
                            <p>Diagonal of square is a line segment that connects two opposite vertices of the square.
                            As we have four vertices of a square, thus we can have two diagonals within a square.
                            Diagonals of the square are always greater than its sides.
                                </p>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
