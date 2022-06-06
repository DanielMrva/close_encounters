import logo from "./logo.svg";
import "./App.css";

// import MapWrapper from "./pages/basic-map";
// import InputPage from "./components/Inputs/InputPage";
import Home from "./pages/Home/Home";
import Topnav from "./components/Topnav/Topnav";

function App() {
  return (
    <div className="App">
      <Topnav />
      <Home />
      {/* <MapWrapper /> */}
      {/* <InputPage /> */}
    </div>
  );
}

export default App;
