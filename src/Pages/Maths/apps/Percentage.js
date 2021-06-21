import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Select, MenuItem, Container, Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SettingIcon from '@material-ui/icons/Settings'
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

export default function Percentage() {
    const [state, setState] = React.useState({
        result: 'Some field is empty or wrong',
        fieldOne: '',
        fieldTwo: '',
        labelOne: 'Value of P (%)',
        lablelTwo: 'Value of N',
        option: 0,
        decimalPlace: 5,
    })

    React.useEffect(() => {
        onClickCalculate();
        // eslint-disable-next-line 
    }, [state.option]);

    const OnchangeOption = (e) => {
        switch (e.target.value) {
            case 0:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of P (%)',
                    lablelTwo: 'Value of N',
                    option: 0
                })
                break;
            case 1:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of P (%)',
                    lablelTwo: 'Value of N',
                    option: 1
                })
                break;
            case 2:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of N1',
                    lablelTwo: 'Value of N2',
                    option: 2
                })
                break;
            case 3:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of N1',
                    lablelTwo: 'Value of N2',
                    option: 3
                })
                break;
            case 4:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Old Value',
                    lablelTwo: 'New Value',
                    option: 4
                })
                break;
            case 5:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Old Value',
                    lablelTwo: 'New Value',
                    option: 5
                })
                break;
            case 6:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of N',
                    lablelTwo: 'Value of P (%)',
                    option: 6
                });
                break;
            case 7:
                setState({
                    ...state,
                    result: 'Some field is empty or wrong',
                    labelOne: 'Value of N',
                    lablelTwo: 'Value of P (%)',
                    option: 7
                })
                break;

            default:
                break;
        }
    }

    const onClickCalculate = () => {

        let resultDiv = document.getElementsByClassName('resultDiv')[0];
        resultDiv.className = 'resultDiv blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultDiv';
        }, 1000);

        let valOne = state.fieldOne === '' ? 0 : parseFloat(state.fieldOne);
        let valTwo = state.fieldTwo === '' ? 0 : parseFloat(state.fieldTwo);

        switch (state.option) {
            case 0:
                setState({
                    ...state,
                    result: valOne + ' % of ' + valTwo + ' is <span >' + (valOne * valTwo / 100).toFixed(state.decimalPlace) + '</span>'
                });
                break;
            case 1:
                setState({
                    ...state,
                    result: valOne + ' % of <span >' + ((valTwo * 100) / valOne).toFixed(state.decimalPlace) + '</span> is ' + valTwo
                });
                break;
            case 2:
                setState({
                    ...state,
                    result: '<span > ' + ((valTwo * 100) / valOne).toFixed(state.decimalPlace) + '</span> % of ' + valOne + ' is ' + valTwo
                });
                break;
            case 3:
                setState({
                    ...state,
                    result: valOne + ' / ' + valTwo + '<span > = ' + ((valOne * 100) / valTwo).toFixed(state.decimalPlace) + ' %</span>'
                });
                break;
            case 4:
                setState({
                    ...state,
                    result: valOne + ' increased by <span > ' + (((valTwo - valOne) / valOne) * 100).toFixed(state.decimalPlace) + ' % </span> is ' + valTwo
                });
                break;
            case 5:
                setState({
                    ...state,
                    result: valOne + ' decreased by <span > ' + (((valOne - valTwo) / valOne) * 100).toFixed(state.decimalPlace) + ' % </span> is ' + valTwo
                });
                break;
            case 6:
                setState({
                    ...state,
                    result: valOne + ' increased by ' + valTwo + ' % is <span > ' + (((valOne * valTwo) / 100) + valOne).toFixed(state.decimalPlace) + ' </span> '
                });
                break;
            case 7:
                setState({
                    ...state,
                    result: valOne + ' decreased by ' + valTwo + ' % is <span >' + (valOne - ((valOne * valTwo) / 100)).toFixed(state.decimalPlace) + ' </span> '
                });
                break;

            default:
                break;
        }
    }

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Percentage Calculator | mathcalc</title>
                <meta name="keywords" content="Online percentage calculator,free percentage calculator,free calculator, percentage,mathcalc" />
                <meta name="description" content="Online percentage calculator used the do the varoius percentage calculations" />
                <meta name="author" content="Mathcalc" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Percentage calculator"
                    links={[{
                        url: "/maths/",
                        urlName: "Mathematics"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">Online Percentage Calculator
          </h1>
                            <h1 className="  has-text-grey" style={{ lineHeight: '27px' }}>
                                Calculate the percentage of a number, or find a number given its percent, or find the percent given two numbers, or calculate the percentage increment or decrement
          </h1>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Options</Typography>
                                    <br /> <Select
                                        id="metrics-outlined"
                                        className={classes.formelems}
                                        style={{ width: '100%' }}
                                        onChange={OnchangeOption}
                                        value={state.option}
                                        variant={'outlined'}
                                        aria-label="Select"
                                    >
                                        <MenuItem value={0}>P % of N = ?</MenuItem>
                                        <MenuItem value={1}>P % of ? = N</MenuItem>
                                        <MenuItem value={2}>? % of N1 = N2</MenuItem>
                                        <MenuItem value={3}>N1 / N2 = ? % (Fraction to Percentage)</MenuItem>
                                        <MenuItem value={4}>Relative Increase</MenuItem>
                                        <MenuItem value={5}>Relative Decrease</MenuItem>
                                        <MenuItem value={6}>Increase N by P %</MenuItem>
                                        <MenuItem value={7}>Decrease N by P%</MenuItem>
                                    </Select><br />
                                    <span> <strong>  {state.labelOne}</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange} value={state.fieldOne} id="fieldOne" variant="outlined" type="number"></TextField><br />
                                    <span><strong> {state.lablelTwo}</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange} value={state.fieldTwo} id="fieldTwo" variant="outlined" type="number"></TextField><br />
                                    <span> <strong>Number of decimal places</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange} value={state.decimalPlace} id="decimalPlace" variant="outlined" type="number"></TextField>
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Result</Typography>
                                    <div className={'resultDiv'}>
                                        <span dangerouslySetInnerHTML={{ __html: state.result }}></span>
                                        <br />
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
