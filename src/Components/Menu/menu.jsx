import React from 'react'
import { Banner } from '../banner/banner'
import reactjsbanner from '../../Img/reactjs-banner.jpg'
import { useParams } from 'react-router-dom'
import { Categorias } from '../../Files/Categorias'

export const Menu = () => {
    const { id } = useParams()
    return (
        <div>
            <Banner banner={reactjsbanner} />
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