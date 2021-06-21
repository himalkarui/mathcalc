import React from 'react';
import clsx from 'clsx';
import { Route, Switch, useLocation } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
import './Assets/favicon/css/stylesfavicon.css';
import Header from './Components/Header';
import Feedback from './Components/Feedback';
import Home from './Pages/Home/Home';
// import Commingsoon from './Components/Commingsoon';
import Finance from './Pages/Finance/Finance';
import Maths from './Pages/Maths/Maths';
import General from "./Pages/General/General";
import Age from "./Pages/General/apps/Age";
import Bmi from "./Pages/General/apps/Bmi";
import AllTools from "./Pages/Tools/AllTools";
// import Share from "./Components/Share";
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
import Flamescalc from "./Pages/General/apps/Flamescalc";
import EmiCalc from "./Pages/Finance/apps/EmiCalc";
import Favicongenerator from "./Pages/Tools/Favicon/Favicongenerator";
import Capacitance from "./Pages/physics/apps/Capacitance";
import Inductance from "./Pages/physics/apps/Inductance";
import Kineticenergy from "./Pages/physics/apps/Kineticenergy";
import Time from "./Pages/General/apps/Time";
import Covidtracker from "./Pages/Tools/CovidTracker";
import Emailvalidator from "./Pages/Tools/Emailvalidator";
import Imageeditor from "./Pages/Tools/Imageeditor";
import Generatelistofnums from './Pages/Tools/numbers/Generatelistofnums';
import Binaryconverter from './Pages/Tools/numbers/Binaryconverter';
import Hexadecimalconverter from './Pages/Tools/numbers/Hexadecimalconverter';
import Sortnumbers from './Pages/Tools/numbers/Sortnumbers';
import Numbers from './Pages/Tools/numbers/Numbers';
import Maxminlist from './Pages/Tools/numbers/Maxminlist';
import Filternumbers from './Pages/Tools/numbers/Filternumbers';
import Googleadsensecalc from './Pages/General/apps/Googleadsensecalc';
import Roiadsensecalc from './Pages/General/apps/Roiadsensecalc';
import Cpmroicalc from './Pages/General/apps/Cpmroicalc';
import Textandlist from './Pages/Text/Textandlist';
import Reverselist from './Pages/Text/apps/Reverselist';
import Listrandomizer from './Pages/Text/apps/Listrandomizer';
import Addtexttoeachline from './Pages/Text/apps/Addtexteachline';
import Sortlist from './Pages/Text/apps/Sortlist';
import CountLetters from './Pages/Text/apps/CountLetters';
import Countwords from './Pages/Text/apps/Countwords';
import Countlines from './Pages/Text/apps/Countlines';
import Exchangerate from './Pages/Finance/apps/Exchangerate';
// import Coloriedeficit from './Pages/General/apps/Coloriedeficit';
import Waisttohip from './Pages/General/apps/Waisttohip';
import Matrices from './Pages/Maths/apps/Matrices';
import Matrixadd from './Pages/Maths/apps/Matrix/Matrixadd';
import Matrixsubtract from './Pages/Maths/apps/Matrix/Matrixsubtract';
import Matrixmultiply from './Pages/Maths/apps/Matrix/Matrixmultiply';
import Matrixtrace from './Pages/Maths/apps/Matrix/Matrixtrace';
import Matrixdeterminant from './Pages/Maths/apps/Matrix/Matrixdeterminant';
import Baseconvertor from './Pages/Tools/numbers/Baseconvertor';
import Matrixinverse from './Pages/Maths/apps/Matrix/Matrixinverse';
import Matrixtranspose from './Pages/Maths/apps/Matrix/Matrixtranspose';
import Matrixrank from './Pages/Maths/apps/Matrix/Matrixrank';
import Caseconverter from './Pages/Text/apps/Caseconverter';
import Moorsecodetranslator from './Pages/Tools/Moorsecodetranslator';
import Baseimagegen from './Pages/Tools/Baseimagegen';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'hidden'
  },
}));


function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
}


function App() {
  usePageViews();
  const THEME = createMuiTheme({
    typography: {
      fontFamily: 'Noto Sans KR, sans-serif !important',
    }
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <MuiThemeProvider theme={THEME}>
        {/* Common Pages for All roles */}
        <div className={classes.root}>
          <Header setmOpen={setOpen} />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/tools/" component={AllTools} />
              <Route exact path="/image-base64-generator/" component={Baseimagegen} />
              <Route exact path="/morse-code-translator/" component={Moorsecodetranslator} />
              <Route exact path="/favicon-converter/" component={Faviconconvertor} />
              <Route exact path="/favicon-generator/" component={Favicongenerator} />
              <Route exact path="/covid19-tracker/" component={Covidtracker} />
              <Route exact path="/email-validator/" component={Emailvalidator} />
              <Route exact path="/image-editor/" component={Imageeditor} />
              <Route exact path="/online-image-editor/" component={Imageeditor} />

              <Route exact path="/text-lists/" component={Textandlist} />
              <Route exact path="/reverse-list/" component={Reverselist} />
              <Route exact path="/list-randomizer/" component={Listrandomizer} />
              <Route exact path="/add-text-each-line/" component={Addtexttoeachline} />
              <Route exact path="/sort-list/" component={Sortlist} />
              <Route exact path="/count-letters/" component={CountLetters} />
              <Route exact path="/count-words/" component={Countwords} />
              <Route exact path="/count-lines/" component={Countlines} />
              <Route exact path="/case-converter" component={Caseconverter} />

              <Route exact path="/numbers/" component={Numbers} />
              <Route exact path="/generate-list-numbers/" component={Generatelistofnums} />
              <Route exact path="/base-converter/" component={Baseconvertor} />
              <Route exact path="/binary-converter/" component={Binaryconverter} />
              <Route exact path="/hexadecimal-converter/" component={Hexadecimalconverter} />
              <Route exact path="/sort-numbers/" component={Sortnumbers} />
              <Route exact path="/minimum-maximum-list/" component={Maxminlist} />
              <Route exact path="/filter-numbers/" component={Filternumbers} />

              <Route exact path="/general/" component={General} />
              <Route exact path="/general/waist-to-hip-ratio-calculator" component={Waisttohip} />
              <Route exact path="/general/age-calculator/" component={Age} />
              <Route exact path="/general/bmi-calculator/" component={Bmi} />
              <Route exact path="/general/flames-calculator/" component={Flamescalc} />
              <Route exact path="/general/time-calculator/" component={Time}></Route>
              <Route exact path="/general/google-adsense-calculator/" component={Googleadsensecalc}></Route>
              <Route exact path="/general/cpc-roi-calculator/" component={Roiadsensecalc}></Route>
              <Route exact path="/general/cpm-roi-calculator/" component={Cpmroicalc}></Route>

              <Route exact path="/finance" component={Finance} />
              <Route exact path="/finance/foreign-currency-convertor" component={Exchangerate} />
              <Route exact path="/finance/simple-interest" component={SimpleInterest} />
              <Route exact path="/finance/compound-interest" component={CompoundInterest} />
              <Route exact path="/finance/discount" component={Discount} />
              <Route exact path="/finance/emi-calculator" component={EmiCalc} />

              {/* routes for physics */}
              <Route exact path="/physics/" component={Physics} />
              <Route exact path="/physics/eeqlmc2/" component={Emcsqr} />
              <Route exact path="/physics/ohmslaw/" component={Ohmslaw} />
              <Route exact path="/physics/newtons-law-of-gravity/" component={Lawofgravity} />
              <Route exact path="/physics/capacitance/" component={Capacitance} />
              <Route exact path="/physics/inductance/" component={Inductance} />
              <Route exact path="/physics/kinetic-energy/" component={Kineticenergy} />

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
              <Route exact path="/maths/graphs" component={Graphs} />

              <Route exact path="/maths/matrices" component={Matrices} />
              <Route exact path="/maths/matrices/add" component={Matrixadd} />
              <Route exact path="/maths/matrices/subtract" component={Matrixsubtract} />
              <Route exact path="/maths/matrix/multiplication" component={Matrixmultiply} />
              <Route exact path="/maths/matrix/trace" component={Matrixtrace} />
              <Route exact path="/maths/matrix/determinant" component={Matrixdeterminant} />
              <Route exact path="/maths/matrix/matrix-inverse" component={Matrixinverse} />
              <Route exact path="/maths/matrix/matrix-transpose" component={Matrixtranspose} />
              <Route exact path="/maths/matrix/matrix-rank" component={Matrixrank} />

              <Route exact path="/privacy-policy/" component={Privacy} />
              <Route exact path="/terms-of-use/" component={Termsofuse} />
              <Route exact path="/feedback" component={Feedback} />
              <Route path="/" component={FileNotFound} />
            </Switch>
          </main>
        </div>
      </MuiThemeProvider>
    </div >
  );
}
export default App;