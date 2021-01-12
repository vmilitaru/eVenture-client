import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import ButtonGeneral from '../Button/Button.js'
import { useStyles } from '../NavBar/NavBarMaterialCss'

import { clientUrl } from '../../environment'

const LoginButton = () => {
    const { isAuthenticated } = useAuth0()

    const classes = useStyles()

    if (!isAuthenticated) {
        const { loginWithRedirect } = useAuth0()

        return (
            <ButtonGeneral
                className={classes.button}
                onClick={() => loginWithRedirect()}
                text={'Log In'}
            />
        )
    } else {
        const { logout } = useAuth0()

        return (
            <ButtonGeneral
                className={classes.button}
                onClick={() => logout({ returnTo: `${clientUrl}/events-page` })}
                text={'Log Out'}
            />
        )
    }
}

export default LoginButton
