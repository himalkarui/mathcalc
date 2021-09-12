import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, Container, Box, Typography
} from '@material-ui/core';
import SubNavBar from '../../../Components/SubNavBar';
import VerticalAds from '../../../Components/VerticalAds';
// import EventIcon from '@material-ui/icons/CalendarToday';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, rgb(255 0 84) 0%, #bf191f 100%) 0% 0% no-repeat padding-box",
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
        color: '#fff',
        borderRadius: '0px',
        textAlign: 'center',
        background: 'linear-gradient(122deg, #f44336, #ff0dcc, blue,#452b2b9e)',
    },
    date: {
        border: '1px solid blue',
        boxShadow: 'none',
        borderRadius: '0px',
        height: '50px',
        margin: '12px 0px',
    },
    img: {
        margin: '-6rem 0px',
        [theme.breakpoints.down('md')]: {
            margin: '0px'
        },
    }

}));

export default function Dayofweek() {

    const classes = useStyles();

    const [dayof, setDayof] = React.useState('');
    const [date, setDate] = React.useState((new Date()).toISOString().substring(0, 10));

    const showDay = (e) => {
        let newDate = new Date(e.target.value);
        let weekday = 'Enter valid date';

        setDate((new Date(newDate)).toISOString().substring(0, 10));

        switch (newDate.getDay()) {
            case 0:
                weekday = 'Sunday'
                break;
            case 1:
                weekday = 'Monday'
                break;
            case 2:
                weekday = 'Tuesday'
                break;
            case 3:
                weekday = 'Wednesday'
                break;
            case 4:
                weekday = 'Thursday'
                break;
            case 5:
                weekday = 'Friday'
                break;
            case 6:
                weekday = 'Saturday'
                break;
            default:
                break;
        }

        setDayof(weekday);
    };

    return (
        <div className={classes.root}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Weekday of the date calculator online - Mathcalc</title>
                <meta name="keywords" content="weekday, day , day on particular date, weekday on the selected date, day finder" />
                <meta name="description" content="Mathcalc Weekday finder is used to find the weekday of a date easily. What day of the week was I born? What day of the week is April 8 2024?." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>

                <meta property='og:title' content='Weekday of the date calculator online - Mathcalc' />
                <meta property='og:description' content="Mathcalc Weekday finder is used to find the weekday of a date easily. What day of the week was I born? What day of the week is April 8 2024?." />
                <meta property='og:image' content='https://i.imgur.com/gNGxesG.png' />
                <meta property='og:image:width' content='800' />
                <meta property='og:image:height' content='600' />
                <meta property="og:type" content='website' />

            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Weekday of the date calculator"
                            links={[{
                                url: "/general/",
                                urlName: "General"
                            }]}
                        />
                        <br />
                        <Card elevation={2}>
                            <figure>
                                <picture>
                                    <img className={classes.img} src="https://i.imgur.com/gNGxesG.png" alt="how to get the weeday name from a date"></img>
                                </picture>
                            </figure>
                            <Box p={2} style={{ position: 'relative', backgroundColor: 'white' }}>
                                <div>
                                    Date:<input className={'input ' + classes.date} value={date.toString()} onChange={showDay} type="date" placeholder="Recipient email" />
                                </div>
                                <br />
                                <div style={{ fontFamily: 'auto', fontSize: 'x-large' }}>
                                    Day of the week : {dayof}
                                </div>
                                <br />
                            </Box>
                        </Card>
                        <br />
                        <Card elevation={2}>
                            <Box p={2}>
                                <Typography variant="h1" className="title is-4"> Table of contents: </Typography>
                                <p>
                                    <a style={{ color: 'rebeccapurple' }} href="#What-day-of-the-week-was-I-born"> 1.What day of the week was I born? What day of the week is April 8 2024?
                                    </a>
                                    <br />
                                    <a style={{ color: 'rebeccapurple' }} href="#Days-of-the-week-origin">   2.Days of the week origin </a> <br />
                                    <a style={{ color: 'rebeccapurple' }} href="#other-calculators">  3.Other Time & Date calculators </a> <br />
                                    <br />
                                    You've got the message that your beloved auntie comes to your place on 5th April. But what's the day of the week of that visit, is that a middle of the workweek or is it a Sunday?
                                    <br />
                                    <br />
                                    Our day of the week calculator is prepared for such questions - just select the date from a calendar and the tool will display the day of the week. Check out what day of the week you were born on, or what day of the week is April 8 2024, which is the day of a total solar eclipse for several states. If you're interested in the origins of the days of the week, you won't be disappointed as we also wrote a short paragraph about names.
                                </p>
                                <br />
                                <Typography className="title is-4" variant='h1' id="What-day-of-the-week-was-I-born"> What day of the week was I born? What day of the week is April 8 2024?</Typography>
                                <p>People often want to know which weekday they were born on.
                                </p>
                                <br />
                                <Typography variant="h1" className="title is-4">How to find what day it was with this day of the week calculator?</Typography>
                                <p>
                                    1.Click on the displayed today's date. <br />
                                    2.The calendar appears. Choose the year of your birth from a drop-down list.<br />
                                    3.Using the arrows, select the month of your birthday.<br />
                                    4.Finally, click on the day of your birthday.<br />
                                    5.Easy-peasy!<br />
                                </p>
                                <br />
                                <p>With this day of the week calculator, you can quickly check many other dates, for example you can find out that next total solar eclipse in the US is on Monday.</p>
                                <br />
                                <Typography variant="h1" className="title is-4" id="Days-of-the-week-origin">  Days of the week origin</Typography>
                                <p>  Have you ever wondered what is the etymology of the weekday names? No? We neither. Apart from obvious Sunday, we didn't think about it before.
                                </p>
                                <br />
                                <p>
                                    The Romans named the days after their gods and the celestial bodies such as Moon and Sun. Romance languages still resemble those names, but English names were filtered through ages by Germanic and Norse culture. Tuesday, Wednesday, Thursday and Friday names are influenced by their myths, but Moon, Sun and Saturn are still visible cores in remaining days' names:
                                </p>
                                <br />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ overflowX: 'auto', width: '80vw' }}>
                                        <table className="table is-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Planet</th>
                                                    <th>Latin</th>
                                                    <th>Old English</th>
                                                    <th>English</th>
                                                    <th>Spanish</th>
                                                    <th>French</th>
                                                    <th>Italian</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Moon</td>
                                                    <td>Dies Lunae</td>
                                                    <td> Mōnandæg (Moon's day)</td>
                                                    <td>Monday</td>
                                                    <td>lunes</td>
                                                    <td>lundi</td>
                                                    <td>lunedi</td>
                                                </tr>
                                                <tr>
                                                    <td>Mars</td>
                                                    <td>Dies Martis</td>
                                                    <td>Tīwesdæg (Tiw's day)</td>
                                                    <td>Tuesday</td>
                                                    <td>martes</td>
                                                    <td>mardi</td>
                                                    <td>martedi</td>
                                                </tr>
                                                <tr>
                                                    <td>Mercury</td>
                                                    <td>Dies Mercurii</td>
                                                    <td> Wōdnesdæg (Wōden's day)</td>
                                                    <td>Wednesday</td>
                                                    <td>miércoles</td>
                                                    <td>mercredi</td>
                                                    <td>mercoledì</td>
                                                </tr>
                                                <tr>
                                                    <td>Jupiter</td>
                                                    <td>Dies Jovis</td>
                                                    <td> Þunresdæg (Þunor's day)</td>
                                                    <td>Thursday</td>
                                                    <td>jueves</td>
                                                    <td>jeudi</td>
                                                    <td>giovedi</td>
                                                </tr>
                                                <tr>
                                                    <td>Venus</td>
                                                    <td>Dies Veneris</td>
                                                    <td>Frīgedæg (Frigg's / Freya's day) </td>
                                                    <td>Friday</td>
                                                    <td>viernes</td>
                                                    <td>vendredi</td>
                                                    <td>venerdì</td>
                                                </tr>
                                                <tr>
                                                    <td>Saturn</td>
                                                    <td>Dies Saturni</td>
                                                    <td>Sæternesdæg (Saturn's day)</td>
                                                    <td>Saturday</td>
                                                    <td>sábado</td>
                                                    <td>samedi</td>
                                                    <td>sabato</td>
                                                </tr>
                                                <tr>
                                                    <td>Sun</td>
                                                    <td>Dies Solis</td>
                                                    <td>Sunnandæg (Sun's day)</td>
                                                    <td>Sunday</td>
                                                    <td>domingo</td>
                                                    <td>dimanche</td>
                                                    <td>domenica</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Box>
                        </Card>
                        <br />
                        <Card elevation={2} className="box">
                            <Box p={2} id="other-calculators">
                                <h4 className="title is-4">Other Date and Time calculators</h4>
                                <p>
                                    1. <a style={{ color: 'rebeccapurple' }} href='/general/age-calculator/'>Age Calculator</a> : used to calcualte the difference between two days. you can find the answers for questions like 'How old was i on ?, what is my age on particular date ?', etc.
                                    <br />
                                    <br />
                                    2. <a style={{ color: 'rebeccapurple' }} href='/general/time-calculator/'>Time calculator</a> : used to calcualte the difference between two dates and you can add or subtract a day or month or year to the date.
                                </p>
                            </Box>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                        <VerticalAds /></Grid>
                </Grid>
            </Container>
        </div >
    );
}
