import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useStyles } from '../styles/events-page-materialCss'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../components/Loading'
import Typography from '@material-ui/core/Typography'
import ButtonGeneral from '../components/Button/Button'
import EventCard from '../components/EventCard/EventCard'
import styles from '../styles/my-events.module.css'
import EventsList from '../components/EventsList'

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
                console.log(accessToken)

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
        <div className={!events.length > 0 ? styles.empty : null}>
            <Head>
                <title>eVenture</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {events && events.length > 0 ? (
                <>
                    <div className={styles.contrastBackground}>
                        <Typography variant="h2">Attending...</Typography>
                    </div>
                    {/* <div className={classes.eventPage}>
                        {events.map((event) => (
                            <div key={event.id} className={classes.event}>
                                {/* <Link
                                    href="/event/[id]"
                                    as={`/event/${event.event_id}`}
                                >
                                <a className={classes.linkSpecific}>
                                    <EventCard event={event} />
                                </a>
                                {/* </Link>}
                            </div>
                        ))}
                    </div> */}
                    <div className={styles.eventsList}>
                        <EventsList events={events} />
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.contrastBackground}></div>
                    <div className={styles.noEvent}>
                        {/* <img
                            className={styles.image}
                            src="/NoTicketsYet.svg"
                            id="NoTicketsYet"
                            alt="You haven't signed up for any events yet."
                        />
                        <a href="/">
                            <ButtonGeneral
                                style={{
                                    padding: '1rem',
                                    margin: '4rem 1rem 1rem 1rem',
                                    fontSize: '1.2rem'
                                }}
                                text={'Sign up for events here!'}
                            ></ButtonGeneral>
                        </a> */}
                        <img src={'/rocket.png'} />
                        <span className={styles.notFound}>
                            <Typography
                                variant="h1"
                                style={{ padding: '2rem 0 2rem 0' }}
                            >
                                404:
                            </Typography>
                            <Typography
                                variant="h2"
                                style={{ padding: '0', fontSize: '2.5rem' }}
                            >{`Events being attended by you not found... :(`}</Typography>
                        </span>
                    </div>
                </>
            )}
        </div>
    )
}

export default withAuthenticationRequired(MyEventsPage, {
    onRedirecting: () => <Loading />
})
