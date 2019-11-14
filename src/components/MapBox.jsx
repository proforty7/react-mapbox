import React, { useState } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { TOKEN } from "../config";
import MapControls from "./MapControls";

const geolocateStyle = {
  float: "left",
  margin: "50px",
  padding: "10px"
};

const MapBox = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 400,
    latitude: 0,
    longitude: 0,
    zoom: 2
  });

  const _onViewportChange = viewport => {
    console.log(viewport);
    setViewPort({ ...viewport, transitionDuration: 500 });
  };

  return (
    <div style={{ margin: "0 auto" }}>
      <MapControls />

      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v8"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  );
};

export default MapBox;
