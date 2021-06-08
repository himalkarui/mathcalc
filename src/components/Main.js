import React, { useEffect } from "react";
import '../Assets/favicon/css/stylesfavicon.css';
import Footer from "./Footer";
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardContent, Typography, Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import SendSharp from '@material-ui/icons/Telegram';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        padding: '5%',
        overflow: 'hidden',
        width: '100% !important'
    },
    mainHeader: {
        fontSize: '3rem',
        marginBottom: '20px',
        fontFamily: 'system-ui !important',
        fontWeight: '900',
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, #2D88FC 0%, rebeccapurple 100%) 0% 0% no-repeat padding-box",
        fontSize: 15,
        color: "white",
        marginTop: 14,
        position: "relative",
        borderRadius: '60px',
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    gridItem: {
        margin: '10px 10px 20px 15px',
        minWidth: '252px',
        maxWidth: '252px'
    },
    linkRoot: {
        textAlign: 'center',
        marginBottom: '15px',
        '&:hover': {
            transform: 'rotate(-2deg)',
            color: '#fafafa'
        }
    },
    linkElem: {
        backgroundColor: 'rebeccapurple',
        padding: '0.4rem 1.5rem',
        color: 'white !important',
        borderRadius: '28px',
        '&:hover': {
            transform: 'rotate(-2deg)',
            color: '#fafafa'
        }
    }
}));

export default function Main(props) {

    useEffect(() => {

    }, []);
    const classes = useStyles();

    return (
        <React.Fragment>
            <div data-server-rendered="true" className="layout">
                <section className="hero box appContainer" style={{ backgroundColor: '#5d3980', borderRadius: '0px' }} data-v-677d599e>
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-7">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-grey-light has-text-weight-bold">Mathcalc        </h1>
                                    <p className="title is-3 has-text-letter-spacing-wide has-text-white">One stop web app for all your mathematical calculations and tools for FREE !  </p>
                                </div>
                                <div className="column is-4">
                                    <div className="is-pulled-right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <Container className={classes.root} maxWidth={'md'} >
                    <Card raised elevation={0} style={{ backgroundColor: 'transparent', marginTop: '3%' }} >
                        <Typography className={classes.mainHeader} variant='h1'>
                            Mathcalc
                </Typography>
                        <span className='subtext'>
                            We make calculations easy.  One stop tool for all mathematical calculations.
                </span>
                        <CardContent className='appContainer'>
                            <Link
                                className={classes.button + ' button ' + classes.gridItem}
                                to='/maths/'
                            >EXPLORE MATH CALCS
                                &nbsp;  <SendSharp />
                            </Link>
                        </CardContent>
                    </Card>
                </Container>
                <br />
                <div className="container" style={{ margin: '1rem' }}>
                    <div className="columns">
                        <div className="column divContents is-4 is-3 column.is-offset-1">
                            <div className="content">
                                <h5 className="title is-5">
                                    <Link to={'/maths'} key={'Maths'}
                                    >Mathematics
                                    </Link>
                                </h5>
                                <p><Link to='/maths/shapes/'  >Shapes</Link></p>
                                <p><Link to='/maths/graphs/'  >Graphs</Link></p>
                                <p><Link to='/maths/percentage-calculator/'  >Percentage calculator</Link></p>
                                <p ><Link to='/maths/Single-rule-of-three-direct/'  >Single rule of three direct</Link></p>
                                <p ><Link to='/maths/single-rule-of-three-inverse/'  >Single rule of three inverse</Link></p>
                                <p><Link to='/maths/radians-and-degrees-converter/'  >Radians and degrees converter</Link></p>
                            </div>
                            <p className={classes.linkRoot}>
                                <Link className={classes.linkElem} to='/maths/'>More →</Link></p>
                        </div>
                        <div className="column divContents is-4 is-3">
                            <div className="content">
                                <h5 className="title is-5">
                                    <Link to={'/tools'} key={'tools'}>                                        Tools
                                    </Link>
                                </h5>
                                <p><Link to="/favicon-converter/" aria-current="page" className="active--exact active">Favicon Converter</Link></p>
                                <p><Link to="/favicon-generator/" className="">Favicon Generator</Link></p>
                                <p><Link to="/covid19-tracker/" className="">COVID-19 Tracker</Link></p>
                                <p><Link to="/email-validator/" className="">Free Email Validator</Link></p>
                                <p><Link to="/image-editor/" className="">Online Image Editor</Link></p>
                                <p hidden><Link to="/favicon/emoji-favicons/" className="">Emoji Favicons</Link></p>
                                <p hidden><Link to="/favicon/logo-generator/" className="">Logo Generator</Link></p>
                            </div>
                            <p className={classes.linkRoot}> <Link className={classes.linkElem} to='/tools/'  >More →</Link></p>
                        </div>
                        <div className="column divContents is-4 is-3">
                            <div className="content">
                                <h5 className="title is-5">
                                    <Link to={'/general'} key={'general'}
                                    >
                                        General
                                    </Link>
                                </h5>
                                <p><Link to="/general/age-calculator/" className="">Age Calculator</Link></p>
                                <p><Link to="/general/bmi-calculator/">BMI Calculator</Link></p>
                                <p><Link to="/general/flames-calculator/">Flames Calculator</Link></p>
                                <p><Link to="/general/time-calculator/">Time Calculator</Link></p>
                                <p><Link to="/general/google-adsense-calculator/">Google Adsense Calculator</Link></p>
                                <p><Link to="/general/cpc-roi-calculator/">CPC ROI Calculator</Link></p>
                            </div>
                            <p className={classes.linkRoot}> <Link className={classes.linkElem} to='/general/'  >More →</Link></p>
                        </div>
                    </div>
                    <hr />
                    <div className="columns" style={{ marginTop: '3px' }}>
                        <div className="column divContents is-4">
                            <div className="content">
                                <h5 className="title is-5">
                                    <Link to={'/finance'} key={'finance'}
                                    >
                                        Finance
                                    </Link>
                                </h5>
                                <p><Link to='/finance/foreign-currency-convertor'>Foreign currency rate convertor</Link></p>
                                <p><Link to="/finance/simple-interest/">Simple Interest</Link></p>
                                <p><Link to="/finance/compound-interest">Compound Interest</Link></p>
                                <p><Link to="/finance/discount/">Discount</Link></p>
                                <p><Link to="/finance/emi-calculator/">EMI Calculator</Link></p>
                            </div>
                            <p className={classes.linkRoot}>
                                <Link className={classes.linkElem} to='/finance/'>More →</Link>
                            </p>
                        </div>
                        <div className="column divContents is-4">
                            <div className="content">
                                <h5 className="title is-5">
                                    <Link to={'/physics'} key={'physics'}>
                                        Physics
                                    </Link>
                                </h5>
                                <p><Link to="/physics/eeqlmc2/">Energy Mass Calculator</Link></p>
                                <p><Link to="/physics/ohmslaw/">Ohms Law</Link></p>
                                <p><Link to="/physics/newtons-law-of-gravity/" >Newtons Law of Gravity</Link></p>
                                <p><Link to="/physics/capacitance/">Capacitance</Link></p>
                                <p><Link to="/physics/inductance/" >Inductance</Link></p>
                                <p><Link to="/physics/kinetic-energy/" >Kinetic Energy</Link></p>
                            </div>
                            <p className={classes.linkRoot}>
                                <Link className={classes.linkElem} to="/physics/">More →</Link>
                            </p>
                        </div>
                        <div className="column divContents is-4">
                            <div className="content">
                                <h5 className="title is-5">
                                    <Link to={'/numbers'} key={'numbers'}>
                                        Numbers
                                    </Link>
                                </h5>
                                <p><Link to="/generate-list-numbers/" className="">Generate List of Numbers</Link></p>
                                <p><Link to="/binary-converter/" className="">Binary Converter</Link></p>
                                <p><Link to="/hexadecimal-converter/" className="">Hexadecimal Converter</Link></p>
                                <p><Link to="/sort-numbers/" className="">Sort Numbers</Link></p>
                                <p><Link to="/minimum-maximum-list/" className="">Maximum and minimum of a list</Link></p>
                                <p><Link to="/filter-numbers/" className="">Filter Numbers</Link></p>
                            </div>
                            <p className={classes.linkRoot}>
                                <Link className={classes.linkElem} to="/numbers/">More →</Link>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="columns" style={{ marginTop: '3px' }}>
                        <div className="column divContents is-4">
                            <div className="content">
                                <h5 className="title is-5">
                                    <Link to={'/text-lists'}
                                        key={'text-lists'}>
                                        Text and Lists
                                    </Link>
                                </h5>
                                <p><Link to="/reverse-list/" className="">Reverse List</Link></p>
                                <p><Link to="/list-randomizer/" className="">List Randomizer</Link></p>
                                <p><Link to="/add-text-each-line/" className="">Add text to each line</Link></p>
                                <p><Link to="/sort-list/" className="">Sort List</Link></p>
                                <p><Link to="/count-letters/" className="">Count Letters</Link></p>
                                <p><Link to="/count-words/" className="">Count Words</Link></p>
                            </div>
                            <p className={classes.linkRoot}>
                                <Link className={classes.linkElem} to="/text-lists/">More →</Link>
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </React.Fragment >
    );
}
