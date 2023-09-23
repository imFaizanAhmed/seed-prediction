import axios from "axios";

export default function GetLocationDetail({ location }) {
  const apiKey = "29a3f0591c594444b7454a6665b4410b";
  if (!!location) {
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
      )
      .then(function (response) {
        // handle success
        if (!!response.current) {
          const repairedData = {
            temp: response.current.temp,
            humidity: response.current.humidity,
            // rainfall_mm : weather_data.get('rain',{}).get('1h',0)
          };
        }
        console.log(response);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}
