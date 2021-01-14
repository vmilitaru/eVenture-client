import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    heading: {
        padding: '1rem',
        letterSpacing: '0.025rem',
        wordSpacing: '0.25rem'
    },
    description: {
        margin: '2vw',
        height: '20vw',
        width: '39vw'
    },
    datetime: {
        position: 'absolute',
        backgroundColor: 'red',
        marginTop: '10vw',
        padding: '1vw'
    },
    // date: {
    //     margin: '1rem'
    // },
    // time: {
    //     padding: '1rem'
    // },
    button: {
        margin: theme.spacing(1),
        padding: '2vw',
        height: '4vw',
        width: '20vw'
    },
    speaker: {
        backgroundColor: 'green',
        width: '12vw'
    },
    location: {
        backgroundColor: 'blue'
    },
    tickets: {
        backgroundColor: 'pink'
    }
}))
