import React from 'react';
import { Chart, registerables } from 'chart.js';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, TextField } from '@material-ui/core';
import SubNavBar from '../../../Components/SubNavBar';
import EquationEditor from "equation-editor-react";
import Helmet from 'react-helmet';
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
    }
}));

export default function Graphs() {

    const [state, SetState] = React.useState({
        equation: '(x)^2',
        limitX: 5,
        limitY: 10,
        objChart: undefined,
    });


    const onChangeEquation = (e) => {
        SetState({
            ...state,
            equation: e
        })
    }

    const createGraph = () => {
        try {
            let xArray = [];
            let yArray = [];
            xArray = Array.from({ length: state.limitX }, (_, i) => i);

            let negvalues = Array.from({ length: state.limitX }, (_, i) => -i);
            for (let i = 0; i < negvalues.length; ++i) {
                xArray.push(negvalues[i]);
            }

            xArray.sort(function (a, b) { return (a - b) })

            let strEquation = state.equation;
            let yval = 0;
            let strEval = '';

            for (let i = 0; i < xArray.length; ++i) {
                strEval = strEquation.replaceAll('x', xArray[i]).replaceAll("\\", '').replaceAll('right', '').replaceAll('left', '');
                yval = math.evaluate(strEval);
                yArray.push(yval);
            }

            let ctx = document.getElementById('myChart').getContext('2d');
            // if (chart) {
            //     chart.destroy();
            // }

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

        }

    }

    React.useEffect(() => {
        createGraph();
        // eslint-disable-next-line
    }, [state.limitX, state.equation]);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=0.6" />
                <title>Graphs - Visualize the equations in graphs | MathCalc</title>
                <meta name="keywords" content="Mathcalc, online graph calculator, visualize equation, visualize algebric equation" />
                <meta name="description" content="online free graph calculator can calculate your mathematical algebric expression into the visible graph format" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
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
                            <span>y &nbsp;= &nbsp; </span>
                            <EquationEditor
                                value={state.equation}
                                onChange={onChangeEquation}
                                autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
                                autoOperatorNames="sin cos tan"
                            />
                            <div style={{ margin: '20px' }}>
                                <TextField id="limitX" value={state.limitX} type={'number'}
                                    onChange={(e) => SetState({ ...state, limitX: e.target.value })}
                                    label={"Limit of x value"}></TextField>
                            </div>
                        </div>
                        <div className={'div-card ' + classes.divCard}>
                            <canvas id="myChart" className={classes.divGraph} width={330} height={330}></canvas>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
