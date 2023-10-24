import { useState, useEffect } from "react";
import SubscriptionItem from "./SubscriptionItem";

export default function SubscriptionList() {
  const [abonnementsList, setAbonnementsList] = useState([]);

  const fetchAbonnementsList = async () => {
    const response = await fetch("http://localhost:3000/abonnementsList");
    const res = await response.json();
    console.log(res);
    setAbonnementsList(res);
  };

  useEffect(() => {
    fetchAbonnementsList();
  }, []);

  const addSub = async (data) => {
    const response = await fetch("http://localhost:3000/abonnements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      console.log("sucess");
    } else {
      console.log("error");
    }
  };
  return (
    <div>
      <h1>Liste des abonnements</h1>

      {abonnementsList.map((abonnement) => (
        <SubscriptionItem
          key={abonnement.id}
          nom={abonnement.nom}
          description={abonnement.description}
          prix={abonnement.prix}
          actionButton={() => addSub(abonnement)}
          action="add"
        />
      ))}
    </div>
  );
}
