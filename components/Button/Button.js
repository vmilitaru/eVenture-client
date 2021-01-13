import React, { forwardRef } from 'react'
// import { useStyles } from './button.material'
import styles from './button.module.css'

const ButtonGeneral = forwardRef(
    ({ text, onClick, disabled, href, type, ...props }, ref) => {
        // const classes = useStyles()
        return (
            <button
                onClick={onClick}
                className={styles.button}
                {...props}
                disabled={disabled}
                type={type}
                href={href}
                ref={ref}
            >
                {text}
            </button>
        )
    }
)
export default ButtonGeneral
