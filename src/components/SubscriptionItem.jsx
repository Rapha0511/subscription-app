export default function SubscriptionItem({
  nom,
  description,
  prix,
  redirect,
  carbon,
}) {
  return (
    <div
      style={{ border: "1px solid black", width: "200px" }}
      onClick={redirect}
    >
      <p>{nom}</p>
      <p>{description}</p>
      <p>{prix}</p>
      <p>{carbon}</p>
    </div>
  );
}
