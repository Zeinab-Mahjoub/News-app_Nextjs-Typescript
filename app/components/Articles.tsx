import { gql, useQuery } from "@apollo/client";
import Article from "./Article";
import ttt from "../response.json";

function Articles() {
  // const ARTICLES_QUERY = gql`
  //   query ArticlesQuery {
  //     response {
  //       data {
  //         author
  //         description
  //         title
  //         category
  //         country
  //         image
  //         language
  //         published_at
  //         source
  //         url
  //       }
  //       pagination {
  //         count
  //         limit
  //         offset
  //         total
  //       }
  //     }
  //   }
  // `;

  // const { data, loading, error } = useQuery(ARTICLES_QUERY);

  //  const articles = data.response.data;

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  // if (error) {
  //   console.error(error);
  //   return null;
  // }

  // console.log(data.response.data);

  const articles = ttt.data;

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {articles.map((article: Article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default Articles;
