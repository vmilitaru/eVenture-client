import { makeStyles } from '@material-ui/core/styles'
import theme from '../../src/theme'
export const useStyles = makeStyles({
    event: {
        display: 'flex',
        flexdirection: 'row',
        backgroundColor: `${theme.palette.primary.main}`,
        width: '70vw',
        padding: '2vw',
        justifyContent: 'center'
    },
    details: {
        backgroundColor: `${theme.palette.third.light}`,
        padding: '2vw',
        left: '3rem',
        textAlign: 'center'
    },
    img: {
        display: 'flex',
        flexdirection: 'row',
        width: '30vw',
        height: 'auto',
        maxWidth: '30vw',
        margin: '2vw'
    }
})
