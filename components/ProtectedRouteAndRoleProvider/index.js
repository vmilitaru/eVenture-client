import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

const ProtectedRouteAndRoleContext = createContext()

function ProtectedRouteAndRoleProvider({ children }) {
    const { isAuthenticated, user } = useAuth0()
    const [userRole, setUserRole] = useState(null)
    const { pathname } = useRouter()

    async function getUser() {
        if (isAuthenticated) {
            const roleAssigned = Object.values(user)[0][0]
            setUserRole(roleAssigned)
           
        }
    }


    useEffect(() => {
        console.log({user})
        getUser()
        if (user && pathname === '/create-event-page' && !Object.values(user)[0][0]) {
            window.location.href = '/'
        }
    }, [user])

    return (
        <ProtectedRouteAndRoleContext.Provider
            value={{ user, userRole, isAuthenticated }}
        >
            {children}
        </ProtectedRouteAndRoleContext.Provider>
    )
}

const useRole = () => useContext(ProtectedRouteAndRoleContext)

export { ProtectedRouteAndRoleProvider, useRole }
