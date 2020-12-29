import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar/NavBar'
import ButtonGeneral from '../components/Button/Button'
// import { getStaticProps } from '../pages/api/events'
import React from 'react'

function Home() {
    return (
        <div>
            <Head>
                <title>Communiteam</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <ButtonGeneral text={'find out more'} />
        </div>
    )
}

export default Home
