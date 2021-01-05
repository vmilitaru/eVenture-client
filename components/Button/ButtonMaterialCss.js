import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    Button: {
        backgroundColor: `${theme.palette.primary.light}`,
        variant: 'outlined',
        padding: '0.5rem',
        margin: '0rem',
        boxShadow: '0.1rem 0.01rem 0.1rem 0.01rem grey',
        color: `${theme.palette.primary.contrastText}`
    },
    Button2: {
        backgroundColor: `${theme.palette.secondary.contrastText}`,
        variant: 'outlined',
        padding: '0.5rem',
        margin: '0rem',
        boxShadow: '0.1rem 0.01rem 0.1rem 0.01rem grey',
        color: `${theme.palette.primary.contrastText}`
    }
}))
