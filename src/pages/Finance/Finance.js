import React from 'react';
import { Grid, Card, Typography, Container } from "@material-ui/core";
import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


const Finance = (props) => {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <Card  >

            <ThemeProvider theme={theme}>
                <Container style={{ height: '50%', position: 'relative' }}>
                    <Typography style={{ textAlign: 'center' }} variant="h2">
                        -------  Coming Sooon ------------
                    </Typography>
                </Container>
            </ThemeProvider>
        </Card >

    );
}

export default Finance;