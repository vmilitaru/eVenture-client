import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import style from './LoginMaterial.module.css'
import ButtonGeneral from '../Button/Button.js'
import { useStyles } from './LoginMaterialCss'

import { clientUrl } from '../../environment'

const LoginButton = () => {
    const { isAuthenticated } = useAuth0()

    const classes = useStyles()

    if (!isAuthenticated) {
        const { loginWithRedirect } = useAuth0()

        return (
            <ButtonGeneral
                className={style.button}
                onClick={() => loginWithRedirect()}
                text={'LOG IN'}
            />
        )
    } else {
        const { logout } = useAuth0()

        return (
            <ButtonGeneral
                onClick={() => logout({ returnTo: `${clientUrl}/` })}
                text={'LOG OUT'}
            />
        )
    }
}

export default LoginButton
