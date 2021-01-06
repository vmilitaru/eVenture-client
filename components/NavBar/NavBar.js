import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

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

import styles from './NavBar.module.css'
import { useStyles } from './NavBarMaterialCss.js'
import ButtonGeneral from '../Button/Button'

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
        <div>
            <React.Fragment>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.toolbarTitle}
                        ></Typography>
                        <img
                            className={styles.logo}
                            id="logo"
                            src="/soc.png"
                            alt="logo"
                        />
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

                        {/* functionality is needed for when logged in */}
                        {/* <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onHover={handleClose}>
                                My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu> */}
                        <Profile />
                        <LoginButton />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    )
}

export default NavBar
