import React from 'react'

import { render } from '../test-utils'
import EventCard from '../../components/EventCard/EventCard'

describe('EventCard', () => {
    let expectedProps

    beforeEach(() => {
        expectedProps = {
            title: 'expected text',
            banner: '123 Park Dr.',
            speaker: 'https://daydrink.io',
            location: ''
            ///etc
        }
    })

    test('should render title, banner, and etc', () => {
        const { getByText, getByAltText } = render(
            <EventCard {...expectedProps} />
        )
        const title = getByText(expectedProps.title)
        const banner = getByText(expectedProps.banner)
        const speaker = getByAltText(expectedProps.speaker)

        expect(title).toBeVisible()
        expect(banner).toBeVisible()
        expect(speaker).toBeVisible()
    })

    test('card with banner', () => {
        const { getByText } = render(<EventCard {...expectedProps} />)
        const img = getByText('enter img url here')

        expect(img).toBeVisible()
    })
})
