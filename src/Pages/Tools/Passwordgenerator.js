import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import SubNavBar from '../../Components/SubNavBar';
import { Card, Container, Grid, Checkbox, Slider, FormGroup, FormControlLabel, TextField, IconButton, Typography, LinearProgress, Tooltip, Box } from '@material-ui/core';
import NewIcon from '@material-ui/icons/Sync';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
import { makeStyles, withStyles } from '@material-ui/styles';
import CustomSnakbar from '../../Components/CustomSnakbar';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import VerticalAds from '../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    ulElem: {
        listStyle: 'disc !important',
        padding: '1.5rem',
        borderBottom: 'solid',
        borderTop: 'solid',
        "& li": {
            listStyleType: 'disc'
        }
    },
    inputPass: {
        width: '100%',
        padding: '0px 10px',
        border: 'none',
        '& > *': {
            fontSize: 'xx-large',
        }
    }, root: {
        width: 250,
    },
    svg: {
        fill: 'blue !important',
        width: '30px',
        height: '30px',
    },
    input: {
        width: 52,
    },
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 12,
        borderRadius: 6,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: 'lightgreen',
    },
}))(LinearProgress);

export default function Passwordgenerator(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(14);
    const [progress, setProgress] = React.useState(100);

    const [state, setState] = React.useState({
        isUppercase: true,
        isLowercase: true,
        isNumber: true,
        isSpecialChars: true,
        suffix: "",
        prefix: "",
        resultPassword: ""
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.checked
        })
    }
    React.useEffect(() => {
        generatePassword();
        // eslint-disable-next-line
    }, [value, state.prefix, state.suffix]);

    function generatePassword() {

        let bar = document.getElementsByClassName('MuiLinearProgress-bar')[0];

        if (value < 2) {
            bar.style.backgroundColor = "#f44336";
            setProgress(1);
        } else if (value < 6) {
            bar.style.backgroundColor = "#ff5722";
            setProgress(25);
        } else if (value < 9) {
            bar.style.backgroundColor = "#ffc107";
            setProgress(50);
        } else if (value < 13) {
            bar.style.backgroundColor = "#c6ff00";
            setProgress(75);
        } else {
            bar.style.backgroundColor = "lightgreen";
            setProgress(100);
        }

        let newpassword = "";
        let length = value - (state.prefix.length + state.suffix.length);
        if (state.isLowercase || state.isUppercase || state.isSpecialChars || state.isNumber) {
            let charsLower = "abcdefghijklmnopqrstuvwxyz";
            let charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let charsNumbers = "0123456789";
            let charsSpecial = "!@#$%^&*()?[]{}+=-_";
            while (newpassword.length <= length && length > 0 && length <= 50) {
                for (let i = 0; i < length; i++) {
                    let ranno = Math.floor(Math.random() * 28);
                    let ranchoose = Math.floor(Math.random() * 5);
                    if (state.isLowercase && ranchoose === 1) {
                        newpassword += charsLower.charAt(ranno);
                    }
                    if (state.isUppercase && ranchoose === 2) {
                        newpassword += charsUpper.charAt(ranno);
                    }
                    if (state.isNumber && ranchoose === 3) {
                        newpassword += charsNumbers.charAt(ranno);
                    }
                    if (state.isSpecialChars && ranchoose === 4) {
                        newpassword += charsSpecial.charAt(ranno);
                    }
                }
            }
        } else {
            setSnakOpen(true);
            setSnakMessage("Select atleast one character set!");

            setTimeout(() => {
                setSnakOpen(false);
            }, 1500);
        }
        newpassword = state.prefix + newpassword + state.suffix
        setState({
            ...state,
            resultPassword: newpassword.slice(0, value),
        });
    }

    const fncopytext = (e) => {
        /* Get the text field */
        setSnakOpen(true);
        setSnakMessage("Copied !");
        let copyInput = document.getElementById('resultPassword');
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 50); /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand("copy");
        setTimeout(() => {
            setSnakOpen(false);
        }, 1600);
    }

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (e) => {
        let val = e.target.value === '' ? '' : Number(e.target.value);

        if (val <= 50) {
            setValue(val);
        }
        generatePassword();
    };

    const handleBlur = (e) => {
        if (value < 0) {
            setValue(0);
        } else if (value > 50) {
            setValue(50);
        }
    };

    useEffect(() => {
        generatePassword();
        // eslint-disable-next-line
    }, [value]);


    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };

    return (
        <Container maxWidth="xl">
            <Helmet>
                <title>Random password generator online</title>
                <meta name="keywords" content="Password Generator, Online Password Generator, Random Password Generator, Secure Password Generator, Create Password, Generate Password" />
                <meta name="description" content="Mathcal Free Online Image Editor tool create your own images resize crop avatars and images. Photo tool for your favorite pictures. Edit an image here fast and easy online." />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <div className="container">
                <SubNavBar
                    pageTitle="Random password generator"
                    links={[{
                        url: "/tools/",
                        urlName: "Tools"
                    }]}
                    txtTitle="Strong Password Generator to create secure passwords that are impossible to crack on your device without sending them across the Internet, and learn over tricks to keep your passwords, accounts and documents safe."
                />
                <br />
                <Grid container spacing={1}>
                    <Grid item sm={12} md={8} lg={8} >
                        <h1 style={{ display: 'flex' }} className="subtitle has-text-weight-bold">
                            Secure password generator online
                        </h1>
                        <Card elevation={1} className={'box ' + classes.divCard}>
                            <Grid container style={{ padding: '15px 0px' }}>
                                <Grid item sm={9} md={9} lg={9}>
                                    <TextField variant="outlined"
                                        placeholder="your password"
                                        value={state.resultPassword}
                                        id="resultPassword"
                                        onChange={(e) => {
                                            setState({
                                                ...state,
                                                resultPassword: e.target.value
                                            })
                                        }}
                                        className={classes.inputPass}
                                    />
                                </Grid>
                                <Grid item sm={3} md={3} lg={3} style={{ display: 'flex', alignItems: 'center' }}>
                                    <Box p={2}>
                                        <Tooltip title="Get new password">
                                            <IconButton
                                                onClick={generatePassword}
                                            >
                                                <NewIcon className={classes.svg} size="small"></NewIcon>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Copy your password">
                                            <IconButton
                                                onClick={fncopytext}
                                            >
                                                <CopyIcon className={classes.svg} size="small" />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Grid>
                            </Grid>
                            <div>
                                <BorderLinearProgress variant="determinate" value={progress} />
                            </div>
                        </Card>
                        <br />
                        <Card elevation={1} id="divChart" className={'box '}>
                            <legend><h3 className="title is-4">Customize your password</h3>
                                <h4 style={{ display: 'flex', alignItems: 'center' }}>
                                    <InfoIcon /> &nbsp; We don't send your password over network
                                </h4>
                            </legend>
                            <hr />
                            <Grid container justify="space-evenly">
                                <Grid item xs={12} sm={6} md={6}>
                                    <div className={classes.root}>
                                        <Typography id="input-slider" gutterBottom>
                                            Password length
                                        </Typography>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item xs={6} sm={6} md={6} lg={6} >
                                                <Slider
                                                    value={typeof value === 'number' ? value : 0}
                                                    onChange={handleSliderChange}
                                                    aria-label="Password length"
                                                    defaultValue={1} marks={
                                                        [
                                                            { value: 25 }
                                                        ]
                                                    }
                                                    max={50}
                                                />
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6} lg={6} >
                                                <TextField
                                                    className={classes.input}
                                                    value={value}
                                                    variant="outlined"
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    inputProps={{
                                                        step: 1,
                                                        min: 0,
                                                        max: 50,
                                                        type: 'number',
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item md={12} lg={12} sm={12}>
                                                <TextField variant="outlined"
                                                    placeholder="Prefix text"
                                                    value={state.prefix}
                                                    id="prefix"
                                                    onChange={(e) => {
                                                        setState({
                                                            ...state,
                                                            prefix: e.target.value
                                                        })
                                                    }}
                                                />
                                                <br />
                                                <br />
                                                <TextField variant="outlined"
                                                    placeholder="Suffix text"
                                                    value={state.suffix}
                                                    id="suffix"
                                                    onChange={(e) => {
                                                        setState({
                                                            ...state,
                                                            suffix: e.target.value
                                                        })
                                                    }}
                                                />


                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <br />
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox checked={state.isUppercase} onChange={handleChange} id="isUppercase" />}
                                            label="Uppercase"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={state.isLowercase} onChange={handleChange} id="isLowercase" />}
                                            label="Lowercase"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={state.isNumber} onChange={handleChange} id="isNumber" />}
                                            label="Numbers"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={state.isSpecialChars} onChange={handleChange} id="isSpecialChars" />}
                                            label="Symbols"
                                        />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Card>
                        <br />
                        <Card elevation={1} className={" box"}>
                            <h1 className="title  is-3">
                                Tips on How to Keep Your Passwords Safe and Keep Your Accounts Secure</h1>
                            <figure className="figure">
                                <img
                                    alt="password security"
                                    src="https://media.istockphoto.com/photos/login-and-password-cyber-security-concept-data-protection-and-secured-picture-id1271787791?b=1&k=6&m=1271787791&s=170667a&w=0&h=dryc79Ee9kec_7OXPb-tjAy1ORC6tSLGibUoGayi4Lg="
                                    width="100%"
                                    height="100%"
                                />
                            </figure>
                            <h2 style={{ display: 'flex', alignItems: 'start' }}>
                                <span style={{ marginTop: '5px', marginRight: '5px' }}>  <InfoIcon /></span> &nbsp; <span>To prevent your passwords from being accessed by hackers and keep your account as safe as possible, you should follow the following tips:
                                </span>
                            </h2>
                            <br />
                            <ul className={classes.ulElem} >
                                <li>   Avoid using the same password for multiple accounts.
                                </li><li> Create passwords that are at least 16 characters in length and contain at least one number, one special symbol, and a combination of upper-and-lowercase characters.
                                </li><li>  Avoid using names in your passwords.
                                </li><li>  Avoid using personal things in passwords such as your birthday, house number, ID card number, social security number, or anything else that could be linked back to you personally.
                                </li><li>    Avoid using any recognizable dictionary words in your passwords.
                                </li><li>    Avoid using the same or similar passwords over various sites and accounts.
                                </li><li>    Avoid passwords that are over 10 weeks old for your most sensitive accounts.
                                </li><li>    Avoid having only one copy of your password vault or list.
                                </li><li>    Avoid securing a password manager with only a master password. Turn on 2-factor authentication.
                                </li><li>    Need Help with two-step or multi-factor authentication: We create a starter guide here.
                                </li><li>    Avoid storing your passwords in the cloud.
                                </li><li>    Protect your computer and other devices with firewall and anti-virus software.
                                </li><li>    Avoid leaving your computer and phone unlocked whenever you’re not using them.
                                </li><li>    Avoid giving out your passwords.
                                </li><li>    By following the tips above, you can keep all of your accounts and logins as safe and secure as possible.
                                </li>
                            </ul>
                            <br />
                            <p>Happy Hacking !😎</p>
                            <br />
                        </Card>

                    </Grid>
                    <Grid item sm={12} md={4} lg={4}>
                        <VerticalAds />
                    </Grid>
                </Grid>
                <br />
            </div>

        </Container>
    )
};

