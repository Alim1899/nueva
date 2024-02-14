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
import classes from "./Leaflet.module.css";
import marker from "../../assets/icons/marker.png";
import { useState } from "react";
import map from "../Data/Maps";
import georgia from "../../assets/mygeodata/georgia.json";

function Leaflet() {
  const [position, setPosition] = useState(null);
  function LocationMarker() {
    const map = useMapEvent({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, 17);
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
    iconAnchor: [15, 20], //width, height
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });



  return (
    <div className={classes.main}>
      {/* This map shows shapefile and retrievs users location */}
      <div className={classes.map}>
        <MapContainer
          center={[42.02, 43.9]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution={map.maptiler.attribution}
            url={map.maptiler.url}
            maxZoom={20}
          />

          <GeoJSON data={georgia}></GeoJSON>
          <LocationMarker />
        </MapContainer>
      </div>
    
    </div>
  );
}

export default Leaflet;
