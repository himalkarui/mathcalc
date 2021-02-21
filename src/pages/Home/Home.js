import React from "react";
import useEffect from "react";

import {
  AppBar,
  makeStyles,
  Container,
  Grid,
  withStyles,
  LinearProgress,
  Toolbar,
} from "@material-ui/core";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Zoom } from "@material-ui/core/Zoom";
import Calculator from '../Calculator/Calculator';

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <>
        <Calculator />
      </>
    </React.Fragment>
  );
}

export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <title>
          Contact Tracing Tool | Real-Time Wellness Monitoring | Daily Assesment
          and Hygine score | CODE-9 Technologies
        </title>
        <meta
          name="keywords"
          content="Contact tracing tool,
          wellness assesment tool, daily wellness assesment,
          employee wellness assesment and monitoring tool, Real-time wellness monitoring "
        />
        <meta
          name="description"
          content="CODE-9 is a contact tracing and daily wellness assessment monitoring tool that helps your organization to track the health and wellness of your employee and customers when you when you resume work and ensure a safe working environment. Real-time dashboard reporting, daily wellness assessment, safety audit and hand hygiene verification are some of the prominent features of our tool."
        />
      </div>
      <Calculator />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#FFFFFF",
  },
  cardRoot: {
    display: "flex",
    marginBottom: 12,
  },

  iconColor: {
    color: "#000000",
  },
  logo: {
    height: 44,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  overviewPaper: {
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: "#ffffff",
    marginBottom: 12,
    background: "#e2edfb",
  },

  mt_10: {
    marginTop: 10,
  },
  scrollUp: {
    position: "fixed",
    bottom: 48,
    color: "white",
    right: 48,
    zIndex: 1500,
    background: "#2D88FC",
    borderRadius: 9,
    width: 48,
    height: 48,
  },
  toolbar: {
    minHeight: 0,
  },
  appBarLight: {
    background: "white",
  },
  appBar: {
    background: "#ffffff",
    boxShadow: "none",
  },
}));
