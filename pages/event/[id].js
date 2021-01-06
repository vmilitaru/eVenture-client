//import NavBar from '../../../components/NavBar/NavBar'
//import Footer from '../../../components/Footer/Footer'
import Typography from '@material-ui/core/Typography'

// ENVIRONMENT VARIABLES
import { serverUrl } from '../../environment'

export default function SpecificEventPage({ event }) {
    return (
        <>
            <div>
                <Typography gutterBottom variant="h3" component="h3">
                    {event.title}
                </Typography>
                <img src={event.banner} alt={event.banner} />
            </div>
            <section>
                {event.description} {event.speaker}
                {event.location}
            </section>
            <div>
                {event.date}
                {event.time}
            </div>
        </>
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
