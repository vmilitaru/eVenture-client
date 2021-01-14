import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        width: '25vw',
        height: '30vw',
        maxHeight: '30vw',
        margin: '2vw',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        // boxShadow: '0.1vw 0.1vw 0.5vw -0.05vw grey'
        '&:hover': {
            boxShadow: '0vw 0.1vw 0.5vw 0vw darkgray'
        }
    },
    card: {
        // backgroundColor: `${theme.palette.primary.light}`
    },
    cardcontent: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        textDecoration: 'none'
    },
    media: {
        height: '15vw',
        // padding: '1.5rem',
        // width: '25vw',
        maxHeight: '20vw',
        objectfit: 'contain',
        position: 'relative'
    },
    title: {
        variant: 'h2'
    },
    date: {
        color: 'black',
        textShadow: 'none',
        fontSize: '1rem',
        padding: '0.5rem'
    }
}))
