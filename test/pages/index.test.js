import React from 'react'
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '../test-utils'
import HomePage from '@pages/index'

describe('HomePage', () => {
    it('should render the heading', () => {
        render(<HomePage />)

        const heading = screen.getByText(
            //needs to be changed <h tag> (heading) to incorporate material ui typography
            /Testing Next.js With Jest and React Testing Library/i
        )

        // we can only use toBeInTheDocument because it was imported
        // in the jest.setup.js and configured in jest.config.js
        expect(heading).toBeInTheDocument()
    })
})

// // pages/index.js example

// 	export default function HomePage() {
// 	  return (
// 	    <main>
// 	      <h1>Testing Next.js With Jest and React Testing Library</h1>
// 	    </main>
// 	  );
// 	}
