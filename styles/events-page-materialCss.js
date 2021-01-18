import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles({
    eventPage: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '75%',
        margin: 'auto',
        padding: '2rem 0 2rem 0'
    },
    linkSpecific: {
        textDecoration: 'none'
    },
    event: {
        width: '24%',
        margin: '1.5% 0 1.5% 0',
        height: '17vw'
    }
})
