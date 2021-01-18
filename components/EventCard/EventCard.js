import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth0 } from '@auth0/auth0-react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './EventCardMaterialCss'
import { DateTime } from 'luxon'
import styles from './EventCard.module.css'
import ButtonGeneral from '../Button/Button'
import { serverUrl } from '../../environment'

export default function EventCard({ event }) {
    const { user, getAccessTokenSilently, loginWithRedirect } = useAuth0()
    const classes = useStyles()

    const [isRegistered, setIsRegistered] = useState(false)

    useEffect(() => {
        async function getIsRegistered() {
            if (!user) {
                return
            }
            const accessToken = await getAccessTokenSilently()
            const requestOptions = {
                mode: 'cors',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            const res = await fetch(
                `${serverUrl}/prot/tickets?email=${user.email}`,
                requestOptions
            )
            const { payload } = await res.json()
            const ticketExists = payload.find(
                (e) =>
                    e.event_id === event.id && user.email === e.attendee_email
            )
            setIsRegistered(ticketExists)
        }
        getIsRegistered()
    }, [])

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

    async function bookTicket() {
        // if (availableTickets > 0) {
        const accessToken = await getAccessTokenSilently()

        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ attendeeEmail: user.email })
        }

        const response = await fetch(
            `${serverUrl}/prot/${event.id}/tickets`,
            requestOptions
        )
        const result = await response.json()
        console.log(result)
        // }
        // setAvailableTickets(availableTickets - 1)
    }

    async function deleteTicket() {
        const accessToken = await getAccessTokenSilently()
        const requestOptions = {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        await fetch(
            `${serverUrl}/prot/${event.id}/tickets?email=${user.email}`,
            requestOptions
        )
    }

    function handleClickForTicket() {
        if (!isRegistered) {
            if (user) {
                bookTicket()
                setIsRegistered(true)
            }
            if (!user) {
                loginWithRedirect()
            }
            return
        }
        deleteTicket()
        setIsRegistered(false)
    }

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea className={classes.card}>
                    <Link href={'event/[id]'} as={`/event/${event.id}`}>
                        <CardMedia
                            className={classes.media}
                            component="img"
                            image={event.banner ? event.banner : null}
                        />
                    </Link>
                    {isRegistered && (
                        <span className={styles.attending}>
                            You're Attending
                        </span>
                    )}
                    <CardContent className={classes.cardContent}>
                        <div className={classes.text}>
                            <Typography className={classes.title} variant="h4">
                                {event.title}
                            </Typography>
                            <Typography className={classes.date} variant="h6">
                                {/* <span
                                style={{
                                    backgroundColor: 'white',
                                    padding: '0vw 0.5vw 0vw 0.5vw'
                                }}
                            > */}
                                {convertDate()}
                                {/* </span> */}
                            </Typography>
                        </div>
                        {!isRegistered ? (
                            <ButtonGeneral
                                onClick={() => {
                                    handleClickForTicket()
                                }}
                                style={{ width: '6rem', height: '2rem' }}
                                text="REGISTER"
                            />
                        ) : (
                            <ButtonGeneral
                                onClick={() => {
                                    handleClickForTicket()
                                }}
                                style={{
                                    width: '7rem',
                                    height: '2rem',
                                    backgroundColor: '#ff6978'
                                }}
                                text="UNREGISTER"
                            />
                        )}
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    )
}
