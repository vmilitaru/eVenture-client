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
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={event.banner ? event.banner : null}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h3">
                            {event.title}
                        </Typography>
                        <Typography>
                            {event.date} - {event.time}
                        </Typography>
                        <Typography>{shortenDescription()}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    )
}
