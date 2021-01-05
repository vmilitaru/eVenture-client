import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    Button: {
        backgroundColor: `${theme.palette.primary.light}`,
        variant: 'outlined',
        padding: '0.5rem',
        margin: '1rem',
        boxShadow: '0.1rem 0.01rem 0.1rem 0.01rem grey'
    }
}))
