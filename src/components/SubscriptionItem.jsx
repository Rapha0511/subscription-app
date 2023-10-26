import Header from "./Header";
export default function SubscriptionItem({
    nom,
    description,
    prix,
    impact,
    redirect,
    carbon,
    image,
}) {
    // Fonction pour déterminer la classe CSS en fonction de l'impact
    const getImpactClass = (impact) => {
        switch (impact) {
            case "Bon":
                return "impact__green";
            case "Neutre":
                return "impact__blue";
            case "Mauvais":
                return "impact__red";
            default:
                return "";
        }
    };

    const impactClass = getImpactClass(impact);
    return (
        <div>
            <div onClick={redirect} className="sub__card">
                <div className="sub__logo">
                    <img className="sub__image" src={image} />
                </div>
                <div className="sub__info">
                    <p>{nom}</p>
                    <p>
                        <span className="sub__info-span">{prix}</span> / mois
                    </p>
                    <p className={`sub__impact ${impactClass}`}>{impact}</p>
                </div>
            </div>
        </div>
    );
}
