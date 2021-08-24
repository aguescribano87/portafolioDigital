import React from 'react'
import './btnEspecial.css'
import { Links } from '../../../Files/Links'

export const BtnEspecial = ({ btn }) => {


    return (
        <div>

            {
                Links.map(l => {
                    if (l.id === btn) {
                        return (
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href={l.link}>
                                <div className={`cont-BtnEspecial ${l.id}`} >
                                    <img className="img-BtnEspecial" src={l.img} alt="img" />
                                    <p className="title-BtnEspecial">{l.title}</p>
                                    {console.log(l)}
                                </div>
                            </a>

                        )
                    }
                    return ""
                })

            }

        </div>

    )

}
