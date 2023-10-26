import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionItem from "./SubscriptionItem";

<<<<<<< HEAD
export default function Recommendation({ type, carbon }) {
    const [filteredArray, setFilteredArray] = useState([]);
    const [maxFootPrintSub, setMaxFootPrintsub] = useState([]);
    const [NonSubList, setNonSubList] = useState([]);
    let navigate = useNavigate();
=======

export default function Recommendation({ type, carbon }) {
  const [maxFootPrintSub, setMaxFootPrintsub] = useState([]);
  const [NonSubList, setNonSubList] = useState([]);
  let navigate = useNavigate();
>>>>>>> 9dc6bb9d30a95d0d665147e9c6aea566aa1ea039

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
<<<<<<< HEAD

    const getNonSubList = async (maxFootPrintSub, carbon, type) => {
        try {
            if (maxFootPrintSub && maxFootPrintSub.carbon) {
                const response = await fetch(
                    `http://localhost:3000/abonnementsList?carbon_lte=${maxFootPrintSub.carbon}`
                );
                const res = await response.json();
                setNonSubList(res);
            }
            if (type && carbon) {
                const response = await fetch(
                    `http://localhost:3000/abonnementsList?carbon_lte=${carbon}&type=${type}`
                );
                const res = await response.json();
                setNonSubList(res);
            }
        } catch (error) {
            console.error(error);
        }
    };
=======
  const getNonSubList = async (maxFootPrintSub, carbon, type) => {
    try {
      if (maxFootPrintSub && maxFootPrintSub.carbon) {
        const response = await fetch(
          `http://localhost:3000/abonnementsList?carbon_lte=${maxFootPrintSub.carbon}`
        );
        const res = await response.json();
        setNonSubList(res);
      }
      if (type && carbon) {
        const response = await fetch(
          `http://localhost:3000/abonnementsList?carbon_lte=${carbon}&type=${type}`
        );
        const res = await response.json();
        setNonSubList(res);
      }
    } catch (error) {
      console.error(error);
    }
  };
>>>>>>> 9dc6bb9d30a95d0d665147e9c6aea566aa1ea039

    useEffect(() => {
        getMaxFootPrintSub();
    }, []);

<<<<<<< HEAD
    useEffect(() => {
        if (maxFootPrintSub && maxFootPrintSub.carbon) {
            getNonSubList(maxFootPrintSub, carbon, type);
        }
    }, [maxFootPrintSub]);
=======
  useEffect(() => {
    if (maxFootPrintSub && maxFootPrintSub.carbon) {
      getNonSubList(maxFootPrintSub, carbon, type);
    }
  }, [maxFootPrintSub]);
>>>>>>> 9dc6bb9d30a95d0d665147e9c6aea566aa1ea039

    return (
        <div>
            <h2>Nos recommandations</h2>
            <div className="subscription__grid">
                {NonSubList.length
                    ? NonSubList.map((nonSub) => (
                          <SubscriptionItem
                              key={nonSub.id}
                              nom={nonSub.nom}
                              prix={nonSub.prix}
                              description={nonSub.description}
                              carbon={nonSub.carbon}
                              impact={nonSub.impact}
                              image={nonSub.image}
                              redirect={() => navigate(`/details/${nonSub.id}`)}
                          />
                      ))
                    : "Aucune Recommandation"}
            </div>
        </div>
    );
}
