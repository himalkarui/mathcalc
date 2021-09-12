import React, { Suspense, lazy } from 'react';
import clsx from 'clsx';
import { Route, Switch, useLocation } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
import './Assets/favicon/css/stylesfavicon.css';

import Header from './Components/Header';
import Feedback from './Components/Feedback';
import Home from './Pages/Home/Home';
import Loading from './Components/Loading';
import Footer from './Components/Footer';
// import Commingsoon from './Components/Commingsoon';

const Time = lazy(() => import('./Pages/General/apps/Time'));
const Covidtracker = lazy(() => import('./Pages/Tools/CovidTracker'));
const Emailvalidator = lazy(() => import('./Pages/Tools/Emailvalidator'));
const Imageeditor = lazy(() => import('./Pages/Tools/Imageeditor'));
const Generatelistofnums = lazy(() => import('./Pages/Tools/numbers/Generatelistofnums'));
const Binaryconverter = lazy(() => import('./Pages/Tools/numbers/Binaryconverter'));
const Hexadecimalconverter = lazy(() => import('./Pages/Tools/numbers/Hexadecimalconverter'));
const Sortnumbers = lazy(() => import('./Pages/Tools/numbers/Sortnumbers'));
const Numbers = lazy(() => import('./Pages/Tools/numbers/Numbers'));
const Maxminlist = lazy(() => import('./Pages/Tools/numbers/Maxminlist'));
const Filternumbers = lazy(() => import('./Pages/Tools/numbers/Filternumbers'));
const Googleadsensecalc = lazy(() => import('./Pages/General/apps/Googleadsensecalc'));
const Roiadsensecalc = lazy(() => import('./Pages/General/apps/Roiadsensecalc'));
const Cpmroicalc = lazy(() => import('./Pages/General/apps/Cpmroicalc'));
const Textandlist = lazy(() => import('./Pages/Text/Textandlist'));
const Reverselist = lazy(() => import('./Pages/Text/apps/Reverselist'));
const Listrandomizer = lazy(() => import('./Pages/Text/apps/Listrandomizer'));
const Addtexttoeachline = lazy(() => import('./Pages/Text/apps/Addtexteachline'));
const Sortlist = lazy(() => import('./Pages/Text/apps/Sortlist'));
const CountLetters = lazy(() => import('./Pages/Text/apps/CountLetters'));
const Countwords = lazy(() => import('./Pages/Text/apps/Countwords'));
const Countlines = lazy(() => import('./Pages/Text/apps/Countlines'));
const Exchangerate = lazy(() => import('./Pages/Finance/apps/Exchangerate'));
// const Basesfdecode  = lazy(() => import(" Coloriedeficit  = lazy(() => import('./Pages/General/apps/Coloriedeficit'));
const Waisttohip = lazy(() => import('./Pages/General/apps/Waisttohip'));
const Matrices = lazy(() => import('./Pages/Maths/apps/Matrices'));
const Matrixadd = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixadd'));
const Matrixsubtract = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixsubtract'));
const Matrixmultiply = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixmultiply'));
const Matrixtrace = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixtrace'));
const Matrixdeterminant = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixdeterminant'));
const Baseconvertor = lazy(() => import('./Pages/Tools/numbers/Baseconvertor'));
const Matrixinverse = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixinverse'));
const Matrixtranspose = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixtranspose'));
const Matrixrank = lazy(() => import('./Pages/Maths/apps/Matrix/Matrixrank'));
const Caseconverter = lazy(() => import('./Pages/Text/apps/Caseconverter'));
const Moorsecodetranslator = lazy(() => import('./Pages/Tools/Moorsecodetranslator'));
const Baseimagegen = lazy(() => import('./Pages/Tools/Baseimagegen'));
const Filesconverter = lazy(() => import('./Pages/Files/Filesconverter'));
const BasesfEncode = lazy(() => import('./Pages/Files/apps/BasesfEncode'));

const Finance = lazy(() => import('./Pages/Finance/Finance'));

const Maths = lazy(() => import('./Pages/Maths/Maths'));
const General = lazy(() => import("./Pages/General/General"));
const Age = lazy(() => import("./Pages/General/apps/Age"));
const Bmi = lazy(() => import("./Pages/General/apps/Bmi"));
const AllTools = lazy(() => import("./Pages/Tools/AllTools"));
// const Finance  = lazy(() => import( Share  = lazy(() => import("./Components/Share"));
const FileNotFound = lazy(() => import("./Components/FileNotFound"));
const SimpleInterest = lazy(() => import("./Pages/Finance/apps/SimpleInterest"));
const CompoundInterest = lazy(() => import("./Pages/Finance/apps/CompoundInterest"));
const Discount = lazy(() => import("./Pages/Finance/apps/Discount"));
const Physics = lazy(() => import("./Pages/physics/Physics"));
const Emcsqr = lazy(() => import("./Pages/physics/apps/Emcsqr"));
const Graphs = lazy(() => import("./Pages/Maths/apps/Graphs"));
const Shapes = lazy(() => import("./Pages/Maths/apps/Shapes"));
const Circle = lazy(() => import("./Pages/Maths/apps/shapes/Circle"));
const Square = lazy(() => import("./Pages/Maths/apps/shapes/Square"));
const Rectangle = lazy(() => import("./Pages/Maths/apps/shapes/Rectangle"));
const Triangle = lazy(() => import("./Pages/Maths/apps/shapes/Triangle"));
const Ohmslaw = lazy(() => import("./Pages/physics/apps/Ohmslaw"));
const Lawofgravity = lazy(() => import("./Pages/physics/apps/Lawofgravity"));
const Faviconconvertor = lazy(() => import("./Pages/Tools/Favicon/Faviconconvetor"));
const Privacy = lazy(() => import("./Pages/Common/Privacy"));
const Termsofuse = lazy(() => import("./Pages/Common/Termsofuse"));
const Percentage = lazy(() => import("./Pages/Maths/apps/Percentage"));
const Radiandegree = lazy(() => import("./Pages/Maths/apps/Radiandegree"));
const Singlerulethreedir = lazy(() => import("./Pages/Maths/apps/Singlerulethreedir"));
const Singleruleinverse = lazy(() => import("./Pages/Maths/apps/Singleruleinverse"));
const Flamescalc = lazy(() => import("./Pages/General/apps/Flamescalc"));
const EmiCalc = lazy(() => import("./Pages/Finance/apps/EmiCalc"));
const Favicongenerator = lazy(() => import("./Pages/Tools/Favicon/Favicongenerator"));
const Capacitance = lazy(() => import("./Pages/physics/apps/Capacitance"));
const Inductance = lazy(() => import("./Pages/physics/apps/Inductance"));
const Kineticenergy = lazy(() => import("./Pages/physics/apps/Kineticenergy"));
const Basesfdecode = lazy(() => import("./Pages/Files/apps/Basesfdecode"));
const Passwordgenerator = lazy(() => import("./Pages/Tools/Passwordgenerator"));
const Imagecompressor = lazy(() => import('./Pages/Files/apps/Imagecompressor'));
const Zipfiles = lazy(() => import("./Pages/Files/apps/Zipfiles"));
const Ytvideo = lazy(() => import("./Pages/videodo/Ytvideo"));
const Imagetopdf = lazy(() => import("./Pages/Files/apps/Imagetopdf"));
const Randomnumgen = lazy(() => import("./Pages/Maths/apps/Randomnumgen"));
const Power = lazy(() => import("./Pages/physics/apps/Power"));
const Weight = lazy(() => import("./Pages/physics/apps/Weight"));
const Pressure = lazy(() => import("./Pages/physics/apps/Pressure"));
const Frequency = lazy(() => import("./Pages/physics/apps/Frequency"));
const Dayofweek = lazy(() => import("./Pages/General/apps/Dayofweek"));
const Colorconverter = lazy(() => import("./Pages/Tools/Colorconverter"));

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
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#fff',
      },
    },
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
            <Suspense fallback={<Loading />}>
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
                <Route exact path="/random-password-generator/" component={Passwordgenerator} />
                <Route exact path="/color-converter/" component={Colorconverter} />

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
                <Route exact path="/general/weekday/" component={Dayofweek}></Route>

                <Route exact path="/finance" component={Finance} />
                <Route exact path="/finance/foreign-currency-convertor" component={Exchangerate} />
                <Route exact path="/finance/simple-interest" component={SimpleInterest} />
                <Route exact path="/finance/compound-interest" component={CompoundInterest} />
                <Route exact path="/finance/discount" component={Discount} />
                <Route exact path="/finance/emi-calculator" component={EmiCalc} />

                {/* routes for physics */}
                <Route exact path="/physics" component={Physics} />
                <Route exact path="/physics/eeqlmc2" component={Emcsqr} />
                <Route exact path="/physics/ohmslaw" component={Ohmslaw} />
                <Route exact path="/physics/newtons-law-of-gravity" component={Lawofgravity} />
                <Route exact path="/physics/capacitance" component={Capacitance} />
                <Route exact path="/physics/inductance" component={Inductance} />
                <Route exact path="/physics/kinetic-energy" component={Kineticenergy} />
                <Route exact path="/physics/power" component={Power} />
                <Route exact path="/physics/weight" component={Weight} />
                <Route exact path="/physics/pressure" component={Pressure} />
                <Route exact path="/physics/frequency" component={Frequency} />

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

                <Route exact path="/random-number-generator" component={Randomnumgen} />

                {/* files calc */}
                <Route exact path="/files" component={Filesconverter} />
                <Route exact path="/image-to-pdf" component={Imagetopdf} />
                <Route exact path="/zip-files" component={Zipfiles} />
                <Route exact path="/image-size-reducer" component={Imagecompressor} />
                <Route exact path="/base64-encode" component={BasesfEncode} />
                <Route exact path="/base64-decode" component={Basesfdecode} />

                <Route exact path="/youtube-video-downloader" component={Ytvideo} />

                <Route exact path="/privacy-policy" component={Privacy} />
                <Route exact path="/terms-of-use" component={Termsofuse} />
                <Route exact path="/feedback" component={Feedback} />
                <Route path="/" component={FileNotFound} />
              </Switch>
            </Suspense>
            <Footer />
          </main>
        </div>
      </MuiThemeProvider>
    </div >
  );
}
export default App;