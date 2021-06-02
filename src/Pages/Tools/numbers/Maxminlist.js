import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Card, Container, Typography
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
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
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function Maxminlist() {
    const [state, setState] = React.useState({
        originalText: '1,2',
        minimum: '',
        maximum: ''
    })

    const onClickCalculate = () => {
        // SetBackDropopen(true);

        if (state.originalText.length > 0) {
            let resulttext = state.originalText;
            let arrOriginalArray = resulttext.trim().trimEnd(',').split(',');
            let newArray = [];

            for (let i = 0; i < arrOriginalArray.length; ++i) {
                if (arrOriginalArray[i].toString() !== '') {
                    newArray.push(arrOriginalArray[i]);
                }
            }

            //sorted result array store in same variable
            newArray.sort(function (a, b) { return a - b });

            setState({
                ...state,
                minimum: newArray[0].toString(),
                maximum: newArray[newArray.length - 1].toString(),
            })


            //blink the result
            let resultDiv = document.getElementsByClassName('resultDiv')[0];
            resultDiv.className = 'resultDiv blink_me'
            setTimeout(() => {
                resultDiv.className = 'resultDiv';
            }, 1000);
        } else {
            setState({
                ...state,
                minimum: '',
                maximum: '',
            })
        }
    }

    React.useEffect(() => {
        onClickCalculate();
        // eslint-disable-next-line
    }, []);

    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Minimum and maximum of a list online | mathcalc</title>
                <meta name="keywords" content="numbers, minimum, maximum, float, decimal, integer, minimal, least, lowest, highest, littlest, merest, slightest, smallest, tiniest, maximal, top, biggest, greatest, largest, most, mostest, supreme" />
                <meta name="description" content="Find the highest and the lowest number from a list" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Minimum and maximum of a list"
                    links={[{
                        url: "/numbers/",
                        urlName: "Numbers"
                    }]}
                />
                <section className="hero">
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                MINIMUM AND MAXIMUM OF A LIST ONLINE</h1>
                            <p className="has-text-letter-spacing-wide has-text-grey">
                                Find the highest and the lowest number from a list</p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h4" className={'text-option'}>List of Numbers</Typography><br />
                                    <span><strong>Input The numbers with comma (,) seperation</strong></span><br /><br />
                                    <textarea className="input"
                                        id="originalText"
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '250px'
                                        }} value={state.originalText}
                                        onChange={onInputChange}
                                    ></textarea>
                                    <br />
                                </div>
                            </Card>
                        </div>
                        <div className="column is-6" >
                            <Card elevation={1} className="box" >
                                <div className="content" >
                                    <Typography variant="h4" className={'text-option'}>Result</Typography><br />
                                    <div className={'resultDiv blink_me'}>
                                        <span><strong>Minimum</strong> {'= ' + state.minimum}</span><br /><br />
                                        <span><strong>Maximum</strong> {'= ' + state.maximum}</span><br /><br />
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} className={"button is-success"}
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