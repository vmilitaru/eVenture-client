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
        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)'
        }
    },
    text: {
        Object: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
            divider: 'rgba(0, 0, 0, 0.12)'
        }
    },
    action: {
        Object: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.04)',
            hoverOpacity: '0.04',
            selected: 'rgba(0, 0, 0, 0.08)',
            selectedOpacity: 0.08,
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
            disabledOpacity: 0.38,
            focus: 'rgba(0, 0, 0, 0.12)',
            focusOpacity: 0.12,
            activatedOpacity: 0.12
        },
        props: Object
    },
    typography: {
        Object: {
            htmlFontSize: 16,
            fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700
        },
        h1: {
            Object: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
                fontWeight: 300,
                fontSize: '6rem',
                lineHeight: 1.167,
                letterSpacing: '-0.01562em'
            }
        },
        h2: {
            Object: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
                fontWeight: 300,
                fontSize: '3.75rem',
                lineHeight: 1.2,
                letterSpacing: '-0.00833em'
            }
        },
        h3: {
            Object: {
                fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
                fontWeight: 400,
                fontSize: '3rem',
                lineHeight: 1.167,
                letterSpacing: '0em'
            }
        }
    }
})

export default theme
