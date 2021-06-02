import React, { useEffect, useState } from "react";
import { Grid, makeStyles, Container } from '@material-ui/core';
import Helmet from 'react-helmet';
// import js , css and iamges
import '../../Assets/favicon/css/stylesfavicon.css';
import covidawarness from '../../Assets/images/covidawarness.gif';
import UHCmillion from '../../Assets/images/UHC-800-million.gif';
import SubNavBar from '../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    ulElem: {
        "& li": {
            listStyleType: 'decimal',
            marginLeft: '20px'
        }
    },
    table: {
        width: '90%',
        "& td": {
            padding: '10px',
            border: '1px solid',
        },
        "& th": {
            backgroundColor: '#59327a',
            border: '1px solid black',
            color: 'white',
            padding: '5px'
        }
    },
}));

export default function CovidTracker(props) {

    const classes = useStyles();
    const [covidData, setCovidData] = useState([]);

    useEffect(() => {

        let share = document.getElementsByClassName('clickable icon');
        if (share.length > 0) {
            share.style.display = 'none';
        };

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.mohfw.gov.in/data/datanew.json", requestOptions)
            .then(response => response.text())
            .then(result => {
                setCovidData(JSON.parse(result));
            })
            .catch(error => console.log('error', error));
    }, [])
    return (
        <React.Fragment>
            <Helmet>
                <title> Covid-19 tracker - mathcalc</title>
                <meta charset="utf-8" />
                <meta name="keywords" content="new disease, viral disease, human coronavirus, viral infection, lungs, respiratory tract, coronavirus, china,Mathcalc tools, free online tools, covid 19 tracker, world covid 19 analysis" />
                <meta data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta data-key="description" name="description" content="in mathcalc covid-19 tracker , you can track covid19 cases in all over the world and in india" />
            </Helmet>
            <br />
            <Container maxWidth={'xl'} >
                <Grid>
                    <Grid item md={9} lg={9} sm={12}>
                        <div className="container box" style={{ fontSize: '1rem', lineHeight: '27px' }}>
                            <SubNavBar
                                pageTitle="Covid 19 Tracker"
                                links={[{
                                    url: "/tools/",
                                    urlName: "Tools"
                                }]}
                            />
                            <div style={{ padding: '1.5rem 0rem' }}>
                                <div className="container">
                                    <h1 className="subtitle is-spaced is-uppercase has-text-weight-bold">
                                        What Is Human Coronavirus? Causes, Symptoms, Treatment And Prevention and Covid 19 tracker</h1>
                                </div>
                            </div>

                            <div className="container">
                                <div className="vucato-shop c2"><strong></strong>
                                    <div>
                                        <figure className="image">
                                            <strong>
                                                <img width='100%' src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" className="image_listical c1" alt="Human Coronavirus" title="Human Coronavirus" data-cl-slideshow="" data-cl-title="Human Coronavirus" data-cl-description="" data-cl-imageid="131808-0" id="rev_content_1" />
                                            </strong>
                                        </figure>
                                    </div>
                                </div>
                                <br />
                                <p>The spread of a new type of coronavirus had fuelled anxiety across the country.
                                Medical researchers believe that this new virus is from the family of SARS-CoV
                                (Severe Acute Respiratory Syndrome Coronavirus) that has caused an epidemic in the year 2003.
                                     They also found out that the virus had spread to humans from animal products or seafood available in the China market. </p>
                                <p><strong></strong></p>
                                <br />
                                <p>The news came to highlight on January 7 after the confirmation of a novel coronavirus by the Chinese authorities. The virus was temporarily named as COVID-19. The World Health Organization (WHO) in coordination with Chinese authorities and worldwide medical experts are finding ways to deal with this novel coronavirus and treat people infected with the virus.</p>
                                <br />
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid item md={6} sm={12} lg={6}>
                                        <figure className="image" style={{ margin: '3px' }}>
                                            <img width="100%" src={covidawarness} alt='covid 19 awarness gif'></img>
                                        </figure>
                                    </Grid>
                                    <Grid item md={6} sm={12} lg={6}>
                                        <figure style={{ margin: '3px' }}>
                                            <img width="100%" src={UHCmillion} alt='800 million people awarness gif'></img>
                                        </figure>
                                    </Grid>
                                </Grid>
                            </div>
                            <hr />
                            <div className={'container'} >
                                <h3 className="title is-3">COVID-19 Statewise Status in INDIA</h3>
                                <div style={{
                                    overflow: 'auto',
                                    fontSize: '14px'
                                }}>
                                    <table className={"table-container " + classes.table}>
                                        <thead>
                                            <tr></tr>
                                            <tr className="row1">
                                                <th rowSpan="2" style={{ width: '5%' }}>S. No.</th>
                                                <th rowSpan="2" style={{ width: '24%' }}>Name of State / UT</th>
                                                <th colSpan="2" style={{ textAlign: 'center', width: '24%' }}>Active Cases*</th>
                                                <th colSpan="2" style={{ textAlign: 'center', width: '24%' }}>Cured/Discharged/Migrated*</th>
                                                <th colSpan="2" style={{ textAlign: 'center', width: '24%' }}>Deaths**</th>
                                            </tr>
                                            <tr className="row2">
                                                <th style={{ width: '12%' }} > Total</th>
                                                <th style={{ width: '12%' }}><span className="mob-hide">Change since yesterday</span><span className="mob-show">Change since<br /> yesterday</span></th>
                                                <th style={{ width: '12%' }}>Cumulative</th><th style={{ width: '12%' }}>Change since yesterday</th>
                                                <th style={{ width: '12%' }}>Cumulative</th><th style={{ width: '12%' }}>Change since yesterday</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                covidData || covidData.length > 0 ? covidData.map((val, i) => {
                                                    return (<tr key={i}>
                                                        <td>
                                                            {i + 1}
                                                        </td>
                                                        <td>{val.state_name === '' ? 'Total' : val.state_name}</td>
                                                        <td>{val.new_active}</td>
                                                        <td>{val.new_active - val.active}</td>
                                                        <td>{val.new_cured}</td>
                                                        <td>{val.new_cured - val.cured}</td>
                                                        <td>{val.new_death}</td>
                                                        <td>{val.new_death - val.death}</td>

                                                    </tr>);
                                                }) : <></>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <hr />
                            <div className="container">
                                <h3 className="title is-3" >
                                    COVID-19 Countrywise Status in the world
                                </h3>
                                <iframe title="covid-19 tracker :: mathcalc" src="https://ourworldindata.org/explorers/coronavirus-data-explorer?zoomToSelection=true&hideControls=false&Metric=Confirmed+cases&Interval=Cumulative&Relative+to+Population=false&Align+outbreaks=false&country=~OWID_WRL" loading="lazy" style={{ width: '100%', height: '600px', border: '0px none' }}></iframe>
                            </div>
                            <br />
                            <div className="container">
                                <div id="mainContent">
                                    <div id="listicalSliderDiv" className="c7">
                                        <section className="listicalSliderContent">
                                            <figure>
                                                <img src="https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Array" title="" className="sliderImg image_listical" id="rev_content_2" />
                                            </figure>
                                        </section>
                                        <br />
                                        <h2 className="title is-5">What Is Coronavirus?</h2>
                                        <p>Coronavirus is a term used for a group of viruses which are mainly found in animals. Human coronavirus is a type of zoonotic disease in which the infection spreads from animals to humans. There are around six coronaviruses identified by scientists to date that affect human beings and cause mild to severe symptoms. However, the recent coronavirus spread in China has not been identified yet.
                                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4369385/" rel="noreferrer" target="_blank">[2]</a></p> <p>The first case of Human coronavirus was found in the year 1960 in a patient suffering from a common cold. The name ‘corona' was given to the virus based on its crown-shaped when viewed from an electron microscope. Such viruses are often harmless and may cause mild respiratory tract infection, especially during the winter season. People often get infected with coronavirus at some point in their lives, get recovered and may get the infection again after a few months.</p>
                                        <p>The <a href="https://www.ncbi.nlm.nih.gov/books/NBK7782/" rel="noreferrer" target="_blank">six types</a> of coronavirus infecting humans are alpha coronavirus (NL63 and 229E), beta coronavirus (HKU1 and OC43). The remaining two SARS-CoV (Severe Acute Respiratory Syndrome Coronavirus) and MERS-CoV (Middle East Respiratory Syndrome Coronavirus) are known for its life-threatening symptoms.</p>
                                    </div>
                                    <br />
                                    <h2 className="title is-5">Causes Of Human Coronavirus Spread</h2>
                                    <p>Human coronavirus often affects the respiratory tract of a person. The infected fluid in the tract gets transmitted to other people during coughing or sneezing. Also, if the infected person sneezes or coughs in the open air without covering their mouth, the virus spreads in the air through the dispersed droplets.
                                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3127101/" rel="noreferrer" target="_blank">[3]</a></p>
                                    <p>The other reasons for the spread of the virus are shanking hands with the infected person, touching the infected object/surface accompanied by touching the nose or mouth simultaneously and touching the patient's excreta in rare cases.</p>
                                    <br />
                                </div>
                                <h2 className="title is-5">
                                    What Are Antibodies? How Do They Help Us Fight COVID-19?
                                </h2>
                                <p>
                                    Antibodies, also known as immunoglobulins are glycoproteins that are naturally produced within the human body by the plasma cells or white blood cells as part of an adaptive immune response against pathogens that are invading the body.
                                    They have the ability to identify a vast range of pathogens and also have a number of clinical applications in the body, considering their most important task is to create autoimmune responses.
                                </p>
                                <br />
                                <h2 className="title is-5">There are five antibody classes which are produced by the body: IgG, IgM, IgA, IgD, and IgE</h2>
                                <p>  The first antibody produced in response to pathogens is IgM, a soluble immunoglobulin that causes strong binding of antibodies to the pathogen during their first encounter. [1] IgG is the second antibody present in an abundant amount that helps neutralise toxins of the pathogens. The third is IgA that triggers an immune response in the mucosa like respiratory lining or gastrointestinal system, along with tears, breast milk and saliva.
                                The fourth antibody produced is IgE that triggers immediate hypersensitivity (type 1 hypersensitivity reaction) in response to inflammatory cytokines produced by allergens or re-exposure to a specific type. The functions of IgD are not clearly understood.
                                </p>
                                <br />
                                <h2 className="title is-5"> Functions Of Antibodies</h2>
                                <p>
                                    Antibodies can recognise millions of pathogens due to genetic recombination, a process in which different gene recombines to form a final gene product that can effectively fight against antigen receptors.
                                </p>
                                <p>
                                    Apart from that, antibodies have multiple functions: neutralising the infectivity of the pathogens; facilitating phagocytosis in which cells called phagocytes ingest the harmful particles such as bacteria or virus within them ; antibody-dependent cellular cytotoxicity (ADCC), an immune mechanism in which the immune cells recognise and kill the target cells or microbes which are coated with antibodies, and complement-mediated lysis of pathogens, an immune mechanism in which the immune system enhances the ability of antibodies and attack pathogens.
                                </p>
                                <br />
                                <h2 className="title is-5">
                                    How To Safely Dispose Of Your COVID-19 Waste And Not Harm The Waste Handlers How Does The Immune System Work?
                                      </h2>
                                <p> The immune system is made up of two types of cells:
                                innate and acquired. Innate immunity is the inborn resistance in our body against pathogens due to genetic or other factors. Acquired or adaptive immunity is the one in which the body acquires immunity against a range of pathogens throughout life.
                                </p>
                                <p> Acquired immunity uses T-cells and B-cells to fight pathogens that have crossed innate immune cells and also make the immunity lasts longer compared to innate immunity. They also remember the pathogens so that the next time when the same pathogens attack, the body can trigger antibodies without any delay and kill them faster. This is the concept of how vaccines work in the body.
                                </p>
                                <br />
                                <h2 className="title is-5">COVID-19 Associated Antibodies</h2>
                                <p>COVID-19 has caused many deaths worldwide due to severe symptoms, especially related to the respiratory system. This makes understanding immunopathology very important to cope with the illness well. As COVID-19 was a novel virus to humans, antibodies response to the infection was not developed first, making it difficult for the body to mark and target this infection, and treat the infection.</p>
                                <p>According to a study, by day 14 after onset of the COVID-19 symptoms, the serum of the patients contain 95-100 per cent IgM or IgG antibodies against the spike proteins of the COVID-19, including antibodies that can neutralise the virus and prevent its replication.
                                 </p>
                                <br />
                                <h2 className="title is-5">COVID-19: Can Oral Rehydration Solution (ORS) Speed Up Recovery From The Infection? </h2>
                                <p>Though the data available on this regard is limited, some findings do suggest that IgG antibodies specific to COVID-19 spike protein play a great role in controlling COVID-19 infection. The presence of IgG antibodies to COVID-19 spike proteins also says about the severity of the infection.
                                This may help in understanding the underlying mechanism of the virus and helps in early diagnosis.
                                A study says that IgM antibodies could be an indicator of early COVID-19 while IgG could be an indicator for past diagnosis and contact tracing.
                                </p>
                                <br />
                                <h2 className="title is-5">COVID-19: Can Breath Holding Exercise Make Lungs Healthier?</h2>
                                <p> Considering the aforementioned facts that antibodies are vital parts of the immune system, we can say that tests related to it such as antibody tests can help diagnose the COVID-19. However,
                                  the tests may not show results if you have current infections as antibodies take around 1-3 weeks to develop if it is a new pathogen like COVID-19</p>

                                <br />
                                <h2 className="title is-5">Symptoms Of Human Coronavirus</h2>
                                <p>NL63 and 229E, HKU1 and OC43 cause flu-like symptoms which range from mild to moderate. On the other hand, MERS and SARS cause severe symptoms. The symptoms of the prior are as follows:
                                  <a href="https://www.ncbi.nlm.nih.gov/books/NBK7782/" rel="noreferrer" target="_blank">[4]</a></p>
                                <ul className={classes.ulElem}>
                                    <li>Runny nose</li>
                                    <li>Sore throat</li>
                                    <li>Cough</li>
                                    <li>Headache</li>
                                    <li>Fever</li>
                                    <li>Sneezing</li>
                                    <li>Fatigue</li>
                                    <br />
                                    <p>People with a weak immune system or who are older have a higher chance of getting infected by the virus and getting serious illnesses like pneumonia or respiratory tract disorder.
                                         The symptoms of MERS and SARS are deadly as they are known to cause severe respiratory problems along with kidney failure, diarrhoea and death of a person.</p>
                                </ul>
                                <br />
                                <h2 className="title is-5">Diagnosis Of Human Coronavirus</h2>
                                <p>Human coronavirus is diagnosed by certain laboratory tests which are as follows:
                                 <a rel="noreferrer" href="https://www.ncbi.nlm.nih.gov/books/NBK92477/">[5]</a></p>
                                <ul className={classes.ulElem}>
                                    <li><strong>Molecular tests:</strong> To find out the signs of active infection.</li>
                                    <li>
                                        <strong>Serology tests:</strong> This test is for surveillance purpose. It is done to detect the antibodies from the previous infection which shows the type of virus a person has been exposed.</li>
                                </ul>
                                <br />
                                <h2 className="title is-5">Treatment Of Human Coronavirus</h2>
                                <p>The exact treatment for human coronavirus has not been discovered yet. Several vaccines to aid the conditions are still under development. However, there are many supportive treatment methods and over-the-counter medicines which can treat its mild-to-moderate symptoms. For example, medicines to treat pain and fever or hot showers to treat sore throat. <a href="https://www.ncbi.nlm.nih.gov/books/NBK92477/" rel="noreferrer" target="_blank">[6]</a></p><div id="div-gpt-ad-1527055403211-0" className="viroolVideo">
                                </div>
                            </div>
                            <div id="slider5" className="listicalSliderContainer" data-slno="6" data-pagetype="0" data-url="articlecontent-pf210735-131808" data-gal-headline="Prevention Of Human Coronavirus" data-gal-desc="Wash hand after sneezing or coughing in it. Cover the mouth before coughing or sneezing If you believe you are infected, avoid clos..." data-gal-src="www.boldsky.com/img/600x100/2020/01/9-1579611792.jpg" />
                            <br />
                            <h2 className="title is-5">Prevention Of Human Coronavirus</h2>
                            <ul className={classes.ulElem}>
                                <li>Wash hand after sneezing or coughing in it.</li>
                                <li>Cover the mouth before coughing or sneezing</li>
                                <li>If you believe you are infected, avoid close contact with people.</li>
                                <li>Avoid eating uncooked meats and eggs.</li>
                                <li>Hydrate yourself all the time.</li>
                                <li>Take medications as soon as the symptoms show up and dont let the condition become severe</li>
                                <li>Avoid smoky areas or smoking.</li>
                                <li>Get proper rest</li>
                                <li>Stay away from crowds</li>
                            </ul>
                        </div>
                    </Grid >
                    <Grid item md={3} lg={3} sm={false}></Grid>
                </Grid>
            </Container>
        </React.Fragment >
    );
}



