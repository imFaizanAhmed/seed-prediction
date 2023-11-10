import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  FormControl,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

export default function SeedsForm({ setData, setCurrentPage }) {
  const [isLoading, toggleLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        temperature: "",
        sunshineRate: "",
        rainfall: "",
        humidityRate: "",
        soilType: "",
      }}
    >
      {({ values, handleChange }) => (
        <Form className="row">
          <div classname="column">
            <Field
              name="temperature"
              as={TextField}
              label="Temperature"
              type="number"
              className="formik-field"
              onChange={handleChange}
              value={values.temperature}
            />
            <Field
              name="sunshineRate"
              className="formik-field"
              as={TextField}
              label="Sunshine Rate"
              type="number"
              onChange={handleChange}
              value={values.sunshineRate}
            />
            <Field
              name="rainfall"
              as={TextField}
              label="Rainfall"
              className="formik-field"
              type="number"
              onChange={handleChange}
              value={values.rainfall}
            />
          </div>
          <div classname="column">
            <Field
              name="humidityRate"
              as={TextField}
              label="Humidity Rate"
              className="formik-field"
              type="number"
              onChange={handleChange}
              value={values.humidityRate}
            />
            <FormControl className="formik-field" style={{ margin: 8 }}>
              <InputLabel
                id="soil-type-label"
                style={{
                  zIndex: 10,
                  background: "white",
                  padding: "0px 8px",
                }}
              >
                Soil Type
              </InputLabel>
              <Field
                name="soilType"
                as={Select}
                onChange={handleChange}
                value={values.soilType}
              >
                <MenuItem value="sandy">Sandy</MenuItem>
                <MenuItem value="clayey">Clayey</MenuItem>
                <MenuItem value="loamy">Loamy</MenuItem>
              </Field>
            </FormControl>
          </div>
          <div className="formik-submit">
            <Button
              variant="contained"
              onClick={async () => {
                toggleLoading(true);

                const resp = await axios.post(
                  "http://localhost:5000/predict",
                  values
                );

                setData({
                  seedName: resp.data.seedName,
                  plantName: resp.data.plantName,
                });
                setCurrentPage(1);
                toggleLoading(false);
              }}
              style={{ width: 200, display: "flex", gap: 8 }}
            >
              {isLoading && <CircularProgress color="inherit" size={18} />}{" "}
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
