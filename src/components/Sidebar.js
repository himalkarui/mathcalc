import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CssBaseline } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../Assets/images/smlmclogo.jpg';
import FeedbackIcon from '@material-ui/icons/Feedback';
import DownloadIcon from '@material-ui/icons/YouTube';
// icons
import { Home, Apps, AttachMoney, Functions, ScatterPlot, Accessibility } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        background:
            'linear-gradient(135deg, #ECEDDC 25%, transparent 25%) -50px 0, linear-gradient(225deg, #ECEDDC 25%, transparent 25%) -50px 0, linear-gradient(315deg, #ECEDDC 25%, transparent 25%),linear-gradient(45deg, #ECEDDC 25%, transparent 25%)',
        backgroundColor: '#ffff',
        height: '100%',
    },
    list: {
        width: 250,
        paddingRight: '10px'
    },
    fullList: {
        width: 'auto',
    },
    divdrawer: {
        paddingRight: '10px'
    },
    listitem: {
        // backgroundColor: '#fafafa',
        borderRadius: '0px',
        margin: '10px 10px 0px 0px',
        whiteSpace: 'nowrap',
        fontSize: '0.95rem',
        '&:hover': {
            backgroundColor: '#f1f1f1',
            color: '#3298dc !important'
        }
    },
    toolbar: theme.mixins.toolbar,
    pinkAvatar: {
        color: '#fff',
        height: '30px !important',
        width: '30px !important',
        background: 'linear-gradient(200deg, #15c, #3273dc,#3298dc, #3f50b5)',
        //'linear-gradient(200deg, #dfd1d1, #bdbdcf,#98ba98, #d1b4b4)',
    },
    logo: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
    }
}));


const Sidebar = (props) => {
    const classes = useStyles();

    let urls = [
        { url: '/', urlname: 'Home', icon: <Home /> },
        { url: '/general', urlname: 'General', icon: <Accessibility /> },
        { url: '/youtube-video-downloader', urlname: 'Youtube dl', icon: <DownloadIcon /> },
        { url: '/maths', urlname: 'Mathematics', icon: <Functions /> },
        { url: '/numbers', urlname: 'Numbers', icon: <>N</> },
        { url: '/tools', urlname: 'Tools', icon: <Apps /> },
        { url: '/text-lists', urlname: 'Text and Lists', icon: <>T</> },
        { url: '/files', urlname: 'Files', icon: <>F</> },
        { url: '/finance', urlname: 'Finance', icon: <AttachMoney /> },
        { url: '/physics', urlname: 'Physics', icon: <ScatterPlot /> },
        { url: '/feedback', urlname: 'Feedback', icon: <FeedbackIcon /> },
    ]

    const onChangeStyle = (e) => {
        try {
            props.handleDrawerToggle();
        } catch (e) { }
    }
    return (
        <>
            <CssBaseline />
            {!props.handleDrawerToggle ? <div className={classes.toolbar} style={{ marginBottom: '3px' }}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '13px' }}
                    onClick={(e) => { window.location = '/' }}>
                    <Avatar className={classes.logo}>
                        <img src={logo} alt="mathcalc logo" width={40} />
                    </Avatar>
                    <strong>&nbsp;&nbsp; Mathcalc</strong>
                </div>
            </div> : <></>
            }
            <List className={classes.root} >
                {
                    urls.map(ur => {
                        return (<Link to={ur.url} style={{ textDecoration: 'none', color: 'inherit' }} key={ur.urlname}
                        >
                            <ListItem className={classes.listitem} button key={ur.urlname}
                                onClick={(e) => {
                                    onChangeStyle(e);
                                }}>
                                <ListItemIcon>
                                    <Avatar className={classes.pinkAvatar}> {ur.icon}</Avatar></ListItemIcon>
                                <ListItemText primary={ur.urlname} />
                            </ListItem>
                        </Link>)
                    })
                }
            </List>
        </>
    );
}

export default Sidebar;