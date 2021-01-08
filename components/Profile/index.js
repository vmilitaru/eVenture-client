// imports
import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import css from './Profile.module.css'

// import env
import { auth0Domain } from '../../environment'

// Profile component
const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

    console.log(getAccessTokenSilently())

    return (
        isAuthenticated && (
            <div className={css.profile}>
                <img
                    className={css.picture}
                    src={user.picture}
                    alt={user.name}
                />
                <h2 className={css.name}>{user.email}</h2>
            </div>
        )
    )
}

export default Profile
