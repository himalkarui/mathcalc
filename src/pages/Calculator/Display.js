import React from 'react';
import { Grid, Card, Typography, Container } from "@material-ui/core";
import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


const Display = (props) => {



    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <Card style={{
            height: '50%', position: 'relative', width: '100%', backgroundColor: '#fefefe', borderRadius: '0px',
            padding: '15px', wordBreak: 'break-all'
        }} >

            <ThemeProvider theme={theme}>
                <Container style={{ height: '50%', position: 'relative' }}>
                    <Typography style={{ position: 'absolute', bottom: 0, right: 0 }} variant="h5">
                        <div className="display text-right pr-2 h3 d-md-none d-sm-block pt-5">{props.value}</div>
                    </Typography>
                </Container>
                <Container style={{ height: '50%', position: 'relative' }}>
                    <Typography style={{ position: 'absolute', bottom: 0, right: 0 }} variant="h3">
                        <div className="display text-right pr-2 display-4 d-none d-lg-block pt-4">{props.value}</div>
                        <div className="pr-2 h4" >{props.expression}</div>
                    </Typography>
                </Container>
            </ThemeProvider>
        </Card >

    );
}

Display.defaultProps = {
    expression: '',
    value: '0'
};

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

export default Display;