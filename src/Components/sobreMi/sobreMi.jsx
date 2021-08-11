import React, { Fragment } from 'react'
import './sobreMi.css'
import { sobremi } from '../../Files/sobremi'

export const SobreMi = () => {


    return (
        <Fragment>
            <div className="contenedor-gral">
                <div className="incio animate__animated animate__pulse">
                    <h1 className="title">Sobre Mi</h1>
                    <p className="parrafo-incio">{sobremi}</p>
                </div>
            </div>
        </Fragment>

    )
}