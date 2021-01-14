import React from 'react'
import Head from 'next/head'

// COMPONENTS
import ButtonGeneral from '../components/Button/Button'
import Countdown from '../components/Countdown/Countdown'
import styles from '../styles/index.module.css'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { useStyles } from '../styles/index'
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
    const classes = useStyles()

    return (
        <div className={styles.background}>
            <Head>
                <title>eVenture</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.div}>
                <div className={styles.intro}>
                    <pic></pic>
                    <Typography variant="h2">
                        eVenture - Develop with our community
                    </Typography>
                    <Typography variant="h3">
                        {/* Develop with our community */}
                    </Typography>
                </div>
                <div className={styles.event}>
                    <div className={styles.eventDetails}>
                        <img src={event.banner}></img>
                        <Typography variant="h4">{event.title}</Typography>
                        <Typography variant="h5">
                            <span
                                style={{
                                    backgroundColor: 'white',
                                    padding: '0vw 0.5vw 0vw 0.5vw'
                                }}
                            >
                                {convertDate()}
                            </span>
                        </Typography>{' '}
                        <p className={styles.description}>
                            {event.description}
                        </p>{' '}
                        <div className={styles.absolutes}>
                            <Link href={`/event/${event.id}`}>
                                <ButtonGeneral text={'find out more'} />
                            </Link>
                            {event.date && (
                                <Countdown
                                    eventDate={event.date}
                                    eventTime={event.time}
                                    className={styles.countdown}
                                />
                            )}
                        </div>
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
