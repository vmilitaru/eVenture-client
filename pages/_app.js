import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import {ProtectedRouteAndRoleProvider} from '../components/ProtectedRouteAndRoleProvider'
import Wrapper from '../components/Wrapper/index'
import Head from 'next/head'
import PropTypes from 'prop-types'

// STYLES
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
                    : `${redirectUrl}/events-page`
            }
            audience={auth0Audience}
        >
        <Wrapper>

        <ProtectedRouteAndRoleProvider>
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

                    <ConditionedRenderedNavBar/>
                    <main
                        style={{
                            marginTop: '6rem',
                            textAlign: 'center',
                            backgroundColor: `${theme.palette.fourth.main}`
                        }}
                    >
                        <Component {...pageProps} />
                    </main>
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
