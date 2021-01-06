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
        backgroundColor: `${theme.palette.third.light}`
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 10),
        color: theme.palette.primary.contrastText
    },
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
