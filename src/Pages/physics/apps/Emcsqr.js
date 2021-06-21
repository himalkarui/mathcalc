import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Helmet from 'react-helmet';
import SubNavBar from '../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    divcalc: {
        borderRadius: '12px',
        padding: '1em',
        color: '#314259'
    },
    formelems: {
        display: 'grid',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%'
        },
    },
    calcHeader: {
        fontFamily: 'system-ui',
        fontStyle: 'normal',
        fontSize: '22px',
        lineHeight: '39px',
        color: '#1e314f',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: '600'
    },
    row: {
        margin: '10px'
    },
    resultDiv: {
        padding: '20px 0',
        marginBottom: '10px',
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '34px',
        color: '#314259',
        '& > span': {
            marginLeft: '8px',
            color: '#1678fb'
        },
    }
}));

export default function Emcsqr() {
    const [state, setState] = React.useState({
        energy: '0',
        mass: '0',
        speedoflight: '299792458',
    })

    const fnEnergy = (e) => {
        if (e.target.value.length > 35) {
            return
        } else if (isNaN(e.target.value)) {
            return;
        }
        setState({
            ...state, energy: e.target.value,
            mass: (parseFloat(e.target.value === '' ? '0' : e.target.value) / Math.pow(state.speedoflight, 2)).toString()
        })
    }
    const fnMass = (e) => {
        if (e.target.value.length > 35) {
            return
        } else if (isNaN(e.target.value)) {
            return;
        }
        setState({
            ...state, mass: e.target.value,
            energy: (parseFloat(e.target.value === '' ? '0' : e.target.value) * Math.pow(state.speedoflight, 2)).toFixed(3),
        })
    }

    React.useEffect(() => {
        setState({
            ...state,
            energy: parseFloat(state.mass) * Math.pow(state.speedoflight, 2),
            mass: state.energy / Math.pow(state.speedoflight, 2)
        })
        // eslint-disable-next-line
    }, []);


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>E=MC^2- Einstein's Energy Mass Equvalance calculator</title>
                <meta name="keywords" content="Mathcalc, online energy mass calculator, free calculator, einstein's equation" />
                <meta name="description" content="In physics, mass–energy equivalence is the relationship between mass and energy in a system's rest frame" />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <div className={classes.row}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item lg={8} md={8} sm={12}>
                            <SubNavBar
                                pageTitle="Energy Mass Calculator"
                                links={[{
                                    url: "/physics/",
                                    urlName: "Physics"
                                }]}
                            />
                            <section className="hero" data-v-23847e07>
                                <div style={{ padding: '2rem 0.5rem' }}>
                                    <div className="container">
                                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                            ENERGY MASS CALCULATOR</h1>
                                        <p className="  has-text-grey">
                                            To calculate the energy and mass of the element    </p>
                                    </div>
                                </div>
                            </section>
                            <Card raised elevation={1} className="box" >
                                <h2 className={'title is-5'}>Calculate Energy mass (E=MC <sup>2</sup>)</h2>
                                <Typography paragraph>
                                    In physics, mass–energy equivalence is the relationship between mass and energy in a system's rest frame,
                                    where the two values differ only by a constant and the units of measurement.
                                    <br />
                                    <br />
                                        E = mc<sup>2</sup>—In SI units, the energy E is measured in Joules, the mass m is measured in kilograms, and the speed of light is measured in meters per second.
                                    </Typography>
                                <div className={classes.divcalc}>
                                    <div className={classes.formelems} noValidate autoComplete="off">
                                        <TextField id="mass" label="Mass (Kg)" variant="outlined"
                                            value={state.mass}
                                            onChange={fnMass}
                                            type={'number'}
                                        /><br />
                                        <TextField id="energy" label="Energy (J)" variant="outlined"
                                            value={state.energy}
                                            onChange={fnEnergy}
                                            type={'number'}
                                        /><br />
                                        <TextField id="sppedoflight" label="Speed of Light(M/S)" variant="outlined"
                                            value={state.speedoflight}
                                            disabled
                                            type={'number'}
                                        /><br />
                                    </div>
                                </div>
                            </Card>
                            <br />
                            <Card elevation={1} raised className="box">
                                <h2 className="title is-5">
                                    Einstein's theory of Special Relativity
                                </h2>
                                <figure className="image">
                                    <img src="https://media.istockphoto.com/photos/mathematical-formula-emc2-squared-written-on-a-blue-relatively-dirty-picture-id1137259438?k=6&m=1137259438&s=612x612&w=0&h=URVQNWP7V7auLHkKiMRPTs6WBNyUKK7q55NkI368_Yc="
                                        alt="emc2" />
                                </figure>
                                <br />
                                <p>
                                    The theory of special relativity explains how space and time are linked for objects that are moving at a consistent speed in a straight line. One of its most famous aspects concerns objects moving at the speed of light.
                                    <br /> <br />
                                    Simply put, as an object approaches the speed of light, its mass becomes infinite and it is unable to go any faster than light travels. This cosmic speed limit has been a subject of much discussion in physics, and even in science fiction, as people think about how to travel across vast distances.
                                    <br /> <br />
                                </p><p>    The theory of special relativity was developed by Albert Einstein in 1905, and it forms part of the basis of modern physics. After finishing his work in special relativity, Einstein spent a decade pondering what would happen if one introduced acceleration. This formed the basis of his general relativity, published in 1915.
                                </p>
                                <br />
                                <h2 className="title is-5"> History</h2>
                                <p>
                                    Before Einstein, astronomers (for the most part) understood the universe in terms of three laws of motion presented by Isaac Newton in 1686. These three laws are:
                                <br />
                                    <br />
                                    (1) Objects in motion (or at rest) remain in motion (or at rest) unless an external force imposes change.
                                    <br />
                                    <br />
                                    (2) Force is equal to the change in momentum per change of time. For a constant mass, force equals mass times acceleration.
                                    <br />
                                    <br />
                                    (3) For every action, there is an equal and opposite reaction.
                                    <br />
                                    <br />
                                    But there were cracks in the theory for decades before Einstein's arrival on the scene, according to Encyclopedia Britannica. In 1865, Scottish physicist James Clerk Maxwell demonstrated that light is a wave with both electrical and magnetic components, and established the speed of light (186,000 miles per second). Scientists supposed that the light had to be transmitted through some medium, which they called the ether. (We now know that no transmission medium is required, and that light in space moves in a vacuum.)
                                    <br />
                                    <br />
                                    Twenty years later, an unexpected result threw this into question. Physicist A.A. Michelson and chemist Edward Morley (both Americans at the time) calculated how Earth's motion through this "ether" affected how the speed of light is measured, and found that the speed of light is the same no matter what Earth's motion is. This led to further musings on light's behavior — and its incongruence with classical mechanics — by Austrian physicist Ernst Mach and French mathematician Henri Poincare.
                                    <br />
                                    <br />
                                    Einstein began thinking of light's behavior when he was just 16 years old, in 1895. He did a thought experiment, the encyclopedia said, where he rode on one light wave and looked at another light wave moving parallel to him.
                                    <br />
                                    <br />
                                    Classical physics should say that the light wave Einstein was looking at would have a relative speed of zero, but this contradicted Maxwell's equations that showed light always has the same speed: 186,000 miles a second. Another problem with relative speeds is they would show that the laws of electromagnetism change depending on your vantage point, which contradicted classical physics as well (which said the laws of physics were the same for everyone.)
                                    <br />
                                    <br />
                                    This led to Einstein's eventual musings on the theory of special relativity, which he broke down into the everyday example of a person standing beside a moving train, comparing observations with a person inside the train. He imagined the train being at a point in the track equally between two trees. If a bolt of lightning hit both trees at the same time, due to the motion of the train, the person on the train would see the bolt hit one tree before the other tree. But the person beside the track would see simultaneous strikes.
                                    <br />
                                    <br />
                                    "Einstein concluded that simultaneity is relative; events that are simultaneous for one observer may not be for another," the encyclopedia stated. "This led him to the counterintuitive idea that time flows differently according to the state of motion, and to the conclusion that distance is also relative."
                                    <br />
                                    <br />
                                    <h2 className="title is-5">    Famous equation</h2>
                                    Einstein's work led to some startling results, which today still seem counterintuitive at first glance even though his physics is usually introduced at the high school level.
                                    <br />
                                    <br />
                                     One of the most famous equations in mathematics comes from special relativity. The equation — E = mc2 — means "energy equals mass times the speed of light squared."
                                    It shows that energy (E) and mass (m) are interchangeable; they are different forms of the same thing. If mass is somehow totally converted into energy, it also shows how much energy would reside inside that mass: quite a lot. (This equation is one of the demonstrations for why an atomic bomb is so powerful, once its mass is converted to an explosion.)
                                    <br />
                                    <br />
                                    This equation also shows that mass increases with speed, which effectively puts a speed limit on how fast things can move in the universe. Simply put, the speed of light (c) is the fastest velocity at which an object can travel in a vacuum. As an object moves, its mass also increases. Near the speed of light, the mass is so high that it reaches infinity, and would require infinite energy to move it, thus capping how fast an object can move. The only reason light moves at the speed it does is because photons, the quantum particles that make up light, have a mass of zero.
                                    <br />
                                    <br />
                                    A special situation in the universe of the small, called "quantum entanglement," is confusing because it seems to involve quantum particles interacting with each other at speeds faster than the speed of light. Specifically, measuring the property of one particle can instantly tell you the property of another particle, no matter how far away they are. Much has been written about this phenomenon, which is still not fully explained in terms of Einstein's conclusions.
                                    <br />
                                    <br />
                                    Another strange conclusion of Einstein's work comes from the realization that time moves relative to the observer. An object in motion experiences time dilation, meaning that time moves more slowly when one is moving, than when one is standing still. Therefore, a person moving ages more slowly than a person at rest. So yes, when astronaut Scott Kelly spent nearly a year aboard the International Space Station in 2015-16, his twin astronaut brother Mark Kelly aged a little faster than Scott.
                                    <br />
                                    <br />
                                    This becomes extremely apparent at speeds approaching the speed of light. Imagine a 15-year-old traveling at 99.5 percent the speed of light for five years (from the astronaut's perspective). When the 15-year-old gets back to Earth, according to NASA, he would be only 20 years old. His classmates, however, would be 65 years old.
                                    <br />
                                    <br />
                                    While this time dilation sounds very theoretical, it does have practical applications as well. If you have a Global Positioning Satellite (GPS) receiver in your car, the receiver attempts to find signals from at least three satellites to coordinate your position. The GPS satellites send out timed radio signals that the receiver listens to, triangulating (or more properly speaking, trilaterating) its position based on the travel time of the signals. The challenge is, the atomic clocks on the GPS are moving and would therefore run faster than atomic clocks on Earth, creating timing issues. So, engineers need to make the clocks on a GPS tick slower, according to Richard Pogge, an astronomer at Ohio State University.
                                    <br />
                                    <br />
                                    The clocks in space tick faster, according to Physics Central, because the GPS satellites are above Earth and experience weaker gravity. So even though the GPS satellites are moving and experience a seven-microsecond slowing every day because of their movement, the result of the weaker gravity causes the clocks to tick about 45 microseconds faster than a ground-based clock. Adding the two together results in the GPS satellite clock ticking faster than a ground-based clock, by about 38 microseconds daily.
                                    <br />
                                    <br />

                                    <h2 className="title is-5">Special relativity and quantum mechanics</h2>
                                    As our knowledge of physics has advanced, scientists have run into more counterintuitive situations. One is trying to reconcile general relativity — which describes well what's going on with large objects — with quantum mechanics, which is best used for very small things (such as uranium atom decay). The two fields, which excellently describe their individual fields, are incompatible with one another — which frustrated Einstein and generations of scientists after him.
                                    <br />
                                    <br />
                                    "Relativity gives nonsensical answers when you try to scale it down to quantum size, eventually descending to infinite values in its description of gravity. Likewise, quantum mechanics runs into serious trouble when you blow it up to cosmic dimensions," an article in The Guardian pointed out in 2015.
                                    <br />
                                    <br />
                                    "Quantum fields carry a certain amount of energy, even in seemingly empty space, and the amount of energy gets bigger as the fields get bigger. According to Einstein, energy and mass are equivalent (that's the message of E=mc2), so piling up energy is exactly like piling up mass. Go big enough, and the amount of energy in the quantum fields becomes so great that it creates a black hole that causes the universe to fold in on itself. Oops."
                                    <br />
                                    <br />
                                    There are several ideas to overcome this ,but one approach is to imagine a quantum theory of gravity that would have a massless particle (called the graviton) to generate the force. But as physicist Dave Goldberg pointed out in io9 in 2013, there are problems with that. At the smallest scales, gravitons would have infinite energy density, creating an unimaginably powerful gravity field. More study will be required to see if this is possible.
                                </p>
                            </Card>
                        </Grid>
                        <Grid item lg={4} md={4} sm={false}></Grid>
                    </Grid>
                </div>
            </Container>
        </div >
    );
}
