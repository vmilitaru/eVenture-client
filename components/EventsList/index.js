import React from 'react'
import { useSearchContext } from '../../contexts/search'

// STYLES
import { useStyles } from '../../styles/events-page-materialCss'
import styles from '../../styles/events.module.css'

// COMPONENTS
import EventCard from '../EventCard/EventCard'

export default function EventsList({ events }) {
    const { search } = useSearchContext()
    const classes = useStyles()

    return (
        <>
            {events ? (
                <div className={classes.eventPage}>
                    {events.map((event) => {
                        if (
                            event.title
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return (
                                <div key={event.id} className={classes.event}>
                                    {/* <Link
                                        className={classes.link}
                                        href="/event/[id]"
                                        as={`/event/${event.id}`}
                                    > */}
                                    {/* <a className={classes.linkSpecific}> */}
                                    <EventCard event={event} />
                                    {/* </a> */}
                                    {/* </Link> */}
                                </div>
                            )
                        }
                    })}
                </div>
            ) : (
                <div>Loading events...</div>
            )}
        </>
    )
}
