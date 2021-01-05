import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    },
    appBar: {
        elevation: 0,
        position: 'fixed',
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginTop: '1.75rem',
        boxShadow: '0px 1.75px 1px -1px grey',
        backgroundColor: `${theme.palette.secondary.main}`
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 10),
        color: theme.palette.primary.contrastText,
        border: theme.palette.primary.light
    }
}))
