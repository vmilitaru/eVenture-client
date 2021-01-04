import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { Auth0Provider } from '@auth0/auth0-react'

const redirectUrl = process.env.NEXT_PUBLIC_CLIENT_URL

export default function MyApp(props) {
    const { Component, pageProps } = props

    const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
    const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
    const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={`${redirectUrl}${props.router.pathname}`}
            audience={audience}
        >
            <React.Fragment>
                <Head>
                    <title>My page</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        </Auth0Provider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
}
