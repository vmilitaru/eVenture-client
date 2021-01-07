import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'static',
        backgroundColor: `${theme.palette.third.light}`,
        bottom: 0,
        borderTop: `2px solid ${theme.palette.hint} `,
        boxShadow: `0px 0.6px 3px 1.5px ${theme.palette.third.dark}`
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    div: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'primary',
        // backgroundColor: 'white',
        width: '15rem',
        padding: '0.2rem'
    }
    // // icons: {
    //     // display: 'flex',
    //     // alignItems: 'center',
    //     backgroundColor: 'white',
    //     borderRadius: '90%',
    //     padding: '0.2rem'
    // }
}))
