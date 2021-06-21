import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Card, Container, Grid, Button, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import SettingsIcon from '@material-ui/icons/Settings';
import Helmet from 'react-helmet';
// import js , css and iamges
import '../../Assets/favicon/css/stylesfavicon.css';
import { checkSingle } from '@reacherhq/api';
import SubNavBar from '../../Components/SubNavBar';
import CustomSnakbar from '../../Components/CustomSnakbar';

const variants = ['h1', 'h3', 'body1', 'caption'];

function TypographyDemo(props) {
    const { loading = false } = props;

    return (
        <div>
            {variants.map((variant) => (
                <Typography component="div" key={variant} variant={variant}>
                    {loading ? <Skeleton /> : variant}
                </Typography>
            ))}
        </div>
    );
}

TypographyDemo.propTypes = {
    loading: PropTypes.bool,
};

export default function Emailvalidator(props) {

    const [emailResultShow, setemailResultShow] = useState(false);
    const [txtMail, setTxtMail] = useState('');
    const [emailResult, setEmailresult] = useState();
    const onClickCheckMail = (e) => {
        if (txtMail === "") {
            setSnakOpen(true);
            setSnakMessage("Enter email id")
        } else {
            setSnakOpen(false);
            emailResultShow(true);
            checkSingle(
                { to_email: txtMail },
            ).then((res) => {
                setEmailresult(res);
                setemailResultShow(true);
            });
        }
    }

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };


    return (
        <React.Fragment>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <title>Free Email validator | Verify Email Address Online</title>
                <meta charset="utf-8" />
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="description" content="Email Address validator is a Simple Free tool to check whether an email address exists or not with up to 98% Accuracy - Get 0% Bounce Rate" />
                <meta name="keywords" content="free email validator, email validation, free email validation, free email check, email test, email valid" />
            </Helmet>
            <Container maxWidth="xl">
                <Grid container direction="row">
                    <Grid item md={8} lg={8} sm={12}>
                        <SubNavBar
                            pageTitle="EMAIL ADDRESS VALIDATOR"
                            links={[{
                                url: "/tools/",
                                urlName: "Tools"
                            }]}
                        />
                        <div data-server-rendered="true" className="layout" data-v-14591542>
                            <div className="container-fluid">
                                <section className="hero" data-v-23847e07>
                                    <div style={{ padding: '2rem 0.5rem' }}>
                                        <div className="container">
                                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                                Free Email Address Validator</h1>
                                            <p className="  has-text-grey">
                                                With Up to 98% Accuracy, Email Address validator is a Simple Free tool to check
                                                whether an email address exists or not.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <Card elevation={1} className="box">
                                    <div className="column">
                                        <div className="columns is-6">
                                            <div className="container">
                                                <h5 className="title is-5">Single Email Validation</h5>
                                                <p className="is-6">
                                                    Enter the target email in the box, and Click Check, This Service is Free &amp; Unlimited.
                                                </p>
                                                <br />
                                                <div className="flex-column"
                                                    style={{
                                                        justifyItems: 'center',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        backgroundColor: '#00bcd4',
                                                        padding: '20px',
                                                        borderRadius: '3px'
                                                    }}

                                                >
                                                    <label style={{ color: 'white', fontWeight: 'bolder' }}>Enter Email to Validate</label>
                                                    <input
                                                        style={{
                                                            margin: '2rem 50px',
                                                            maxWidth: '80%',
                                                            justifyContent: 'center'
                                                        }}
                                                        name="txtEmail" onChange={(e) => { setTxtMail(e.target.value) }} value={txtMail} type="text" id="txtEmail" className="input" placeholder="yourmail@domain" />
                                                    <div style={{ margin: '1rem 0px' }}>
                                                        <Button onClick={onClickCheckMail} id="btncheck"
                                                            variant="contained"
                                                            startIcon={<SettingsIcon />}
                                                            color="secondary"
                                                        >Check</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="columns is-6">
                                            {emailResultShow ?
                                                <div className="card box" style={{ backgroundColor: '#4caf50b8', color: 'white' }}>
                                                    <div className="card-content">
                                                        <h4 className="title is-4" style={{ color: 'whitesmoke' }}>Validation Results</h4>
                                                        <p className="title is-5" style={{ color: 'whitesmoke' }}>
                                                            Email Validation Results will be shown here.
                                                        </p>
                                                        <div id="resultImage">
                                                            {
                                                                emailResult ?
                                                                    <>
                                                                        <p> <strong> Is Reachable : </strong>{emailResult.is_reachable}</p>
                                                                        <p><strong> Is Disposable:</strong>{emailResult.misc.is_disposable ? ' True' : ' False'}</p>
                                                                        <p><strong> Accept Mail:</strong> {emailResult.mx.accepts_mail ? ' True' : ' False'}</p>
                                                                        <br />
                                                                        <p><strong> Records:</strong>{
                                                                            emailResult.mx.records && emailResult.mx.records.length > 0 ?
                                                                                <>
                                                                                    {
                                                                                        emailResult.mx.records.map((val, i) => {
                                                                                            return (
                                                                                                <p key={i}>
                                                                                                    {(i + 1) + ". " + val}
                                                                                                </p>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </> : <></>
                                                                        }
                                                                        </p>
                                                                        <br />
                                                                        <h4 className="title is-6"> SMTP</h4>
                                                                        <p><strong> Has Full Inbox:</strong>{emailResult.smtp.has_full_inbox ? 'True' : 'False'}</p>
                                                                        <p><strong>Can Connect SMTP:</strong>{emailResult.smtp.can_connect_smtp ? 'True' : 'False'}</p>
                                                                        <p><strong>  Is Catch All:</strong> {emailResult.smtp.is_catch_all ? 'True' : 'False'}</p>
                                                                        <p><strong> Is Deliverable: </strong> {emailResult.smtp.is_deliverable ? 'True' : 'False'}</p>
                                                                        <p><strong> Is Disabled:</strong> {emailResult.smtp.is_disabled ? 'True' : 'False'}</p>
                                                                        <br />
                                                                        <h4 className="title is-6">Syntax</h4>
                                                                        <p><strong> Mail Address: </strong>{emailResult.syntax.address}</p>
                                                                        <p> <strong>Domain :</strong>{emailResult.syntax.domain}</p>
                                                                        <p> <strong>Is valid syntax:</strong>{emailResult.syntax.is_valid_syntax ? 'True' : 'False'}</p>
                                                                        <p> <strong>User Name:</strong> {emailResult.syntax.username}</p>
                                                                    </> : <>
                                                                        <TypographyDemo loading />
                                                                    </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                : <></>
                                            }
                                        </div>
                                    </div>
                                </Card>
                                <br />
                                <Card elevation={1} className="box">
                                    <div className="col-lg-12">
                                        <h3 className="title is-5">What is Email Validation?</h3>
                                        <p>
                                            Simply, Email Validation or Verification (List Cleaning) is a process to check if the email address exists or not, is it a real email address or not? and this is very important in email marketing.
                                        </p>
                                        <p>So Email Address Validator is the best tool for verifying an email address. It's free and quite easy to use. Just enter the email address and hit check button. Then it tells you whether the email address is real or not. It extracts the MX records from the email address and connect to mail server to make sure the mailbox really exist for that user/address. It Validates Almost all Domains with up to 98% Accuracy</p>
                                        <br />
                                        <h4 className="title is-5">Why is Email Verification Important?</h4>
                                        <p>
                                            Most Websites have their optin-forms which visitors need to fill in. During this fill up processes, users may, intentionally and evidently, enter wrong email addresses. By accepting them, your email list will be filled up with inaccurate and undeliverable email addresses.
                                            If you send email to such addresses, Your Bounce Rate will be higher, and this will negatively affect your mail server reputation. A poor reputation of your mail server IP address will result in blacklisting by popular email services.
                                            By verifying email lists and checking to deliver reports, you improve a lot of options:
                                            Open Rates,
                                            Bounce Rates,
                                            Click-through Rates, and
                                            Conversion Rates.
                                        </p>
                                        <br />
                                        <h4 className="title is-5">What is a Catch-all or Accept-all Email?</h4>
                                        <p>
                                            This is also known as an “catch-all”. This is a domain-wide setting where all emails on this domain will be reported as a catch-all. There is no definitive way to determine whether this email is valid or invalid.
                                            A catch-all address is commonly used in small businesses to ensure a company receives any email that has been sent to them, regardless of typos. Additionally, these are also found in larger government, medical and educational organizations. Oftentimes these are infact valid emails. However some organizations may utilize this setting as a security feature to prevent unsolicited emails.
                                            Commonly the server will accept all mail and then bounce it back to the sender, which in turn hurts the sender’s IP Reputation.
                                            <br />
                                            <br />
                                            <b> SAFE</b> – If you have a dedicated email server with your own IPs, catch all emails may be safe for sending dependent on the overall health of your list.
                                            <br />
                                            <b>DON’T SEND </b>– If you use a third party email provider that requires a bounce rate below 4%, these emails are not safe for sending.
                                        </p>
                                        <br />
                                        <br />
                                        <h4 className="title is-5">What is a Spam-trap Email?</h4>
                                        <p>
                                            A spam-trap is a honeypot used to collect spam.<br />
                                            Spam-traps are usually e-mail addresses that are created not for communication, but rather to lure spam. In order to prevent legitimate email from being invited, the e-mail address will typically only be published in a location hidden from view such that an automated e-mail address harvester (used by spammers) can find the email address, but no sender would be encouraged to send messages to the email address for any legitimate purpose. Since no e-mail is solicited by the owner of this spam-trap e-mail address, any e-mail messages sent to this address are immediately considered unsolicited.
                                            <br />The term is a compound of the words “spam” and “trap”, because a spam analyst will lay out spam-traps to catch spam in the same way that a fur trapper lays out traps to catch wild animals. The provenance of this term is unknown, but several competing anti-spam organizations claim trademark over it.
                                            <br />
                                            <br />
                                            <b>DON’T SEND </b> These emails will Destroy your sending reputation.
                                        </p>
                                        <br />
                                        <br />
                                        <h4 className="title is-5">What is a Disposable Email?</h4>
                                        <p>
                                            Disposable emails are temporary accounts used to avoid using a real personal account during a sign-up process. Common providers of disposable emails include Mailinator, Guerilla Mail, AirMail, and 10 Minute Mail.
                                            <br />
                                            <br />
                                            <b>DON’T SEND </b> These emails are fake or temporary emails and are not safe for sending.
                                        </p>
                                    </div>
                                </Card>
                                <br />
                                <Card elevation={1} className="box">
                                    <div className="col-lg-12">
                                        <div className="page-title-box">
                                            <h5 className="title is-3">Important FAQs</h5>
                                        </div>
                                        <br />
                                        <h4 className="title is-6">  What Domains I can Validate with this Service?
                                        </h4>
                                        <p>                    Simply, Any Domain!
                                        </p>
                                        <br />
                                        <h4 className="title is-6">   How Many Emails I can Validate daily?
                                        </h4>
                                        <p>
                                            This Service is 100% Free and you can validate unlimited emails daily.
                                        </p>
                                        <br />
                                        <h4 className="title is-6">   What is the accuracy for this tool?
                                        </h4>
                                        <p>  Our service is ~98% accurate, offering you the best standards for measuring verification.
                                        </p>
                                        <br />
                                        <h4 className="title is-6">  I'm concerned about the privacy of my data?
                                        </h4>
                                        <p>Mathcalc is a service that operates according to General Data Protection Regulation (GDPR) standards.</p>
                                        <p>
                                            We do not process or store email addresses for any purpose other than validation.
                                        </p>
                                        <h4 className="title is-6">  I sent an email to a Valid Email and bounced! how is this?
                                        </h4>
                                        <p>Mathcalc email validation only determines if the recipient address exists. It does not test the anti-spam policies employed by the receiving mail server, as no mail is actually sent.
                                            Make sure that your mail server's DNS data contains valid MX, PTR, DKIM, and SPF records. You should also check that the sender’s address exists and that mail to this address is accepted by your server.
                                            Additionally, your mail server needs to have a good reputation in order to send email reliably. Cleaning your email lists before you start a new email marketing campaign helps a lot.
                                        </p>
                                        <br />
                                        <h4 className="title is-6">  How does the email verification process works?
                                        </h4>
                                        <p>   Our algorithms have been specially designed to check any email and process it as follows:
                                        </p>
                                        <ul>
                                            <li>Syntax Validation</li>
                                            <li>Domain Verification</li>
                                            <li>MX Validation</li>
                                            <li>Mailbox Existence</li>
                                        </ul>
                                        <p>We make sure to give you the best and the most accurate result</p>
                                        <br />
                                        <h4 className="title is-6">
                                            Does this service send an email while validating?
                                        </h4>
                                        <p>         No, it doesn't. This service employs DNS and SMTP protocol operations to perform email address validations,
                                            and always avoids sending any email messages to external mail exchangers for delivery.
                                        </p>

                                    </div>
                                </Card>
                                <br />
                            </div >
                        </div>
                    </Grid >
                    <Grid item md={4} lg={4} sm={12}></Grid>
                </Grid >
            </Container>
        </React.Fragment >
    );
}