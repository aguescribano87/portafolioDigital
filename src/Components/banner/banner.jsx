import React from 'react'
import './banner.css'

export const Banner = ({banner}) => {

    return (
        <div className="cont-banner">
            <img className="img-banner" src={banner} alt="bannerFotoInicio" />
        </div>
    )
}