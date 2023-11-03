import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "../../assets/Style/mapGoogel.css";

const MapGoogle = ({ lat, lng }) => {
  //load gopgel map API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAXqrbE_WqGgouE09hnobUk3L-8h3OrmqY",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          center={{ lat, lng }}
          zoom={15}
          mapContainerClassName="map-container"
          margin={[50, 50, 50, 50]}
          options={{ zoomControl: true }}
        >
          {lat && lng && <Marker position={{ lat, lng }} />}
        </GoogleMap>
      )}
    </div>
  );
};

export default MapGoogle;
