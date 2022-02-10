import { Helmet } from 'react-helmet'
import React from 'react'

export const MetaStyle = ({ title, description, imageUrl, imageAlt }) => {
    const hostname = 'https://agustin-escribano.web.app'

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta property="og:title" content={title} data-react-helmet="true"/>
            <meta name="description" content={description} data-react-helmet="true"/>
            <meta property="og:description" content={description} data-react-helmet="true"/>
            <meta property="og:image" content={hostname + imageUrl} data-react-helmet="true"/>
            <meta
                property="og:url"
                content={hostname + window.location.pathname + window.location.search}
                data-react-helmet="true"
            />
            <meta name="twitter:card" content="summary_large_image" data-react-helmet="true"/>
            <meta name="twitter:image:alt" content={imageAlt} data-react-helmet="true"/>
        </Helmet>
    )
}