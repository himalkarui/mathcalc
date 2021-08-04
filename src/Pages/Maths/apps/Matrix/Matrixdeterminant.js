import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Typography, Grid } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/InfoRounded';
import VerticalAds from '../../../../Components/VerticalAds';
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

export default function Matrixdeterminant() {
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
        resultexp: "",
        showResult: false
    });

    React.useEffect(() => {
        createMatrix(state.noofRows);
        // eslint-disable-next-line 
    }, []);

    // Function to get cofactor of mat[p][q] in temp[][]. n is
    // current dimension of mat[][]
    function getCofactor(mat, temp, p, q, n) {
        let i = 0, j = 0;
        // Looping for each element of the matrix
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                //  Copying into temporary matrix only those
                //  element which are not in given row and
                //  column
                if (row !== p && col !== q) {
                    temp[i][j++] = mat[row][col];

                    // Row is filled, so increase row index and
                    // reset col index
                    if (j === n - 1) {
                        j = 0;
                        i++;
                    }
                }
            }
        }
    }

    /* Recursive function for finding determinant of matrix.
    n is current dimension of mat[][]. */
    function determinantOfMatrix(mat, n) {
        let D = 0; // Initialize result

        //  Base case : if matrix contains single element
        if (n === 1)
            return mat[0][0];

        let temp = generateMAthrixArray(n); // To store cofactors

        let sign = 1; // To store sign multiplier

        // Iterate for each element of first row
        for (let f = 0; f < n; f++) {
            // Getting Cofactor of mat[0][f]
            getCofactor(mat, temp, 0, f, n);
            D += sign * mat[0][f] * determinantOfMatrix(temp, n - 1);
            // terms are to be added with alternate sign
            sign = -sign;
        }

        return D;
    }
    function generateMAthrixArray(count) {
        let arra = [];
        for (let i = 0; i < count; ++i) {
            let inArr = [];
            for (let j = 0; j < count; ++j) {
                inArr.push(j);
            }
            arra.push(inArr);
        }
        return arra;
    }
    const onCalculateClick = () => {
        let matharra = [];
        for (let i = 0; i < state.noofRows; ++i) {
            let inArr = [];
            for (let j = 0; j < state.noofRows; ++j) {
                let input = document.getElementById("matrix".concat("matrixa", i.toString(), j.toString())).value;
                input = input === "" ? 0 : input;
                inArr.push(input);
            }
            matharra.push(inArr);
        }
        setState({
            ...state,
            showResult: true,
            resultvalue: determinantOfMatrix(matharra, state.noofRows),
            // resultexp: resExpr + " = ",
        });

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
            setSnakMessage("Enter no of rows less than or equal to 9");
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
                <title>Determinant of a matrix online | mathcalc</title>
                <meta name="keywords" content="Determinant of a matrix, matrix determinant, determinant, modulas of a matrix" />
                <meta name="description" content="Calculate the determinant of a matrix online 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc" />
                <meta name="author" content="mathcalc" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Determinant of a matrix"
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
                                DETERMINANT OF A MATRIX
                            </h1>
                            <p className="  has-text-grey">
                                Calculate the determinant of a matrix online
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
                                        <> <Typography variant="h1" className="title is-5">Result :<br />
                                            <br />|A| =  {state.resultexp + " " + state.resultvalue}</Typography>
                                            {
                                                Math.abs(state.resultvalue) > 0 ?
                                                    <Alert variant="filled" severity="success">Matrix A has an inverse matrix</Alert>
                                                    : <Alert variant="filled" severity="error">Matrix A hasn't an inverse matrix</Alert>
                                            }
                                        </>
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
                    <h1 className="title is-5">Determinant of a Matrix</h1>
                    <p>
                        The determinant of a matrix is a special number that can be calculated from a square matrix.    </p>
                    <br />
                    <p>
                        The determinant helps us find the inverse of a matrix, tells us things about the matrix that are useful in systems of linear equations, calculus and more.  </p>
                </Card>
                <br />
            </Container>
        </div >
    );
}
