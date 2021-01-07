import React, { useState, useEffect } from 'react'
import Head from 'next/head'

// COMPONENTS
import ButtonGeneral from '../components/Button/Button'
// import { getStaticProps } from '../pages/api/events'
import styling from '../pages/index.module.css'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Countdown from '../components/Countdown/Countdown'

import { serverUrl } from '../environment'

function Home() {
    const [event, setEvent] = useState({ time: '00:00:00', date: '2021-20-20' })

    useEffect(() => {
        async function getData() {
            const res = await fetch(`${serverUrl}/events/8`)
            const { payload } = await res.json()
            // console.log({ payload })
            console.log(payload)
            setEvent(payload)
        }
        getData()
    }, [])

    return (
        <div className={styling.background}>
            <Head>
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styling.div}>
                <div item className={styling.intro}>
                    <Typography variant="h2">
                        Develop with our community
                    </Typography>
                    <Typography variant="h3">
                        Checkout our latest event
                    </Typography>
                </div>
                <div className={styling.event}>
                    <div className={styling.eventDetails}>
                        <Typography variant="h3">{event.title}</Typography>
                        <Typography variant="h5">
                            {event.date}, {event.time}
                        </Typography>
                        <p>{event.description}</p>
                        <Link href={`/event/${event.id}`}>
                            <ButtonGeneral text={'find out more'} />
                        </Link>
                    </div>
                    <Countdown eventDate={event.date} eventTime={event.time} />
                    <img
                        className={styling.img}
                        src="https://media.newyorker.com/photos/5f414de2840e569c23e39066/2:1/w_2559,h_1279,c_limit/Wright-Panda01.jpg"
                        alt="panda"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
