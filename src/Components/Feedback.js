import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogTitle, Typography, TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomSnakbar from './CustomSnakbar';

const useStyles = makeStyles((theme) => ({
    inputField: {
        flexGrow: 1,
        width: '100%',
        maxWidth: '600px',
        margin: '0.5rem',
        overflow: 'hidden'
    },
}));

export default function Feedback() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [snakOpen, setSnakOpen] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const handlesnackClose = (e) => {
        setSnakOpen(null);
        setSnakMessage(null);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSendClose = () => {
        setOpen(false);
        setSnakOpen(!snakOpen);
        setSnakMessage("Thanks for your feedback")
    }

    React.useEffect(() => {
        let email = document.getElementById('txtEmail');
        if (email) {
            email[0].focus()
        }

    }, []);

    return (
        <div>
            <CustomSnakbar
                open={snakOpen}
                msg={snakMessage}
                handleClose={handlesnackClose}
            />
            <Box onClick={handleClickOpen} >
                Feedback
      </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                PaperProps={{ maxWidth: 'sm', }}
            >
                <DialogTitle style={{ background: 'rgb(84, 110, 122)', color: 'white' }} id="responsive-dialog-title">{"Send Feedback"}</DialogTitle>
                <DialogContent style={{ maxWidth: '330px', minHeight: '65vh' }}>
                    <TextField className={classes.inputField} id="txtEmail" aria-label={'Email'} placeholder={'Email'} required type={'text'} variant="outlined" /><br />
                    <TextField className={classes.inputField} id="txtFeedbakmessage" multiline rows={6}
                        variant={"outlined"} aria-label="Have feedback? We’d love to hear it, but please don’t share sensitive information. Have questions? Try help or support." placeholder={'Have feedback? We’d love to hear it, but please don’t share sensitive information. Have questions? Try help or support.'} /><br />
                    <Typography gutterBottom>
                        We will use the information you give us to help
                        address technical issues and to improve our services  </Typography>
                </DialogContent>
                <DialogActions style={{ borderTop: '1px solid #7e7e7e36', marginTop: '10px' }}>
                    <Button onClick={handleClose} color="default">
                        Cancel
          </Button>
                    <Button onClick={handleSendClose} color="primary" >
                        Send
          </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
