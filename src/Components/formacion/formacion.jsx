import React, { Fragment } from 'react'
import './formacion.css'
import { Formaciones } from '../../Files/Formaciones'
import { Collapse } from '../collapse/collapse'

export const Formacion = () => {

    return (
        <Fragment>
            <div className="contenedor-gral">
                <div className="incio">
                    <h1 className="title">Formación</h1>
                    {Formaciones.map((form) =>
                        <Collapse collapsed={true} title={form.titulo}>
                            <div className="div-formacion">
                                <h3>{form.institucion}</h3>
                                <p className="item-proyectos">{form.fecha}</p>
                                <p className="item-proyectos">{form.estado}</p>
                                <img className="img-formacion" src={form.certificado} alt="certificado" />
                            </div>
                        </Collapse>
                    )}
                </div>
            </div>
        </Fragment>

    )
}