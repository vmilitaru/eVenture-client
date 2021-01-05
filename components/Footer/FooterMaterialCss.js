import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'fixed',
        backgroundColor: `${theme.palette.primary.contrastText}`,
        bottom: 0
    },

    toolbar: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
    // div: {
    //     display: 'flex',
    //     justifyContent: 'space-evenly',
    //     alignItems: 'center'
    // }
}))
