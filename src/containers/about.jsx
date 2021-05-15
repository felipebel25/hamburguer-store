import React from 'react'
import {Helmet} from 'react-helmet'
import '../styles/components/About.scss'
import hamburguer from '../assets/hamburguer.png'

const about = () =>{

    return(
        <>
        <Helmet>
            <title>Hamburgueseria Los Pintos</title>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@felipemedinabel"/>
            <meta name="twitter:creator" content="@felipemedinabel"/>
            <meta name="twitter:title" content="Hamburgueseria Los Pintos"/>
            <meta name="twitter:description" content="La mejor e-commerce de hamburguesas del mundo"/>
            <meta
            name="twitter:image"
            content="https://cocheros.com.co/images/producto/pionera.png"
            />
            <meta property="og:title" content="Hamburgueseria Los Pintos"/>
            <meta property="og:description" content="Hamburgueseria Los Pintos"/>
            <meta
            property="og:image"
            content="https://cocheros.com.co/images/producto/pionera.png"
            />
            <meta property="og:url" content="https://hamburguer-store.web.app/" />
            <meta property="og:site_name" content="Hamburgueseria Los Pintos" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="article" />
            <meta property="fb:app_id" content="ID_APP_FACEBOOK" />

        </Helmet>
        <main className="About">
            <section className="hamburguer-container">

                <div className="hamburguer-container__txt">

                <h1>Hamburgueseria como seria</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <img src={hamburguer} alt="" className="hamburguer-container__image"/>
            </section>
        </main>

        </>
    )
}

export default about;