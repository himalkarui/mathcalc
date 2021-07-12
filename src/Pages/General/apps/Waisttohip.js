import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, FormControl, InputLabel, InputAdornment, Button, Container, OutlinedInput
} from '@material-ui/core';
import Settings from '@material-ui/icons/Settings';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import SubNavBar from '../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    button: {
        height: 40,
        minWidth: "243px !important",
        fontSize: 15,
        color: "white",
        marginTop: 14,
        padding: '26px',
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    resultDiv: {
        backgroundColor: '#03a9f4',
        color: 'white',
        borderRadius: '0px',
        textAlign: 'center',
        background: 'linear-gradient(122deg, #f44336, #ff0dcc, blue,#452b2b9e)',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },

}));

export default function Waisttohip() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        Waist: "",
        Hip: "",
        showResult: false,
        result: ''
    });

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);

    const onCalculateClick = (e) => {

        if (!state.Waist || state.Waist === "") {
            setSnakOpen(true);
            setSnakMessage("Enter Waist");
        } else if (!state.Hip || state.Hip === "") {
            setSnakOpen(true);
            setSnakMessage("Enter Hip")
        } else {
            setSnakOpen(false);
            let res = parseFloat(state.Waist) / parseFloat(state.Hip);
            let rowLow = document.getElementById('rowLow');
            let rowMedium = document.getElementById('rowMedium');
            let rowHigh = document.getElementById('rowHigh');

            function setColor(elem, color) {
                if (elem) {
                    for (let i = 0; i < elem.length; ++i) {
                        elem[i].style.color = color;
                        if (color === "black")
                            elem[i].style.fontWeight = '';
                        else
                            elem[i].style.fontWeight = 'bolder';
                    }
                }
            }

            if (res <= 0.95) {
                rowLow.style.backgroundColor = '#00d1b2'; setColor(rowLow.children, 'green');

                rowMedium.style.backgroundColor = 'white'; setColor(rowMedium.children, 'black');
                rowHigh.style.backgroundColor = 'white'; setColor(rowHigh.children, 'black');
            }
            else if (res <= 1 && res >= 0.95) {
                rowMedium.style.backgroundColor = '#ffff0040'; setColor(rowMedium.children, '#ffdd57');
                rowLow.style.backgroundColor = 'white'; setColor(rowLow.children, 'black');
                rowHigh.style.backgroundColor = 'white'; setColor(rowHigh.children, 'black');
            } else if (res > 1) {
                rowHigh.style.backgroundColor = '#ededed'; setColor(rowHigh.children, 'red');
                rowLow.style.backgroundColor = 'white'; setColor(rowLow.children, 'black');
                rowMedium.style.backgroundColor = 'white'; setColor(rowMedium.children, 'black');
            }
            setState({
                ...state,
                showResult: true,
                result: res.toFixed(1)
            });
        }
    };

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };
    const onInputChange = (e) => {
        setSnakOpen(false);
        setSnakMessage(null);
        setState({
            ...state,
            showResult: false,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Waist to Hip Ratio Calculator online | mathcalc</title>
                <meta name="keywords" content="mathcalc,waist hip ratio calculator, waist , hip, calorie calculator,fat calculator,coronary, diabetes,stroke causes" />
                <meta name="description" content="Waist to Hip Ratio Calculator is used to calculate the ratio between waist and hip" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Waist to Hip Ratio Calculator"
                            links={[{
                                url: "/general/",
                                urlName: "General"
                            }]}
                        />
                        <br />
                        <Card raised elevation={1} className="box" >
                            <h1 className={'title is-5'}>
                                WAIST TO HIP RATIO CALCULATOR
                            </h1>
                            <p>
                                A common measure of fat distribution is the waist-to-hip (WTH) ratio.
                                It is calculated by dividing the circumference of your waist by the circumference of your hips.  </p>
                            <br />
                            <br />
                            <Grid container justify={"center"}>
                                <FormControl className={classes.margin} variant="outlined">
                                    <InputLabel htmlFor="waist">Waist</InputLabel>
                                    <OutlinedInput
                                        id="Waist"
                                        value={state.Waist}
                                        labelWidth={43}
                                        onChange={onInputChange}
                                        type="number"
                                        startAdornment={<InputAdornment style={{
                                            position: 'absolute',
                                            right: '0',
                                            margin: '12px'
                                        }} position="end">cm</InputAdornment>}
                                    />
                                </FormControl>
                                <br />
                                <FormControl className={classes.margin} variant="outlined">
                                    <InputLabel htmlFor="hip">Hip</InputLabel>
                                    <OutlinedInput
                                        id="Hip"
                                        value={state.Hip}
                                        labelWidth={33}
                                        onChange={onInputChange}
                                        type="number"
                                        startAdornment={<InputAdornment
                                            style={{
                                                position: 'absolute',
                                                right: '0',
                                                margin: '12px'
                                            }}
                                            position="end">cm</InputAdornment>}
                                    />
                                </FormControl>
                                <FormControl style={{ marginTop: '0px' }} className={classes.margin} variant="outlined">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.button + ' gridItem'}
                                        startIcon={<Settings />}
                                        onClick={() => { onCalculateClick() }}
                                    >Calculate</Button>
                                </FormControl>

                            </Grid>
                            <br />
                        </Card>
                        <br />

                        <Card style={{ display: state.showResult ? 'block' : 'none' }} elevation={1} className="box">
                            <h2 className="title is-5">
                                Waist-to-Hip Ratio Calculation Results
                                </h2>
                            <br />
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="spanning table">
                                    <TableHead>
                                        <TableRow align="center">
                                            <TableCell style={{ backgroundColor: '#3298dc' }} colSpan={12} >
                                                <h2
                                                    style={{
                                                        color: 'white',
                                                    }}
                                                    className="title is-6">Your Waist-to-Hip Ratio is {state.result}
                                                </h2>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow colSpan={12} align="center">
                                            <TableCell colSpan={12} style={{ backgroundColor: '#f2f2f2' }}>
                                                <h2 className="title is-6" >
                                                    Body Parameters
                                                 </h2>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow align="center">
                                            <TableCell colSpan={6} >
                                                Waist-to-Hip Ratio
                                                </TableCell>
                                            <TableCell colSpan={6} >
                                                Health Risk
                                                </TableCell>
                                        </TableRow>
                                        <TableRow id="rowLow" align="left">
                                            <TableCell colSpan={6} >
                                                0.95 or below
                                                </TableCell>
                                            <TableCell colSpan={6} >
                                                Low risk
                                                </TableCell>
                                        </TableRow>
                                        <TableRow id="rowMedium" align="left">
                                            <TableCell colSpan={6} >
                                                0.96 - 1.0
                                                </TableCell>
                                            <TableCell colSpan={6} >
                                                Moderate risk
                                                </TableCell>
                                        </TableRow>
                                        <TableRow id="rowHigh" align="left">
                                            <TableCell colSpan={6} >
                                                1.0 +
                                                </TableCell>
                                            <TableCell colSpan={6} >
                                                High risk
                                                </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <br />
                            {
                                parseFloat(state.result) < 0.95 ? <p>
                                    Your shape puts you at a lower risk of coronary heart disease, diabetes and stroke. There's more fat on your hips than your midsection. Your body does not convert lower body fat as readily as midsection fat. This keeps cholesterol down.
                              </p> : <>Your shape puts you at a risk of coronary heart disease , diabetes and stroke</>


                            }
                        </Card>

                        <br />
                        <Card elevation={1} className="box">
                            <h4 className="title is-5">Notes</h4>
                            <p>
                                The amount of fat, but more importantly, where in your body that fat is stored can impact your health. If you have most of the body fat around the waist,
                                you have an increased risk of high blood pressure, heart disease, diabetes and stroke compared with having the same amount of body fat around the hips and thighs.
                            </p>
                            <br />
                            <p>  A common measure of fat distribution is the waist-to-hip (WTH) ratio. It is calculated by dividing the circumference of your waist by the circumference of your hips.
                          </p>
                            <br />
                            <p>  The waist-to-hip ratio, in some case, can be a better indicator of mortality risks than body mass index (BMI). You could possibly have too large of a waist, even though your BMI indicates a healthy weight. On the other hand, if you are muscular, a BMI may indicate an unhealthy weight.
                          </p>
                            <br />
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
