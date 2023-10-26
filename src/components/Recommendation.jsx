import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionItem from "./SubscriptionItem";

export default function Recommendation({ type }) {
  const [filteredArray, setFilteredArray] = useState([]);
  const [maxFootPrintSub, setMaxFootPrintsub] = useState([]);
  const [NonSubList, setNonSubList] = useState([]);
  let navigate = useNavigate();

  const getMaxFootPrintSub = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/abonnements?_sort=carbon&_order=desc&_limit=1`
      );
      const res = await response.json();
      setMaxFootPrintsub(res[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getNonSubList = async (maxFootPrintSub) => {
    try {
      if (maxFootPrintSub && maxFootPrintSub.carbon) {
        const response = await fetch(
          `http://localhost:3000/abonnementsList?carbon_lte=${maxFootPrintSub.carbon}`
        );
        const res = await response.json();
        setNonSubList(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMaxFootPrintSub();
  }, []);

  useEffect(() => {
    if (maxFootPrintSub && maxFootPrintSub.carbon) {
      getNonSubList(maxFootPrintSub);
    }
  }, [maxFootPrintSub]);

  return (
    <div style={{ display: "flex" }}>
      {NonSubList.length
        ? NonSubList.map((nonSub) => (
            <SubscriptionItem
              key={nonSub.id}
              nom={nonSub.nom}
              prix={nonSub.prix}
              description={nonSub.description}
              carbon={nonSub.carbon}
              redirect={() => navigate(`/details/${nonSub.id}`)}
            />
          ))
        : "Aucune Recommandation"}
    </div>
  );
}
