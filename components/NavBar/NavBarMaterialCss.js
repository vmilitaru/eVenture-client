import { makeStyles } from '@material-ui/core/styles'
import { sizeWidth } from '@material-ui/system'

export const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    },

    appBar: {
        position: 'fixed',
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginTop: '1.75rem',
        boxShadow: '0px 1.75px 1px -1px grey',
        backgroundColor: `${theme.palette.third.light}`
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '3rem'
    },
    profile: {
        height: '3rem',
        weight: '3rem'
    },

    // image: {
    //     // height: '6.5rem',
    //     // position: 'absolute',
    //     right: '90%'
    // },
    // logo: {
    //     height: '6.5rem',
    //     position: 'absolute'
    // },
    button: {
        color: theme.palette.third.dark,
        '&:hover': { backgroundColor: `${theme.palette.third.light}` },
        backgroundColor: theme.palette.primary.contrastText,
        boxShadow: '0.1rem 0.01rem 0.1rem 0.014rem grey',
        fontWeight: 'bold',
        fontSize: '1rem',
        height: '1.75rem'
    }
}))
