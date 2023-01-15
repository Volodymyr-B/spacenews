import { useEffect } from "react";
import { useLazyGetArticleQuery } from "../../services/spaceflightnews/spaceflightnews-api";
import { useNavigate, useParams } from "react-router-dom";

import { mockText } from "../../constants/mockText"; // not enough data from backend, filling up the space
import { ArticlePageLoading } from "../../components/skeletons/ArticlePageLoading";

import { Button, Container, Paper, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ShowError } from "../../components/show-error/ShowError";

export const ArticlePage = () => {
  const [getArticle, { data, isLoading, isError }] = useLazyGetArticleQuery();

  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const redirect = () => navigate("/", { replace: true });

  useEffect(() => {
    if (id) {
      getArticle(Number(id));
    } else {
      redirect();
    }
  }, []);

  if (isLoading) return <ArticlePageLoading />;
  if (isError) return <ShowError />;
  if (!data) return null;

  const { title, newsSite, imageUrl, summary } = data;

  return (
    <>
      <img className="h-56 w-full object-cover" src={imageUrl} alt={imageUrl} />
      <Container maxWidth="xl" className="-mt-16 absolute left-0 right-0">
        <Paper elevation={4} className="p-8 mb-8 text-center">
          <Typography variant="h6" component="h3" className="mb-5">
            {title}
          </Typography>
          <Typography className="flex flex-col gap-3 text-start">
            {summary}
            {mockText}
          </Typography>
          <div className="flex justify-end">
            <Typography variant="h6" color="text.secondary">
              {newsSite}
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
