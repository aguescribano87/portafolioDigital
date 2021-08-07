import React from 'react'
import './navBar.css'
import { Categorias } from '../../Files/Categorias'
import { Link } from 'react-router-dom'
import { DrawerToggleButton } from './drawerToggleButton/drawerToggleButton'

export const NavBar = ({ClickHandler}) => {


    return (
        <nav className="nav-container">
            <h1 className="nav-title">AGUSTIN
                <h1 className="nav-title2">ESCRIBANO</h1>
            </h1>
            <ul className="nav-menu-cat">
                <Link to="/">
                    <li className="nav-menu-item">Inicio</li>
                </Link>
                {Categorias.map((cat) =>
                    <Link to={`/menu/${cat.id}`}>
                        <li className="nav-menu-item">{cat.title}</li>
                    </Link>
                )}

            </ul>
            <DrawerToggleButton ClickHandler={ClickHandler}/>
        </nav>
    )
}