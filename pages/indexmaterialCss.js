import { makeStyles } from '@material-ui/core/styles'
import { sizeWidth } from '@material-ui/system'

export const useStyles = makeStyles((theme) => ({
    background: {
        backgroundcolor: '#fffde7',
        height: '100vh',
        paddingtop: '50 px'
    },
    div: {
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'center',
        margintop: '1.75 rem',
        textalign: 'justify'
    },
    intro: {
        display: 'flex',
        flexdirection: 'column',
        padding: '20px',
        alignitems: 'center',
        paddingtop: '7%'
    },
    event: {
        display: 'flex',
        alignitems: 'center',
        flexdirection: 'row',
        color: 'blue',
        padding: '0rem',
        wordwrap: 'break-word',
        width: '90%',
        border: '1px solid #000000',
        borderwidth: '0.2rem',
        margin: 'auto'
    },
    eventDetails: {
        margin: '3.5%'
        /* padding: 3.32%; */
        /* border: 1px solid #000000;
    border-width: 2px; */
    },
    img: {
        display: 'flex',
        flexdirection: 'column',
        width: '46%',
        height: 'auto'
    }
}))
