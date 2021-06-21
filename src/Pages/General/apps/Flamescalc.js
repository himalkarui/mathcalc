import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";
import {
    Card, Grid, TextField
    , Button, Container,
} from '@material-ui/core';
import Like from '@material-ui/icons/FavoriteBorderRounded';
import CustomSnakbar from '../../../Components/CustomSnakbar';
import SubNavBar from '../../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    button: {
        height: 40,
        minWidth: "175px",
        background:
            "transparent linear-gradient(180deg, rgb(255 0 84) 0%, #bf191f 100%) 0% 0% no-repeat padding-box",
        fontSize: 15,
        color: "white",
        marginTop: 14,
        padding: '26px',
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    resultDiv: {
        backgroundColor: '#03a9f4',
        color: 'white',
        borderRadius: '0px',
        textAlign: 'center',
        background: 'linear-gradient(122deg, #f44336, #ff0dcc, blue,#452b2b9e)',
    }

}));

export default function Flamescalc() {

    const classes = useStyles();
    const [state, setState] = React.useState({
        nameOne: "",
        nametwo: "",
        relationship: "",
        showResult: false
    });

    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);

    const onCalculateClick = (e) => {

        if (state.nameOne === "") {
            setSnakOpen(true);
            setSnakMessage("Enter first name");
        } else if (state.nametwo === "") {
            setSnakOpen(true);
            setSnakMessage("Enter second name");
        } else {

            let nameone = state.nameOne;
            let nametwo = state.nametwo;

            let splitedone = nameone.split("");
            let splitedtwo = nametwo.split("");

            for (let i = 0; i < splitedtwo.length; ++i) {
                splitedone.push(splitedtwo[i]);
            }

            function onlyUnique(value, index, self) {
                return self.indexOf(value) !== index;
            }

            var duplicate = splitedone.filter(onlyUnique);
            for (let i = 0; i < duplicate.length; ++i) {
                for (let j = 0; j < splitedone.length; ++j) {
                    if (duplicate[i] === splitedone[j])
                        splitedone.splice(j, 1);
                }
            }
            let arrFlames = "012345".split("");
            let countLength = splitedone.length;
            let relationNo = 0;
            if (countLength <= 6) {
                relationNo = countLength;
            } else {
                while (arrFlames.length > 1) {
                    arrFlames.splice((countLength % arrFlames.length), 1)
                }
                relationNo = parseFloat(arrFlames) + 1;
            }
            if (relationNo === 0) {
                relationNo = 1;
            }
            switch (relationNo) {
                case 1:
                    setState({
                        ...state,
                        relationship: "Friendship",
                        showResult: true
                    })
                    break;
                case 2:
                    setState({
                        ...state,
                        relationship: "Love",
                        showResult: true
                    })
                    break;
                case 3:
                    setState({
                        ...state,
                        relationship: "Affection",
                        showResult: true
                    })
                    break;
                case 4:
                    setState({
                        ...state,
                        relationship: "Marriage",
                        showResult: true
                    })
                    break;
                case 5:
                    setState({
                        ...state,
                        relationship: "Enemy",
                        showResult: true
                    })
                    break;
                case 6:
                    setState({
                        ...state,
                        relationship: "Siblings",
                        showResult: true
                    })
                    break;

                default:
                    setState({
                        ...state,
                        relationship: "Friendship",
                        showResult: true
                    })
                    break;
            }
        }
    };

    const handleClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };
    const onInputChange = (e) => {
        setSnakOpen(false);
        setSnakMessage(null);
        setState({
            ...state,
            showResult: false,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div className={classes.root}>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Online flames calculator - Mathcalc</title>
                <meta name="keywords" content="flames, flames calculator, flames games , names, flames names calculator" />
                <meta name="description" content="This flames calculator assesses and predicts the outcome of a relationship based on an algorithm of two given names." />
                <meta name="author" content="Mathcalc" />
                <meta name="copyright" content="Mathcalc Inc. Copyright (c) 2021" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth={'xl'} >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <SubNavBar
                            pageTitle="Flames Calculator"
                            links={[{
                                url: "/general/",
                                urlName: "General"
                            }]}
                        />
                        <br />
                        <Card raised elevation={1} className="box" >
                            <h2 className={'title is-5'}>
                                Flames Calculator</h2>
                            <p>
                                This flames calculator assesses and predicts the outcome of a relationship based on an algorithm of two given names.
                                     You can find more in depth information on this subject below the form.  </p>
                            <br />
                            <p className="title is-5">Please enter the names you are interested in !</p>
                            <Grid justify="left">
                                <TextField id="nameOne" className="gridItem"
                                    onChange={onInputChange}
                                    value={state.nameOne}
                                    label="Name 1" variant="outlined"></TextField><br />
                                <TextField id="nametwo" className="gridItem" label="Name 2"
                                    value={state.nametwo}
                                    onChange={onInputChange} variant="outlined"></TextField><br />
                                <br />
                                {state.showResult ?
                                    <div className={classes.resultDiv + " box"}>
                                        <h3 className="title" style={{ color: 'white' }}>
                                            The relationship between {state.nameOne} and {state.nametwo + " "}
                                        will end in
                                        <br />
                                            <strong style={{ fontSize: '3rem', fontFamily: 'fantasy' }}>{" " + state.relationship}!
                                            </strong>
                                        </h3>
                                        <span className="heart"></span>
                                    </div>
                                    : <></>}
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button + ' gridItem'}
                                    startIcon={<Like />}
                                    onClick={() => { onCalculateClick() }}
                                >Calculate</Button>
                                <div className=""></div>
                            </Grid>
                        </Card>
                        <br />
                        <Card className="box" elevation={1}>
                            <h2 className="title is-5">How does this flames calculator work?</h2>
                            <p data-v-14591542>
                                It is always hard to define the relationship between two people in a simple word like friendship, love, affection and enemy or to predict the outcome, like marriage.
</p><br />
                            <p data-v-14591542>
                                The above tool tries to find the answer to questions likes "what is our relationship?" or to give you a sense of what is going on between you and another person. You are only asked to enter the two names between which you want to calculate the relationship.
</p><br />
                            <p data-v-14591542>
                                The flames calculator is based on quite a simple algorithm in which FLAMES stands for:
</p><br />
                            <ul style={{ alignItems: 'center', marginLeft: '30px' }}>
                                <li>■ Friendship;</li>
                                <li>
                                    ■ Love;</li>

                                <li>■ Affection;</li>

                                <li>■ Marriage;</li>
                                <li>
                                    ■ Enemy;</li>

                                <li>■ Siblings.</li>
                            </ul>
                            <br />
                            <p>
                                The FLAMES test is actually a compatibility analysis that reveals to what extent the relationship between two persons can go, defining that into 6 simple words.
</p><br />
                            <p>You can use it as a love meter to see whether you and your crush have any chance to get serious or simply to see what future holds between you and the person you just met. This is just another fun name game that most pre-teens and teens have tried.
</p><br />
                            <p>
                                You can also play the flames game on paper by writing the two names for which you want the relationship reading. Then you need to eliminate the letters that are common to both words, no matter how many times they appear.
</p><br />
                            <p>
                                The next step is to count the letters that remained. Then you use the number you obtained to count the letters from the word Flames. If the number is greater than 6 you continue counting from the letter F once again. The letter on which the number lands on reveals the relationship between the two persons.
</p>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
