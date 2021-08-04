import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import mclogo from '../Assets/images/mathcalcblack.png';
import { Box, Grid, Chip, Icon, Avatar } from '@material-ui/core';
import VerticalAds from './VerticalAds';
import FeedbackIcon from '@material-ui/icons/Feedback';
import DownloadIcon from '@material-ui/icons/YouTube';
import { Home, Apps, AttachMoney, Functions, ScatterPlot, Accessibility } from '@material-ui/icons';

// share
import {
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,

  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton

} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
  },
  froot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '10px 20px',
  },
  divLinks: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    color: '#fff',
    "& a": {
      display: 'block',
      padding: '15px',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  footerLink: {
    cursor: 'pointer',
    "&hover:": {
      color: 'blue',
    }
  },
  footer: {
    boxSizing: 'border-box',
    color: '#fff;',
    padding: '0',
    textAlign: 'center'
  },
  navfooter: {
    backgroundColor: '#fff',
    boxShadow: '1px 2px 18px rgb(201 203 206)',
    borderRadius: '3px'
  },
  link: {
    color: 'white',
    border: 'navajowhite',
    height: '34px',
    margin: '0px 15px 15px 0px',
    display: 'flex !important',
    minWidth: '120px',
    boxShadow: '0 0px 1px 2px #3273dc',
    borderRadius: '50px',
    backgroundColor: '#3273dc',
    "&hover:": {
      color: '#3298FF !important',
    }
  },
  chips: {
    padding: '5px 10px',
    textAlign: "center"
  },
  icon: {
    backgroundColor: '#3298BF',
    borderRadius: '55px',
    margin: '4px',
    padding: '2px',
    color: 'white'
  },
  share: {
    margin: '3px',
    "& a": {
      boxShadow: '0 3px 4px rgb(0 0 0 / 40%)'
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  const shareUrl = window.location.href;
  const title = 'Mathcalc - One stop web app for all your mathematical calculations and tools for FREE !';

  let urls = [
    { url: '/', urlname: 'Home', icon: <Home className={classes.icon} /> },
    { url: '/general', urlname: 'General', icon: <Accessibility className={classes.icon} /> },
    { url: '/youtube-video-downloader', urlname: 'Youtube dl', icon: <DownloadIcon className={classes.icon} /> },
    { url: '/maths', urlname: 'Mathematics', icon: <Functions className={classes.icon} /> },
    { url: '/numbers', urlname: 'Numbers', icon: null },
    { url: '/tools', urlname: 'Tools', icon: <Apps className={classes.icon} /> },
    { url: '/text-lists', urlname: 'Text and Lists', icon: null },
    { url: '/files', urlname: 'Files', icon: null },
    { url: '/finance', urlname: 'Finance', icon: <AttachMoney className={classes.icon} /> },
    { url: '/physics', urlname: 'Physics', icon: <ScatterPlot className={classes.icon} /> },
    { url: '/feedback', urlname: 'Feedback', icon: <FeedbackIcon className={classes.icon} /> },
  ]

  return (
    <div className={classes.root}>
      <hr style={{
        height: '1px',
        backgroundColor: '#00000012',
      }} />
      <Grid container className={classes.chips}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Box>
            <h1 className="title is-5">Categories</h1>
            <ul itemScope itemType="https://schema.org/SiteNavigationElement" style={{ justifyContent: 'center' }} style={{ padding: '0px' }} className={classes.divLinks}>
              {
                urls.map((url, index) => {
                  return (
                    url.icon ? <li itemProp="name" key={index} >
                      <Chip key={index} color="primary"
                        variant="outlined"
                        icon={url.icon}
                        label={url.urlname} className={classes.link} component="a" href={url.url} clickable />
                    </li> :
                      <li itemProp="name" key={index} >
                        <Chip key={index} color="primary"
                          variant="outlined"
                          avatar={<Avatar style={{ backgroundColor: '#3298dc', fontWeight: 'bolder' }} className={classes.icon}>
                            {
                              url.urlname.substring(0, 1)
                            }
                          </Avatar>}
                          label={url.urlname} className={classes.link} component="a" href={url.url} clickable />
                      </li>
                  )
                })
              }
            </ul>
            <br />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} style={{ display: 'center', justifyContent: 'center' }}>
          <Box>
            <h1 className="title is-5" >Share us !</h1>
            <div className={classes.divLinks} >
              <WhatsappShareButton className={classes.share}
                url={shareUrl}
                title={title}
                separator=" | "
              >
                <WhatsappIcon size='44' />
              </WhatsappShareButton>
              <FacebookShareButton className={classes.share}
                url={shareUrl}
                quote={title}
              >
                <FacebookIcon size='44' />
              </FacebookShareButton>
              <TwitterShareButton className={classes.share}
                url={shareUrl}
                title={title}
                hashtags={['#Mathcalc']}
              >
                <TwitterIcon size='44' />
              </TwitterShareButton>
              <EmailShareButton className={classes.share}
                url={shareUrl}
                title={title}
              >
                <EmailIcon size='44' />
              </EmailShareButton>
            </div>
          </Box>
        </Grid>
      </Grid >
      <hr style={{
        height: '1px',
        backgroundColor: '#00000012',
        margin: '0px'
      }} />
      <footer className={classes.froot} style={{ backgroundColor: '#f3f6fa' }}
        role="complementary" itemScope itemType="https://schema.org/WPFooter">
        <div className={classes.divLinks}>
          <a className={classes.footerLink} href="/" target="_blank" style={{ display: 'flex', alignItems: 'center', marginTop: '-5px' }}>
            <img src={mclogo} style={{ borderRadius: '100%', marginRight: '3px' }} alt='mathcalc' width={30} height={27} />
            © 2021 Mathcalc
          </a>
          <Link className={classes.footerLink} to="/feedback/">Contact Us</Link>
          <a className={classes.footerLink} href="/privacy-policy/" target="_blank">Privacy Policy</a>
          <a className={classes.footerLink} href="/terms-of-use" target="_blank">Terms of Use</a>
          <a className={classes.footerLink} href="/feedback" target="_self">Feedback</a>
        </div>
      </footer>
      <div style={{
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f6fa',
        padding: '0px 0px 2rem 0px',
        flexFlow: 'wrap'
      }}>
        Made with &nbsp;
        <div className="hearten" style={{ width: '20px', height: '20px' }}>
          <svg viewBox="0 0 16 16" fill="red" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.11063 2.98456C2.83534 2.19853 3.82976 1.76562 4.9109 1.76562C5.71904 1.76562 6.45914 2.02112 7.11069 2.52495C7.43945 2.77927 7.73735 3.09041 8 3.45357C8.26254 3.09052 8.56055 2.77927 8.88942 2.52495C9.54086 2.02112 10.281 1.76562 11.0891 1.76562C12.1702 1.76562 13.1648 2.19853 13.8895 2.98456C14.6055 3.7614 15 4.82268 15 5.97304C15 7.15704 14.5588 8.24086 13.6115 9.38396C12.764 10.4065 11.546 11.4445 10.1356 12.6464C9.65398 13.0569 9.10806 13.5222 8.54121 14.0178C8.39146 14.1489 8.19931 14.2211 8 14.2211C7.8008 14.2211 7.60854 14.1489 7.459 14.018C6.89215 13.5223 6.34592 13.0568 5.86409 12.6461C4.45386 11.4444 3.23589 10.4065 2.38844 9.38385C1.44113 8.24086 1 7.15704 1 5.97293C1 4.82268 1.39445 3.7614 2.11063 2.98456Z">
            </path>
          </svg>
        </div>
        &nbsp; for the people of the Knowledge.
      </div>
    </div >
  )
}