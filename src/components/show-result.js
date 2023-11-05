import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import PlantPredictionPng from "../assets/plant prediction system.png";

export default function ShowResult({ data, setCurrentPage }) {
  return (
    <>
      {data && (
        <Card variant="outlined" style={{ height: "fit-content", width: 400 }}>
          <CardHeader title="Prediction"></CardHeader>
          <CardMedia
            component="img"
            height="194"
            image={PlantPredictionPng}
            alt="plant prediction"
          />
          <CardContent>
            <Typography>
              <div>
                <span style={{ fontSize: 16 }}>Predicted Seed:</span>{" "}
                {data.seedName}
              </div>
              <div>
                <span style={{ fontSize: 16 }}>Predicted Plant:</span>{" "}
                {data.plantName}
              </div>
            </Typography>
            <div style={{
                  width: '100%',
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 8
                }}>
              <Button
                variant="contained"
                onClick={() => setCurrentPage(0)}
                style={{
                  width: 200,
                }}
              >
                Back
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
