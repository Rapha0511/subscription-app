import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Details() {
    const [abonnement, setAbonnement] = useState([]);

    let { id } = useParams();
    let navigate = useNavigate();
    const fetchAbonnement = async () => {
        const response = await fetch(
            `http://localhost:3000/abonnementsList/${id}`
        );
        const res = await response.json();
        setAbonnement(res);
        // Filter the data when you fetch it initially
    };

    useEffect(() => {
        fetchAbonnement();
    }, []);

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
            deleteFromList(data.id);
            navigate("/");
        } else {
            console.log("error");
        }
    };

    const deleteFromList = async (id) => {
        const response = await fetch(
            `http://localhost:3000/abonnementsList/${id}`,
            {
                method: "DELETE",
            }
        );

        if (response.status === 204) {
            console.log("error");
        } else {
            console.log("success");
        }
    };

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
                onClick={() => addSub(abonnement)}
            >
                Je me suis abonné
            </button>
        </div>
    );
}
