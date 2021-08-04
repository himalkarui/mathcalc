import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Card, Container, TextField, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/SendSharp';
import VerticalAds from './VerticalAds';
import CustomSnakbar from './CustomSnakbar';
import Helmet from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    inputField: {
        flexGrow: 1,
        width: '100%',
        maxWidth: '600px',
        margin: '0.5rem',
    },
}));

export default function Feedback() {

    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email_id: "",
        comments: ""
    })
    const classes = useStyles();
    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const handlesnackClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    const handleSendClose = () => {

        if (state.first_name === "") {
            setSnakOpen(true);
            setSnakMessage("Enter first name");
        } else if (state.email_id === "") {
            setSnakOpen(true);
            setSnakMessage("Enter email id");
        } else if (state.comments === "") {
            setSnakOpen(true);
            setSnakMessage("Enter comments");
        } else {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "first_name": state.first_name,
                "last_name": state.last_name,
                "email_id": state.email_id,
                "comments": state.comments
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            //Get-exchangecurrate
            fetch("https://apimathcalc.herokuapp.com/api/v1/feedback/create", requestOptions)
                .then(response => response.text())
                .then(result => {
                    setSnakOpen(true);
                    setSnakMessage("Thanks for your feedback");
                    setTimeout(() => {
                        setSnakOpen(false);
                        let a = document.createElement('a');
                        a.href = "/";
                        a.click();
                    }, [1000]);
                })
                .catch(error => {
                    setSnakOpen(true);
                    setSnakMessage("Thanks for your feedback");
                    setTimeout(() => {
                        setSnakOpen(false);
                        let a = document.createElement('a');
                        a.href = "/";
                        a.click();
                    }, [1000]);
                });
        }
    }

    const onInputChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
        setSnakOpen(false);
        setSnakMessage("");
    }

    React.useEffect(() => {

    }, []);

    return (
        <div data-server-rendered="true" id="app" className="layout" data-v-23847e07>
            <Helmet>
                <title>Contact Us, Suggest a new calculator or  tool | mathcalc</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathematical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <section className="hero">
                    <div className="hero-body" style={{ padding: '1.5rem 1rem !important' }}>
                        <div className="columns">
                            <div className="column is-6">
                                <Card elevation={1} className="box">
                                    <CardHeader style={{ padding: '0px 0px 0px 10px', fontWeight: 'bolder' }} avatar="Feedback" />
                                    <CustomSnakbar
                                        open={snakOpen}
                                        msg={snakMessage}
                                        handleClose={handlesnackClose}
                                    />
                                    <TextField className={classes.inputField}
                                        id="first_name" label={'First Name'}
                                        onChange={onInputChange}
                                        value={state.first_name}
                                        required type={'text'} variant="outlined" />
                                    <br />
                                    <TextField className={classes.inputField}
                                        onChange={onInputChange}
                                        value={state.last_name}
                                        id="last_name" label={'Last Name'}
                                        type={'text'} variant="outlined" />
                                    <br />
                                    <TextField className={classes.inputField}
                                        onChange={onInputChange}
                                        value={state.email_id}
                                        id="email_id" label={'Email'}
                                        required type={'text'} variant="outlined" />
                                    <br />
                                    <TextField className={classes.inputField}
                                        onChange={onInputChange}
                                        value={state.comments}
                                        id="comments" multiline rows={5} required
                                        variant={"outlined"}
                                        aria-label="Have feedback? We’d love to hear it, but please don’t share sensitive information. Have questions? Try help or support." placeholder={'Have feedback? We’d love to hear it, but please don’t share sensitive information. Have questions? Try help or support.'} /><br />
                                    <br />
                                    <Button
                                        variant="contained"
                                        style={{
                                            width: '100%',
                                            height: '42px',
                                            marginLeft: '9px',
                                            letterSpacing: '4px',
                                            textTransform: 'none'
                                        }} onClick={handleSendClose} color="primary"
                                    >
                                        Send message &nbsp; {<Send />}
                                    </Button>
                                </Card>
                            </div >
                            <div className="column is-6">
                                <VerticalAds />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
}
