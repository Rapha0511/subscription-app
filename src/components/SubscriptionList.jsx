import Header from "./Header";
import { useState, useEffect } from "react";
import SubscriptionItem from "./SubscriptionItem";
import FilterBar from "./FilterBar";
import PriceFilterButton from "./PriceFilterButton";
import utils from "../utils/utils";
import { useNavigate } from "react-router-dom";

export default function SubscriptionList() {
    const [abonnementsList, setAbonnementsList] = useState([]);
    const [filteringOptions, setFilteringOptions] = useState({
        name: "",
        price: null,
    });
    const [filteredArray, setFilteredArray] = useState([]);
    const navigate = useNavigate();

    const fetchAbonnementsList = async () => {
        const response = await fetch("http://localhost:3000/abonnementsList");
        const res = await response.json();
        setAbonnementsList(res);
        // Filter the data when you fetch it initially
    };

    useEffect(() => {
        fetchAbonnementsList();
    }, []);

    useEffect(() => {
        utils.filterData(abonnementsList, filteringOptions, setFilteredArray); // Update filteredArray when filteringOptions change
    }, [filteringOptions]);

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
            {arrayToDisplay.length
                ? arrayToDisplay.map((abonnement) => (
                      <SubscriptionItem
                          key={abonnement.id}
                          nom={abonnement.nom}
                          description={abonnement.description}
                          prix={abonnement.prix}
                          carbon={abonnement.carbon}
                          impact={abonnement.impact}
                          image={abonnement.image}
                          redirect={() => navigate(`/details/${abonnement.id}`)}
                      />
                  ))
                : "Aucun abonnement disponible"}
        </div>
    );
}
