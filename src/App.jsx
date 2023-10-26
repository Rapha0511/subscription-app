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
    const [amount, setTotatAmount] = useState(0);

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

    const getTotalAmount = (array) => {
        let sum = array.reduce((acc, current) => acc + current.prix, 0);
        setTotatAmount(sum.toFixed(2));
    };

    useEffect(() => {
        getTotalAmount(abonnements);
    }, [abonnements]);

    useEffect(() => {
        fetchAbonnements();
    }, []);

    useEffect(() => {
        utils.filterData(abonnements, filteringOptions, setFilteredArray); // Update filteredArray when filteringOptions change
    }, [filteringOptions]);

    const arrayToDisplay = !filteredArray.length ? abonnements : filteredArray;

    return (
        <div>
            <Header />

            <FilterBar
                filteringOptions={filteringOptions}
                setFilteringOptions={setFilteringOptions}
            />
            <div className="subscription__price">
                <div>
                    <div className="subscription__title">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="40"
                                height="40"
                                rx="20"
                                fill="#E8E9F1"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22.489 14C19.43 14 17 16.213 17 19.5C17 22.886 19.527 25.5 22.489 25.5C23.232 25.5 23.94 25.339 24.587 25.046C24.707 24.9886 24.8373 24.9557 24.9702 24.9492C25.1031 24.9427 25.2359 24.9629 25.3609 25.0084C25.4859 25.0539 25.6006 25.124 25.6982 25.2144C25.7958 25.3048 25.8744 25.4138 25.9294 25.5349C25.9843 25.6561 26.0146 25.787 26.0183 25.92C26.022 26.053 25.9992 26.1854 25.9511 26.3095C25.903 26.4335 25.8306 26.5467 25.7382 26.6425C25.6458 26.7382 25.5353 26.8145 25.413 26.867C24.4947 27.2844 23.4977 27.5003 22.489 27.5C18.283 27.5 15 23.845 15 19.5C15 15.055 18.38 12 22.489 12C23.726 12 24.917 12.393 26.063 13.174C26.1755 13.2462 26.2723 13.3402 26.3478 13.4505C26.4233 13.5607 26.4759 13.685 26.5026 13.816C26.5293 13.9469 26.5294 14.0819 26.503 14.2129C26.4767 14.3439 26.4243 14.4683 26.349 14.5787C26.2738 14.6891 26.1771 14.7833 26.0648 14.8558C25.9525 14.9282 25.8269 14.9774 25.6952 15.0005C25.5636 15.0235 25.4287 15.02 25.2984 14.99C25.1682 14.96 25.0453 14.9043 24.937 14.826C24.08 14.242 23.274 14 22.489 14Z"
                                fill="#006FFD"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M13 18C13 17.7348 13.1054 17.4804 13.2929 17.2929C13.4804 17.1054 13.7348 17 14 17H23C23.2652 17 23.5196 17.1054 23.7071 17.2929C23.8946 17.4804 24 17.7348 24 18C24 18.2652 23.8946 18.5196 23.7071 18.7071C23.5196 18.8946 23.2652 19 23 19H14C13.7348 19 13.4804 18.8946 13.2929 18.7071C13.1054 18.5196 13 18.2652 13 18ZM13 21.5C13 21.2348 13.1054 20.9804 13.2929 20.7929C13.4804 20.6054 13.7348 20.5 14 20.5H22C22.2652 20.5 22.5196 20.6054 22.7071 20.7929C22.8946 20.9804 23 21.2348 23 21.5C23 21.7652 22.8946 22.0196 22.7071 22.2071C22.5196 22.3946 22.2652 22.5 22 22.5H14C13.7348 22.5 13.4804 22.3946 13.2929 22.2071C13.1054 22.0196 13 21.7652 13 21.5Z"
                                fill="#006FFD"
                            />
                        </svg>

                        <p>Le coût de vos abonnements</p>
                    </div>
                    {amount && (
                        <p className="subscription__amount">
                            Niveau actuel <br />
                            <b>{amount}</b>
                        </p>
                    )}
                </div>
            </div>
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
                            image={abonnement.image}
                            redirect={() =>
                                navigate(`/mySubDetails/${abonnement.id}`)
                            }
                        />
                    </div>
                ))}
            </div>
            <Link className="sub__link" to={"/list"}>
                Ajouter un abonnement
            </Link>
            <Recommendation />
        </div>
    );
};

export default App;
