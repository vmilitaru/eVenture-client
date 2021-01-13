import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useStyles } from '../styles/events-page-materialCss'
import { useAuth0 } from '@auth0/auth0-react'

import EventCard from '../components/EventCard/EventCard'

// ENVIRONMENT
import { serverUrl } from '../environment'

function MyEventsPage() {
    const { user, getAccessTokenSilently } = useAuth0()
    console.log(user)
    const [events, setEvents] = useState([])

    useEffect(() => {
        if (user) {
            async function getTicketsByUser() {
                const accessToken = await getAccessTokenSilently()

                const response = await fetch(
                    `${serverUrl}/prot/tickets?email=${user.email}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }
                )

                const data = await response.json()
                setEvents(data.payload)
            }

            getTicketsByUser()
            console.log(events)
        }
    }, [user])
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>FrontEnd</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>A list of all events</h1>

            {events ? (
                <div className={classes.eventpage}>
                    {events.map((event) => (
                        <div key={event.id} className={classes.event}>
                            <Link
                                href="/event/[id]"
                                as={`/event/${event.event_id}`}
                            >
                                <a>
                                    <EventCard event={event} />
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading events...</div>
            )}
        </div>
    )
}

export default MyEventsPage
