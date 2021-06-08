import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    curtomAlert: {
        backgroundColor: 'blueviolet',
        color: 'white',
        marginTop: '43px'
    }
}));

export default function CustomSnakbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
      </Button> */}
            <Snackbar open={props.open} autoHideDuration={2000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onBlur={props.handleClose}
                // onClose={props.handleClose}
            >
                <MuiAlert
                    onClose={props.handleClose}
                    elevation={6} severity={'info'} variant="filled">
                    {props.msg}
                </MuiAlert>
            </Snackbar>
        </div>
    );
}
