import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, TextField, Button } from '@material-ui/core';
import { XYPlot, VerticalGridLines, VerticalBarSeries, HorizontalGridLines, LineSeries } from 'react-vis';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    control: {
        padding: theme.spacing(2),
    },
    divcalc: {
        textDecoration: 'none',
        border: '1px solid #e6ecf1',
        margin: '10px',
        padding: '16px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        flexDirection: 'row',
        alignItems: 'center',
        placeSelf: 'stretch',
        color: '#242a31',
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 3px 8px 0 rgb(216 216 216)',
        minWidth: '143px',
    }
}));

export default function Graphs() {
    const [data, SetData] = React.useState([]);
    const viewGraph = () => {
        let limit = 10;
        let d = [];
        for (let i = 0; i < limit; i++) {
            d.push({
                x: i,
                y: Math.pow(i, 2)
            })
        }
        SetData(d);
    }
    React.useEffect(() => {
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <section style={{
                width: '100%', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '0.5rem',
                margin: 'auto',
            }}>
                <h1 style={{
                    display: 'block', fontSize: '26px', lineHeight: '1.2', fontWeight: '800', marginTop: '0px',
                    textTransform: 'capitalize', textAlign: 'center', marginBottom: '1rem',
                }}>Maths calculator</h1>
            </section>

            <Container maxWidth={'md'} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }} className={classes.divcalc}>
                    <span>Y = </span>  <TextField ></TextField>
                    <Button onClick={viewGraph}>View</Button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '3rem' }} className={classes.divcalc}>
                    <XYPlot height={300} width={300}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <VerticalBarSeries data={data} />
                        <LineSeries data={data} />
                    </XYPlot>
                </div>
            </Container>
        </div >
    );
}
