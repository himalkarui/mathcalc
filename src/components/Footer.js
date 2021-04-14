import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footerLink: {
    textDecoration: 'none !important',
    listStyle: 'none',
    padding: '20px 20px 20px 0px',
    display: 'grid',
    cursor: 'pointer',
    "&hover:": {
      color: 'blue',
    }
  },
  footer: {
    borderTop: '1px solid #dadce0',
    marginTop: '3rem',
    boxSizing: 'border-box',
    flexShrink: '0',
    bottom: '0px',
    left: '0',
    width: '100%',
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '-30px'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <footer className={classes.footer}>
        <ul className={classes.ul}>
          <li className={classes.footerLink}>
            <a href='/mathcalc/'>
              © 2021 MathCalc, Inc</a> </li>
          <li className={classes.footerLink}><a href='/mathcalc/home'>About</a> </li>
          <li className={classes.footerLink}><a href='/mathcalc/feedback' >Feedback</a> </li>
        </ul>
      </footer>
    </div >
  );
}
