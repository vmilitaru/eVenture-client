import React, { useState } from 'react'
//import NavBar from '../components/NavBar/NavBar'
//import Footer from '../component/Footer/Footer'
//import Input from '../components/Input/Input'
import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
//import ImageUploader from 'react-images-upload'
import LuxonUtils from '@date-io/luxon'

import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'

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
//FORMAT
// const emptyEvent = {
//   title: '', completed
//   banner: '',
//   date: '',
//   speaker: '',
//   description: '',completed
//   numtickets: '',
//   location: ''
// }

function AdminEventPage() {
    const emptyEvent = {
        title: 'empty title',
        description: 'empty description',
        date: 'empty date',
        time: 'empty time'
    }
    const [newEvent, setNewEvent] = useState(emptyEvent)
    const [selectedDate, setSelectedDate] = useState(
        new Date('2021-01-01T02:00:00.000Z') //date is formated as ISO865
    )
    ///2020-12-30T00:00:00.000Z

    const handleDateChange = (date) => {
        //
        setSelectedDate(date)

        console.log(selectedDate)
    }
    const classes = useStyles()

    function populateObject(event) {
        //the empty object is populated by grabbing id and input data
        setNewEvent({ ...newEvent, [event.target.id]: event.target.value })
    }

    async function handleSubmit(event) {
        //after populating the empty object from all inputs the event does the post request to the database
        event.preventDefault()
        console.log('clicked')
        console.log(newEvent)

        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(newEvent)
        }
        const response = await fetch(
            `http://localhost:6000/events`,
            requestOptions
        ) //post request is sent to events listing
        const data = await response.json()
        console.log(data)

        event.target.reset() //reset input boxes
    }

    return (
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
                    onChange={(event) => populateObject(event)}
                />

                <MuiPickersUtilsProvider
                    utils={LuxonUtils}
                    direction="row"
                    //id="date"
                    // onChange={(event) => populateObject(event)}
                >
                    <Grid container justify="space-around" direction="row">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date"
                            label="Date"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                            className={classes.datetime}
                            //onChange={(event) => populateObject(event)}
                        />

                        <KeyboardTimePicker
                            margin="normal"
                            id="time"
                            label="Time"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time'
                            }}
                            className={classes.datetime}
                            // onChange={(event) => populateObject(event)}
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
                    InputProps={{ classes: { input: classes.description } }}
                    onChange={(event) => populateObject(event)}
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
    )
}
export default AdminEventPage
