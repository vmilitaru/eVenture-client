import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
    const [userRole, setUserRole] = useState(null)
    const [accessToken, setAccessToken] = useState(null)
    const { pathname } = useRouter()

    async function getUser() {
        if (isAuthenticated) {
            const token = await getAccessTokenSilently()
            const roleAssigned = Object.values(user)[0][0]
            console.log(roleAssigned)
            console.log(userRole)
            setUserRole(roleAssigned)
            setAccessToken(token)
        }
    }

    /* useEffect(() => {
        getUser()
    }, [pathname]) */

    useEffect(() => {
        getUser()
        if (user && pathname === '/create-event-page' && !Object.values(user)[0][0]) {
            window.location.href = '/'
        }
    }, [user])

    return (
        <AuthContext.Provider
            value={{ user, userRole, isAuthenticated, accessToken }}
        >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
