// import React from 'react';
// import { withRouter } from 'react-router-dom';
// import clsx from 'clsx';
// import { createMuiTheme, withStyles, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import { Button, useMediaQuery } from '@material-ui/core';

// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { green, purple } from '@material-ui/core/colors';
// import Sidebar from './Sidebar';
// const drawerWidth = 240;

// const ColorButton = withStyles((theme) => ({
//     root: {
//         color: theme.palette.getContrastText(purple[500]),
//         backgroundColor: 'black',
//         '&:hover': {
//             color: 'black !important',
//             backgroundColor: 'white',
//             boxShadow: '0px 0px 10px white',
//             border: 'none'
//         },
//     },
// }))(Button);


// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-start',
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginRight: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginRight: 0,
//     },
// }));

// const Header = (props) => {


//     const classes = useStyles();
//     const { history } = props;
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const [Open, setOpen] = React.useState(Boolean(anchorEl));
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
//     const isTablet = useMediaQuery(theme.breakpoints.down('sm'));

//     const handleMenu = (event) => {
//         setOpen(true);
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClick = (PageURL) => {
//         history.push(PageURL);
//         setAnchorEl(null);
//     };

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar
//                 position="sticky"
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: Open,
//                 })}
//                 style={{ backgroundColor: '#db4437' }}
//             >
//                 <Toolbar>
//                     <Button disableRipple disableFocusRipple style={{
//                         color: 'white',
//                         marginLeft: -24,
//                         borderRadius: 0,
//                     }}
//                         onClick={e => { history.push('/'); }}>
//                     </Button>
//                     <Typography variant="h6" className={classes.title}
//                         style={{ fontFamily: 'raleway', fontWeight: 400, fontStyle: 'normal' }}
//                     >
//                     </Typography>

//                     <div>
//                         <Sidebar />
//                     </div>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

// export default withRouter(Header);





import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

import Sidebar from './Sidebar';
const drawerWidth = 240;




function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header(props) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [Open, setOpen] = React.useState(Boolean(anchorEl));
    const theme = useTheme();



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar color={'inherit'}>
                    <Toolbar>
                        <Sidebar />
                        <Typography variant="h6" className={classes.title}>
                            Math calc
                    </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </div>
    );
}
