import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    WeiboShareButton,

    EmailIcon,
    FacebookIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";
import logo from '../Assets/images/mathcalcblack.png';

export default function Share(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const shareUrl = props.url ? props.url : window.location.href;
    const title = props.urlHeader ? props.urlHeader : 'Mathcalc - One stop web app for all your mathematical calculations and tools for FREE !';

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Share"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {
                            props.urlMessaage ? props.urlMessaage : 'Mathcalc - One stop web app for all your mathematical calculations and tools for FREE !'
                        }
                    </DialogContentText>
                    <div className="box share-div">
                        < EmailShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <EmailIcon />
                        </EmailShareButton>
                        < FacebookShareButton
                            url={shareUrl}
                            quote={title}
                        >
                            <FacebookIcon />
                        </FacebookShareButton>
                        < TwitterShareButton
                            url={shareUrl}
                            title={title}
                            hashtags="Mathcalc"
                        >
                            <TwitterIcon />
                        </TwitterShareButton>
                        < WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            separator=" - "
                        >
                            <WhatsappIcon />
                        </WhatsappShareButton>

                        <PinterestShareButton
                            url={shareUrl}
                            title={title}
                            media={`${String(window.location)}/${logo}`}
                        >
                            <PinterestIcon />
                        </PinterestShareButton>

                        < TelegramShareButton
                            url={shareUrl}
                            title={title} >
                            <TelegramIcon />
                        </TelegramShareButton>

                        < LinkedinShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <LinkedinIcon />
                        </LinkedinShareButton>
                        <br />
                        <Typography>
                            Other social media
                        </Typography>
                        <br />
                        < HatenaShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <HatenaIcon />
                        </HatenaShareButton>
                        < InstapaperShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <InstapaperIcon />
                        </InstapaperShareButton>

                        < RedditShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <RedditIcon />
                        </RedditShareButton>

                        < LineShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <LineIcon />
                        </LineShareButton>

                        < LivejournalShareButton
                            url={shareUrl}
                            title={title}
                            description={shareUrl}
                        >
                            <LivejournalIcon />
                        </LivejournalShareButton>

                        < MailruShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <MailruIcon />
                        </MailruShareButton>
                        < OKShareButton
                            url={shareUrl}
                            title={title}
                            image={`${String(window.location)}/${logo}`}
                        ><OKIcon /></OKShareButton>

                        < PocketShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <PocketIcon />
                        </PocketShareButton>

                        < TumblrShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <TumblrIcon />
                        </TumblrShareButton>

                        < WorkplaceShareButton
                            url={shareUrl}
                            title={title}
                        >
                            <WorkplaceIcon />
                        </WorkplaceShareButton>

                        <VKShareButton
                            url={shareUrl}
                            title={title}
                            image={`${String(window.location)}/${logo}`}
                        >
                            <VKIcon />
                        </VKShareButton>

                        <WeiboShareButton
                            url={shareUrl}
                            title={title}
                            image={`${String(window.location)}/${logo}`}
                        >
                            <WeiboIcon />
                        </WeiboShareButton>

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
