import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Compress from '../../Assets/icons/Compress';
import SubNavBar from '../../Components/SubNavBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    calcHeader: {
        fontStyle: 'normal',
        fontSize: '22px',
        lineHeight: '39px',
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: '600'
    },
    row: {
        margin: '2px'
    },
    calcContent: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '0px',
        justifyContent: 'center'
    },
}));

export default function Maths() {
    const classes = useStyles();
    let urls = [
        { url: '/maths/shapes/', title: 'Shapes' },
    ];
    return (
        <div className={classes.root}>
            <Container maxWidth={'xl'} >
                <SubNavBar />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <h1 className={classes.calcHeader} >Maths calculator</h1>
                        <div className={classes.calcContent}>
                            {
                                urls.map(ur => {
                                    return (<a href={ur.url} className={'divLink'} >
                                        <Compress style={{
                                            width: '30px',
                                            margin: '0px 16px 0px 16px'
                                        }} /> <span>{ur.title}</span></a>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}></Grid>
                </Grid>
            </Container>
        </div >
    );
}
