import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

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

import Cookies from 'universal-cookie';


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

function App() {

  // const cookie = new Cookies();

  // cookie.set('user', 'guest', {path: '/'})

  // let snack = cookie.get('user')

  // console.log('app: ', snack)

  return (
  <ApolloProvider client={client}>
    <Router>
      <Topnav />
      <div style={{ height: "fit-content" }}>
        <Routes>
          <Route path="/" element= {<Home />} />
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
}

export default App;

























// import "./App.css";

// import AppContainer from "./AppContainer";

// import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <div className="App">
//         {/* <Test /> */}
//         <AppContainer />
//       </div>
//     </ApolloProvider>
//   );
// }

// export default App;
