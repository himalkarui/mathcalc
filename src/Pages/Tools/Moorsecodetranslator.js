import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Card, Container, ButtonGroup
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import NoEncryptionIcon from '@material-ui/icons/NoEncryption';
import FontDownloadIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Helmet from 'react-helmet';
import CustomSnakbar from '../../Components/CustomSnakbar';
import * as fileSave from "file-saver";
import SubNavBar from '../../Components/SubNavBar';
import Share from '../../Components/Share';
import clickAud from '../../Assets/media/audio/click.wav';
import * as morsepro from 'morse-pro/lib/morse-pro';
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
    }
}));

export default function Moorsecodetranslator() {
    const [state, setState] = React.useState({
        resulttext: '',
        originalText: '',

        hrefHaveData: false,
        decryptedMsg: "",
        url: "",
        isDecode: false
    })

    const onClearClick = () => {
        setState({
            ...state,
            originalText: '',
        })
    }

    const onClickShare = () => {
        setShareOpen(true);
    }

    async function onClickDecrypt() {
        let para = document.getElementById("idresulttext");
        let text = decodeURIComponent(state.decryptedMsg).split("");
        let tex = "";
        let i = 0;
        let audio = document.createElement('audio');
        audio.src = clickAud;
        audio.playbackRate = 2;
        let intervalid = setInterval(() => {
            if (i === text.length) {
                clear();
            }
            if (text[i]) {
                tex += text[i].toString();
                i++;
                para.innerText = tex;
                if (tex !== "") {
                    audio.play();
                }
            }
        }, 50);
        function clear() {
            clearTimeout(intervalid);
        }
        scrolldiv(document.getElementById('idresulttext'))
    }

    const onInputChange = (e) => {
        try {
            let Textmsg = e.target.value;
            let encrpted = btoa(Textmsg);
            let resulttext = "";

            if (state.isDecode) {
                let decmsg = morsepro.morse2text(Textmsg);
                if (!decmsg.hasError) {
                    resulttext = decmsg.message;
                    encrpted = btoa(resulttext);
                }

            } else {

                let decmsg = morsepro.text2morse(Textmsg);
                if (!decmsg.hasError) {
                    resulttext = decmsg.morse;
                }
                encrpted = btoa(Textmsg);
            }

            setState({
                ...state,
                [e.target.id]: e.target.value,
                url: document.baseURI + "?" + encrpted,
                resulttext: resulttext
            });
        } catch (e) {
        }
    }

    React.useEffect(() => {
        let url = document.baseURI.split("?");
        if (url[1]) {
            try {
                setState({
                    ...state,
                    decryptedMsg: atob(url[1]),
                    hrefHaveData: true,
                });
            } catch (e) {
                setState({
                    ...state,
                    decryptedMsg: url[1],
                    hrefHaveData: true,
                })
            }
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const [shareOpen, setShareOpen] = React.useState(false);
    const shareHandleclose = (e) => {
        setShareOpen(false);
    }

    function scrolldiv(div) {
        window.scroll(0,
            findPosition(div));
    }
    function findPosition(obj) {
        var currenttop = 0;
        if (obj.offsetParent) {
            do {
                currenttop += obj.offsetTop;
            } while ((obj = obj.offsetParent));
            return [currenttop];
        }
    }

    const fncopytext = (e) => {
        /* Get the text field */
        let copyInput = document.getElementById('txtmorsetext');

        let resTes = "";
        if (state.isDecode) {
            let decmsg = morsepro.morse2text(state.originalText);
            if (!decmsg.hasError) {
                resTes = decmsg.message;
            }
        } else {
            let decmsg = morsepro.text2morse(state.originalText);
            if (!decmsg.hasError) {
                resTes = decmsg.morse;
            }
        }
        copyInput.value = resTes.toLowerCase();
        copyInput.style.display = "block";
        /* Select the text field */
        copyInput.select();
        copyInput.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");
        copyInput.style.display = "none";

        setSnackOpen(true);
        setSnakMessage("Text copied!");
        setTimeout(() => {
            setSnackOpen(false)
        }, 2000);

    }

    const downloadClick = () => {
        try {
            let resTes = "";
            if (state.isDecode) {
                let decmsg = morsepro.morse2text(state.originalText);
                if (!decmsg.hasError) {
                    resTes = decmsg.message;
                }
            } else {
                let decmsg = morsepro.text2morse(state.originalText);
                if (!decmsg.hasError) {
                    resTes = decmsg.morse;
                }
            }
            let blob = new Blob([resTes.toLowerCase()], { type: 'text' });
            fileSave.saveAs(blob, 'morsecode.txt');

        } catch (e) { }
    }

    const [snakOpen, setSnackOpen] = React.useState(false);
    const [snakMessage, setSnakMessage] = React.useState("");
    const handleClose = () => {
        setSnackOpen(false)
    }

    const setAction = () => {
        let resulttext = "";
        let orgText = state.originalText;
        let decmsg;
        if (!state.isDecode) {
            decmsg = morsepro.morse2text(orgText);
            if (!decmsg.hasError) {
                resulttext = decmsg.message.toLowerCase();
            }
        } else {
            decmsg = morsepro.text2morse(orgText);
            resulttext = decmsg.message.toLowerCase();
        }
        setState({
            ...state,
            resulttext: resulttext.toLowerCase(),
            isDecode: !state.isDecode
        })
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Morse code translator online | mathcalc</title>
                <meta name="keywords" content="morse code translator, morse code,translator,share secret message, encrypt message, " />
                <meta name="description" content="Online morse code tranlator to convert text to morse code and share to your friends" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handleClose}
            />
            <Share open={shareOpen} handleClose={shareHandleclose} url={state.url} urlMessaage="Send the morse code secret message to your friend !" urlHeader={'Your Friend send you a secrect message , using morse code!'} />
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Morse code translator"
                    links={[{
                        url: "/tools/",
                        urlName: "Tools"
                    }]}
                />
                <section className="hero" data-v-23847e07>
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                International Morse Code
                            </h1>
                            <p className="  has-text-grey">
                                Morse code is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes, or dits and dahs Morse code is named after Samuel Morse, one of the inventors of the telegraph.
                            </p>
                        </div>
                    </div>
                </section>
                <div style={{ display: state.hrefHaveData ? 'block' : 'none' }} className="container" data-v-14591542>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box" data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <p>Encoded morse code message</p>
                                    <textarea className="input"
                                        id="decryptedMsg"
                                        readOnly
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '170px',
                                            fontFamily: "morse",
                                            fontSize: 'large'
                                        }} value={state.decryptedMsg}
                                    ></textarea>
                                    <br />
                                </div>
                                <Button variant="contained" style={{ margin: '5px' }} color="secondary"
                                    onClick={onClickDecrypt}
                                    startIcon={<NoEncryptionIcon />}
                                >Decrypt</Button>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <div className={'resultsec'}>
                                        <p>Morse Encoded message</p>
                                        <div className="input"
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '170px',
                                                fontWeight: "bolder",
                                                fontSize: 'large'
                                            }}
                                        >
                                            <p id="idresulttext" style={{
                                                textAlign: 'left',
                                                position: 'absolute',
                                                left: '0',
                                                top: '0',
                                                overflowWrap: 'anywhere'
                                            }}></p>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                    onClick={
                                        (e) => {
                                            setState({
                                                ...state,
                                                hrefHaveData: false,
                                            });
                                        }
                                    }
                                    startIcon={<SendIcon />}
                                >Reply or encode new message</Button>
                            </Card>
                        </div>
                    </div>
                    <br />
                </div>
                <div style={{ display: state.hrefHaveData ? 'none' : 'block' }} className="container" data-v-14591542>
                    <div className="columns" data-v-14591542>
                        <div className="column is-6" data-v-14591542>
                            <Card elevation={1} className="box" data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <p>
                                        {
                                            !state.isDecode ? 'Input message' : 'Encoded text'
                                        }</p>
                                    <textarea className="input"
                                        id="originalText"
                                        style={{
                                            resize: 'none',
                                            minWidth: '255px',
                                            minHeight: '170px'
                                        }} value={state.originalText}
                                        onChange={onInputChange}
                                    ></textarea>
                                    <br />
                                </div>
                                <Button variant="contained" style={{ margin: '5px' }} className="button is-info"
                                    onClick={onClearClick}
                                >Clear</Button>
                                <ButtonGroup style={{ margin: '10px 0px' }}>
                                    <Button aria-label="Encode"
                                        className={!state.isDecode ? "button is-success" : 'button'}
                                        onClick={setAction}
                                    >
                                        Encode
                                    </Button>
                                    <Button aria-label="Decode"
                                        className={state.isDecode ? "button is-success" : 'button'}
                                        onClick={setAction}
                                    >
                                        Decode
                                    </Button>
                                </ButtonGroup>
                            </Card>
                        </div>
                        <div className="column is-6" data-v-14591542>
                            <Card className="box " data-v-14591542>
                                <div className="content" data-v-14591542>
                                    <div className={'resultsec'}>
                                        <p>  {
                                            state.isDecode ? 'Decoded message' : 'Encoded message by morse code'
                                        }</p>
                                        <textarea className="input"
                                            id="resulttext"
                                            readOnly
                                            style={{
                                                resize: 'none',
                                                minWidth: '255px',
                                                minHeight: '170px',
                                            }} value={state.resulttext.toLowerCase()}
                                            onChange={onInputChange}
                                        ></textarea>
                                    </div>
                                    <br />
                                    <Button variant="contained" style={{ margin: '5px' }} className="button"
                                        startIcon={<ShareIcon />}
                                        onClick={onClickShare}
                                    >Share to Friend !</Button>
                                    <input style={{ display: 'none' }} id="txtmorsetext" ></input>
                                    <Button variant="contained" color="primary" style={{ margin: '5px' }}
                                        startIcon={<FileCopyIcon />}
                                        onClick={fncopytext}
                                    >Copy</Button>

                                    <Button variant="contained" style={{ margin: '5px' }} color="secondary"
                                        startIcon={<FontDownloadIcon />}
                                        onClick={downloadClick}
                                    >Download</Button>
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