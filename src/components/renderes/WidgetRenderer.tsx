import Widget from "../../interfaces/Widget";
export function WidgetRenderer({
  isSpecialCard,
  title,
  description,
  id,
  rating,
  created,
  updated,
}: Widget) {
  return (
    <div className="col-12 p-3">
      <div className={isSpecialCard ? "card specialCard" : "card"}>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{rating}/10</p>
      </div>
    </div>
  );
}

export default WidgetRenderer;
