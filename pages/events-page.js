import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useStyles } from '../styles/events-page-materialCss'
import { useAuth0 } from '@auth0/auth0-react'
import styles from '../styles/events.module.css'
// COMPONENTS
import Typography from '@material-ui/core/Typography'
import EventCard from '../components/EventCard/EventCard'
import TextField from '@material-ui/core/TextField'

// ENVIRONMENT VARIABLES
import { serverUrl } from '../environment'
import { typography } from '@material-ui/system'

function EventsPage({ events }) {
    const [filter, setFilter] = useState('')
    const classes = useStyles()

    return (
        <div>
            <Head>
                <title>eVenture</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.title}>
                    <Typography variant="h2">Upcoming Events</Typography>
                </div>
                <div className={styles.search}>
                    <TextField
                        placeholder={'Search events...'}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {events ? (
                    <div className={classes.eventpage}>
                        {events.map((event) => {
                            if (
                                event.title
                                    .toLowerCase()
                                    .includes(filter.toLowerCase())
                            ) {
                                return (
                                    <div
                                        key={event.id}
                                        className={classes.event}
                                    >
                                        <Link
                                            className={classes.link}
                                            href="/event/[id]"
                                            as={`/event/${event.id}`}
                                        >
                                            <a className={classes.linkSpecific}>
                                                <EventCard event={event} />
                                            </a>
                                        </Link>
                                    </div>
                                )
                            }
                        })}
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
    const upcomingEvents = payload
    return { props: { events: upcomingEvents } }
}

export default EventsPage
