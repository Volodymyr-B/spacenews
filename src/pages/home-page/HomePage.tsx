import { useState } from "react";

import { NewsCard } from "../../components/card/NewsCard";
import { SearchInput } from "../../components/input/SearchInput";
import { HomePageLoading } from "../../components/skeletons/HomePageLoading";

import { useSearchArticlesQuery } from "../../services/spaceflightnews/spaceflightnews-api";
import { useDynamicPagination } from "../../hooks/useDynamicPagination";

import { Container, Divider, Typography } from "@mui/material";
import { ShowError } from "../../components/show-error/ShowError";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const limit = useDynamicPagination();
  const { isLoading, isError, data, refetch } = useSearchArticlesQuery({
    search,
    limit,
  });

  if (isLoading) return <HomePageLoading />;
  if (isError) return <ShowError />;
  if (!data) return null;
  return (
    <Container maxWidth="xl">
      <div className="flex flex-col gap-3 mb-10">
        <Typography className="mt-8">Filter by keywords</Typography>
        <SearchInput setSearch={setSearch} refetch={refetch} />
        <Typography>Results : {data.length}</Typography>
        <Divider />
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        {data.map((article) => (
          <NewsCard
            highlight={search}
            key={article.id}
            id={article.id}
            title={article.title}
            summary={article.summary}
            imageUrl={article.imageUrl}
            newsSite={article.newsSite}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
    </Container>
  );
};
