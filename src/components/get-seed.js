import React, { useEffect, useState } from "react";
import GetLocationDetail from "../services/get-location-detail";

import {
  Box
} from "@mui/material";
import ShowResult from "./show-result";
import SeedsForm from "./seed-form";

export default function GetSeeds() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

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
    GetLocationDetail({ location });
  }, [location]);

  return (
    // <div>
    //   {location && (
    //     <p style={{ padding: "0px 16px" }}>
    //       <h3>Your location</h3>
    //       <p>
    //         Lantitude: {location.lat} Longitude: {location.lon}
    //       </p>
    //     </p>
    //   )}
    //   {!location && <div>Please turn on location</div>}
    // </div>
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Sow Now, See Next
      </h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        style={{ padding: 12, display: "flex", justifyContent: "center" }}
        noValidate
        autoComplete="off"
      >
        {currentPage == 0 && <SeedsForm setData={setData} setCurrentPage={setCurrentPage} />}
        {currentPage == 1 && <ShowResult data={data} setCurrentPage={setCurrentPage}/>}
      </Box>
    </>
  );
}
