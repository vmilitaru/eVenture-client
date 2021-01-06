import React from 'react'
import { useStyles } from './ButtonMaterialCss'
import Button from '@material-ui/core/Button'
<<<<<<< HEAD

function ButtonGeneral({ text, onClick, ...props }) {
    const classes = useStyles()
    return (
        <div className="Button">
            <Button
                onClick={onClick}
                className={!props.secondary ? classes.Button : classes.Button2}
                {...props}
            >
=======
function ButtonGeneral({ text, onClick,disabled,type}) {
    return (
        <div className="Button">
            <Button color="primary" variant="outlined" onClick={onClick} disabled={disabled} type={type}>
>>>>>>> val-image-uploader
                {text}
            </Button>
        </div>
    )
}
export default ButtonGeneral
