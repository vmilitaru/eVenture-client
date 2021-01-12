import React from 'react'

import ButtonGeneral from '../Button/Button.js'
import { useStyles } from '../NavBar/NavBarMaterialCss'
import Link from 'next/link'
import { useRole } from '../ProtectedRouteAndRoleProvider'



export default function CreateEventButton() {
    const { userRole, isAuthenticated } = useRole()
    const classes = useStyles()

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
