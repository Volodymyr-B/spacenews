import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

export const ErrorPage = () => {
  return (
    <>
      <div className="h-[100vh] flex flex-col items-center justify-between">
        <div className="w-full h-5 bg-red-300 " />
        <div className="text-center">
          <Typography className="mb-5">
            Page you are looking for does not exist or is not available
          </Typography>
          <Button variant="contained" component={Link} to={"/"}>
            home
          </Button>
        </div>
        <div />
      </div>
    </>
  );
};
