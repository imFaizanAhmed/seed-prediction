import "./App.css";
// import Plants from "./assets/plants.jpg";
import Plants from "./assets/plant_plants.jpg";
import GetSeeds from "./components/get-seed";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="business-name"><img src={Logo} height={32} alt="logo"/></div>
        <div>
          <div>
            Login
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${Plants})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        className="handing-page"
      >
        <div className="main-desc">
          Your <span style={{ color: "#6eb448" }}>Green</span> Dreams, Our
          Seed Schemes
        </div>
      </div>
      <div className="desc" style={{background: "#a8d8b7"}}>
        <div className="sub-desc">
          Unlock the secrets of successful gardening with our app. Simply enter
          your location, and we'll recommend the perfect seeds for your soil and
          climate. Grow your dream garden effortlessly with us.
        </div>
      </div>
      <GetSeeds />
    </div>
  );
}

export default App;
