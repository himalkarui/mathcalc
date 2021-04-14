import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import clsx from 'clsx';
import {
    Card, CssBaseline, CardHeader, CardMedia, Grid, CardContent, CardActions, Collapse
    , Avatar, Button, Typography, Container, Backdrop, CircularProgress
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import CaculateIcon from '@material-ui/icons/SendOutlined';
import ArrowDown from '@material-ui/icons/ArrowDropDownCircleOutlined';
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
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#1a1a1af0',
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
        width: '99%',
        backgroundColor: 'white'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    control: {
        padding: theme.spacing(1),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    button: {
        background: " linear-gradient(180deg, #212121 0%, #010101 100%) 0% 0% ",
        height: 50,
        width: 202,
        borderRadius: 60,
        "&:hover": {
            background: " linear-gradient(180deg, #010101 0%, #212121 100%) 0% 0% ",
        },
        backgroundColor: '#212121 !important'
    },
    gridItem: {
        margin: '10px 10px 20px 15px',
        minWidth: '252px'
    }
}));
export default function General() {
    const classes = useStyles();
    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const [selectedFrom, setSelectedFrom] = React.useState(new Date().toLocaleDateString().substr(0, 9));
    const [selectedTo, setSelectedTo] = React.useState(new Date().toLocaleDateString().substr(0, 9));

    const [dateDiff, SetDateDiff] = React.useState(0);

    const onCalculateClick = (e) => {
        SetBackDropopen(true);
        const diffTime = Math.abs((new Date(selectedTo)) - (new Date(selectedFrom)));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        SetDateDiff(diffTime);
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
            </Helmet>
            <div class='appHeading'>
                <h4 class='my-4'><strong> Age calculator</strong></h4>
            </div>
            <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Card className={classes.root} raised elevation={0} >
                    <h4 class='my-4'><strong><ArrowDown /> Modify the values and click the calculate button to use
                </strong></h4>   <CardContent class='appContainer'>
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
                                    className={classes.gridItem}
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
                                    className={classes.gridItem}
                                />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button + ' ' + classes.gridItem}
                                    startIcon={<CaculateIcon />}
                                    onClick={() => { onCalculateClick() }}
                                >Calculate</Button>
                            </Grid>
                        </MuiPickersUtilsProvider>
                    </CardContent>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph><strong>Result:</strong></Typography>
                            <TableContainer style={{ overFlow: 'hidden' }}>
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
                                        <TableRow style={{ width: '100%', background: 'linear-gradient(181deg, #c4c4c4, #e2e2e2,rgb(223 223 225),#fbfbfb)' }}>
                                            <StyledTableCell colSpan={2}>Count Down your Next Birthday 🤡</StyledTableCell>
                                        </TableRow>

                                        <StyledTableRow >
                                            <StyledTableCell >
                                                Your Age in Seconds
                                                </StyledTableCell>
                                            <StyledTableCell align="right">{dateDiff / 1000 + ' Seconds'}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow >
                                            <StyledTableCell >
                                                Your Age in Seconds
                                                </StyledTableCell>
                                            <StyledTableCell align="right">{dateDiff / 1000 + ' Seconds'}
                                            </StyledTableCell>
                                        </StyledTableRow >
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Collapse>
                </Card>

            </Container>
        </div >
    );
}
