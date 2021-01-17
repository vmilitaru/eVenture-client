import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import LuxonUtils from '@date-io/luxon'
import { DateTime } from 'luxon'
import Button from '@material-ui/core/Button/Button'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import { useStyles } from '../../styles/specificeventMaterialcss'
import Typography from '@material-ui/core/Typography'
import UploadImage from '../../components/ImageUploader/index'
import EventDisplay from '../../components/EventDisplay'
import EventForm from '../../components/EventForm'
var gfm = require('remark-gfm')

// ENVIRONMENT VARIABLES
import { useAuth0 } from '@auth0/auth0-react'
import { serverUrl } from '../../environment'
import ButtonGeneral from '../../components/Button/Button'

import renderToString from 'next-mdx-remote/render-to-string'
import matter from 'gray-matter'


export default function SpecificEventPage({ event, ticketCount,source }) {
    const [editing, setEditing] = useState(false)
    const {
        user,
        isAuthenticated,
        getAccessTokenSilently,
        loginWithRedirect
    } = useAuth0()

    const [availableTickets, setAvailableTickets] = useState(
        event.numtickets - ticketCount
    )

    const [title, setTitle] = useState(event.title)
    const [date, setDate] = useState(event.date)

    const [timeObj, setTime] = useState(DateTime.fromSQL(event.time))

    const [description, setDescription] = useState(event.description)
    const [speaker, setSpeaker] = useState(event.speaker)
    const [location, setLocation] = useState(event.location)
    const [numtickets, setNumTickets] = useState(event.numtickets)
    const [eventAttendeeCount, setEventAttendeeCount] = useState(ticketCount)
    
    

    const router = useRouter()
    const refreshData = () => router.replace(router.asPath)
    /* ------------------------------------IMAGE UPLOADER PREVIEW STATE------------------------------------------------------------------------- */

    const [previewSource, setPreviewSource] = useState(event.banner)
    /* ------------------------------------------------------------------------------------------------------------------------------------- */

    const [isRegistered, setIsRegistered] = useState(false)

    useEffect(() => {
        async function getIsRegistered() {
            if (!user) {
                return
            }
            const accessToken = await getAccessTokenSilently()
            const requestOptions = {
                mode: 'cors',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }

            const res = await fetch(
                `${serverUrl}/prot/tickets?email=${user.email}`,
                requestOptions
            )
            const { payload } = await res.json()
            const ticketExists = payload.find(
                (e) =>
                    e.event_id === event.id && user.email === e.attendee_email
            )
            setIsRegistered(ticketExists)
        }
        getIsRegistered()
    }, [])

    const handleDateChange = (d) => {
        //This function handles correct time conversion from object to ISO
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

    async function deleteEvent() {
        const accessToken = await getAccessTokenSilently()

        const requestOptions = {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        const response = await fetch(
            `${serverUrl}/org/${event.id}`,
            requestOptions
        )
        console.log(response)
        window.location.href = '/events-page'
    }

    async function getYoSelfATicket() {
        if (availableTickets > 0) {
            const accessToken = await getAccessTokenSilently()

            const requestOptions = {
                mode: 'cors',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({ attendeeEmail: user.email })
            }

            const response = await fetch(
                `${serverUrl}/prot/${event.id}/tickets`,
                requestOptions
            )
            const result = await response.json()
            console.log(result)
        }
        setAvailableTickets(availableTickets - 1)
    }

    async function deleteTicket() {
        const accessToken = await getAccessTokenSilently()
        const requestOptions = {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }

        await fetch(
            `${serverUrl}/prot/${event.id}/tickets?email=${user.email}`,
            requestOptions
        )
    }

    function handleClickForTicket() {
        if (!isRegistered) {
            if (user) {
                getYoSelfATicket()
                setIsRegistered(true)
                setEventAttendeeCount(parseInt(eventAttendeeCount) + 1)
            }
            if (!user) {
                loginWithRedirect()
            }
            return
        }
        deleteTicket()
        setIsRegistered(false)
        setEventAttendeeCount(parseInt(eventAttendeeCount) - 1)
    }

    function convertDate() {
        const dateFromIso = new DateTime.fromISO(
            `${event.date}T${event.time}.000Z`
        )
        const localeDate = dateFromIso.toLocaleString({
            weekday: 'short',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })
        return localeDate
    }

    return (
        <React.Fragment>
            {!editing ? (
                <EventDisplay
                    event={event}
                    user={user}
                    deleteEvent={deleteEvent}
                    convertDate={convertDate}
                    handleClickForTicket={handleClickForTicket}
                    setEditing={setEditing}
                    isRegistered={isRegistered}
                    availableTickets={availableTickets}
                    ticketCount={ticketCount}
                    numtickets={numtickets}
                    eventAttendeeCount={eventAttendeeCount}
                    source={source}
                />
            ) : (
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
                    image={previewSource}
                    setDescription={setDescription}
                    setSpeaker={setSpeaker}
                    setLocation={setLocation}
                    setNumTickets={setNumTickets}
                    setEditing={setEditing}
                    setImage={setPreviewSource}
                />
                // <form
                //     autoComplete="off"
                //     noValidate
                //     onSubmit={(event) => handleSubmit(event)}
                // >
                //     <TextField
                //         id="title"
                //         label="Title"
                //         placeholder="Enter title of event"
                //         variant="outlined"
                //         value={title}
                //         InputProps={{ classes: { input: classes.title } }}
                //         onChange={(e) => setTitle(e.target.value)}
                //         helperText={
                //             title.length < 1 ? 'Please enter new title' : ' '
                //         }
                //     />
                //     <MuiPickersUtilsProvider utils={LuxonUtils}>
                //         <Grid container justify="space-around" direction="row">
                //             <KeyboardDatePicker
                //                 margin="normal"
                //                 id="date"
                //                 label="Date"
                //                 format="dd/MM/yyyy"
                //                 value={date}
                //                 onChange={(d) => handleDateChange(d)}
                //                 KeyboardButtonProps={{
                //                     'aria-label': 'change date'
                //                 }}
                //                 className={classes.datetime}
                //             />

                //             <KeyboardTimePicker
                //                 margin="normal"
                //                 id="time"
                //                 label="Time"
                //                 value={timeObj}
                //                 onChange={(t) => handleTimeChange(t)}
                //                 KeyboardButtonProps={{
                //                     'aria-label': 'change time'
                //                 }}
                //                 className={classes.datetime}
                //             />
                //         </Grid>
                //     </MuiPickersUtilsProvider>

                //     <TextField
                //         id="description"
                //         label="Description"
                //         multiline
                //         rows={2}
                //         value={description}
                //         plceholder="Enter Event Title"
                //         variant="outlined"
                //         onChange={(e) => setDescription(e.target.value)}
                //         InputProps={{ classes: { input: classes.description } }}
                //         helperText={
                //             description.length < 1 ? 'Please enter text' : ' '
                //         }
                //     />
                //     <TextField
                //         id="speaker"
                //         label="Speaker"
                //         multiline
                //         rows={4}
                //         value={speaker}
                //         placeholder="Enter the speakers"
                //         variant="outlined"
                //         InputProps={{ classes: { input: classes.speaker } }}
                //         onChange={(e) => setSpeaker(e.target.value)}
                //         helperText={
                //             speaker.length < 1 ? 'Please enter text' : ' '
                //         }
                //     />
                //     <TextField
                //         id="location"
                //         label="Location"
                //         value={location}
                //         multiline
                //         rows={4}
                //         placeholder="Enter location of event"
                //         variant="outlined"
                //         InputProps={{ classes: { input: classes.location } }}
                //         onChange={(e) => setLocation(e.target.value)}
                //         helperText={
                //             location.length < 1 ? 'Please enter text' : ' '
                //         }
                //     />
                //     <TextField
                //         className={classes.tickets}
                //         id="tickets"
                //         label="Tickets"
                //         value={numtickets}
                //         multiline
                //         rows={4}
                //         placeholder="Enter number of tickets available"
                //         variant="outlined"
                //         InputProps={{
                //             classes: { input: classes.numtickets }
                //         }}
                //         onChange={(e) => setNumTickets(e.target.value)}
                //         helperText={
                //             /^\d+$/.test(numtickets) === false
                //                 ? 'Please enter a number'
                //                 : ' '
                //         }
                //     />

                //     <UploadImage
                //         handleFileInputChange={handleFileInputChange}
                //         previewSource={previewSource}
                //         setPreviewSource={setPreviewSource}
                //     />

                //     <ButtonGeneral
                //         // id="button"
                //         // type="submit"
                //         // variant="contained"
                //         // color="primary"
                //         // size="large"
                //         // className={classes.button}
                //         // disabled={!previewSource}
                //         text={'SAVE'}
                //     />
                //     <ButtonGeneral
                //         text={'CANCEL'}
                //         onClick={() => setEditing(false)}
                //     />
                // </form>
            )}
        </React.Fragment>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch(`${serverUrl}/events/${id}`)
    const result = await res.json()
    console.log(result)
    const event = result.payload.event
    const source = event.description
    const { content} = matter(source)
   
    const mdxSource = await renderToString(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [gfm],
          rehypePlugins: [],
        },
      })
    const ticketCount = result.payload.ticketCount.count
    return { props: { event, ticketCount,source: mdxSource
        } }
}
