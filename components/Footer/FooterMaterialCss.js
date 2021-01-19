import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'static',
        backgroundColor: `#4ab473`,
        bottom: '0',
        boxShadow: '0px -1.75px 1px -1px gray'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-evenly'
    }
}))
