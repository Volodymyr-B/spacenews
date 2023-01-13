import { useEffect } from "react";
import { useLazyGetArticleQuery } from "../../store/spaceflightnews/spaceflightnews-api";
import { Button, Container, Paper, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const ArticlePage = () => {
  const [getArticle, { data, isLoading, isError }] = useLazyGetArticleQuery();

  // not enough data from backend, filling up the space
  const articleInfo = new Array(5)
    .fill(1)
    .map((_, index) => <Typography key={index}>{data?.summary}</Typography>);
  //--------------------------------------------------------

  useEffect(() => {
    getArticle(17865);
  }, []);

  return (
    <>
      <img
        className="h-56 w-full object-cover"
        src={data?.imageUrl}
        alt={data?.imageUrl}
      />
      <Container maxWidth="xl" className="-mt-16 absolute left-0 right-0">
        <Paper elevation={4} className="p-6 mb-8 min-h-[400px]">
          <Typography variant="h6" component="h3" className="text-center mb-5">
            {data?.title}
          </Typography>
          <div className="flex flex-col gap-3">{articleInfo}</div>
        </Paper>
        <Button size="small" className="ml-10">
          <KeyboardBackspaceIcon />
          Back to homepage
        </Button>
      </Container>
    </>
  );
};
