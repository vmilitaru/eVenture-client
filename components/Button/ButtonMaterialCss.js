import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    Button: {
        backgroundColor: `${theme.palette.primary.light}`,
        variant: 'outlined',
        padding: '0.5rem',
        margin: '1rem'
    }
}))
