import React, { Dispatch, FC, SetStateAction } from "react";
import { Divider, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}

export const SearchInput: FC<SearchInputProps> = ({ value, changeValue }) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeValue(e.target.value);

  return (
    <div className="flex items-center sm:w-1/2 mb-5">
      <TextField
        size="small"
        fullWidth
        placeholder="
        What do we want to search today??"
        value={value}
        onChange={inputHandler}
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
