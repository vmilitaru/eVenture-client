import React from 'react'

function ButtonGeneral({ text, onClick }) {
    return (
        <div className="Button">
            <button color="primary" variant="outlined" onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
export default ButtonGeneral
