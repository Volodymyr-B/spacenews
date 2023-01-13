import { Container, Divider, Skeleton, Stack } from "@mui/material";
import { NewsCardSkeleton } from "../../components/news-card/NewsCardSkeleton";

export const HomePageSkeleton = () => {
  return (
    <>
      <Container maxWidth="xl" className="flex flex-col gap-8">
        <Stack spacing={2}>
          <Skeleton variant="rectangular" className="w-40 h-6" />
          <Skeleton variant="rounded" className="sm:w-2/4 h-9" />
          <Skeleton variant="rectangular" className="w-28 h-6" />
        </Stack>
        <Divider />
        <div className="flex justify-center flex-wrap gap-8">
          {new Array(9).fill("").map((_, index) => (
            <NewsCardSkeleton key={index} />
          ))}
        </div>
      </Container>
    </>
  );
};
