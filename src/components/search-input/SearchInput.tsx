import { Divider, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => {
  return (
    <div className="flex items-center sm:w-1/2 mb-5">
      <TextField
        size="small"
        fullWidth
        placeholder="
        What do we want to search today??"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
              <Divider className="h-7 m-1.5" orientation="vertical" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
