const redirectUrl = process.env.NEXT_PUBLIC_CLIENT_URL
const auth0Domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN
const auth0ClientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
const auth0Audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL

module.exports = {
    redirectUrl,
    auth0Domain,
    auth0ClientId,
    auth0Audience,
    serverUrl,
    clientUrl
}
