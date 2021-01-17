import React from 'react'
import ButtonGeneral from '../Button/Button'
import Typography from '@material-ui/core/Typography'
import styles from './EventDisplay.module.css'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { useStyles } from './EventDisplayMaterialCSS'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

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
    const classes = useStyles()

    return (
        <>
            <div className={styles.background}>
                <article className={styles.mainContainer}>
                    <section className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img
                                src={event.banner}
                                alt={event.banner}
                                style={{ objectFit: 'cover', width: '100%' }}
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
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h3"
                            >
                                <strong>WHERE?:</strong>
                                {`\n${event.location}`}
                            </Typography>
                        </div>
                    </section>
                    <section className={styles.actionsBar}>
                        <div className={styles.editDelete}>
                            {user && Object.values(user)[0][0] && (
                                <>
                                    {/* <ButtonGeneral
                                    text={'EDIT'}
                                    onClick={() => {
                                        setEditing(true)
                                    }}
                                />
                                <ButtonGeneral
                                    text={'DELETE'}
                                    onClick={deleteEvent}
                                /> */}
                                    <IconButton
                                        className={classes.icons}
                                        aria-label="Edit"
                                        onClick={() => setEditing(true)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        className={classes.icons}
                                        aria-label="Delete"
                                        onClick={deleteEvent}
                                    >
                                        <DeleteForeverIcon />
                                    </IconButton>
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
                                    <p
                                        style={{
                                            display: 'inline',
                                            marginRight: '2rem'
                                        }}
                                    >
                                        You are registered - see you there!
                                    </p>
                                    <ButtonGeneral
                                        onClick={() => {
                                            handleClickForTicket()
                                        }}
                                        style={{
                                            width: '20rem',
                                            height: '2.5rem'
                                        }}
                                        text="CANCEL TICKET"
                                    />
                                </>
                            )}
                        </div>
                    </section>
                    <section className={styles.details}>
                        <div className={styles.description}>
                            {
                                unified()
                                    .use(parse)
                                    .use(remark2react)
                                    .processSync(event.description).result
                            }
                        </div>
                        <div className={styles.additionalInfo}>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h3"
                            >
                                {event.speaker}
                            </Typography>

                            {user && Object.values(user)[0][0] && (
                                <p>
                                    Ticket availability: {eventAttendeeCount}/
                                    {numtickets}
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
                                            Hurry up you don't want to miss this
                                            one time opportunity...
                                        </p>
                                    )}
                                </>
                            )}
                        </div>
                    </section>
                </article>
            </div>
        </>
    )
}
