import React from "react"
import './sideDrawer.css'
import { Categorias } from '../../../Files/Categorias'
import { NavLink } from "react-router-dom"
import { Button } from "../../button/button"

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
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/17vyghim5dohz45kaEOFKAZ2fuMzL7Uw2/view?usp=sharing">
                    <Button value="Descargar CV" />
                </a>
            </ul>
        </nav>
    )
}

