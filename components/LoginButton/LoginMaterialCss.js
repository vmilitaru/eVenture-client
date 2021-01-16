import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    // button: {
    //     color: theme.palette.third.dark,
    //     backgroundColor: theme.palette.primary.contrastText,
    //     boxShadow: '0.1rem 0.01rem 0.1rem 0.014rem grey',
    //     fontWeight: 'bold',
    //     fontSize: '1rem',
    //     height: '1.75rem'
    // }
    button: {
        backgroundColor: 'white',
        color: theme.palette.third.main
    }
}))
