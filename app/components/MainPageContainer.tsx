import { gql, useQuery } from "@apollo/client";
import Articles from "./Articles";
import fakeArticles from "../response.json";

function MainPageContainer() {
  const ARTICLES_QUERY = gql`
    query ArticlesQuery {
      response {
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

  const { data, loading, error } = useQuery(ARTICLES_QUERY);

  const articles = data?.response;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      {/* <Articles news={articles} /> */}
      <Articles news={fakeArticles} />
    </div>
  );
}

export default MainPageContainer;
