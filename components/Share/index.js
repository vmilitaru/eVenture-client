import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import ShareIcon from '@material-ui/icons/Share'
import { useStyles } from './ShareIconMaterialCSS'
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    EmailIcon
} from 'react-share'

const Sharebuttons = ({ event }) => {
    const shareUrl = `https://eventure.vercel.app/event/${event.id}`

    // `${serverUrl}/event/${event.id}`
    const eventtitle = `eVenture bring you ${event.title}`
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.icon}
            >
                <ShareIcon  />
            </IconButton>

            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <div className="share">
                        <FacebookShareButton
                            url={shareUrl}
                            quote={eventtitle}
                            className="share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="share">
                        <FacebookMessengerShareButton
                            url={shareUrl}
                            appId="3973808456080757"
                            className="share-button"
                        >
                            <FacebookMessengerIcon size={32} round />
                        </FacebookMessengerShareButton>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="share">
                        <TwitterShareButton
                            url={shareUrl}
                            title={event.title}
                            className="share-button"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>

                        {/* <div className="share-count">&nbsp;</div> */}
                    </div>
                </MenuItem>

                <MenuItem>
                    <div className="share">
                        <WhatsappShareButton
                            url={shareUrl}
                            title={event.title}
                            separator=":: "
                            className="share-button"
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>

                        {/* <div className="share-count">&nbsp;</div> */}
                    </div>
                </MenuItem>

                <MenuItem>
                    <div className="share">
                        <LinkedinShareButton
                            url={shareUrl}
                            className="share-button"
                        >
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="share">
                        <EmailShareButton
                            url={shareUrl}
                            subject={event.title}
                            body="body"
                            className="share-button"
                        >
                            <EmailIcon size={32} round />
                        </EmailShareButton>
                    </div>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Sharebuttons

{
    /* <div className="Demo__container">
            <div className="share">
                <FacebookShareButton
                    url={shareUrl}
                    quote={eventtitle}
                    className="share-button"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className="share">
                <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="3973808456080757"
                    className="share-button"
                >
                    <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
            </div>

            <div className="share">
                <TwitterShareButton
                    url={shareUrl}
                    title={event.title}
                    className="share-button"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                 <div className="share-count">&nbsp;</div> 
               /*  </div>

                <div className="share">
                    <WhatsappShareButton
                        url={shareUrl}
                        title={event.title}
                        separator=":: "
                        className="share-button"
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
    
                     <div className="share-count">&nbsp;</div> 
                /* </div>
    
                <div className="share">
                    <LinkedinShareButton url={shareUrl} className="share-button">
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
    
                <div className="share">
                    <EmailShareButton
                        url={shareUrl}
                        subject={event.title}
                        body="body"
                        className="share-button"
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div> 
            </div>  */
}
