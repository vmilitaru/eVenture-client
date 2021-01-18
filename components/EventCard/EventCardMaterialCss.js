import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        borderRadius: '8px',
        boxShadow: '0vw 0.1vw 0.1vw 0.1vw #dfdfdf',
        '&:hover': {
            boxShadow: '0vw 0.1vw 0.5vw 0vw darkgray',
            backgroundColor: 'white'
        }
    },
    card: {
        // backgroundColor: `${theme.palette.primary.light}`
        width: '100%',
        height: '100%',
        textAlign: 'inherit',
        '&:hover': {
            cursor: 'default',
            backgroundColor: 'white'
        }
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        textAlign: 'left',
        padding: '1vw 1vw 1vw 1vw',
        height: '7.5vw',
        '&:hover': {
            backgroundColor: `${theme.palette.primary.contrastText}`
        }
    },
    media: {
        height: '9.5vw',
        maxHeight: '9.5vw',
        objectfit: 'contain',
        position: 'relative',
        borderRadius: '8px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '1.2vw',
        margin: '0',
        padding: '0 0 0.5vw 0',
        overflow: 'hidden',
        textOverflow: 'ellipsis-word',
        whiteSpace: 'nowrap',
        wordBreak: 'break-all',
        width: '20rem'
    },
    date: {
        fontFamily: 'Mulish',
        letterSpacing: '0em',
        color: 'gray',
        textShadow: 'none',
        fontSize: '0.8vw'
    }
    // event: {
    //     display: flex;
    //     flex-direction: column;
    //     padding: 1.5rem;
    //     height: 100%;
    //     width: 50%;
    //     border-width: 0.2rem;
    //     justify-content: space-evenly;
    //     align-items: left;
    //     position: relative;
    // }
}))
