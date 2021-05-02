import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, } from '@material-ui/core';
import Forward from '../../Assets/icons/Forward';
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
    resultDiv: {
        padding: '20px 0',
        marginBottom: '10px',
        borderRadius: '4px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '34px',
        color: '#314259',
        '& > span': {
            marginLeft: '8px',
            color: '#1678fb'
        },
    }
}));
export default function General() {
    const classes = useStyles();
    let arrUrls = [
        { urlname: 'age calculator', url: '/general/age-calculator', desc: 'To calculate age or date' },
        { urlname: 'bmi calculator', url: '/general/bmi-calculator', desc: 'To calculate your BMI' },
    ];
    return (
        <div className={classes.root}>
            <Container maxWidth={'xl'} >
                <SubNavBar />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item lg={8} md={8} sm={12}>
                        <h1 className={classes.calcHeader} >General Calculator</h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '0px', justifyContent: 'center' }}>
                            {
                                arrUrls.map((ur, i) => {
                                    return (<li className="ak39fa-0 bhAFtM" key={i}>
                                        <div className="ojwc4z-0 jkSeLq">
                                            <a className="sc-1bu7qfl-0 lfMGmO ojwc4z-2 kVIQfP" href={ur.url}>
                                                {ur.urlname}</a>
                                            <div className="sc-1gyxcpm-0 csDfHB ojwc4z-4 dOHSmX" style={{ width: '32px', height: '32px' }}>
                                                <Compress />
                                            </div>
                                            <div className="ojwc4z-1 jgylRt">
                                                <div className="sc-1gyxcpm-0 csDfHB" style={{ width: '24px', height: '24px' }}>
                                                    <Forward />
                                                </div></div><p className="ojwc4z-5 jZEeUz">
                                                {ur.desc}
                                            </p>
                                        </div>
                                    </li>)
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={false}>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
