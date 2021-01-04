import React from 'react'
import Head from 'next/head'

// import components
import NavBar from '../components/NavBar/NavBar'
import ButtonGeneral from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

// import styles
import styling from '../pages/index.module.css'

function Home() {
    return (
        <div className={styling.div}>
            <Head>
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Footer />
            <div className={styling.intro}>
                <h1>Develop with our community</h1>
                <h3>Checkout our latest event</h3>
            </div>
            <div className={styling.event}>
                <h2>Event Name</h2>
                <h3>Date and time displayed here</h3>
                <p>
                    Event description mini will go here... it will display max
                    400 characters? Such as join us for an event about all
                    things css and html. whether you are a newbie or been a
                    learning for a few weeks slowly, come join us.
                </p>
            </div>
            <ButtonGeneral text={'find out more'} />
            <div>
                <img
                    className={styling.img}
                    src="https://media.newyorker.com/photos/5f414de2840e569c23e39066/2:1/w_2559,h_1279,c_limit/Wright-Panda01.jpg"
                    alt="panda"
                />
            </div>
            <Footer />
        </div>
    )
}

export default Home
