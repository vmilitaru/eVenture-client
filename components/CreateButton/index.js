import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import ButtonGeneral from '../Button/Button.js'
import { useStyles } from '../NavBar/NavBarMaterialCss'
import Link from 'next/link'

export default function CreateEventButton() {
    const { isAuthenticated, getIdTokenClaims } = useAuth0()
    const [userRole, setUserRole] = useState()
    const classes = useStyles()

    async function getUserRole() {
        if (isAuthenticated) {
            const idToken = await getIdTokenClaims()
            const roleAssigned = Object.values(idToken)[1][0]
            console.log(roleAssigned)
            console.log(Object.values(idToken)[1][0])
            setUserRole(roleAssigned)
        }
    }
    getUserRole()

    return (
        <div>
            {isAuthenticated && userRole && (
                <Link href="/create-event-page">
                    <ButtonGeneral
                        className={classes.button}
                        text={'+'}
                        href="/create-event-page"
                        style={{ marginRight: '15px' }}
                    />
                </Link>
            )}
        </div>
    )
}
