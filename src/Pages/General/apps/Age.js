import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, CardContent, Collapse
    , Button, Typography, Container, Backdrop, CircularProgress
} from '@material-ui/core';
import CaculateIcon from '@material-ui/icons/SendOutlined';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    DatePicker,
} from '@material-ui/pickers';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#e5a400',
        borderRadius: '3px 3px 0px 0px',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        width: '35%',
        border: '0.1rem solid #e2e2e2',
        textAlign: 'left'
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        overflow: 'hidden'
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, rgb(0 85 255) 0%, #1962BF 100%) 0% 0% no-repeat padding-box",
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

}));

export default function Age() {

    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const [selectedFrom, setSelectedFrom] = React.useState(new Date().toLocaleDateString().substr(0, 9));
    const [selectedTo, setSelectedTo] = React.useState(new Date().toLocaleDateString().substr(0, 9));

    const [dateDiff, SetDateDiff] = React.useState(0);
    const [countDown, SetcountDown] = React.useState('');

    const onCalculateClick = (e) => {
        SetBackDropopen(true);
        const diffTime = Math.abs((new Date(selectedTo)) - (new Date(selectedFrom)));
        SetDateDiff(diffTime);
        let todate = new Date();

        if ((new Date(selectedFrom)).getMonth() < todate.getMonth() && (new Date(selectedFrom)).getDate() < todate.getDate()) {
            SetcountDown((new Date(todate.getFullYear() + '-' + new Date(selectedFrom).getMonth() + '-' + new Date(selectedFrom).getDate()) - new Date()));
            //   birthday = (new Date(todate.getFullYear() + '-' + new Date(selectedFrom).getMonth() + '-' + new Date(selectedFrom).getDate()).getDay());
        }
        else {
            SetcountDown((new Date((todate.getFullYear() + 1) + '-' + new Date(selectedFrom).getMonth() + '-' + new Date(selectedFrom).getDate()) - new Date()));
        }
        setInterval(() => {
            SetcountDown(countDown - 1);
        }, 1000);
        setTimeout(() => {
            SetBackDropopen(false);
        }, 250);
    };

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    const [backDropopen, SetBackDropopen] = React.useState(false);
    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Backdrop className={classes.backdrop} open={backDropopen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Age calculator - Math Calc</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <Card raised elevation={0} >
                            <div className={'appHeading'}>
                                Age calculator</div>
                            <CardContent className='appContainer'>
                                <p className={'text-muted'} >
                                    The Age Calculator can determine the age or interval between two dates.
                                    The calculated age will be displayed in years, months, weeks, days, hours, minutes, and seconds
                            </p>
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <Grid container justify="space-around">
                                        <DatePicker
                                            label="Date of Birth"
                                            inputVariant="outlined"
                                            id="selectedFrom"
                                            value={selectedFrom}
                                            openTo="year"
                                            views={["year", "month", "date"]}
                                            format='DD-MM-yyyy'
                                            onChange={(e) => {
                                                SetDateDiff(0);
                                                if (new Date(e) > new Date(selectedTo)) {
                                                    setSnakOpen(true)
                                                    setSelectedFrom(new Date().toLocaleDateString().substr(0, 9));
                                                    setSnakMessage('Choose Date of birth less than the age at the date of');
                                                }
                                                else { setSelectedFrom(e); }
                                            }}
                                            className={'gridItem'}
                                        />
                                        <DatePicker
                                            label="Age at the Date of"
                                            inputVariant="outlined"
                                            value={selectedTo}
                                            id="selectedTo"
                                            openTo="year"
                                            views={["year", "month", "date"]}
                                            format='DD-MM-yyyy'
                                            onChange={(e) => {
                                                SetDateDiff(0);
                                                if (new Date(e) < new Date(selectedFrom)) {
                                                    setSnakOpen(true)
                                                    setSelectedTo(new Date().toLocaleDateString().substr(0, 9));
                                                    setSnakMessage('Choose Date of birth less than the age at the date of');
                                                }
                                                else { setSelectedTo(e); }
                                            }}
                                            className={'gridItem'}
                                        />
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button + ' gridItem'}
                                            startIcon={<CaculateIcon />}
                                            onClick={() => { onCalculateClick() }}
                                        >Calculate</Button>
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </CardContent>
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph><strong>Result:</strong></Typography>
                                    <TableContainer style={{ overflow: 'hidden' }}>
                                        <Table className={classes.table} aria-label="customized table">
                                            <TableHead>
                                                <TableRow >
                                                    <StyledTableCell colSpan={2}>Age Calculation</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <StyledTableRow >
                                                    <StyledTableCell >
                                                        Your Age is
                                                </StyledTableCell>
                                                    <StyledTableCell align="right">{Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) + ' years '
                                                        + Math.floor(
                                                            (dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
                                                        ) + ' Months, and '
                                                        + Math.ceil((((dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 7)) % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)) + ' Days'
                                                    }</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow >
                                                    <StyledTableCell >
                                                        Your Age in weeks
                                                </StyledTableCell>
                                                    <StyledTableCell align="right">{
                                                        Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 7)) + ' weeks '
                                                        + (dateDiff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24) + ' Days'
                                                    }</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow >
                                                    <StyledTableCell >
                                                        Your Age Days
                                                </StyledTableCell>
                                                    <StyledTableCell align="right">{dateDiff / (1000 * 60 * 60 * 24) + ' Days'}</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow >
                                                    <StyledTableCell >
                                                        Your Age in Hours
                                                </StyledTableCell>
                                                    <StyledTableCell align="right">{dateDiff / (1000 * 60 * 60) + ' Hours'}</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow >
                                                    <StyledTableCell >
                                                        Your Age in Minutes
                                                </StyledTableCell>
                                                    <StyledTableCell align="right">{dateDiff / (1000 * 60) + ' Minutes'}</StyledTableCell>
                                                </StyledTableRow>
                                                <StyledTableRow >
                                                    <StyledTableCell >
                                                        Your Age in Seconds
                                                </StyledTableCell>
                                                    <StyledTableCell align="right">{dateDiff / 1000 + ' Seconds'}</StyledTableCell>
                                                </StyledTableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
