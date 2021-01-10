import React, { useState } from 'react'
//import NavBar from '../../../components/NavBar/NavBar'
//import Footer from '../../../components/Footer/Footer'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// ENVIRONMENT VARIABLES
import { useAuth0 } from '@auth0/auth0-react'
import { serverUrl } from '../../environment'

export default function SpecificEventPage({ event }) {
    const [editing, setEditing] = useState(false)
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    console.log(user)
    console.log(isAuthenticated)

    const [title, setTitle] = useState(event.title)
    //const [date, setDate] = useState(DateTime.utc())
    //const [timeObj, setTime] = useState(DateTime.utc())

    // const [description, setDescription] = useState('')
    // const [speaker, setSpeaker] = useState('')
    // const [location, setLocation] = useState('')
    // const [numtickets, setNumTickets] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        if (user && isAuthenticated) {
            const accessToken = await getAccessTokenSilently()

            const requestOptions = {
                mode: 'cors',
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    title
                })
            }

            const response = await fetch(
                `${serverUrl}/org/${event.id}`,
                requestOptions
            ) //post request is sent to events listing
            const data = await response.json()
            console.log({ data })
            setTitle(e.target.value)
            setEditing(false)
        }
    }
    return (
        <React.Fragment>
            {!editing ? (
                <section>
                    <Typography gutterBottom variant="h3" component="h3">
                        {event.title}
                    </Typography>

                    <Button
                        id="button"
                        variant="contained"
                        color="primary"
                        size="large"
                        //className={classes.button}
                        // disabled={!previewSource}
                        // startIcon={<SaveIcon />}
                        onClick={() => {
                            setEditing(true)
                        }}
                    >
                        Edit
                    </Button>
                </section>
            ) : (
                <form
                    autoComplete="off"
                    noValidate
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <TextField
                        id="title"
                        label="Title"
                        placeholder="Enter title of event"
                        variant="outlined"
                        //InputProps={{ classes: { input: classes.title } }}
                        onChange={(e) => setTitle(e.target.value)}
                        //helperText={title.length < 1 ? "Please enter new title" : " "}
                    />

                    <Button
                        id="button"
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        //className={classes.button}
                        //disabled={!previewSource}
                        //startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </form>
            )}
        </React.Fragment>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch(`${serverUrl}/events/${id}`)
    const data = await res.json()
    console.log(data)
    const event = data.payload
    return { props: { event } }
}
