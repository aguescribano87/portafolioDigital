import React, { Fragment, useState } from 'react'
import './Routes.css'
import { BrowserRouter as Switch, Route } from "react-router-dom"
import { NavBar } from './Components/navBar/navBar'
import { Footer } from './Components/footer/footer'
import { Inicio } from './Components/Inicio/inicio'
import { Menu } from './Components/Menu/menu'
import { SideDrawer } from './Components/navBar/sideDrawer/sideDrawer'
import { BackgroundModal } from './Components/backgroundModal/backgroundModal'

export const Routes = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerOpenClickHandler = () => setSideDrawerOpen(!sideDrawerOpen)

    return (
        <Fragment>
            <Switch>
                <NavBar ClickHandler={drawerOpenClickHandler}/>
                <SideDrawer ClickHandler={drawerOpenClickHandler} sideDrawerOpen={sideDrawerOpen} />
                {sideDrawerOpen ? <Fragment><BackgroundModal ClickHandler={drawerOpenClickHandler} /></Fragment> : ""}
                <div className="App">
                    <Route exact path="/" children={<Inicio />} />
                    <Route exact path="/menu/:id" children={<Menu />} />
                </div>
                <Footer />
            </Switch>
        </Fragment>
    )
}