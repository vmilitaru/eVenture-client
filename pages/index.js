import React from 'react'
import Head from 'next/head'

// COMPONENTS
import ButtonGeneral from '../components/Button/Button'
import Countdown from '../components/Countdown/Countdown'
import styles from '../styles/index.module.css'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import Eventcard from '../components/EventCard/EventCard'

import { serverUrl } from '../environment'
import { DateTime } from 'luxon'

function Home({ event }) {
    function convertDate() {
        const dateFromIso = new DateTime.fromISO(
            `${event.date}T${event.time}.000Z`
        )
        const localeDate = dateFromIso.toLocaleString({
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })
        return localeDate
    }

    return (
        <div className={styles.background}>
            <Head>
                <title>Eventure</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.div}>
                <div className={styles.intro}>
                    <Typography variant="h2">
                        Eventure- Develop with our community
                    </Typography>
                    <Typography variant="h3">
                        {/* Develop with our community */}
                    </Typography>
                </div>
                <div className={styles.event}>
                    <div className={styles.eventDetails}>
                        <Eventcard event={event} />
                        /* <img src={event.banner}></img> }
                        <Typography variant="h4">{event.title}</Typography>
                        <Typography variant="h5">
                            {convertDate()}
                        </Typography>{' '}
                        <p className={styles.description}>
                            {event.description}
                        </p>{' '}
                        */
                        <Link href={`/event/${event.id}`}>
                            <ButtonGeneral text={'find out more'} />
                        </Link>
                        {event.date && (
                            <Countdown
                                eventDate={event.date}
                                eventTime={event.time}
                            />
                        )}
                    </div>

                    <img
                        src="SoC-other.jpg"
                        className={styles.img}
                        alt="Cohort 4 on Zoom"
                    />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${serverUrl}/events/date`)
    const { payload } = await res.json()
    const upcomingEvents = payload
    return { props: { event: upcomingEvents[0] } }
}

export default Home
