import React,{useState} from 'react'
import {Button, Box, Imagen} from '../styles/components/Aboutus/index'





const Aboutus = (props) => {
        const[visible, setVisible] = useState(false)
        return ( 

        <Box hidden={visible}    onMouseEnter={() => {setVisible(true) 
                console.log("entre");}}
        onMouseLeave={() => setVisible(false)}>
                <h1>{props.title}</h1>
                <p>{props.information}</p>
                <Imagen hidden={visible}src={props.srcImg}></Imagen>
                <Button
                     >
                                ver mas
                </Button>
        </Box>
        )
}

export default Aboutus
