import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "leaflet/dist/leaflet.css";
import "./index.css";

import Home from "./pages/Home/Home";
// import MapWrapper from "./pages/basic-map";
import Map from "./pages/Mappage/Mappage";
import Topnav from "./components/Topnav/Topnav";
import User from "./pages/User/User";
import Createpost from "./components/Createpost/Createpost";
import Login from "./pages/Login/Login";
import Loginnew from "./pages/Login/Loginnew";
import Bottomnav from "./components/Bottomnav/Bottomnav";
import Encountercard from "./components/Encountercard/Encountercard";
import Postpage from "./pages/Postpage/Postpage";

import reportWebVitals from "./reportWebVitals";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Router>
      {/* <App /> */}
      <Topnav />

      <div style={{ height: "fit-content" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postpage" element={<Postpage />} />
          <Route path="/createpost" element={<Createpost />} />
          <Route path="/loginnew" element={<Loginnew />} />
        </Routes>
      </div>
      <Bottomnav />
    </Router>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
