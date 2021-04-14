import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { IconButton } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});


const Sidebar = (props) => {
    const classes = useStyles();
    const { history } = props;
    const [state, setState] = React.useState({
        left: false,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Open, setOpen] = React.useState(Boolean(anchorEl));

    const handleMenu = (event) => {
        setState({ left: true });
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            <Link to='/mathcalc/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'Home'}>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                </Link>
                <Link to='/mathcalc/general' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'General'}>
                        <ListItemText primary={'General'} />
                    </ListItem>
                </Link>
                <Link to='/mathcalc/finance' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'finance'}>
                        <ListItemText primary={'Finance'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                {/* // ['Algebric', 'Equations', 'Conceptual', 'Grafs'] */}
                <Link to='/mathcalc/algebric' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'Algebric'}>
                        <ListItemText primary={'Algebric'} />
                    </ListItem>
                </Link>
                <Link to='/mathcalc/equations' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'equations'}>

                        <ListItemText primary={'Equations'} />
                    </ListItem>
                </Link>
                <Link to='/mathcalc/concepts' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'concepts'}>
                        <ListItemText primary={'Concepts'} />
                    </ListItem>
                </Link>
                <Link to='/mathcalc/grafs' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'grafs'}>

                        <ListItemText primary={'Grafs'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to='/mathcalc/about' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'about'}>

                        <ListItemText primary={'About'} />
                    </ListItem>
                </Link>
                <Link to='/mathcalc/feedbacks' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'feedbacks'}>
                        <ListItemText primary={'Feedbacks'} />
                    </ListItem>
                </Link>
                <Link to='/mathcalc/share' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'share'}>
                        <ListItemText primary={'Share'} />
                    </ListItem>
                </Link>
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

            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </div>
    );
}

export default Sidebar;