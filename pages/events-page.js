import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useStyles } from './events-page-materialCss'
import { useAuth0} from '@auth0/auth0-react'
// COMPONENTS
import Typography from '@material-ui/core/Typography'
import EventCard from '../components/EventCard/EventCard'

// ENVIRONMENT VARIABLES
import { serverUrl } from '../environment'
import { typography } from '@material-ui/system'

function EventsPage({ events }) {
    //const {user,isAuthenticated}=useAuth()
    // const [events, setEvents] = useState([])

    // useEffect(() => {
    //     async function getEvents() {
    //         const response = await fetch(`${serverUrl}/events`)
    //         const data = await response.json()
    //         setEvents(data.payload)
    //     }

    //     getEvents()
    // }, [])

    const classes = useStyles()

    return (
        <div>
            <Head>
                <title>FrontEnd</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Typography variant="h2">Upcoming Events</Typography>

                {events ? (
                    <div className={classes.eventpage}>
                        {events.map((event) => (
                            <div key={event.id} className={classes.event}>
                                <Link
                                    className={classes.link}
                                    href="/event/[id]"
                                    as={`/event/${event.id}`}
                                >
                                    <a className={classes.linkspecific}>
                                        <EventCard event={event} />
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Loading events...</div>
                )}
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${serverUrl}/events/date`)
    const { payload } = await res.json()
    const chronologicalEvents = payload.sort((a, b) => a.date > b.date)
    return { props: { events: chronologicalEvents } }
}

export default EventsPage
