import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/NavBar'
// import { getStaticProps } from '../pages/api/events'
import styling from '../pages/index.module.css'
function Home() {
    return (
        <div className={styling.div}>
            <Head>
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
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
        </div>
    )
}

export default Home
