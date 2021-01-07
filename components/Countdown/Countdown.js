import React, { useState, useEffect } from 'react'

function Countdown({ eventDate, eventTime }) {
    const [countdown, setCountdown] = useState('')
    const [distance, setDistance] = useState(parseInt(new Date().getTime()))

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

    console.log({ eventDateTime })

    useEffect(() => {
        if (distance > 0) {
            // Set the date we're counting down to
            var countDownDate = eventDateTime.getTime()

            // Update the count down every 1 second
            var x = setInterval(() => {
                // Get today's date and time
                var now = new Date().getTime()

                // Find the distance between now and the count down date
                setDistance(parseInt(countDownDate - now))
                console.log({ distance })

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24))
                var hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
                var minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                )
                var seconds = Math.floor((distance % (1000 * 60)) / 1000)

                // Set coundown state
                setCountdown(
                    days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '
                )

                // Clear interval
                clearInterval(x)
            }, 1000)
        }
    }, [distance])

    return (
        <div>
            <p>{countdown}</p>
        </div>
    )
}

export default Countdown
