import React, { Fragment, useState } from 'react'
import './collapse.css'
import up from '../../Img/up.svg'
import down from '../../Img/down.svg'

export const Collapse = ({ collapsed, children, title }) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);

    return (
        <Fragment>
            <div
                className="collapse-div"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {title}{isCollapsed ? <img className="arrow" src={down} alt="arrow" /> : <img className="arrow" src={up} alt="arrow" />}
            </div>
            <div
                className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
                aria-expanded={isCollapsed}
            >
                {children}
                <hr />
            </div>
        </Fragment>
    );
};