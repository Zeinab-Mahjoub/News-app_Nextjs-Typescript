import Article from "./Article";

type Props = {
  news?: NewsResponse;
};

function Articles({ news }: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {news?.data.map((article: Article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default Articles;
