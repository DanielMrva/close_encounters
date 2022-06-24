// import "./App.css";
// import React, { useState, useContext } from 'react';
// import { Link } from "react-router-dom";
// // import AppContainer from "./AppContainer";
// // import Test from "./pages/Test";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import Home from "./pages/Home/Home";

// import { UserProvider } from "./components/Context/UserContext";


// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });


// function App() {
//   return (
//   // <NewMarkerContext value={newMarkerPos}>
//   //   <ModalContext.Provider value={showModal}>
//   //     <BoundBoxContext.Provider value={boundBox}>
//         <ApolloProvider client={client}>
//             <UserProvider>
//               <div className="App">
//                 <Home />
//               </div>
//             </UserProvider>
//         </ApolloProvider>
//   //     </BoundBoxContext.Provider>
//   //   </ModalContext.Provider>
//   // </NewMarkerContext>
//   );
// }


// export default App;

























// // import "./App.css";

// // import AppContainer from "./AppContainer";

// // import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
// // import { setContext } from '@apollo/client/link/context';

// // // Construct our main GraphQL API endpoint
// // const httpLink = createHttpLink({
// //   uri: '/graphql',
// // });

// // // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// // const authLink = setContext((_, { headers }) => {
// //   // get the authentication token from local storage if it exists
// //   const token = localStorage.getItem('id_token');
// //   // return the headers to the context so httpLink can read them
// //   return {
// //     headers: {
// //       ...headers,
// //       authorization: token ? `Bearer ${token}` : '',
// //     },
// //   };
// // });

// // const client = new ApolloClient({
// //   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
// //   link: authLink.concat(httpLink),
// //   cache: new InMemoryCache(),
// // });

// // function App() {
// //   return (
// //     <ApolloProvider client={client}>
// //       <div className="App">
// //         {/* <Test /> */}
// //         <AppContainer />
// //       </div>
// //     </ApolloProvider>
// //   );
// // }

// // export default App;
