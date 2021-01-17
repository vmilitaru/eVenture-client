import React from 'react'
import TextField from '@material-ui/core/TextField'
import LuxonUtils from '@date-io/luxon'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import UploadImage from '../../components/ImageUploader/index'
import ButtonGeneral from '../../components/Button/Button'
import styles from './EventForm.module.css'

// import { useStyles } from '../../styles/specificeventMaterialcss'

export default function EventForm({
    handleSubmit,
    handleDateChange,
    handleTimeChange,
    handleFileInputChange,
    title,
    description,
    date,
    time,
    speaker,
    location,
    numtickets,
    image,
    setTitle,
    setDescription,
    setSpeaker,
    setLocation,
    setNumTickets,
    setEditing,
    setImage
}) {
    const classes = useStyles()

    return (
        <article className={styles.mainContainer}>
            <form
                autoComplete="off"
                noValidate
                onSubmit={(event) => handleSubmit(event)}
            >
                <section className={styles.card}>
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
                </section>
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
                            value={time}
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
                    helperText={speaker.length < 1 ? 'Please enter text' : ' '}
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
                    helperText={location.length < 1 ? 'Please enter text' : ' '}
                />
                <TextField
                    className={classes.tickets}
                    id="tickets"
                    label="Tickets"
                    value={numtickets}
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

                <UploadImage
                    handleFileInputChange={handleFileInputChange}
                    image={image}
                    setImage={setImage}
                />

                <ButtonGeneral
                    // id="button"
                    // type="submit"
                    // variant="contained"
                    // color="primary"
                    // size="large"
                    // className={classes.button}
                    // disabled={!previewSource}
                    text={'SAVE'}
                />
                <ButtonGeneral
                    text={'CANCEL'}
                    onClick={() => setEditing(false)}
                />
            </form>
        </article>
    )
}
