import React, { Component } from "react";
import { compose, withProps } from "recompose";
import { Container, Row, Col } from "react-bootstrap";
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer
} = require("react-google-maps");

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC80_y_wRg1tKAM59tSszeIiY6tEahwUmc",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `60vh`,  width: `100vw` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 43.66249657567853, lng: -79.39037738471677 }}
  >
    <KmlLayer
      url={
        "http://www.google.com/maps/d/kml?mid=1jhR92EDAFYtvkJFLZDO9CiEADRLmqiqb" +
        "&ver=" +
        generateRandom()
      }
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
));
function generateRandom() {
  return Math.random() * 10000000000000000;
}
export default Map;
