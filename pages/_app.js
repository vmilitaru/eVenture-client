import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { Auth0Provider } from '@auth0/auth0-react'

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
            domain="dev-49ka9ni6.eu.auth0.com"
            clientId="hN7wzIS4Il754IZnMXX3VvgbDGLUE3t5"
            redirectUri="http://localhost:3000"
            audience="https://dev-49ka9ni6.eu.auth0.com/api/v2/"
            scope="read:current_user use:role"
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
