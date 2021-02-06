import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

import TextField from '@material-ui/core/TextField'
import LuxonUtils from '@date-io/luxon'
import { DateTime } from 'luxon'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'

import UploadImage from '../components/ImageUploader/index'
import { useStyles } from '../styles/CreateEventMaterialCSS'
import styles from '../styles/create-event.module.css'
import EventForm from '../components/EventForm'

// ENVIRONMENT VARIABLES
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { serverUrl } from '../environment'
import Loading from '../components/Loading/index'
import { Typography } from '@material-ui/core'

function AdminEventPage() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

    const [title, setTitle] = useState('')
    const [date, setDate] = useState(DateTime.utc())
    const [timeObj, setTime] = useState(DateTime.utc())

    const [description, setDescription] = useState('')
    const [speaker, setSpeaker] = useState('')
    const [location, setLocation] = useState('')
    const [numtickets, setNumTickets] = useState('')
    const [buttonState, setButtonState] = useState(true)
    /* ------------------------------------IMAGE UPLOADER PREVIEW STATE------------------------------------------------------------------------- */

    const [previewSource, setPreviewSource] = useState('')
    /* ------------------------------------------------------------------------------------------------------------------------------------- */

    const router = useRouter()
    const redirect = () => router.replace('/')

    useEffect(() => {
        user &&
        title &&
        date &&
        timeObj &&
        description &&
        location &&
        speaker &&
        previewSource &&
        numtickets
            ? setButtonState(false)
            : setButtonState(true)
    }, [
        user,
        title,
        date,
        timeObj,
        description,
        location,
        speaker,
        previewSource,
        numtickets
    ])

    const handleDateChange = (d) => {
        //This function handles correct time conversion from object to ISO
        if (d !== null && d.c !== null) {
            setDate(DateTime.utc(d.c.year, d.c.month, d.c.day).toISODate())
        }
    }

    const handleTimeChange = (t) => {
        //This function handles correct time conversion from object to ISO
        if (t !== null && t.c !== null) {
            setTime(
                DateTime.utc().set({
                    hour: t.c.hour,
                    minute: t.c.minute,
                    seconds: 0,
                    millisecond: 0
                })
            )
            console.log(timeObj)
        }
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
        gatherEventDetails(previewSource)
        setPreviewSource(null)
        e.target.reset()
        //window.location.href = '/'
    }

    async function gatherEventDetails(base64EncodedImage) {
        if (user && isAuthenticated) {
            const accessToken = await getAccessTokenSilently()
            //console.log(accessToken)
            const time = timeObj.toISOTime({
                suppressSeconds: true,
                includeOffset: false,
                suppressMilliseconds: true
            })

            const requestOptions = {
                mode: 'cors',
                method: 'POST',
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

            const response = await fetch(` ${serverUrl}/org`, requestOptions) //post request is sent to events listing
            const data = await response.json()

            //event.target.reset() //reset input boxes
        }
    }
    if (!Object.values(user)[0][0]) {
        return <Loading />
    }
    return (
        <React.Fragment>
            <div className={styles.contrastBackground}>
                <Typography variant="h2">Create An Event</Typography>
            </div>
            <EventForm
                handleSubmit={handleSubmit}
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                handleFileInputChange={handleFileInputChange}
                setTitle={setTitle}
                title={title}
                description={description}
                date={date}
                time={timeObj}
                speaker={speaker}
                location={location}
                numtickets={numtickets}
                previewSource={previewSource}
                setDescription={setDescription}
                setSpeaker={setSpeaker}
                setLocation={setLocation}
                setNumTickets={setNumTickets}
                setEditing={redirect}
                setPreviewSource={setPreviewSource}
            />
            {/* <form
                className={styles.form}
                noValidate
                autoComplete="off"
                onSubmit={(event) => handleSubmit(event)} //on button click post request is fired
            >
                <div className={styles.left}>
                    <UploadImage
                        className={classes.image}
                        handleFileInputChange={handleFileInputChange}
                        previewSource={previewSource}
                        setPreviewSource={setPreviewSource}
                    />

                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        rows={2}
                        plceholder="Enter Event Title"
                        variant="outlined"
                        classes={classes.description}
                        onChange={(e) => setDescription(e.target.value)}
                        InputProps={{
                            classes: { input: classes.description }
                        }}
                        helperText={
                            description.length < 1 ? 'Please enter text' : ' '
                        }
                    />
                </div>

                <div className={styles.right}>
                    <div className={styles.one}>
                        <TextField
                            className={classes.title}
                            id="title"
                            label="Title"
                            multiline
                            rows={4}
                            placeholder="Enter title of event"
                            variant="outlined"
                            InputProps={{ classes: { input: classes.title } }}
                            onChange={(e) => setTitle(e.target.value)}
                            helperText={
                                title.length < 1 ? 'Please enter text' : ' '
                            }
                        />

                        <MuiPickersUtilsProvider
                            utils={LuxonUtils}
                            className={classes.datetime}
                        >
                            <Grid
                                container
                                // justify="space-around"
                                direction="row"
                            >
                            <KeyboardDatePicker
                                className={classes.date}
                                margin="normal"
                                id="date"
                                label="Date"
                                format="dd/MM/yyyy"
                                value={date}
                                onChange={(d) => handleDateChange(d)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date'
                                }}
                                // className={classes.datetime}
                            />

                            <KeyboardTimePicker
                                className={classes.time}
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
                            className={classes.speaker}
                            id="speaker"
                            label="Speaker"
                            multiline
                            rows={4}
                            placeholder="Enter the speakers"
                            variant="outlined"
                            InputProps={{ classes: { input: classes.speaker } }}
                            onChange={(e) => setSpeaker(e.target.value)}
                            helperText={
                                speaker.length < 1 ? 'Please enter text' : ' '
                            }
                        />
                        <TextField
                            className={classes.location}
                            id="location"
                            label="Location"
                            multiline
                            rows={4}
                            placeholder="Enter location of event"
                            variant="outlined"
                            InputProps={{
                                classes: { input: classes.location }
                            }}
                            onChange={(e) => setLocation(e.target.value)}
                            helperText={
                                location.length < 1 ? 'Please enter text' : ' '
                            }
                        />
                        <div className={styles.empty}>
                            <Typography variant="h6">
                                Fill in the details for the event you want to
                                create. Ensure to add an image and save the
                                event.{' '}
                            </Typography>
                        </div>
                        <TextField
                            className={classes.tickets}
                            id="tickets"
                            label="Tickets"
                            multiline
                            rows={4}
                            placeholder="Enter number of tickets available"
                            variant="outlined"
                            InputProps={{
                                classes: { input: classes.numtickets }
                            }}
                            onChange={(e) => setNumTickets(e.target.value)}
                            helperText={
                                /^\d+$/.test(numtickets) === false
                                    ? 'Please enter a number'
                                    : ' '
                            }
                        />
                    </div>

                    <Button
                        id="button"
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        disabled={buttonState}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </div>
            </form> */}
        </React.Fragment>
    )
}

export default withAuthenticationRequired(AdminEventPage, {
    onRedirecting: () => <Loading />
})
