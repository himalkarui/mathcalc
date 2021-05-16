import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../Assets/images/smlmclogo.jpg';

// icons
import { Home, Apps, AttachMoney, Functions, ScatterPlot, Accessibility } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        paddingRight: '10px'
    },
    fullList: {
        width: 'auto',
    },
    divLinks: {
        backgroundColor: '#00000059',
    },
    divdrawer: {
        paddingRight: '10px'
    },
    listitem: {
        backgroundColor: 'white',
        borderRadius: '0px',
        margin: '10px 10px 0px 0px',
        whiteSpace: 'nowrap',
        '&:hover': {
            backgroundColor: '#f1f1f1'
        }
    },
    toolbar: theme.mixins.toolbar,
    pinkAvatar: {
        color: '#fff',
        height: '30px !important',
        width: '30px !important',
        background: 'linear-gradient(200deg, #dfd1d1, #bdbdcf,#98ba98, #d1b4b4)',
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
        { url: '/maths/', urlname: 'Mathamatics', icon: <Functions /> },
        { url: '/tools/', urlname: 'Tools', icon: <Apps /> },
        { url: '/general/', urlname: 'General', icon: <Accessibility /> },
        { url: '/finance/', urlname: 'Finance', icon: <AttachMoney /> },
        { url: '/physics/', urlname: 'Physics', icon: <ScatterPlot /> },
    ]

    const onChangeStyle = (e) => {
        try {
            props.handleDrawerToggle();

        } catch (e) { }
    }
    return (
        <>
            <div className={classes.toolbar} style={{ borderBottom: '1px solid #77777712' }}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '13px' }}
                    onClick={(e) => { window.location = '/' }}>
                    <Avatar className={classes.logo}>
                        <img src={logo} alt="mathcalc logo" width={40} />
                    </Avatar>
                    <strong>&nbsp;&nbsp; Math Calc</strong>
                </div>
            </div>
            <List >
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