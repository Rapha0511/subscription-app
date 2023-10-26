import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionItem from "./SubscriptionItem";

export default function Recommendation({ type }) {
  const [filteredArray, setFilteredArray] = useState([]);
  const [maxFootPrintSub, setMaxFootPrintsub] = useState([]);
  const [NonSubList, setNonSubList] = useState([]);
  let navigate = useNavigate();

  const getMaxFootPrintSub = async () => {
    const response = await fetch(
      `http://localhost:3000/abonnements?_sort=carbon&_order=desc&_limit=1`
    );
    const res = await response.json();
    setMaxFootPrintsub(res[0]);
  };

  const getNonSubList = async (maxFootPrintSub) => {
    const response = await fetch(
      `http://localhost:3000/abonnementsList?carbon_lte=${maxFootPrintSub.carbon}`
    );
    const res = await response.json();
    console.log(res, "ressssssss");
    setNonSubList(res);
  };

  useEffect(() => {
    getMaxFootPrintSub();
    getNonSubList(maxFootPrintSub);
  }, [maxFootPrintSub.carbon]);

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
