import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'
import { loadCSS } from 'fg-loadcss'

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
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <div className={classes.div}>
                        {' '}
                        <h2>Follow Us</h2>
                        <Link href="https://www.facebook.com/schoolofcode">
                            <Icon className="fab fa-facebook-square" />
                        </Link>
                        <Link href="https://twitter.com/theSchoolOfCode">
                            <Icon className="fab fa-twitter-square" />
                        </Link>
                        <Link href="https://www.linkedin.com/school/school-of-code/">
                            <Icon className="fab fa-linkedin" />
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg">
                            <Icon className="fab fa-youtube" />
                        </Link>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <Link href="mailto:info@schoolofcode.co.uk">
                            <Icon className="fas fa-envelope" />
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'fixed',
        // borderBottom: `3px solid ${theme.palette.divider}`,
        // left: 0,
        bottom: 0
        // width: '100%'
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
    // div: {
    //     display: 'flex',
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center'
    // }
}))
export default Footer
