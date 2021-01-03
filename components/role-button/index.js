import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { useAuth0 } from '@auth0/auth0-react'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
// const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN

const RoleButton = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    const [clicked, setClicked] = useState(false)
    const [msg, setMsg] = useState('')

    function handleClick() {
        setClicked(!clicked)
    }

    useEffect(() => {
        if (clicked && user) {
            async function getMsg() {
                const accessToken = await getAccessTokenSilently()

                console.log(accessToken)

                const response = await fetch(`${serverUrl}/role`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })

                const result = await response.json()

                setMsg(result.payload.message)

                console.log(result.payload.message)
            }

            getMsg()
        }
    }, [clicked, isAuthenticated, user])

    return (
        <div className="Button">
            <Button color="primary" variant="outlined" onClick={handleClick}>
                Role
            </Button>
            <p>{msg}</p>
        </div>
    )
}

export default RoleButton
