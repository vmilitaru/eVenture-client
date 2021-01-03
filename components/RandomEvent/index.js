import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const BACKEND_URL = 'http://localhost:5000'

const RandomEvent = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    const [event, setEvent] = useState(null)

    // console.log('line8')

    useEffect(() => {
        if (user && isAuthenticated) {
            async function getEvent() {
                // const domain = 'dev-49ka9ni6.eu.auth0.com'

                const accessToken = await getAccessTokenSilently({
                    audience: `localhost:5000`,
                    scope: 'read:events'
                })

                const response = await fetch(`${BACKEND_URL}/protected/1`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })

                const result = await response.json()

                console.log(result)

                setEvent(result)
            }

            getEvent()
        }
    }, [user, isAuthenticated])

    return <div>hello</div>
}

export default RandomEvent
