import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import LoginButton from '../LoginButton/index'
import Profile from '../Profile/index'
import Link from 'next/link'
import CreateEventButton from '../CreateButton/index'
import MyEventsButton from '../MyEvents'

import styles from './NavBar.module.css'
import { useStyles } from './NavBarMaterialCss.js'
import ButtonGeneral from '../Button/Button'
import { Container } from '@material-ui/core'

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const classes = useStyles()

    const { isAuthenticat, user } = useAuth0()
    const ITEM_HEIGHT = 48

    return (
        <nav>
            <div elevation="0" className={classes.box}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        {/* <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.toolbarTitle}
                        ></Typography> */}
                        <div className={styles.links}>
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
                        </div>
                        {!user ? (
                            <LoginButton />
                        ) : (
                            <>
                                <div>
                                    <div className={styles.profileLogin}>
                                        <Profile />

                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>

                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <CreateEventButton />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <MyEventsButton />
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <LoginButton />
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        </nav>
    )
}

export default NavBar
