import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/NavBar'
// import { getStaticProps } from '../pages/api/events'

function Home() {
    return (
        <div>
            <Head>
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
        </div>
    )
}

export default Home
