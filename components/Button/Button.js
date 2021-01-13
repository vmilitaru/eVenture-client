import React, { forwardRef } from 'react'
import styles from './Button.module.css'

const ButtonGeneral = forwardRef(
    ({ text, onClick, disabled, href, type, ...props }, ref) => {
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
