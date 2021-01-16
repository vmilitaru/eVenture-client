import React from 'react'
import ButtonGeneral from '../Button/Button'
import Typography from '@material-ui/core/Typography'
import styles from './EventDisplay.module.css'

export default function EventDisplay({
    event,
    user,
    deleteEvent,
    convertDate,
    handleClickForTicket,
    setEditing,
    isRegistered,
    availableTickets,
    ticketCount,
    numtickets,
    eventAttendeeCount
}) {
    return (
        <>
            {/* <div className={styles.background}></div> */}
            <article className={styles.mainContainer}>
                <section className={styles.card}>
                    <div className={styles.image}>
                        <img
                            src={event.banner}
                            alt={event.banner}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.titleContainer}>
                        <div className={styles.date}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h3"
                                className={styles.dateText}
                            >
                                {convertDate()}
                            </Typography>
                        </div>
                        <h3 className={styles.title}>{event.title}</h3>
                        <Typography gutterBottom variant="h5" component="h3">
                            <strong>WHERE?:</strong> {event.location}
                        </Typography>
                    </div>
                </section>
                <section className={styles.actionsBar}>
                    <div>
                        {user && Object.values(user)[0][0] && (
                            <>
                                <ButtonGeneral
                                    text={'EDIT'}
                                    onClick={() => {
                                        setEditing(true)
                                    }}
                                />
                                <ButtonGeneral
                                    text={'DELETE'}
                                    onClick={deleteEvent}
                                />
                            </>
                        )}
                    </div>
                    <div>
                        {!isRegistered ? (
                            <ButtonGeneral
                                onClick={() => {
                                    handleClickForTicket()
                                }}
                                style={{ width: '20rem', height: '2.5rem' }}
                                text="REGISTER"
                            />
                        ) : (
                            <>
                                <ButtonGeneral
                                    onClick={() => {
                                        handleClickForTicket()
                                    }}
                                    text="CANCEL TICKET"
                                />
                                <p>You are registered - see you there!</p>
                            </>
                        )}
                    </div>
                </section>
                <section className={styles.details}>
                    <div className={styles.description}>
                        <p>{event.description}</p>
                    </div>
                    <div className={styles.additionalInfo}>
                        <Typography gutterBottom variant="h5" component="h3">
                            {event.speaker}
                        </Typography>

                        {user && Object.values(user)[0][0] && (
                            <p>
                                There are {eventAttendeeCount} booked tickets
                                out of {numtickets}
                            </p>
                        )}
                        {user && !Object.values(user)[0][0] && (
                            <>
                                {availableTickets <= 5 ? (
                                    <p>
                                        There are only {ticketCount} tickets
                                        left for this event!
                                    </p>
                                ) : (
                                    <p>
                                        Hurry up you don't want to miss this one
                                        time opportunity...
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </article>
        </>
    )
}
