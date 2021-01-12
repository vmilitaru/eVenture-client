// test-utils.js
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import '@testing-library/jest-dom'

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const MaterialUiRenderer = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: MaterialUiRenderer, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
