import React, { useState, useEffect } from "react";
import SubscriptionItem from "./components/SubscriptionItem";
import { Link } from "react-router-dom";
const App = () => {
  const [abonnements, setAbonnements] = useState([]);

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

  return (
    <div>
      <h1>Liste des abonnements</h1>

      {abonnements.map((abonnement) => (
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
