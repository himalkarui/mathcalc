import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Typography, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/InfoRounded';
import Helmet from 'react-helmet';
import SubNavBar from '../../../../Components/SubNavBar';
import VerticalAds from '../../../../Components/VerticalAds';
import CustomSnakbar from '../../../../Components/CustomSnakbar';

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
    button: {
        height: 40,
        fontSize: 15,
        color: "white",
        marginTop: 14,
        padding: '20px',
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    formelems: {
        '& > *': {
            margin: '10px 0px 10px 0px',
        },
    },
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
}));

export default function Matrixtrace() {
    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    const [state, setState] = React.useState({
        noofRows: 2,
        resultvalue: "",
        showResult: false
    });

    function scrolldiv(div) {
        window.scroll(0,
            findPosition(div));
    }
    function findPosition(obj) {
        var currenttop = 0;
        if (obj.offsetParent) {
            do {
                currenttop += obj.offsetTop;
            } while ((obj = obj.offsetParent));
            return [currenttop - 70];
        }
    }

    React.useEffect(() => {
        createMatrix(state.noofRows);
        // eslint-disable-next-line 
    }, []);

    const onCalculateClick = () => {
        try {
            let resVal = 0;
            let resExpr = "";
            for (let i = 0; i < state.noofRows; ++i) {
                for (let j = 0; j < state.noofRows; ++j) {
                    if (i === j) {
                        let inputa = document.getElementById("matrix".concat("matrixa", i.toString(), "", j.toString())).value;
                        inputa = inputa === "" ? 0 : inputa;

                        if (inputa < 0) {
                            resExpr += "(" + inputa.toString() + ") + ";
                        } else {
                            resExpr += inputa.toString() + " + ";
                        }
                        resVal += parseFloat(inputa);
                    }
                }
            }
            setState({
                ...state,
                showResult: true,
                resultvalue: resExpr.slice(0, resExpr.length - 2) + " = " + resVal
            });
            scrolldiv(document.getElementById('matrixresult'));
        } catch (e) { }
    }
    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const generateMatrix = (rows, columns, matrix) => {
        try {
            let matrixdiv = document.createElement('fieldset');
            matrixdiv.className = "mattrixarea";
            for (let i = 0; i < rows; ++i) {
                let div = document.createElement("div");
                div.className = "column"
                for (let j = 0; j < columns; ++j) {
                    let input = document.createElement("input");
                    input.id = "matrix" + matrix + i + "" + j;
                    input.className = "matrixinput";
                    input.placeholder = "" + (i + 1) + "" + (j + 1);
                    input.type = 'number';
                    div.appendChild(input)
                }
                matrixdiv.append(div);
            }

            const myNode = document.getElementById(matrix);
            while (myNode.lastElementChild) {
                myNode.removeChild(myNode.lastElementChild);
            }
            myNode.append(matrixdiv);
        } catch (e) { }

    }
    const onChangeRows = (e) => {
        if (e.target.value > 9) {
            setSnakOpen(true);
            setSnakMessage("Enter no of rows less than 10");
        } else {
            setSnakOpen(false);
            setState({
                ...state,
                showResult: false,
                noofRows: e.target.value,
            });
            createMatrix(e.target.value);
        }
    }
    const createMatrix = (count) => {
        generateMatrix(count, count, 'matrixa');
    }

    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Trace of a matrix online | mathcalc</title>
                <meta name="keywords" content="trace, trace of matrix,matrix calculation, online matrix,mathcalc, mathematics" />
                <meta name="description" content="Calculate the trace of a 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc" />
                <meta name="author" content="mathcalc" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Trace of a matrix"
                    links={[{
                        url: "/maths/",
                        urlName: "Mathematics"
                    }, {
                        url: '/maths/matrices',
                        urlName: 'Matrix'
                    }]}
                />
                <section className="hero" >
                    <div style={{ padding: '2rem 0.5rem', fontSize: '1rem', lineHeight: '27px' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                TRACE OF A MATRIX
                            </h1>
                            <p className="  has-text-grey">
                                Calculate the trace of a matrix online
                            </p>
                        </div>
                    </div>
                </section>

                <Card elevation={1} className="box">
                    <h2 className="title is-5">Select the Matrix Dimention</h2>
                    <p className="title is-6">M x N  and M == N </p>
                    <Grid container spacing={1}>
                        <Grid item >
                            <span><strong>M</strong></span><br />
                            <TextField className={classes.formelems} onChange={onChangeRows}
                                placeholder="Enter the no of rows"
                                value={state.noofRows} id="inputVal" variant="outlined" type="number"></TextField><br />
                        </Grid>
                        <Grid item >
                            <span><strong>N</strong></span><br />
                            <TextField className={classes.formelems} onChange={onInputChange}
                                value={state.noofRows} id="inputVal" disabled variant="outlined" type="number"></TextField><br />
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <InfoIcon color="primary" /><p>&nbsp; Empty fields considered as Zero (0)</p>
                    </div>
                </Card>
                <Card elevation={1} className="box">
                    <Grid container spacing={2} justify="space-evenly">
                        <Grid item >
                            <Typography>Matrix A</Typography>
                            <br />
                            <div className="container">
                                <div id="matrixa"></div>
                            </div>
                        </Grid>
                        <Grid item style={{ display: 'flex' }} >
                            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '50px', minHeight: '50px' }}>
                                <div>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<AddIcon />}
                                        onClick={() => { onCalculateClick() }}
                                    >
                                        Calculate
                                    </Button>
                                    <br /><br />
                                    {state.showResult ?
                                        <Typography variant="h1" className="title is-5">Result :<br /><br />tr(A) =  {state.resultvalue}</Typography>
                                        : <></>
                                    }
                                    <br />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
                <br />
                <VerticalAds />
                <hr />
                <Card elevation={1} className="box">
                    <h1 className="title is-5">Trace of a Matrix</h1>
                    <p>

                        In linear algebra, the trace of a square matrix A, denoted tr(A), is defined to be the sum of elements on the main diagonal (from the upper left to the lower right) of A.
                    </p>
                    <br />
                    <p>
                        The trace of a matrix is the sum of its (complex) eigenvalues (counted with multiplicities), and it is invariant with respect to a change of basis. This characterization can be used to define the trace of a linear operator in general. The trace is only defined for a square matrix (n × n).

                    </p>
                </Card>
                <br />
            </Container>
        </div >
    );
}
