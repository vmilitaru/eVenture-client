import React, { forwardRef } from 'react'
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

const Share = forwardRef(({ shareUrl, title, onClick, href }, ref) => {
    return (
        <div className="Demo__container">
            <div className="share">
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="share-button"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className="share">
                <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="521270401588372"
                    className="share-button"
                >
                    <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
            </div>

            <div className="share">
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="share-button"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <div className="share-count">&nbsp;</div>
            </div>

            <div className="share">
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="share-button"
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <div className="share-count">&nbsp;</div>
            </div>

            <div className="share">
                <LinkedinShareButton url={shareUrl} className="share-button">
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

            <div className="share">
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className="share-button"
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </div>
    )
})

export default Share
