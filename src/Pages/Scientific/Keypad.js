import React from 'react';
import PropTypes from 'prop-types';
import {
    Button, withStyles, makeStyles, Card, CssBaseline, Typography, Grid, Paper,
    useTheme, useMediaQuery
} from '@material-ui/core';
import { BackspaceOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    keypadRow: {
        overflow: 'hidden',
        height: '60px',
        width: '100%'
    }
}));

const CalcButton = withStyles({
    root: {
        color: '#5e5e5f',
        width: '25%',
        border: '1px solid #ded4d4',
        fontSize: '26px',
        fontStyle: 'bold',
        backgroundColor: '#f3f3f3',
        borderRadius: '0px',
        margin: '0px'
    },

})((props) => <Button color="default" {...props} />);

const Keypad = (props) => {

    const classes = useStyles();

    const handleOnDigit = (e) => {
        debugger;
        props.onDigit(e.currentTarget.value);
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
    const isLaptop = useMediaQuery(theme.breakpoints.down('md'));


    return (

        // <Card elevation={0} style={{
        //     borderRadius: '0px', textAlign: 'center', marginTop: '2px', position: 'relative', bottom: '0',
        //     width: isMobile  ? '100%' : '50%'
        // }}>
        <Card elevation={0} style={{
            position: 'relative', width: '100%', backgroundColor: '#fefefe', bottom: '0',
            borderRadius: '0px',
        }}>
            <div className={classes.keypadRow}>
                {/* <CalcButton style={{ backgroundColor: '#ececec' }} value="clear-all" onClick={props.onClearAll}>CE</CalcButton> */}
                <CalcButton style={{ backgroundColor: '#ececec' }} value="clear" onClick={props.onClear}>CE</CalcButton>
                <CalcButton style={{ backgroundColor: '#ececec' }} value="backspace" onClick={props.onDelete}>⌫ </CalcButton>
                <CalcButton style={{ backgroundColor: '#ececec' }} value="percentage" onClick={props.onPercentage}>
                    %
                </CalcButton>
                <CalcButton style={{ backgroundColor: '#3a4958', color: '#a4b3c3' }} value="/" onClick={props.onDivide}>&divide;</CalcButton>
            </div>
            <div className={classes.keypadRow}>
                <CalcButton value="7" onClick={handleOnDigit}>7</CalcButton>
                <CalcButton value="8" onClick={handleOnDigit}>8</CalcButton>
                <CalcButton value="9" onClick={handleOnDigit}>9</CalcButton>
                <CalcButton style={{ backgroundColor: '#3a4958', color: '#a4b3c3' }} value="*" onClick={props.onMultiply}>&times;</CalcButton>
            </div>
            <div className={classes.keypadRow}>
                <CalcButton value="4" onClick={handleOnDigit}>4</CalcButton>
                <CalcButton value="5" onClick={handleOnDigit}>5</CalcButton>
                <CalcButton value="6" onClick={handleOnDigit}>6</CalcButton>
                <CalcButton style={{ backgroundColor: '#3a4958', color: '#a4b3c3' }} value="-" onClick={props.onSubtract}>&minus;</CalcButton>
            </div>
            <div className={classes.keypadRow}>
                <CalcButton value="1" onClick={handleOnDigit}>1</CalcButton>
                <CalcButton value="2" onClick={handleOnDigit}>2</CalcButton>
                <CalcButton value="3" onClick={handleOnDigit}>3</CalcButton>
                <CalcButton style={{ backgroundColor: '#3a4958', color: '#a4b3c3' }} value="+" onClick={props.onAdd}>&#43;</CalcButton>
            </div>
            <div className={classes.keypadRow}>
                <CalcButton value="±" onClick={props.onToggleSign}>±</CalcButton>
                <CalcButton value="0" onClick={handleOnDigit}>0</CalcButton>
                <CalcButton value="." onClick={props.onDecimalPoint}>.</CalcButton>
                <CalcButton style={{ color: 'white', backgroundColor: '#dcbc11' }} value="=" onClick={props.onEquals}>=</CalcButton>
            </div>
        </Card>

    );
};

Keypad.defaultProps = {
    onDigit: digit => alert(digit),
    onClear: () => alert('clear'),
    onClearAll: () => alert('clear-all'),
    onDelete: () => alert('delete'),
    onAdd: () => alert('add'),
    onEquals: () => alert('equals'),
    onDecimalPoint: () => alert('.'),
    onSubtract: () => alert('subtract'),
    onToggleSign: () => alert('+/-'),
    onDivide: () => alert('/'),
    onMultiply: () => alert('*'),
    onPercentage: () => alert('%')

};

Keypad.propTypes = {
    onDigit: PropTypes.func,
    onClear: PropTypes.func,
    onClearAll: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onEquals: PropTypes.func,
    onDecimalPoint: PropTypes.func,
    onSubtract: PropTypes.func,
    onDivide: PropTypes.func,
    onMultiply: PropTypes.func,
    onToggleSign: PropTypes.func,
    onPercentage: PropTypes.func
};

export default Keypad;