import NavBar from '../NavBar/NavBar'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

function ConditionedRenderedNavBar() {
    const { pathname } = useRouter()
    const { user } = useAuth0()

    return (
        <div>
            {pathname === '/create-event-page' &&
                user &&
                Object.values(user)[0][0] && <NavBar />}

            {pathname !== '/create-event-page' && <NavBar />}
        </div>
    )
}
export default ConditionedRenderedNavBar
