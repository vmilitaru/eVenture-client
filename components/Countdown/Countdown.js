import { ClearTwoTone } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'

function Countdown({ eventDate, eventTime }) {
    const [distance, setDistance] = useState(getDistance())

    let splitDate = eventDate.split('-')
    let splitTime = eventTime.split(':')

    // new Date(year, month, day, hours, minutes, seconds, milliseconds)

    const eventDateTime = new Date(
        splitDate[0],
        splitDate[1] - 1,
        splitDate[2],
        splitTime[0],
        splitTime[1],
        splitTime[2]
    )

    function getDistance() {
        const eventA = new Date(`${eventDate}T${eventTime}.000Z`).getTime()
        return Number(eventA) - Date.now()
    }

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    useEffect(() => {
        if (!distance || distance > 0) {
            // Set the date we're counting down to
            let countDownDate = eventDateTime.getTime()

            // Update the count down every 1 second
            let x = setTimeout(() => {
                // Get today's date and time
                let now = new Date().getTime()

                // Find the distance between now and the count down date
                setDistance(parseInt(countDownDate - now))
            }, 1000)

            return () => {
                clearTimeout(x)
            }
        }
    }, [distance])

    return (
        <div>
            {distance && (
                <p>{`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`}</p>
            )}
        </div>
    )
}

export default Countdown
