import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography, Container, Paper, TextField,
    CircularProgress, Fade, Tabs, Tab, Grid, Button, Box,
} from '@material-ui/core';
import Helmet from 'react-helmet';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Folderzip from './Folderzip';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import FolderIcon from '@material-ui/icons/Folder';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
const options = ['Fast', 'Medium', 'Best compression (slow)'];
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    tabs: {
        backgroundColor: 'transparent',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        "& > button": {
            width: '100%'
        }
    },
    tab: {
        width: '100%'
    },
    ulel: {
        listStyle: 'disc !important',
        padding: '1.5rem',
        borderBottom: 'solid',
        borderTop: 'solid',
        "& li": {
            listStyleType: 'disc'
        }
    },
    tabheader: {
        display: 'flex',
        flexDirection: 'row',
        "& > span": {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'end'
        }
    }
}));

export default function Filezip() {
    const [state, setState] = React.useState({
        files: null,
        fileNames: [],
        progress: 'start',
        zippedFile: null,
        outputfilename: 'output'

    });

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const inputChange = (e) => {
        setState({
            ...state,
            outputfilename: e.target.value
        })
    }
    const [loading, setLoading] = React.useState(false);

    const fileChangehandle = (e) => {
        let filelist = [];
        for (let i = 0; i < e.target.files.length; ++i) {
            filelist.push(e.target.files[i].name);
        }
        setState({
            ...state,
            files: e.target.files,
            fileNames: filelist,
        })

    }

    function CompressZipfile(e) {
        setLoading(true);
        debugger;
        let curButton = e.target
        curButton.parentElement.style.display = 'none';
        setState({
            ...state,
            progress: 'compress'
        });
        const zip = require('jszip')();
        let fname = state.outputfilename;
        fname = fname === "" ? "output" : fname;
        let folder = zip.folder(fname);
        for (let i = 0; i < state.files.length; ++i) {
            folder.file(state.files[i].name, state.files[i]);
        }
        zip.generateAsync({
            type: "blob",
            compression: selectedIndex === 0 ? "STORE" : "DEFLATE",
            compressionOptions: {
                level: selectedIndex === 0 ? 0 : (selectedIndex === 1 ? 5 : 9),
            },
        }).then(content => {
            curButton.parentElement.style.display = '';
            setLoading(false);
            setState({
                ...state,
                zippedFile: content
            });
        });
    }

    const resetCick = () => {
        setLoading(false);
        setState({
            ...state,
            zippedFile: null,
            files: null,
            fileNames: null
        });
    }

    const saveZippedFile = () => {
        const fileSave = require("file-saver");
        let filename = state.outputfilename;
        fileSave.saveAs(state.zippedFile,
            filename === "" ? "output.zip" : filename + ".zip"
        );
        setTimeout(() => {
            resetCick();
        }, 1500);
    }

    const classes = useStyles();


    //dropdown
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);


    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return (
        <div className={classes.root}>

            <Paper square className={classes.tabs}>
                <Tabs
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab className={classes.tabheader} icon={<FileIcon />} label="&nbsp; &nbsp; File" aria-label="File" {...a11yProps(0)} />
                    <Tab className={classes.tabheader} icon={<FolderIcon />} label="&nbsp; &nbsp; Folder" aria-label="Folder" {...a11yProps(1)} />
                </Tabs>
            </Paper>

            <TabPanel className={classes.tab} value={value} index={0}>
                <>
                    <Container maxWidth="xl">
                        <Helmet>
                            <title>Zip , unzip and compress files online</title>
                            <meta name="keywords" content="numbers, minimum, maximum, float, decimal, integer, minimal, least, lowest, highest, littlest, merest, slightest, smallest, tiniest, maximal, top, biggest, greatest, largest, most, mostest, supreme" />
                            <meta name="description" content="Find the highest and the lowest number from a list" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                        </Helmet>
                        <Grid container spacing={2} style={{ justifyContent: 'center' }}>
                            <Grid item xl={12} sm={12} md={12} lg={12} style={{
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 'calc( 100vh - 243px)',
                                textAlign: 'center',
                                display: 'flex',
                            }}>
                                <br />
                                <Paper elevation={0} className="box" style={{
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    minWidth: '60%'
                                }}>

                                    {
                                        state.fileNames && state.fileNames.length > 0 ?
                                            <>
                                                <Box p={1} textAlign="center">
                                                    <br />
                                                    {
                                                        loading ? <div className={classes.placeholder}>
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
                                                        </div> : <>
                                                            <Box>
                                                                {state.zippedFile ?
                                                                    <Typography>You can save your zip file, now !</Typography> : <TextField
                                                                        id="outputfilename"
                                                                        onChange={inputChange}
                                                                        label="Enter output file name"
                                                                    />
                                                                }
                                                            </Box>
                                                        </>
                                                    }
                                                    <br />
                                                    <br />
                                                    <Button style={{ margin: '10px' }} variant="outlined" onClick={resetCick} color="secondary">Reset</Button>
                                                    &nbsp;
                                                    &nbsp;
                                                    {
                                                        state.zippedFile ?
                                                            <>
                                                                <Button variant="contained" color="primary"
                                                                    onClick={saveZippedFile}
                                                                >Save ZIP file
                                                                </Button>
                                                            </> :
                                                            <>
                                                                {!loading ?
                                                                    <>
                                                                        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                                                                            <Button variant="contained" color="primary"
                                                                                onClick={CompressZipfile}
                                                                            >ZIP Files</Button>
                                                                            <Button color="inherit" >{options[selectedIndex]}</Button>
                                                                            <Button
                                                                                color="inherit"
                                                                                size="small"
                                                                                aria-controls={open ? 'split-button-menu' : undefined}
                                                                                aria-expanded={open ? 'true' : undefined}
                                                                                aria-label="select merge strategy"
                                                                                aria-haspopup="menu"
                                                                                onClick={handleToggle}
                                                                            >
                                                                                <ArrowDropDownIcon />
                                                                            </Button>
                                                                        </ButtonGroup>
                                                                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                                                            {({ TransitionProps, placement }) => (
                                                                                <Grow
                                                                                    {...TransitionProps}
                                                                                    style={{
                                                                                        transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                                                                    }}
                                                                                >
                                                                                    <Paper>
                                                                                        <ClickAwayListener onClickAway={handleClose}>
                                                                                            <MenuList id="split-button-menu">
                                                                                                {options.map((option, index) => (
                                                                                                    <MenuItem
                                                                                                        key={option}
                                                                                                        selected={index === selectedIndex}
                                                                                                        onClick={(event) => handleMenuItemClick(event, index)}
                                                                                                    >
                                                                                                        {option}
                                                                                                    </MenuItem>
                                                                                                ))}
                                                                                            </MenuList>
                                                                                        </ClickAwayListener>
                                                                                    </Paper>
                                                                                </Grow>
                                                                            )}
                                                                        </Popper>
                                                                    </> : <></>
                                                                }
                                                            </>
                                                    }
                                                </Box>
                                            </> : <>
                                                <Typography variant="h6" className="title is-6">
                                                    Select files to archive
                                                </Typography>
                                                <div className="file-dropzone"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        fontSize: '0.9rem',
                                                        border: 'none',
                                                        backgroundColor: 'transparent'
                                                    }}
                                                    data-v-14591542>
                                                    <input id="image"
                                                        multiple
                                                        type="file" data-v-14591542 onChange={e => fileChangehandle(e)}
                                                        accept=""
                                                    />
                                                    <div>
                                                        <Button variant="contained"
                                                            startIcon={<LibraryAddIcon />}
                                                            onClick={(e) => {
                                                                document.getElementById("image").click();
                                                            }}
                                                            color="primary">Select files</Button>
                                                        <br />
                                                    </div>
                                                </div>
                                            </>
                                    }

                                    <br />
                                    <Box display="flex" textAlign="left" flexDirection="column" fontSize="0.8rem" color="white"> {
                                        state.fileNames && state.fileNames.length > 0 ?
                                            state.fileNames.map((name, i) => {
                                                return (<>
                                                    <span
                                                        key={i}
                                                        style={{
                                                            padding: '4px 8px',
                                                            backgroundColor: i % 2 === 0 ? '#7a7a7ac7' : 'rgb(151 151 151 / 57%)'
                                                        }}
                                                    >{(i + 1) + ". " + name}</span>
                                                </>)
                                            })
                                            : <></>
                                    }
                                    </Box>
                                </Paper>
                                <br />
                            </Grid>
                        </Grid>
                    </Container>
                </>
            </TabPanel>
            <TabPanel className={classes.tab} value={value} index={1}>
                <> <Folderzip /></>
            </TabPanel>
        </div >
    );
}