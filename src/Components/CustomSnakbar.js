import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} severity={'warning'} variant="info"  {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    curtomAlert: {
        backgroundColor: 'black',
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
            <Snackbar open={props.open} autoHideDuration={3000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onBlur={props.handleClose}>
                <Alert onClose={props.handleClose} className={classes.curtomAlert}>
                    {props.msg}
                </Alert>
            </Snackbar>
        </div>
    );
}
