import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'static',
        backgroundColor: `#4ab473`,
        bottom: '0',
        boxShadow: '0rem -0.1rem 0.2rem 0.01rem darkgray'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
}))
