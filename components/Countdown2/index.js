import React, { useState, useEffect } from 'react'
import style from './Countdown.module.css'
import Typography from '@material-ui/core/Typography'
import { StylesProvider } from '@material-ui/core'
// function component
const AnimatedCard = ({ animation, digit, unit }) => {
    return (
        <div className={`${style.flipCard} ${animation}`}>
            <span>{digit}</span>
        </div>
    )
}

// function component
const StaticCard = ({ position, digit, unit }) => {
    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    )
}

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
    // assign digit values
    let currentDigit = digit
    let previousDigit = digit + 1

    // to prevent a negative value
    if (unit !== 'hours' || unit !== 'days') {
        previousDigit = previousDigit === 0 ? 59 : previousDigit
    } else {
        previousDigit = previousDigit === 1 ? 23 : previousDigit
    }

    // add zero
    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`
    }

    // shuffle digits
    const digit1 = shuffle ? previousDigit : currentDigit
    const digit2 = !shuffle ? previousDigit : currentDigit

    // shuffle animations
    const animation1 = shuffle ? style.fold : style.unfold
    const animation2 = !shuffle ? style.fold : style.unfold

    return (
        <div className={style.flipUnitContainer}>
            <StaticCard position={style.upperCard} digit={currentDigit} />
            <StaticCard position={style.lowerCard} digit={previousDigit} />
            <AnimatedCard digit={digit1} animation={animation1} />
            <AnimatedCard digit={digit2} animation={animation2} />
        </div>
    )
}

function FlipClock({ eventDate, eventTime }) {
    const [hour, setHour] = useState(0)
    const [hourShuffle, setHourShuffle] = useState(true)
    const [minute, setMinute] = useState(0)
    const [minuteShuffle, setMinuteShuffle] = useState(true)
    const [second, setSecond] = useState(0)
    const [secondShuffle, setSecondShuffle] = useState(true)
    const [day, setDay] = useState(0)
    const [dayShuffle, setDayShuffle] = useState(true)
    const [distance, setDistance] = useState(getDistance())
    let splitDate = eventDate.split('-')
    let splitTime = eventTime.split(':')

    const eventDateTime = new Date(
        splitDate[0],
        splitDate[1] - 1,
        splitDate[2],
        splitTime[0],
        splitTime[1],
        splitTime[2]
    )
    function getDistance() {
        // get new date
        const eventA = new Date(`${eventDate}T${eventTime}.000Z`).getTime()
        return Number(eventA) - Date.now()
    }

    // set time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    useEffect(() => {
        if (!distance || distance > 0) {
            // Set the date we're counting down to
            let countDownDate = eventDateTime.getTime()

            // Update the count down every 1 second
            let x = setTimeout(() => {
                // Get today's date and time
                let now = new Date().getTime()
                // on day change, update days and shuffle state
                if (days !== day) {
                    setDay(days)
                    setDayShuffle(!dayShuffle)
                }
                // on hour chanage, update hours and shuffle state
                if (hours !== hour) {
                    //const hoursShuffle = hoursShuffle;
                    setHour(hours)
                    setHourShuffle(!hourShuffle)
                }
                // on minute chanage, update minutes and shuffle state
                if (minutes !== minute) {
                    //const minutesShuffle = !this.state.minutesShuffle;
                    setMinute(minutes)
                    setMinuteShuffle(!minuteShuffle)
                }
                // on second chanage, update seconds and shuffle state
                if (seconds !== second) {
                    // const secondsShuffle = !this.state.secondsShuffle;
                    setSecond(seconds)
                    setSecondShuffle(!secondShuffle)
                }

                // Find the distance between now and the count down date
                setDistance(parseInt(countDownDate - now))
            }, 1000)

            return () => {
                clearTimeout(x)
            }
        }
        console.log(days, hours, minutes, seconds)
    }, [distance])

    return (
        <div className={style.flipClock}>
            <FlipUnitContainer unit={'days'} digit={day} shuffle={dayShuffle} />
            <FlipUnitContainer
                unit={'hours'}
                digit={hour}
                shuffle={hourShuffle}
            />
            <div className={style.separator}>:</div>
            <FlipUnitContainer
                unit={'minutes'}
                digit={minute}
                shuffle={minuteShuffle}
            />
            <div className={style.separator}>:</div>
            <FlipUnitContainer
                unit={'seconds'}
                digit={second}
                shuffle={secondShuffle}
            />
            {/* <div className={style.time}>
                <div className={style.timeType}>
                    <h2 className={style.timetext}>Days </h2>
                </div>
                <div className={style.timeType}>
                    <h2 className={style.timetext}>Hours </h2>
                </div>
                <div className={style.timeType}>
                    <h2 className={style.timetext}>Minutes </h2>
                </div>
                <div className={style.timeType}>
                    <h2 className={style.timetext}>Seconds </h2>
                </div>
            </div> */}
        </div>
    )
}

export default FlipClock
