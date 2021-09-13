import React from 'react'

import Aboutus from '../components/Aboutus';
import {Button, Main} from '../styles/components/Aboutus/index'

import Organigrama from '../assets/organigrama.png'

const Sobre = () => {
    return (
        <Main>
           <Aboutus title="Misión" information="La empresa ‘’HAMBURGUESERÍA LOS PINTOS’’ es una empresa comercializadora y productora de hamburguesas y tiene como fin satisfacer a sus clientes gracias a su producto de excelente calidad y una buena atención al cliente."></Aboutus> 
           <Aboutus title="Visión" information="’HAMBURGUESERIA LOS PINTOS’’ para el año 2023 busca ser reconocida en el mercado de hamburguesas de Fusagasugá con un producto de muy buena calidad con un precio bajo con respeto a otros establecimiento proveedores de hamburguesas garantizando un producto de 100% carne de res y con materiales de excelente calidad."></Aboutus> 
           <Aboutus title="Justificación" information="Nuestro producto(hamburguesas) son caseras y podemos garantizar que son hechas con buenos ingredientes.

            No utilizamos ningún tipo de aceite en nuestro producto.  Ya que  el proceso de asado de la hamburguesa se realiza con la   misma grasa que va soltando la carne con el efecto del calor ."></Aboutus> 
           <Aboutus title="Organigrama" srcImg={Organigrama}></Aboutus> 
           <Aboutus title="Descripción de la Empresa" information="Hamburguesería los pintos gana el dinero de forma efectiva ya que solo la producción se ha tenemos son varias una de ella es  como nos comunicamos con los clientes ya que buscamos tratarlos como amigos  otra es que tenemos una receta original. podido realizar en  la muestra empresarial anterior. Las fortalezas que nos otros "></Aboutus> 
           <Aboutus title="INVESTIGACIÓN DEL MERCADO" information="Para la investigación de mercado ´´ Hamburguesería los pintos ´´recolecto información acerca de lo que mas les gustaba a los clientes en toda la ciudad de Fusagasugá exceptuando sus veredas. Con una muestra de 200 personas  con una encuesta realizada el pasado año (2019). "></Aboutus> 
      
        </Main>
    )
}

export default Sobre