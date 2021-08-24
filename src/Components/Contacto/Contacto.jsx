import React from 'react'
import { Button } from '../button/button'
import { BtnEspecial } from './btnEspecial/btnEspecial'

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
                
                <BtnEspecial btn="whatsapp" />
                <BtnEspecial btn="linkedin" />
                <BtnEspecial btn="github" />
            </div>
        </div>
    )
}