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
    };
    return (
        <div>
            <button className="filter__button" onClick={toggleFilter}>
                Trier
            </button>
        </div>
    );
}
