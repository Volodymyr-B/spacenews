import { Paper, Skeleton } from "@mui/material";

export const NewsCardLoading = () => {
  return (
    <>
      <Paper elevation={4} className="w-[310px] lg:w-[31%]">
        <Skeleton variant="rounded" className="w-full h-32 mb-4" />
        <div className="flex flex-col gap-3 pl-3 mb-9">
          <Skeleton variant="rectangular" className="w-52 h-5" />
          <Skeleton variant="rectangular" className="w-3/4 h-7" />
          <Skeleton variant="rectangular" className="w-4/5 h-7" />
          <Skeleton variant="rectangular" className="w-20 h-5" />
        </div>
        <Skeleton variant="rounded" className="w-32 h-6 ml-3 mb-4" />
      </Paper>
    </>
  );
};
