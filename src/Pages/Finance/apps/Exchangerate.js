import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button, Card, Container, Typography, Grid, TextField, FormControl, Select, MenuItem, CircularProgress, Backdrop
} from '@material-ui/core';
import SettingIcon from '@material-ui/icons/Settings';
import Helmet from 'react-helmet';
import SubNavBar from '../../../Components/SubNavBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VerticalAds from '../../../Components/VerticalAds';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    divcalc: {
        borderRadius: '12px',
        padding: '1em',
        color: '#314259'
    },
    formelems: {
        minWidth: '243px',
    },
    row: {
        margin: '10px'
    },
    imgcenter: {
        marginLeft: '55px',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));



let objCountry = [
    { Code: "AED", Currency: "UAE Dirham" },
    { Code: "AFN", Currency: "Afghan Afghani" },
    { Code: "ALL", Currency: "Albanian Lek" },
    { Code: "AMD", Currency: "Armenian Dram" },
    { Code: "ANG", Currency: "Netherlands Antillian Guilder" },
    { Code: "AOA", Currency: "Angolan Kwanza" },
    { Code: "ARS", Currency: "Argentine Peso" },
    { Code: "AUD", Currency: "Australian Dollar" },
    { Code: "AWG", Currency: "Aruban Florin	Aru" },
    { Code: "AZN", Currency: "Azerbaijani Manat" },
    { Code: "BAM", Currency: "Bosnia and Herzegovina Mark" },
    { Code: "BBD", Currency: "Barbados Dollar" },
    { Code: "BDT", Currency: "Bangladeshi Taka" },
    { Code: "BGN", Currency: "Bulgarian Lev" },
    { Code: "BHD", Currency: "Bahraini Dinar" },
    { Code: "BIF", Currency: "Burundian Franc" },
    { Code: "BMD", Currency: "Bermudian Dollar" },
    { Code: "BND", Currency: "Brunei Dollar" },
    { Code: "BOB", Currency: "Bolivian Boliviano" },
    { Code: "BRL", Currency: "Brazilian Real	Br" },
    { Code: "BSD", Currency: "Bahamian Dollar	B" },
    { Code: "BTN", Currency: "Bhutanese Ngultru" },
    { Code: "BWP", Currency: "Botswana Pula	Bot" },
    { Code: "BYN", Currency: "Belarusian Ruble	" },
    { Code: "BZD", Currency: "Belize Dollar	Bel" },
    { Code: "CAD", Currency: "Canadian Dollar	C" },
    { Code: "CDF", Currency: "Congolese Franc	D" },
    { Code: "CHF", Currency: "Swiss Franc	Switz" },
    { Code: "CLP", Currency: "Chilean Peso	Chil" },
    { Code: "CNY", Currency: "Chinese Renminbi	" },
    { Code: "COP", Currency: "Colombian Peso	Co" },
    { Code: "CRC", Currency: "Costa Rican Colon" },
    { Code: "CUC", Currency: "Cuban Convertible" },
    { Code: "CUP", Currency: "Cuban Peso" },
    { Code: "CVE", Currency: "Cape Verdean Escu" },
    { Code: "CZK", Currency: "Czech Koruna	Czec" },
    { Code: "DJF", Currency: "Djiboutian Franc" },
    { Code: "DKK", Currency: "Danish Krone" },
    { Code: "DOP", Currency: "Dominican Peso" },
    { Code: "DZD", Currency: "Algerian Dinar" },
    { Code: "EGP", Currency: "Egyptian Pound" },
    { Code: "ERN", Currency: "Eritrean Nakfa" },
    { Code: "ETB", Currency: "Ethiopian Birr" },
    { Code: "EUR", Currency: "Euro	European Union" },
    { Code: "FJD", Currency: "Fiji Dollar	Fiji" },
    { Code: "FKP", Currency: "Falkland Islands Pound" },
    { Code: "FOK", Currency: "Faroese Króna" },
    { Code: "GBP", Currency: "Pound Sterling" },
    { Code: "GEL", Currency: "Georgian Lari" },
    { Code: "GGP", Currency: "Guernsey Pound" },
    { Code: "GHS", Currency: "Ghanaian Cedi" },
    { Code: "GIP", Currency: "Gibraltar Pound" },
    { Code: "GMD", Currency: "Gambian Dalasi" },
    { Code: "GNF", Currency: "Guinean Franc" },
    { Code: "GTQ", Currency: "Guatemalan Quetzal" },
    { Code: "GYD", Currency: "Guyanese Dollar" },
    { Code: "HKD", Currency: "Hong Kong Dollar" },
    { Code: "HNL", Currency: "Honduran Lempira" },
    { Code: "HRK", Currency: "Croatian Kuna" },
    { Code: "HTG", Currency: "Haitian Gourde" },
    { Code: "HUF", Currency: "Hungarian Forint" },
    { Code: "IDR", Currency: "Indonesian Rupiah" },
    { Code: "ILS", Currency: "Israeli New Shekel" },
    { Code: "IMP", Currency: "Manx Pound" },
    { Code: "INR", Currency: "Indian Rupee" },
    { Code: "IQD", Currency: "Iraqi Dinar" },
    { Code: "IRR", Currency: "Iranian Rial" },
    { Code: "ISK", Currency: "Icelandic Króna" },
    { Code: "JMD", Currency: "Jamaican Dollar" },
    { Code: "JOD", Currency: "Jordanian Dinar" },
    { Code: "JPY", Currency: "Japanese Ye" },
    { Code: "KES", Currency: "Kenyan Shilling" },
    { Code: "KGS", Currency: "Kyrgyzstani Som" },
    { Code: "KHR", Currency: "Cambodian Riel" },
    { Code: "KID", Currency: "Kiribati Dollar" },
    { Code: "KMF", Currency: "Comorian Franc" },
    { Code: "KRW", Currency: "South Korean Won	" },
    { Code: "KWD", Currency: "Kuwaiti Dinar" },
    { Code: "KYD", Currency: "Cayman Islands Dollar" },
    { Code: "KZT", Currency: "Kazakhstani Tenge" },
    { Code: "LAK", Currency: "Lao Kip" },
    { Code: "LBP", Currency: "Lebanese Pound" },
    { Code: "LKR", Currency: "Sri Lanka Rupee" },
    { Code: "LRD", Currency: "Liberian Dollar" },
    { Code: "LSL", Currency: "Lesotho Loti" },
    { Code: "LYD", Currency: "Libyan Dinar" },
    { Code: "MAD", Currency: "Moroccan Dirham" },
    { Code: "MDL", Currency: "Moldovan Leu" },
    { Code: "MGA", Currency: "Malagasy Ariary" },
    { Code: "MKD", Currency: "Macedonian Denar" },
    { Code: "MMK", Currency: "Burmese Kyat" },
    { Code: "MNT", Currency: "Mongolian Tögrög" },
    { Code: "MOP", Currency: "Macanese Pataca" },
    { Code: "MRU", Currency: "Mauritanian Ouguiya" },
    { Code: "MUR", Currency: "Mauritian Rupee" },
    { Code: "MVR", Currency: "Maldivian Rufiyaa" },
    { Code: "MWK", Currency: "Malawian Kwacha" },
    { Code: "MXN", Currency: "Mexican Peso" },
    { Code: "MYR", Currency: "Malaysian Ringgit" },
    { Code: "MZN", Currency: "Mozambican Metical" },
    { Code: "NAD", Currency: "Namibian Dollar" },
    { Code: "NGN", Currency: "Nigerian Naira" },
    { Code: "NIO", Currency: "Nicaraguan Córdoba" },
    { Code: "NOK", Currency: "Norwegian Krone" },
    { Code: "NPR", Currency: "Nepalese Rupee" },
    { Code: "NZD", Currency: "New Zealand Dollar" },
    { Code: "OMR", Currency: "Omani Rial" },
    { Code: "PAB", Currency: "Panamanian Balboa" },
    { Code: "PEN", Currency: "Peruvian Sol	Peru" },
    { Code: "PGK", Currency: "Papua New Guinean  Kina" },
    { Code: "PHP", Currency: "Philippine Peso" },
    { Code: "PKR", Currency: "Pakistani Rupee" },
    { Code: "PLN", Currency: "Polish Złoty" },
    { Code: "PYG", Currency: "Paraguayan Guarani" },
    { Code: "QAR", Currency: "Qatari Riyal" },
    { Code: "RON", Currency: "Romanian Leu" },
    { Code: "RSD", Currency: "Serbian Dinar	" },
    { Code: "RUB", Currency: "Russian Ruble" },
    { Code: "RWF", Currency: "Rwandan Franc" },
    { Code: "SAR", Currency: "Saudi Riyal" },
    { Code: "SBD", Currency: "Solomon Islands Dollar" },
    { Code: "SCR", Currency: "Seychellois Rupee" },
    { Code: "SDG", Currency: "Sudanese Pound" },
    { Code: "SEK", Currency: "Swedish Krona" },
    { Code: "SGD", Currency: "Singapore Dollar" },
    { Code: "SHP", Currency: "Saint Helena Pound" },
    { Code: "SLL", Currency: "Sierra Leonean Leone" },
    { Code: "SOS", Currency: "Somali Shilling" },
    { Code: "SRD", Currency: "Surinamese Dollar" },
    { Code: "SSP", Currency: "South Sudanese Pound" },
    { Code: "STN", Currency: "São Tomé and Príncipe Dobra" },
    { Code: "SYP", Currency: "Syrian Pound" },
    { Code: "SZL", Currency: "Eswatini Lilangeni" },
    { Code: "THB", Currency: "Thai Baht" },
    { Code: "TJS", Currency: "Tajikistani Somoni" },
    { Code: "TMT", Currency: "Turkmenistan Manat" },
    { Code: "TND", Currency: "Tunisian Dinar" },
    { Code: "TOP", Currency: "Tongan Paʻanga" },
    { Code: "TRY", Currency: "Turkish Lira" },
    { Code: "TTD", Currency: "Trinidad and Tobago Dollar" },
    { Code: "TVD", Currency: "Tuvaluan Dollar" },
    { Code: "TWD", Currency: "New Taiwan Dollar" },
    { Code: "TZS", Currency: "Tanzanian Shilling" },
    { Code: "UAH", Currency: "Ukrainian Hryvnia" },
    { Code: "UGX", Currency: "Ugandan Shilling	" },
    { Code: "USD", Currency: "United States Dollar" },
    { Code: "UYU", Currency: "Uruguayan Peso	Ur" },
    { Code: "UZS", Currency: "Uzbekistani So'm	" },
    { Code: "VES", Currency: "Venezuelan Bolívar" },
    { Code: "VND", Currency: "Vietnamese Đồng" },
    { Code: "VUV", Currency: "Vanuatu Vatu" },
    { Code: "WST", Currency: "Samoan Tālā	Samoa" },
    { Code: "XAF", Currency: "Central African CFA" },
    { Code: "XCD", Currency: "East Caribbean Dollar" },
    { Code: "XDR", Currency: "Special Drawing " },
    { Code: "XPF", Currency: "CFP Franc	Collectivités" },
    { Code: "YER", Currency: "Yemeni Rial" },
    { Code: "ZAR", Currency: "South African Rand" },
    { Code: "ZMW", Currency: "Zambian Kwacha" },
];

export default function Exchangerate() {
    const [state, setState] = React.useState({
        Amount: '1',
        resAmount: '',
        oneusdFromrate: 0,
        oneusedTorate: 0,
        isResult: false,
    });

    function createData(code, currency, rate) {
        return {
            Code: code,
            Currency: currency,
            Rate: rate
        };
    }

    const [backDropopen, SetBackDropopen] = React.useState(false);

    const [fromCountryRate, setFromCountryRate] = React.useState('INR');
    const [toCountryRate, setToCountryRate] = React.useState('USD');

    const [exchangeRates, setExchangeRates] = React.useState();
    const [tbldata, setTbldata] = React.useState();

    const onClickCalculate = () => {
        if (exchangeRates && exchangeRates.conversion_rates) {
            setState({
                ...state,
                oneusdFromrate: parseFloat(exchangeRates.conversion_rates[fromCountryRate]),
                oneusedTorate: parseFloat(exchangeRates.conversion_rates[toCountryRate]),
                resAmount: state.Amount,
                isResult: true,
            });
        }

        let resultDiv = document.getElementsByClassName('content')[0];
        resultDiv.className = 'content blink_me'
        setTimeout(() => {
            resultDiv.className = 'content';
        }, 1000);
    }

    React.useEffect(() => {
        const getData = () => {
            SetBackDropopen(true);
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            fetch("https://apimathcalc.herokuapp.com/api/v1/feedback/exchange-currate", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setExchangeRates(JSON.parse(result.content));
                    let datares = JSON.parse(result.content).conversion_rates;
                    let exchangeRateData = [];

                    objCountry.map((row) => {
                        exchangeRateData.push(createData(row.Code, row.Currency, datares[row.Code]));
                        return 1;
                    });
                    setTbldata(exchangeRateData);
                    SetBackDropopen(false);
                })
                .catch(error => {
                    console.log('error', error)
                    SetBackDropopen(false);
                });
        }
        getData();
    }, []);


    const onInputChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value, isResult: false
        });
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Backdrop className={classes.backdrop} open={backDropopen}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Helmet>
                <title>Foreign currency convertor online | mathcalc</title>
                <meta name="keywords" content="forein currency convertor, exchange rate ,currency convertor,finance, currency code, daily exchange rate" />
                <meta name="description" content="Convert the foreign currency from one country money to another with latest data" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
            </Helmet>
            <Container maxWidth="xl">
                <SubNavBar
                    pageTitle="Foreign currency convertor"
                    links={[{
                        url: "/finance/",
                        urlName: "Finance"
                    }]}
                />
                <section className="hero">
                    <div style={{ padding: '2rem 0.5rem' }}>
                        <div className="container">
                            <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                Foreign currency convertor ONLINE</h1>
                            <p className="  has-text-grey">
                                Convert the foreign currency from one country money to another with latest data</p>
                        </div>
                    </div>
                </section>
                <div className="container" >
                    <div className="columns" >
                        <div className="column is-8" >
                            <Card elevation={1} className="box" >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <FormControl>
                                            <span><strong>Convert</strong></span>
                                            <TextField className={classes.formelems} onChange={onInputChange}
                                                value={state.Amount}
                                                type="number"
                                                id="Amount" variant="outlined">
                                            </TextField>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <FormControl>
                                            <br />
                                            <Select className={classes.formelems}
                                                id="fromCountryRate"
                                                value={fromCountryRate}
                                                onChange={
                                                    e => {
                                                        setFromCountryRate(e.target.value)
                                                        setState({
                                                            ...state,
                                                            isResult: false
                                                        })
                                                    }
                                                }
                                                variant="outlined"
                                            >
                                                {
                                                    objCountry.map((contry, i) => {
                                                        return (
                                                            <MenuItem key={i} value={contry.Code} name={contry.Currency} >{contry.Currency}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid style={{ margin: '14px 0px 0px 0px' }} item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <br />
                                        <p><strong>TO</strong></p>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <FormControl>
                                            <br />
                                            <Select className={classes.formelems}
                                                id="toCountryRate"
                                                value={toCountryRate}
                                                onChange={
                                                    e => {
                                                        setToCountryRate(e.target.value)
                                                        setState({
                                                            ...state,
                                                            isResult: false
                                                        })
                                                    }
                                                }
                                                variant="outlined"
                                            >
                                                {
                                                    objCountry.map((contry, i) => {
                                                        return (
                                                            <MenuItem key={i} value={contry.Code} name={contry.Currency} >{contry.Currency}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container spacing={2} >
                                    <Grid item >
                                        <Button variant="contained" style={{ fontWeight: 'bolder', letterSpacing: '3px', margin: '5px', padding: '25px', width: '243px' }} className={"button is-info"}
                                            startIcon={<SettingIcon />}
                                            onClick={onClickCalculate}
                                        >Convert</Button>
                                    </Grid>
                                </Grid>
                            </Card>
                        </div>
                        <div className="column is-4" >
                            <Card elevation={1} className="box" >
                                <div className="content" style={{ padding: '10px' }} >
                                    <Typography variant="h6" className={'text-option'}>Result</Typography><br />
                                    {
                                        state.isResult ? <div className={'resultDiv'}>
                                            <span><strong>1 USD</strong> {'= ' + state.oneusdFromrate.toFixed(3) + " " + fromCountryRate}</span><br /><br />
                                            <span><strong>1 USD</strong> {'= ' + state.oneusedTorate.toFixed(3) + " " + toCountryRate}</span><br /><br />
                                            <span><strong>{state.Amount + " " + fromCountryRate}</strong> {'=  '
                                                + parseFloat(state.oneusedTorate * state.Amount / state.oneusdFromrate).toFixed(5) + ' ' + toCountryRate}</span>
                                        </div> : <></>
                                    }
                                </div>
                            </Card>
                        </div>
                    </div>
                    <br />
                </div>
                <Grid>
                    <Grid item sm={12} md={12} lg={8} xl={8}>
                        <Card elevation={1} className="box" >
                            <h2 className="title is-5">Exchange Rates of Countries</h2>
                            <p>Last Updated Date :
                                <strong>{exchangeRates ? exchangeRates.time_last_update_utc.toString() : ''}</strong></p>
                            <br />
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead style={{ backgroundColor: '#dbdbdb' }}>
                                        <TableRow style={{ backgroundColor: '#dbdbdb' }}>
                                            <TableCell>Currency</TableCell>
                                            <TableCell align="right">&nbsp; &nbsp;</TableCell>
                                            <TableCell align="left">Rate</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tbldata && tbldata.map((row, i) => (
                                            <TableRow key={i}>
                                                <TableCell component="th" scope="row">
                                                    {row.Code}
                                                </TableCell>
                                                <TableCell align="right">{row.Currency}</TableCell>
                                                <TableCell align="right">{row.Rate}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                        <br />
                    </Grid>
                    <Grid item sm={12} md={12} lg={4} xl={4}>
                        <VerticalAds />
                    </Grid>
                </Grid>

            </Container>
        </div >
    );
}