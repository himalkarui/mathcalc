import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, Avatar, Typography, Tooltip, Menu, MenuItem, InputBase } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import logo from '../Assets/images/mathcalcblack.png';
import { Link } from 'react-router-dom';
import Share from './Share';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        backgroundColor: 'white',
        color: 'black !important',
        //  boxShadow: '0px 2px 3px -5px rgb(0 0 0 / 5%), 0px 0px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        // [theme.breakpoints.up('sm')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        //     marginLeft: drawerWidth,
        // },
    },
    menuButton: {
        color: 'black',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appTile: {
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar

    drawerPaper: {
        width: drawerWidth,
        zIndex: 1,
        borderRight: '1px solid #dbdbdb',
        backgroundColor: '#fafafa',
        boxShadow: '0px 2px 3px -5px rgb(0 0 0 / 5%), 0px 0px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    },
    logo: {
        width: 35,
        height: 35,
        marginLeft: '1px',
        backgroundColor: '#ffffff00',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    rightMenus: {
        position: 'absolute',
        right: '20px'
    },
    button: {
        height: 40,
        minWidth: "175px",
        borderRadius: '4px',
        transition: 'margin 0.5s',
        border: '1px solid #e0d7d7',
        // boxShadow: '1px 2px 5px 2px #afaead',
        [theme.breakpoints.down("xs")]: {
            minWidth: "146px",
            fontSize: "13px",
        },
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'flex',
        // },
        "&:hover": {
            color: '#5d5d5de0',
            margin: '-3px -3px 0px 0px',
            backgroundColor: 'transparent',
            background: 'transparent',
        }
    },
    fab: {
        position: 'fixed', /* Fixed/sticky position */
        zIndex: '99', /* Make sure it does not overlap */
        backgroundColor: '#3298dc', /* Set a background color */
        cursor: 'pointer', /* Add a mouse pointer on hover */
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
    title: {
        // flexGrow: 1,
        // marginLeft: '-10px',
        marginBottom: '3px',
        // [theme.breakpoints.up('sm')]: {
        //     display: 'flex',
        // },
    },
    search: {
        display: 'none',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#fafafa',
        '&:hover': {
            backgroundColor: '#f1f1f1',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionMobile: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
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

    const [shareOpen, setShareOpen] = React.useState(false);
    const shareHandleclose = (e) => {
        setShareOpen(false);
    }
    const shareHandleopen = (e) => {
        setShareOpen(true);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlemenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    
    React.useEffect(() => {
    
    }, []);

    return (
        <>
            <CssBaseline />
            <Share open={shareOpen} handleClose={shareHandleclose} />
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
                    <Typography className={classes.title} variant="h6">
                        <Link style={{ display: 'flex' }} to="/">
                            <Avatar className={classes.logo}>
                                <img src={logo} alt="mathcalc logo" width={40} height={40} />
                            </Avatar>
                            <Typography variant="h6"><strong>Mathcalc</strong></Typography>
                        </Link>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search.."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.rightMenus}>
                        <Link to='/feedback/' className={classes.sectionDesktop}>
                            Send feedback
                        </Link>
                        <IconButton aria-controls="header-menu" className={classes.sectionMobile}
                            aria-haspopup="true" onClick={handlemenuClick}
                            aria-label="more" edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton>
                        <Menu
                            id="header-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link to='/feedback/'>
                                    Send feedback
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Tooltip title="Share">
                <Fab color="secondary" size="large" className={classes.fab}
                    onClick={shareHandleopen}>
                    <ShareIcon />
                </Fab>
            </Tooltip>
            <nav className={classes.drawer}>
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
                <Hidden smDown implementation="css">
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
export default Header;