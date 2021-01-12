import React from 'react'
import { useStyles } from './ButtonMaterialCss'
import Button from '@material-ui/core/Button'

function ButtonGeneral({ text, onClick, disabled, type, ...props }) {
    const classes = useStyles()
    return (
        <div className="Button">
            <Button
                onClick={onClick}
                className={!props.secondary ? classes.Button : classes.Button2}
                {...props}
                disabled={disabled}
                type={type}
            >
                {text}
            </Button>
        </div>
    )
}
export default ButtonGeneral
