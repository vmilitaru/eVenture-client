import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss'
import { useStyles } from './FooterMaterialCss'

const Footer = () => {
    const classes = useStyles()
    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css')
        )
    })

    return (
        <React.Fragment>
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.div}>
                        <Typography variant="h6">Follow Us</Typography>

                        <Link
                            href="https://www.facebook.com/schoolofcode"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon
                                className="fab fa-facebook-square"
                                color="primary"
                            />
                        </Link>

                        <Link
                            href="https://twitter.com/theSchoolOfCode"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon
                                className="fab fa-twitter-square"
                                color="primary"
                            />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/school/school-of-code/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon className="fab fa-linkedin" color="primary" />
                        </Link>

                        <Link
                            href="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon
                                className="fab fa-youtube"
                                color="primary"
                                style={{ display: 'inline' }}
                            />
                        </Link>
                    </div>
                    <div className={classes.div}>
                        <Typography variant="h6">Contact Us</Typography>
                        <div className={classes.icons}>
                            <Link
                                href="mailto:info@schoolofcode.co.uk"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon
                                    className="fas fa-envelope"
                                    color="primary"
                                />
                            </Link>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Footer
