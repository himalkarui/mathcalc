import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Feedback from './Feedback';
import mclogo from '../Assets/images/mathcalcblack.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#ffffffff',

  },
  divLinks: {
    justifyContent: 'space-evenly',
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
    "& a": {
      display: 'block',
      padding: '15px',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footerLink: {
    cursor: 'pointer',
    "&hover:": {
      color: 'blue',
    }
  },
  footer: {
    boxSizing: 'border-box',
    color: '#fff;',
    padding: '0',
    textAlign: 'center'
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div className={classes.divLinks}>
        <a className={classes.footerLink} href="/" target="_blank" style={{ display: 'flex', alignItems: 'center', marginTop: '-5px' }}>
          <img src={mclogo} alt='mathcalc' width={40} height={30} />
          MathCalc</a>
        <a className={classes.footerLink}>Copyright 2021</a>
        <a className={classes.footerLink}> <Feedback /></a>
        <a className={classes.footerLink} href="/privacy-policy/" target="_blank">Privacy Policy</a>
        <a className={classes.footerLink} href="/terms-of-use" target="_blank">Terms of Use</a>
      </div>
    </footer>
  );
}
