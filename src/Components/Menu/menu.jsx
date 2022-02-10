import React from 'react'
import { Banner } from '../banner/banner'
import reactjsbanner from '../../Img/reactjs-banner.jpg'
import imgMeta from '../../Img/imgMeta.png'
import { useParams } from 'react-router-dom'
import { Categorias } from '../../Files/Categorias'
import { MetaStyle } from '../metaStyle/metaStyle'

export const Menu = () => {
    const { id } = useParams()

    const handleTitle = (title) => {
        switch (title) {
            case 'sobremi':
                return 'AE - Sobre mi'
            case 'formacion':
                return 'AE - Formación'
            case 'habilidades':
                return 'AE - Habilidades'
            case 'experiencia':
                return 'AE - Experiencia laboral'
            case 'contacto':
                return 'AE - Contacto'

            default:
                break;
        }
    }

    return (
        <div>
            <Banner banner={reactjsbanner} />
            <MetaStyle
                title={handleTitle(id)}
                imageUrl={imgMeta}
                imageAlt={`${handleTitle(id)} img`}
                description={`Descripción ${handleTitle(id)}`}
            />
            {Categorias.map((cat) => {
                if (cat.id === id) {
                    return cat.component
                }
                return ""
            }
            )}
        </div>
    )
}