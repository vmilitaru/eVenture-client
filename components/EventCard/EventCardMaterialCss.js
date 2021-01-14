import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        width: '25vw',
        maxWidth: '25vw',
        height: '20vw',
        maxHeight: '20vw',
        margin: '2vw',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        // boxShadow: '0.1vw 0.1vw 0.5vw -0.05vw grey'
        '&:hover': {
            boxShadow: '0vw 0.1vw 0.5vw 0vw darkgray'
        }
    },
    card: {
        // backgroundColor: `${theme.palette.primary.light}`
        width: '100%',
        textAlign: 'inherit'
    },
    cardcontent: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        textDecoration: 'none'
    },
    media: {
        height: '10vw',
        maxHeight: '10vw',
        objectfit: 'contain',
        position: 'relative'
    },
    title: {
        variant: 'h2'
    },
    date: {
        color: 'purple',
        textShadow: 'none',
        fontSize: '1rem',
        padding: '0.5rem',
        borderBottom: '0.01px inset black',
        margin: '0vw 3vw 0vw 3vw'
    }
}))
