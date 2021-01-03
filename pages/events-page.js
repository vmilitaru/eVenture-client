import Head from 'next/head'
import Link from 'next/link'

import NavBar from '../components/NavBar/NavBar'
import EventCard from '../components/EventCard/EventCard'
import fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'
function EventsPage() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function getEvents() {
            const response = await fetch(`http://localhost:5000/events`)
            const data = await response.json()
            console.log(data.payload)
            setEvents(data.payload)
        }

        getEvents()
    }, [])

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

// export async function getServerSideProps() {
//     const res = await fetch('http://localhost:5000/events')
//     // const data = await res.json()
//     // const listOfEvents = data.payload
//     console.log(res)

//     return ()
// }
export default EventsPage
