// imports
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// style imports
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

// env imports
import {
    redirectUrl,
    auth0Audience,
    auth0ClientId,
    auth0Domain
} from '../environment'

export default function MyApp(props) {
    const { Component, pageProps } = props

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <Auth0Provider
            domain={auth0Domain}
            clientId={auth0ClientId}
            redirectUri={`${redirectUrl}${props.router.pathname}`}
            audience={auth0Audience}
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
