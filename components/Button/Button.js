import React from 'react'
import Button from '@material-ui/core/Button'
function ButtonGeneral({ text, onClick,disabled,type}) {
    return (
        <div className="Button">
            <Button color="primary" variant="outlined" onClick={onClick} disabled={disabled} type={type}>
                {text}
            </Button>
        </div>
    )
}
export default ButtonGeneral
