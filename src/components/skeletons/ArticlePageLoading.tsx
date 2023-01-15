import { Container, Paper, Skeleton } from "@mui/material";

export const ArticlePageLoading = () => {
  return (
    <>
      <Skeleton variant="rectangular" className="h-56" />
      <Container maxWidth="xl" className="-mt-16 absolute left-0 right-0">
        <Paper
          elevation={4}
          className="h-[55vh] w-full pt-11 flex flex-col items-center gap-6"
        >
          <Skeleton variant="rounded" className="w-2/3 h-8" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <Skeleton variant="rounded" className="w-3/4 h-6" />
          <div className="pb-3 w-full">
            <Skeleton variant="rounded" className="w-40 h-8 ml-[10%]" />
          </div>
        </Paper>
      </Container>
    </>
  );
};
