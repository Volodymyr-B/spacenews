import React, {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "../../hooks/useDebounce";

import { Button, Divider, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
  setSearch: Dispatch<SetStateAction<string>>;
  refetch: () => any;
}

export const SearchInput: FC<SearchInputProps> = ({ setSearch, refetch }) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const refetchHandler = () => {
    setSearch("");
    setInputValue("");
    refetch();
  };
  useEffect(() => {
    if (debouncedValue.trim()) {
      setSearch(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="flex items-center gap-3 sm:w-1/2 mb-5">
      <TextField
        size="small"
        fullWidth
        autoComplete="off"
        placeholder="Search"
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
      <Button variant="contained" onClick={refetchHandler}>
        refresh
      </Button>
    </div>
  );
};
