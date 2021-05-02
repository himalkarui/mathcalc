import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    CssBaseline, Typography, Container,
} from '@material-ui/core';
import Forward from '../../Assets/icons/Forward';
import Compress from '../../Assets/icons/Compress';
import SubNavBar from "../../Components/SubNavBar";

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
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, #2D88FC 0%, #1962BF 100%) 0% 0% no-repeat padding-box",
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
    header: {
        left: '0px',
        right: '0px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'block',
        padding: '5rem',
        fontFamily: 'cursive !important',
    }
}));

export default function AllTools(props) {

    useEffect(() => {

    }, []);
    const classes = useStyles();

    let arrUrls = [
        { urlname: 'age calculator', url: '/general/age-calculator', desc: 'To calculate age or date' },
        { urlname: 'bmi calculator', url: '/general/bmi-calculator', desc: 'To calculate your BMI' },
        { urlname: 'simple-interest', url: '/finance/simple-interest', desc: 'To calculate the simple interest' },
        { urlname: 'compound-interest', url: '/finance/compound-interest', desc: 'To calculate the compound interest' },
        { urlname: 'shapes', url: '/maths/shapes', desc: 'To calculate shapes' }
    ];

    return (
        <React.Fragment>
            <>
                <SubNavBar />
                <Container maxWidth={'xl'} className={classes.header}>
                    <Typography variant='h2' style={{ fontFamily: 'inherit' }}>
                        <strong>
                            All mathcalc Tools
                </strong></Typography>
                    <Typography variant='p' className='subtext'>
                        Make use of our collection of calculations tools to make calc simple
                </Typography>
                </Container>
                <div style={{ marginTop: '-40px' }}>
                    <CssBaseline />
                    <section style={{
                        width: '100%', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '0.5rem',
                        margin: 'auto',
                    }}>
                        <h1 style={{
                            display: 'block', fontSize: '26px', lineHeight: '1.2', fontWeight: '800', marginTop: '0px',
                            textTransform: 'capitalize', textAlign: 'center', marginBottom: '1rem',
                        }}>Most Popular Tools</h1>
                    </section>
                    <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>

                            {
                                arrUrls.map(value => {
                                    return (<li className="ak39fa-0 bhAFtM">
                                        <div className="ojwc4z-0 jkSeLq">
                                            <a className="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href={value.url}>
                                                {value.urlname}</a>
                                            <div className="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                                <Compress />
                                            </div>
                                            <div className="ojwc4z-1 jgylRt">
                                                <div className="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                                    <Forward />
                                                </div></div><p className="ojwc4z-5 jZEeUz">
                                                {value.desc}
                                            </p>
                                        </div>
                                    </li>)
                                })
                            }

                        </div>
                    </Container>
                </div >

            </>
        </React.Fragment >
    );
}
