import React, { useEffect, useState } from "react";
import useDebounce from "@/util/debounce";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2", "Option 3"];

function Search() {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 500);

  const filteredOptions = options.filter((value) => value.includes(inputValue))

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Autocomplete
        inputValue={inputValue}
        onInputChange={(e, value) => handleInputChange(value)}
        options={filteredOptions}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" placeholder="Search" {...params.inputProps} />
          </div>
        )}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
