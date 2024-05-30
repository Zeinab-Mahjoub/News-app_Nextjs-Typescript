"use client";
import { useSearchParams } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import Articles from "../components/Articles";

type Props = {};

const CATEGORY_QUERY = gql`
  query SearchByCategory($sources: String!) {
    categoryResponse(sources: $sources) {
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

function CategoryPage({}: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("term");
  const { data, loading, error } = useQuery(CATEGORY_QUERY, {
    variables: {
      sources: category,
    },
  });

  console.log(category);

  const results = data?.categoryResponse;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      <h1 className="headerTitle">
        Results for {category}: {results.pagination.count}
      </h1>
      <Articles news={results} />
    </div>
  );
}

export default CategoryPage;
