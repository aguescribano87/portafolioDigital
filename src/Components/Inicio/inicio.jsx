import React, { Fragment } from 'react'
import './inicio.css'
import { Banner } from '../banner/banner'
import bannerFotoInicio from '../../Img/bannerFotoInicio.jpeg'
import { MetaStyle } from '../metaStyle/metaStyle'

export const Inicio = () => {

    return (
        <Fragment>
            <MetaStyle
                title={'Agustin Escribano'}
                description='Bienvenido a mi Portafolio digital, está creado 100% por mí, usando React JS
                y CSS.'
                imageUrl={bannerFotoInicio}
                imageAlt={'banner img'}
            />
            <Banner banner={bannerFotoInicio} />
            <div className="contenedor-gral">
                <div className="incio animate__animated animate__pulse">
                    <h1 className="title">Hola, Mi Nombre es Agustin Escribano</h1>
                    <h2 className="sub_title-incio">Soy Front-End Developer</h2>
                    <p className="parrafo-incio">
                        Bienvenido a mi Portafolio digital, está creado 100% por mí, usando React JS
                        y CSS, sin ningún framework extra.
                        Aquí podrás ver algunos de mis proyectos propios y
                        también trabajos realizados en cursos de desarrollo web.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}