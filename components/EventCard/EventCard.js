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

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        image={event.banner ? event.banner : null}
                    />
                    <CardContent>
                        <Typography className={classes.title} variant="h4">
                            {event.title}
                        </Typography>
                        <Typography className={classes.date} variant="h6">
                            {event.date} - {event.time}
                        </Typography>
                        <Typography variant="h5">
                            {shortenDescription()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    )
}
