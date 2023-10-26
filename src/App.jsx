import React, { useState, useEffect } from "react";
import SubscriptionItem from "./components/SubscriptionItem";
import { Link } from "react-router-dom";
import FilterBar from "./components/FilterBar";
import PriceFilterButton from "./components/PriceFilterButton";
import utils from "./utils/utils";
import Header from "./components/Header";
import "./App.css";

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
        const response = await fetch(
            `http://localhost:3000/abonnements/${id}`,
            {
                method: "DELETE",
            }
        );

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
            <Header />

            <FilterBar
                filteringOptions={filteringOptions}
                setFilteringOptions={setFilteringOptions}
            />
            <PriceFilterButton
                filteringOptions={filteringOptions}
                setFilteringOptions={setFilteringOptions}
            />
            <div className="subscription__grid">
                {arrayToDisplay.map((abonnement) => (
                    <div
                        key={abonnement.id}
                        className="subscription__container"
                    >
                        <SubscriptionItem
                            key={abonnement.id}
                            nom={abonnement.nom}
                            description={abonnement.description}
                            prix={abonnement.prix}
                            impact={abonnement.impact}
                            actionButton={() =>
                                deleteSubscription(abonnement.id)
                            }
                            action="delete"
                        />
                    </div>
                ))}
            </div>
            <Link to={"/list"}>liste d'abonnement</Link>
        </div>
    );
};

export default App;
