import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Typography, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/InfoRounded';
import Helmet from 'react-helmet';
import SubNavBar from '../../../../Components/SubNavBar';
import CustomSnakbar from '../../../../Components/CustomSnakbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

export default function Matrixadd() {
    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    const [state, setState] = React.useState({
        noofRows: 2,
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
        if (state.showResult) {
            scrolldiv(document.getElementById('matrixresult'));
        } else {
            createMatrix(state.noofRows);
        }
        // eslint-disable-next-line 
    }, [state.showResult]);

    const onCalculateClick = () => {
        try {
            for (let i = 0; i < state.noofRows; ++i) {
                for (let j = 0; j < state.noofRows; ++j) {
                    let inputa = document.getElementById("matrix".concat("matrixa", i.toString(), "", j.toString())).value;
                    let inputb = document.getElementById("matrix".concat("matrixb", i.toString(), "", j.toString())).value;
                    let inputr = document.getElementById("matrix".concat("matrixresult", i.toString(), "", j.toString()));
                    inputa = inputa === "" ? 0 : inputa;
                    inputb = inputb === "" ? 0 : inputb;
                    inputr.value = (parseFloat(inputa) + parseFloat(inputb));
                    inputr.setAttribute('disabled', 'disabled');
                }
            }
            setState({
                ...state,
                showResult: true,
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
            let matrixdiv = document.createElement('div');
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
            if (state.showResult) {
                handleClickDialogOpen();
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
    }
    const createMatrix = (count) => {
        generateMatrix(count, count, 'matrixa');
        generateMatrix(count, count, 'matrixb');
        generateMatrix(count, count, 'matrixresult');
        scrolldiv(document.getElementById('matrixa'));
    }
    const letResultasInput = () => {
        for (let i = 0; i < state.noofRows; ++i) {
            for (let j = 0; j < state.noofRows; ++j) {
                document.getElementById("matrix".concat("matrixa", i.toString(), "", j.toString())).value
                    = document.getElementById("matrix".concat("matrixresult", i.toString(), "", j.toString())).value;
            }
        }
        scrolldiv(document.getElementById('matrixa'));
    }

    //dialog functions
    const [dialogopen, setDialogOpen] = React.useState(false);
    const handleClickDialogOpen = () => {
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSnakOpen(false);
        setState({
            ...state,
            showResult: false,
        });
    };

    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <div>
                <Dialog
                    open={dialogopen}
                    onClose={handleCloseDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" >
                        <div style={{ display: 'flex' }} >
                            <InfoIcon color="primary" />&nbsp; &nbsp;<p style={{ marginTop: '-5px' }}>Info</p>
                        </div>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Data in current matrices will be cleared ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}
                            variant="text"
                            color="secondary">
                            Cancel
          </Button>
                        <Button
                            variant="contained"
                            onClick={handleCloseDialog} color="primary">
                            Ok
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Helmet>
                <title>Addition of two matrices online | mathcalc</title>
                <meta name="keywords" content="Add , addition, addition of two matrix, two matrix additon, matrix calculation, online matrix" />
                <meta name="description" content="Additon of two matrices online 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc" />
                <meta name="author" content="mathcalc" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Addition of matrices"
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
                                ADDITION OF MATRICES
                            </h1>
                            <p className="has-text-letter-spacing-wide has-text-grey">
                                Add two matrices online
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
                        <Grid item >
                            <Typography>Matrix B</Typography>
                            <br />
                            <div className="container">
                                <div id="matrixb"></div>
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
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
                <br />
                <Card style={{ display: state.showResult ? 'block' : 'none' }} elevation={1} className="box">
                    <Grid container justify="center">
                        <Grid item>
                            <div className="container" style={{ minWidth: '243px' }}>
                                <Typography>Result : &nbsp; <strong>A &nbsp; + &nbsp; B = &nbsp;</strong></Typography>
                                <br />
                                <div id="matrixresult"></div>
                            </div>
                        </Grid>
                        <Grid item style={{ display: 'flex' }} >
                            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '50px', minHeight: '50px' }}>
                                <div>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<InfoIcon />}
                                        onClick={letResultasInput}
                                    >
                                        Let Result as Matrix A
                                </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                </Card>
                <br />
            </Container>
        </div >
    );
}
