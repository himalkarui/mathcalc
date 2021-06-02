import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Grid, FormControl, InputLabel, MenuItem,
    Typography, Container, TextField, Select, Divider, Card
} from '@material-ui/core';
import SubNavBar from '../../../../Components/SubNavBar';
import imgTriangle from '../../../../Assets/images/triangle.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    inputlabel: {
        display: 'flex'
    },
    td: {
        padding: '30px 14px 0px 10px',
    },
    ulElem: {
        "& li": {
            listStyleType: 'decimal',
            marginLeft: '20px'
        }
    },
}));


export default function Triangle() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        triHeight: '0',
        triBase: '0',
        triFaceA: '0',
        triFaceC: '0',
        triArea: '0',
        triPerimeter: '0',
        triGama: '0',
        gamaArea: '0',
        metrics: 2,
        solveby: '',
        error: '',
        triInRadius: '',
        isHeight: true,
        isBase: true,
        isperimeter: false,
        isFaceA: false,
        isFaceB: false,
        isFaceC: false,
        isArea: false,
        isGamma: false,
    });

    const onChangeInput = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }

    const onChangeMetrics = (metric, isOnchangeinput, isChoosing) => {
        debugger;
        let height = 0, base = 0, faceA = 0, faceB = 0, faceC = 0, solveby = 0, perimeter = 0, gama = 0, area = 0;

        height = state.triHeight === '' ? 0 : parseFloat(state.triHeight);
        base = state.triBase === '' ? 0 : parseFloat(state.triBase);
        faceA = state.triFaceA === '' ? 0 : parseFloat(state.triFaceA);
        faceB = state.triFaceB === '' ? 0 : parseFloat(state.triFaceB);
        faceC = state.triFaceC === '' ? 0 : parseFloat(state.triFaceC);
        area = parseFloat(height * base / 2).toFixed(5);
        perimeter = parseFloat(faceA + faceB + faceC).toFixed(5);
        gama = Math.asin((2 * area) / (faceA * base));

        if (!isOnchangeinput) {
            // if (state.metrics === 0) {
            //     solveby = 'Height'
            // } else if (state.metrics === 1) {
            //     solveby = 'Base'
            // }
            // else
            if (state.metrics === 2) {
                solveby = 'Area';
            }
            else if (state.metrics === 3) {
                solveby = 'Perimeter';
            }
            else if (state.metrics === 4) {
                solveby = 'Gamma';
            } else if (!solveby) {
                solveby = state.solveby;
            }
        } else if (!solveby) {
            solveby = state.solveby;
        }

        if (metric === 0) {
            setState({
                ...state,
                triHeight: ((2 * state.triArea) / base).toFixed(5),
                triArea: state.triArea,
                metrics: metric,
                solveby: solveby,
                isHeight: false,
                isBase: true,
                isperimeter: false,
                isFaceA: false,
                isFaceB: false,
                isFaceC: false,
                isArea: true,
                isGamma: false,
            });
        } else if (metric === 1) {
            setState({
                ...state,
                triBase: ((2 * state.triArea) / height).toFixed(5),
                metrics: metric,
                solveby: solveby,
                isHeight: true,
                isBase: false,
                isperimeter: false,
                isFaceA: false,
                isFaceB: false,
                isFaceC: false,
                isArea: true,
                isGamma: false,
            });
        } else if (metric === 2)
            setState({
                ...state,
                triArea: area,
                triPerimeter: perimeter,
                triGama: gama,
                metrics: metric,
                solveby: solveby,
                isFaceA: false,
                isFaceB: false,
                isFaceC: false,
                isHeight: true,
                isBase: true,
                isperimeter: false,
                isArea: false,
                isGamma: false,
            });
        else if (metric === 3)
            setState({
                ...state,
                triArea: area,
                triPerimeter: perimeter,
                triGama: gama,
                metrics: metric,
                solveby: solveby,
                isFaceA: true,
                isFaceB: true,
                isFaceC: true,
                isHeight: false,
                isBase: false,
                isperimeter: false,
                isArea: false,
                isGamma: false,
            });
        else if (metric === 4) {
            if (state.gamaArea > (faceA * base / 2)) {
                setState({
                    ...state,
                    error: ' Invalid input: make sure &nbsp; A ≤ a×b / 2',
                    metrics: metric,
                    solveby: solveby,
                    triGama: '',
                    isFaceA: true,
                    isFaceB: true,
                    isFaceC: false,
                    isHeight: false,
                    isBase: false,
                    isperimeter: false,
                    isArea: true,
                    isGamma: false,
                })
            } else {
                setState({
                    ...state,
                    // triArea: area,
                    triPerimeter: perimeter,
                    triGama: ((Math.asin((2 * state.triArea) / (faceA * faceB))) * (180 / Math.PI)).toFixed(5) + "°",
                    metrics: metric,
                    solveby: solveby,
                    error: '',
                    isFaceA: true,
                    isFaceB: true,
                    isFaceC: false,
                    isHeight: false,
                    isBase: false,
                    isperimeter: false,
                    isArea: true,
                    isGamma: false,
                });
            }
        }
        else if (metric === 5) {
            setState({
                ...state,
                // triArea: area,
                triPerimeter: perimeter,
                triGama: ((Math.asin((2 * state.triArea) / (faceA * faceB))) * (180 / Math.PI)).toFixed(5) + "°",
                metrics: metric,
                solveby: solveby,
                triInRadius: ((faceA + faceB + faceC) / 2).toFixed(3),
                error: '',
                isFaceA: true,
                isFaceB: true,
                isFaceC: true,
                isHeight: false,
                isBase: false,
                isperimeter: false,
                isArea: false,
                isGamma: false,
            });
        }
    }

    const onChoosing = (metric) => {
        setState({
            ...state,
            metrics: metric,
        });
    }

    useEffect(() => {
        onChangeMetrics(state.metrics, false);
        // eslint-disable-next-line
    }, [state.metrics, state.triHeight, state.triArea, state.triBase, state.gamaArea, state.triPerimeter, state.triGama, state.triFaceA, state.triFaceB, state.triFaceC]);

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Triangle calculator | mathcalc</title>
                <meta name="keywords" content="Online triangle calculator, mathcalc, free calculator, online calculator, free triangle calculator" />
                <meta name="description"
                    content="Online triangle calculator is used to calculate Area, perimeter of a triangle, three sides of the triangle and angle (gamma)" />
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            links={[{
                                url: '/maths/',
                                urlName: 'Mathamatics'
                            }, {
                                url: '/maths/shapes/',
                                urlName: 'Shapes'
                            }]}
                            pageTitle="Triangle Calculator"
                            txtTitle="Triangle calculator is used to calculate Area, Perimeter, Gamma and InRadius of triangle"
                        />
                        <Card elevation={1} className="box" >
                            <h2 className={'title is-5'}>Triangle Calculator</h2>
                            <p >
                                A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry.
                                A triangle with vertices A, B, and C is denoted \triangle ABC. In Euclidean geometry,
                                any three points, when non-collinear, determine a unique triangle and simultaneously, a unique plane.  </p>

                            <div>
                                <FormControl variant="outlined" className={classes.solved_for} aria-autocomplete={'none'}>
                                    <InputLabel id="metrics" >Solved For</InputLabel>
                                    <Select
                                        labelId="metrics-label"
                                        id="metrics-outlined"
                                        label="Solved For" style={{ width: '100%', marginBottom: '2rem' }}
                                        onChange={(e) => { onChoosing(e.target.value) }}
                                        value={state.metrics}
                                    >
                                        <MenuItem value={0}>Height</MenuItem>
                                        <MenuItem value={1}>Base</MenuItem>
                                        <Divider />
                                        <MenuItem value={2}>Area</MenuItem>
                                        <MenuItem value={3}>Perimeter</MenuItem>
                                        <MenuItem value={4}>Gamma</MenuItem>
                                        <MenuItem value={5}>InRadius</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='chtnE' style={{ fontSize: '30px' }}>
                                <Typography component='label' hidden={!(state.metrics === 0)}>Height : <strong>{state.triHeight.toString()}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 1)}>Base : <strong>{state.triBase.toString()}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 2)}>Area :  <strong>{state.triArea.toString()}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 3)}>Perimeter : <strong> {state.triPerimeter.toString()}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 4)}>Gamma (γ) :  <strong>{state.triGama.toString()}</strong><br /></Typography>
                                <Typography component='label' hidden={!(state.metrics === 5)}>In Radius :  <strong>{state.triInRadius.toString()}</strong><br /></Typography>
                            </div>
                            <div className='chtnE' style={{ color: 'red' }}>
                                <span>{state.error}</span>
                            </div>
                            <Grid container justify="flex-start" >
                                <Grid item xl={6} lg={6} md={12} sm={12}>
                                    <div>
                                        {
                                            state.isBase ? <>  <span><strong>Base</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem' }}
                                                        value={state.triBase} variant="outlined"
                                                        id="triBase"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl>
                                            </> : <></>
                                        }
                                        {
                                            state.isHeight ? <>
                                                <span><strong>Height</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem' }}
                                                        value={state.triHeight} variant="outlined"
                                                        id="triHeight"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl>
                                            </> : <></>
                                        }
                                        {
                                            state.isArea ? <>
                                                <span><strong>Area</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem' }}
                                                        value={state.triArea} variant="outlined"
                                                        id="triArea"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl>
                                            </> : <></>
                                        }
                                        {
                                            state.isFaceA ? <>
                                                <span><strong>A Side</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem' }}
                                                        value={state.triFaceA} variant="outlined"
                                                        id="triFaceA"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl>
                                            </> : <></>
                                        }
                                        {
                                            state.isFaceB ? <> <span><strong>B Side</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem', }}
                                                        value={state.triFaceB} variant="outlined"
                                                        id="triFaceB"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl>
                                            </> : <></>
                                        }
                                        {
                                            state.isFaceC ? <> <span><strong>C Side</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem', }}
                                                        value={state.triFaceC} variant="outlined"
                                                        id="triFaceC"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl>
                                            </> : <></>
                                        }
                                        {
                                            state.isperimeter ? <><span><strong>Perimeter</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem' }}
                                                        value={state.perimeter} variant="outlined"
                                                        id="perimeter"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl>
                                            </> : <></>
                                        }
                                        {
                                            state.istriGama ? <>
                                                <span><strong>Gamma</strong></span><br />
                                                <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                    <TextField type={'number'}
                                                        style={{ width: '100%', marginBottom: '2rem' }}
                                                        value={state.triGama} variant="outlined"
                                                        id="triGama"
                                                        onChange={onChangeInput}
                                                        placeholder={'0'}
                                                    />
                                                </FormControl></> : <></>
                                        }
                                    </div>


                                </Grid>
                                <Grid item xl={6} lg={6} md={12} sm={12}>
                                    <div className={classes.sqouare}>
                                        <img src={imgTriangle} style={{ margin: '1rem' }} alt={'square'}></img>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card elevation={1} className="box">
                            <h2 className="title is-5">Definition</h2>
                            <p>
                                As we discussed in the introduction, a triangle is a type of polygon, which has three sides, and the two sides are joined end to end is called the vertex of the triangle. An angle is formed between two sides. This is one of the important parts of geometry.

                                Some major concepts, such as Pythagoras theorem and trigonometry, are dependent on triangle properties. A triangle has different types based on its angles and sides.
                            </p>
                            <br />
                            <h2 className="title is-5"> Shape of Triangle</h2>
                            <p>
                                Triangle is a closed two-dimensional shape. It is a three-sided polygon. All sides are made of straight lines. The point where two straight lines join is the vertex. Hence, the triangle has three vertices. Each vertex forms an angle.
                            </p>
                            <br />
                            <h2 className="title is-5"> Angles of Triangle</h2>
                            <p>
                                There are three angles in a triangle. These angles are formed by two sides of the triangle, which meets at a common point, known as the vertex. The sum of all three interior angles is equal to 180 degrees.
                            </p>

                            <p>
                                If we extend the side length outwards, then it forms an exterior angle. The sum of consecutive interior and exterior angles of a triangle is supplementary.
                            </p>

                            <p> Let us say, ∠1, ∠2 and ∠3 are the interior angles of a triangle.
                                </p>
                            <p> When we extend the sides of the triangle in the outward direction, then the three exterior angles formed are ∠4, ∠5 and ∠6, which are consecutive to ∠1, ∠2 and ∠3, respectively.
                          </p>

                            <br />
                            <p>   Hence,</p>

                            <p>∠1 + ∠4 = 180°   ……(i)</p>

                            <p>∠2 + ∠5 = 180°  …..(ii)</p>

                            <p>∠3 + ∠6 = 180°  …..(iii)</p>

                            <p>   If we add the above three equations, we get;</p>

                            <p>    ∠1+∠2+∠3+∠4+∠5+∠6 = 180° + 180° + 180°</p>

                            <p>    Now, by angle sum property we know,</p>

                            <p>   ∠1+∠2+∠3 = 180°</p>

                            <p>   Therefore,</p>

                            <p>   180 + ∠4+∠5+∠6 = 180° + 180° + 180°</p>

                            <p>   ∠4+∠5+∠6 = 360°</p>

                            <p>   This proves that the sum of the exterior angles of a triangle is equal to 360 degrees.
                         </p>
                            <br />
                            <h2 className="title is-5">Properties</h2>

                            <p>Each and every shape in Maths has some properties which distinguish them from each other. Let us discuss here some of the properties of triangles.
                            </p>

                            <ul className={classes.ulElem}>

                                <li>          A triangle has three sides and three angles.
                   </li><li>     The sum of the angles of a triangle is always 180 degrees.
                   </li><li> The exterior angles of a triangle always add up to 360 degrees.
                   </li><li> The sum of consecutive interior and exterior angle is supplementary.
                   </li><li>The sum of the lengths of any two sides of a triangle is greater than the length of the third side. Similarly, the difference between the lengths of any two sides of a triangle is less than the length of the third side.
                   </li><li>The shortest side is always opposite the smallest interior angle. Similarly, the longest side is always opposite the largest interior angle.
                            </li>
                            </ul>
                            <br />
                            <h2 className="title is-5">  Types</h2>
                            <p>                            On the basis of length of the sides, triangles are classified into three categories:
                            </p>

                            <ul className={classes.ulElem}>
                                <li>Scalene Triangle</li>
                                <li>Isosceles Triangle</li>
                                <li>Equilateral Triangle</li>
                            </ul>
                            <br />
                            <p> On the basis of measurement of the angles, triangles are classified into three categories:
                           </p>
                            <ul className={classes.ulElem}>
                                <li>Acute Angle Triangle</li>
                                <li>Right Angle Triangle</li>
                                <li>Obtuse Angle Triangle</li>
                            </ul>
                            <br />
                            <h2 className="title is-5">  Scalene Triangle</h2>
                            <p>
                                A scalene triangle is a type of triangle, in which all the three sides have different side measures. Due to this, the three angles are also different from each other.
                             </p>
                            <br />
                            <h2 className="title is-5"> Isosceles Triangle</h2>
                            <p> In an isosceles triangle, two sides have equal length. The two angles opposite to the two equal sides are also equal to each other.
                            </p>
                            <br />
                            <h2 className="title is-5"> Equilateral Triangle</h2>
                            <p>     An equilateral triangle has all three sides equal to each other. Due to this all the internal angles are of equal degrees, i.e. each of the angles is 60°

                       </p>
                            <br />
                            <h2 className="title is-5"> Acute Angled Triangle</h2>
                            <p> An acute triangle has all of its angles less than 90°.
                           </p>
                            <br />
                            <h2 className="title is-5"> Right Angled Triangle</h2>
                            <p> In a right triangle, one of the angles is equal to 90° or right angle.
                           </p>
                            <br />
                            <h2 className="title is-5"> Obtuse Angled Triangle</h2>
                            <p>
                                An obtuse triangle has any of its one angles more than 90°.
                            </p>
                            <br />
                            <h2 className="title is-5">  Perimeter of Triangle</h2>
                            <p>
                                A perimeter of a triangle is defined as the total length of the outer boundary of the triangle. Or we can say, the perimeter of the triangle is equal to the sum of all its three sides. The unit of the perimeter is same as the unit of sides of the triangle.
                            </p>
                            <br />
                            <p><strong> Perimeter = Sum of All Sides</strong></p>
                            <br />
                            If ABC is a triangle, where AB, BC and AC are the lengths of its sides, then the perimeter of ABC is given by:

                            <p><strong>  Perimeter = AB+BC+AC</strong></p>
                            <br />
                            <h2 className="title is-5">  Area of a Triangle</h2>
                            <p>
                                The area of a triangle is the region occupied by the triangle in 2d space. The area for different triangles varies from each other depending on their dimensions. We can calculate the area if we know the base length and the height of a triangle. It is measured in square units.

                                Suppose a triangle with base ‘B’ and height ‘H’ is given to us, then, the area of a triangle is given by-
                            </p>
                            <br />
                            <strong><p>Area of a triangle formula</p> </strong>
                            Formula:

                            <strong><p>  Area of triangle =  Half of Product of Base and Height
                               </p>
                            </strong>
                            <strong><p>  Area = 1/2 × Base × Height </p></strong>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}