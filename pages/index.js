import React, { useState, useEffect } from 'react'
import Head from 'next/head'

// COMPONENTS
import ButtonGeneral from '../components/Button/Button'
// import { getStaticProps } from '../pages/api/events'
import { useStyles } from './indexmaterialCss.js'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import { serverUrl } from '../environment'

function Home() {
    const [event, setEvent] = useState({})

    useEffect(() => {
        async function getData() {
            const res = await fetch(`${serverUrl}/events/date`)
            const { payload } = await res.json()
            setEvent(payload[0])
        }
        getData()
    }, [])
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Head>
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={classes.div}>
                <div item className={classes.intro}>
                    <Typography variant="h2">
                        Develop with our community
                    </Typography>
                    <Typography variant="h3">
                        Checkout our latest event
                    </Typography>
                </div>
                <div className={classes.event}>
                    <div className={classes.eventDetails}>
                        <Typography variant="h3">{event.title}</Typography>
                        <Typography variant="h5">
                            {event.date}, {event.time}
                        </Typography>
                        <p>{event.description}</p>
                        <Link href={`/event/${event.id}`}>
                            <ButtonGeneral text={'find out more'} />
                        </Link>
                    </div>
                    <img
                        className={classes.img}
                        src="https://media.newyorker.com/photos/5f414de2840e569c23e39066/2:1/w_2559,h_1279,c_limit/Wright-Panda01.jpg"
                        alt="panda"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
