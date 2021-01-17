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
            <div className="Demo__some-network">
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            </div>

            <div className="Demo__some-network">
                <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="521270401588372"
                    className="Demo__some-network__share-button"
                >
                    <FacebookMessengerIcon size={32} round />
                </FacebookMessengerShareButton>
            </div>

            <div className="Demo__some-network">
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>

            <div className="Demo__some-network">
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button"
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>

            <div className="Demo__some-network">
                <LinkedinShareButton
                    url={shareUrl}
                    className="Demo__some-network__share-button"
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

            <div className="Demo__some-network">
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className="Demo__some-network__share-button"
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </div>
    )
})

export default Share
