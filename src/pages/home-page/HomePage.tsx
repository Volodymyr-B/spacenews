import { NewsCard } from "../../components/news-card/NewsCard";
import { SearchInput } from "../../components/search-input/SearchInput";
import { useSearchArticlesQuery } from "../../store/spaceflightnews/spaceflightnews-api";
import { Divider, Typography } from "@mui/material";

export const HomePage = () => {
  const { isLoading, isError, data } = useSearchArticlesQuery("starlink");
  return (
    <div className="max-w-7xl">
      <div className="flex flex-col gap-3 mb-10">
        <Typography>Filter by keywords</Typography>
        <SearchInput />
        <Typography>Results : {data?.length}</Typography>
        <Divider />
      </div>
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
