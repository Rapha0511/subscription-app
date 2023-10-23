export default function SubscriptionItem({
  nom,
  description,
  prix,
  actionButton,
  action,
}) {
  const isAddAction = action === "delete" ? "delete" : "add";

  return (
    <div style={{ border: "1px solid black", width: "200px" }}>
      <p>{nom}</p>
      <p>{description}</p>
      <p>{prix}</p>
      <button onClick={actionButton}>{isAddAction}</button>
    </div>
  );
}
