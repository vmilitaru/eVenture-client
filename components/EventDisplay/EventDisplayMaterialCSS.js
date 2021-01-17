import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    icons: {
        color: '#318855',
        backgroundColor: '#fafafa',
        boxShadow: '0px 1px 1px 1px darkgray',
        height: '2.5rem',
        width: '2.5rem',
        margin: '0 0.5rem 0 0.5rem',
        '&:hover': {
            backgroundColor: '#dfdfdf'
        }
    }
}))
