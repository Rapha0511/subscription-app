import { useState, useEffect } from "react";
import SubscriptionItem from "./SubscriptionItem";
import FilterBar from "./FilterBar";
import PriceFilterButton from "./PriceFilterButton";

export default function SubscriptionList() {
  const [abonnementsList, setAbonnementsList] = useState([]);
  const [filteringOptions, setFilteringOptions] = useState({
    name: "",
    price: null,
  });
  const [filteredArray, setFilteredArray] = useState([]);

  const fetchAbonnementsList = async () => {
    const response = await fetch("http://localhost:3000/abonnementsList");
    const res = await response.json();
    setAbonnementsList(res);
    // Filter the data when you fetch it initially
    filterData(res, filteringOptions);
  };

  /**
   *
   * @param {Array} data an array containing all offers
   * @param {Object} filteringOptions an object containing the filtering option, this object is filled
   * when searching or clicking on price filtering button
   */
  const filterData = (data, filteringOptions) => {
    const { name, price } = filteringOptions;
    let newFilteredArray = [...data]; // Create a copy to avoid mutating original data

    if (name !== "") {
      newFilteredArray = newFilteredArray.filter((sub) =>
        sub.nom.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (price !== null) {
      if (price) {
        newFilteredArray = newFilteredArray
          .slice()
          .sort((a, b) => a.prix - b.prix);
      } else {
        newFilteredArray = newFilteredArray
          .slice()
          .sort((a, b) => b.prix - a.prix);
      }
    }

    setFilteredArray(newFilteredArray); // Update the filtered array state
  };

  useEffect(() => {
    fetchAbonnementsList();
  }, []);

  useEffect(() => {
    filterData(abonnementsList, filteringOptions); // Update filteredArray when filteringOptions change
  }, [filteringOptions]);

  /**
   *
   * @param {Object} data the object to add
   */
  const addSub = async (data) => {
    const response = await fetch("http://localhost:3000/abonnements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      console.log("success");
    } else {
      console.log("error");
    }
  };

  const arrayToDisplay = !filteredArray.length
    ? abonnementsList
    : filteredArray;

  return (
    <div>
      <FilterBar
        filteringOptions={filteringOptions}
        setFilteringOptions={setFilteringOptions}
      />
      <PriceFilterButton
        filteringOptions={filteringOptions}
        setFilteringOptions={setFilteringOptions}
      />
      <h1>Liste des abonnements</h1>
      {arrayToDisplay.map((abonnement) => (
        <SubscriptionItem
          key={abonnement.id}
          nom={abonnement.nom}
          description={abonnement.description}
          prix={abonnement.prix}
          actionButton={() => addSub(abonnement)}
          action="add"
        />
      ))}
    </div>
  );
}
