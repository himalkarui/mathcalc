import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Typography, Grid, Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
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
        marginTop: 14,
        padding: '20px',
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    formelems: {
        width: '65px',
        textAlign: 'center',
        '& > *': {
            margin: '10px',
            textAlign: 'center'
        },
        '& > * > input': {
            textAlign: 'center',
        }
    },
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
    cols: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
}));

export default function Matrixmultiply() {
    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    const [state, setState] = React.useState({
        rowA: '',
        columnA: '',
        rowB: '',
        columnB: '',
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
    }, [state.showResult]);

    const onCalculateClick = () => {
        try {
            for (let i = 0; i < state.rowA; ++i) {
                for (let j = 0; j < state.columnB; ++j) {
                    let resijInput = document.getElementById("matrix".concat("matrixresult", i.toString(), "", j.toString()));
                    let resijInputValue = 0;
                    let multiplyval = 0;
                    for (let k = 0; k < state.rowB; ++k) {
                        let inputa = document.getElementById("matrix".concat("matrixa", i.toString(), "", k.toString())).value;
                        let inputb = document.getElementById("matrix".concat("matrixb", k.toString(), "", j.toString())).value;
                        inputa = inputa === "" ? "0" : inputa;
                        inputb = inputb === "" ? "0" : inputb;
                        multiplyval = parseFloat(inputa) * parseFloat(inputb);
                        resijInputValue += parseInt(multiplyval);
                    }
                    resijInput.value = resijInputValue.toFixed(2);
                    resijInput.setAttribute('disabled', 'disabled');
                }
            }
            setState({
                ...state,
                showResult: true,
            });
            scrolldiv(document.getElementById('matrixresult'));
        } catch (e) { }
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

    const onChangeInput = (e) => {
        if (e.target.value > 9) {
            setSnakOpen(true);
            setSnakMessage("Value should be less than 10");
        } else {
            setState({
                ...state,
                [e.target.id]: e.target.value
            });
            handleClose();
        }
    }

    const createMatrix = (count) => {

        if (state.rowA === "" || state.rowB === "" || state.columnA === "" || state.columnB === "") {
            setSnakOpen(true);
            setSnakMessage("Fill all fields");
        } else if (state.rowA <= 0 || state.rowB <= 0 || state.columnA <= 0 || state.columnB <= 0) {
            setSnakOpen(true);
            setSnakMessage("* All values should be greater than zero (0)");
        } else {
            if (state.columnA === state.rowB) {
                generateMatrix(state.rowA, state.columnA, 'matrixa');
                generateMatrix(state.rowB, state.columnB, 'matrixb');
                generateMatrix(state.rowA, state.columnB, 'matrixresult');
                scrolldiv(document.getElementById('matrixa'));
            } else {
                setSnakOpen(true);
                setSnakMessage("Please check matrix product criteria !");
            }
        }
    }
  
    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Multiplication of two matrices online | mathcalc</title>
                <meta name="keywords" content="multiplication, multiplication of matrices, multiply two matrices,algebra, algebric matrix calculator" />
                <meta name="description" content="Multiplication or product of two matrices online 2x2 matrix, 3x3 matrix, 4x4 matrix and more - Mathcalc" />
                <meta name="author" content="mathcalc" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Multiplication of matrices"
                    links={[{
                        url: "/maths/",
                        urlName: "Mathematics"
                    }, {
                        url: '/maths/matrices',
                        urlName: 'Matrices'
                    }]}
                />
                <section className="hero" >
                    <div style={{ padding: '2rem 0.5rem', fontSize: '1rem', lineHeight: '27px' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                Multiplication OF MATRICES
                            </h1>
                            <p className="  has-text-grey">
                                Multiply two matrices online
                            </p>
                        </div>
                    </div>
                </section>

                <Card elevation={1} className="box">
                    <h2 className="title is-6">Select the Matrix Dimention</h2>
                    <Grid container spacing={2} justify="space-evenly">
                        <Grid item>
                            <Card elevation={1} className="box">
                                <Typography>Matrix A</Typography>
                                <div className="container" style={{ display: 'flex' }}>
                                    <TextField className={classes.formelems} onChange={onChangeInput}
                                        placeholder="L"
                                        value={state.rowA} id="rowA" type="number"></TextField><br />
                                    <TextField className={classes.formelems} onChange={onChangeInput}
                                        placeholder="M"
                                        value={state.columnA} id="columnA" type="number"></TextField><br />
                                </div>
                            </Card>
                        </Grid>
                        <Grid item >
                            <Card elevation={1} className="box">
                                <Typography>Matrix B</Typography>
                                <div className="container" style={{ display: 'flex' }}>
                                    <TextField className={classes.formelems} onChange={onChangeInput}
                                        value={state.rowB} id="rowB"
                                        placeholder="M"
                                        type="number"></TextField><br />
                                    <TextField className={classes.formelems} onChange={onChangeInput}
                                        placeholder="N"
                                        value={state.columnB} id="columnB" type="number"></TextField><br />
                                </div>
                            </Card>
                        </Grid>
                        <Grid item style={{ display: 'flex' }} >
                            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '50px', minHeight: '50px' }}>
                                <div>
                                    <br />
                                    <Button
                                        color="primary"
                                        onClick={() => { createMatrix() }}
                                    >
                                        Create Matrices
                                </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />
                    <div style={{ display: 'flex' }}>
                        <InfoIcon color="primary" /><p className="title is-6" >&nbsp; Matrix product criteria</p>
                    </div>
                    <br />
                    <ul>
                        <li>1.&nbsp;Empty fields considered as Zero (0)</li>
                        <li>2.&nbsp;For matrix multiplication, the number of columns in the first matrix must be equal to the number of rows in the second matrix.</li>
                        <li>3.&nbsp;The result matrix has the number of rows of the first and the number of columns of the second matrix,&nbsp;
                            <a href="https://en.wikipedia.org/wiki/Matrix_multiplication" style={{ color: 'blue', textDecoration: 'underline' }}>Learn More</a>
                        </li>
                    </ul>
                </Card>

                <Card elevation={1} className="box">
                    <Grid container spacing={2} justify="space-evenly">
                        <Grid item style={{ display: 'flex' }}>
                            <div style={{ flexDirection: 'row', display: 'flex' }}>
                                <div className={classes.cols}>
                                    <Typography>A = &nbsp;</Typography>
                                </div>
                                <div className={classes.cols}>
                                    <div id="matrixa"></div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item style={{ display: 'flex' }}>
                            <div style={{ flexDirection: 'row', display: 'flex' }}>
                                <div className={classes.cols}>
                                    <Typography>B = &nbsp;</Typography>
                                </div>
                                <div className={classes.cols}>
                                    <div id="matrixb"></div>
                                </div>
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
                                        startIcon={<CloseIcon />}
                                        onClick={() => { onCalculateClick() }}
                                    >
                                        Calculate
                                </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
                <br />
                <Card elevation={1} className="box">
                    <br />
                    <Grid container justify="center">
                        <Grid item style={{ display: 'flex' }} >
                            <div style={{ flexDirection: 'row', display: 'flex' }}>
                                <div className={classes.cols}>
                                    <Typography><strong>A &nbsp; x &nbsp; B = &nbsp;</strong></Typography>
                                </div>
                                <div className={classes.cols}>
                                    <div id="matrixresult"></div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <br />
                </Card>
                <br />
            </Container>
        </div >
    );
}
