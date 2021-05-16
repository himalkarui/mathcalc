import React from "react";
import { Helmet } from "react-helmet";
import {
  makeStyles,
} from "@material-ui/core";
import Main from "../../Components/Main";


export default function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>
          Mathamatical Calculations || All in one app for all Mathamatical Calculations || MathCalc
        </title>
        <meta
          name="keywords"
          content="One tool for doing all kind of mathamatical calculations"
        />
        <meta
          name="description"
          content="mathcalc is the all in one web app for all kind of mathamatical calculations like general, finance, physics ,mathamatics, quantum physics and a lot "
        />
      </Helmet>
      <Main />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
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
