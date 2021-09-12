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
    KeyboardDatePicker
} from '@material-ui/pickers';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VerticalAds from '../../../Components/VerticalAds';
import SubNavBar from '../../../Components/SubNavBar';

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
        minWidth: "243px !important",
        background:
            "transparent linear-gradient(180deg, rgb(0 85 255) 0%, #1962BF 100%) 0% 0% no-repeat padding-box",
        fontSize: 15,
        color: "#fff",
        marginTop: 14,
        padding: '26px',
        position: "relative",
        width: '100%',
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    input: {
        width: '100%',
    }

}));

export default function Age() {

    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const [selectedFrom, setSelectedFrom] = React.useState(new Date().toLocaleDateString().substr(0, 9));
    const [selectedTo, setSelectedTo] = React.useState(new Date().toLocaleDateString().substr(0, 9));

    const [dateDiff, SetDateDiff] = React.useState(0);

    const onCalculateClick = (e) => {
        SetBackDropopen(true);
        const diffTime = Math.abs((new Date(selectedTo)) - (new Date(selectedFrom)));

        //add days for leap years
        let leapdays = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) / 4;

        let leapsdaysinMillisecs = leapdays * 24 * 60 * 60 * 1000;

        SetDateDiff(diffTime + leapsdaysinMillisecs);

        setTimeout(() => {
            SetBackDropopen(false);
        }, 250)

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
                <title>Age calculator || How old am I today? || How old was i on ? - mathcalc</title>
                <meta name="keywords" content="mathcalc,how old was i on , how old i am,  age calculator, free online calculator, free age calculator, age , age calculation" />
                <meta name="description" content="Use Mathcalc age calculator for calculating the the difference between two dates online for free" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Age Calculator"
                            links={[{
                                url: "/general/",
                                urlName: "General"
                            }]}
                        />
                        <br />
                        <Card raised elevation={1} className="box" >
                            <h2 className={'title is-5'}>
                                Age calculator</h2>
                            <p>
                                The Age Calculator can determine the age or interval between two dates.
                                The calculated age will be displayed in years, months, weeks, days, hours, minutes, and seconds
                            </p>
                            <br />
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <Grid container spacing={4} justify="center">
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            autoOk
                                            label="Date of Birth"
                                            inputVariant="outlined"
                                            variant="inline"
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
                                                    setTimeout(() => {
                                                        setSnakOpen(false)
                                                    }, 2000)
                                                }
                                                else { setSelectedFrom(e); }
                                            }}
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            autoOk
                                            label="Age at the Date of"
                                            inputVariant="outlined"
                                            variant="inline"
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
                                                    setTimeout(() => {
                                                        setSnakOpen(false)
                                                    }, 2000)
                                                }
                                                else { setSelectedTo(e); }
                                            }}
                                            className={classes.input}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            startIcon={<CaculateIcon />}
                                            onClick={() => { onCalculateClick() }}
                                        >Calculate</Button>
                                    </Grid>
                                </Grid>
                            </MuiPickersUtilsProvider>
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
                                                            (dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.5)
                                                        ) + ' Months, and '
                                                        + Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 30.5)) / (1000 * 60 * 60 * 24)) + ' Days'
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
                        <br />

                        <Card className="box" elevation={1}>
                            <h2 className="title is-5">How old am I today?</h2>
                            <p>If you want to know exactly how old you are today,
                                <strong> {" " + new Date().toDateString() + ' '}</strong>
                                this is possible using mathematical calculation or using my calculator. With my age calculator, you can find out how many years, months, weeks, days and hours have passed since you were born. If you know the time of your birth, enter it into the second box for an even more precise result.
                            </p>
                            <br />
                            <h2 className="title is-5">  How old was I on X date?</h2>
                            <p>Should you want to know how old you were on a certain date in past history, or how old you will be at a future date, we've got you covered. Simply make use of our 'Age at Date' option to enter a date in either the past or future. Our calculator will then make a calculation based upon that date.
                            </p>
                            <br />
                            <h2 className="title is-5">How many days old am I?</h2>
                            <p>People regularly ask how they can work out how many days they've been alive for and I point them to this calculator (it's one of the reasons I created it). Although you can have a rough guess by multiplying your age in years by 365, you could still be out by up to several hundred days. This will in most part be because you'll be working on the basis of your age at your last birthday, and therefore excluding the days since.
                            </p>
                            <p>  There's also leap years to take into consideration. These occur once every four years and mean an extra day in the calendar (366 days in the year). Your best way to get an accurate calculation to how old you are in days is, therefore, to use the age calculator tool provided.
                            </p>
                            <br />
                            <h2 className="title is-5">  How old was the oldest person ever?</h2>
                            <p>The oldest person ever recorded was Jeanne Calment, a woman from France. She was born on February 21, 1875 and lived until the age of 122 years and 164 days before passing away on August 4, 1997. (ref)
                            </p>
                            <p> Of the top 10 oldest people ever, all 10 are currently women. The oldest man ever is currently recorded as being Jiroemon Kimura from Japan, who lived until the age of 116 years and 54 days. He passed away on June 12, 2013.
                            </p>
                            <p>With that said, Fredie Blom, a South African man born on 8 May 1904, was recorded as 'unofficially' the world's oldest man ('unofficial' because he wasn't listed in the Guinness Book of World Records). Fredie died on 22 August 2020 at a said age of 116 years, 3 months, and 14 days.
                            </p>
                            <br />
                            <h2 className="title is-5"> How to age well</h2>
                            <p>
                                A government researcher once quipped that "Age is an issue of mind over matter. If you don't mind, it doesn't matter." Luis Bunuel, the Spanish filmmaker, joked that "Age is something that doesn't matter unless you're a cheese". Perhaps we can also add 'wine' to that?

                                These quotes are, of course, meant to be whimsical. There's little doubt that while you can't control your age, or predict what might happen to you, you can take actions to keep yourself healthy and give yourself the best chance of reaching a ripe old age.</p>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
