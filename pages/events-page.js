import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../components/NavBar/NavBar'
import EventCard from '../components/EventCard/EventCard'
import fetch from 'isomorphic-unfetch'

const EventsPage = ({ events }) => {
    console.log(events)
    return (
        <div>
            <Head>
                <title>FrontEnd</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h1>A list of all events</h1>

            {events ? (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <Link href="/event/[id]" as={`/event/${event.id}`}>
                                <a>
                                    <EventCard event={event} />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading events...</div>
            )}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:6000/events')
    const data = await res.json()
    const listOfEvents = data.payload
    console.log(listOfEvents)

    return {
        props: {
            events: listOfEvents
        }
    }
}
export default EventsPage
