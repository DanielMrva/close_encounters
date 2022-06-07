import logo from "./logo.svg";
import "./App.css";

// import MapWrapper from "./pages/basic-map";
// import InputPage from "./components/Inputs/InputPage";
// import Home from "./pages/Home/Home";
import Createpost from "./components/Createpost/Createpost";
import Topnav from "./components/Topnav/Topnav";
import Bottomnav from "./components/Bottomnav/Bottomnav";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Topnav />
      {/* <Login /> */}
      <Createpost />
      {/* <Home /> */}
      {/* <MapWrapper /> */}
      {/* <InputPage /> */}
      <Bottomnav />
    </div>
  );
}

export default App;
