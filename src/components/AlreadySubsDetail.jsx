import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
<<<<<<< HEAD
import Header from "./Header";
=======
>>>>>>> 9dc6bb9d30a95d0d665147e9c6aea566aa1ea039
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
    const response = await fetch(`http://localhost:3000/abonnements/${id}`, {
      method: "DELETE",
    });

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

<<<<<<< HEAD
    return (
        <div>
            <h1>details de ton abonnement</h1>
            <p>{abonnement.nom}</p>
            <p>{abonnement.description}</p>
            <p>{abonnement.prix}</p>
            <button onClick={() => deleteSubscription(id)}>Delete</button>
            <Recommendation type={abonnement.type} carbon={abonnement.carbon} />
        </div>
    );
=======
  return (
    <div>
      <h1>details de ton abonnement</h1>
      <p>{abonnement.nom}</p>
      <p>{abonnement.description}</p>
      <p>{abonnement.prix}</p>
      <button onClick={() => deleteSubscription(id)}>Delete</button>
      <Recommendation type={abonnement.type} carbon={abonnement.carbon} />
    </div>
  );
>>>>>>> 9dc6bb9d30a95d0d665147e9c6aea566aa1ea039
}
