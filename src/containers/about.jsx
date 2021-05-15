import React from 'react'
import '../styles/components/About.scss'
import hamburguer from '../assets/hamburguer.png'

import fondo from '../assets/fondoabout.jpg'
const about = () =>{

    return(
        <>
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