import { useState, useEffect } from "react";
import SubscriptionItem from "./SubscriptionItem";
import FilterBar from "./FilterBar";

export default function SubscriptionList() {
  const [abonnementsList, setAbonnementsList] = useState([]);
  const [filterdArray, setFilteredArray] = useState(abonnementsList);
  const fetchAbonnementsList = async () => {
    const response = await fetch("http://localhost:3000/abonnementsList");
    const res = await response.json();
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

  const arrayToDisplay = !filterdArray.length ? abonnementsList : filterdArray;

  return (
    <div>
      <FilterBar
        subsArray={abonnementsList}
        setFilteredArray={setFilteredArray}
      />
      <h1>Liste des abonnements</h1>
      {arrayToDisplay.map((abonnement) => (
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
