import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#62a3ff',
            main: '##1675d1',
            dark: '#004a9f',
            contrastText: '#fff'
        },
        secondary: {
            light: '#88ffff',
            main: '#4dd0e1',
            dark: '#009faf',
            contrastText: '#000'
        },
        Link: {
            target: '_blank',
            rel: 'noreferrer'
        }
    }
})

export default theme
