import {
  MapContainer,
  TileLayer,
  useMapEvent,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import classes from "./App.module.css";
import marker from "../src/assets/icons/marker.png";
import { useState, useEffect } from "react";
import georgia from "../src/assets/mygeodata/georgia.json";

function App() {
  const [location,setLocation] = useState([42.02 , 43.90]);
  const [position, setPosition] = useState(null);

  
  function LocationMarker() {
    const map = useMapEvent({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 10);
      },
    });


    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  const icon = L.icon({
    iconUrl: marker,
    iconSize: [35, 31],
    iconAnchor: [15, 20],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });




  return (
    <div className={classes.App}>
      <div className={classes.map}>
        <MapContainer
          center={location}
          zoom={7}
          
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />

         
          <GeoJSON data={georgia}></GeoJSON>
          <button type="button" onClick={LocationMarker}>My location</button>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
