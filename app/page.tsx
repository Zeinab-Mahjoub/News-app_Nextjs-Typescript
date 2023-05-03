"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import MainPageContainer from "./components/MainPageContainer";

function Homepage() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <MainPageContainer />
    </ApolloProvider>
  );
}

export default Homepage;
