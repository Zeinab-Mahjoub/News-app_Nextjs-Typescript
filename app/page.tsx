"use client";

import { categories } from "@/constants";
import Articles from "./components/Articles"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

function Homepage() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Articles/>
    </ApolloProvider>
  );
}

export default Homepage;
