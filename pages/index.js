import React from 'react'
import Head from 'next/head'

// COMPONENTS
import ButtonGeneral from '../components/Button/Button'
import Countdown from '../components/Countdown/Countdown'
import styles from '../styles/index.module.css'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'

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
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.div}>
                <div className={styles.intro}>
                    <Typography variant="h2">
                        Develop with our community
                    </Typography>
                    <Typography variant="h3">
                        Checkout our latest event
                    </Typography>
                </div>
                <div className={styles.event}>
                    <div className={styles.eventDetails}>
                        <Typography variant="h3">{event.title}</Typography>
                        <Typography variant="h5">{convertDate()}</Typography>
                        <p>{event.description}</p>
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
                        className={styles.img}
                        src="https://media.newyorker.com/photos/5f414de2840e569c23e39066/2:1/w_2559,h_1279,c_limit/Wright-Panda01.jpg"
                        alt="panda"
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
