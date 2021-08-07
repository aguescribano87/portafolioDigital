import React from 'react'
import './button.css'

export const Button = ({ value, disabled, onClick }) => {

    return (
        <button onClick={onClick} disabled={disabled} className="boton">{value}</button>
    )
}