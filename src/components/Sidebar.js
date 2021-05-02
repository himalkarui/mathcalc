import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import { Home, Apps, AttachMoney, Functions, ScatterPlot, Accessibility } from '@material-ui/icons';

const useStyles = makeStyles({
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
        borderRadius: '0px 60px 60px 0px',
        margin: '10px 10px 0px 0px',
        whiteSpace: 'nowrap'
    }
});


const Sidebar = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const handleMenu = (event) => {
        setState({ left: true });
    };
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    let urls = [
        { url: '/', urlname: 'Home', icon: <Home /> },
        { url: '/all-calculators', urlname: 'All Calcs', icon: <Apps /> },
        { url: '/general', urlname: 'General', icon: <Accessibility /> },
        { url: '/finance', urlname: 'Finance', icon: <AttachMoney /> },
        { url: '/maths', urlname: 'Maths', icon: <Functions /> },
        { url: '/physics', urlname: 'Physics', icon: <ScatterPlot /> },
    ]

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List >
                {
                    urls.map(ur => {
                        return (<Link to={ur.url} style={{ textDecoration: 'none', color: 'inherit' }} key={ur.urlname}>
                            <ListItem className={classes.listitem} button key={ur.urlname}>
                                <ListItemIcon>{ur.icon}</ListItemIcon>
                                <ListItemText primary={ur.urlname} />
                            </ListItem>
                        </Link>)
                    })
                }
            </List>
        </div>
    );

    return (
        <div>

            <IconButton edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
            >
                <MenuIcon />
            </IconButton>

            <Drawer className={classes.divdrawer} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </div>
    );
}

export default Sidebar;