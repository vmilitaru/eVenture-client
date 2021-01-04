import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import LoginButton from '../LoginButton/index'

import Profile from '../Profile/index'
import Link from '@material-ui/core/Link'
import { useAuth0 } from '@auth0/auth0-react'
const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const classes = useStyles()

    const { isAuthenticated } = useAuth0()

    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Logo Here
                    </Typography>
                    {/* <img src="../../soclogo.png" alt="logo" /> */}
                    <Link
                        variant="h6"
                        color="textPrimary"
                        href="/"
                        className={classes.link}
                    >
                        Home
                    </Link>
                    <Link
                        href="/events-page"
                        variant="h6"
                        color="textPrimary"
                        className={classes.link}
                    >
                        Events
                    </Link>

                    <Profile />
                    <LoginButton />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 10)
    }
}))
export default NavBar
