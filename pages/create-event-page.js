import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles'
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
import Grid from '@material-ui/core/Grid'

// ENVIRONMENT VARIABLES
import { useAuth0 } from '@auth0/auth0-react'
import { serverUrl } from '../environment'

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

function AdminEventPage() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    console.log(user)
    console.log(isAuthenticated)

    const [title, setTitle] = useState('empty title')
    const [date, setDate] = useState(DateTime.utc())
    const [timeObj, setTime] = useState(DateTime.utc())
    const [description, setDescription] = useState('empty description')
    const [speaker, setSpeaker] = useState('empty speaker')
    const [location, setLocation] = useState('empty location')
    const [numtickets, setNumTickets] = useState(0)

    const handleDateChange = (d) => {
        console.log(DateTime.utc(d.c.year, d.c.month, d.c.day).toISODate())
        setDate(DateTime.utc(d.c.year, d.c.month, d.c.day).toISODate())
    }

    const handleTimeChange = (t) => {
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

    async function handleSubmit(event) {
        if (user && isAuthenticated) {
            //after populating the empty object from all inputs the event does the post request to the database
            event.preventDefault()

            const accessToken = await getAccessTokenSilently()

            console.log(accessToken)
            console.log('clicked')

            console.log({
                title,
                date,
                time,
                description,
                location,
                speaker,
                numtickets
            })

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
                    location
                })
            }

            const response = await fetch(` ${serverUrl}/org`, requestOptions) //post request is sent to events listing
            const data = await response.json()
            console.log(data)

            event.target.reset() //reset input boxes
        }
    }

    return (
        <React.Fragment>
            <NavBar />
            <form
                noValidate
                autoComplete="off"
                onSubmit={(event) => handleSubmit(event)} //on button click post request is fired
            >
                <div>
                    <TextField
                        id="title"
                        label="Title"
                        multiline
                        rows={4}
                        placeholder="Enter title of event"
                        variant="outlined"
                        InputProps={{ classes: { input: classes.title } }}
                        onChange={(e) => setTitle(e.target.value)}
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
                        plceholder="Enter Event Title"
                        variant="outlined"
                        onChange={(e) => setDescription(e.target.value)}
                        InputProps={{ classes: { input: classes.description } }}
                    />
                    <TextField
                        id="speaker"
                        label="Speaker"
                        multiline
                        rows={4}
                        placeholder="Enter the speakers"
                        variant="outlined"
                        InputProps={{ classes: { input: classes.speaker } }}
                        onChange={(e) => setSpeaker(e.target.value)}
                    />
                    <TextField
                        id="location"
                        label="Location"
                        multiline
                        rows={4}
                        placeholder="Enter location of event"
                        variant="outlined"
                        InputProps={{ classes: { input: classes.location } }}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <TextField
                        id="tickets"
                        label="Tickets"
                        multiline
                        rows={4}
                        placeholder="Enter number of tickets available"
                        variant="outlined"
                        InputProps={{
                            classes: { input: classes.title }
                        }}
                        onChange={(e) => setNumTickets(e.target.value)}
                    />
                </div>

                <Button
                    id="button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </form>
        </React.Fragment>
    )
}
export default AdminEventPage
