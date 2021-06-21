import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import mclogo from '../Assets/images/mathcalcblack.png';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: 'transparent !important',
    marginTop: '25px',
    borderTop: '1px solid #00000012',
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
          <img src={mclogo} style={{ borderRadius: '100%', marginRight: '3px' }} alt='mathcalc' width={30} height={27} />
          Mathcalc</a>
        <Link className={classes.footerLink} to="/feedback/">Contact Us</Link>
        <a className={classes.footerLink} href="/privacy-policy/" target="_blank">Privacy Policy</a>
        <a className={classes.footerLink} href="/terms-of-use" target="_blank">Terms of Use</a>
      </div>
    </footer>
  );
}
