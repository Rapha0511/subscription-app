import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Recommendation from "./recommendation";

export default function AlreadySubsDetail() {
    const [abonnement, setAbonnement] = useState([]);

    let { id } = useParams();
    let navigate = useNavigate();

    const fetchAbonnement = async () => {
        const response = await fetch(`http://localhost:3000/abonnements/${id}`);
        const res = await response.json();
        setAbonnement(res);
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
            console.log("error");
        } else {
            console.log("success");
            addBackToList();
        }
    };

    const addBackToList = async () => {
        const response = await fetch("http://localhost:3000/abonnementsList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...abonnement, id: uuidv4() }),
        });

        if (response.status === 201) {
            console.log("success");
            navigate("/");
        } else {
            console.log("error");
        }
    };

    useEffect(() => {
        fetchAbonnement();
    }, []);

    return (
        <div>
            <div className="details__title">
                <p className="details__name">
                    {abonnement.nom}
                    <br />
                    <span className="details__type">{abonnement.type}</span>
                </p>
                <p className="details__carbon">{abonnement.carbon} CO2</p>
            </div>
            <div className="details__image">
                <img src={"../" + abonnement.image} />
            </div>
            <p>Impact environnemental </p>
            <p>Description de l'outil : {abonnement.description}</p>
            <p>Actualités</p>
            <button
                className="details__button"
                onClick={() => deleteSubscription(id)}
            >
                Résilier
            </button>
            <Recommendation carbon={abonnement.carbon} type={abonnement.type} />
        </div>
    );
}
