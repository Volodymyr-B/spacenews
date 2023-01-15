import { Link, useLocation } from "react-router-dom";

import { Button, Card, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export const ShowError = () => {
  const { pathname } = useLocation();
  const refreshPage = () => {
    document.location.reload();
  };

  return (
    <>
      <Card
        elevation={4}
        className="md:w-96 h-64 flex flex-col gap-4 mt-10 m-auto"
      >
        <div className="w-full h-5 bg-red-300 " />
        <div className="text-center ">
          <ErrorIcon color="error" fontSize="large" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <Typography variant="h6">Oops something went wrong :(</Typography>
          <Typography variant="h6">Please, try again later</Typography>
        </div>
        <div className="ml-8">
          {pathname === "/" ? (
            <Button variant="contained" onClick={refreshPage}>
              refresh
            </Button>
          ) : (
            <Button variant="contained" component={Link} to={"/"}>
              home
            </Button>
          )}
        </div>
      </Card>
    </>
  );
};
