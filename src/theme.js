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
        }
    },

    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
})

export default theme
