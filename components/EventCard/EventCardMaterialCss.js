import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        width: '25vw',
        height: '25vw',
        maxHeight: '25vw',
        margin: '2vw',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        boxShadow: '0.1vw 0.1vw 0.5vw -0.05vw grey'
        // boxShadow: '0px 1.75px 1px -1px grey',
    },
    card: {
        backgroundColor: `${theme.palette.primary.main}`
    },
    cardcontent: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: `${theme.palette.primary.contrastText}`
    },
    media: {
        height: '20rem',
        padding: '1.5rem',
        width: '30rem',
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
