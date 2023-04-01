import { categories } from "@/constants";

async function Homepage() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <div>Homepage</div>;
}

export default Homepage;
