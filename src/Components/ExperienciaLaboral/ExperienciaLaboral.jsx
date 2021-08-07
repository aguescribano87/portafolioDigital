import React from 'react'
import { ExpLaboral } from '../../Files/ExpLaboral'
import { Collapse } from '../collapse/collapse'

export const ExperienciaLaboral = () => {

    return (
        <div className="contenedor-gral">
            <div className="incio">
                <h1 className="title">Esperiencia Laboral</h1>
                {ExpLaboral.map((exp) =>
                    <Collapse collapsed={true} title={exp.empresa}>
                        <p>{exp.tiempo}</p>
                        <p>{exp.cargo}</p>
                    </Collapse>
                )}

            </div>
        </div>
    )
}