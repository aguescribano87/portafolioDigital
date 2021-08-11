import React from 'react'
import { Skills } from '../../Files/Skills'

export const Habilidades = () => {

    return (
        <div className="contenedor-gral">
            <div className="incio animate__animated animate__pulse">
                <h1 className="title">Habilidades</h1>
                <h2>Desarrollo WEB</h2>
                {Skills.map((skill) => <p className="item-proyectos">{skill}</p>)}
                <h2>Nivel de Inglés</h2>
                <p className="item-proyectos">Intermedio - Alto</p>


            </div>
        </div>
    )
}