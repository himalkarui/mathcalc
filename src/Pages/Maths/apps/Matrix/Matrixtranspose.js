import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Typography, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/InfoRounded';
import Helmet from 'react-helmet';
import SubNavBar from '../../../../Components/SubNavBar';
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

export default function Matrixtranspose() {
    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    const [state, setState] = React.useState({
        noofRows: 2,
        noofCols: 2,
        showResult: false
    });

    React.useEffect(() => {
        createMatrix(state.noofRows, state.noofCols);
        // eslint-disable-next-line 
    }, [state.noofRows, state.noofCols]);  // eslint-disable-line react-hooks/exhaustive-deps

    function transformMatrix(matrix) {
        let temp = generateMAthrixArray(state.noofRows, state.noofCols);

        console.log(matrix);
        console.log(generateMAthrixArray(state.noofRows, state.noofCols));

        for (let i = 0; i < state.noofRows; i++) {
            for (let j = 0; j < state.noofCols; j++) {
                if (matrix[i] && temp[j]) {
                    temp[j][i] = matrix[i][j];
                }
            }
        }
        return temp;
    }

    function generateMAthrixArray(row, col) {
        let arra = [];
        for (let i = 0; i < col; ++i) {
            let inArr = [];
            for (let j = 0; j < row; ++j) {
                inArr.push(j);
            }
            arra.push(inArr);
        }
        return arra;
    }
    const onCalculateClick = () => {
        try {
            let matharra = [];
            for (let i = 0; i < state.noofRows; ++i) {
                let inArr = [];
                for (let j = 0; j < state.noofCols; ++j) {
                    let input = document.getElementById("matrix".concat("matrixa", i.toString(), j.toString())).value;
                    input = input === "" ? 0 : input;
                    inArr.push(input);
                }
                matharra.push(inArr);
            }
            let resmatharra = transformMatrix(matharra);
            console.log(resmatharra);
            for (let i = 0; i < state.noofCols; ++i) {
                for (let j = 0; j < state.noofRows; ++j) {
                    let input = document.getElementById("matrix".concat("matrixatrans", i.toString(), j.toString()));
                    input.value = resmatharra[i][j];
                    input.setAttribute('disabled', 'disabled');
                }
            }
            setState({
                ...state,
                showResult: true,
            });
        } catch (e) {
            console.log(e);
        }
    }

    const onInputChange = (e) => {
        if ((e.target.value > 9 || e.target.value < 1) && e.target.value !== "") {
            setSnakOpen(true);
            setSnakMessage("Enter no of rows or columns between 1 and 9");
        } else {
            setState({
                ...state, [e.target.id]: e.target.value
            });
        }
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
   
    const createMatrix = (noofRows, noofCols) => {
        generateMatrix(noofRows, noofCols, 'matrixa');
        generateMatrix(noofCols, noofRows, 'matrixatrans');
    }

    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Transpose of a matrix online | mathcalc</title>
                <meta name="keywords" content=" Transpose of a matrix, matrix  Transpose,  Transpose, modulas of a matrix" />
                <meta name="description" content="Calculate the  Transpose of a matrix online 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc" />
                <meta name="author" content="mathcalc" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Transpose of a matrix"
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
                                Transpose OF A MATRIX
                            </h1>
                            <p className="  has-text-grey">
                                Calculate the  Transpose of a matrix online
                            </p>
                        </div>
                    </div>
                </section>

                <Card elevation={1} className="box">
                    <h2 className="title is-5">Select the Matrix Dimention</h2>
                    <p className="title is-6">M x N </p>
                    <Grid container spacing={1}>
                        <Grid item >
                            <span><strong>M</strong></span><br />
                            <TextField className={classes.formelems} onChange={onInputChange}
                                placeholder="Enter the no of rows"
                                value={state.noofRows} id="noofRows" variant="outlined" type="number"></TextField><br />
                        </Grid>
                        <Grid item >
                            <span><strong>N</strong></span><br />
                            <TextField className={classes.formelems} onChange={onInputChange}
                                value={state.noofCols} id="noofCols" variant="outlined" type="number"></TextField><br />
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex' }}>
                        <InfoIcon color="primary" /><p>&nbsp; Empty fields considered as Zero (0)</p>
                    </div>
                </Card>
                <Card elevation={1} className="box">
                    <br />
                    <Grid container spacing={2} justify="space-evenly">
                        <Grid item style={{ display: 'flex' }} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                                <div>
                                    <Typography>A = &nbsp;</Typography>
                                </div>
                                <div className="container">
                                    <div id="matrixa"></div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
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
                                        Transpose
                                </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item style={{ display: 'flex' }} >
                            <div style={{ display: state.showResult ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                                <div>
                                    <Typography>A<sup>T</sup>&nbsp;=&nbsp;</Typography>
                                </div>
                                <div>
                                    <div id="matrixatrans"></div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <br />
                </Card>
                <br />
                <Card elevation={1} className="box">
                    <h1 className="title is-5"> Transpose of a Matrix</h1>
                    <p>
                        The transpose of a matrix is simply a flipped version of the original matrix.</p>
                    <br />
                    <p>
                        We can transpose a matrix by switching its rows with its columns.  </p>
                </Card>
                <br />
            </Container>
        </div >
    );
}
