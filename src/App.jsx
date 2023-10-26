import React, { useState, useEffect } from "react";
import SubscriptionItem from "./components/SubscriptionItem";
import { Link, useNavigate } from "react-router-dom";
import FilterBar from "./components/FilterBar";
import PriceFilterButton from "./components/PriceFilterButton";
import Recommendation from "./components/recommendation";
import utils from "./utils/utils";

const App = () => {
  const [abonnements, setAbonnements] = useState([]);
  const [filteringOptions, setFilteringOptions] = useState({
    name: "",
    price: null,
  });
  const [filteredArray, setFilteredArray] = useState([]);
  let navigate = useNavigate();
  /**
   * Get all subs
   */
  const fetchAbonnements = async () => {
    const response = await fetch("http://localhost:3000/abonnements");
    const res = await response.json();
    console.log(res);
    setAbonnements(res);
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
          carbon={abonnement.carbon}
          redirect={() => navigate(`/mySubDetails/${abonnement.id}`)}
        />
      ))}
      <Link to={"/list"}>liste d'abonnement</Link>
      <Recommendation />
    </div>
  );
};

export default App;
