import React from 'react'
import "./map.css"
import { GoogleMap, useLoadScript} from "@react-google-maps/api";

function Map(){
 return <GoogleMap mapContainerClassName='mymap' zoom = {10} center = {{lat:44, lng: -80}}></GoogleMap>
}

export default function Maps() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey:"AIzaSyDm5dYQPGBuIgpmo5CQAt_rGj4Vz6oHzfw",
    });

    if(!isLoaded) return <div>Loading...</div>;
    return (
    <>
    {/* <div className='rightbartext'>where your friends at</div> */}
    <Map/>
  </>
  )
}