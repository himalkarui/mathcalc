import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Grid, FormControl, InputLabel, MenuItem,
    Breadcrumbs, Typography, Container, TextField, Select, Card,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import imgRectangle from '../../../../Assets/images/rectangle.svg';
import VerticalAds from '../../../../Components/VerticalAds';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
        margin: '1rem 1rem 1rem 0rem',
        display: 'block',
        padding: '0px !important',
        height: '60px',
    },
    solved_for: {
        margin: '2rem 1rem 1rem 0rem',
        display: 'block',
        padding: '0px !important',
        height: '60px',
        maxWidth: '255px'
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
        length: '',
        width: '',
        area: '0',
        perimeter: '0',
        diagonal: '0',
        commonval: '0',
        metrics: 2,
        solveby: 'Area',
        inputOne: '',
        inputTwo: '',
    });

    const onChangeInput = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }


    const onChangeMetrics = (metric, isOnchangeinput, isChoosing) => {
        let length, width, solveby;

        if (!isOnchangeinput && state.metrics !== 0 && state.metrics !== 1) {
            if (state.metrics === 0) {
                solveby = 'Width'
            } else if (state.metrics === 1) {
                solveby = 'Length'
            }
            else if (state.metrics === 2) {
                solveby = 'Area';
            }
            else if (state.metrics === 3) {
                solveby = 'Perimeter';
            }
            else if (state.metrics === 4) {
                solveby = 'Diagonal';
            } else if (!solveby) {
                solveby = state.solveby;
            }
        } else if (!solveby) {
            solveby = state.solveby;
        }
        if (metric === 2 || metric === 3 || metric === 4) {
            width = state.inputOne === '' ? 0 : state.inputOne;
            length = state.inputTwo === '' ? 0 : state.inputTwo;
            setState({
                ...state,
                length: parseFloat(length).toFixed(5),
                width: parseFloat(width).toFixed(5),
                area: parseFloat(width * length),
                perimeter: parseFloat(2 * (parseFloat(length) + parseFloat(width))).toFixed(5),
                diagonal: parseFloat(Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2))).toFixed(5),
                metrics: metric,
                solveby: solveby
            });
        }
    }

    useEffect(() => {
        onChangeMetrics(state.metrics, true);
        // eslint-disable-next-line
    }, [state.inputOne, state.inputTwo]);

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Rectangle calculator | mathcalc</title>
                <meta name="keywords" content="calculate Area, perimeter and diagonal of a Rectangle, area calculator, perimeter calculator,free calculator, mathcalc" />
                <meta name="description"
                    content="Online rectangle calculator is used to calculate the area , perimeter and diagonal of the rectangle online for free" />
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <section className="hero" data-v-23847e07>
                            <div style={{ padding: '2rem 0.5rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        <Breadcrumbs className="subtitle is-spaced is-uppercase has-text-weight-bold" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                            <Link to='/maths/'>Mathematics</Link>
                                            <Link to='/maths/shapes/'>Shapes</Link>
                                            <Typography className="has-text-weight-bold">Rectangle calculator</Typography>
                                        </Breadcrumbs>
                                    </h1>
                                    <p className="  has-text-grey">
                                        Calculate the area, perimeter and diagonal of a rectangle.</p>
                                </div>
                            </div>
                        </section>
                        <Card elevation={1} className="box">
                            <h2 className={'title is-5'}>Rectangle Calculator</h2>
                            <p>
                                In Euclidean plane geometry, a rectangle is a quadrilateral with four right angles.
                                It can also be defined as: an equiangular quadrilateral, since equiangular means that all of its angles are equal (360°/4 = 90°);
                                or a parallelogram containing a right angle. A rectangle with four sides of equal length is a square.
                            </p>
                            <div><FormControl variant="outlined" className={classes.solved_for} aria-autocomplete={'none'}>
                                <InputLabel id="metrics">Solved For</InputLabel>
                                <Select
                                    labelId="metrics-label"
                                    id="metrics-outlined"
                                    label="Solved For" style={{ width: '100%', marginBottom: '2rem' }}
                                    onChange={(e) => { onChangeMetrics(e.target.value, false, true) }}
                                    value={state.metrics}
                                >
                                    <MenuItem value={2}>Area</MenuItem>
                                    <MenuItem value={3}>Perimeter</MenuItem>
                                    <MenuItem value={4}>Diagonal</MenuItem>
                                </Select>
                            </FormControl>
                            </div>
                            <div className='chtnE' style={{ fontSize: '30px' }}>
                                <Typography component='label' hidden={!(state.metrics === 0)}>Width :<strong>{state.length}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 1)}>Length :<strong>{state.length}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 2)}>Area :  <strong>{state.area}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 3)}>Perimeter : <strong> {state.perimeter}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 4)}>Diagonal :  <strong>{state.diagonal}</strong><br /></Typography>
                            </div>
                            <Grid container justify="flex-start" >
                                <Grid item>
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    {/* <td colSpan={2}><Typography component='label'>
                                                            {
                                                                state.metrics === 0 ? state.solveby : 'Width'
                                                            }
                                                        </Typography></td> */}
                                                    <td>
                                                        <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                            <TextField type={'number'}
                                                                style={{ width: '100%', marginBottom: '2rem' }}
                                                                label="Width"
                                                                value={state.inputOne} variant="outlined"
                                                                id="inputOne"
                                                                onChange={onChangeInput}
                                                            />
                                                        </FormControl>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    {/* <td colSpan={2}>  <Typography component='label'>
                                                            {
                                                                state.metrics === 1 ? state.solveby : 'Length'
                                                            }
                                                        </Typography></td> */}
                                                    <td>
                                                        <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                            <TextField type={'number'}
                                                                style={{ width: '100%', marginBottom: '2rem' }} label="Length"
                                                                value={state.inputTwo} variant="outlined"
                                                                id="inputTwo"
                                                                onChange={onChangeInput}
                                                            />
                                                        </FormControl>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </Grid>
                                <Grid item>
                                    <div className={classes.sqouare}>
                                        <img src={imgRectangle} style={{ margin: '1rem' }} alt={'square'}></img>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card elevation={1} className="box" >
                            <h2 className="title is-5"> Definition</h2>
                            <p>
                                A rectangle is a type of quadrilateral that has its parallel sides equal to each other and all the four vertices are equal to 90 degrees. Hence, it is also called an equiangular quadrilateral.

                                Since, the opposite sides are equal and parallel, in rectangle, therefore, it can also be termed as a parallelogram.
                            </p>
                            <br />
                            <h2 className="title is-5">Shape of Rectangle</h2>
                            <p> A rectangle is a two-dimensional flat shape. In an XY plane, we can easily represent a rectangle, where the arms of x-axis and y-axis show the length and width of the rectangle, respectively.
                            </p>
                            <br />
                            <h2 className="title is-5">Rectangular Shaped Objects</h2>
                            <p>The most common everyday things or objects we see and are rectangular in shape is Television, computer screen, notebook, mobile phones, CPU , Notice boards, Table, Book, TV screen, Mobile phone, Wall, Magazine, Tennis court, etc.
                            </p>
                            <br />
                            <h2 className="title is-5"> Properties of Rectangle</h2>
                            <p>The properties of rectangle are given below:</p>
                            <ul className={classes.ulElem}>
                                <li>    It has four sides and four vertices
                                </li><li>  Each vertex has angle equal to 90 degrees
                                </li><li>    The opposite sides are equal and parallel
                                </li><li>  Diagonal bisect each other
                                </li><li>  Perimeter is equal to twice of sum of its length and breadth
                                </li><li> Area is equal to product of its length and breadth
                                </li><li> It’s a parallelogram with four right angles.
                                </li><li>    Sum of all interior angles equal to 360 degrees
                                </li>
                            </ul>
                            <br />
                            <h2 className="title is-5">Perimeter of a Rectangle</h2>
                            <p>
                                The perimeter of a rectangle is defined as the total distance covered by the outer boundary of the rectangle. It is measured in unit length. The formula of perimeter is given by:
                            </p>
                            <br />
                            <p><strong> Perimeter, P = 2 (Length + Width)</strong> </p>
                            <br />
                            <h2 className="title is-5">Area of Rectangle</h2>
                            <p>
                                Area is the region covered by a two-dimensional shape in a plane. It is measured in square units. Therefore, the area of the rectangle is the area covered by its outer boundaries. It is equal to the product of length and width.
                                The formula of area of rectangle is:
                            </p>
                            <p><strong> A&nbsp;=&nbsp;Length&nbsp;× &nbsp;Width &nbsp; unit<sup>2</sup></strong> </p>
                            <br />
                            <h2 className="title is-5">Diagonal of a Rectangle</h2>
                            <p>
                                A rectangle has two diagonals, that bisects each other. Both the diagonals are equal in length.
                                Rectangle- Diagonals
                            </p>
                            <br />
                            <h2 className="title is-5">Length of Diagonals</h2>
                            <p>  The rectangle is a symmetrical shape and has both the diagonals equal in length. A diagonal will divide the rectangle into two right angle triangles. Therefore we can easily calculate the length of diagonals using the Pythagoras Theorem, where the diagonals are considered as hypotenuse of the right triangle.
                            </p>
                            <p>  Let D is the hypotenuse, length (L)  and width (W) are the base and perpendicular, respectively.
                                Hence, the length of the diagonal of rectangle will be:</p>

                            <p><strong> D &nbsp;= &nbsp; √(L<sup>2</sup>+W<sup>2</sup>) </strong></p>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds /></Grid>
                </Grid>
            </Container>
        </div >
    );
}
