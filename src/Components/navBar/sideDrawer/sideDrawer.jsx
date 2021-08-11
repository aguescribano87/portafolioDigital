import React from "react"
import './sideDrawer.css'
import { Categorias } from '../../../Files/Categorias'
import { NavLink } from "react-router-dom"

export const SideDrawer = ({ ClickHandler, sideDrawerOpen }) => {

    return (
        <nav>
            <ul className={sideDrawerOpen ? "sideDrawer open" : "sideDrawer"}>
                {Categorias.map((cat) => {
                    if (cat.id !== "inicio") {
                        return (
                            (<NavLink className="item-sideDrawer" activeClassName="item-sideDrawer-active" to={`/menu/${cat.id}`}>
                                <li onClick={ClickHandler}>
                                    {cat.title}
                                </li>
                            </NavLink>)
                        )
                    }
                    return ""
                }
                )}

            </ul>
        </nav>
    )
}

