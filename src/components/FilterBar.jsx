import { useState } from "react";

export default function FilterBar({ subsArray, setFilteredArray }) {
  const [searchInput, setSearchInput] = useState("");
  const getSearch = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    // Call the filter function with the updated search input.
    const filteredArray = subsArray.filter((sub) =>
      sub.nom.toLowerCase().startsWith(value.toLowerCase().trim())
    );
    setFilteredArray(filteredArray);
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
