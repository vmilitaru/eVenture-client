import React from 'react'

import ButtonGeneral from '../Button/Button.js'
import { useStyles } from '../NavBar/NavBarMaterialCss'
import Link from 'next/link'

export default function MyEventsButton() {
    const classes = useStyles()

    return (
        <Link href="/my-events" passHref>
            <ButtonGeneral
                className={classes.button}
                text={'My Events'}
                //style={{ marginRight: '15px' }}
            />
        </Link>
    )
}
