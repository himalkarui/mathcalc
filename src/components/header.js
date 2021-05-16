import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, Avatar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import logo from '../Assets/images/smlmclogo.jpg';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        backgroundColor: 'white',
        color: 'black !important',
        boxShadow: '0px 2px 3px -5px rgb(0 0 0 / 5%), 0px 0px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        // [theme.breakpoints.up('sm')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        //     marginLeft: drawerWidth,
        // },
    },
    menuButton: {
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar

    drawerPaper: {
        width: drawerWidth,
        zIndex: 1,
        borderRight: 'none',
        boxShadow: '0px 2px 3px -5px rgb(0 0 0 / 5%), 0px 0px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
    logo: {
        width: 35,
        height: 35,
        backgroundColor: 'black',
    }

}));

function Header(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0px', cursor: 'pointer' }}
                        onClick={(e) => {
                            let anchor = document.createElement('a');
                            anchor.href = '/';
                            anchor.click();
                        }}>
                        <Avatar className={classes.logo}>
                            <img src={logo} alt="mathcalc logo" width={40} />
                        </Avatar>
                        <h2> <strong>&nbsp;&nbsp; Math Calc</strong></h2>
                    </div>

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {<Sidebar handleDrawerToggle={handleDrawerToggle} />}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {<Sidebar />}
                    </Drawer>
                </Hidden>
            </nav>
        </>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
