import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    const [userMetadata, setUserMetadata] = useState(null)

    useEffect(() => {
        if (user && isAuthenticated) {
            const getUserMetadata = async () => {
                const domain = 'dev-49ka9ni6.eu.auth0.com'

                try {
                    const accessToken = await getAccessTokenSilently({
                        audience: `https://${domain}/api/v2/`,
                        scope: 'read:current_user use:role'
                    })

                    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`

                    const metadataResponse = await fetch(userDetailsByIdUrl, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    })

                    const { user_metadata } = await metadataResponse.json()

                    // console.log(user_metadata)

                    setUserMetadata(user_metadata)
                } catch (e) {
                    console.log(e.message)
                }
            }

            getUserMetadata()
        }
    }, [user, isAuthenticated, getAccessTokenSilently])

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <h3>User Metadata</h3>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                    'No user metadata defined'
                )}
            </div>
        )
    )
}

export default Profile
