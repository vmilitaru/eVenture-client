import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        maxHeight: 600
    },
    card: {
        backgroundColor: 'theme.palette.primary.dark'
    },
    media: {
        height: '10',
        padding: '1.5rem',
        width: '20rem',
        height: '20 rem',
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
})
