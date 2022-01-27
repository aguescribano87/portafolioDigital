import React from 'react'
import { ExpLaboral } from '../../Files/ExpLaboral'
import { Collapse } from '../collapse/collapse'
import { MetaStyle } from '../metaStyle/metaStyle'
import bannerReact from '../../Img/reactjs-banner.jpg'
export const ExperienciaLaboral = () => {

    return (
        <div className="contenedor-gral">
            < MetaStyle
                title={'Experiencia laboral'}
                nombrePlan={'Aqui podras ver mis ultimos trabajos'}
                imgEmpresa={bannerReact}
            />
            <div className="incio animate__animated animate__pulse">
                <h1 className="title">Esperiencia Laboral</h1>
                {ExpLaboral.map((exp) =>
                    <Collapse collapsed={true} title={exp.empresa}>
                        <h3>{exp.cargo}</h3>
                        <b>{exp.tiempo}</b>
                        {exp.descript && <p>{exp.descript}</p>}
                    </Collapse>
                )}

            </div>
        </div>
    )
}