export default function SubscriptionItem({
    nom,
    description,
    prix,
    impact,
    redirect,
    carbon,
}) {
    return (
        <div>
            <div onClick={redirect} className="sub__card">
                <div className="sub__logo">
                    <img src="https://via.placeholder.com/40x40" />
                </div>
                <div className="sub__info">
                    <p>{nom}</p>
                    <p>
                        <span className="sub__info-span">{prix}</span> / mois
                    </p>
                    <p className="sub__impact">{impact}</p>
                </div>
            </div>
        </div>
    );
}
