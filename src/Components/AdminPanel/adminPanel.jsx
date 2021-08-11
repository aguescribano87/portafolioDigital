import React from 'react'
import { Categorias } from '../../Files/Categorias'
import { NavLink, useParams } from 'react-router-dom'

export const AdminPanel = () => {
    const { id } = useParams()

    return (
        <div className="admin-container">
            <div className="admin-category-container">
                <ul> <h1>Categorias</h1>
                    {Categorias.map((cat) =>
                        <NavLink className="item-admin-panel" activeClassName="item-admin-panel-active" to={`/admin/${cat.id}`}>
                            <li >
                                {cat.title}
                            </li>
                        </NavLink>
                    )}
                </ul>
            </div>
            <div className="admin-forms-container">
                {Categorias.map((cat) => {
                    if (cat.id === id) {
                        return cat.adminComp
                    }
                    return ""
                })}
            </div>
        </div>
    )
}