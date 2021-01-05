import React, { useState } from 'react'
//import NavBar from '../components/NavBar/NavBar'
//import Footer from '../component/Footer/Footer'
//import Input from '../components/Input/Input'
import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
//import ImageUploader from 'react-images-upload'
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
    const [title, setTitle] = useState('empty title')
    const [date, setDate] = useState(DateTime.utc())
    const [timeObj, setTime] = useState(DateTime.utc())

    const handleDateChange = (d) => {
        console.log(d)
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
        //after populating the empty object from all inputs the event does the post request to the database
        event.preventDefault()
        console.log('clicked')

        console.log(title)
        console.log(date)
        console.log(time)
        const time = timeObj.toISOTime({
            suppressSeconds: true,
            includeOffset: false,
            suppressMilliseconds: true
        })

        console.log({ title, date, time })
        const requestOptions = {
            mode: 'cors',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ title, date, time })
        }

        const response = await fetch(
            `http://localhost:5000/events`,
            requestOptions
        ) //post request is sent to events listing

        //const response = await fetch(`${serverUrl}/events`, requestOptions) //post request is sent to events listing

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
                    onChange={(e) => setTitle(e.target.value)}
                />

                <MuiPickersUtilsProvider utils={LuxonUtils} direction="row">
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
                    InputProps={{ classes: { input: classes.description } }}
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
