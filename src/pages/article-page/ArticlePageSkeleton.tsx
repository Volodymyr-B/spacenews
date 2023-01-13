import { Container, Paper, Skeleton } from "@mui/material";

export const ArticlePageSkeleton = () => {
  return (
    <>
      <Skeleton variant="rectangular" className="h-56" />
      <Container maxWidth="xl" className="m-auto">
        <Paper
          elevation={4}
          className="h-96 w-full pt-11 flex flex-col items-center gap-6"
        >
          <Skeleton variant="rounded" className="w-2/3 h-8" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <div className="w-full">
            <Skeleton variant="rounded" className="w-40 h-8 ml-10" />
          </div>
        </Paper>
      </Container>
    </>
  );
};
