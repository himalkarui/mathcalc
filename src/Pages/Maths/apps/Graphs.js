import React from 'react';
import { Chart, registerables } from 'chart.js';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, TextField } from '@material-ui/core';
import SubNavBar from '../../../Components/SubNavBar';
import Helmet from 'react-helmet';
import { MathfieldElement } from 'mathlive';
const math = require('mathjs');
Chart.register(...registerables);
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    divGraph: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '600px',
        maxHeight: '600px',
        marginTop: '5px',
        minWidth: '330px',
        minHeight: '330px',
    },
    divCard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '2rem',
        cursor: 'default !important',
        margin: '10px !important'
    },
    inputEl: {
        margin: theme.spacing(2)

    }
}));

export default function Graphs() {

    const [state, SetState] = React.useState({
        limitmaxX: 10,
        limitminX: 0,
    });

    const [expression, setExpression] = React.useState("sin(x)(x^2)");

    const createGraph = () => {
        let divCHart = document.getElementById('divChart');
        try {
            divCHart.style.display = "block";
            let xArray = [];
            let yArray = [];
            xArray = Array.from({ length: parseInt(state.limitmaxX) + 1 }, (_, i) => i);
            let negvalues = Array.from({ length: parseInt(state.limitminX) + 1 }, (_, i) => -i);
            for (let i = 0; i < negvalues.length; ++i) {
                xArray.push(negvalues[i]);
            }
            xArray.sort(function (a, b) { return (a - b) })
            let strEquation = expression
                .split("\\")
                .toString()
                .replaceAll(',', ' ')
                .replaceAll("\f", "")
                .replaceAll('rac', '')
                .replaceAll('}{', ')/(')
                .replaceAll('{', '(')
                .replaceAll('}', ')')
                .toString()
                .replaceAll('f', '');
            let yval = 0;
            console.log(strEquation);
            for (let i = 0; i < xArray.length; ++i) {
                yval = math.evaluate(strEquation, { x: xArray[i] });
                yArray.push(yval);
            }

            let ctx = document.getElementsByTagName('canvas')[0].getContext('2d');

            if (
                window.myLine !== undefined
                &&
                window.myLine !== null
            ) {
                window.myLine.destroy();
            }

            let data = {
                labels: xArray,
                // Information about the dataset
                datasets: [{
                    label: "Y Axis",
                    backgroundColor: 'lightblue',
                    borderColor: 'royalblue',
                    data: yArray,
                }]
            }

            window.myLine = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line', // also try bar or other graph types
                // The data for our dataset
                data: data,
                // Configuration options
                options: {
                    responsive: true,
                    plugins: {
                        legend: false,
                        title: {
                            display: true,
                            text: 'Visualize algebric equation'
                        },
                    },
                    interaction: {
                        intersect: false
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            display: true,
                            title: {
                                display: true,
                                text: 'X - Axis'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Y - Axis'
                            }
                        }
                    }
                },
            })

        } catch (e) {
            divCHart.style.display = "none";
        }

    }
    // import MathLive from 'https://unpkg.com/mathlive/dist/mathlive.min.mjs';


    React.useEffect(() => {

        let divEl = document.getElementById('mf');

        let mf = new MathfieldElement();
        mf.value = expression;

        while (divEl.lastElementChild) {
            divEl.removeChild(divEl.firstChild)
        }
        mf.addEventListener('input', (e) => {
            try {
                setExpression(e.target.value);
            } catch (e) {
                console.log(e.message);
            }
        });

        mf.smartMode = 'true';
        mf.virtualKeyboardMode = 'manual';
        mf.className = "inputMathField";
        mf.id = "inputMathField";
        mf.style.minWidth = "243px";

        divEl.appendChild(mf);

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    React.useEffect(() => {
        createGraph()
        // eslint-disable-next-line
    }, [expression, state.limitmaxX, state.limitminX]); // eslint-disable-line react-hooks/exhaustive-deps
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=0.9" />
                <title>Graphs - Visualize the equations in graphs | MathCalc</title>
                <meta name="keywords" content="Mathcalc, online graph calculator, visualize equation, visualize algebric equation" />
                <meta name="description" content="online free graph calculator can calculate your mathematical algebric expression into the visible graph format" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >

                <div className="output" id="latex"></div>
                <div className="output" id="mathjson"></div>

                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Visualize equations in graphs"
                            links={[{
                                url: "/maths/",
                                urlName: "Mathematics"
                            }]}
                            txtTitle="Evaluate the equation and view in the cartesian plane"
                        />
                        <br />
                        <div className={'div-card ' + classes.divCard}>
                            <Grid container spacing={2}>
                                <Grid item sm={12} md={12} lg={12}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <p>y &nbsp;= &nbsp; </p>
                                        <div style={{ width: '90%' }} id="mf"></div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div id="divChart" className={'div-card ' + classes.divCard}>
                            <canvas id="myChart" className={classes.divGraph} width={330} height={330}></canvas>
                        </div>

                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <div className={'div-card ' + classes.divCard}>
                            <TextField id="limitminX" variant="outlined" className={classes.inputEl} value={state.limitminX} type={'number'}
                                onChange={(e) => {
                                    SetState({ ...state, limitminX: e.target.value })
                                }
                                }
                                label={"Minimum limit of x value"}>
                            </TextField>
                            <TextField id="limitmaxX" variant="outlined" className={classes.inputEl} value={state.limitmaxX} type={'number'}
                                onChange={(e) => {
                                    SetState({ ...state, limitmaxX: e.target.value })
                                }
                                }
                                label={"Maximum limit of x value"}>
                            </TextField>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
