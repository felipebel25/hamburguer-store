import React from 'react'
import { GoogleMap, LoadScript ,Marker }  from '@react-google-maps/api';

const Map = ({data}) =>{
    const MapStyles = {
        height: "50vh",
        width: "100%"
    }
    const defaultCenter ={
        lat: 4.343162, lng: -74.366771
    }
    return(

        <LoadScript 
        googleMapsApiKey="AIzaSyD0_iiORXYLZIioCgTgMEm0hY29W3pbbYU" >
            <GoogleMap
               mapContainerStyle={MapStyles}
               zoom={14}
               center={defaultCenter}                
            >
                <Marker position={defaultCenter} />
            </GoogleMap>

        </LoadScript>
    );
}
export default Map;