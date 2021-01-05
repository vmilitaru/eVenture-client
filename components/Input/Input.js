import React, { useState } from 'react'
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
    title: {
        margin: theme.spacing(2),
        top: 40, //doesnt work
        right: 40, //doesnt work
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

function EditEventsInputs() {
    const [selectedDate, setSelectedDate] = useState(
        new Date('2021-01-01T02:00:00.000Z')
    )
    ///2020-12-30T00:00:00.000Z

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.value)
    // }

    const classes = useStyles()

    return (
        <form noValidate autoComplete="off">
            <div>
                <TextField
                    id="title"
                    label="Title"
                    multiline
                    rows={4}
                    placeholder="Enter title of event"
                    variant="outlined"
                    InputProps={{ classes: { input: classes.title } }}
                    //onChange={(event) => populateObject(event)}
                />

                <MuiPickersUtilsProvider utils={LuxonUtils} direction="row">
                    <Grid container justify="space-around" direction="row">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date"
                            label="Date picker dialog"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                            //onChange={(event) => populateObject(event)}
                            className={classes.datetime}
                        />

                        <KeyboardTimePicker
                            margin="normal"
                            id="date"
                            label="Time picker"
                            value={selectedDate}
                            onChange={handleDateChange}
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

export default EditEventsInputs

// {
//     title: '',
//     banner: '',
//     date: '',
//     speaker: '',
//     description: '',
//     numtickets: '',
//     location: ''
// }
