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
                <Link to='/general' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'general'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'general'} />
                    </ListItem>
                </Link>
                <Link to='/scientific' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'scientific'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'scientific'} />
                    </ListItem>
                </Link>
                <Link to='/finance' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'finance'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'finance'} />
                    </ListItem>
                </Link>
                <Link to='/life' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'life'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Life'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                {/* // ['Algebric', 'Equations', 'Conceptual', 'Grafs'] */}
                <Link to='/algebric' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'Algebric'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Algebric'} />
                    </ListItem>
                </Link>
                <Link to='/equations' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'equations'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'equations'} />
                    </ListItem>
                </Link>
                <Link to='/concepts' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'concepts'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'concepts'} />
                    </ListItem>
                </Link>
                <Link to='/grafs' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'grafs'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'grafs'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'about'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'about'} />
                    </ListItem>
                </Link>
                <Link to='/feedbacks' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'feedbacks'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'feedbacks'} />
                    </ListItem>
                </Link>
                <Link to='/donate' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'donate'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'donate'} />
                    </ListItem>
                </Link>
                <Link to='/share' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ListItem button key={'share'}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'share'} />
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