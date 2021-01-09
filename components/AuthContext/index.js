import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const AuthContext = createContext()

function AuthProvider({ children }) {
    const {
        isAuthenticated,
        getIdTokenClaims,
        getAccessTokenSilently,
        user,
    } = useAuth0()
    const [userRole, setUserRole] = useState(null)
    const [userProfile, setUserProfile] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    
    

    async function getUser() {
        try {
            if (isAuthenticated) {
                const idToken = await getIdTokenClaims()
                console.log(idToken)
                const token = await getAccessTokenSilently()
                const roleAssigned = Object.values(idToken)[1][0]
                setUserRole(roleAssigned)
                setUserProfile(user)
                setAccessToken(token)
            } else {
                setUserRole(null)
                setUserProfile(null)
                setAccessToken(null)
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getUser()
    }, [user])

    
    return (
        <AuthContext.Provider
            value={{ userProfile, userRole, isAuthenticated, accessToken }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
