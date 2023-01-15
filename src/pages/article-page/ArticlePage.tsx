import { useEffect } from "react";
import { useLazyGetArticleQuery } from "../../store/spaceflightnews/spaceflightnews-api";
import { useNavigate, useParams } from "react-router-dom";

import { mockText } from "../../constants/mockText"; // not enough data from backend, filling up the space
import { ArticlePageSkeleton } from "./ArticlePageSkeleton";

import { Button, Container, Paper, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const ArticlePage = () => {
  const [getArticle, { data, isLoading, isError }] = useLazyGetArticleQuery();

  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = () => navigate(-1);
  const redirect = () => navigate("/", { replace: true });

  useEffect(() => {
    if (id) {
      getArticle(Number(id));
    } else {
      redirect();
    }
  }, []);

  if (isLoading) return <ArticlePageSkeleton />;
  if (isError) return <>sometging wrong</>;
  if (!data) return null;

  const { title, newsSite, imageUrl, publishedAt, summary } = data;

  return (
    <>
      <img className="h-56 w-full object-cover" src={imageUrl} alt={imageUrl} />
      <Container maxWidth="xl" className="-mt-16 absolute left-0 right-0">
        <Paper elevation={4} className="p-6 mb-8 min-h-[400px] text-center">
          <Typography variant="h6" component="h3" className="mb-5">
            {title}
          </Typography>
          <div className="flex flex-col gap-3">
            {summary}
            {mockText}
          </div>
          <div className="flex justify-around">
            <Typography variant="h6" color="text.secondary">
              {newsSite}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {publishedAt.toString()}
            </Typography>
          </div>
        </Paper>
        <Button onClick={goBack} size="small" className="ml-10">
          <KeyboardBackspaceIcon />
          Back to homepage
        </Button>
      </Container>
    </>
  );
};
