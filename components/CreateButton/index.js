import React from 'react'

import ButtonGeneral from '../Button/Button.js'
import { useStyles } from '../NavBar/NavBarMaterialCss'
import {useAuth} from '../AuthContext/index'



export default function CreateEventButton() {
    const {userRole,isAuthenticated} = useAuth()
    const classes = useStyles()
    return (
        <div>
            {isAuthenticated && userRole && (
                <ButtonGeneral
                    className={classes.button}
                    text={'+'}
                    href="/create-event-page"
                    style={{marginRight:'15px'}}
                />
            )}
        </div>
    )
}
