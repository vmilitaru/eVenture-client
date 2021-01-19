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
        // marginTop: '1.75rem',
        boxShadow: '0px 1.75px 1px -1px grey',
        backgroundColor: '#4ab473',
        height: '4.25rem'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        width: '78%',
        margin: 'auto'
    },
    searchInput: {
        color: '#ededed',
        width: '100%',
        fontFamily: 'Lato',
        padding: '0'
    },
    button: {
        backgroundColor: '#efefef',
        fontFamily: 'Lato',
        fontWeight: '600',
        boxShadow: '0px 1px 4px #0000000a',
        padding: '0.5rem',
        color: '#3A413D',
        borderRadius: '2px',
        border: 'none',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#e4e4e4'
        }
    },
    home: {
        color: '#efefef',
        marginLeft: '1rem'
    },
    menu: {
        padding: '0'
    }
}))
