import React, { Fragment } from 'react'
import './formacion.css'
import { Formaciones } from '../../Files/Formaciones'
import { Collapse } from '../collapse/collapse'

export const Formacion = () => {

    return (
        <Fragment>
            <div className="contenedor-gral">
                <div className="incio animate__animated animate__pulse">
                    <h1 className="title">Formación</h1>
                    {Formaciones.map((form) =>
                        <Collapse collapsed={true} title={form.titulo}>
                            <div className="div-formacion">
                                <h3>{form.institucion}</h3>
                                <h4>PERIODO
                                    <p className="item-proyectos">{form.fecha}</p>
                                </h4>
                                <h4>ESTADO
                                    <p className="item-proyectos">{form.estado}</p>
                                </h4>
                                {form.materias ?
                                    <h4> MATERIAS APROBADAS
                                        {form.materias.map((m) => <p className="item-proyectos">{m}</p>)}
                                    </h4> : ""}
                                {form.certificado ? <h4>CERTIFICADO
                                    <img className="img-formacion" src={form.certificado} alt="certificado" />
                                </h4> : ""}

                            </div>
                        </Collapse>
                    )}
                </div>
            </div>
        </Fragment>

    )
}