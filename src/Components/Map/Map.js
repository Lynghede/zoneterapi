import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import { Block } from "../Wrapper";
import Seperator from "../Seperator";
import { MapMarkerAlt } from "@styled-icons/fa-solid/";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoibHluZ2hlZGUiLCJhIjoiY2tteXA4ZXJsMDYyODJwcGYyYXA2N2JvbCJ9.IfxBVyM4pdnJjoUswiwRhw";

const geojson = {
  type: "FeatureCollection",
  features: {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [8.46592, 55.473],
    },
    properties: {
      title: "Zoneterapi-Lissi",
      description: "Holger Drachmanns Allé 16, 6700 Esbjerg",
    },
  },
};

const Map = () => {
  const mapContainer = useRef();
  const bounds = [
    [8.403009, 55.449395],
    [8.534588, 55.500084],
  ];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [8.46592, 55.473],
      zoom: 14,
      maxBounds: bounds,
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat(geojson.features.geometry.coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25, closeOnClick: false }) // add popups
          .setHTML(
            "<h3>" +
              geojson.features.properties.title +
              "</h3><p>" +
              geojson.features.properties.description +
              "</p>"
          )
      )
      .addTo(map)
      .togglePopup();
    return () => map.remove();
  }, []);

  return (
    <>
      <MapContainer className="map-container" ref={mapContainer}></MapContainer>
    </>
  );
};

const MapContent = () => {
  return (
    <>
      <Block style={{ flexDirection: "column" }}>
        <MapMarkerAlt size={45} />
        <h2>Find mig</h2>
        <Seperator />
        <Map></Map>
      </Block>
    </>
  );
};

export default MapContent;

const MapContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 350px;
  height: 350px;
  margin-top: 30px;

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    width: 800px;
    height: 400px;
  }

  .mapboxgl-popup {
    max-width: 200px;
  }

  .mapboxgl-popup-content {
    padding: 10px;
  }

  h3,
  p {
    color: black;
    text-align: center;
    max-width: 160px;
  }
`;
