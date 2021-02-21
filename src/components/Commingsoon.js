import React from 'react';
import { Grid, Card, Typography, Container } from "@material-ui/core";
import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


const Commingsoon = (props) => {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <Card  >
            <ThemeProvider theme={theme}>
                <Container style={{
                    height: '100vh',
                    background: 'linear-gradient(120deg,#98BBE3,#8fa2c9,#1F305E, #fcf7fb)',
                    padding: '153px 0px 0px 0px'
                }}>
                    <Typography style={{ textAlign: 'center', color: 'white' }} variant="h2">
                        Coming Soon !
                    </Typography>
                </Container>
            </ThemeProvider>
        </Card >

    );
}

export default Commingsoon;