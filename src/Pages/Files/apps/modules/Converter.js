import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, Paper,
    CircularProgress, Fade, Grid, Button, Box, Select
} from '@material-ui/core';
import Helmet from 'react-helmet';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import JSZip from 'jszip';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CustomSnakbar from '../../../../Components/CustomSnakbar';
// import * as Archive from 'libarchive.js';

const options = ['zip file', 'zipx file', 'rar file', '7z file', 'iso file',
    'tar file', 'tar.bz2 file', 'tar.gz file', 'tar.xz file', 'jar file', 'Other...'];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    hero: {
        padding: '0px 1rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0.3rem'
        },
        backgroundColor: "white"
    },
    tabs: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('sm')]: {
            margin: '0px -16px',
        },
        borderRadius: '0px',
    },
    link: {
        color: '#3f51b5',
        cursor: 'pointer',
        '& hover': {
            textDecoration: 'underline'
        }
    },
    select: {
        display: 'table-column',
        height: '39px',
        "& > *": {
            border: 'none !important',
            margin: '0px !important',
            padding: '0px !important',
            backgroundColor: '#e0e0e0'
        },
        '& > svg': {
            zIndex: 1
        },
        '& > * hover': {
            border: 'none !important',
            margin: '0px !important',
            padding: '0px !important',
            backgroundColor: 'inherit !important'
        }
    }
}));



export default function Converter() {
    const [state, setState] = React.useState({
        files: null,
        fileNames: [],
        progress: 'start',
        zippedFile: [],
        outputfilename: 'output'

    });
    React.useEffect(() => { }, [])
    const [loading, setLoading] = React.useState(false);
    const fileChangehandle = (e) => {
        try {
            if (e.target.files && e.target.files[0] && e.target.files[0].name.split('.')[1] === options[selectedIndex].slice(0, options[selectedIndex].length - 5)) {
                let filelist = [];
                for (let i = 0; i < e.target.files.length; ++i) {
                    filelist.push(e.target.files[i].name);
                }
                setState({
                    ...state,
                    files: e.target.files,
                    fileNames: filelist,
                });
                let selectf = document.getElementById('selectfiletype');
                if (selectf) {
                    selectf.style.display = 'none';
                }
            }
            else {
                setOpen(true);
                setTimeout(() => {
                    setOpen(false);
                }, 1500);

            }
        } catch (e) { }
    }

    function CompressZipfile(e) {
        setLoading(true);
        extractfile(state.files[0]);
    }

    function extractfile(file) {
        var zipFileToLoad = file;
        var fileReader = new FileReader();
        fileReader.onload = async function (fileLoadedEvent) {
            let zip = await JSZip.loadAsync(fileLoadedEvent.target.result, {
                compression: 'STORE'
            })

            var zipFileLoaded = zip.files;
            //  filesave.saveAs(folderName, "output");
            let files = [];
            let filecount = 0;
            for (var nameOfFileContainedInZipFile in zipFileLoaded) {
                var fileContainedInZipFile = zipFileLoaded[nameOfFileContainedInZipFile];
                // fileContainedInZipFile.async("blob").then(function (content) {
                filecount += 1;

                let contetn = await fileContainedInZipFile.async("blob");
                let file = {
                    lelativepath: nameOfFileContainedInZipFile,
                    content: contetn,
                    file: fileContainedInZipFile
                }
                if (file.content && !fileContainedInZipFile.dir && file.lelativepath !== "") {
                    files.push(file);
                }
                if (filecount === Object.keys(zipFileLoaded).length) {
                    setLoading(false);
                    setState({
                        ...state,
                        zippedFile: files
                    });
                }
                // });
            }

        }

        fileReader.readAsArrayBuffer(zipFileToLoad);
    }


    const Links = state.zippedFile.map((f, i) => (

        <li style={{
            padding: '4px 8px',
            display: 'flex',
            backgroundColor: i % 2 === 0 ? 'rgb(250 250 250)' : '#fff'
        }}>
            <a href="/" style={{
                width: '80%',
                borderRight: '1px solid rgb(242 242 242)',
                marginRight: '10px'
            }} onClick={() => {
                displayFileAsText(f.file);
            }} >  {
                    f.lelativepath
                }
            </a>
            <Button style={{ width: '20%' }}
                startIcon={<SaveAltIcon />}
                color="primary"
                variant='outlined'
                onClick={() => {
                    displayFileAsText(f.file);
                }}>Save</Button>
        </li >
    ));

    function displayFileAsText(file) {
        file.async("blob").then(function (content) {
            const filesave = require('file-saver');
            filesave.saveAs(content,
                file.name);
        });
    }

    const resetCick = () => {
        setLoading(false);
        setState({
            ...state,
            zippedFile: [],
            files: null,
            fileNames: null
        });
    }

    const saveZippedFile = () => {
        const fileSave = require("file-saver");
        // let filename = state.outputfilename;
        for (let i = 0; i < state.zippedFile.length; ++i) {
            if (state.zippedFile[i].content) {
                fileSave.saveAs(state.zippedFile[i].content,
                    state.zippedFile[i].lelativepath
                );
            }
        }
        setTimeout(() => {
            resetCick();
        }, 1500);
    }

    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Zip , unzip and compress files online</title>
                <meta name="keywords" content="numbers, minimum, maximum, float, decimal, integer, minimal, least, lowest, highest, littlest, merest, slightest, smallest, tiniest, maximal, top, biggest, greatest, largest, most, mostest, supreme" />
                <meta name="description" content="Find the highest and the lowest number from a list" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <CustomSnakbar
                handleClose={handleClose}
                msg={"choose file with correct extension"}
                open={open}
            />
            <Grid container style={{ justifyContent: 'center' }}>
                <Grid item xl={12} sm={12} md={12} lg={12} style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'calc( 100vh - 243px)',
                    textAlign: 'center',
                    display: 'flex',
                }}>
                    <br />
                    <Paper elevation={2} className="box" style={{
                        minWidth: '60%'
                    }}>
                        {
                            state.fileNames && state.fileNames.length > 0 ?
                                <>
                                    <Box p={1} textAlign="center">

                                        {
                                            loading ? <><div className={classes.placeholder}>
                                                <Fade
                                                    in={loading}
                                                    style={{
                                                        transitionDelay: loading ? '800ms' : '0ms',
                                                    }}
                                                    unmountOnExit
                                                >
                                                    <CircularProgress />
                                                </Fade>
                                                <Typography>Your files are compressing..</Typography>
                                            </div> </> : <>
                                                <Box>
                                                    {state.zippedFile && state.zippedFile.length ?
                                                        <Typography>You can save your zip file, now !</Typography> :
                                                        <></>
                                                    }
                                                </Box>
                                                <br />
                                            </>
                                        }
                                        <Button style={{ margin: '10px' }} variant="outlined" onClick={resetCick} color="secondary">Reset</Button>
                                        &nbsp;
                                        &nbsp;
                                        {
                                            state.zippedFile && state.zippedFile.length ?
                                                <>
                                                    <Button variant="contained" color="primary"
                                                        onClick={saveZippedFile}
                                                    >Save extracted files
                                                    </Button>
                                                    <Box display="flex" textAlign="left" flexDirection="column" fontSize="0.8rem" color="white">
                                                        <br />
                                                        <ul id="ulFilesContained">
                                                            {
                                                                Links
                                                            }
                                                        </ul>
                                                    </Box>

                                                </> :
                                                <>
                                                    {
                                                        !loading ?
                                                            <Button variant="contained"
                                                                color="secondary"
                                                                onClick={CompressZipfile}
                                                            >Extract file</Button>

                                                            : <></>
                                                    }
                                                </>
                                        }
                                    </Box>
                                </> : <>
                                    <Typography variant="h6" className="title is-6">
                                        Select file to convert
                                    </Typography>
                                    <div className="file-dropzone"
                                        style={{
                                            fontSize: '0.9rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                        data-v-14591542>
                                        <input id="folder"
                                            multiple
                                            type="file"
                                            data-v-14591542 onChange={e => fileChangehandle(e)}
                                            accept={"." + options[selectedIndex].slice(0, options[selectedIndex].length - 5)}
                                        />
                                        <div style={{ margin: '15px' }}>
                                            <ButtonGroup variant="contained" color="primary" aria-label="split button">
                                                <Button variant="contained"
                                                    startIcon={<LibraryAddIcon />}
                                                    onClick={(e) => {
                                                        document.getElementById("folder").click();
                                                    }}
                                                    color="primary">Select file</Button>
                                                <Button color="inherit" >{options[selectedIndex]}</Button>
                                                <Select
                                                    className={classes.select}
                                                    IconComponent={ArrowDropDownIcon}
                                                    variant="outlined"
                                                    id="selectfiletype"
                                                >
                                                    <MenuList id="split-button-menu">
                                                        {options.map((option, index) => (
                                                            <MenuItem
                                                                key={index}
                                                                selected={index === selectedIndex}
                                                                onClick={(event) => handleMenuItemClick(event, index)}
                                                            >
                                                                {option}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </Select>
                                            </ButtonGroup>
                                            <br />
                                        </div>
                                    </div>
                                </>
                        }
                        <br />
                    </Paper>
                    <br />
                </Grid>
            </Grid>
        </div >
    );
}