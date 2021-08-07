import React from 'react'
import menuButton from '../../../Img/menuButton.png'
import './drawerToggleButton.css'

export const DrawerToggleButton = ({ ClickHandler }) =>
    <img
        onClick={() => ClickHandler()}
        className="drawerToggleButton"
        src={menuButton}
        alt="menu"
    />