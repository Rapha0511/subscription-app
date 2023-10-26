import { useState } from "react";

export default function FilterBar({ filteringOptions, setFilteringOptions }) {
  const [searchInput, setSearchInput] = useState("");
  const getSearch = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    setFilteringOptions({ ...filteringOptions, name: value });
  };

  return (
    <div>
      <input
        className="filter__bar"
        type="text"
        name="search"
        placeholder="Trouver ou rajouter un abonnements"
        value={searchInput}
        onChange={getSearch}
      />
    </div>
  );
}
