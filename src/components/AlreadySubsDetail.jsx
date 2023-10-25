import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AlreadySubsDetail() {
  const [abonnement, setAbonnement] = useState([]);

  let { id } = useParams();
  let navigate = useNavigate();

  const fetchAbonnement = async () => {
    const response = await fetch(`http://localhost:3000/abonnements/${id}`);
    const res = await response.json();
    setAbonnement(res);
    // Filter the data when you fetch it initially
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
      navigate("/");
    }
  };

  useEffect(() => {
    fetchAbonnement();
  }, []);

  return (
    <div>
      <h1>details de ton abonnement</h1>
      <p>{abonnement.nom}</p>
      <p>{abonnement.description}</p>
      <p>{abonnement.prix}</p>
      <button onClick={() => deleteSubscription(id)}>fonctionne plz</button>
    </div>
  );
}
