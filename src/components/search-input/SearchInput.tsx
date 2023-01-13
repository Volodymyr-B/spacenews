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
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    if (debouncedValue.trim()) {
      setSearch(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="flex items-center sm:w-1/2 mb-5">
      <TextField
        size="small"
        fullWidth
        placeholder="
        What do we want to search today??"
        value={inputValue}
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
