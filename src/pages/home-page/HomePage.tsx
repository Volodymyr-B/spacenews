import { useState } from "react";
import { NewsCard } from "../../components/news-card/NewsCard";
import { SearchInput } from "../../components/search-input/SearchInput";
import { useSearchArticlesQuery } from "../../store/spaceflightnews/spaceflightnews-api";
import { Container, Divider, Typography } from "@mui/material";
import { useDynamicPagination } from "../../hooks/useDynamicPagination";
import { HomePageSkeleton } from "./HomePageSkeleton";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const limit = useDynamicPagination();
  const { isLoading, isError, data } = useSearchArticlesQuery({
    search,
    limit,
  });

  if (isLoading) return <HomePageSkeleton />;

  return (
    <Container maxWidth="xl">
      <div className="flex flex-col gap-3 mb-10">
        <Typography>Filter by keywords</Typography>
        <SearchInput setSearch={setSearch} />
        <Typography>Results : {data?.length}</Typography>
        <Divider />
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        {data?.map((article) => (
          <NewsCard
            highlight={search}
            key={article.id}
            id={article.id}
            title={article.title}
            imageUrl={article.imageUrl}
            newsSite={article.newsSite}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    </Container>
  );
};
