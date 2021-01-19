// imports
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styles from './Profile.module.css'

// Profile component
const Profile = () => {
    const { user, isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
            <div className={styles.profile}>
                <img
                    className={styles.picture}
                    src={user.picture}
                    alt={user.name}
                />
                {/* <h2 className={styles.name}>{user.name}</h2> */}
            </div>
        )
    )
}

export default Profile
