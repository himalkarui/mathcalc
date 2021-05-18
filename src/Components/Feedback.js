import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/SendSharp';
import CustomSnakbar from './CustomSnakbar';
import Helmet from 'react-helmet';

const useStyles = makeStyles((theme) => ({
    inputField: {
        flexGrow: 1,
        width: '100%',
        maxWidth: '600px',
        margin: '0.5rem',
        backgroundColor: 'white',
        border: 'none',
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

            fetch("https://apimathcalc.herokuapp.com/api/v1/feedback/create", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            setSnakOpen(!snakOpen);
            setSnakMessage("Thanks for your feedback");
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
        <div data-server-rendered="true" id="app" class="layout" data-v-23847e07>
            <Helmet>
                <title>Contact Us, Suggest a new calculator or  tool | mathcalc</title>
                <meta name="keywords" content="Mathcalc- the one web app for doing all kind of Mathamatical calculations" />
                <meta name="description" content="Use Mathcalc interest calculator to calculate simple and compound interest. Simply, enter the details of the principal amount, interest rate, period, and compounding frequency to know the interest earned." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <section class="hero" data-v-677d599e>
                <div class="hero-body">
                    <h1 class="subtitle is-spaced is-uppercase has-text-weight-bold">Contact Us
          </h1>
                    <div class="container">
                        <div class="columns">

                            <div className="column is-6">
                                <CustomSnakbar
                                    open={snakOpen}
                                    msg={snakMessage}
                                    handleClose={handlesnackClose}
                                />
                                <form>
                                    <TextField className={classes.inputField}
                                        id="first_name" label={'First Name'}
                                        onChange={onInputChange}
                                        value={state.first_name}
                                        placeholder={'First name'} required type={'text'} variant="outlined" />
                                    <br />
                                    <TextField className={classes.inputField}
                                        onChange={onInputChange}
                                        value={state.last_name}
                                        id="last_name" label={'Last Name'} placeholder={'Last name'}
                                        type={'text'} variant="outlined" />
                                    <br />
                                    <TextField className={classes.inputField}
                                        onChange={onInputChange}
                                        value={state.email_id}
                                        id="email_id" label={'Email'} placeholder={'Email'}
                                        required type={'text'} variant="outlined" />
                                    <br />
                                    <TextField className={classes.inputField}
                                        onChange={onInputChange}
                                        value={state.comments}
                                        id="comments" multiline rows={6} required
                                        variant={"outlined"}
                                        aria-label="Have feedback? We’d love to hear it, but please don’t share sensitive information. Have questions? Try help or support." placeholder={'Have feedback? We’d love to hear it, but please don’t share sensitive information. Have questions? Try help or support.'} /><br />
                                    <br />
                                    <Button style={{
                                        width: '100%',
                                        height: '42px',
                                        marginLeft: '9px',
                                        letterSpacing: '4px'
                                    }} className="button is-info" onClick={handleSendClose} color="primary"
                                    >
                                        Send message &nbsp; {<Send />}
                                    </Button>
                                </form>
                            </div >

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
