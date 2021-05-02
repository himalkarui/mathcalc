import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#bfbfbf',
    color: 'white',
    marginTop: '2rem',
    bottom: '0',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footerLink: {
    color: 'white !important',
    textDecoration: 'none !important',
    listStyle: 'none',
    padding: '20px 20px 20px 0px',
    display: 'grid',
    cursor: 'pointer',
    "&hover:": {
      color: 'blue',
    },
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
    <div className={classes.root} >
      <Container className={classes.footer}>
        <ul className={'footer-ul'}>
          <li className={classes.footerLink}>
            <a href='/'>
              MathCalc</a> </li>
          <li className={classes.footerLink}><a href='/home'>About</a> </li>
          <li className={classes.footerLink}><a href='/feedback' >Feedback</a> </li>
        </ul>
      </Container>
    </div >
  );
}
