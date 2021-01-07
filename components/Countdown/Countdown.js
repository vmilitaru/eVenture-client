import React, { useState, useEffect } from 'react'

function Countdown({ eventDate }) {
    const [countdown, setCountdown] = useState('')
    const [distance, setDistance] = useState(1)

    console.log({ eventDate })
    const eventDateConverted = new Date(eventDate).getTime()
    const eventDateAsInt = parseInt(eventDateConverted)
    // console.log({ eventDateConverted })

    useEffect(() => {
        console.log({ eventDateAsInt })
        console.log({ distance })

        if (distance > 0) {
            // Set the date we're counting down to

            // Update the count down every 1 second
            const x = setInterval(() => {
                // Get today's date and time
                const now = new Date().getTime()
                const nowAsInt = parseInt(now)
                console.log({ nowAsInt })

                // Find the distance between now and the count down date

                const distanceBetweenTimes = eventDateConverted - now
                console.log({ distanceBetweenTimes })
                setDistance(distanceBetweenTimes)

                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                )
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)

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
