import { NewsCard } from "../../components/news-card/NewsCard";
import { useSearchArticlesQuery } from "../../store/spaceflightnews/spaceflightnews-api";

export const HomePage = () => {
  const { isLoading, isError, data } = useSearchArticlesQuery("starlink");
  return (
    <div className="max-w-7xl">
      <span>Filter by keywords</span>
      <input />
      <span>Results</span>
      <div className="flex justify-center flex-wrap gap-5">
        {data?.map((article) => (
          <NewsCard
            key={article.id}
            id={article.id}
            title={article.title}
            imageUrl={article.imageUrl}
            newsSite={article.newsSite}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};
