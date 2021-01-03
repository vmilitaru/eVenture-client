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
// const emptyEvent = {
//   title: '',
//   banner: '',
//   date: '',
//   speaker: '',
//   description: '',
//   numtickets: '',
//   location: ''
// }

function AdminEventPage() {
    const emptyEvent = {
        title: 'hey',
        description: 'hi'
    }
    const [newEvent, setNewEvent] = useState(emptyEvent)
    const [selectedDate, setSelectedDate] = useState(
        new Date('2021-01-01T02:00:00.000Z')
    )
    ///2020-12-30T00:00:00.000Z

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    const classes = useStyles()

    function populateObject(event) {
        setNewEvent({ ...newEvent, [event.target.id]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        console.log('clicked')
        console.log(newEvent)
        //app.post on server end
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
        )
        const data = await response.json()
        console.log(data)
        event.target.reset()
    }

    return (
        <form
            noValidate
            autoComplete="off"
            onSubmit={(event) => handleSubmit(event)}
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
                    //onChange={(event) => populateObject(event)}
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
                        />

                        <KeyboardTimePicker
                            margin="normal"
                            id="date"
                            label="Time"
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

/*

  import comments from '../comments.json' //or can get object from payload

export default (req, res) => {
  res.status(200).json({ post: req.query.id, comments })
}

*/

/* 
function userHandler(req, res) {
  const {
    query: { title, banner, description, date, time },
    method,
  } = req

  switch (method) {
    case 'GET':
    //const res = await fetch(`http://localhost:6000/events/${id}`)
    //const data = await res.json()

      res.status(200).json({ id,banner, description, date, time })
      break
    case 'POST':
      //create an entry in your database
      break
    case 'PUT':
      // Update your database
      res.status(200).json({ id, banner, description, date, time  })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
    return (
        <React.Fragment>
            <NavBar />
            <Input />
        </React.Fragment>
    )
}
*/
