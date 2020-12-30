import React from 'react'
import Button from '@material-ui/core/Button'
function ButtonGeneral({ text, onClick }) {
    return (
        <div className="Button">

            <Button color="primary" variant="outlined" onClick={onClick}>

                {text}
            </button>
        </div>
    )
}
export default ButtonGeneral
