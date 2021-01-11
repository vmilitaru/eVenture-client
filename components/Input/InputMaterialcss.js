export const useStyles = makeStyles((theme) => ({
    title: {
        margin: theme.spacing(2),
        // top: 40, //doesnt work
        // right: 40, //doesnt work
        height: '20 rem',
        width: 500,
        backgroundColor: 'red'
    },
    description: {
        margin: theme.spacing(2),
        height: 200,
        width: 500
    },
    datetime: {
        margin: theme.spacing(2),
        width: '30',
        textAlign: 'center'
    },
    button: {
        margin: theme.spacing(1)
    }
}))
