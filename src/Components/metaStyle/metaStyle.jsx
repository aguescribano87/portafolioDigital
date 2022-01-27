import { Helmet } from 'react-helmet'
import React from 'react'

export const MetaStyle = ({ title, nombrePlan, imgEmpresa }) => {
    const hostname = 'https://agustin-escribano.web.app/'
    console.log(window.location.pathname + window.location.search)
    return (
        <Helmet>
            <title>{`${title}`}</title>
            <meta name="description" content={nombrePlan} />

            {/*             <meta property="og:type" content="website" />
            <meta property="og:title" content={`${title} - Cobromix`} />
            <meta property="og:image" content={imgEmpresa} />
            <meta property="og:url" content={urlPlan} />
            <meta property="og:description" content={nombrePlan} />
            <meta property="og:site_name" content="Cobromix" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Logo" />
            <meta property="twitter:url" content={urlPlan} />
            <meta property="twitter:image" content={imgEmpresa} />
            <meta property="twitter:description" content={nombrePlan} />
            <meta property="twitter:title" content={`${title} - Cobromix`} />
            <meta property="twitter:domain" content="cobromix.com"></meta> */}

            <meta property="og:title" content={`${title} - Cobromix`} />
            <meta property="og:image" content={imgEmpresa} />
            <meta property="og:url" content={hostname + window.location.pathname + window.location.search} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />

            <meta property="og:description" content={nombrePlan} />
            <meta name="twitter:image:alt" content="Logo" />

            <link rel="canonical" href={window.location.pathname + window.location.search} />
        </Helmet>
    )
}