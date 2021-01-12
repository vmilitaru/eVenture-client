import React, { useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import LuxonUtils from '@date-io/luxon'
import { DateTime } from 'luxon'
import Button from '@material-ui/core/Button'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
//import NavBar from '../../../components/NavBar/NavBar'
//import Footer from '../../../components/Footer/Footer'
import { useStyles } from './specificeventMaterialcss'
import Typography from '@material-ui/core/Typography'
import UploadImage from '../../components/ImageUploader/index'

// ENVIRONMENT VARIABLES
import { useAuth0 } from '@auth0/auth0-react'
import { serverUrl } from '../../environment'

const useStyles = makeStyles((theme) => ({
    //this styling would be good to replace with css modules
    title: {
        margin: theme.spacing(2),
        height: 20,
        width: 500
    },
    description: {
        margin: theme.spacing(2),
        height: 200,
        width: 500
    },
    datetime: {
        margin: theme.spacing(2),
        width: '30',
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing(1)
    }
}))

export default function SpecificEventPage({ event }) {
    const [editing, setEditing] = useState(false)
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    console.log(user)
    console.log(isAuthenticated)

    const [title, setTitle] = useState(event.title)
    const [date, setDate] = useState(DateTime.utc())
    const [timeObj, setTime] = useState(DateTime.utc())

    const [description, setDescription] = useState(event.description)
    const [speaker, setSpeaker] = useState(event.speaker)
    const [location, setLocation] = useState(event.location)
    const [numtickets, setNumTickets] = useState(event.numtickets)
    const router = useRouter()
    const refreshData = () => router.replace(router.asPath)
    /* ------------------------------------IMAGE UPLOADER PREVIEW STATE------------------------------------------------------------------------- */

    const [previewSource, setPreviewSource] = useState('')
    /* ------------------------------------------------------------------------------------------------------------------------------------- */
    const handleDateChange = (d) => {
        //This function handles correct time conversion from object to ISO
        console.log(DateTime.utc(d.c.year, d.c.month, d.c.day).toISODate())
        setDate(DateTime.utc(d.c.year, d.c.month, d.c.day).toISODate())
    }

    const handleTimeChange = (t) => {
        //This function handles correct time conversion from object to ISO
        console.log(
            DateTime.utc()
                .set({
                    hour: t.c.hour,
                    minute: t.c.minute,
                    seconds: 0,
                    milliseconds: 0
                })
                .toISOTime({
                    suppressSeconds: true,
                    includeOffset: false,
                    suppressMilliseconds: true
                })
        )

        setTime(
            DateTime.utc().set({
                hour: t.c.hour,
                minute: t.c.minute,
                seconds: 0,
                millisecond: 0
            })
        )
    }

    const classes = useStyles()

    /* -----------------------------------------------------------IMAGE UPLOADER FUNCTIONS---------------------------------------------------- */

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewImage(file)
        //setBanner(file)
    }

    const previewImage = (file) => {
        console.log(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    /* ----------------------------------------------------------------------------------------------------------------------------------------------------- */
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!previewSource) return
        updateEventDetails(previewSource)
        setPreviewSource(null)
        setEditing(false)
        e.target.reset()
    }

    async function updateEventDetails(base64EncodedImage) {
        if (user && isAuthenticated) {
            const accessToken = await getAccessTokenSilently()

            const time = timeObj.toISOTime({
                suppressSeconds: true,
                includeOffset: false,
                suppressMilliseconds: true
            })

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
                    title,
                    date,
                    time,
                    description,
                    speaker,
                    numtickets,
                    location,
                    banner: base64EncodedImage
                })
            }
            const response = await fetch(
                `${serverUrl}/org/${event.id}`,
                requestOptions
            ) //post request is sent to events listing
            const data = await response.json()
            console.log({ data })
            setEditing(false)
            refreshData()
        }
    }
  
  /* CSS STUFF
  
    const classes = useStyles()
        <div className={classes.event}>
            <div className={classes.part}>
                <Typography variant="h2">{event.title}</Typography>
                <img
                    className={classes.img}
                    src={event.banner}
                    alt={event.banner}
                />
            </div>

            <section className={classes.details}>
                <Typography variant="h5">
                    {event.date} - {event.time}
                </Typography>
                <Typography variant="h6"> Speakers: {event.speaker}</Typography>
                <Typography variant="h6">
                    {' '}
                    Location: {event.location}
                </Typography>
                <Typography variant="h5">{event.description}</Typography>
            </section>
        </div>
  */
  
    return (
        <React.Fragment>
            {!editing ? (
                <section>
                    <Typography gutterBottom variant="h3" component="h3">
                        {event.title}
                    </Typography>

                    <img src={event.banner} alt={event.banner} />

                    <p>{event.description}</p>

                    <Typography gutterBottom variant="h5" component="h3">
                        {event.date} {event.time}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h3">
                        {event.location}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="h3">
                        {event.speaker}
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
                    onSubmit={(event) => handleSubmit(event)}
                >
                    <TextField
                        id="title"
                        label="Title"
                        placeholder="Enter title of event"
                        variant="outlined"
                        value={title}
                        InputProps={{ classes: { input: classes.title } }}
                        onChange={(e) => setTitle(e.target.value)}
                        helperText={
                            title.length < 1 ? 'Please enter new title' : ' '
                        }
                    />
                    <MuiPickersUtilsProvider utils={LuxonUtils}>
                        <Grid container justify="space-around" direction="row">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date"
                                label="Date"
                                format="dd/MM/yyyy"
                                value={date}
                                onChange={(d) => handleDateChange(d)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}
                                className={classes.datetime}
                            />

                            <KeyboardTimePicker
                                margin="normal"
                                id="time"
                                label="Time"
                                value={timeObj}
                                onChange={(t) => handleTimeChange(t)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time'
                                }}
                                className={classes.datetime}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>

                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        rows={2}
                        value={description}
                        plceholder="Enter Event Title"
                        variant="outlined"
                        onChange={(e) => setDescription(e.target.value)}
                        InputProps={{ classes: { input: classes.description } }}
                        helperText={
                            description.length < 1 ? 'Please enter text' : ' '
                        }
                    />
                    <TextField
                        id="speaker"
                        label="Speaker"
                        multiline
                        rows={4}
                        value={speaker}
                        placeholder="Enter the speakers"
                        variant="outlined"
                        InputProps={{ classes: { input: classes.speaker } }}
                        onChange={(e) => setSpeaker(e.target.value)}
                        helperText={
                            speaker.length < 1 ? 'Please enter text' : ' '
                        }
                    />
                    <TextField
                        id="location"
                        label="Location"
                        value={location}
                        multiline
                        rows={4}
                        placeholder="Enter location of event"
                        variant="outlined"
                        InputProps={{ classes: { input: classes.location } }}
                        onChange={(e) => setLocation(e.target.value)}
                        helperText={
                            location.length < 1 ? 'Please enter text' : ' '
                        }
                    />

                    <UploadImage
                        handleFileInputChange={handleFileInputChange}
                        previewSource={previewSource}
                        setPreviewSource={setPreviewSource}
                    />

                    <Button
                        id="button"
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        disabled={!previewSource}
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
