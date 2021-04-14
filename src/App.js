import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory, useLocation, } from "react-router-dom";
import { createBrowserHistory } from "history";
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Commingsoon from './Components/Commingsoon';
import Calculator from './Pages/Calculator/Calculator';
import Scientific from './Pages/Scientific/Sceintific';
import Finance from './Pages/Finance/Finance';
import Algebric from './Pages/Algebric/Algebric';
import Formulae from "./Pages/Algebric/apps/Formulae";
import General from "./Pages/General/General";
import Age from "./Pages/General/apps/Age";
import Bmi from "./Pages/General/apps/Bmi";
function App() {

  return (
    <div className="App" style={{ height: '70vh' }}>
      <BrowserRouter>
        <CssBaseline />
        {/* Common Pages for All roles */}
        <Header />
        <Switch>
          <Route exact path="/mathcalc/" render={props => <Home {...props} />} />
          <Route exact path="/mathcalc/general" render={props => <General {...props} />} />
          <Route exact path="/mathcalc/general/age-calculator" render={props => <Age {...props} />} />
          <Route exact path="/mathcalc/general/bmi-calculator" render={props => <Bmi {...props} />} />
          <Route exact path="/mathcalc/scientific" render={props => <Scientific {...props} />} />
          <Route exact path="/mathcalc/finance" render={props => <Finance {...props} />} />
          <Route exact path="/mathcalc/life" render={props => <Commingsoon {...props} />} />

          {/* routes for algebric */}
          <Route exact path="/mathcalc/algebric" render={props => <Algebric {...props} />} />

          <Route exact path="/mathcalc/algebric/formulae" render={props => <Formulae {...props} />} />
          {/* routes for formulas */}
          <Route exact path="/mathcalc/algebric/formulae/age-calculator" render={props => <Algebric {...props} />} />

          <Route exact path="/mathcalc/algebric/equations" render={props => <Algebric {...props} />} />
          <Route exact path="/mathcalc/algebric/concepts" render={props => <Algebric {...props} />} />
          <Route exact path="/mathcalc/algebric/graphs" render={props => <Algebric {...props} />} />

          <Route exact path="/mathcalc/about" render={props => <Commingsoon {...props} />} />
          <Route exact path="/mathcalc/donate" render={props => <Commingsoon {...props} />} />
          <Route exact path="/mathcalc/feedbacks" render={props => <Commingsoon {...props} />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
