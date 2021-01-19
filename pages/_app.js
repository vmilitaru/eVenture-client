import React, { useState } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { ProtectedRouteAndRoleProvider } from '../components/ProtectedRouteAndRoleProvider'
import { SearchProvider } from '../contexts/search-context'
import Wrapper from '../components/Wrapper/index'
import Head from 'next/head'
import PropTypes from 'prop-types'

// STYLES
import '../styles/globals.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import ConditionedRenderedNavBar from '../components/ConditionedRenderedNavBar'
import ConditionedRenderedFooter from '../components/ConditionedRenderedFooter'

// ENVIRONMENT VARIABLES
import {
    redirectUrl,
    auth0Audience,
    auth0ClientId,
    auth0Domain
} from '../environment'

export default function MyApp(props) {
    const { Component, pageProps } = props
    const [filter, setFilter] = useState('')

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
            redirectUri={
                props.router.pathname !== '/event/[id]'
                    ? `${redirectUrl}${props.router.pathname}`
                    : `${redirectUrl}/`
            }
            audience={auth0Audience}
        >
            {console.log(redirectUrl)}
            <Wrapper>
                <ProtectedRouteAndRoleProvider>
                    <React.Fragment>
                        <Head>
                            <title>eVenture</title>
                            <meta
                                name="viewport"
                                content="minimum-scale=1, initial-scale=1, width=device-width"
                            />
                        </Head>
                        <ThemeProvider theme={theme}>
                            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                            <CssBaseline />
                            <SearchProvider>
                                <ConditionedRenderedNavBar />
                                <main
                                    style={{
                                        paddingTop: '4rem',
                                        textAlign: 'center',
                                        // backgroundColor: `${theme.palette.fourth.main}`,
                                        minHeight: '100vh'
                                    }}
                                >
                                    <Component {...pageProps} />
                                </main>
                            </SearchProvider>
                            <ConditionedRenderedFooter />
                        </ThemeProvider>
                    </React.Fragment>
                </ProtectedRouteAndRoleProvider>
            </Wrapper>
        </Auth0Provider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
}
