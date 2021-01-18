import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    heading: {
        padding: '1rem',
        letterSpacing: '0.025rem',
        wordSpacing: '0.25rem'
    },
    //this styling would be good to replace with css modules
    // form: {
    //     padding: '2rem',
    //     backgroundColor: `${theme.palette.primary.main}`,
    //     display: 'flex',
    //     flexDirection: 'row'
    // },
    // left: {
    //     width: '50%',
    //     backgroundColour: 'green'
    // },
    // imagebox: {
    //     height: '12rem',
    //     maxwidth: '40vw',
    //     maxheight: '60vw',
    //     backgroundColor: 'yellow',
    //     margin: '1vw'
    // },
    // right: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     justifyContent: 'center',
    //     width: '50%',
    //     backgroundColor: 'white'
    // },
    // empty: {
    //     backgroundColor: 'purple',
    //     width: '12vw',
    //     margin: '2vw',
    //     padding: '2vw'
    // },
    // title: {
    //     margin: '2vw',
    //     height: '1vw',
    //     width: '40vw'
    // },
    description: {
        height: '15rem',
        width: '28em',
        // maxheight: '15rem',
        // maxwidth: '40rem',
        backgroundcolor: 'white',
        margin: '1rem',
        padding: '0.5rem'
    }
    // datetime: {
    //     position: 'absolute',
    //     backgroundColor: 'red',
    //     marginTop: '10vw',
    //     padding: '1vw'
    // },
    // // date: {
    // //     margin: '1rem'
    // // },
    // // time: {
    // //     padding: '1rem'
    // // },
    // button: {
    //     margin: theme.spacing(1),
    //     padding: '2vw',
    //     height: '4vw',
    //     width: '20vw'
    // },
    // speaker: {
    //     backgroundColor: 'green',
    //     width: '12vw'
    // },
    // location: {
    //     backgroundColor: 'blue'
    // },
    // tickets: {
    //     backgroundColor: 'pink'
    // }
}))
