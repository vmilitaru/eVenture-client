import React from 'react'
import { useStyles } from './ButtonMaterialCss'
import Button from '@material-ui/core/Button'

function ButtonGeneral({ text, onClick, ...props }) {
    const classes = useStyles()
    return (
        <div className="Button">
            <Button
                onClick={onClick}
                className={!props.secondary ? classes.Button : classes.Button2}
                {...props}
            >
                {text}
            </Button>
        </div>
    )
}
export default ButtonGeneral
