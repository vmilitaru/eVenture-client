import Footer from '../Footer/Footer'
import { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

function ConditionedRenderedFooter() {
    const { pathname } = useRouter()
    const { user } = useAuth0()

    return (
        <div>
            {pathname === '/create-event-page' &&
                user &&
                Object.values(user)[0][0] && <Footer />}

            {pathname !== '/create-event-page' && <Footer />}
        </div>
    )
}
export default ConditionedRenderedFooter
