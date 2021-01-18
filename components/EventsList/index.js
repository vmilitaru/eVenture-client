import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

// STYLES
import { useStyles } from '../../styles/events-page-materialCss'
import styles from '../../styles/events.module.css'

// COMPONENTS
import Typography from '@material-ui/core/Typography'
import EventCard from '../EventCard/EventCard'
import TextField from '@material-ui/core/TextField'

export default function EventsList({ events }) {
    const [filter, setFilter] = useState('')
    const classes = useStyles()

    return (
        <>
            {/* <div className={styles.search}>
                <TextField
                    placeholder={'Search events...'}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div> */}
            {events ? (
                <div className={classes.eventPage}>
                    {events.map((event) => {
                        if (
                            event.title
                                .toLowerCase()
                                .includes(filter.toLowerCase())
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
