import React from "react"
import './sideDrawer.css'
import { Categorias } from '../../../Files/Categorias'
import { Link } from "react-router-dom"

export const SideDrawer = ({ ClickHandler, sideDrawerOpen }) => {

    return (
        <nav>
            <ul className={sideDrawerOpen ? "sideDrawer open" : "sideDrawer"}>
                <Link to="/">
                    <li onClick={ClickHandler} className="item-sideDrawer">Inicio</li>
                </Link>
                {Categorias.map((cat) =>

                (<Link to={`/menu/${cat.id}`}>
                    <li onClick={ClickHandler} className="item-sideDrawer">{cat.title}</li>
                </Link>)
                )}

            </ul>
        </nav>
    )
}

