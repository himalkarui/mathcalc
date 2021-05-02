import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import Commingsoon from './Components/Commingsoon';
import Finance from './Pages/Finance/Finance';
import Maths from './Pages/Maths/Maths';
import General from "./Pages/General/General";
import Age from "./Pages/General/apps/Age";
import Bmi from "./Pages/General/apps/Bmi";
import AllTools from "./Pages/General/AllTools";
import Share from "./Components/Share";
import FileNotFound from "./Components/FileNotFound";
import SimpleInterest from "./Pages/Finance/apps/SimpleInterest";
import CompoundInterest from "./Pages/Finance/apps/CompoundInterest";
import Physics from "./Pages/physics/Physics";
import Emcsqr from "./Pages/physics/apps/Emcsqr";
import Graphs from "./Pages/Maths/apps/Graphs";
import Shapes from "./Pages/Maths/apps/Shapes";
import Circle from "./Pages/Maths/apps/shapes/Circle";
import Square from "./Pages/Maths/apps/shapes/Square";
import Rectangle from "./Pages/Maths/apps/shapes/Rectangle";
import Triangle from "./Pages/Maths/apps/shapes/Triangle";
function App() {
  const history = createBrowserHistory();
  let currentPath = history.location.pathname;
  if (currentPath === "/") {
    currentPath = "Home";
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* Common Pages for All roles */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/all-calculators" component={AllTools} />

          <Route exact path="/general" component={General} />
          <Route exact path="/general/age-calculator" component={Age} />
          <Route exact path="/general/bmi-calculator" component={Bmi} />

          <Route exact path="/finance" component={Finance} />
          <Route exact path="/finance/simple-interest" component={SimpleInterest} />
          <Route exact path="/finance/compound-interest" component={CompoundInterest} />

          {/* routes for physics */}
          <Route exact path="/physics" component={Physics} />
          <Route exact path="/physics/eeqlmc2" component={Emcsqr} />

          {/* routes for maths */}
          <Route exact path="/maths" component={Maths} />
          <Route exact path="/maths/equations" component={Maths} />
          <Route exact path="/maths/shapes" component={Shapes} />
          <Route exact path="/maths/shapes/circle" component={Circle} />
          <Route exact path="/maths/shapes/square" component={Square} />
          <Route exact path="/maths/shapes/rectangle" component={Rectangle} />
          <Route exact path="/maths/shapes/triangle" component={Triangle} />

          <Route exact path="/maths/concepts" component={Maths} />
          <Route exact path="/maths/graphs" component={Graphs} />

          <Route exact path="/about" component={Commingsoon} />
          <Route exact path="/share" component={Share} />
          <Route exact path="/feedbacks" component={Commingsoon} />
          <Route path="/" component={FileNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;