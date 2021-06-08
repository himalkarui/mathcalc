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

        let res = ((c * b) / a).toFixed(state.decimalPlace);
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
                <title>Single rule of three direct online | mathcalc</title>
                <meta name="keywords" content="single rule of three direct online calculator, online calculator, free calculator" />
                <meta name="description" content="mathcalc, single rule rule of three direct online calculator, free online calculator, free calculator" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="single rule of three direct"
                    links={[{
                        url: "/maths/",
                        urlName: "Mathematics"
                    }]}
                />
                <section className="hero" >
                    <div style={{ padding: '2rem 0.5rem', fontSize: '1rem', lineHeight: '27px' }}>
                        <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">SINGLE RULE OF THREE DIRECT ONLINE
          </h1>
                        <p className="has-text-letter-spacing-wide has-text-grey">
                            Find out x, in such proportion to c as b is to a.
          </p>
                    </div>
                </section>
                <Card elevation={1} className="box">
                    <h3 className="title is-5">  For example:
                          </h3>
                    <img src={Ruleofthree} alt="rule of three"></img>
                    <p>    If 4 kg of a product cost $36, how much would be the cost of 18 kg?
                               &nbsp; <strong>Answer:</strong> a: 4, b: 36, c: 18, x: 162 ($162)
                        </p><br />
                    <p>
                        If 2 liters of paint are required to paint 5 rooms, how many liters are required to paint 7 rooms?
                               &nbsp; <strong>Answer:</strong> a: 5, b: 2, c: 7, x: 2.8 (liters)
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
                                    <TextField placeholder="0" className={classes.formelems} onChange={onInputChange} value={state.fieldb} id="fieldb" variant="outlined" type="number"></TextField><br />
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
                    <br />
                </div>
            </Container>
        </div >
    );
}
