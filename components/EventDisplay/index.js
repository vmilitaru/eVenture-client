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
    isRegistered
}) {
    return (
        <article>
            <section className={styles.card}>
                {/* <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${event.banner})` }}
                ></div> */}
                <img
                    src={event.banner}
                    alt={event.banner}
                    style={{ objectFit: 'cover' }}
                />
                <div>
                    <Typography gutterBottom variant="h3" component="h3">
                        {event.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h3">
                        {convertDate()}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h3">
                        {event.location}
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
                <div>
                    <p>{event.description}</p>
                </div>
                <div>
                    <Typography gutterBottom variant="h5" component="h3">
                        {event.speaker}
                    </Typography>

                    <p>INSERT TICKET AVAILABILITY HERE</p>
                </div>
            </section>
        </article>
    )
}
