import { Component } from "react";
import ReactMapGL, { Marker, GeolocateControl, Popup } from "react-map-gl";
import React, { useState } from "react";
import gameData from "../data/DPR_Basketball_001.json";
import gameMarker from "../assets/normal-marker.svg";
import styled from "styled-components";

const MapMarkerButton = styled.button`
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const MapMarker = styled.img`
  display: block;
  height: 43px;
  width: 28px;
`;

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10
};

function Map() {
  const [viewport, setViewport] = useState({
    width: "320px",
    height: "568px",
    latitude: 40.784507,
    longitude: -73.971608,
    zoom: 13
  });

  const [selectGame, setSelectedGame] = useState(null);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken="pk.eyJ1IjoiaWFtYXppeiIsImEiOiJjanpveGdvcmYwandrM2NvNTR0OGFidGU4In0.cTgkYzmKzXi52Bbx70TkUg"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      {gameData.map(game => (
        <Marker key={game.Prop_ID} latitude={game.lat} longitude={game.lon}>
          <MapMarkerButton
            onClick={e => {
              e.preventDefault();
              setSelectedGame(game);
            }}
          >
            <MapMarker src={gameMarker} alt="Basketball Game Marker Pin" />
          </MapMarkerButton>
        </Marker>
      ))}
      {selectGame ? (
        <Popup
          latitude={selectGame.lat}
          longitude={selectGame.lon}
          onClose={() => {
            setSelectedGame(null);
          }}
        >
          <div>
            <p>{selectGame.Name}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

export default Map;
