import React from 'react'
import Maps from '../map/Map'
import "./rightbar.css"
// import { GoogleMap, useLoadScript} from "@react-google-maps/api";

// function Map(){
//  return <GoogleMap mapContainerClassName='flatuhaiyeh' zoom = {10} center = {{lat:44, lng: -80}}></GoogleMap>
// }

export default function Rightbar() {
    // const { isLoaded } = useLoadScript({
    //   googleMapsApiKey:"AIzaSyDm5dYQPGBuIgpmo5CQAt_rGj4Vz6oHzfw",
    // });

    // if(!isLoaded) return <div>Loading...</div>;


    return (
    <>
    {/* <div className='rightbar'>
      <div className='rightbartext'>where your friends at</div>
    </div> */}
    <Maps>
    
    </Maps>
  </>
  )
}
