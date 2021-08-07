import React, { Fragment } from 'react'
import { FileProyectos } from '../../Files/FileProyectos'
import { Button } from '../button/button'
import './proyectos.css'
import { Collapse } from '../collapse/collapse'
export const Proyectos = () => {

    return (
        <Fragment>
            <div className="contenedor-gral">
                <div className="incio">
                    <h1 className="title">Proyectos</h1>
                    {FileProyectos.map((p) =>
                        <Collapse collapsed={true} title={p.title}>
                            <div className="div-formacion">
                                {p.func ? <div className="menu-proyectos"><h3>Funcionalidades</h3> {p.func.map((i) => <p className="item-proyectos">{i}</p>)} </div> : ""}
                                {p.tecno ? <div className="menu-proyectos"><h3>Tecnologías</h3> {p.tecno.map((i) => <p className="item-proyectos">{i}</p>)} </div> : ""}
                                {p.links.map((l) => <a href={l.github}><Button value="GitHub" /></a>)}
                                {p.links.map((l) => l.host ? <a href={l.host}><Button value="Host" /></a> : "")}
                            </div>
                        </Collapse>
                    )}
                </div>
            </div>
        </Fragment>
    )
}
