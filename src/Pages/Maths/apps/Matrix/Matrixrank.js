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
    ulElem: {
        listStyle: 'disc !important',
        padding: '1.5rem',
        borderBottom: 'solid',
        borderTop: 'solid',
        "& li": {
            listStyleType: 'disc'
        }
    }
}));

export default function Matrixrank() {
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
        resultvalue: '',
        showResult: false
    });

    React.useEffect(() => {
        createMatrix(state.noofRows, state.noofCols);
        // eslint-disable-next-line 
    }, [state.noofRows, state.noofCols]);

    // javascript program to find rank of a matrix


    var R = state.noofRows;
    var C = state.noofCols;

    // function for exchanging two rows
    // of a matrix
    function swap(mat, row1, row2, col) {
        for (let i = 0; i < col; i++) {
            var temp = mat[row1][i];
            mat[row1][i] = mat[row2][i];
            mat[row2][i] = temp;
        }
    }

    // function for finding rank of matrix
    function rankOfMatrix(mat) {

        var rank = C;

        for (let row = 0; row < rank; row++) {

            // Before we visit current row
            // 'row', we make sure that
            // mat[row][0],....mat[row][row-1]
            // are 0.

            // Diagonal element is not zero
            if (mat[row] && mat[row][row] && mat[row][row] !== 0) {
                for (let col = 0; col < R; col++) {
                    if (col !== row) {
                        // This makes all entries
                        // of current column
                        // as 0 except entry
                        // 'mat[row][row]'
                        var mult =
                            mat[col][row] /
                            mat[row][row];

                        for (let i = 0; i < rank; i++)

                            mat[col][i] -= mult
                                * mat[row][i];
                    }
                }
            }
            // Diagonal element is already zero.
            // Two cases arise:
            // 1) If there is a row below it
            // with non-zero entry, then swap
            // this row with that row and process
            // that row
            // 2) If all elements in current
            // column below mat[r][row] are 0,
            // then remvoe this column by
            // swapping it with last column and
            // reducing number of columns by 1.
            else {
                let reduce = true;

                // Find the non-zero element
                // in current column
                for (var i = row + 1; i < R; i++) {
                    // Swap the row with non-zero
                    // element with this row.
                    if (mat[i][row] !== 0) {
                        swap(mat, row, i, rank);
                        reduce = false;
                        break;
                    }
                }

                // If we did not find any row with
                // non-zero element in current
                // columnm, then all values in
                // this column are 0.
                if (reduce) {
                    // Reduce number of columns
                    rank--;

                    // Copy the last column here
                    for (i = 0; i < R; i++)
                        mat[i][row] = mat[i][rank];
                }

                // Process this row again
                row--;
            }

            // Uncomment these lines to see
            // intermediate results display(mat, R, C);
            // printf(<br>);
        }

        return rank;
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
            let resval = rankOfMatrix(matharra);
            generateMatrix(state.noofRows, state.noofCols, "matrixresult");
            for (let i = 0; i < state.noofRows; ++i) {
                for (let j = 0; j < state.noofCols; ++j) {
                    let input = document.getElementById("matrix".concat("matrixresult", i.toString(), j.toString()));
                    input.value = Math.round(matharra[i][j]);
                    input.setAttribute('disabled', 'disabled');
                }
            }
            setState({
                ...state,
                showResult: true,
                resultvalue: resval
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
            setSnakOpen(false);
            setState({
                ...state, [e.target.id]: e.target.value,
                resultvalue: "",
                showResult: false,
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
    }

    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Rank of a matrix online | mathcalc</title>
                <meta name="keywords" content=" Rank of a matrix,algebra, mathematics, matrix  Rank,  Rank, modulas of a matrix" />
                <meta name="description" content="Calculate the  Rank of a matrix online 2x2 matrix, 3x3 matrix, 4x4matrix and more - Mathcalc" />
                <meta name="author" content="mathcalc" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Rank of a matrix"
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
                                RANK OF A MATRIX
                            </h1>
                            <p className="  has-text-grey">
                                Calculate the  rank of a matrix online
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
                                        Rank of A
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item style={{ display: 'flex' }} >
                            <div style={{ display: state.showResult ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                                <Typography variant="h1" className="title is-5">Result :
                                    <br />
                                    <br />
                                    ρ(A) &nbsp; &nbsp;=&nbsp; &nbsp;  {state.resultvalue}</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <br />
                </Card>  <br />
                <Card style={{ display: state.showResult ? 'block' : 'none' }} elevation={1} className="box">
                    <Grid container justify="space-evenly" >
                        <Grid item style={{ display: 'flex' }} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', justifyItems: 'center' }}>
                                <div>
                                    <Typography>Echelon form of Matrix A = &nbsp;</Typography>
                                </div>
                                <div className="container">
                                    <div id="matrixresult"></div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
                <br />
                <Card elevation={1} className="box">
                    <h1 className="title is-5"> Rank of a Matrix</h1>
                    <p>
                        The rank of the matrix refers to the number of linearly independent rows or columns in the matrix.
                        ρ(A) is used to denote the rank of matrix A. A matrix is said to be of rank zero when all of its elements become zero.
                    </p>
                    <br />
                    <p>The rank of the matrix is the dimension of the vector space  obtained by its columns.
                        The rank of a matrix cannot exceed more than the number of its rows or columns. The rank of the null matrix is zero.
                    </p>
                    <br />
                    <h1 className="title is-5">Nullity of a Matrix</h1>
                    <p>The nullity of a matrix is defined as the number of vectors present in the null space of a given matrix.
                    </p>
                    <br />
                    <p>In other words, it can be defined as the dimension of the null space of matrix A called the nullity of A.
                        Rank+Nullity is the number of all columns in matrix A</p>
                    <br />
                    <h1 className="title is-5">Properties of the Rank of the matrix</h1>
                    <ul className={classes.ulElem} >
                        <li>
                            <p>
                                Rank Linear algebra refers to finding column rank or row rank collectively known as the rank of the matrix.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>
                                Zero matrices have no non-zero row. Hence it has an independent row (or column). So, the rank of the zero matrix is zero.
                            </p>
                        </li>
                        <br />
                        <li>
                            <p>
                                When the rank equals the smallest dimension it is called full rank matrix.
                            </p>
                        </li>
                    </ul>
                </Card>
                <br />
            </Container>
        </div >
    );
}
