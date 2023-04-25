import { gql, useQuery } from "@apollo/client";

function Articles() {
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

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data);

  return <div>Articles</div>;
}

export default Articles;
