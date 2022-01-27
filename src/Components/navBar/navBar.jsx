import React from 'react'
import './navBar.css'
import { Categorias } from '../../Files/Categorias'
import { Link, NavLink } from 'react-router-dom'
import { DrawerToggleButton } from './drawerToggleButton/drawerToggleButton'
import { Button } from '../button/button'

export const NavBar = ({ ClickHandler }) => {


    return (
        <nav className="nav-container">
            <Link to="/">
                <h1 className="nav-title">AGUSTIN
                    <h1 className="nav-title2">ESCRIBANO</h1>
                </h1>
            </Link>
            <ul className="nav-menu-cat">
                {Categorias.map((cat) => {
                    if (cat.id !== "inicio") {
                        return (
                            <NavLink className="nav-menu-item" activeClassName="item-sideDrawer-active" to={`/menu/${cat.id}`}>
                                <li>{cat.title}</li>
                            </NavLink>
                        )
                    }
                    return ""
                }
                )}

            </ul>
            <a
                className="btn-CV"
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/17vyghim5dohz45kaEOFKAZ2fuMzL7Uw2/view?usp=sharing">
                <Button value="Descargar CV" />
            </a>
            <DrawerToggleButton ClickHandler={ClickHandler} />
        </nav>
    )
}