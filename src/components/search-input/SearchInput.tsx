import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "../../hooks/useDebounce";

import { Divider, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const SearchInput: FC<SearchInputProps> = ({ setSearch }) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue]);

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
