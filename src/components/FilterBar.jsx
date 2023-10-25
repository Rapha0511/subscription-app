import { useState } from "react";

export default function FilterBar({ filteringOptions, setFilteringOptions }) {
  const [searchInput, setSearchInput] = useState("");
  const getSearch = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    setFilteringOptions({ ...filteringOptions, name: value });
    // Call the filter function with the updated search input.
  };

  return (
    <div>
      <h1>Recherche</h1>
      <input
        type="text"
        name="search"
        value={searchInput}
        onChange={getSearch}
      />
    </div>
  );
}
