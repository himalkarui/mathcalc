import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography, Paper, Breadcrumbs, Divider, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Filezip from './modules/Filezip';
import Fileunzip from './modules/Fileunzip';
import Converter from './modules/Converter';

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
    },
    hero: {
        padding: '0px 1rem',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0.3rem'
        },
        backgroundColor: "#fafafa"
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
}));

export default function Zipfiles() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                <Helmet>
                    <title>Zip , unzip and compress files online</title>
                    <meta name="keywords" content="zip files, zip, unzip, extract, compress files, extract folder, folder" />
                    <meta name="description" content="ZIP and unzip files online, you can easily extract files from zipped file and save easily" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                </Helmet>
                <section className={classes.hero} data-v-23847e07>
                    <div style={{ padding: '1rem 0px' }}>
                        <div className="container">
                            <h1 style={{ margin: '0px' }} className="subtitle  has-text-weight-bold">
                                <Breadcrumbs className="subtitle has-text-weight-bold" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                                    <Link className={classes.link} to={'/files/'}>Files</Link>
                                    <Typography component="h1">
                                        {
                                            value === 0 ? "Compress files online" : (
                                                value === 1 ? "Decompress files online" : "Converters"
                                            )
                                        }
                                    </Typography>
                                </Breadcrumbs>
                            </h1>
                        </div>
                    </div>
                </section >
                <Divider />
                <Paper className={classes.tabs}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Zip" {...a11yProps(0)} />
                        <Tab label="UnZip" {...a11yProps(1)} />
                        {/* <Tab label="Converter" {...a11yProps(2)} hidden={true} /> */}
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0}>
                    <Filezip />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Fileunzip />
                </TabPanel>

                {/* <TabPanel value={value} index={2}>
                <Converter />
            </TabPanel> */}

                <br />
                <Paper elevation="2" className="box">
                    <Box p={2}>
                        <h1 className="title is-5"> How do I zip my files?</h1>
                        <p>
                            Below are step by step instructions for zipping files using zip tool.
                            <br />
                            <br />
                            <ul className={classes.ulel}>
                                <li>    To add files to your zip archive, you have two options:
                                </li>
                                <li>      Click "Select files to archive" to open the file chooser
                                </li>
                                <li> Drag and drop files directly onto zip input
                                </li>
                                <li>Select all the files you wish to archive.</li>

                                <li>    (Optional) Set the desired compression level by clicking the down arrow next to "Zip Files".
                                </li>
                                <li>Click "Zip Files". It will start compressing the files.
                                </li>
                                <li> Click here to start compression </li>
                                <li>
                                    Once all the files are compressed, the "Save ZIP File" button will appear.
                                </li>
                                <li>   Click "Save ZIP File" to save the archive to your local drive.</li>
                            </ul>
                        </p>
                        <br />
                        <h1 className="title is-5">
                            What is a zip file?
                        </h1>
                        <p>
                            <a style={{ color: 'blue', textDecoration: 'undeline' }} href="https://en.wikipedia.org/wiki/Zip_(file_format)"> .zip extension</a> is the most common archive format utilised across the internet for storing a collection of files and directories in a single compressed file. This compressed file can easily be shared between users (e.g. via e-mail)
                            <br />
                            <br />
                            Just think of it as a directory that may contain files and more sub-directories once it opened by a zip utility program. It compresses the data using a lossless algorithm meaning there is no file quality degradation like in some compression formats (e.g. mp3, jpeg). The compression algorithm can vary however the most common is DEFLATE. The standard is constantly evolving with new algorithm and encryption options are added at regular intervals.
                            <br />
                            <br />
                            Here you can manipulate zip files including zipping individual files, create a zipped folder, extracting zip files or converting zip files.
                        </p>
                        <br />
                    </Box>
                </Paper>
                <br />
            </Container>
        </div >
    );
}