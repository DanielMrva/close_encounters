import "./App.css";

import AppContainer from "./AppContainer";
// import Test from "./pages/Test";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <Test /> */}
        <AppContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
