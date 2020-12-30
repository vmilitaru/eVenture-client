import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
//import ImageUploader from 'react-images-upload'
import LuxonUtils from '@date-io/luxon'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch'
        },
        height: 60
    },
    title: {
        height: 35
    },
    description: {
        height: 200
    }
}))

function EditEventsInputs() {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date('2020-01-01T09:11:54')
    )

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    const classes = useStyles()

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Title"
                    multiline
                    rows={4}
                    plceholder="Enter Event Description"
                    variant="outlined"
                    InputProps={{ classes: { input: classes.title } }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={2}
                    plceholder="Enter Event Title"
                    variant="outlined"
                    InputProps={{ classes: { input: classes.description } }}
                />
                <MuiPickersUtilsProvider utils={LuxonUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date'
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time'
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </div>
        </form>
    )
}

export default EditEventsInputs
