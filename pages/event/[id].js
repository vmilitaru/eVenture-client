//import NavBar from '../../../components/NavBar/NavBar'
//import Footer from '../../../components/Footer/Footer'
import { useStyles } from './specificeventMaterialcss'
import Typography from '@material-ui/core/Typography'

// ENVIRONMENT VARIABLES
import { serverUrl } from '../../environment'

export default function SpecificEventPage({ event }) {
    const classes = useStyles()
    return (
        <div className={classes.event}>
            <div className={classes.part}>
                <Typography variant="h2">{event.title}</Typography>
                <img
                    className={classes.img}
                    src={event.banner}
                    alt={event.banner}
                />
            </div>

            <section className={classes.details}>
                <Typography variant="h5">
                    {event.date} - {event.time}
                </Typography>
                <Typography variant="h6"> Speakers: {event.speaker}</Typography>
                <Typography variant="h6">
                    {' '}
                    Location: {event.location}
                </Typography>
                <Typography variant="h5">{event.description}</Typography>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch(`${serverUrl}/events/${id}`)
    const data = await res.json()
    console.log(data)
    const event = data.payload
    return { props: { event } }
}
