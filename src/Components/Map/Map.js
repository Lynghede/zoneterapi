import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoibHluZ2hlZGUiLCJhIjoiY2tteXA4ZXJsMDYyODJwcGYyYXA2N2JvbCJ9.IfxBVyM4pdnJjoUswiwRhw";

const Map = () => {
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [8.46592, 55.473],
      zoom: 13,
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([8.46592, 55.473])
      .addTo(map);
    return () => map.remove();
  }, []);

  return (
    <>
      <MapContainer className="map-container" ref={mapContainer}></MapContainer>
    </>
  );
};

export default Map;

const MapContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  height: 200px;
`;
