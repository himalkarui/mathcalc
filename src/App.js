import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from "history";
import './App.css';
import Header from './Components/Header';
import Feedback from './Components/Feedback';
import Home from './Pages/Home/Home';
import Commingsoon from './Components/Commingsoon';
import Finance from './Pages/Finance/Finance';
import Maths from './Pages/Maths/Maths';
import General from "./Pages/General/General";
import Age from "./Pages/General/apps/Age";
import Bmi from "./Pages/General/apps/Bmi";
import AllTools from "./Pages/Tools/AllTools";
import Share from "./Components/Share";
import FileNotFound from "./Components/FileNotFound";
import SimpleInterest from "./Pages/Finance/apps/SimpleInterest";
import CompoundInterest from "./Pages/Finance/apps/CompoundInterest";
import Discount from "./Pages/Finance/apps/Discount";
import Physics from "./Pages/physics/Physics";
import Emcsqr from "./Pages/physics/apps/Emcsqr";
import Graphs from "./Pages/Maths/apps/Graphs";
import Shapes from "./Pages/Maths/apps/Shapes";
import Circle from "./Pages/Maths/apps/shapes/Circle";
import Square from "./Pages/Maths/apps/shapes/Square";
import Rectangle from "./Pages/Maths/apps/shapes/Rectangle";
import Triangle from "./Pages/Maths/apps/shapes/Triangle";
import Ohmslaw from "./Pages/physics/apps/Ohmslaw";
import Lawofgravity from "./Pages/physics/apps/Lawofgravity";
import Faviconconvertor from "./Pages/Tools/Favicon/Faviconconvetor";
import Privacy from "./Pages/Common/Privacy";
import Termsofuse from "./Pages/Common/Termsofuse";
import Percentage from "./Pages/Maths/apps/Percentage";
import Radiandegree from "./Pages/Maths/apps/Radiandegree";
import Singlerulethreedir from "./Pages/Maths/apps/Singlerulethreedir";
import Singleruleinverse from "./Pages/Maths/apps/Singleruleinverse";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    overflow: 'hidden',
  },
}));

function App() {
  const history = createBrowserHistory();
  let currentPath = history.location.pathname;
  if (currentPath === "/") {
    currentPath = "Home";
  }

  const THEME = createMuiTheme({
    typography: {
      fontFamily: 'Noto Sans KR, sans-serif !important'
    }
  });

  const classes = useStyles();

  return (
    <div className="App">
      <MuiThemeProvider theme={THEME}>
        <BrowserRouter>
          {/* Common Pages for All roles */}
          <div className={classes.root}>
            <Header />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/tools/" component={AllTools} />

                <Route exact path="/favicon-converter/" component={Faviconconvertor} />

                <Route exact path="/general" component={General} />
                <Route exact path="/general/age-calculator" component={Age} />
                <Route exact path="/general/bmi-calculator" component={Bmi} />

                <Route exact path="/finance" component={Finance} />
                <Route exact path="/finance/simple-interest" component={SimpleInterest} />
                <Route exact path="/finance/compound-interest" component={CompoundInterest} />
                <Route exact path="/finance/discount" component={Discount} />

                {/* routes for physics */}
                <Route exact path="/physics/" component={Physics} />
                <Route exact path="/physics/eeqlmc2/" component={Emcsqr} />
                <Route exact path="/physics/ohmslaw/" component={Ohmslaw} />
                <Route exact path="/physics/newtons-law-of-gravity/" component={Lawofgravity} />

                {/* routes for maths */}
                <Route exact path="/maths/" component={Maths} />
                <Route exact path="/maths/percentage-calculator/" component={Percentage} />
                <Route exact path="/maths/radians-and-degrees-converter/" component={Radiandegree} />
                <Route exact path="/maths/single-rule-of-three-direct/" component={Singlerulethreedir} />
                <Route exact path="/maths/single-rule-of-three-inverse/" component={Singleruleinverse} />
                <Route exact path="/maths/equations" component={Maths} />
                <Route exact path="/maths/shapes" component={Shapes} />
                <Route exact path="/maths/shapes/circle" component={Circle} />
                <Route exact path="/maths/shapes/square" component={Square} />
                <Route exact path="/maths/shapes/rectangle" component={Rectangle} />
                <Route exact path="/maths/shapes/triangle" component={Triangle} />

                <Route exact path="/maths/concepts" component={Maths} />
                <Route exact path="/maths/graphs" component={Graphs} />

                <Route exact path="/about/" component={Commingsoon} />
                <Route exact path="/share/" component={Share} />
                <Route exact path="/privacy-policy/" component={Privacy} />
                <Route exact path="/terms-of-use/" component={Termsofuse} />
                <Route exact path="/feedback" component={Feedback} />
                <Route path="/" component={FileNotFound} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </div >
  );
}
export default App;