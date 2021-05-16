import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, CardContent, FormControl, InputLabel, MenuItem,
    Typography, Container, TextField, Select, Divider
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
    }
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
        error: ''
    });

    const onChangeInput = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }

    const onChangeMetrics = (metric, isOnchangeinput, isChoosing) => {
        let height = 0, base = 0, faceA = 0, faceC = 0, solveby = 0, perimeter = 0, gama = 0, area = 0;

        height = state.triHeight === '' ? 0 : parseFloat(state.triHeight);
        base = state.triBase === '' ? 0 : parseFloat(state.triBase);
        faceA = state.triFaceA === '' ? 0 : parseFloat(state.triFaceA);
        faceC = state.triFaceC === '' ? 0 : parseFloat(state.triFaceC);
        area = parseFloat(height * base / 2).toFixed(5);
        perimeter = parseFloat(faceA + base + faceC).toFixed(5);
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
                triHeight: ((2 * state.gamaArea) / base).toFixed(5),
                triArea: state.gamaArea,
                metrics: metric,
                solveby: solveby
            });
        } else if (metric === 1) {
            setState({
                ...state,
                triBase: ((2 * state.gamaArea) / height).toFixed(5),
                metrics: metric,
                solveby: solveby
            });
        } else if (metric === 2)
            setState({
                ...state,
                triArea: area,
                triPerimeter: perimeter,
                triGama: gama,
                metrics: metric,
                solveby: solveby
            });
        else if (metric === 3)
            setState({
                ...state,
                triArea: area,
                triPerimeter: perimeter,
                triGama: gama,
                metrics: metric,
                solveby: solveby
            });
        else if (metric === 4) {
            if (state.gamaArea > (faceA * base / 2)) {
                setState({
                    ...state,
                    error: ' Invalid input: make sure &nbsp; A ≤ a×b / 2',
                    metrics: metric,
                    solveby: solveby,
                    triGama: ''
                })
            } else {
                setState({
                    ...state,
                    // triArea: area,
                    triPerimeter: perimeter,
                    triGama: ((Math.asin((2 * state.gamaArea) / (faceA * base))) * (180 / Math.PI)).toFixed(5) + "°",
                    metrics: metric,
                    solveby: solveby,
                    error: ''
                });
            }
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
    }, [state.triHeight, state.triBase, state.gamaArea, state.triPerimeter, state.triGama, state.triFaceA, state.triFaceC]);

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Triangle calculator || Calculate Area, perimeter of a triangle, three sides of the triangle and angle (gamma) || MathCalc.xyz</title>
                <meta name="keywords" content="One stop tool for doing all kind of mathamatical calculations" />
                <meta name="description"
                    content="mathcalc is the all in one web app for all kind of mathamatical calculations in all fields of science like physics ,chemistry ,mathamatics, quantum physics and a lot " />
            </Helmet>
            <Container maxWidth={'xl'} >
                <SubNavBar />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>Triangle Calculator</div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'} >
                                    A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry.
                                    A triangle with vertices A, B, and C is denoted \triangle ABC. In Euclidean geometry,
                                any three points, when non-collinear, determine a unique triangle and simultaneously, a unique plane.  </p>

                                <div><FormControl variant="outlined" className={classes.solved_for} aria-autocomplete={'none'}>
                                    <InputLabel id="metrics">Solved For</InputLabel>
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
                                    </Select>
                                </FormControl>
                                </div>
                                <div className='chtnE' style={{ fontSize: '30px' }}>
                                    <Typography component='label' hidden={!(state.metrics === 0)}>Height :<strong>{state.triHeight}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 1)}>Base :<strong>{state.triBase}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 2)}>Area :  <strong>{state.triArea}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 3)}>Perimeter : <strong> {state.triPerimeter}</strong><br /></Typography>
                                    <Typography component='label' hidden={!(state.metrics === 4)}>Gamma (γ) :  <strong>{state.triGama}</strong><br /></Typography>
                                </div>
                                <div className='chtnE' style={{ color: 'red' }}>
                                    <span>{state.error}</span>
                                </div>
                                <Grid container justify="flex-start" >
                                    <Grid item>
                                        <div>
                                            <table>
                                                <tbody >
                                                    <tr style={{ display: (state.metrics === 2 || state.metrics === 0) ? 'block' : 'none' }}>
                                                        <td className={classes.td} colSpan={2}><Typography component='label'>
                                                            Base
                                                            </Typography></td>
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }}
                                                                    label="Enter the value"
                                                                    value={state.triBase} variant="outlined"
                                                                    id="triBase"
                                                                    onChange={onChangeInput}
                                                                    placeholder={'0'}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ display: (state.metrics !== 0 && (state.metrics === 2 || state.metrics === 1)) ? 'block' : 'none' }}>
                                                        <td className={classes.td} colSpan={2}>  <Typography component='label'>
                                                            Height
                                                        </Typography><br /></td>
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                                                    value={state.triHeight} variant="outlined"
                                                                    id="triHeight"
                                                                    onChange={onChangeInput}
                                                                    placeholder={'0'}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ display: (state.metrics === 3 || state.metrics === 4) ? 'block' : 'none' }}>
                                                        <td className={classes.td} colSpan={2}><Typography component='label' className={classes.inputlabel}>
                                                            <h3>a</h3><span>&nbsp; side</span>
                                                        </Typography></td>
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }}
                                                                    label="Enter the value"
                                                                    value={state.triFaceA} variant="outlined"
                                                                    id="triFaceA"
                                                                    onChange={onChangeInput}
                                                                    placeholder={'0'}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ display: (state.metrics === 3 || state.metrics === 4) ? 'block' : 'none' }}>
                                                        <td className={classes.td} colSpan={2}>  <Typography component='label' className={classes.inputlabel}>
                                                            <h3>b</h3> &nbsp; base
                                                        </Typography><br /></td>
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                                                    value={state.triBase} variant="outlined"
                                                                    id="triBase"
                                                                    onChange={onChangeInput}
                                                                    placeholder={'0'}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ display: state.metrics === 3 ? 'block' : 'none' }}>
                                                        <td className={classes.td} colSpan={2}>  <Typography component='label' className={classes.inputlabel}>
                                                            <h3>c</h3> &nbsp; side
                                                        </Typography><br /></td>
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem', }} label="Enter the value"
                                                                    value={state.triFaceC} variant="outlined"
                                                                    id="triFaceC"
                                                                    onChange={onChangeInput}
                                                                    placeholder={'0'}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>
                                                    <tr style={{ display: (state.metrics !== 2 && state.metrics !== 3 && (state.metrics === 4 || (state.solveby === 'Area' && (state.metrics === 0 || state.metrics === 1)))) ? 'block' : 'none' }}>
                                                        <td className={classes.td} colSpan={2}>  <Typography component='label' className={classes.inputlabel}>
                                                            Area &nbsp;&nbsp;
                                                        </Typography><br /></td>
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                                                    value={state.gamaArea} variant="outlined"
                                                                    id="gamaArea"
                                                                    onChange={onChangeInput}
                                                                    placeholder={'0'}
                                                                />
                                                            </FormControl>
                                                        </td>
                                                    </tr>

                                                    <tr style={{ display: (state.metrics === 4 && state.metrics === 5) ? 'block' : 'none' }}>
                                                        <td className={classes.td} colSpan={2}>  <Typography component='label' className={classes.inputlabel}>
                                                            Perimeter &nbsp;&nbsp;
                                                        </Typography><br /></td>
                                                        <td>
                                                            <FormControl variant="outlined" className={classes.formControl} aria-autocomplete={'none'}>
                                                                <TextField type={'number'}
                                                                    style={{ width: '100%', marginBottom: '2rem' }} label="Enter the value"
                                                                    value={state.perimeter} variant="outlined"
                                                                    id="perimeter"
                                                                    onChange={onChangeInput}
                                                                    placeholder={'0'}
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
                                            <img src={imgTriangle} style={{ margin: '1rem' }} alt={'square'}></img>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className='div-card' style={{ backgroundColor: '#fafafa', width: '100%', color: 'InfoText', fontSize: '1rem' }}>
                                    <Typography variant="h6" style={{ fontWeight: '800', fontSize: '1.5rem' }}>
                                        Notes :
                                </Typography>
                                    <label>  <strong>Area:</strong> ½ × base × height</label><br />
                                    <label>  <strong>Perimeter:</strong> sum of side lengths of the triangle</label><br />
                                    <label>  <strong>Number of edges:</strong>3</label><br />
                                    <label>  <strong>Number of vertices: </strong>3</label><br />
                                    <label>  <strong>Internal angle: </strong> 60° (for equilateral)</label><br />
                                    <label>  <strong>Sum of interior angles:</strong> 180°</label><br />
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}