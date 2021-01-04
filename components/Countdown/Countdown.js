import React, { useState, useEffect } from 'react'

const eventDate = new Date('2020-12-31')
console.log(eventDate)

function Countdown() {
    const [countdown, setCountdown] = useState('')
    const [distance, setDistance] = useState(1)

    useEffect(() => {
        if (distance > 0) {
            // Set the date we're counting down to
            var countDownDate = new Date('Dec 31, 2020, 12:50:30').getTime()

            // Update the count down every 1 second
            var x = setInterval(() => {
                // Get today's date and time
                var now = new Date().getTime()

                // Find the distance between now and the count down date
                setDistance(countDownDate - now)

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
