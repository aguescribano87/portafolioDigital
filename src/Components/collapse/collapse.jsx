import React, { Fragment, useState, useRef } from 'react'
import './collapse.css'
import up from '../../Img/up.svg'
import down from '../../Img/down.svg'

export const Collapse = ({ collapsed, children, title }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
    const collapseRef = useRef()

    return (
        <Fragment>
            <div
                className="collapse-div"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {title}{isCollapsed ?
                    <img className="arrow animate__animated animate__flipInX" src={down} alt="arrow-down" /> :
                    <img className="arrow animate__animated animate__rotateIn" src={up} alt="arrow-up" />}
            </div>
            <div
                className='collapse-content'
                ref={collapseRef}
                style={isCollapsed ? { height: "0px" } : {height: collapseRef.current.scrollHeight + "px"}}
            >
                {children}
                <hr />
            </div>
        </Fragment>
    );
};