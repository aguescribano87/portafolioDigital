import React from 'react'
import { Button } from '../button/button'

export const Contacto = () => {
    console.log(<a href="https://github.com/aguescribano87"><Button value="GitHub" /></a>)
    return (
        <div className="contenedor-gral">
            <div className="incio animate__animated animate__pulse">
                <h1 className="title">Contacto</h1>
                <h2>Teléfono</h2>
                <p>0351-157347333</p>

                <h2>Email</h2>
                <p>aguescribano87@gmail.com</p>
                <a href="https://linkedin.com/in/agustín-escribano-779919201"><Button value="LinkedIn" /></a>
                <br />
                <a href="https://github.com/aguescribano87"><Button value="GitHub" /></a>
            </div>
        </div>
    )
}