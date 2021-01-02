import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { useAuth0 } from '@auth0/auth0-react'

const BACKEND_URL = 'http://localhost:5000'
const DOMAIN = 'dev-49ka9ni6.eu.auth0.com'

const RoleButton = () => {
    const {
        user,
        isAuthenticated,
        getAccessTokenSilently,
        getIdTokenClaims
    } = useAuth0()
    const [clicked, setClicked] = useState(false)
    const [msg, setMsg] = useState('')

    function handleClick() {
        setClicked(!clicked)
    }

    useEffect(() => {
        if (clicked) {
            async function getMsg() {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${DOMAIN}/api/v2/`,
                    scope: 'read:current_user use:role'
                })

                const claims = await getIdTokenClaims()
                // if you need the raw id_token, you can access it
                // using the __raw property
                console.log(claims)

                // console.log(accessToken)

                const response = await fetch(`${BACKEND_URL}/role`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })

                //const result = response.statusText

                //setMsg(result.msg)

                console.log(response)
            }

            getMsg()
        }
    }, [clicked, isAuthenticated])

    return (
        <div className="Button">
            <Button color="primary" variant="outlined" onClick={handleClick}>
                Role
            </Button>
            <p>{/*msg*/}</p>
        </div>
    )
}

export default RoleButton
