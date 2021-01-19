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
                        <Typography variant="h3" className={styles.title}>
                            {event.title}
                        </Typography>
                        <div className={styles.location}>
                            <Typography variant="h5">
                                <strong>WHERE?:</strong>
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h3"
                            >
                                {/* <strong>WHERE?:</strong> */}
                                {`\n${event.location}`}
                            </Typography>
                        </div>
                    </div>
                </section>
                <section className={styles.actionsBar}>
                    <div className={styles.editDelete}>
                        {user && Object.values(user)[0][0] && (
                            <>
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
                            ticketCount < numtickets ? (
                                <ButtonGeneral
                                    onClick={() => {
                                        handleClickForTicket()
                                    }}
                                    style={{ width: '20rem', height: '2.5rem' }}
                                    text="REGISTER"
                                />
                            ) : (
                                <ButtonGeneral
                                    style={{
                                        width: '20rem',
                                        height: '2.5rem',
                                        backgroundColor: '#ff6978'
                                    }}
                                    disabled={true}
                                    text="SOLD OUT!"
                                />
                            )
                        ) : (
                            <>
                                <ButtonGeneral
                                    onClick={() => {
                                        handleClickForTicket()
                                    }}
                                    style={{
                                        width: '20rem',
                                        height: '2.5rem',
                                        backgroundColor: '#ff6978'
                                    }}
                                    text="UNREGISTER"
                                />
                            </>
                        )}
                    </div>
                </section>
                <section className={styles.details}>
                    <div className={styles.description}>
                        <Typography variant="h4">About This Event</Typography>
                        {
                            unified()
                                .use(parse)
                                .use(remark2react)
                                .processSync(event.description).result
                        }
                    </div>
                    <div className={styles.additionalInfo}>
                        <Typography gutterBottom variant="h5" component="h3">
                            {event.speaker}
                        </Typography>

                        {user && Object.values(user)[0][0] && (
                            <p>
                                Ticket availability:{' '}
                                {numtickets - eventAttendeeCount}/{numtickets}
                            </p>
                        )}
                        {user && !Object.values(user)[0][0] && (
                            <>
                                {availableTickets <= ticketCount * 0.25 ? (
                                    <p>Limited Availability!</p>
                                ) : (
                                    <p>Available!</p>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </article>
            {/* </div> */}
        </>
    )
}
