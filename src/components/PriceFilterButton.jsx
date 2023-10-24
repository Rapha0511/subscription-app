import { useState } from "react";

export default function PriceFilterButton({
  filteringOptions,
  setFilteringOptions,
}) {
  const toggleFilter = () => {
    const { price } = filteringOptions;
    if (price === null) {
      setFilteringOptions({ ...filteringOptions, price: true });
    } else {
      setFilteringOptions({ ...filteringOptions, price: !price });
    }
    console.log(price);
  };
  return (
    <div>
      <button onClick={toggleFilter}>Asc/Desc</button>
    </div>
  );
}
