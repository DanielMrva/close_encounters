import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import "./index.css";

import Home from "./pages/Home/Home";
import Map from "./pages/basic-map";
import Topnav from "./components/Topnav/Topnav";
import User from "./pages/User/User";
import Createpost from "./components/Createpost/Createpost";
import Login from "./pages/Login/Login";
import Loginnew from "./pages/Login/Loginnew";
import Bottomnav from "./components/Bottomnav/Bottomnav";
import Encountercard from "./components/Encountercard/Encountercard";

import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Router>
      {/* <App /> */}
      <Topnav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/map" element={<Map />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<Createpost />} />
          {/* <Route path="/loginnew" element={<Loginnew />} /> */}
        </Routes>
      <Bottomnav />
    </Router>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
