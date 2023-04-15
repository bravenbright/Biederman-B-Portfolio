import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Body from "./components/Body";
import About from "./pages/About";
import Repertoire from "./pages/Repertoire";
import ContactMe from "./pages/Contact";
import Resume from "./pages/Resume";

import { setContext } from "@apollo/client/link/context";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("");

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
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Body>
                <About />
              </Body>
            </Layout>
          }
        />
        <Route
          path="/Repertoire"
          element={
            <Layout>
              <Body>
                <Repertoire />
              </Body>
            </Layout>
          }
        />
        <Route
          path="/Resume"
          element={
            <Layout>
              <Body>
                <Resume />
              </Body>
            </Layout>
          }
        />
        <Route
          path="ContactMe"
          element={
            <Layout>
              <Body>{/* <ContactMe/> */}</Body>
            </Layout>
          }
        />
      </Routes>
    </ApolloProvider>
  );
}

export default App;
