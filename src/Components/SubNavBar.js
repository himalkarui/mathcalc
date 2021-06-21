import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyle = makeStyles((theme) => ({
    link: {
        color: '#3f51b5',
        cursor: 'pointer',
        '& hover': {
            textDecoration: 'underline'
        }
    },
    hr: {
        height: '1px',
        backgroundColor: '#c5c5c5',
        margin: '1.5rem 0 0 0',
    }
}));

export default function SubNavBar(props) {
    const classes = useStyle();
    return (
        <section className="hero" data-v-23847e07>
            <div style={{ padding: '2rem 0.5rem 0rem 0.5rem' }}>
                <div className="container">
                    <h1 style={{ margin: '0px' }} className="subtitle is-uppercase has-text-weight-bold">
                        <Breadcrumbs className="subtitle is-uppercase has-text-weight-bold" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            {
                                props.links ? props.links.map((link, i) => {
                                    return <Link key={i} className={classes.link} to={link.url}>{link.urlName}</Link>
                                }) : <></>
                            }
                            {
                                props.pageTitle ? <Typography component="h1" className="">{props.pageTitle}</Typography>
                                    : <></>
                            }
                        </Breadcrumbs>
                    </h1>
                    {props.txtTitle ? <h1 style={{ marginTop: '1rem' }} >
                        {props.txtTitle}</h1> : <></>}
                </div>
            </div>
            <hr className={classes.hr} />
        </section >
    )
}
