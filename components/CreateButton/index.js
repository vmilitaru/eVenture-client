import React from 'react'

import ButtonGeneral from '../Button/Button.js'
import { useStyles } from '../NavBar/NavBarMaterialCss'
//import {useAuth} from '../AuthContext/index'
import {useRoute} from '../RouteProvider'



export default function CreateEventButton() {
    const {userRole,isAuthenticated} = useRoute()
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
