import React, { useState, useEffect } from "react";
import SubscriptionItem from "./components/SubscriptionItem";
import { Link, useNavigate } from "react-router-dom";
import FilterBar from "./components/FilterBar";
import PriceFilterButton from "./components/PriceFilterButton";
import Recommendation from "./components/recommendation";
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
                            carbon={abonnement.carbon}
                            impact={abonnement.impact}
                            redirect={() =>
                                navigate(`/mySubDetails/${abonnement.id}`)
                            }
                        />
                    </div>
                ))}
            </div>
            <Link to={"/list"}>liste d'abonnement</Link>
            <Recommendation />
        </div>
    );
};

export default App;
