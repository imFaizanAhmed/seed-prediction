import React, { useEffect, useState } from "react";
import GetLocationDetail from "../services/get-location-detail";

export default function GetSeeds() {
  const [location, setLocation] = useState(null);
  getLocation();
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    if (!location)
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
  }

  useEffect(() => {
    GetLocationDetail({location});
  }, [location]);

  return (
    <>
      {location && (
        <p style={{ padding: "0px 16px" }}>
          <h3>Your location</h3>
          <p>
            Lantitude: {location.lat} Longitude: {location.lon}
          </p>
        </p>
      )}
      {!location && <div>Please turn on location</div>}
    </>
  );
}
