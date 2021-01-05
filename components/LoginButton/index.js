import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { clientUrl } from '../../environment'

const LoginButton = () => {
    const { isAuthenticated } = useAuth0()

    if (!isAuthenticated) {
        const { loginWithRedirect } = useAuth0()

        return <button onClick={() => loginWithRedirect()}>Log In</button>
    } else {
        const { logout } = useAuth0()

        return (
            <button onClick={() => logout({ returnTo: clientUrl })}>
                Log Out
            </button>
        )
    }
}

export default LoginButton
