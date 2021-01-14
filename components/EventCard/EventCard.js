import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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

export default function EventCard({ event }) {
    const classes = useStyles()

    function shortenDescription() {
        if (!event.description) {
            return '...'
        }
        const descArray = event?.description.split('')
        let shortDesc = descArray?.splice(0, 40)
        shortDesc = shortDesc?.join('').trim()
        shortDesc += '...'
        return shortDesc
    }

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

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        image={event.banner ? event.banner : null}
                    />
                    <CardContent className={classes.cardcontent}>
                        <Typography className={classes.date} variant="h6">
                            <span
                                style={{
                                    backgroundColor: 'white',
                                    padding: '0vw 0.5vw 0vw 0.5vw'
                                }}
                            >
                                {convertDate()}
                            </span>
                        </Typography>
                        <Typography className={classes.title} variant="h4">
                            {event.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    )
}
