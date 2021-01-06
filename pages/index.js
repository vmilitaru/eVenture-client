import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/NavBar'
import ButtonGeneral from '../components/Button/Button'
import { makeStyles } from '@material-ui/core/styles'
// import { getStaticProps } from '../pages/api/events'
import styling from '../pages/index.module.css'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Typography from '@material-ui/core/Typography'

function Home() {
    return (
        <div className={styling.background}>
            <Head>
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Footer />
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
                        <Typography variant="h3">Event Name</Typography>
                        <Typography variant="h5">
                            Date and time displayed here
                        </Typography>
                        <p>
                            Event description mini will go here... it will
                            display max 400 characters? Such as join us for an
                            event about all things css and html. whether you are
                            a newbie or been a learning for a few weeks slowly,
                            come join us.
                        </p>
                        <ButtonGeneral text={'find out more'} />
                    </div>
                    <img
                        className={styling.img}
                        src="https://media.newyorker.com/photos/5f414de2840e569c23e39066/2:1/w_2559,h_1279,c_limit/Wright-Panda01.jpg"
                        alt="panda"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
