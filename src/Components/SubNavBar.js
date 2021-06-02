import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function SubNavBar(props) {



    return (
        <section className="hero" data-v-23847e07>
            <div style={{ padding: '2rem 0.5rem 0rem 0.5rem' }}>
                <div className="container">
                    <h1 style={{ margin: '0px' }} className="subtitle is-spaced is-uppercase has-text-weight-bold">
                        <Breadcrumbs className="subtitle is-spaced is-uppercase has-text-weight-bold" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            {
                                props.links ? props.links.map((link, i) => {
                                    return <Link key={i} to={link.url}>{link.urlName}</Link>
                                }) : <></>
                            }
                            {
                                props.pageTitle ? <Typography className="has-text-weight-bold">{props.pageTitle}</Typography>
                                    : <></>
                            }
                        </Breadcrumbs>
                    </h1>
                    {props.txtTitle ? <p style={{ marginTop: '1rem' }} className="has-text-letter-spacing-wide has-text-grey">
                        {props.txtTitle}</p> : <></>}
                </div>
            </div>
        </section>
    )
}
