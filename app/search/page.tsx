"use client";
import { gql, useQuery } from "@apollo/client";
import Articles from "../components/Articles";

type Props = {
  searchParams?: { term: string };
};

const SEARCH_QUERY = gql`
  query SearchByKeywords($keywords: String!) {
    searchedResponse(keywords: $keywords) {
      data {
        author
        description
        title
        category
        country
        image
        language
        published_at
        source
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
`;

function SearchPage({ searchParams }: Props) {
  // const test = "ufo";

  // const { data, loading, error } = useQuery(SEARCH_QUERY, {
  //   variables: {
  //     // keywords: searchParams?.term,
  //     keywords: test,
  //   },
  // });

  // const results = data?.searchedResponse;

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (error) {
  //   console.error(error);
  //   return null;
  // }

  // console.log(results);

  return (
    <div>
      {/* <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
      <Articles news={results} /> */}
    </div>
  );
}

export default SearchPage;
