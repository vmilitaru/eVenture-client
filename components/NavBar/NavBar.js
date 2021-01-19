import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useSearchContext } from '../../contexts/search-context'

import IconButton from '@material-ui/core/IconButton'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

import LoginButton from '../LoginButton/index'
import Profile from '../Profile/index'
import Link from 'next/link'
import CreateEventButton from '../CreateButton/index'
import MyEventsButton from '../MyEvents'
import ButtonGeneral from '../Button/Button'

import styles from './NavBar.module.css'
import { useStyles } from './NavBarMaterialCss.js'

const NavBar = () => {
    const { user, isAuthenticated } = useAuth0()
    const [search, setSearchFilter] = useSearchContext()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const classes = useStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        // <div className={styles.container}>
        <nav className={styles.container}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={styles.searchContainer}>
                        <Link
                            variant="h6"
                            //color="textPrimary"
                            href="/"
                            className={classes.link}
                        >
                            <a className={styles.link}>
                                <img
                                    className={styles.logo}
                                    id="logo"
                                    src="/eVenture.png"
                                    alt="logo"
                                />
                            </a>
                        </Link>
                        <div className={styles.searchBar}>
                            <SearchIcon
                                style={{
                                    margin: '0.5rem',
                                    height: '1.25rem'
                                }}
                            />
                            <InputBase
                                className={classes.searchInput}
                                placeholder="Browse Events"
                                onChange={(e) =>
                                    setSearchFilter(e.target.value)
                                }
                                // value="Browse Events"
                            />
                        </div>
                    </div>
                    <div
                        className={
                            user ? styles.buttonsContainer : styles.login
                        }
                    >
                        {isAuthenticated && Object.values(user)[0][0] && (
                            <Link
                                href="/create-event"
                                variant="h6"
                                //color="textPrimary"
                                className={classes.link}
                            >
                                <a className={styles.link}>
                                    <ButtonGeneral
                                        className={classes.button}
                                        text="Create Event"
                                    />
                                </a>
                            </Link>
                        )}
                        {user && (
                            <Link
                                href="/my-events"
                                variant="h6"
                                //color="textPrimary"
                                className={classes.link}
                            >
                                <a className={styles.link}>
                                    <ButtonGeneral
                                        className={classes.button}
                                        text="My Events"
                                    />
                                </a>
                            </Link>
                        )}
                        <LoginButton style={{ borderRadius: '2px' }} />
                        {user && (
                            <>
                                <div>
                                    <div className={styles.profileLogin}>
                                        <Profile />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
        // </div>
    )
}

export default NavBar
