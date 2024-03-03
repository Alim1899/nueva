import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import classes from "./Leaflet.module.css";
import marker from "../../assets/icons/marker.png";
import map from "../Data/Maps";
import georgia from "../../assets/mygeodata/georgia.json";

function Leaflet(props) {
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
          center={props.center}
          zoom={props.zoom}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution={map.maptiler.attribution}
            url={map.maptiler.url}
            maxZoom={20}
          />

          <Marker position={props.marker} icon={icon}>
            <Popup>{props.popup}</Popup>
          </Marker>

          <GeoJSON data={georgia}></GeoJSON>
        </MapContainer>
      </div>
    </div>
  );
}

export default Leaflet;

// function LocationMarker() {
//   const map = useMapEvent({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, 17);
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position} icon={icon}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }
