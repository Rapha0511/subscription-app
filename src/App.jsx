import React, { useState, useEffect } from "react";
import SubscriptionItem from "./components/SubscriptionItem";
import { Link } from "react-router-dom";
import FilterBar from "./components/FilterBar";
import PriceFilterButton from "./components/PriceFilterButton";
import utils from "./utils/utils";

const App = () => {
  const [abonnements, setAbonnements] = useState([]);
  const [filteringOptions, setFilteringOptions] = useState({
    name: "",
    price: null,
  });
  const [filteredArray, setFilteredArray] = useState([]);

  /**
   * Get all subs
   */
  const fetchAbonnements = async () => {
    const response = await fetch("http://localhost:3000/abonnements");
    const res = await response.json();
    console.log(res);
    setAbonnements(res);
  };

  /**
   * remove one sub
   */
  const deleteSubscription = async (id) => {
    const response = await fetch(`http://localhost:3000/abonnements/${id}`, {
      method: "DELETE",
    });

    if (response.status === 204) {
      console.log("sub successfully removed");
    } else {
      console.log("error while removing sub");
    }
    fetchAbonnements();
  };

  useEffect(() => {
    fetchAbonnements();
  }, []);

  useEffect(() => {
    utils.filterData(abonnements, filteringOptions, setFilteredArray);
  }, [filteringOptions]);

  const arrayToDisplay = !filteredArray.length ? abonnements : filteredArray;

  return (
    <div>
      <h1>Liste des abonnements</h1>
      <FilterBar
        filteringOptions={filteringOptions}
        setFilteringOptions={setFilteringOptions}
      />
      <PriceFilterButton
        filteringOptions={filteringOptions}
        setFilteringOptions={setFilteringOptions}
      />
      {arrayToDisplay.map((abonnement) => (
        <SubscriptionItem
          key={abonnement.id}
          nom={abonnement.nom}
          description={abonnement.description}
          prix={abonnement.prix}
          actionButton={() => deleteSubscription(abonnement.id)}
          action="delete"
        />
      ))}
      <Link to={"/list"}>liste d'abonnement</Link>
    </div>
  );
};

export default App;
