import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, ButtonGroup, Container, Card, } from '@material-ui/core';
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

export default function Hexadecimalconverter() {
    const [state, setState] = React.useState({
        result: '1',
        resultLabel: 'Hexadecimal to Decimal',
        labelInput: 'Hexadecimal',
        isBinarytodec: true,
        inputVal: '1',
    });

    const onChangeNumbersysisbin = () => {

        if (state.isBinarytodec) {
            setState({
                ...state,
                isBinarytodec: false,
                labelInput: 'Decimal',
                resultLabel: 'Decimal to Hexadecimal'
            });
        } else {
            setState({
                ...state,
                isBinarytodec: true,
                labelInput: 'Hexadecimal',
                resultLabel: 'Hexadecimal to Decimal'
            })
        }

    }

    const onClickCalculate = () => {
        if (state.isBinarytodec) {
            setState({
                ...state,
                result: state.inputVal + ' (Hexadecimal) =<strong> ' + parseInt('0x' + state.inputVal) + ' (Decimal)</strong>'
            });
        } else {
            setState({
                ...state,
                result: state.inputVal + ' (Decimal)  =<strong> ' + parseInt(state.inputVal).toString(16) + ' (Hexadecimal) </strong>'
            });
        }
        let resultDiv = document.getElementsByClassName('resultDiv')[0];
        resultDiv.className = 'resultDiv blink_me'
        setTimeout(() => {
            resultDiv.className = 'resultDiv';
        }, 1000);
    }

    React.useEffect(() => {
        onClickCalculate();
        // eslint-disable-next-line
    }, [state.inputVal, state.isBinarytodec]);


    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Online Hexadecimal Converter | mathcalc</title>
                <meta name="keywords" content="Mathcalc,hexadecimal to decimal , decimal to hexadecimal, hexadecimal convertion,decimal conversion" />
                <meta name="description" content="Hexadecimal to decimal conversion and vice versa" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Helmet>

            <Container maxWidth="xl">

                <SubNavBar
                    pageTitle="Hexadecimal converter"
                    links={[{
                        url: "/numbers/",
                        urlName: "Numbers"
                    }]}
                />
                <section className="hero" >
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                ONLINE HEXADECIMAL CONVERTER
                           </h1>
                            <p className="  has-text-grey">
                                Hexadecimal to decimal and decimal to hexadecimal conversion
                        </p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Options</Typography>
                                    <br />
                                    <span><strong>Type of Conversion</strong></span><br />
                                    <ButtonGroup style={{ margin: '10px 0px', display: 'flow-root' }}>
                                        <Button aria-label="Hexadecimal to Decimal"
                                            className={state.isBinarytodec ? "button is-success" : 'button'}
                                            onClick={onChangeNumbersysisbin}
                                        >
                                            Hexadecimal to Decimal
                                </Button>
                                        <Button aria-label="Decimal to Hexadecimal"
                                            className={!state.isBinarytodec ? "button is-success" : 'button'}
                                            onClick={onChangeNumbersysisbin}
                                        >
                                            Decimal to Hexadecimal
                                    </Button>
                                    </ButtonGroup><br />
                                    <span><strong> {state.labelInput}</strong></span><br />
                                    <TextField className={classes.formelems} onChange={onInputChange}
                                        value={state.inputVal} id="inputVal" variant="outlined" type="number"></TextField><br />
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" >
                            <Card elevation={1} className="box " >
                                <div className="content" >
                                    <Typography variant="h6" className={'text-option'}>Result</Typography>
                                    <div className={'resultDiv blink_me'}>
                                        <span className={'resPercentage'}>{state.resultLabel}</span><br />
                                        <span style={{ overflowWrap: 'break-word' }} dangerouslySetInnerHTML={{ __html: state.result }}></span>
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
