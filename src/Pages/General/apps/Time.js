import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import clsx from 'clsx';
import {
    Grid, Radio, FormControl, RadioGroup, FormControlLabel, Card, Backdrop, CircularProgress, Container
} from '@material-ui/core';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import SubNavBar from '../../../Components/SubNavBar';
// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();

    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

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
    table: {
        "& td": {
            padding: '15px',
            border: '1px solid #e2e2e2',
        },
        "& th": {
            padding: '14px',
            backgroundColor: '#e5a400',
            border: '1px solid #e2e2e2',
            color: theme.palette.common.white,
        }
    },
    tableCalc: {
        "& th,td": {
            padding: '4px',
        },

    },
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        backgroundColor: '#137cbd',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#106ba3',
        },
    },
}));

export default function Time() {

    const classes = useStyles();

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);

    const [state, setState] = useState({
        startDay: 0,
        startHour: 0,
        startMinute: 0,
        startSec: 0,

        opDay: 0,
        opHour: 0,
        opMinute: 0,
        opSec: 0,

        resultDay: 0,
        resultHour: 0,
        resultMinute: 0,
        resultSec: 0,
        operation: 'add',

        resInsecs: 0,
    });

    const onCalculateClick = (e) => {
        SetBackDropopen(true);

        let startd = state.startDay === '' ? 0 : parseFloat(state.startDay);
        let starth = state.startHour === '' ? 0 : parseFloat(state.startHour);
        let startm = state.startMinute === '' ? 0 : parseFloat(state.startMinute);
        let starts = state.startSec === '' ? 0 : parseFloat(state.startSec);

        let startTotalsecs = starts + (startm * 60) + (starth * 60 * 60) + (startd * 24 * 60 * 60)


        let opd = state.opDay === '' ? 0 : parseFloat(state.opDay);
        let oph = state.opHour === '' ? 0 : parseFloat(state.opHour);
        let opm = state.opMinute === '' ? 0 : parseFloat(state.opMinute);
        let ops = state.opSec === '' ? 0 : parseFloat(state.opSec);

        let opTotalsecs = ops + (opm * 60) + (oph * 60 * 60) + (opd * 24 * 60 * 60)

        let resd = 0;
        let resh = 0;
        let resm = 0;
        let ress = 0;
        let resultSeconds = 0;

        let resHours = 0;
        let remMinutes = 0;

        if (state.operation === "add") {

            resultSeconds = startTotalsecs + opTotalsecs;

        } else {
            if (opTotalsecs > startTotalsecs) {
                setSnakOpen(true);
                setSnakMessage('Start Time should be greater than End time');
            }
            resultSeconds = startTotalsecs - opTotalsecs;
        }

        resd = (resultSeconds - resultSeconds % (60 * 60 * 24)) / (60 * 60 * 24);

        resHours = resultSeconds % (60 * 60 * 24);

        resh = (resHours - resHours % (60 * 60)) / (60 * 60);

        remMinutes = resHours % (60 * 60);

        resm = (remMinutes - remMinutes % (60)) / (60);

        ress = remMinutes % (60);

        setState({
            ...state,
            resultDay: resd,
            resultHour: resh,
            resultMinute: resm,
            resultSec: ress,
            resInsecs: resultSeconds
        });

        setTimeout(() => {
            SetBackDropopen(false);
        }, 250);
    };

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };
    const onInputChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    }

    const onInputminsecChange = (e) => {
        if (e.target.value <= 59)
            setState({
                ...state,
                [e.target.id]: e.target.value,
            })
    }

    const onInputHourChange = (e) => {
        if (e.target.value <= 23)
            setState({
                ...state,
                [e.target.id]: e.target.value,
            })
    }

    useEffect(() => {
        onCalculateClick();
        // eslint-disable-next-line
    }, [state.startDay, state.startHour, state.startMinute, state.startSec, state.opDay
        , state.opHour, state.opMinute, state.opSec, state.operation])

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
                <title>Time calculator - mathcalc</title>
                <meta name="keywords" content="mathcalc,time calculator, online time calculator, online free time calculator, time" />
                <meta name="description" content="Time calculator can be used to add or subtract two time values." />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <div className={classes.root}>
                    <Grid container>
                        <Grid item lg={8} md={8} sm={12}>
                            <SubNavBar
                                pageTitle="Time Calculator"
                                links={[{
                                    url: "/general/",
                                    urlName: "General"
                                }]}
                            />
                            <section className="hero" data-v-23847e07>
                                <div style={{ padding: '2rem 0.5rem' }}>
                                    <div className="container">
                                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                            ONLINE FREE TIME CALCULATOR</h1>
                                        <p style={{ lineHeight: '27px' }} className="  has-text-grey subtitle is-6">
                                            This calculator can be used to "add" or "subtract" two time values.
                            Input fields can be left blank, which will be taken as 0 by default.   </p>
                                    </div>
                                </div>
                            </section>
                            <Card raised className="box" elevation={1}>
                                <table className={classes.tableCalc}>
                                    <thead>
                                        <tr>
                                            <th>Days&nbsp;</th>
                                            <th>Hour</th>
                                            <th>Minute</th>
                                            <th>Second</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input id="startDay" type="number" onChange={onInputChange} value={state.startDay} className="input"></input></td>
                                            <td><input id="startHour" max="23" type="number" onChange={onInputHourChange} value={state.startHour} className="input"></input></td>
                                            <td><input id="startMinute" max="59" type="number" onChange={onInputminsecChange} value={state.startMinute} className="input"></input></td>
                                            <td><input id="startSec" max="59" type="number" onChange={onInputminsecChange} value={state.startSec} className="input"></input></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="1" ></td>
                                            <td colSpan="2">
                                                <FormControl component="fieldset">
                                                    <RadioGroup style={{ flexWrap: 'nowrap', flexDirection: 'row', alignItems: 'center' }}
                                                        id="operation" defaultValue="add" name="customized-radios" >
                                                        <FormControlLabel value="add" control={<StyledRadio id="operation" onChange={onInputChange} />} label="Add" />
                                                        <FormControlLabel value="subtract" control={<StyledRadio id="operation" onChange={onInputChange} />} label="Subtract" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </td>
                                            <td colSpan="1" ></td>
                                        </tr>

                                        <tr>
                                            <td><input id="opDay" type="number" onChange={onInputChange} value={state.opDay} className="input"></input></td>
                                            <td><input id="opHour" max="24" type="number" onChange={onInputHourChange} value={state.opHour} className="input"></input></td>
                                            <td><input id="opMinute" max="59" type="number" onChange={onInputminsecChange} value={state.opMinute} className="input"></input></td>
                                            <td><input id="opSec" max="59" type="number" onChange={onInputminsecChange} value={state.opSec} className="input"></input></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"></td>
                                            <td colSpan="2" style={{ fontSize: '20px' }}>=</td>
                                            <td colSpan="2"></td>
                                        </tr>
                                        <tr>
                                            <td><input disabled className="input" value={state.resultDay}></input></td>
                                            <td><input disabled className="input" value={state.resultHour}></input></td>
                                            <td><input disabled className="input" value={state.resultMinute}></input></td>
                                            <td><input disabled className="input" value={state.resultSec}></input></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6">= &nbsp;{state.resInsecs + " Seconds"} </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6">= &nbsp;{Math.floor(state.resInsecs / 60) + " Minutes " + state.resInsecs % 60 + " Seconds"} </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6">= &nbsp;{Math.floor(state.resInsecs / (60 * 60)) + " Hours " + Math.floor((state.resInsecs % (60 * 60)) / 60) + " Minutes " + (state.resInsecs % (60 * 60)) % 60 + " Seconds"} </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6">= &nbsp;{(state.resInsecs - state.resInsecs % (60 * 60 * 24)) / (60 * 60 * 24) + " Days " + Math.floor((state.resInsecs % (60 * 60 * 24)) / (60 * 60)) + " Hours " + Math.floor((state.resInsecs % (60 * 60)) / 60) + " Minutes " + (state.resInsecs % (60 * 60)) % 60 + " Seconds"} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                            <br />
                            <Card raised className="box" elevation={1}>
                                <h3 className="title is-4"  >
                                    Time Calculator</h3>
                                <p> This calculator can be used to "add" or "subtract" two time values. Input fields can be left blank, which will be taken as 0 by default.
   </p><br />
                                <p>
                                    Like other numbers, time can be added or subtracted. However, due to how time is defined, there exist differences in how calculations must be computed when compared to decimal numbers. The following table shows some common units of time.
</p><br />
                                <table className={classes.table}>

                                    <thead>
                                        <tr>
                                            <th>Unit</th>
                                            <th>Definition</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td> millennium</td><td>	1,000 years</td></tr>
                                        <tr><td>century</td><td>100 years</td></tr>
                                        <tr><td>decade</td><td>10 years</td></tr>
                                        <tr><td>year (average)</td><td>365.242 days or 12 months</td></tr>
                                        <tr><td>common year</td><td>	365 days or 12 months</td></tr>
                                        <tr><td>leap year</td><td>	366 days or 12 months</td></tr>
                                        <tr><td>quarter</td><td>	3 months</td> </tr>
                                        <tr><td>month</td><td>	28-31 days Jan., Mar., May, Jul., Aug. Oct., Dec.—31 days
                                        Apr., Jun., Sep., Nov.—30 days.
                                        Feb.—28 days for common year and 29 days for leap year
                                      </td></tr>
                                        <tr><td>  week</td><td> 	7 days</td></tr>
                                        <tr><td> day</td><td>	24 hours or 1,440 minutes or 86,400 seconds
                                       </td></tr>
                                        <tr><td>hour</td><td>60 minutes or 3,600 seconds</td></tr>
                                        <tr><td>minute</td><td>60 seconds</td></tr>
                                        <tr><td>second</td><td>	base unit</td></tr>
                                        <tr><td>millisecond</td><td>	10-3 second</td></tr>
                                        <tr><td>microsecond</td><td>	10-6 second</td></tr>
                                        <tr><td>nanosecond</td><td>
                                            10-9 second</td></tr>
                                        <tr><td>picosecond</td><td>	10-12 second</td></tr>
                                    </tbody>
                                </table>

                                <br />
                                <h3 className="title"> Concepts of Time:</h3>

                                <h3 className="title is-4">Ancient Greece
</h3>
                                <p>
                                    There exist various concepts of time that have been postulated by different philosophers and scientists over an extensive period of human history. One of the earlier views was presented by the ancient Greek philosopher Aristotle (384-322 BC), who defined time as "a number of movement in respect of the before and after." Essentially, Aristotle's view of time defined it as a measurement of change requiring the existence of some kind of motion or change. He also believed that time was infinite and continuous, and that the universe always did, and always will exist. Interestingly, he was also one of, if not the first person to frame the idea that time existing of two different kinds of non-existence, makes time existing at all, questionable. Aristotle's view is solely one amongst many in the discussion of time, the most controversial of which began with Sir Isaac Newton, and Gottfried Leibniz.
</p>
                                <br />
                                <h3 className="title is-4">
                                    Newton & Leibniz
</h3>
                                <p>
                                    In Newton's Philosophiæ Naturalis Principia Mathematica, Newton tackled the concepts of space and time as absolutes. He argued that absolute time exists and flows without any regard to external factors, and called this "duration." According to Newton, absolute time can only be understood mathematically, since it is imperceptible. Relative time on the other hand, is what humans actually perceive and is a measurement of "duration" through the motion of objects, such as the sun and the moon. Newton's realist view is sometimes referred to as Newtonian time.
<br />

Contrary to Newton's assertions, Leibniz believed that time only makes sense in the presence of objects with which it can interact. According to Leibniz, time is nothing more than a concept similar to space and numbers that allows humans to compare and sequence events. Within this argument, known as relational time, time itself cannot be measured. It is simply the way in which humans subjectively perceive and sequence the objects, events and experiences accumulated throughout their lifetimes.
<br />
One of the prominent arguments that arose from the correspondence between Newton's spokesman Samuel Clarke and Leibniz is referred to as the bucket argument, or Newton's bucket. In this argument, water in a bucket hanging stationary from a rope begins with a flat surface, which becomes concave as the water and bucket are made to spin. If the bucket's rotation is then stopped, the water remains concave during the period it continues to spin. Since this example showed that the concavity of the water was not based on an interaction between the bucket and the water, Newton claimed that the water was rotating in relation to a third entity, absolute space. He argued that absolute space was necessary in order to account for cases where a relationalist perspective could not fully explain an object's rotation and acceleration. Despite Leibniz's efforts, this Newtonian concept of physics remained prevalent for nearly two centuries.
<br />
                                </p>
                                <br />
                                <h3 className="title is-4">
                                    Einstein</h3>
                                <p>
                                    While many scientists including Ernst Mach, Albert A. Michelson, Hendrik Lorentz, and Henri Poincare among others contributed to what would ultimately transform theoretical physics and astronomy, the scientist credited with compiling and describing the theory of relativity and the Lorenz Transformation was Albert Einstein. Unlike Newton, who believed that time moved identically for all observers regardless of frame of reference, Einstein, building on Leibniz's view that time is relative, introduced the idea of spacetime as connected, rather than separate concepts of space and time. Einstein posited that the speed of light, c, in vacuum, is the same for all observers, independent of the motion of the light source, and relates distances measured in space with distances measured in time. Essentially, for observers within different inertial frames of reference (different relative velocities), both the shape of space as well as the measurement of time simultaneously change due to the invariance of the speed of light – a view vastly different from Newton's. A common example depicting this involves a spaceship moving near the speed of light. To an observer on another spaceship moving at a different speed, time would move slower on the spaceship travelling at near the speed of light, and would theoretically stop if the spaceship could actually reach the speed of light.
<br />
To put it simply, if an object moves faster through space, it will move slower through time, and if an object moves slower through space, it will move faster through time. This has to occur in order for the speed of light to remain constant.
<br />
It is worth noting that Einstein's theory of general relativity, after nearly two centuries, finally gave answer to Newton's bucket argument. Within general relativity, an inertial frame of reference is one that follows a geodesic of spacetime, where a geodesic generalizes the idea of a straight line to that of curved spacetime. General relativity states: an object moving against a geodesic experiences a force, an object in free fall does not experience a force because it is following a geodesic, and an object on earth does experience a force because the surface of the planet applies a force against the geodesic to hold the object in place. As such, rather than rotating with respect to "absolute space" or with respect to distant stars (as postulated by Ernst Mach), the water in the bucket is concave because it is rotating with respect to a geodesic.
<br />
The various concepts of time that have prevailed throughout different periods of history make it evident that even the most well-conceived theories can be overturned. Despite all of the advances made in quantum physics and other areas of science, time is still not fully understood. It may only be a matter of time before Einstein's absolute constant of light is revoked, and humanity succeeds in traveling to the past!
</p>
                                <br />
                                <h3 className="title is-4">
                                    How we measure time:
</h3>
                                <p>
                                    There are two distinct forms of measurement typically used today to determine time: the calendar and the clock. These measurements of time are based on the sexagesimal numeral system which uses 60 as its base. This system originated from ancient Sumer within the 3rd millennium BC, and was adopted by the Babylonians. It is now used in a modified form for measuring time, as well as angles and geographic coordinates. Base 60 is used due to the number 60's status as a superior highly composite number having 12 factors. A superior highly composite number is a natural number, that relative to any other number scaled to some power of itself, has more divisors. The number 60, having as many factors as it does, simplifies many fractions involving sexagesimal numbers, and its mathematical advantage is one of the contributing factors to its continued use today. For example, 1 hour, or 60 minutes, can be evenly divided into 30, 20, 15, 12, 10, 6, 5, 4, 3, 2, and 1 minute, illustrating some of the reasoning behind the sexagesimal system's use in measuring time.
</p>
                                <br />
                                <h3 className="title is-4">
                                    Development of the second, minute, and concept of a 24-hour day:
</h3>                            <p>
                                    <br />
The Egyptian civilization is often credited as being the first civilization that divided the day into smaller parts, due to documented evidence of their use of sundials. The earliest sundials divided the period between sunrise and sunset into 12 parts. Since sundials could not be used after sunset, measuring the passage of night was more difficult. Egyptian astronomers noticed patterns in a set of stars however, and used 12 of those stars to create 12 divisions of night. Having these two 12 part divisions of day and night is one theory behind where the concept of a 24-hour day originated. The divisions created by the Egyptians however, varied based on the time of the year, with summer hours being much longer than those of winter. It was not until later, around 147 to 127 BC that a Greek astronomer Hipparchus proposed dividing the day into 12 hours of daylight and 12 hours of darkness based on the days of the equinox. This constituted the 24 hours that would later be known as equinoctial hours and would result in days with hours of equal length. Despite this, fixed length hours only became commonplace during the 14th century along with the advent of mechanical clocks.
<br />
Hipparchus also developed a system of longitude lines encompassing 360 degrees, which was later subdivided into 360 degrees of latitude and longitude by Claudius Ptolemy. Each degree was divided into 60 parts, each of which was again divided into 60 smaller parts that became known as the minute and second respectively.
<br />
While many different calendar systems were developed by various civilizations over long periods of time, the calendar most commonly used worldwide is the Gregorian calendar. It was introduced by Pope Gregory XIII in 1582 and is largely based on the Julian calendar, a Roman solar calendar proposed by Julius Caesar in 45 BC. The Julian calendar was inaccurate and allowed the astronomical equinoxes and solstices to advance against it by approximately 11 minutes per year. The Gregorian calendar significantly improved upon this discrepancy. Refer to the date calculator for further details on the history of the Gregorian calendar.
</p>
                                <br />
                                <h3 className="title is-4">
                                    Early timekeeping devices:
</h3>
                                <p>
                                    Early devices for measuring time were highly varied based on culture and location, and generally were intended to divide the day or night into different periods meant to regulate work or religious practices. Some of these include oil lamps and candle clocks which were used to mark the passage of time from one event to another, rather than actually tell the time of the day. The water clock, also known as a clepsydra, is arguably the most accurate clock of the ancient world. Clepsydras function based on the regulated flow of water from, or into a container where the water is then measured to determine the passage of time. In the 14th century, hourglasses, also known as sandglasses, first appeared and were originally similar in purpose to oil lamps and candle clocks. Eventually, as clocks became more accurate, they were used to calibrate hourglasses to measure specific periods of time.
<br />
The first pendulum mechanical clock was created by Christiaan Huygens in 1656, and was the first clock regulated by a mechanism with a "natural" period of oscillation. Huygens managed to refine his pendulum clock to have errors of fewer than 10 seconds a day. Today however, atomic clocks are the most accurate devices for time measurement. Atomic clocks use an electronic oscillator to keep track of passing time based on cesium atomic resonance. While other types of atomic clocks exist, cesium atomic clocks are the most common and accurate. The second, the SI unit of time, is also calibrated based on measuring periods of the radiation of a cesium atom.

</p>
                            </Card>
                            <br />
                        </Grid>
                        <Grid item lg={4} md={4} sm={false}></Grid>
                    </Grid>
                </div >
            </Container>
        </div>
    );
}
