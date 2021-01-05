import React from 'react'
import { useStyles } from './ButtonMaterialCss'
import Button from '@material-ui/core/Button'
function ButtonGeneral({ text, onClick }) {
    const classes = useStyles()
    return (
        <div className="Button">
            <Button onClick={onClick} className={classes.Button}>
                {text}
            </Button>
        </div>
    )
}
export default ButtonGeneral
