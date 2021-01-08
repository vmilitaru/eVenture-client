import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        width: '25vw',
        height: '30vw',
        maxHeight: '30vw',
        margin: '2vw',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        boxShadow: '0.1vw 0.1vw 0.5vw -0.05vw grey'
    },
    card: {
        backgroundColor: `${theme.palette.primary.light}`
    },
    cardcontent: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        textDecoration: 'none'
    },
    media: {
        // display: 'flex',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        height: '20vw',
        padding: '1.5rem',
        width: '25vw',
        objectfit: 'cover'
    },
    title: {
        variant: 'h2'
    },
    date: {
        color: 'black',
        textShadow: 'none',
        fontSize: '1rem'
    }
}))
