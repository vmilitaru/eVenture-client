import React from 'react'

function ButtonGeneral({ text, onClick }) {
    return (
        <div className={Button}>
            <Button color="primary" variant="outlined" onClick={onClick}>
                {text}
            </Button>
        </div>
    )
}
export default ButtonGeneral
