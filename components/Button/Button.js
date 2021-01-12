import React, {forwardRef} from 'react'
import { useStyles } from './ButtonMaterialCss'


const  ButtonGeneral=forwardRef(({ text, onClick, disabled,href, type, ...props },ref)=>{
    const classes = useStyles()
    return (
        
            <button
                onClick={onClick}
                className={!props.secondary ? classes.Button : classes.Button2}
                {...props}
                disabled={disabled}
                type={type}
                href = {href}
                ref={ref}
            >
                {text}
            </button>
    )
})
export default ButtonGeneral
