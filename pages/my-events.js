import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useStyles } from './events-page-materialCss'

import EventCard from '../components/EventCard/EventCard'

// ENVIRONMENT
import { serverUrl } from '../environment'

function MyEventsPage() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function getEvents() {
            const response = await fetch(`${serverUrl}/events`)
            const data = await response.json()
            setEvents(data.payload)
        }

        getEvents()
    }, [])
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
                            <Link href="/event/[id]" as={`/event/${event.id}`}>
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
