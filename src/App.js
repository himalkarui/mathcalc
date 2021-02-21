import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory, useLocation, } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Commingsoon from './Components/Commingsoon';
import Calculator from './Pages/Calculator/Calculator';
function App() {

  return (
    <div className="App" style={{ height: '100vh' }}>
      <BrowserRouter>
        {/* Common Pages for All roles */}
        <Header />
        <Switch>
          <Route exact path="/" render={props => <Home {...props}></Home>} />
          <Route exact path="/general" render={props => <Calculator {...props} />} />
          <Route exact path="/scientific" render={props => <Commingsoon {...props} />} />
          <Route exact path="/finance" render={props => <Commingsoon {...props} />} />
          <Route exact path="/life" render={props => <Commingsoon {...props} />} />
          <Route exact path="/algebric" render={props => <Commingsoon {...props} />} />
          <Route exact path="/about" render={props => <Commingsoon {...props} />} />
          <Route exact path="/donate" render={props => <Commingsoon {...props} />} />
          <Route exact path="/feedbacks" render={props => <Commingsoon {...props} />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
