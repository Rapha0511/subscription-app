export default function SubscriptionItem({
    nom,
    description,
    prix,
    impact,
    actionButton,
    action,
}) {
    const isAddAction = action === "delete" ? "delete" : "add";

    return (
        <div>
            <div className="sub__card">
                <div className="sub__logo">
                    <img src="https://via.placeholder.com/40x40" />
                </div>
                <div className="sub__info">
                    <p>{nom}</p>
                    <p>
                        <span className="sub__info-span">{prix}</span> / mois
                    </p>
                    <p className="sub__impact">{impact}</p>
                    <button onClick={actionButton}>{isAddAction}</button>
                </div>
            </div>
        </div>
    );
}
