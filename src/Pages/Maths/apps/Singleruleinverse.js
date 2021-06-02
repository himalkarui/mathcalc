import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Container, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings';
import Ruleofthree from '../../../Assets/images/ruleofthree.png';
import Helmet from 'react-helmet';
import SubNavBar from '../../../Components/SubNavBar';

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
}));

export default function Singlerulethreedir() {
    const [state, setState] = React.useState({
        result: '0',
        fielda: 0,
        fieldb: 0,
        fieldc: 0,
        decimalPlace: 5,
    });

    React.useEffect(() => {
        onClickCalculate();
        // eslint-disable-next-line 
    }, [state.fielda, state.fieldb, state.fieldc, state.decimalPlace]);

    const onClickCalculate = () => {

        let a = state.fielda === '' ? 0 : parseFloat(state.fielda);
        let b = state.fieldb === '' ? 0 : parseFloat(state.fieldb);
        let c = state.fieldc === '' ? 0 : parseFloat(state.fieldc);

        let res = ((a * b) / c).toFixed(state.decimalPlace);
        setState({
            ...state,
            result: res,
        });


        let resultDiv = document.getElementsByClassName('resultDiv')[0];
        resultDiv.className = 'resultDiv blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultDiv';
        }, 1000);
    }
    const onInputChange = (e) => {
        if (e.target.id === 'decimalPlace') {
            if (e.target.value < 100)
                setState({
                    ...state, [e.target.id]: e.target.value
                })
        } else
            setState({
                ...state, [e.target.id]: e.target.value
            })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Single rule of three inverse online calculator | mathcalc</title>
                <meta name="keywords" content="Online free single rule of three inverse online calculator, free online calculator, mathcalc, online calculator, free calculator" />
                <meta name="description" content="Single rule of three inverse online calculator. Single Inverse proportion is, where more requires less, and less requires more." />
                <meta name="author" content="mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="single rule of three inverse"
                    links={[{
                        url: "/maths/",
                        urlName: "Mathamatics"
                    }]}
                />
                <section className="hero" >
                    <div style={{ padding: '2rem 0.5rem', fontSize: '1rem', lineHeight: '27px' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                SINGLE RULE OF THREE INVERSE ONLINE
          </h1>
                            <p className="has-text-letter-spacing-wide has-text-grey">
                                Inverse proportion is, where more requires less, and less requires more.
          </p>
                        </div>
                    </div>
                </section>
                <Card elevation={1} className="box">
                    <h3 className="title is-5">  For example:
                          </h3>
                    <img src={Ruleofthree} alt="rule of three"></img>
                    <p> If 8 men can paint a wall in 4 days, how long will 6 men take to paint a similar wall?
                               &nbsp; <strong>Answer:</strong>  a: 8, b: 4, c: 6, x: 5.33333 (days)
                        </p><br />
                    <p>
                        If 6 days are required to move a sandpile using 10 trucks, how many trucks are required to move the same sandpile within 4 days?
                              &nbsp; <strong>Answer:</strong> a: 6, b: 10, c: 4, x: 15 (trucks)
                            </p>
                </Card>

                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h4" className={'text-option'}>Options</Typography>
                                    <br />
                                    <span> <strong>Value of a</strong></span><br />
                                    <TextField placeholder="0" className={classes.formelems} onChange={onInputChange} value={state.fielda} id="fielda" variant="outlined" type="number"></TextField><br />
                                    <span> <strong>Value of b</strong></span><br />
                                    <TextField placeholder="0" className={classes.formelems}
                                        onChange={onInputChange} value={state.fieldb} id="fieldb"
                                        variant="outlined" type="number"></TextField><br />
                                    <span><strong>value of c</strong></span><br />
                                    <TextField placeholder="0" className={classes.formelems} onChange={onInputChange} value={state.fieldc} id="fieldc" variant="outlined" type="number"></TextField><br />
                                    <span> <strong>Number of decimal places</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange}
                                        inputProps={{
                                            maxLength: 2,
                                        }}
                                        value={state.decimalPlace} id="decimalPlace" variant="outlined" type="number"></TextField>
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h4" className={'text-option'}>Result</Typography>
                                    <div className={'resultDiv'}>
                                        <span>{state.result}</span>
                                    </div>
                                    <br />
                                    <Button variant="contained" className={"button is-info"}
                                        startIcon={<SettingIcon />}
                                        onClick={onClickCalculate}
                                    >Calculate</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <br />
            </Container>
        </div >
    );
}
